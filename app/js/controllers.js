/* Controllers */
var angular = window.angular

function SassCtrl($scope, $http, apSass, $timeout, $sce, $q) {
  var scopeVar = {
    variables: {},
    fonts: {},
    templates: undefined,
    autoapplysass: true,
    isViewLoading: false,
    loading: true,
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
        tabSize: 2
      },
      html: {
        lineWrapping: false,
        lineNumbers: true,
        firstLineNumber: 1,
        mode: 'text/html',
        tabSize: 2
      }
    },
    fixedContent: {
      blobUrl: undefined,
      html: undefined
    },
    template: {
      blobUrl: '',
      html:
        '<div id="example" class="container"><div class="row"><div class="col-sm-12"><h3>Import your HTML/CSS code or use on of Bootstrap ready-to-start example</h3><p>You can add your own HTML/CSS and see how your Bootstrap themes looks like on your website or application. If you like it, just save your theme. Enjoy and share the love!</p></div></div></div>',
      css: '#example{margin-top: 50px;}'
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
    generatePreviewHtml: generatePreviewHtml,
    generateFixedHtml: generateFixedHtml,
    iframeMoveTo: iframeMoveTo,
    scrollToCategory: scrollToCategory
  }

  window.scrollToCategory = scrollToCategory

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

  function goTo(routePath, route) {
    // console.log(routePath, route)
    if (
      (routePath === 'subRoute' && route === 'preview') ||
      (routePath === 'show' && route === 'editorHtml')
    ) {
      generatePreviewHtml()
    }
    $scope[routePath] = route
  }

  function scrollToCategory(category) {
    var data = document.querySelector('.category-' + category)
    var tmp = angular.element(data).scope()
    tmp.$apply(function() {
      $scope.variables.forEach(function(g) {
        g.hidden = true
      })
      tmp.group.hidden = false
    })
    $timeout(function() {
      $('.variables-container').animate(
        {
          scrollTop: data.offsetTop
        },
        0
      )
    }, 0)
  }

  function toggle(group) {
    var value = !group.hidden
    $scope.variables.forEach(function(g) {
      g.hidden = true
    })
    group.hidden = value
    if (!value) {
      iframeMoveTo(group.slug)
    }
  }

  function codemirrorLoaded(selector, noContent) {
    var el = document.querySelector('.code-mirror[data-template="' + selector + '"]')
    var editor = window.CodeMirror(el, $scope.editorOptions[selector])
    $scope.editor = editor
    var doc = editor.getDoc()
    editor.focus()
    if (!noContent) {
      editor.setValue($scope.template[selector])
      editor.on('change', function() {
        var data = editor.getValue()
        $scope.template[selector] = data
      })
    }

    doc.markClean()
  }

  function chooseTemplate(template) {
    $scope.loading = true
    $http({
      method: 'GET',
      url: 'preview/' + template.slug + '.html'
    })
      .then(function(templateHtml) {
        $http({
          method: 'GET',
          url: 'preview/' + template.slug + '.css'
        })
          .then(function(templateCss) {
            $scope.subRoute = 'preview'
            $scope.template.html = templateHtml.data
            $scope.template.css = templateCss.data
            generatePreviewHtml()
          })
          .catch(function(error) {
            console.error(error)
            $scope.loading = false
          })
      })
      .catch(function(error) {
        console.error(error)
        $scope.loading = false
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
    $scope.loading = true
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

  function iframeMoveTo(categoryName) {
    var content = $('iframe.fixedPreview').get(0).contentWindow
    var category = content.document.querySelector('div[data-category="' + categoryName + '"]')

    if (category) {
      var categoryHeight = category.offsetTop
      $(content).scrollTop(categoryHeight)
    }
  }

  function autoApplySass(event) {
    $scope.loading = true
    if ($scope.autoapplysass) {
      applySass(event)
    }
  }

  function getFixedHtml() {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: 'data/fixed-content.html'
      })
        .then(function(response) {
          $scope.fixedContent.html = response.data
          resolve()
        })
        .catch(function(error) {
          console.error(error)
          reject(error)
        })
    })
  }

  function generateFixedHtml(css, html) {
    getFixedHtml()
      .then(function() {
        var templateHtml = html || $scope.fixedContent.html
        var generateHtml =
          '<!doctype html><html lang="en"><head>' +
          '<style>body { display: none }</style>' +
          '</head><body><div class="preview">' +
          templateHtml +
          '</div>' +
          '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>' +
          '</body></html>'
        var blob = new Blob([generateHtml], {
          type: 'text/html'
        })

        $scope.fixedContent.blobUrl = $sce.trustAsResourceUrl(URL.createObjectURL(blob))
      })
      .catch(function(error) {
        console.error(error)
        $scope.loading = false
      })
  }

  function generatePreviewHtml(css, html) {
    var generatedCss = css || $scope.generatedCss || ''
    var templateHtml = html || $scope.template.html || ''
    var templateCss = '<style>' + $scope.template.css + '</style>'
    var fonts = apSass.fonts
    var scriptToAdd
    if (fonts && fonts.length !== 0) {
      scriptToAdd =
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js"></script>' +
        '<script>window.WebFont.load({google: {families: ' +
        JSON.stringify(apSass.fonts) +
        '}})</script>'
    } else {
      scriptToAdd = ''
    }

    var generateHtml =
      '<!doctype html><html lang="en"><head>' +
      generatedCss +
      templateCss +
      '</head><body><div class="preview">' +
      templateHtml +
      '</div>' +
      '<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>' +
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>' +
      '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>' +
      scriptToAdd +
      '</body></html>'
    var blob = new Blob([generateHtml], {
      type: 'text/html'
    })

    $scope.template.blobUrl = $sce.trustAsResourceUrl(URL.createObjectURL(blob))
    $scope.loading = false
  }

  function applySass() {
    $scope.loading = true
    apSass
      .applySass($scope)
      .then(function(result) {
        $scope.generatedCss = '<style>' + result + '</style>'
        $scope.loading = false
        $scope.alert = undefined
      })
      .catch(function(error) {
        console.error(error)
        $scope.alert = error
        $scope.loading = false
      })
  }

  function resetBaseVariable(variable) {
    variable.value = variable.default
    applySass()
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
    // TODO: Open Modal
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

  //
  // INIT
  //

  initSassVariables()
  initTemplatesVariables()
  generateFixedHtml()
}

SassCtrl.$inject = ['$scope', '$http', 'apSass', '$timeout', '$sce', '$q']
