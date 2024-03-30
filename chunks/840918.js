function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPointFromPosition: function() {
            return o
        }
    });
    var r = n("714196");

    function o(e, t, n, o) {
        for (var i, a, u = 0, s = 0; s < n.length; s++) {
            var l = n[s];
            if (null != l) {
                var c = u + l.length;
                if (o <= c) {
                    var f = r.PathUtils.child(t, s),
                        d = r.EditorUtils.node(e, f)[0];
                    if (r.TextUtils.isText(d)) return {
                        path: f,
                        offset: Math.min(Math.max(o - u, 0), d.text.length)
                    }
                }
                u = c
            }
        }
        var _ = n.length - 1;
        return {
            path: r.PathUtils.child(t, _),
            offset: null !== (a = null === (i = n[_]) || void 0 === i ? void 0 : i.length) && void 0 !== a ? a : 0
        }
    }
}