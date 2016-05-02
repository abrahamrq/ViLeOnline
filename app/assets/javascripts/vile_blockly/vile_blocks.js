Blockly.Blocks['vile_main'] = {
  init: function() {
    this.appendStatementInput("main_code")
        .setCheck(null)
        .appendField("main");
    this.setColour(230);
    this.setTooltip('Block for the main program');
    this.setHelpUrl('');
    this.setDeletable(false);
    this.setPreviousStatement(true,  "vile_function");
  }
};

Blockly.Blocks['vile_function'] = {
  init: function() {
    this.appendValueInput("function_head")
        .setCheck("vile_parameter")
        .appendField("def")
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["bool", "bool"], ["string", "string"], ["void", "void"]]), "function_type")
        .appendField(new Blockly.FieldTextInput("function_name"), "function_name")
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.appendStatementInput("function_code");
    this.setPreviousStatement(true, "vile_function");
    this.setNextStatement(true, ["vile_function", "vile_main"]);
    this.setColour(230);
    this.setTooltip('Block used to create a function');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_return'] = {
  init: function() {
    this.appendValueInput("return_value")
        .appendField("return");
    this.setPreviousStatement(true);
    this.setColour(20);
    this.setTooltip('Block used inside a function to return the value and finish the function');
    this.setHelpUrl('');
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
    this.setTooltip('Block to enter a parameter');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_function_call'] = {
  init: function() {
    this.appendStatementInput("parameters")
        .setCheck("vile_input_parameter")
        .appendField(new Blockly.FieldTextInput("function_to_call"), "function_name");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('Block for call a function');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_function_call_statute'] = {
  init: function() {
    this.appendStatementInput("parameters")
        .setCheck("vile_input_parameter")
        .appendField(new Blockly.FieldTextInput("vile_function_call_statute"), "function_name");
    this.setColour(230);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Block for call a function as an statute');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['vile_input_parameter'] = {
  init: function() {
    this.appendValueInput("parameter");
    // this.appendDummyInput();
    this.setPreviousStatement(true, ["vile_input_parameter", "vile_function_call"]);
    this.setNextStatement(true, ["vile_input_parameter", "vile_function_call"]);
    this.setColour(20);
    this.setTooltip('Parameter for function call');
    this.setHelpUrl('');
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

Blockly.Blocks['vile_list_element'] = {
  init: function() {
    this.appendValueInput("element");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('Element of a list');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_list_init'] = {
  init: function() {
    this.appendStatementInput("list_elements")
        .setCheck("vile_list_element");
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('Block for initialize a list');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_operation'] = {
  init: function() {
    this.appendValueInput("left_value")
        .setCheck(["vile_constant", "vile_variable"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["*", "*"], [" ÷", "/"], ["%", "%"],["and", "and"],["or", "or"]]), "operator");
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
        .appendField("list")
        // .appendField(new Blockly.FieldCheckbox('FALSE'), "list")
        .appendField(new Blockly.FieldCheckbox('FALSE'), "list")
        .setCheck(["vile_variable", "vile_operation", "vile_parenthesis", "vile_true_false"])
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["bool", "bool"], ["string", "string"]]), "variable_type")
        .appendField(new Blockly.FieldTextInput("variable_name"), "variable_name")
        .appendField("=");
    // this.appendDummyInput();
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('Block to init a variable with an assignation');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_list_access'] = {
  init: function() {
    this.appendValueInput("variable_index")
        .appendField(new Blockly.FieldTextInput("variable_name"), "variable_name")
        .appendField("[");
    this.appendDummyInput()
        .appendField("]");
    this.setOutput(true);
    this.setColour(120);
    this.setTooltip('Block for accessing a list element');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['vile_list_assign'] = {
  init: function() {
    this.appendValueInput("index")
        .appendField(new Blockly.FieldTextInput("variable_name"), "variable_name")
        .appendField("[");
    this.appendDummyInput();
    this.appendValueInput("value")
        .appendField("]")
        .appendField("=");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('Block for assignment of a list element');
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

Blockly.Blocks['vile_print'] = {
  init: function() {
    this.appendValueInput("print_code")
        .appendField("print(");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('Block for printing');
    this.setHelpUrl('');
  }
};