function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120"), n("653041");
    var i = n("341702"),
        r = n("887490");
    let s = new Set(["line", "blockQuote"]),
        a = [];

    function o(e, t, n) {
        if (r.EditorUtils.areStylesDisabled(e)) return [];
        let [o, l] = t;
        if (1 !== l.length || !r.NodeUtils.isInTypes(o, s)) return a;
        let {
            entries: u,
            serializedChildren: d
        } = r.ElementUtils.markdown(o, n, !0), _ = [];
        for (let t = 0; t < u.length; t++) {
            let n = u[t];
            if (n.attributes.length > 0 && n.text.length > 0) {
                let s = u[t - 1],
                    a = u[t + 1],
                    o = (0, i.getPointFromPosition)(e, l, d, n.start),
                    c = {
                        anchor: o,
                        focus: (0, i.getPointFromPosition)(e, l, d, n.start + n.text.length)
                    },
                    E = r.EditorUtils.nodes(e, {
                        at: c,
                        mode: "lowest",
                        voids: !1
                    }),
                    I = {};
                for (let e of n.attributes)
                    if (I[e] = !0, "syntaxBefore" === e && null != a)
                        for (let e of a.attributes) I["before_".concat(e)] = !0;
                    else if ("syntaxAfter" === e && null != s)
                    for (let e of s.attributes) I["after_".concat(e)] = !0;
                for (let [t, n] of E) {
                    if (r.EditorUtils.isVoid(e, t)) continue;
                    let i = {
                        anchor: r.EditorUtils.start(e, n),
                        focus: r.EditorUtils.end(e, n)
                    };
                    r.PointUtils.isBefore(i.anchor, c.anchor) && (i.anchor = c.anchor), r.PointUtils.isAfter(i.focus, c.focus) && (i.focus = c.focus), _.push({
                        ...I,
                        ...i
                    })
                }
            }
        }
        return _
    }
}