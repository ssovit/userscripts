// ==UserScript==
// @name         Steam Stickers Helper
// @namespace    https://github.com/ssovit/userscripts
// @version      1.1.0
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
    var scenes = $('#scene_selector .item');
    var i = 0;
    $('#scene_selector .item').on('click', 'img', function () {
        setTimeout(function () {
            var stickers = $('#sticker_selector .sticker_item');
            if (stickers.length < 16) {
                stickers.trigger('click');
                setTimeout(function () { g_StickerManager.SaveScene(false); }, 3 * 1000);

            } else {
                console.log('already completed');
            }
        }, 3 * 1000);

    });
    var doScene = function () {
        if (i < scenes.length) {
            $('#scene_selector .item:eq(' + i + ') img').trigger('click');
            setTimeout(function () {
                i++;
                doScene();
            }, 10 * 1000);
        }
    };
    doScene();
})();
