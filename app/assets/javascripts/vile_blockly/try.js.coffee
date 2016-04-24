class Vile.Try
  constructor: (@blocklyDiv, @toolbox, @startBlocks, @blocklyConsole) ->
    @initBlockly()
    @initCode()
    @showCode()
    @cEditor = {}
  
  initBlockly: ->
    @workspace = Blockly.inject(@blocklyDiv,
      media: '../../media/',
      toolbox: document.getElementById(@toolbox)
    )
    Blockly.Xml.domToWorkspace(@workspace, document.getElementById(@startBlocks))
    @workspace.addChangeListener(@showCode())

  initCode: ->
    @cEditor = CodeMirror.fromTextArea(document.getElementById(@blocklyConsole), 
      lineNumbers: true,
      matchBrackets: true,
      mode: "text/x-csrc",
      theme: 'monokai'
    )

  showCode: ->
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    @code = Blockly.JavaScript.workspaceToCode(@workspace);
    @cEditor.getDoc().setValue(@code);

  runCode: ->
    @code = Blockly.JavaScript.workspaceToCode(@workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    $.ajax 
      url: '/solve'
      type: "POST"
      data: 
        code: @code
      success:(response) =>
          swal(response)
      error:(response) =>
          swal('Error', 'Something went wrong, try later', 'error')