function(e, t, n) {
    "use strict";

    function r(e) {
        let t;
        let n = new Set,
            r = (e, r) => {
                let i = "function" == typeof e ? e(t) : e;
                if (i !== t) {
                    let e = t;
                    t = r ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                }
            },
            i = () => t,
            a = (e, r = i, a = Object.is) => {
                console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                let o = r(t);

                function s() {
                    let n = r(t);
                    if (!a(o, n)) {
                        let t = o;
                        e(o = n, t)
                    }
                }
                return n.add(s), () => n.delete(s)
            },
            o = {
                setState: r,
                getState: i,
                subscribe: (e, t, r) => t || r ? a(e, t, r) : (n.add(e), () => n.delete(e)),
                destroy: () => n.clear()
            };
        return t = e(r, i, o), o
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}