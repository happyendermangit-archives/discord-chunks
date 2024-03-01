function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007");
    var i = n("884691");

    function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let [r, s] = i.useState(void 0), [a, o] = i.useState(void 0), l = i.useRef(null);
        return i.useLayoutEffect(() => {
            let e = l.current,
                t = null == e ? void 0 : e.ownerDocument.defaultView;
            if (null != e && null != t) {
                let n = new t.ResizeObserver(e => {
                    var t, n, i, r, a, u;
                    let c = e[0],
                        d = null == c ? void 0 : null === (n = c.borderBoxSize) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.inlineSize,
                        f = null == c ? void 0 : null === (r = c.borderBoxSize) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.blockSize;
                    if (null == d || null == f) {
                        let e = l.current;
                        if (null != e) {
                            let t = window.getComputedStyle(e);
                            null == d && (d = parseFloat(null !== (a = t.width) && void 0 !== a ? a : "0")), null == f && (f = parseFloat(null !== (u = t.height) && void 0 !== u ? u : "0"))
                        }
                    }
                    s(d), o(f)
                });
                return n.observe(e), () => n.disconnect()
            }
        }, [l.current, ...t]), {
            ref: l,
            width: r,
            height: a
        }
    }
}