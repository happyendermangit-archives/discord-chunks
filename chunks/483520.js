function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("884691"),
        r = n("817736");
    let o = Object.freeze({
        box: "border-box"
    });

    function s(e) {
        let {
            ref: t,
            onUpdate: n,
            resizeObserver: s,
            listenerMap: l,
            key: a
        } = e;
        (0, i.useLayoutEffect)(() => {
            let {
                current: e
            } = t;
            return null != e && (l.set(e, e => {
                (0, r.flushSync)(() => {
                    n(e, a)
                })
            }), s.observe(e, o)), () => {
                null != e && (s.unobserve(e), l.delete(e))
            }
        }, [n, s, t, l, a])
    }
}