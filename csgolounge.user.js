// ==UserScript==
// @name         CSGoLounge Trade Auto Bump
// @namespace    https://github.com/ssovit/userscripts
// @version      1.0.0
// @description  Auto Bump for CSGoLounge.com
// @author       ssovit
// @match        https://csgolounge.com/mytrades
// @grant        none
// @updateURL    https://github.com/ssovit/userscripts/raw/master/csgolounge.user.js
// @downloadURL  https://github.com/ssovit/userscripts/raw/master/csgolounge.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// @run-at document-end
// ==/UserScript==
(function () {
    'use strict';
    var getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var _nextBumpTimeout = getRandomInt(20, 30);

    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = "Bump In - " + minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }
    var _timer = $('<div>').css({
        fontSize: "16px",
        textAlign: "center",
        margin: "10px 0 0",
    }).attr("id", "bump-timer");
    $('main section.box').prepend(_timer);
    $('main section.box .tradepoll').each(function () {
        var _this = $(this);
        var _tradeID = _this.attr('id').substr("trade".length);
        var _bumpBtn = $('a.buttonright[onclick*="bumpTrade"]');
        _bumpBtn.click();
    });
    setTimeout(function () {
        location.reload();
    }, _nextBumpTimeout * 60 * 1000);
    startTimer(_nextBumpTimeout * 60, document.querySelector('#bump-timer'));
})();
