// ==UserScript==
// @name         EDV Check
// @namespace    https://ssovit.com
// @version      2.0.0
// @description  Try to take over the world!
// @author       Sovit Tamrakar
// @match        https://dvprogram.state.gov/ESC/CheckStatus.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=state.gov
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var fileInput=jQuery("<textarea>",{rows:6,class:"form-control"}).css({width:"100%",});
    var card=jQuery("<div>",{class:"card panel-default"})
    .append(jQuery("<div>",{class:"card-header"}).html("Copy and paste Confirmation PDF file content"))
    .append(jQuery("<div>",{class:"card-body"})
            .append(jQuery("<div>",{class:"col-sm-12"}).append(fileInput)));
    jQuery("#main .page-header:eq(0)").after(card);
    fileInput.on('change',function(e){
        fillFields(jQuery(this).val());
    })
    function fillFields(tx) {
        tx=tx.replace(/(\s+)/i," ");
        var conf = tx.match(/Confirmation Number(?:\s+)?:(?:\s+)?(\w+)/i)[1];
        var lastName = tx.match(/Entrant Name(?:\s+)?:(?:\s+)?([a-zA-Z0-9 ]+),/i)[1];
        var year = tx.match(/Year of Birth(?:\s+)?:(?:\s+)?(\d+)/i)[1];
        jQuery("#txtCN").val(conf);
        jQuery("#txtLastName").val(lastName);
        jQuery("#txtYOB").val(year);
        jQuery("#txtCodeInput").focus();
    }
})();
