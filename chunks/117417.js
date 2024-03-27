function(e) {
    "use strict";
    var t = e.exports = {};
    t.isIE = function(e) {
        var t;
        return (-1 !== (t = navigator.userAgent.toLowerCase()).indexOf("msie") || -1 !== t.indexOf("trident") || -1 !== t.indexOf(" edge/")) && (!e || e === function() {
            var e, t = 3,
                n = document.createElement("div"),
                r = n.getElementsByTagName("i");
            do n.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]-->"; while (r[0]);
            return t > 4 ? t : e
        }())
    }, t.isLegacyOpera = function() {
        return !!window.opera
    }
}