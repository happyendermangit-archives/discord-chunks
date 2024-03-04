function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("424973"), i = n("788235").default;
    let s = [],
        r = !1;
    var a = {
        ...i,
        awaitOnline: () => new Promise(e => {
            if (i.isOnline()) return e();
            {
                if (s.push(e), r) return;
                r = !0;
                let t = () => {
                    s.forEach(e => e()), s.length = 0, r = !1, i.removeOnlineCallback(t)
                };
                i.addOnlineCallback(t)
            }
        })
    }
}