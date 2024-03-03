function(e, t, n) {
    "use strict";
    var o = n("32861");
    t.__esModule = !0, t.default = function(e, t) {
        e.classList ? e.classList.add(t) : !(0, r.default)(e, t) && ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
    };
    var r = o(n("370713"));
    e.exports = t.default
}