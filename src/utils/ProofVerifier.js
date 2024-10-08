const conc_split = '`'

export function verifier(current_proof, assums) {
    let valid = [false, '', assums] //[isValid, error, assumptions]
    //if isValid, then error = ''
    //else, error = 'rule_used_incorrectly'
    const current_rule = current_proof.rule

    if (current_rule == '') {
        return [false, 'block_error', []]
    }
    //Validate use of current rule
    switch(current_rule) {
        case '→I':
            valid = imp_int(current_proof, assums)
            break
        case '→E':
            valid = imp_elim(current_proof, assums)
            break
        case '∧I':
            valid = and_int(current_proof, assums)
            break
        case '∧El':
            valid = and_elim_left(current_proof, assums)
            break
        case '∧Er':
            valid = and_elim_right(current_proof, assums)
            break
        case '∨Il':
            valid = or_int_left(current_proof, assums)
            break
        case '∨Ir':
            valid = or_int_right(current_proof, assums)
            break
        case '∨E':
            valid = or_elim(current_proof, assums)
            break
        default:
            valid = cancel(current_proof, assums)
    }

    //If current rule was used correctly
    if (valid[0]) {
        //Validate rest of rule uses
        let new_assums = valid[2]
        let new_valid = [false, '', assums]
        for (let i = 0; i < current_proof.children.length; i++) {
            //Verify next rule use, with correct set of assumptions
            new_valid = verifier(current_proof.children[i], new_assums)

            //If incorrect use of a rule is found, stop checking validity of other rules
            if (!new_valid[0]) {
                return new_valid
            }
        }
    }

    return valid
}

//Cancellation of an atom
function cancel(current_proof, assums) {
    //If atom cancelled is in the assumptions
    if (assums.includes(current_proof.conc)) {
        return [true, '', assums]
    }
    return [false, 'leaf_check', assums]
}

//Implication Rules
function imp_int(current_proof, assums) {
    let conc = splitStatement(current_proof.conc, '→')

    if (current_proof.children.length == 1) {
        let prem = current_proof.children[0].conc

        if (prem == conc[1]) {
            let new_assums = [...assums, conc[0]]
            return [true, '', new_assums]
        }
    }
    return [false, 'imp_int', assums]
}
function imp_elim(current_proof, assums) {
    let conc = current_proof.conc;

    if (current_proof.children.length == 2) {
        let prem_one = current_proof.children[0].conc
        let prem_two = current_proof.children[1].conc

        if (prem_one == '(' + prem_two + '→' + conc + ')') {
            return [true, '', assums]
        }
    } 
    return [false, 'imp_elim', assums]
}

//And Rules
function and_int(current_proof, assums) {
    let conc = current_proof.conc;

    if (current_proof.children.length == 2) {
        let prem_one = current_proof.children[0].conc
        let prem_two = current_proof.children[1].conc

        if (conc == '(' + prem_one + '∧' + prem_two + ')') {
            return [true, '', assums]
        }
    } 
    return [false, 'and_int', assums]
    
}
function and_elim_left(current_proof, assums) {
    if (current_proof.children.length == 1) {
        let conc = current_proof.conc;
        let prem = splitStatement(current_proof.children[0].conc, '∧')

        if (prem[0] == conc) {
            return [true, '', assums]
        }
    }

    return [false, 'and_elim_left', assums]
}
function and_elim_right(current_proof, assums) {
    if (current_proof.children.length == 1) {
        let conc = current_proof.conc;
        let prem = splitStatement(current_proof.children[0].conc, '∧')
        
        if (prem[1] == conc) {
            return [true, '', assums]
        }
    }

    return [false, 'and_elim_right', assums]
}

//Or Rules
function or_int_left(current_proof, assums) {
    if (current_proof.children.length == 1) {
        let conc = splitStatement(current_proof.conc, '∨')
        let prem = current_proof.children[0].conc
        
        if (prem == conc[0]) {
            return [true, '', assums]
        }
    }

    return [false, 'or_int_left', assums]
    
}
function or_int_right(current_proof, assums) {
    if (current_proof.children.length == 1) {
        let conc = splitStatement(current_proof.conc, '∨')
        let prem = current_proof.children[0].conc
        
        if (prem == conc[1]) {
            return [true, '', assums]
        }
    }

    return [false, 'or_int_right', assums]
}
function or_elim(current_proof, assums) {
    if (current_proof.children.length == 3) {
        let conc = current_proof.conc
        let prem_one = splitStatement(current_proof.children[0].conc, '∨')
        let prem_two = splitStatement(current_proof.children[1].conc, '→')
        let prem_thr = splitStatement(current_proof.children[2].conc, '→')

        if (prem_one.length == 2 && prem_two.length == 2 && prem_thr.length == 2) {
            
            if ((conc == prem_two[1]) //C matches A → C
                && (conc == prem_thr[1]) //C matches B → C
                && (prem_one[0] == prem_two[0]) //A ∨ B matches A → C
                && (prem_one[1] == prem_thr[0])) { //A ∨ B matches B → C
                    return [true, '', assums]
            }
        }
    }
    return [false, 'or_elim', assums]
}

/*Helper function to split a statement by a certain logical connective*/
/*Returns the left and right side of a connective as a pair*/
function splitStatement(statement, connective) {
    let brackets = 0
    let atom_one = ''
    let atom_two = ''
    let split = false
    let char = ''
    for (let i = 1; i < statement.length - 1; i++) {
        char = statement.charAt(i)
        if (split == true) {
            atom_two = atom_two + char
        } else if ((char == connective) && (brackets == 0)) {
                split = true
        } else {
                atom_one = atom_one + char
        }

        switch (char) {
            case '(':
                brackets = brackets + 1
                break
            case ')':
                brackets = brackets - 1
        }
    }
    return [atom_one, atom_two]
}