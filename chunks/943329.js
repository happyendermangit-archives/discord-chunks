function(t, r, n) {
    "use strict";
    var e = n("581031"),
        o = n("354848"),
        i = n("801127"),
        u = e(Function.toString);
    !o(i.inspectSource) && (i.inspectSource = function(t) {
        return u(t)
    }), t.exports = i.inspectSource
}