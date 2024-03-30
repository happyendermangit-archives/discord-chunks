function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isElement: function() {
            return r
        }
    });

    function r(e, t) {
        if (null == e) return !1;
        var n, r, o, i, a = null == e ? void 0 : null === (o = e.ownerDocument) || void 0 === o ? void 0 : o.defaultView;
        if (null == a) return console.warn("Unable to determine render window for element", e), !1;
        var u = null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : "Element",
            s = a[u];
        if (null == s) return console.warn('Unable to find element constructor "'.concat(u, '" in'), a), !1;
        return n = e, null != (r = s) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r
    }
}