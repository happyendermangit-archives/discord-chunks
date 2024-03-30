function(t, r, n) {
    "use strict";
    var e = n("581031"),
        o = n("339718"),
        i = e({}.hasOwnProperty);
    t.exports = Object.hasOwn || function(t, r) {
        return i(o(t), r)
    }
}