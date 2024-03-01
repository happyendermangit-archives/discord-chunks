function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007"), n("424973");
    var l = n("135038"),
        i = n("385887");

    function a(e, t) {
        if (i.EditorUtils.areStylesDisabled(e)) return [];
        let [n, a] = t, s = [];
        if (!i.NodeUtils.isType(n, "line") || null == n.codeBlockState) return s;
        let {
            hljsTypes: r,
            isStyledCodeBlockLine: o
        } = n.codeBlockState;
        if (null == r || 0 === r.length || !o) return [];
        for (let t of r) {
            let r = n.children.map(e => i.TextUtils.isText(e) ? e.text : null);
            s.push({
                hljsTypes: t.types,
                anchor: (0, l.getPointFromPosition)(e, a, r, t.start),
                focus: (0, l.getPointFromPosition)(e, a, r, t.end)
            })
        }
        return s
    }
}