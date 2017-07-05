// ==UserScript==
// @name         Steam Stickers Helper
// @namespace    https://github.com/ssovit/userscripts
// @version      1.0.0
// @description  Sticker pasting helper for Lazy
// @author       ssovit
// @match        http://steamcommunity.com/id/*/stickers
// @grant        none
// @updateURL    https://github.com/ssovit/userscripts/raw/master/steamstickers.user.js
// @downloadURL  https://github.com/ssovit/userscripts/raw/master/steamstickers.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @run-at document-end
// ==/UserScript==
(function () {
    'use strict';
    $('#scene_selector').on('click', '.item', function () {
        setTimeout(function () {
            var stickers = $('#sticker_selector .sticker_item');
            if (stickers.length < 16) {
                stickers.trigger('click');
                setTimeout(function () { g_StickerManager.SaveScene(false); }, 5 * 1000);

            }
        }, 5 * 1000);

    });

})();
