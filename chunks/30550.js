function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007"), n("424973");
    var i = n("135038"),
        l = n("385887");
    let a = new Set(["line", "blockQuote"]),
        s = [];

    function r(e, t, n) {
        if (l.EditorUtils.areStylesDisabled(e)) return [];
        let [r, o] = t;
        if (1 !== o.length || !l.NodeUtils.isInTypes(r, a)) return s;
        let {
            entries: u,
            serializedChildren: d
        } = l.ElementUtils.markdown(r, n, !0), c = [];
        for (let t = 0; t < u.length; t++) {
            let n = u[t];
            if (n.attributes.length > 0 && n.text.length > 0) {
                let a = u[t - 1],
                    s = u[t + 1],
                    r = (0, i.getPointFromPosition)(e, o, d, n.start),
                    f = (0, i.getPointFromPosition)(e, o, d, n.start + n.text.length),
                    p = {
                        anchor: r,
                        focus: f
                    },
                    m = l.EditorUtils.nodes(e, {
                        at: p,
                        mode: "lowest",
                        voids: !1
                    }),
                    h = {};
                for (let e of n.attributes)
                    if (h[e] = !0, "syntaxBefore" === e && null != s)
                        for (let e of s.attributes) h["before_".concat(e)] = !0;
                    else if ("syntaxAfter" === e && null != a)
                    for (let e of a.attributes) h["after_".concat(e)] = !0;
                for (let [t, n] of m) {
                    if (l.EditorUtils.isVoid(e, t)) continue;
                    let i = {
                        anchor: l.EditorUtils.start(e, n),
                        focus: l.EditorUtils.end(e, n)
                    };
                    l.PointUtils.isBefore(i.anchor, p.anchor) && (i.anchor = p.anchor), l.PointUtils.isAfter(i.focus, p.focus) && (i.focus = p.focus), c.push({
                        ...h,
                        ...i
                    })
                }
            }
        }
        return c
    }
}