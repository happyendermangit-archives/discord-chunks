function(e, t, n) {
    "use strict";

    function i(e, t) {
        var n, i;
        if (null == e) return !1;
        let r = null == e ? void 0 : null === (n = e.ownerDocument) || void 0 === n ? void 0 : n.defaultView;
        if (null == r) return console.warn("Unable to determine render window for element", e), !1;
        let a = null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : "Element",
            s = r[a];
        return null == s ? (console.warn('Unable to find element constructor "'.concat(a, '" in'), r), !1) : e instanceof s
    }
    n.r(t), n.d(t, {
        isElement: function() {
            return i
        }
    })
}