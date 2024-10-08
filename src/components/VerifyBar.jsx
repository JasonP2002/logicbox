import { useState } from 'react';

import Blockly from 'blockly';
import {javascriptGenerator} from 'blockly/javascript';
import '../logic_blocks/custom_blocks.js';

import { parser } from '../utils/ProofParser.js';
import { verifier } from '../utils/ProofVerifier.js';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const formatError = (error) => {
    const error_message = ["Invalid ", " application."]
    switch (error) {
        case 'imp_int':
            return error_message[0]+'Implication Introduction [→I]'+error_message[1]
        case 'imp_elim':
            return error_message[0]+'Implication Elimination [→E]'+error_message[1]
        case 'and_int':
            return error_message[0]+'And Introduction [∧I]'+error_message[1]
        case 'and_elim_left':
            return error_message[0]+'And Elimination Left [∧El]'+error_message[1]
        case 'and_elim_right':
            return error_message[0]+'And Elimination Right [∧Er]'+error_message[1]
        case 'or_int_left':
            return error_message[0]+'Or Introduction Left [∨Il]'+error_message[1]
        case 'or_int_right':
            return error_message[0]+'Or Introduction Right [∨Ir]'+error_message[1]
        case 'or_elim':
            return error_message[0]+'Or Elimination [∨E]'+error_message[1]
        case 'leaf_check':
            return "Invalid Atom Cancellation - please check your proof's assumptions."
        case 'block_error':
            return "Inference rule block found in a conclusion hole - please ensure correct use of inference rule blocks."
        case 'incorrect_ex':
            return "Incorrect Exercise Solved - please check the current exercise at the bottom of the sidebar."
        default:
            return "Error!"
    }
}

function VerifyBar (props) {
    const default_verify = [false, '[]', []];
    const [verify, setVerify] = useState(default_verify)

    const [popup, setPopup] = useState(false);
    const closePopup = () => {
        setPopup(false);
        setVerify(default_verify)
    }

    const generateProof = () => {
        const proof = '(' + (javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace())).replace(';', ')');
        let tree = parser(proof)

        if ((props.ex !== '') && (tree.conc !== props.ex)) {
            setVerify([false, 'incorrect_ex', props.assums])
        } else {
            setVerify(verifier(tree, props.assums, props.ex));
        }

        setPopup(true);
    }

    return (
        <div className="bottom-bar">

            <button onClick={generateProof} className="verify-btn">Verify</button>

            {/*PopUp Component */}
            <Popup open={popup} closeOnDocumentClick onClose={closePopup} 
                contentStyle={{margin: "auto",  width: "50%", padding: "5px", color: "white", background: "darkcyan"}}> 
                <div className='modal'>
                    <a className="close-popup" onClick={closePopup}>
                        &times;
                    </a>
                    <div className="pop-up">
                        <p>Proof is {verify[0] ? "valid!" : "invalid!"}</p>
                        <p>{verify[0] ? "" : formatError(verify[1])}</p>
                        <p>{verify[1] === "incorrect_ex" ? "If you wish to practice without exercises, please enter SandBox Mode." : ""}</p>
                    </div>
                </div>
            </Popup>

        </div>
    );
}
export default VerifyBar;