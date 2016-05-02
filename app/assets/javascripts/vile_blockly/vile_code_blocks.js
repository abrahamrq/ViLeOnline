Blockly.JavaScript['vile_main'] = function(block) {
  var statements_main_code = Blockly.JavaScript.statementToCode(block, 'main_code');
  var code = 'main {\n' + statements_main_code + '}\n';
  return code ;
};

Blockly.JavaScript['vile_function'] = function(block) {
  var dropdown_function_type = block.getFieldValue('function_type');
  var text_function_name = block.getFieldValue('function_name');
  var value_function_head = Blockly.JavaScript.valueToCode(block, 'function_head', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var statements_function_code = Blockly.JavaScript.statementToCode(block, 'function_code');
  var code = 'def ' + dropdown_function_type + ' ' + text_function_name + '(' + value_function_head + ') {\n' + statements_function_code + '}\n';
  return code;
};

Blockly.JavaScript['vile_return'] = function(block) {
  var value_return_value = Blockly.JavaScript.valueToCode(block, 'return_value', Blockly.JavaScript.ORDER_ATOMIC).slice(1, -1);
  var code = 'return(' + value_return_value + ');\n';
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


Blockly.JavaScript['vile_input_parameter'] = function(block) {
  var value_parameter = Blockly.JavaScript.valueToCode(block, 'parameter', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var code = value_parameter + ', ';
  return code;
};


Blockly.JavaScript['vile_function_call'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var statements_parameters = Blockly.JavaScript.statementToCode(block, 'parameters');
  var code = text_function_name + '(' + statements_parameters.slice(2, -2) + ')';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_function_call_statute'] = function(block) {
  var text_function_name = block.getFieldValue('function_name');
  var statements_parameters = Blockly.JavaScript.statementToCode(block, 'parameters');
  var code = text_function_name + '(' + statements_parameters.slice(2, -2) + ');\n';
  return code;
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

Blockly.JavaScript['vile_list_element'] = function(block) {
  var value_element = Blockly.JavaScript.valueToCode(block, 'element', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var code = value_element + ', ';
  return code;
};

Blockly.JavaScript['vile_list_init'] = function(block) {
  var statements_list_elements = Blockly.JavaScript.statementToCode(block, 'list_elements');
  var code = '[' + statements_list_elements.slice(2, -2) + ']';
  return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript['vile_variable_init_assign'] = function(block) {
  var checkbox_list = block.getFieldValue('list') == 'TRUE';
  var dropdown_variable_type = block.getFieldValue('variable_type');
  var text_variable_name = block.getFieldValue('variable_name');
  var value_vile_init_assign = Blockly.JavaScript.valueToCode(block, 'vile_init_assign', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var code = dropdown_variable_type + ' ' + text_variable_name + ' = ' + value_vile_init_assign + ';\n';
  if (checkbox_list){
    code = 'list ' + code;
  }
  return code;
};

Blockly.JavaScript['vile_list_access'] = function(block) {
  var text_variable_name = block.getFieldValue('variable_name');
  var value_variable_index = Blockly.JavaScript.valueToCode(block, 'variable_index', Blockly.JavaScript.ORDER_ATOMIC).slice(1, -1);
  var code = text_variable_name + '[' + value_variable_index + ']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_list_assign'] = function(block) {
  var text_variable_name = block.getFieldValue('variable_name');
  var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = text_variable_name +'[' + value_index + '] = ' + value_value + ';\n';
  return code;
};

Blockly.JavaScript['vile_bool_constant'] = function(block) {
  var dropdown_value = block.getFieldValue('value');
  var code = dropdown_value;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_integer_constant'] = function(block) {
  var text_value = block.getFieldValue('value');
  var code = text_value;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_float_constant'] = function(block) {
  var text_integer = block.getFieldValue('integer');
  var text_decimal = block.getFieldValue('decimal');
  var code = text_integer + '.' + text_decimal;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_string_constant'] = function(block) {
  var text_value = block.getFieldValue('value');
  var code = '"' + text_value + '"';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['vile_times_loop'] = function(block) {
  var value_how_many = Blockly.JavaScript.valueToCode(block, 'how_many', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var statements_times = Blockly.JavaScript.statementToCode(block, 'times');
  var code = 'times(' + value_how_many + '){\n' + statements_times + '}\n';
  return code;
};

Blockly.JavaScript['vile_while_loop'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC).replace('(','').replace(')','');
  var statements_while = Blockly.JavaScript.statementToCode(block, 'while');
  var code = 'while(' + value_condition + '){\n' + statements_while + '}\n';
  return code;
};

Blockly.JavaScript['vile_print'] = function(block) {
  var value_print_code = Blockly.JavaScript.valueToCode(block, 'print_code', Blockly.JavaScript.ORDER_ATOMIC).slice(1, -1);
  var code = 'print(' + value_print_code + ');\n';
  return code;
};