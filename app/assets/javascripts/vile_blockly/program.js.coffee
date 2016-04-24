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
    debugger
    if !@block_save && (@save_allowed)
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