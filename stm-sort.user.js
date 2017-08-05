// ==UserScript==
// @name        STM Auto Sort
// @description STM Auto result sort so matches with more game cards will be put on top
// @include     http://www.steamtradematcher.com/compare
// @version     1.0.3
// @author      ssovit
// @namespace   http://www.steamtradematcher.com
// @icon        http://www.steamtradematcher.com/res/img/favicon.jpg
// @grant        none
// @updateURL    https://github.com/ssovit/userscripts/raw/master/stm-sort.user.js
// @downloadURL  https://github.com/ssovit/userscripts/raw/master/stm-sort.user.js
// @run-at document-end
// ==/UserScript==

(function($){
    'use strict';
    var checkMatches=function(){
        var panels=$('#match-results').children().detach();
        panels.sort(function(a,b){
            return $('.matches.filter-show',$(b)).length-$('.matches.filter-show',$(a)).length;
        });
        $('#match-results').append(panels);

        if($('#progress-percent').html()==100){
            //console.log("Everything Done");
            return;
        }
        setTimeout(function(){
            //console.log("Still need to sort");
            checkMatches();
        },3*1000);
    };
    checkMatches();
})(jQuery);