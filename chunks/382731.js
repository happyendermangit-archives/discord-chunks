function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("470079"),
        r = n("699581");
    let a = Object.freeze({
        box: "border-box"
    });

    function s(e) {
        let {
            ref: t,
            onUpdate: n,
            resizeObserver: s,
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
            }), s.observe(e, a)), () => {
                null != e && (s.unobserve(e), o.delete(e))
            }
        }, [n, s, t, o, l])
    }
}