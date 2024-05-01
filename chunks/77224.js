function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120"), n("653041");
    var i = n("341702"),
        r = n("887490");

    function s(e, t) {
        if (r.EditorUtils.areStylesDisabled(e)) return [];
        let [n, s] = t, a = [];
        if (!r.NodeUtils.isType(n, "line") || null == n.codeBlockState) return a;
        let {
            hljsTypes: o,
            isStyledCodeBlockLine: l
        } = n.codeBlockState;
        if (null == o || 0 === o.length || !l) return [];
        for (let t of o) {
            let o = n.children.map(e => r.TextUtils.isText(e) ? e.text : null);
            a.push({
                hljsTypes: t.types,
                anchor: (0, i.getPointFromPosition)(e, s, o, t.start),
                focus: (0, i.getPointFromPosition)(e, s, o, t.end)
            })
        }
        return a
    }
}