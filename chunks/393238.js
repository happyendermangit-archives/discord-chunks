function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("47120");
    var i = n("470079");

    function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let [r, s] = i.useState(void 0), [a, o] = i.useState(void 0), l = i.useRef(null);
        return i.useLayoutEffect(() => {
            let e = l.current,
                t = null == e ? void 0 : e.ownerDocument.defaultView;
            if (null != e && null != t) {
                let n = new t.ResizeObserver(e => {
                    var t, n, i, r, a, u;
                    let d = e[0],
                        _ = null == d ? void 0 : null === (n = d.borderBoxSize) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.inlineSize,
                        c = null == d ? void 0 : null === (r = d.borderBoxSize) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.blockSize;
                    if (null == _ || null == c) {
                        let e = l.current;
                        if (null != e) {
                            let t = window.getComputedStyle(e);
                            null == _ && (_ = parseFloat(null !== (a = t.width) && void 0 !== a ? a : "0")), null == c && (c = parseFloat(null !== (u = t.height) && void 0 !== u ? u : "0"))
                        }
                    }
                    s(_), o(c)
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