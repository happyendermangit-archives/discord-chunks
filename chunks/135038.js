function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPointFromPosition: function() {
            return l
        }
    });
    var i = n("385887");

    function l(e, t, n, l) {
        var a, s;
        let r = 0;
        for (let a = 0; a < n.length; a++) {
            let s = n[a];
            if (null == s) continue;
            let o = r + s.length;
            if (l <= o) {
                let n = i.PathUtils.child(t, a),
                    s = i.EditorUtils.node(e, n)[0];
                if (i.TextUtils.isText(s)) return {
                    path: n,
                    offset: Math.min(Math.max(l - r, 0), s.text.length)
                }
            }
            r = o
        }
        let o = n.length - 1;
        return {
            path: i.PathUtils.child(t, o),
            offset: null !== (s = null === (a = n[o]) || void 0 === a ? void 0 : a.length) && void 0 !== s ? s : 0
        }
    }
}