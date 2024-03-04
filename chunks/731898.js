function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var i = n("884691");

    function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let [s, r] = i.useState(void 0), [a, o] = i.useState(void 0), l = i.useRef(null);
        return i.useLayoutEffect(() => {
            let e = l.current,
                t = null == e ? void 0 : e.ownerDocument.defaultView;
            if (null != e && null != t) {
                let n = new t.ResizeObserver(e => {
                    var t, n, i, s, a, u;
                    let d = e[0],
                        c = null == d ? void 0 : null === (n = d.borderBoxSize) || void 0 === n ? void 0 : null === (t = n[0]) || void 0 === t ? void 0 : t.inlineSize,
                        f = null == d ? void 0 : null === (s = d.borderBoxSize) || void 0 === s ? void 0 : null === (i = s[0]) || void 0 === i ? void 0 : i.blockSize;
                    if (null == c || null == f) {
                        let e = l.current;
                        if (null != e) {
                            let t = window.getComputedStyle(e);
                            null == c && (c = parseFloat(null !== (a = t.width) && void 0 !== a ? a : "0")), null == f && (f = parseFloat(null !== (u = t.height) && void 0 !== u ? u : "0"))
                        }
                    }
                    r(c), o(f)
                });
                return n.observe(e), () => n.disconnect()
            }
        }, [l.current, ...t]), {
            ref: l,
            width: s,
            height: a
        }
    }
}