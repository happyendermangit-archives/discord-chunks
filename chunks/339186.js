function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return r
        }
    });
    var i = n("477150");

    function r(t, e) {
        t.classList ? t.classList.add(e) : !(0, i.default)(t, e) && ("string" == typeof t.className ? t.className = t.className + " " + e : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + e))
    }
}