function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPointFromPosition: function() {
            return r
        }
    });
    var i = n("887490");

    function r(e, t, n, r) {
        var s, a;
        let o = 0;
        for (let s = 0; s < n.length; s++) {
            let a = n[s];
            if (null == a) continue;
            let l = o + a.length;
            if (r <= l) {
                let n = i.PathUtils.child(t, s),
                    a = i.EditorUtils.node(e, n)[0];
                if (i.TextUtils.isText(a)) return {
                    path: n,
                    offset: Math.min(Math.max(r - o, 0), a.text.length)
                }
            }
            o = l
        }
        let l = n.length - 1;
        return {
            path: i.PathUtils.child(t, l),
            offset: null !== (a = null === (s = n[l]) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0
        }
    }
}