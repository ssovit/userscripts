// ==UserScript==
// @name         Simplo GG auto follow steps
// @namespace    https://github.com/ssovit/userscripts
// @version      1.1.0
// @description  Auto Bump for CSGoLounge.com
// @author       ssovit
// @match        https://simplo.gg/index.php?giveaway=*
// @grant        none
// @updateURL    https://github.com/ssovit/userscripts/raw/master/simplo.gg.user.js
// @downloadURL  https://github.com/ssovit/userscripts/raw/master/simplo.gg.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @run-at document-end
// ==/UserScript==
(function (_window) {
    'use strict';
    _window.openInNewTab = function () {
        console.log('no more new tab');
    };
    if ($('.sign-in .blur').length < 1) {
        var MyInterval = 3; // in seconds
        var i = 0;
        $('.mod-enter .enter-sec').each(function () {
            var _parent = $(this).parent();
            var _this = $(this);
            setTimeout(function () {
                _this.trigger('click');
                $('.takeaction', _parent).click();
            }, i * MyInterval * 1000);
            i++;


        });
    }
})(window);
