/**
 * @license Autre Planete v"AP_VERSION_FULL"
 * (c) 2010-2013 Autre Planete, SAS. http://www.autreplanete.com
 * License: MIT
 */

(function(window, document, undefined) {

    var ap = window.ap || (window.ap = {});
    
    function thierry(){
        return 'Thierry';
    }
    
    function publishExternalAPI(ap){
      angular.extend(ap, {
        'thierry': thierry
      });
    }
    
    publishExternalAPI(ap);
    
})(window, document);