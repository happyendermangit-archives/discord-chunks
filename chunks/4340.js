function(t, r, n) {
    "use strict";
    var e = n("230364"),
        o = n("97131");
    t.exports = function(t, r, n) {
        return n.get && e(n.get, r, {
            getter: !0
        }), n.set && e(n.set, r, {
            setter: !0
        }), o.f(t, r, n)
    }
}