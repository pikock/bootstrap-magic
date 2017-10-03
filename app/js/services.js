'use strict'

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('apSass', []).factory('apSass', [
  '$http',
  function($http) {
    Sass.setWorkerUrl('/app/lib/sass/sass.worker.js')
    var sass = new Sass()
    window.sass = sass

    var files = [
      '_ads.scss',
      '_alert.scss',
      '_algolia.scss',
      '_anchor.scss',
      '_badge.scss',
      '_brand.scss',
      '_breadcrumb.scss',
      '_browser-bugs.scss',
      '_button-group.scss',
      '_buttons.scss',
      '_callouts.scss',
      '_card.scss',
      '_carousel.scss',
      '_clipboard-js.scss',
      '_close.scss',
      '_code.scss',
      '_colors.scss',
      '_component-examples.scss',
      '_content.scss',
      '_custom-forms.scss',
      '_dropdown.scss',
      '_examples.scss',
      '_featured-sites.scss',
      '_footer.scss',
      '_forms.scss',
      '_functions.scss',
      '_grid.scss',
      '_images.scss',
      '_input-group.scss',
      '_jumbotron.scss',
      '_list-group.scss',
      '_masthead.scss',
      '_media.scss',
      '_mixins.scss',
      '_modal.scss',
      '_nav.scss',
      '_navbar.scss',
      '_page-header.scss',
      '_pagination.scss',
      '_popover.scss',
      '_print.scss',
      '_progress.scss',
      '_reboot.scss',
      '_responsive-tests.scss',
      '_sidebar.scss',
      '_skiplink.scss',
      '_syntax.scss',
      '_tables.scss',
      '_team.scss',
      '_tooltip.scss',
      '_transitions.scss',
      '_type.scss',
      '_utilities.scss',
      '_variables.scss',
      'bootstrap-grid.scss',
      'bootstrap-reboot.scss',
      'bootstrap.scss',
      'mixins/_alert.scss',
      'mixins/_background-variant.scss',
      'mixins/_badge.scss',
      'mixins/_border-radius.scss',
      'mixins/_box-shadow.scss',
      'mixins/_breakpoints.scss',
      'mixins/_buttons.scss',
      'mixins/_clearfix.scss',
      'mixins/_float.scss',
      'mixins/_forms.scss',
      'mixins/_gradients.scss',
      'mixins/_grid-framework.scss',
      'mixins/_grid.scss',
      'mixins/_hover.scss',
      'mixins/_image.scss',
      'mixins/_list-group.scss',
      'mixins/_lists.scss',
      'mixins/_nav-divider.scss',
      'mixins/_navbar-align.scss',
      'mixins/_pagination.scss',
      'mixins/_reset-text.scss',
      'mixins/_resize.scss',
      'mixins/_screen-reader.scss',
      'mixins/_size.scss',
      'mixins/_table-row.scss',
      'mixins/_text-emphasis.scss',
      'mixins/_text-hide.scss',
      'mixins/_text-truncate.scss',
      'mixins/_transition.scss',
      'mixins/_visibility.scss',
      'utilities/_align.scss',
      'utilities/_background.scss',
      'utilities/_borders.scss',
      'utilities/_clearfix.scss',
      'utilities/_display.scss',
      'utilities/_embed.scss',
      'utilities/_flex.scss',
      'utilities/_float.scss',
      'utilities/_position.scss',
      'utilities/_screenreaders.scss',
      'utilities/_sizing.scss',
      'utilities/_spacing.scss',
      'utilities/_text.scss',
      'utilities/_visibility.scss',
      'docs.scss'
    ]

    var service = {
      sass: new Sass(),
      importVariables: importVariables,
      getVariables: getVariables,
      setVariables: setVariables,
      getKeys: getKeys,
      getUrls: getUrls,
      getFonts: getFonts,
      getVariablesToString: getVariablesToString,
      saveSassVar: saveSassVar,
      saveCSS: saveCSS,
      applySass: applySass
    }

    var cssToAdd = `$custom-checkbox-indicator-icon-checked: str-replace(
        url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$custom-control-indicator-checked-color}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E"),
        '#',
        '%23'
        )
        !default;
      $custom-checkbox-indicator-icon-indeterminate: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='#{$custom-checkbox-indicator-indeterminate-color}' d='M0 2h4'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $custom-radio-indicator-icon-checked: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='#{$custom-control-indicator-checked-color}'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      
      $custom-select-indicator: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='#{$custom-select-indicator-color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $navbar-dark-toggler-icon-bg: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-dark-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $navbar-light-toggler-icon-bg: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $carousel-control-prev-icon-bg: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
      $carousel-control-next-icon-bg: str-replace(
          url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E"),
          '#',
          '%23'
        )
        !default;
    `

    // public function

    function applySass(scope) {
      var vars = getVariables(scope)
      var stringvar = getVariablesToString(scope)

      preloadFile(files, stringvar + cssToAdd)

      // WebFont.load({
      //   google: {
      //     families: vars.fonts
      //   }
      // })
    }

    function preloadFile(files, scss) {
      var base = '../../scss/'
      var directory = ''

      sass.writeFile('toAddScss.scss', scss)

      sass.preloadFiles(base, directory, files, function callback(test) {
        var t0 = performance.now()

        sass.readFile('bootstrap.scss', function callback(bootstrapContent) {
          sass.compile("@import 'functions'; @import 'toAddScss';" + bootstrapContent, function(result) {
            console.log(result)
            addStyle(result.text)
            var t1 = performance.now()
            console.log('Call to doSomething took ' + (t1 - t0) / 1000 + ' seconds.')
          })
        })
      })
    }

    function addStyle(css) {
      var head = document.head || document.getElementsByTagName('head')[0]
      var style = document.createElement('style')
      var previousStyle = document.querySelector('.previewStyle')
      if (previousStyle) {
        previousStyle.remove()
      }
      style.type = 'text/css'
      style.classList.add('previewStyle')
      style.appendChild(document.createTextNode(css))

      head.appendChild(style)
    }

    preloadFile(files)

    function importVariables($scope, string) {
      var regex = {
        variable: /^\s*([^:]*)\s*:\s*([^\\;]*)/,
        emptyLine: /(^\s*$)/,
        comment: /(^\s*\/\/.*[^\r\n]*)/,
        commentMulti: /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//
      }

      var parse = function(data) {
        if (regex.commentMulti.test(data)) {
          data = data.replace(regex.commentMulti, '')
        }
        var variables = []
        var lines = data.split(/\r\n|\r|\n/)
        lines.forEach(function(line) {
          if (regex.comment.test(line)) {
            return
          } else if (regex.emptyLine.test(line)) {
            return
          } else if (regex.variable.test(line)) {
            var match = line.match(regex.variable)
            variables[match[1]] = match[2]
          }
        })
        return variables
      }

      var vars = parse(string)
      for (var i = 0; i < $scope.variables.length; i++) {
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          if (vars[$scope.variables[i].data[j].key]) {
            $scope.variables[i].data[j].value = vars[$scope.variables[i].data[j].key]
            delete vars[$scope.variables[i].data[j].key]
          }
        }
      }

      var myVars = {
        name: 'My Variables',
        data: []
      }

      for (var key in vars) {
        var type = 'text'
        if (key.toLowerCase().indexOf('color')) {
          type = 'color'
        }
        if (key.toLowerCase().indexOf('fontfamily')) {
          type = 'font'
        }
        var myVar = {
          key: key,
          value: vars[key],
          type: type
        }
        myVars.data.push(myVar)
      }
      $scope.variables.push(myVars)
      return $scope
    }

    function getVariables($scope, all) {
      var variables = {}
      var fonts = []
      for (var i = 0; i < $scope.variables.length; i++) {
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          if ($scope.variables[i].data[j].type == 'font') {
            fonts.push($scope.variables[i].data[j].value)
          }
          variables[$scope.variables[i].data[j].key] = $scope.variables[i].data[j].value
        }
      }
      return {
        variables: variables,
        fonts: fonts
      }
    }

    function setVariables($scope, vars) {
      for (var i = 0; i < $scope.variables.length; i++) {
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          $scope.variables[i].data[j].value = vars[$scope.variables[i].data[j].key]
        }
      }
      return $scope
    }

    function getKeys($scope) {
      var keys = [
        'escape(@string)',
        'percentage(@number)',
        'rgb(@r, @g, @b)',
        'rgba(@r, @g, @b, @a)',
        'hsl(@hue, @saturation, @lightness)',
        'hsla(@hue, @saturation, @lightness, @alpha)',
        'hsv(@hue, @saturation, @value)',
        'hsva(@hue, @saturation, @value, @alpha)',
        'saturate(@color, 10%)',
        'desaturate(@color, 10%)',
        'lighten(@color, 10%)',
        'darken(@color, 10%)',
        'fadein(@color, 10%)',
        'fadeout(@color, 10%)',
        'fade(@color, 50%)',
        'spin(@color, 10)',
        'mix(@color1, @color2, [@weight: 50%])',
        'greyscale(@color)',
        'contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%])',
        'multiply(@color1, @color2)',
        'screen(@color1, @color2)',
        'overlay(@color1, @color2)',
        'softlight(@color1, @color2)',
        'hardlight(@color1, @color2)',
        'difference(@color1, @color2)',
        'exclusion(@color1, @color2)',
        'average(@color1, @color2)',
        'negation(@color1, @color2)',
        'ceil(@number)',
        'floor(@number)',
        'percentage(@number)'
      ]

      for (var i = 0; i < $scope.variables.length; i++) {
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          keys.push($scope.variables[i].data[j].key)
        }
      }

      return keys
    }

    function getUrls($scope) {
      var keys = [
        "'../twitter-bootstrap/img/glyphicons-halflings.png'",
        "'../twitter-bootstrap/img/glyphicons-halflings-white.png'",
        "'../twitter-bootstrap/img/ap_icons_black_interface-orientation.png'",
        "'../twitter-bootstrap/img/ap_icons_white_interface-orientation.png'"
      ]
      return keys
    }

    function getFonts($scope) {
      var keys = [
        "'Helvetica Neue', Helvetica, Arial",
        'Georgia',
        "'Courrier New', Consolas",
        'Impact',
        "'Lucida Console', Monaco",
        "'Palatino Linotype','Book Antiqua'",
        "'Trebuchet MS'",
        'Tahoma, Geneva',
        'Verdana, Geneva',
        "'Times New Roman', Times"
      ]

      $.ajax({
        url: 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBb_pLbXGeesG8wE32FMtywG4Vsfq6Uk_8',
        type: 'GET',
        dataType: 'JSONP',
        success: function(data) {
          for (var i = 0; i < data.items.length; i++) {
            keys.push(data.items[i].family)
          }
        }
      })

      return keys
    }

    function getVariablesToString($scope) {
      var string = '' + '/*\n' + '* Orson http://en.orson.io , autreplanete http://www.autreplanete.com/ \n' + '*  \n' + '**/\n'
      for (var i = 0; i < $scope.variables.length; i++) {
        string += '\n\n// ' + $scope.variables[i].name + '\n'
        for (var j = 0; j < $scope.variables[i].data.length; j++) {
          string += $scope.variables[i].data[j].key + ': ' + $scope.variables[i].data[j].value + ';\n'
        }
      }
      return string
    }

    function saveSassVar(data) {
      var $form = $('<form>')
        .attr('method', 'POST')
        .attr('action', 'http://www.pikock-unis.com/tools/download.php')
        .append(
          $('<input>')
            .attr('type', 'hidden')
            .attr('name', 'data')
            .attr('value', data)
        )
        .append(
          $('<input>')
            .attr('type', 'hidden')
            .attr('name', 'type')
            .attr('value', 'scss')
        )
      $('body').append($form)
      $form.submit()
    }

    function saveCSS($scope) {
      var parser = new less.Parser({
        paths: ['../twitter-bootstrap/less/'], // Specify search paths for @import directives
        filename: 'bootstrap.less' // Specify a filename, for better error messages
      })
      $(document).load($('#twitterBootstrapLess').attr('href'), function(data) {
        var vars = lessEngine.getVariables($scope).variables
        for (name in vars) {
          data += (name.slice(0, 1) === '@' ? '' : '@') + name + ': ' + (vars[name].slice(-1) === ';' ? vars[name] : vars[name] + ';')
        }
        console.log(vars)
        parser.parse(data, function(err, tree) {
          if (err) {
            return console.error(err)
          }
          var type = $scope.minified ? 'mincss' : 'css'
          var css = tree.toCSS({ compress: $scope.minified })
          console.log(css)
          var $form = $('<form>')
            .attr('method', 'POST')
            .attr('action', 'http://www.pikock-unis.com/tools/download.php')
            .append(
              $('<input>')
                .attr('type', 'hidden')
                .attr('name', 'data')
                .attr('value', css)
            )
            .append(
              $('<input>')
                .attr('type', 'hidden')
                .attr('name', 'type')
                .attr('value', type)
            )
          $('body').append($form)
          $form.submit()
        })
      })
    }
    return service
  }
])

angular.module('bootstrapVariablesEditor.services', ['apSass']).value('version', '0.2')
