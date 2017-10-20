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
      mode: 'text/html',
      onKeyEvent: function(e, s) {
        if (s.type === 'keyup') {
          window.CodeMirror.showHint(e)
        }
      },
      extraKeys: { 'Ctrl-Space': 'autocomplete' }
    },
    myHTML:
      'I am an <code>HTML</code>string with ' + '<a href="#">links!</a> and other <em>stuff</em>',
    customHtml: `<div class="bd-example" data-example-id="">
      <div class="p-4 mb-2 bg-primary text-white">.bg-primary</div>
      <div class="p-4 mb-2 bg-secondary text-white">.bg-secondary</div>
      <div class="p-4 mb-2 bg-success text-white">.bg-success</div>
      <div class="p-4 mb-2 bg-danger text-white">.bg-danger</div>
      <div class="p-4 mb-2 bg-warning text-white">.bg-warning</div>
      <div class="p-4 mb-2 bg-info text-white">.bg-info</div>
      <div class="p-4 mb-2 bg-light text-gray-dark">.bg-light</div>
      <div class="p-4 mb-2 bg-dark text-white">.bg-dark</div>
      <div class="p-4 mb-2 bg-white text-gray-dark">.bg-white</div>
      <div class="p-4 mb-2 swatch-100">.swatch-100</div>
      <div class="p-4 mb-2 swatch-200">.swatch-200</div>
      <div class="p-4 mb-2 swatch-300">.swatch-300</div>
      <div class="p-4 mb-2 swatch-400">.swatch-400</div>
      <div class="p-4 mb-2 swatch-500">.swatch-500</div>
      <div class="p-4 mb-2 swatch-600">.swatch-600</div>
      <div class="p-4 mb-2 swatch-700">.swatch-700</div>
      <div class="p-4 mb-2 swatch-800">.swatch-800</div>
      <div class="p-4 mb-2 swatch-900">.swatch-900</div>
    </div>
    `
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
    format: format,
    toggle: toggle
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

  window.CodeMirror.commands.autocomplete = function(cm) {
    window.CodeMirror.showHint(cm, window.CodeMirror.hint.html)
  }

  function toggle(group) {
    group.hidden = !group.hidden
  }

  function codemirrorLoaded(editor) {
    $scope.editor = editor
    // var modification = 0
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
    $scope.editor.setValue(window.html_beautify($scope.editor.getValue()))
  }

  function initSassVariables() {
    $http({
      method: 'GET',
      url: 'scss/variables.json'
    }).then(function(response) {
      $scope.variables = response.data.map(function(d) {
        d.hidden = true
        return d
      })
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
    return type === 'color'
  }

  function color(type, value) {
    return type === 'color' && /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(value) ? value : '#ffffff'
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
