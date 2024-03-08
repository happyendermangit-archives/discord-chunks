function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007"), n("424973");
    var i = n("135038"),
        l = n("385887");

    function a(e, t) {
        if (l.EditorUtils.areStylesDisabled(e)) return [];
        let [n, a] = t, s = [];
        if (!l.NodeUtils.isType(n, "line") || null == n.codeBlockState) return s;
        let {
            hljsTypes: r,
            isStyledCodeBlockLine: o
        } = n.codeBlockState;
        if (null == r || 0 === r.length || !o) return [];
        for (let t of r) {
            let r = n.children.map(e => l.TextUtils.isText(e) ? e.text : null);
            s.push({
                hljsTypes: t.types,
                anchor: (0, i.getPointFromPosition)(e, a, r, t.start),
                focus: (0, i.getPointFromPosition)(e, a, r, t.end)
            })
        }
        return s
    }
}