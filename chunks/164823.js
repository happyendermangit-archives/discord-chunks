function(e, t, n) {
    "use strict";

    function o(e, t) {
        return e.replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
    }
    n("781738"), e.exports = function(e, t) {
        e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = o(e.className, t) : e.setAttribute("class", o(e.className && e.className.baseVal || "", t))
    }
}