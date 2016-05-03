class Vile.Code
  constructor: (@vile_program_id, @save_allowed) ->
    @block_save = false
    @initBlockly()
    @initCode()
    @showCode()
    @bindChangeEvents()
    @bindEvents()
  
  initBlockly: ->
    @workspace = Blockly.inject('blocklyDiv',
      media: '../../media/',
      toolbox: document.getElementById('toolbox'),
      readOnly: !@save_allowed
    )
    Blockly.Xml.domToWorkspace(@workspace, document.getElementById('startBlocks'))

  initCode: ->
    @cEditor = CodeMirror.fromTextArea(document.getElementById('blocklyConsole'), 
      lineNumbers: true,
      matchBrackets: true,
      mode: "text/x-csrc",
      theme: 'material',
      readOnly: true
    )
    @cLogEditor = CodeMirror.fromTextArea(document.getElementById('blocklyConsoleLog'), 
      lineNumbers: true,
      matchBrackets: true,
      mode: "text/x-csrc",
      readOnly: true
    )

  showCode: ->
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null
    @code = Blockly.JavaScript.workspaceToCode(@workspace)
    @cEditor.getDoc().setValue(@code)

  bindChangeEvents: ->
    @workspace.addChangeListener( =>
      @showCode()
      @saveProgram()
    )
    $('#vile_program_name').on 'change', (event) =>
      @saveProgram()

  bindEvents: ->
    $('#showCode').on 'click', (event) =>
      @showCode()
    $('#runCode').on 'click', (event) =>
      @runCode()
    $('#checkSyntax').on 'click', (event) =>
      @checkSyntax()
    $('#printQuadruplets').on 'click', (event) =>
      @printQuadruplets()
    $('#copyProgram').on 'click', (event) =>
      @copyProgram()

  runCode: ->
    $('#loading').show()
    @code = Blockly.JavaScript.workspaceToCode(@workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    $.ajax 
      url: '/solve'
      type: "POST"
      data: 
        code: @code
      success:(response) =>
        $('#loading').hide()
        @cLogEditor.getDoc().setValue(response)
        swal({
          title: "Done!",
          text: "See the result on the console.",
          timer: 1000,
          type: 'success'
          showConfirmButton: false
          }
        );
      error:(response) =>
        $('#loading').hide()
        swal('Error', 'Something went wrong, try later', 'error')

  checkSyntax: ->
    $('#loading').show()
    @code = Blockly.JavaScript.workspaceToCode(@workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    $.ajax 
      url: '/syntax_check'
      type: "POST"
      data: 
        code: @code
      success:(response) =>
        $('#loading').hide()
        swal({
          title: "Done!",
          text: response,
          timer: 1000,
          type: 'success'
          showConfirmButton: false
          }
        );
      error:(response) =>
        $('#loading').hide()
        swal('Error', 'Something went wrong, try later', 'error')

  printQuadruplets: ->
    $('#loading').show()
    @code = Blockly.JavaScript.workspaceToCode(@workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    $.ajax 
      url: '/print_quadruplets'
      type: "POST"
      data: 
        code: @code
      success:(response) =>
        $('#loading').hide()
        @cLogEditor.getDoc().setValue(response)
        swal({
          title: "Done!",
          text: "See the result on the console.",
          timer: 1000,
          type: 'success'
          showConfirmButton: false
          }
        );
      error:(response) =>
        $('#loading').hide()
        swal('Error', 'Something went wrong, try later', 'error')

  getCode: ->
    @cEditor.getDoc().getValue()

  getBlocks: ->
    xml = Blockly.Xml.workspaceToDom(@workspace)
    $(xml).attr('id', 'startBlocks')
    xmlToString(xml)

  getName: ->
    name = $('#vile_program_name').val()
    if name == ""
      return 'Untitled'
    else
      name

  saveProgram: ->
    if !@block_save && @save_allowed
      @block_save = true
      $.ajax 
        url: '/autosave'
        type: "POST"
        data:
          vile_program:
            id: @vile_program_id
            code: @getCode()
            xml_blocks: @getBlocks()
            name: @getName()
        success:(response) =>
          @block_save = false
          @vile_program_id = response.id
        error:(response) =>
          @block_save = false
          swal('Error', response, 'error')

  copyProgram: ->
    if !@block_save && !@save_allowed
      @block_save = true
      $.ajax 
        url: '/copy_program'
        type: "POST"
        data:
          vile_program:
            code: @getCode()
            xml_blocks: @getBlocks()
            name: @getName()
        success:(response) =>
          @block_save = false
          swal({
            title: "Done!",
            text: "Go to your profile to see this code",
            timer: 2000,
            type: 'success'
            showConfirmButton: false
            }
          );
          $('#copyProgram').hide()
        error:(response) =>
          @block_save = false
          swal('Error', response, 'error')