function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateProgress: function() {
            return i
        },
        doesImageMatchUpload: function() {
            return o
        }
    });
    var r = n("319654");

    function o(e, t) {
        if (t.id === e.uri || null != t.id && t.id === e.id) return !0;
        if (t.item.platform === r.UploadPlatform.REACT_NATIVE) {
            var n, o = t.item,
                i = e.filename;
            if (o.originalUri === e.uri || null != i && (null === (n = o.originalUri) || void 0 === n ? void 0 : n.includes(i))) return !0
        }
        return !1
    }

    function i(e, t) {
        return 0 === t ? 0 : Math.min(Math.floor(e / t * 100), 100)
    }
}