/*Generated with Blockly Developer Tools*/
import * as Blockly from 'blockly/core';
import './custom_blocks_gen.js';

/*Atoms + Connectives*/
Blockly.Blocks['atom_prop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("A"), "input");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['connective_not'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("¬");
      this.appendValueInput("atom")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(345);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['connective_imp'] = {
  init: function() {
    this.appendValueInput("left_atom")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("→");
    this.appendValueInput("right_atom")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['connective_and'] = {
  init: function() {
    this.appendValueInput("left_atom")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("∧");
    this.appendValueInput("right_atom")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['connective_or'] = {
  init: function() {
    this.appendValueInput("left_atom")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("∨");
    this.appendValueInput("right_atom")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*Implication rules*/
Blockly.Blocks['imp_int'] = {
    init: function() {
      this.appendValueInput("prem")
          .setCheck(null);
      this.appendStatementInput("imp_elim")
          .setCheck(null);
      this.appendValueInput("conc_left")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("→");
      this.appendValueInput("conc_right")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("[→I]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['imp_elim'] = {
  init: function() {
    this.appendValueInput("prem_one")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("prem_two")
        .setCheck(null);
    this.appendStatementInput("imp_elim")
        .setCheck(null);
    this.appendValueInput("conc")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("[→E]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*And Rules*/
Blockly.Blocks['and_int'] = {
    init: function() {
      this.appendValueInput("prem_one")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(",");
      this.appendValueInput("prem_two")
          .setCheck(null);
      this.appendStatementInput("and_int")
          .setCheck(null);
      this.appendValueInput("conc_left")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("∧");
      this.appendValueInput("conc_right")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("[∧I]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
  
Blockly.Blocks['and_elim_left'] = {
    init: function() {
      this.appendValueInput("prem")
          .setCheck(null);
      this.appendStatementInput("and_elim")
          .setCheck(null);
      this.appendValueInput("conc")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("[∧El]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
  
Blockly.Blocks['and_elim_right'] = {
    init: function() {
      this.appendValueInput("prem")
          .setCheck(null);
      this.appendStatementInput("and_elim")
          .setCheck(null);
      this.appendValueInput("conc")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("[∧Er]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(135);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

/*Or Rules*/
Blockly.Blocks['or_int_left'] = {
    init: function() {
      this.appendValueInput("prem_one")
          .setCheck(null);
      this.appendStatementInput("or_int")
          .setCheck(null);
      this.appendValueInput("conc_left")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("∨");
      this.appendValueInput("conc_right")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("[∨Il]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(285);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};
  
Blockly.Blocks['or_int_right'] = {
    init: function() {
      this.appendValueInput("prem_one")
          .setCheck(null);
      this.appendStatementInput("or_int")
          .setCheck(null);
      this.appendValueInput("conc_left")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("∨");
      this.appendValueInput("conc_right")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("[∨Ir]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(285);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};

Blockly.Blocks['or_elim'] = {
    init: function() {
      this.appendValueInput("prem_one")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(",");
      this.appendValueInput("prem_two")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(",");
      this.appendValueInput("prem_three")
          .setCheck(null);
      this.appendStatementInput("or_elim")
          .setCheck(null);
      this.appendValueInput("conc")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("[∨E]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(285);
   this.setTooltip("");
   this.setHelpUrl("");
    }
};