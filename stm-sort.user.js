// ==UserScript==
// @name        STM Auto Sort
// @description STM Auto result sort so matches with more game cards will be put on top
// @include     http://www.steamtradematcher.com/compare
// @include     http://www.steamtradematcher.com/tools/fullsets
// @version     1.1.0
// @author      ssovit
// @namespace   http://www.steamtradematcher.com
// @icon        http://www.steamtradematcher.com/res/img/favicon.jpg
// @grant        none
// @updateURL    https://github.com/ssovit/userscripts/raw/master/stm-sort.user.js
// @downloadURL  https://github.com/ssovit/userscripts/raw/master/stm-sort.user.js
// @run-at document-end
// ==/UserScript==

(function($) {
    'use strict';
    var checkMatches = function() {
        $('#match-results').children().each(function() {
            if (!$('.playerAvatar', $(this)).hasClass('online') && !$('.playerAvatar', $(this)).hasClass('in-game')) {
                $(this).remove();
            }
        });
        var panels = $('#match-results').children().detach();
        var getTradeCardCounts = function($el) {
            var a = $('.trade-button', $el).closest('a');
            var url = a.attr('href');
            var parts = url.split("/");
            var parts2 = parts[parts.length - 1];
            var cards = parts2.split(";");
            if ($('.trade-button span', $el).length < 1) {
                $('.trade-button', $el).append($("<span>").css({ fontWeight: 700, float: "right" }));
            }
            $('.trade-button span', $el).html("Count: " + cards.length);
            return cards.length;
        };
        panels.sort(function(a, b) {
            var countA = getTradeCardCounts($(a)) + $('.stm-user', $(a)).text().indexOf("Trade bot");
            var countB = getTradeCardCounts($(b)) + $('.stm-user', $(b)).text().indexOf("Trade bot");
            return countB - countA;
        });
        $('#match-results').append(panels);

        if ($('#progress-percent').html() == 100) {
            return;
        }
        setTimeout(function() {
            checkMatches();
        }, 3 * 1000);
    };
    var checkIfNoInventory = function() {
        if ($('#error-div:visible').length > 0) {
            document.location.reload();
        }
        if ($('#match-results .match-box').length > 0) {
            return;
        }
        if ($('#results .fullset-calc-results').length > 0) {
            return;
        }
        setTimeout(function() {
            checkIfNoInventory();
        }, 5 * 1000);
    };
    if ($('#match-results').length > 0) {
        checkMatches();
    }
    checkIfNoInventory();
})(jQuery);