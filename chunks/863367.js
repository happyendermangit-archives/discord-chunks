function(e, t, n) {
    "use strict";
    var r = n("503486"),
        i = n("718530"),
        o = n("125359"),
        s = n("210506"),
        a = n("602178"),
        c = n("174669"),
        u = n("459149"),
        d = n("719756"),
        l = n("140925"),
        f = n("693523"),
        p = i && i.prototype,
        h = c("species"),
        v = !1,
        g = o(r.PromiseRejectionEvent),
        b = s("Promise", function() {
            var e = a(i),
                t = e !== String(i);
            if (!t && 66 === f || l && !(p.catch && p.finally)) return !0;
            if (!f || f < 51 || !/native code/.test(e)) {
                var n = new i(function(e) {
                        e(1)
                    }),
                    r = function(e) {
                        e(function() {}, function() {})
                    };
                if ((n.constructor = {})[h] = r, !(v = n.then(function() {}) instanceof r)) return !0
            }
            return !t && (u || d) && !g
        });
    e.exports = {
        CONSTRUCTOR: b,
        REJECTION_EVENT: g,
        SUBCLASSING: v
    }
}