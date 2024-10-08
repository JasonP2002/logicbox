/*Repeated JSON, stored as variables*/
let shadow_atom_A =  {
    "shadow": {
      "type": "atom_prop",
      "fields" : {
        "input": "A"
      }
    }
  };
  let shadow_atom_B =  {
    "shadow": {
      "type": "atom_prop",
      "fields" : {
        "input": "B"
      }
    }
  };
  let shadow_atom_C =  {
    "shadow": {
      "type": "atom_prop",
      "fields" : {
        "input": "C"
      }
    }
  };
  let shadow_connectives =  {
    "left_atom": shadow_atom_A,
    "right_atom": shadow_atom_B
  };

  /*Toolbox, for injection into a Blockly workspace*/
  let toolbox =
    {
      "kind": "categoryToolbox",
      "contents": [
        {
          "kind": "category",
          "name": "Atoms + Connectives",
          "contents": [
            {
              "kind": "block",
              "type": "atom_prop"
            },
            {
              "kind": "block",
              "type": "connective_not",
              "inputs": {
                "atom": shadow_atom_A
              }
            },
            {
              "kind": "block",
              "type": "connective_imp",
              "inputs": shadow_connectives
            },
            {
              "kind": "block",
              "type": "connective_and",
              "inputs": shadow_connectives
            },
            {
              "kind": "block",
              "type": "connective_or",
              "inputs": shadow_connectives
            }
          ]
        },
        {
          "kind": "category",
          "name": "Implication Rules",
          "contents": [
            {
              "kind": "block",
              "type": "imp_int",
              "inputs": {
                "prem": shadow_atom_B,
                "conc_left": shadow_atom_A,
                "conc_right": shadow_atom_B
              }
            },
            {
              "kind": "block",
              "type": "imp_elim",
              "inputs": {
                "prem_one": {
                  "shadow": {
                    "type": "connective_imp",
                    "inputs": shadow_connectives
                  }
                },
                "prem_two": shadow_atom_A,
                "conc": shadow_atom_B
              }
            }
          ]
        },
        {
          "kind": "category",
          "name": "And Rules",
          "contents": [
            {
              "kind": "block",
              "type": "and_int",
              "inputs": {
                "prem_one": shadow_atom_A,
                "prem_two": shadow_atom_B,
                "conc_left": shadow_atom_A,
                "conc_right": shadow_atom_B
              }
            },
            {
              "kind": "block",
              "type": "and_elim_left",
              "inputs": {
                "prem": {
                  "shadow": {
                    "type": "connective_and",
                    "inputs": shadow_connectives
                  }
                },
                "conc": shadow_atom_A
              }
            },
            {
              "kind": "block",
              "type": "and_elim_right",
              "inputs": {
                "prem": {
                  "shadow": {
                    "type": "connective_and",
                    "inputs": shadow_connectives
                  }
                },
                "conc": shadow_atom_B
              }
            }
          ]
        },
        {
          "kind": "category",
          "name": "Or Rules",
          "contents": [
            {
              "kind": "block",
              "type": "or_int_left",
              "inputs": {
                "prem_one": shadow_atom_A,
                "conc_left": shadow_atom_A,
                "conc_right": shadow_atom_B 
              }
            },
            {
              "kind": "block",
              "type": "or_int_right",
              "inputs": {
                "prem_one": shadow_atom_B,
                "conc_left": shadow_atom_A,
                "conc_right": shadow_atom_B 
              }
            },
            {
              "kind": "block",
              "type": "or_elim",
              "inputs": {
                "prem_one": {
                  "shadow": {
                    "type": "connective_or",
                    "inputs": shadow_connectives
                  }
                },
                "prem_two": {
                  "shadow": {
                  "type": "connective_imp",
                  "inputs": {
                    "left_atom": shadow_atom_A,
                    "right_atom": shadow_atom_C
                    }
                  }
                },
                "prem_three": {
                  "shadow": {
                    "type": "connective_imp",
                    "inputs": {
                      "left_atom": shadow_atom_B,
                      "right_atom": shadow_atom_C
                      }
                  }
                },
                "conc": shadow_atom_C
              }
            }
          ]
        }
      ]
  };
  export default toolbox;