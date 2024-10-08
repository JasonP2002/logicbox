/*Stubs generated with Blockly Developer Tools*/
import {javascriptGenerator} from 'blockly/javascript';
const conc_split = '`'

/*Atoms + Connectives*/
javascriptGenerator['atom_prop'] = function(block) {
  var text_input = block.getFieldValue('input');
  let input = ''
  if (!validate(text_input)) {
    input = text_input
  }
  return [input, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator['connective_not'] = function(block) {
  var value_atom = javascriptGenerator.valueToCode(block, 'atom', javascriptGenerator.ORDER_ATOMIC);
  return ['¬'+value_atom, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator['connective_imp'] = function(block) {
  var value_left_atom = javascriptGenerator.valueToCode(block, 'left_atom', javascriptGenerator.ORDER_ATOMIC);
  var value_right_atom = javascriptGenerator.valueToCode(block, 'right_atom', javascriptGenerator.ORDER_ATOMIC);
  return [value_left_atom+'→'+value_right_atom, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator['connective_and'] = function(block) {
  var value_left_atom = javascriptGenerator.valueToCode(block, 'left_atom', javascriptGenerator.ORDER_ATOMIC);
  var value_right_atom = javascriptGenerator.valueToCode(block, 'right_atom', javascriptGenerator.ORDER_ATOMIC);
  return [value_left_atom+'∧'+value_right_atom, javascriptGenerator.ORDER_NONE];
};
javascriptGenerator['connective_or'] = function(block) {
  var value_left_atom = javascriptGenerator.valueToCode(block, 'left_atom', javascriptGenerator.ORDER_ATOMIC);
  var value_right_atom = javascriptGenerator.valueToCode(block, 'right_atom', javascriptGenerator.ORDER_ATOMIC);
  return [value_left_atom+'∨'+value_right_atom, javascriptGenerator.ORDER_NONE];
};
  
/*Implication Rules*/
javascriptGenerator['imp_int'] = function(block) {
  var value_prem = javascriptGenerator.valueToCode(block, 'prem', javascriptGenerator.ORDER_ATOMIC);
  var statements_imp_elim = javascriptGenerator.statementToCode(block, 'imp_elim');
  var value_conc_left = javascriptGenerator.valueToCode(block, 'conc_left', javascriptGenerator.ORDER_ATOMIC);
  var value_conc_right = javascriptGenerator.valueToCode(block, 'conc_right', javascriptGenerator.ORDER_ATOMIC);
  return ['[→I]' + conc_split+'('+value_conc_left+'→'+value_conc_right+')'+conc_split + '{'+value_prem+'}', javascriptGenerator.ORDER_NONE];
};
javascriptGenerator['imp_elim'] = function(block) {
  var value_prem_one = javascriptGenerator.valueToCode(block, 'prem_one', javascriptGenerator.ORDER_ATOMIC);
  var value_prem_two = javascriptGenerator.valueToCode(block, 'prem_two', javascriptGenerator.ORDER_ATOMIC);
  var statements_imp_elim = javascriptGenerator.statementToCode(block, 'imp_elim');
  var value_conc = javascriptGenerator.valueToCode(block, 'conc', javascriptGenerator.ORDER_ATOMIC);
  return ['[→E]' + conc_split+value_conc+conc_split + '{'+value_prem_one+','+value_prem_two+'}', javascriptGenerator.ORDER_NONE];
};
  
/*And Rules*/
javascriptGenerator['and_int'] = function(block) {
  var value_prem_one = javascriptGenerator.valueToCode(block, 'prem_one', javascriptGenerator.ORDER_ATOMIC);
  var value_prem_two = javascriptGenerator.valueToCode(block, 'prem_two', javascriptGenerator.ORDER_ATOMIC);
  var statements_and_int = javascriptGenerator.statementToCode(block, 'and_int');
  var value_conc_left = javascriptGenerator.valueToCode(block, 'conc_left', javascriptGenerator.ORDER_ATOMIC);
  var value_conc_right = javascriptGenerator.valueToCode(block, 'conc_right', javascriptGenerator.ORDER_ATOMIC);
  return ['[∧I]' + conc_split+'('+value_conc_left+'∧'+value_conc_right+')'+conc_split + '{'+value_prem_one+','+value_prem_two+'}', javascriptGenerator.ORDER_NONE];
};
javascriptGenerator['and_elim_left'] = function(block) {
  var value_prem = javascriptGenerator.valueToCode(block, 'prem', javascriptGenerator.ORDER_ATOMIC);
  var statements_and_elim = javascriptGenerator.statementToCode(block, 'and_elim');
  var value_conc = javascriptGenerator.valueToCode(block, 'conc', javascriptGenerator.ORDER_ATOMIC);
  return ['[∧El]' + conc_split+value_conc+conc_split + '{'+value_prem+'}', javascriptGenerator.ORDER_NONE];
};
javascriptGenerator['and_elim_right'] = function(block) {
  var value_prem = javascriptGenerator.valueToCode(block, 'prem', javascriptGenerator.ORDER_ATOMIC);
  var statements_and_elim = javascriptGenerator.statementToCode(block, 'and_elim');
  var value_conc = javascriptGenerator.valueToCode(block, 'conc', javascriptGenerator.ORDER_ATOMIC);
  return ['[∧Er]' + conc_split+value_conc+conc_split + '{'+value_prem+'}', javascriptGenerator.ORDER_NONE];
};
  
/*Or Rules*/
javascriptGenerator['or_int_left'] = function(block) {
  var value_prem = javascriptGenerator.valueToCode(block, 'prem_one', javascriptGenerator.ORDER_ATOMIC);
  var statements_or_int = javascriptGenerator.statementToCode(block, 'or_int');
  var value_conc_left = javascriptGenerator.valueToCode(block, 'conc_left', javascriptGenerator.ORDER_ATOMIC);
  var value_conc_right = javascriptGenerator.valueToCode(block, 'conc_right', javascriptGenerator.ORDER_ATOMIC);
  return ['[∨Il]' + conc_split+'('+value_conc_left+'∨'+value_conc_right+')'+conc_split + '{'+value_prem+'}', javascriptGenerator.ORDER_NONE];
};
javascriptGenerator['or_int_right'] = function(block) {
  var value_prem = javascriptGenerator.valueToCode(block, 'prem_one', javascriptGenerator.ORDER_ATOMIC);
  var statements_or_int = javascriptGenerator.statementToCode(block, 'or_int');
  var value_conc_left = javascriptGenerator.valueToCode(block, 'conc_left', javascriptGenerator.ORDER_ATOMIC);
  var value_conc_right = javascriptGenerator.valueToCode(block, 'conc_right', javascriptGenerator.ORDER_ATOMIC);
  return ['[∨Ir]' + conc_split+'('+value_conc_left+'∨'+value_conc_right+')'+conc_split + '{'+value_prem+'}', javascriptGenerator.ORDER_NONE];
};
javascriptGenerator['or_elim'] = function(block) {
  var value_prem_one = javascriptGenerator.valueToCode(block, 'prem_one', javascriptGenerator.ORDER_ATOMIC);
  var value_prem_two = javascriptGenerator.valueToCode(block, 'prem_two', javascriptGenerator.ORDER_ATOMIC);
  var value_prem_three = javascriptGenerator.valueToCode(block, 'prem_three', javascriptGenerator.ORDER_ATOMIC);
  var statements_or_elim = javascriptGenerator.statementToCode(block, 'or_elim');
  var value_conc = javascriptGenerator.valueToCode(block, 'conc', javascriptGenerator.ORDER_ATOMIC);
  return ['[∨E]' + conc_split+value_conc+conc_split + '{'+value_prem_one+','+value_prem_two+','+value_prem_three+'}', javascriptGenerator.ORDER_NONE];
};

/*Validation function to ensure user input into the atom block does not contain any reserved characters*/
function validate(input) {
  const pattern = /[`{}\[\]()¬→∧∨]/
  return pattern.test(input)
}