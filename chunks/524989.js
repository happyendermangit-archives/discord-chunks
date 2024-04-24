function(e, t, n) {
    "use strict";
    n.r(t), n("653041"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("393903"),
        l = n("206771");

    function u(e, t) {
        let n = [],
            i = [],
            r = 0,
            s = 0,
            a = !1;
        for (var o = 0; o < e.length; o++) {
            let l = e[o],
                u = t.widths[o],
                d = o === e.length - 1,
                _ = s === t.maxLines - 1,
                c = s + 2 < t.maxLines,
                E = u > t.parentWidth,
                I = _ && !d ? t.overflowWidth : 0,
                T = 0 === t.parentWidth,
                f = !a && r + u + t.spacing + I < t.parentWidth;
            T || f ? (r += u + t.spacing, n.push(l)) : s < t.maxLines - 1 ? (s++, r = u + t.spacing, n.push(l)) : E && !_ && 0 === r ? (s++, n.push(l)) : E && c && r > 0 ? (n.push(l), s += 2) : (a = !0, i.push(l))
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
            renderOverflow: s,
            className: d,
            maxLines: _,
            overflowWidth: c = 65,
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
            T(n => u(t, {
                ...n,
                parentWidth: e.contentRect.width
            }))
        });
        return r.useLayoutEffect(() => {
            T(e => {
                var n;
                let i = [...e.widths];
                return null === (n = S.current) || void 0 === n || n.childNodes.forEach((e, t) => {
                    let n = e.offsetWidth;
                    i[t] = n
                }), u(t, {
                    ...e,
                    widths: i
                })
            })
        }, [S, t, T]), (0, i.jsxs)("div", {
            style: f,
            className: a()(l.container, d),
            ref: S,
            children: [I.visible.map(n), I.overflow.length > 0 ? s(I.overflow) : null]
        })
    }
}