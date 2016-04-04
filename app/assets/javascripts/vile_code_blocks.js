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
  var value_if_statement = Blockly.JavaScript.valueToCode(block, 'if_statement', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_if_code = Blockly.JavaScript.statementToCode(block, 'if_code');
  var code = 'if ('+ value_if_statement +'){\n' + statements_if_code + '}\n';
  return code;
};

Blockly.JavaScript['vile_if_else'] = function(block) {
  var value_if_statement = Blockly.JavaScript.valueToCode(block, 'if_statement', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_if_code = Blockly.JavaScript.statementToCode(block, 'if_code');
  var statements_else_statement = Blockly.JavaScript.statementToCode(block, 'else_statement');
  var code = 'if ('+ value_if_statement +'){\n' + statements_if_code + '} else {\n' + statements_else_statement + '}\n';
  return code;
};