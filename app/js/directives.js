'use strict'

/* Directives */

window.angular
  .module('bootstrapVariablesEditor.directives', [])
  .directive('colorPickerApply', [
    function() {
      return {
        link: function(scope, element, attrs) {
          element.bind('change', function() {
            if (scope.variable.value.charAt(0) === '#') {
              element.colorpicker('setValue', scope.variable.value)
            }
          })
        }
      }
    }
  ])
  .directive('scrollTop', [
    function() {
      return {
        link: function(scope, element, attrs) {
          $('#scrollTop').hide()

          $(function() {
            $(window).scroll(function() {
              if ($(this).scrollTop() > 200) {
                $('#scrollTop').fadeIn()
              } else {
                $('#scrollTop').fadeOut()
              }
            })
          })

          $('#scrollTop').click(function() {
            $('body,html').animate(
              {
                scrollTop: 0
              },
              300
            )
            return false
          })
        }
      }
    }
  ])


 