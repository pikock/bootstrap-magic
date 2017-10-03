/* Controllers */

function SassCtrl($scope, $http, apSass, $timeout) {
  var scopeVar = {
    variables: {},
    fonts: {},
    autoapplysass: false,
    isViewLoading: false,
    minified: false
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
    saveSassVariables: saveSassVariables
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

  function initSassVariables() {
    $http.get('scss/variables.json').success(function(data) {
      if (window.localStorage) {
        // TODO: strange af
        for (var key in window.localStorage) {
          var url = 'http://pikock.github.io/bootstrap-magic/twitter-bootstrap/less/bootstrap.less:timestamp'
          if (key === url) {
            delete window.localStorage[key]
          }
        }
      }

      $scope.variables = data
      $scope.applySass(false)

      var keys = apSass.getKeys($scope)
      var icons = apSass.getUrls()
      var font = apSass.getFonts()

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
        $('.sassVariable').each(function(index) {
          var scope = angular.element(this).scope()
          switch (scope.variable.type) {
            case 'icons':
              var src = icons
              break

            case 'font':
              var src = font
              break

            case 'color':
            default:
              var src = keys
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
      var vars = apSass.getVariables($scope, false)
      less.modifyVars(vars.variables)

      WebFont.load({
        google: {
          families: vars.fonts
        }
      })
    }
  }

  function applySass(applyAll) {
    apSass.applySass($scope)
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
