Blockly.JavaScript['vile_main'] = function(block) {
  var statements_main_code = Blockly.JavaScript.statementToCode(block, 'main_code');
  var code = 'main {\n' + statements_main_code + '}\n';
  return code ;
};

Blockly.JavaScript['vile_function'] = function(block) {
  var dropdown_function_type = block.getFieldValue('function_type');
  var text_function_name = block.getFieldValue('function_name');
  var value_parameters = Blockly.JavaScript.valueToCode(block, 'parameters', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var statements_function_code = Blockly.JavaScript.statementToCode(block, 'function_code');
  var value_return = Blockly.JavaScript.valueToCode(block, 'return', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'def ' + dropdown_function_type + ' ' + text_function_name + '(' + value_parameters + ') {\n' + statements_function_code + 'return ' + value_return + ';\n}';
  return code;
};

Blockly.JavaScript['vile_void_function'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var value_parameters = Blockly.JavaScript.valueToCode(block, 'parameters', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var statements_function_code = Blockly.JavaScript.statementToCode(block, 'function_code');
  // TODO: Assemble JavaScript into code variable.
  var code = 'def void ' + text_function_name + '(' + value_parameters + ') {\n' + statements_function_code + '\n}';
  return code;
};

Blockly.JavaScript['vile_parameter'] = function(block) {
  var dropdown_type = block.getFieldValue('type');
  var text_parameter_name = block.getFieldValue('parameter_name');
  var value_parameter = Blockly.JavaScript.valueToCode(block, 'parameter', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var code = dropdown_type + ' ' + text_parameter_name;
  if (value_parameter != '') {
    code += ', ' + value_parameter;
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_if'] = function(block) {
  var value_if_statement = Blockly.JavaScript.valueToCode(block, 'if_statement', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var statements_if_code = Blockly.JavaScript.statementToCode(block, 'if_code');
  var code = 'if ('+ value_if_statement +'){\n' + statements_if_code + '}\n';
  return code;
};

Blockly.JavaScript['vile_if_else'] = function(block) {
  var value_if_statement = Blockly.JavaScript.valueToCode(block, 'if_statement', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var statements_if_code = Blockly.JavaScript.statementToCode(block, 'if_code');
  var statements_else_statement = Blockly.JavaScript.statementToCode(block, 'else_statement');
  var code = 'if ('+ value_if_statement +'){\n' + statements_if_code + '} else {\n' + statements_else_statement + '}\n';
  return code;
};

Blockly.JavaScript['vile_bool'] = function(block) {
  var value_first_value = Blockly.JavaScript.valueToCode(block, 'first_value', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var dropdown_operator = block.getFieldValue('operator');
  var value_second_value = Blockly.JavaScript.valueToCode(block, 'second_value', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var code = value_first_value + ' '+ dropdown_operator + ' ' + value_second_value;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_init'] = function(block) {
  var dropdown_var_type = block.getFieldValue('var_type');
  var text_var_name = block.getFieldValue('var_name');
  var code = dropdown_var_type + ' ' +  text_var_name + ';\n';
  return code;
};

Blockly.JavaScript['vile_variable'] = function(block) {
  var text_var_name = block.getFieldValue('var_name');
  var code = text_var_name;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_assignment'] = function(block) {
  var text_var_name = block.getFieldValue('var_name');
  var value_assignment = Blockly.JavaScript.valueToCode(block, 'assignment', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var code = text_var_name + ' = ' +  value_assignment + ';\n';;
  return code;
};

Blockly.JavaScript['vile_operation'] = function(block) {
  var value_left_value = Blockly.JavaScript.valueToCode(block, 'left_value', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var dropdown_operator = block.getFieldValue('operator');
  var value_right_value = Blockly.JavaScript.valueToCode(block, 'right_value', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var code = value_left_value + ' ' + dropdown_operator + ' ' + value_right_value;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_parenthesis'] = function(block) {
  var value_operation_code = Blockly.JavaScript.valueToCode(block, 'operation_code', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var code = '(' + value_operation_code + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};