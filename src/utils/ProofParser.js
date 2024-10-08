import { ProofNode } from './ProofNode.js'

export function parser(proof) {
    let treeNode = new ProofNode('', '', [])
    if (proof.charAt(1) != '[') { //If dealing with an atom...
        treeNode = parseAtom(proof);
    } else { //If dealing with a rule application...
        treeNode = parseRule(proof);
    }
    return treeNode
}

function parseAtom(proof) {
    let treeNode = new ProofNode('', '', [])
    let conc = ''

    //Collect all of an atom's input
    for (let i = 0; i < proof.length; i++) {
        conc = conc + proof.charAt(i)
    }

    treeNode.conc = conc
    treeNode.rule = 'CO'
    return treeNode
}

function parseRule(proof) {
    let treeNode = new ProofNode('', '', [])
    let i = 1
    let char = proof.charAt(i)
    let nodeChildren = []

    while (char != '{') {
        switch (char) {
            //RULE IDENTIFIER
            case '[': //Rule identifier found - collect rule and skip ahead
                treeNode.rule = proof.charAt(i+1) + proof.charAt(i+2) 
                if (proof.charAt(i+4) == ']') { //If rule has 3 characters (left or right rule)
                    treeNode.rule = treeNode.rule + proof.charAt(i + 3)
                    i = i + 4
                } else { //Else (standard rule)
                    i = i + 3
                }
                break;
            //RULE IDENTIFIER

            //CONCLUSION
            case '`':
                let conc = ''
                //If rule application detected in conclusion - wrong section of block
                if (proof.charAt(i+2) == '[') {
                    return new ProofNode('', '', [])
                }

                i = i + 1
                char = proof.charAt(i)
                while (char != '`') {
                    conc = conc + char
                    i = i + 1
                    char = proof.charAt(i)
                }
                treeNode.conc = conc
                break;
            //CONCLUSION

            //ERROR
            default:
                return new ProofNode('', '', [])
            //ERROR

        }

        i = i + 1
        char = proof.charAt(i)
    }

    //APPLICATION

    let newChild = ''
    let addingChild = false
    let numBrackets = 0;
    //Parse treeNode's children for construction
    for (let j = i + 1; j < proof.length; j++) {
        char = proof.charAt(j)

        switch (char) {

            case '(': //Begin reading new child
                numBrackets = numBrackets + 1
                if (addingChild) {
                }
                addingChild = true
                newChild = newChild + char
                break

            case ')': //End reading new child
                //Only finish reading if outermost brackets are closed
                numBrackets = numBrackets - 1
                newChild = newChild + char
                if (numBrackets == 0) {
                    nodeChildren.push(newChild)
                    newChild = ''
                    addingChild = false
                }
                break

            default:
                if (addingChild) { //If currently reading in a child
                    newChild = newChild + char
                }

        }
    }

    for (let i = 0; i < nodeChildren.length; i++) {
        treeNode.addChild(parser(nodeChildren[i]))
    }
    return treeNode
}