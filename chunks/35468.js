function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("424973"), i = n("788235").default;
    let r = [],
        s = !1;
    var a = {
        ...i,
        awaitOnline: () => new Promise(e => {
            if (i.isOnline()) return e();
            {
                if (r.push(e), s) return;
                s = !0;
                let t = () => {
                    r.forEach(e => e()), r.length = 0, s = !1, i.removeOnlineCallback(t)
                };
                i.addOnlineCallback(t)
            }
        })
    }
}