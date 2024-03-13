function(t, r, e) {
    "use strict";
    var n = e("418855"),
        o = e("161323");
    t.exports = function(t, r, e, i) {
        try {
            return i ? r(n(e)[0], e[1]) : r(e)
        } catch (r) {
            o(t, "throw", r)
        }
    }
}