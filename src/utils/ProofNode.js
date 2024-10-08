/*Data structure to store and verify a proof with*/
export class ProofNode {
    constructor(conc, rule, children) {
        this.conc = conc;
        this.rule = rule;
        this.children = children;
    }

    addChild(newChild) {
        this.children.push(newChild);
    }

    printTree() {
        console.log("--------------------------------------------------")
        console.log('Proof: ' + this.conc);
        console.log('Rule: ' + this.rule);
        for (let i = 0; i < this.children.length; i++) {
            console.log('--- Child ' + i + ' ---')
            this.children[i].printTree()
        }
    }
};