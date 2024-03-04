function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        var i = n ? n.call(r, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
            s = Object.keys(t);
        if (o.length !== s.length) return !1;
        for (var a = Object.prototype.hasOwnProperty.bind(t), c = 0; c < o.length; c++) {
            var u = o[c];
            if (!a(u)) return !1;
            var d = e[u],
                l = t[u];
            if (!1 === (i = n ? n.call(r, d, l, u) : void 0) || void 0 === i && d !== l) return !1
        }
        return !0
    }
    n.r(t), n.d(t, {
        shallowEqual: function() {
            return r
        }
    })
}