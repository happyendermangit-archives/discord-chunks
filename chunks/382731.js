function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("470079"),
        r = n("699581");
    let s = Object.freeze({
        box: "border-box"
    });

    function a(e) {
        let {
            ref: t,
            onUpdate: n,
            resizeObserver: a,
            listenerMap: o,
            key: l
        } = e;
        (0, i.useLayoutEffect)(() => {
            let {
                current: e
            } = t;
            return null != e && (o.set(e, e => {
                (0, r.flushSync)(() => {
                    n(e, l)
                })
            }), a.observe(e, s)), () => {
                null != e && (a.unobserve(e), o.delete(e))
            }
        }, [n, a, t, o, l])
    }
}