/* Controllers */

function SassCtrl($scope, $http, apSass, $timeout) {
  var scopeVar = {
    variables: {},
    fonts: {},
    autoapplysass: false,
    isViewLoading: false,
    minified: false,
    editorOptions: {
      lineWrapping: true,
      lineNumbers: true,
      mode: {
        name: 'text/html'
      },
      onKeyEvent: function(e, s) {
        if (s.type == 'keyup') {
          CodeMirror.showHint(e)
        }
      },
      extraKeys: { 'Ctrl-Space': 'autocomplete' }
    },
    x: ``
  }

  var scopeFunction = {
    autoApplySass: autoApplySass,
    applySass: applySass,
    colorpicker: colorpicker,
    color: color,
    getGroupUrl: getGroupUrl,
    setIsViewLoading: setIsViewLoading,
    importSassVariables: importSassVariables,
    saveCSS: saveCSS,
    resetSassVariables: resetSassVariables,
    saveSassVariables: saveSassVariables,
    resetBaseVariable: resetBaseVariable,
    codemirrorLoaded: codemirrorLoaded,
    format: format
  }

  $scope.$on('$routeChangeStart', function() {
    $scope.isViewLoading = true
  })
  $scope.$on('$routeChangeSuccess', function() {
    $scope.isViewLoading = false
  })
  $scope.$on('applySass', function() {
    $scope.applySass()
  })

  angular.extend($scope, scopeVar, scopeFunction)

  CodeMirror.commands.autocomplete = function(cm) {
    CodeMirror.showHint(cm, CodeMirror.hint.html)
  }

  function codemirrorLoaded(editor) {
    $scope.editor = editor
    var modification = 0
    var doc = editor.getDoc()
    editor.focus()
    editor.setValue($scope.x)
    editor.setOption($scope.editorOptions)
    doc.markClean()

    editor.on('change', function() {
      var html = editor.getValue()
      var code = document.querySelector('div[data-example-id="editor"]')
      code.innerHTML = html
    })
  }

  function format() {
    $scope.editor.setValue(html_beautify($scope.editor.getValue()))
  }

  function initSassVariables() {
    $http.get('scss/variables.json').success(function(data) {
      $scope.variables = data
      $scope.applySass(false)

      var variables_keys = apSass.getKeys($scope)
      var icons_keys = apSass.getUrls()
      var fonts_keys = apSass.getFonts()

      $timeout(function() {
        var $colorpicker = $('.colorpicker')
        $colorpicker.colorpicker().on('changeColor', function(ev) {
          var scope = angular.element(this).scope()
          scope.variable.value = ev.color.toHex()

          $timeout(function() {
            if ($scope.autoapplysass) {
              $scope.autoApplySass()
            }
          }, 500)
        })
        $colorpicker.colorpicker().on('hide', function(ev) {
          var color = angular.element(this).scope().variable
          if (this.dataset.color !== color.value) {
          }
        })
        $('.sassVariable').each(function(index) {
          var scope = angular.element(this).scope()
          switch (scope.variable.type) {
            case 'icons':
              var src = icons_keys
              break
            case 'font':
              var src = fonts_keys
              break
            case 'boolean':
              var src = ['true', 'false']
              break
            case 'color':
            default:
              var src = variables_keys
          }
          $(this).typeahead({
            source: src,
            updater: function(item) {
              scope.variable.value = item
              return item
            }
          })
        })
      }, 1)
    })
  }

  function autoApplySass(event) {
    if ($scope.autoapplysass) {
      apSass.applySass($scope)
    }
  }

  function applySass(applyAll) {
    apSass.applySass($scope)
  }

  function resetBaseVariable(variable) {
    variable.value = variable.default
  }

  function colorpicker(type) {
    return type == 'color' ? true : false
  }

  function color(type, value) {
    return type == 'color' && /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(value) ? value : '#ffffff'
  }

  function setIsViewLoading(val) {
    $scope.isViewLoading = val
  }

  function saveCSS() {
    apSass.saveCSS($scope)
  }

  function saveSassVariables() {
    apSass.saveSassVar(apSass.getVariablesToString($scope))
  }

  function resetSassVariables() {
    initSassVariables()
    setTimeout(function() {
      $scope.applySass()
    }, 0)
  }

  function importSassVariables(string) {
    $scope = apSass.importVariables($scope, string)
    $scope.applySass()
  }

  function getGroupUrl() {
    return (
      'preview/' +
      angular
        .lowercase(this.group.name)
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-') +
      '.html'
    )
  }

  initSassVariables()
}
SassCtrl.$inject = ['$scope', '$http', 'apSass', '$timeout']

function PageCtrl($scope, $http, apSass) {}
PageCtrl.$inject = ['$scope', '$http', 'apSass']
