// ==UserScript==
// @name         Helper: Lok Sewa
// @namespace    http://ssovit.com
// @version      1.0.0
// @description  Forms Fill Helper for Arpit Photo Studio
// @author       Sovit Tamrakar
// @match        *://psconline.psc.gov.np/web/public-service-commission/signin*
// @updateURL    https://github.com/ssovit/userscripts/raw/master/loksewa.user.js
// @downloadURL  https://github.com/ssovit/userscripts/raw/master/loksewa.user.js
// @grant        none
// @require      https://code.jquery.com/jquery.min.js
// ==/UserScript==
(function() {
    'use strict';
    if (document.location.href.indexOf("pcsonline")) {
        if ($("#_58_login")
            .length > 0) {
            $("#_58_login")
                .on('change', function() {
                    var _val = $(this)
                        .val();
                    if (_val.indexOf("=") > -1) {
                        var _parts = _val.split("=");
                        $("#_58_login")
                            .val(_parts[0]);
                        $("#_58_password")
                            .val(_parts[1]);
                    }
                });
        }
    }
})();
