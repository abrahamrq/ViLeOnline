class Vile.Try
  constructor: (@vile_program_id) ->
    @initBlockly()
    @initCode()
    @showCode()
    @bindChangeEvents()
    @bindEvents()
  
  initBlockly: ->
    @workspace = Blockly.inject('blocklyDiv',
      media: '../../media/',
      toolbox: document.getElementById('toolbox')
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
    )

  bindEvents: ->
    $('#showCode').on 'click', (event) =>
      @showCode()
    $('#runCode').on 'click', (event) =>
      @runCode()

  runCode: ->
    @code = Blockly.JavaScript.workspaceToCode(@workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    $.ajax 
      url: '/solve'
      type: "POST"
      data: 
        code: @code
      success:(response) =>
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
        swal('Error', 'Something went wrong, try later', 'error')