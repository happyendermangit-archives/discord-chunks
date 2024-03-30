function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("653041"), i = n("538036").default;
    let r = [],
        s = !1;
    t.default = {
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