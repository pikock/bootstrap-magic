/* Controllers */
var angular = window.angular

function SassCtrl($scope, $http, apSass, $timeout, $sce, $q) {
  var scopeVar = {
    variables: {},
    fonts: {},
    templates: undefined,
    autoapplysass: true,
    isViewLoading: false,
    show: 'variables',
    subRoute: 'html',
    showHTML: true,
    showCSS: true,
    editorOptions: {
      css: {
        lineWrapping: false,
        lineNumbers: true,
        firstLineNumber: 1,
        mode: 'css',
        tabSize: 2,
        onKeyEvent: function(e, s) {
          if (s.type === 'keyup') {
            window.CodeMirror.showHint(e)
          }
        },
        extraKeys: { 'Ctrl-Space': 'autocomplete' }
      },
      html: {
        lineWrapping: false,
        lineNumbers: true,
        firstLineNumber: 1,
        mode: 'text/html',
        tabSize: 2,
        onKeyEvent: function(e, s) {
          if (s.type === 'keyup') {
            window.CodeMirror.showHint(e)
          }
        },
        extraKeys: { 'Ctrl-Space': 'autocomplete' }
      }
    },
    template: {
      blobUrl: '',
      html: '<h1>H1</h1><h2>H2</h2><h3>H3</h3><h4>H4</h4><h5>H5</h5><h6>H6</h6>',
      css: ''
    }
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
    initTemplatesVariables: initTemplatesVariables,
    resetBaseVariable: resetBaseVariable,
    codemirrorLoaded: codemirrorLoaded,
    format: format,
    toggle: toggle,
    goTo: goTo,
    chooseTemplate: chooseTemplate,
    generatePreviewHtml: generatePreviewHtml
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

  function goTo(routePath, route) {
    if (route === 'show' || route === 'preview') {
      generatePreviewHtml()
    }
    $scope[routePath] = route
  }

  function toggle(group) {
    var value = !group.hidden
    $scope.variables.forEach(function(g) {
      g.hidden = true
    })
    group.hidden = value
  }

  function codemirrorLoaded(selector) {
    var el = document.querySelector('.code-mirror[data-template="' + selector + '"]')
    var editor = window.CodeMirror(el, $scope.editorOptions[selector])
    $scope.editor = editor
    var doc = editor.getDoc()
    editor.focus()
    editor.setValue($scope.template[selector])
    doc.markClean()

    window.doc = doc
    window.editor = editor

    editor.on('change', function() {
      var data = editor.getValue()
      $scope.template[selector] = data
    })
  }

  function chooseTemplate(template) {
    $http({
      method: 'GET',
      url: 'preview/' + template.slug + '.html'
    }).then(function(templateHtml) {
      $scope.template.html = templateHtml.data
      $http({
        method: 'GET',
        url: 'preview/' + template.slug + '.css'
      }).then(function(templateCss) {
        $scope.template.css = templateCss.data
        $scope.show = 'variables'
        applySass()
      })
    })
  }

  function format() {
    $scope.editor.setValue(window.html_beautify($scope.editor.getValue()))
  }

  function callColorpicker() {
    var colorpicker = $('.colorpicker')
    colorpicker.colorpicker().on('changeColor', function(event) {
      var scope = angular.element(this).scope()
      scope.variable.value = event.color.toHex()

      if ($scope.autoapplysass) {
        $scope.autoApplySass()
      }
    })

    colorpicker.colorpicker().on('show', function() {
      $('.blockview').removeClass('is-hidden')
    })

    colorpicker.colorpicker().on('hide', function() {
      $('.blockview').addClass('is-hidden')
      var color = angular.element(this).scope().variable
      if (this.dataset.color !== color.value) {
      }
    })
  }

  function initTemplatesVariables() {
    $http({
      method: 'GET',
      url: 'data/template-html.json'
    }).then(function(response) {
      $scope.templates = response.data
    })
  }

  function initSassVariables() {
    $http({
      method: 'GET',
      url: 'data/scss-variables.json'
    }).then(function(response) {
      $scope.variables = response.data.map(function(d) {
        d.hidden = true
        return d
      })

      $scope.applySass(false)

      var variablesKeys = apSass.getKeys($scope)
      var iconsKeys = apSass.getUrls()
      var fontsKeys = apSass.getFonts()

      $timeout(function() {
        callColorpicker()
        $('.sassVariable').each(function(index) {
          var src
          var scope = angular.element(this).scope()
          switch (scope.variable.type) {
            case 'icons':
              src = iconsKeys
              break
            case 'font':
              src = fontsKeys
              break
            case 'boolean':
              src = ['true', 'false']
              break
            case 'color':
            default:
              src = variablesKeys
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
      applySass(event)
    }
  }

  function generatePreviewHtml(css, html) {
    var generatedCss = css || $scope.generatedCss
    var templateHtml = html || $scope.template.html
    var templateCss = '<style>' + $scope.template.css + '</style>'
    var generateHtml =
      '<!doctype html><html lang="en"><head>' +
      generatedCss +
      templateCss +
      '</head><body><div class="preview">' +
      templateHtml +
      '</div></body></html>'
    var blob = new Blob([generateHtml], {
      type: 'text/html'
    })

    $timeout(function() {
      // callColorpicker()
      $scope.template.blobUrl = $sce.trustAsResourceUrl(URL.createObjectURL(blob))
    }, 0)
  }

  function applySass() {
    apSass
      .applySass($scope)
      .then(function(result) {
        $scope.generatedCss = '<style>' + result + '</style>'
        generatePreviewHtml()
      })
      .catch(function(error) {
        console.error(error)
      })
  }

  function resetBaseVariable(variable) {
    $timeout(function() {
      variable.value = variable.default
    }, 0)
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
  initTemplatesVariables()
}

SassCtrl.$inject = ['$scope', '$http', 'apSass', '$timeout', '$sce', '$q']
