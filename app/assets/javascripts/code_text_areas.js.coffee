class @CodeTextAreas
  constructor: (@text_area_class) ->
    @initTextAreas()

  initTextAreas: ->
    for textarea, i in $(@text_area_class)
      CodeMirror.fromTextArea(textarea, 
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-csrc",
        theme: 'material',
        readOnly: false
      )