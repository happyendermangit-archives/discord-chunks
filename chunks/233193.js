function(e, t, n) {
    "use strict";
    var i = e.exports = {};
    i.isIE = function(e) {
        var t;
        return (-1 !== (t = navigator.userAgent.toLowerCase()).indexOf("msie") || -1 !== t.indexOf("trident") || -1 !== t.indexOf(" edge/")) && (!e || e === function() {
            var e, t = 3,
                n = document.createElement("div"),
                i = n.getElementsByTagName("i");
            do n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->"; while (i[0]);
            return t > 4 ? t : e
        }())
    }, i.isLegacyOpera = function() {
        return !!window.opera
    }
}