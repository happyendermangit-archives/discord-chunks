function(e, t, n) {
    "use strict";

    function r(e) {
        let t;
        let n = new Set,
            r = (e, r) => {
                let a = "function" == typeof e ? e(t) : e;
                if (a !== t) {
                    let e = t;
                    t = r ? a : Object.assign({}, t, a), n.forEach(n => n(t, e))
                }
            },
            a = () => t,
            i = function(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Object.is;
                console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                let o = r(t);

                function s() {
                    let n = r(t);
                    if (!i(o, n)) {
                        let t = o;
                        e(o = n, t)
                    }
                }
                return n.add(s), () => n.delete(s)
            },
            o = {
                setState: r,
                getState: a,
                subscribe: (e, t, r) => t || r ? i(e, t, r) : (n.add(e), () => n.delete(e)),
                destroy: () => n.clear()
            };
        return t = e(r, a, o), o
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007")
}