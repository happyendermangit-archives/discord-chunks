function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("393903"),
        l = n("618528");

    function u(e, t) {
        let n = [],
            i = [],
            r = 0,
            a = 0,
            s = !1;
        for (var o = 0; o < e.length; o++) {
            let l = e[o],
                u = t.widths[o],
                d = o === e.length - 1,
                _ = a === t.maxLines - 1,
                c = a + 2 < t.maxLines,
                E = u > t.parentWidth,
                I = _ && !d ? t.overflowWidth : 0,
                T = 0 === t.parentWidth,
                f = !s && r + u + t.spacing + I < t.parentWidth;
            T || f ? (r += u + t.spacing, n.push(l)) : a < t.maxLines - 1 ? (a++, r = u + t.spacing, n.push(l)) : E && !_ && 0 === r ? (a++, n.push(l)) : E && c && r > 0 ? (n.push(l), a += 2) : (s = !0, i.push(l))
        }
        return {
            ...t,
            visible: n,
            overflow: i
        }
    }
    t.default = function(e) {
        let {
            items: t,
            renderItem: n,
            renderOverflow: a,
            className: d,
            maxLines: _,
            initialOverflowWidth: c = 65,
            spacing: E = 8
        } = e, [I, T] = r.useState(() => ({
            parentWidth: 0,
            visible: t,
            overflow: [],
            widths: Array(t.length).fill(0),
            maxLines: _,
            overflowWidth: c,
            spacing: E
        })), f = {
            visibility: 0 === I.parentWidth ? "hidden" : "visible"
        }, S = (0, o.useResizeObserver)(e => {
            if (null == e) return;
            let n = e.getBoundingClientRect();
            T(e => u(t, {
                ...e,
                parentWidth: n.width
            }))
        });
        return r.useLayoutEffect(() => {
            T(e => {
                var n, i, r;
                let a = [...e.widths],
                    s = null !== (r = null === (n = S.current) || void 0 === n ? void 0 : n.childNodes.length) && void 0 !== r ? r : 0,
                    o = e.overflow.length > 0,
                    l = e.overflowWidth;
                return null === (i = S.current) || void 0 === i || i.childNodes.forEach((e, t) => {
                    let n = e.offsetWidth;
                    o && t === s - 1 ? l = n : a[t] = n
                }), u(t, {
                    ...e,
                    widths: a,
                    overflowWidth: l
                })
            })
        }, [S, t, T]), (0, i.jsxs)("div", {
            style: f,
            className: s()(l.container, d),
            ref: S,
            children: [I.visible.map(n), I.overflow.length > 0 ? a(I.overflow) : null]
        })
    }
}