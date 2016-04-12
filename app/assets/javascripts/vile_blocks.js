Blockly.Blocks['vile_main'] = {
  init: function() {
    this.appendStatementInput("main_code")
        .setCheck(null)
        .appendField("main");
    this.setColour(230);
    this.setTooltip('Block for the main program');
    this.setHelpUrl('');
    // this.setNextStatement(true, "vile_function");
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
    // this.setPreviousStatement(true, "vile_main");
    // this.setNextStatement(true, "vile_function");
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
        .setCheck("vile_parameter")
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["bool", "bool"], ["float", "float"], ["string", "string"]]), "type")
        .appendField(new Blockly.FieldTextInput("parameter_name"), "parameter_name");
    this.setOutput(true);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('Block to enter a parameter');
  }
};

Blockly.Blocks['vile_if'] = {
  init: function() {
    this.appendValueInput("if_statement")
        .setCheck(["vile_bool", "vile_variable"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("if");
    this.appendStatementInput("if_code")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
    this.setTooltip('Block to enter a single condition');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_if_else'] = {
  init: function() {
    this.appendValueInput("if_statement")
        .setCheck(["vile_bool", "vile_variable"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("if");
    this.appendStatementInput("if_code")
        .setCheck(null);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("else");
    this.appendStatementInput("else_statement")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(55);
    this.setTooltip('');
    this.setHelpUrl('Block to enter a complex condition');
  }
};

Blockly.Blocks['vile_bool'] = {
  init: function() {
    this.appendValueInput("first_value");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["<", "<"], [">", ">"], ["<=", "<="], [">=", ">="], ["==", "=="]]), "operator");
    this.appendValueInput("second_value");
    this.setOutput(true);
    this.setColour(20);
    this.setTooltip('Block for entering a relation statement');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["string", "string"], ["bool", "bool"]]), "var_type")
        .appendField(new Blockly.FieldTextInput("var_name"), "var_name");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('Block for initialization of a variable');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("var_name"), "var_name");
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('Block for accessing a variable');
  }
};

Blockly.Blocks['vile_assignment'] = {
  init: function() {
    this.appendValueInput("assignment")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("var_name"), "var_name")
        .appendField("=");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('Block for an assignment');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_operation'] = {
  init: function() {
    this.appendValueInput("left_value")
        .setCheck(["vile_constant", "vile_variable"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["*", "*"], [" ÷", "/"], ["%", "%"]]), "operator");
    this.appendValueInput("right_value")
        .setCheck(["vile_constant", "vile_variable"]);
    this.setOutput(true);
    this.setColour(20);
    this.setTooltip('Block for an operation');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_parenthesis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("(");
    this.appendValueInput("operation_code")
        .setCheck(["vile_operation", "vile_variable", "vile_constant"]);
    this.appendDummyInput()
        .appendField(")");
    this.setOutput(true);
    this.setColour(0);
    this.setTooltip('Block to start parenthesis');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_variable_init_assign'] = {
  init: function() {
    this.appendValueInput("vile_init_assign")
        .setCheck(["vile_variable", "vile_operation", "vile_parenthesis", "vile_true_false"])
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["bool", "bool"], ["string", "string"]]), "variable_type")
        .appendField(new Blockly.FieldTextInput("variable_name"), "variable_name")
        .appendField("=");
    this.appendDummyInput();
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('Block to init a variable with an assignation');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_bool_constant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["false", "false"], ["true", "true"]]), "value");
    this.setOutput(true);
    this.setColour(290);
    this.setTooltip('Block of a boolean value');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_integer_constant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1"), "value");
    this.setOutput(true);
    this.setColour(290);
    this.setTooltip('Block of an integer value');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_float_constant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1"), "integer")
        .appendField(".")
        .appendField(new Blockly.FieldTextInput("0"), "decimal");
    this.setOutput(true);
    this.setColour(290);
    this.setTooltip('Block of a floar value');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_string_constant'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput("string"), "value")
        .appendField("\"");
    this.setOutput(true);
    this.setColour(290);
    this.setTooltip('Block of a string value');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_times_loop'] = {
  init: function() {
    this.appendValueInput("how_many")
        .setCheck(null)
        .appendField("times (");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("times")
        .setCheck(null);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('Block for a times loop');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_while_loop'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck(["vile_bool", "vile_bool_constant"])
        .appendField("while (");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("while");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('Block for a while loop');
    this.setHelpUrl('');
  }
};