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
            o = function(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
                console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                let s = r(t);

                function a() {
                    let n = r(t);
                    if (!o(s, n)) {
                        let t = s;
                        e(s = n, t)
                    }
                }
                return n.add(a), () => n.delete(a)
            },
            s = {
                setState: r,
                getState: i,
                subscribe: (e, t, r) => t || r ? o(e, t, r) : (n.add(e), () => n.delete(e)),
                destroy: () => n.clear()
            };
        return t = e(r, i, s), s
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007")
}