// ==UserScript==
// @name         Auto Filller - Arpit Photo Studio
// @namespace    http://ssovit.com
// @version      0.8
// @description  Forms Fill Helper for Arpit Photo Studio
// @author       You
// @match        http://tsc.gov.np/dform
// @match        http://tsc.gov.np/userlogin
// @updateURL    https://github.com/ssovit/userscripts/raw/master/autofiller.user.js
// @downloadURL  https://github.com/ssovit/userscripts/raw/master/autofiller.user.js
// @grant        none
// @run-at document-end
// ==/UserScript==
(function() {
	'use strict';
	/* Entry Form Start */
	if ($('#frmdform')
		.length > 0) {
		var myFont = {
			"post-rules": [
				["्ा", ""],
				["(त्र|त्त)([^उभप]+?)m", "$1m$2"],
				["त्रm", "क्र"],
				["त्तm", "क्त"],
				["([^उभप]+?)m", "m$1"],
				["उm", "ऊ"],
				["भm", "झ"],
				["पm", "फ"],
				["इ{", "ई"],
				["ि((.्)*[^्])", "$1ि"],
				["(.[ािीुूृेैोौंःँ]*?){", "{$1"],
				["((.्)*){", "{$1"],
				["{", "र्"],
				["([ाीुूृेैोौंःँ]+?)(्(.्)*[^्])", "$2$1"],
				["्([ाीुूृेैोौंःँ]+?)((.्)*[^्])", "्$2$1"],
				["([ंँ])([ािीुूृेैोौः]*)", "$2$1"],
				["ँँ", "ँ"],
				["ंं", "ं"],
				["ेे", "े"],
				["ैै", "ै"],
				["ुु", "ु"],
				["ूू", "ू"],
				["^ः", ":"],
				["टृ", "ट्ट"],
				["ेा", "ाे"],
				["ैा", "ाै"],
				["अाे", "ओ"],
				["अाै", "औ"],
				["अा", "आ"],
				["एे", "ऐ"],
				["ाे", "ो"],
				["ाै", "ौ"]
			],
			"char-map": {
				"÷": "/",
				"v": "ख",
				"r": "च",
				"\"": "ू",
				"~": "ञ्",
				"z": "श",
				"ç": "ॐ",
				"f": "ा",
				"b": "द",
				"n": "ल",
				"j": "व",
				"×": "×",
				"V": "ख्",
				"R": "च्",
				"ß": "द्म",
				"^": "६",
				"Û": "!",
				"Z": "श्",
				"F": "ँ",
				"B": "द्य",
				"N": "ल्",
				"Ë": "ङ्ग",
				"J": "व्",
				"6": "ट",
				"2": "द्द",
				"¿": "रू",
				">": "श्र",
				":": "स्",
				"§": "ट्ट",
				"&": "७",
				"£": "घ्",
				"•": "ड्ड",
				".": "।",
				"«": "्र",
				"*": "८",
				"„": "ध्र",
				"w": "ध",
				"s": "क",
				"g": "न",
				"æ": "“",
				"c": "अ",
				"o": "य",
				"k": "प",
				"W": "ध्",
				"Ö": "=",
				"S": "क्",
				"Ò": "¨",
				"_": ")",
				"[": "ृ",
				"Ú": "’",
				"G": "न्",
				"ˆ": "फ्",
				"C": "ऋ",
				"O": "इ",
				"Î": "ङ्ख",
				"K": "प्",
				"7": "ठ",
				"¶": "ठ्ठ",
				"3": "घ",
				"9": "ढ",
				"?": "रु",
				";": "स",
				"'": "ु",
				"#": "३",
				"¢": "द्घ",
				"/": "र",
				"+": "ं",
				"ª": "ङ",
				"t": "त",
				"p": "उ",
				"|": "्र",
				"x": "ह",
				"å": "द्व",
				"d": "म",
				"`": "ञ",
				"l": "ि",
				"h": "ज",
				"T": "त्",
				"P": "ए",
				"Ý": "ट्ठ",
				"\\": "्",
				"Ù": ";",
				"X": "ह्",
				"Å": "हृ",
				"D": "म्",
				"@": "२",
				"Í": "ङ्क",
				"L": "ी",
				"H": "ज्",
				"4": "द्ध",
				"±": "+",
				"0": "ण्",
				"<": "?",
				"8": "ड",
				"¥": "र्‍",
				"$": "४",
				"¡": "ज्ञ्",
				",": ",",
				"©": "र",
				"(": "९",
				"‘": "ॅ",
				"u": "ग",
				"q": "त्र",
				"}": "ै",
				"y": "थ",
				"e": "भ",
				"a": "ब",
				"i": "ष्",
				"‰": "झ्",
				"U": "ग्",
				"Q": "त्त",
				"]": "े",
				"˜": "ऽ",
				"Y": "थ्",
				"Ø": "्य",
				"E": "भ्",
				"A": "ब्",
				"M": "ः",
				"Ì": "न्न",
				"I": "क्ष्",
				"5": "छ",
				"´": "झ",
				"1": "ज्ञ",
				"°": "ङ्ढ",
				"=": ".",
				"Æ": "”",
				"‹": "ङ्घ",
				"%": "५",
				"¤": "झ्",
				"!": "१",
				"-": "(",
				"›": "द्र",
				")": "०",
				"…": "‘",
				"Ü": "%"
			}
		};

		function preeti(text, font) {
			var output = '';
			for (var w = 0; w < text.length; w++) {
				var letter = text[w];
				output += myFont['char-map'][letter] || letter;
			}
			for (var r = 0; r < myFont['post-rules'].length; r++) {
				output = output.replace(new RegExp(myFont['post-rules'][r][0], 'g'), myFont['post-rules'][r][1]);
			}
			return output;
		}

		function processIt(_text) {
			var _data = _text.split("\n");
			var _fields = ['#uname', '#nagariktanum', '#issuedistictdate', '#fathersfullname', '#amakonam', '#bajekonamethar', '#patiwapatnikoname', '#tole,#patrachartheganatole'];
			$.each(_fields, function(_k, _val) {
				$(_val)
					.val(_data[_k]);
			});
		}
		var _wrapper = $("<div></div>")
			.css({
				display: 'flex',
				flexFlow: 'wrap',
				alignItems: 'flex-start'
			});
		var _label = $("<div></div>")
			.css({
				width: '30%',
				fontSize: 16,
				paddingTop: 6,
				lineHeight: '30px',
				fontWeight: 700,
				paddingRight: 10,
				textAlign: 'right',
			});
		_label.append("<div>नाम</div>");
		_label.append("<div>नागरिकता नं</div>");
		_label.append("<div>नागरिकता लिएको जिल्ला र मिति</div>");
		_label.append("<div>बाबुको नाम</div>");
		_label.append("<div>आमाको नाम</div>");
		_label.append("<div>बाजेको नाम</div>");
		_label.append("<div>पति वा पत्नीको नाम</div>");
		_label.append("<div>गाँउ / टोल</div>");
		var _textarea = $("<textarea></textarea>")
			.css({
				width: "70%",
				height: "260px",
				fontFamily: "Preeti",
				fontSize: 24,
				lineHeight: '30px',
			});
		$('#frmdform')
			.prepend(_wrapper);
		_wrapper.append(_label)
			.append(_textarea);
		_textarea.on('keyup', function() {
			processIt(preeti($(this)
				.val()));
		});
		var mirrorFields = {
			"#passedfrom": "#talimdinesanstha",
			"#passedexam": "#talimkoname",
			"#passeddate": "#talimutirnasal,#talimsamma",
			"#passedshreni": "#talimshreni",
			"#passedmainsubject": "#talimbisaye"
		}
		$.each(mirrorFields, function(_from, _to) {
			$(_from)
				.data('mirror-target', _to);
			$(_from)
				.on('keyup', function() {
					var _target = $(this)
						.data('mirror-target');
					$(_target)
						.val($(this)
							.val());
				});
		});
	}
	/* Entry Form End */
	/* Voucher Form Start */
	if ($("#frmvoucher")
		.length > 0) {
		$("#voucheruserid")
			.on('keyup', function() {
				var _val = $(this)
					.val();
				if (_val.indexOf("=") > -1) {
					var _parts = _val.split("=");
					$("#voucheruserid")
						.val(_parts[0]);
					$("#voucherpassword")
						.val(_parts[1]);
				}
			});
		$("#applicationid")
			.on('keyup', function() {
				$('#applicationid1')
					.val($(this)
						.val());
			});
		$("#voucherid")
			.on('keyup', function() {
				$('#voucherid1')
					.val($(this)
						.val());
			});
	}
	/* Voucher Form End */
	// Coding is AWESOME!!
})();