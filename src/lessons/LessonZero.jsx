import correct_ex from '../assets/correct-ex.png'
import incorrect_ex from '../assets/incorrect-ex.png'
const LessonZero = (
    <div className="lesson-zero">
        <h2><u>Tutorial</u></h2>
        <p>Welcome to <b>LogicBox</b>, the block-based theorem verifying tool to assist in your learning!</p>
        <p>There are <b>two modes</b> in LogicBox:</p>
        <p><b><u>Lessons</u></b> provides a structured lesson plan to take you through the basics of Propositional Logic and Natural Deduction. Exercises are provided at the bottom of each lesson to help you grow your skills and understanding.</p>
        <p><b><u>SandBox Mode</u></b> allows you to construct your own proofs freely. No assumptions are loaded into the sandbox, allowing you to add your own with the <i>Implication Introduction [→I]</i> rule.</p>
        <p>To switch between these modes, use the toggle switch in the top right corner.</p>
        <h3><u>Building Proofs</u></h3>
        <p>To construct proofs, simply drag the neccesary inference rules from the toolbox on the left to the sandbox on the right.</p>
        <p>Similar to the bottom-to-top fashion of constructing blocks on paper, inference rule blocks must be dropped into the <b><u>top holes</u></b> of other inference rule blocks. Dropping them into the bottom holes will result in an incorrect proof.</p>
        <p>For illustration, here is an example of correct use.</p>
        <img src={correct_ex} width="400"/>
        <p>And here is an example of incorrect use.</p>
        <img src={incorrect_ex} width="400"/>
        <br />
        <p>When you are ready to go, click on to the next lesson!</p>
        <h2><u>Happy proving!</u></h2>
    </div>
);
export default LessonZero;