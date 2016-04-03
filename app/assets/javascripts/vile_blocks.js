Blockly.Blocks['vile_main'] = {
  init: function() {
    this.appendStatementInput("main_code")
        .setCheck(null)
        .appendField("main");
    this.setColour(230);
    this.setTooltip('Block for the main program');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_function'] = {
  init: function() {
    this.appendValueInput("parameters")
        .setCheck("parameter")
        .appendField("def")
        .appendField(new Blockly.FieldDropdown([["bool", "bool"], ["int", "int"], ["float", "float"], ["string", "string"]]), "function_type")
        .appendField(new Blockly.FieldTextInput("function_name"), "function_name");
    this.appendDummyInput();
    this.appendStatementInput("function_code")
        .setCheck(null);
    this.appendValueInput("return")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("return");
    this.setColour(230);
    this.setTooltip('Block for a function with return');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_void_function'] = {
  init: function() {
    this.appendValueInput("parameters")
        .setCheck("parameter")
        .appendField("def void")
        .appendField(new Blockly.FieldTextInput("function_name"), "function_name");
    this.appendDummyInput();
    this.appendStatementInput("function_code")
        .setCheck(null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['vile_parameter'] = {
  init: function() {
    this.appendValueInput("parameter")
        .setCheck("parameter")
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["bool", "bool"], ["float", "float"], ["string", "string"]]), "type")
        .appendField(new Blockly.FieldTextInput("parameter_name"), "parameter_name");
    this.setOutput(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('Block to enter a parameter');
  }
};