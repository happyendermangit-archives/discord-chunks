function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        doesImageMatchUpload: function() {
            return i
        },
        calculateProgress: function() {
            return r
        }
    });
    var s = n("966724");

    function i(e, t) {
        if (t.id === e.uri || null != t.id && t.id === e.id) return !0;
        if (t.item.platform === s.UploadPlatform.REACT_NATIVE) {
            let {
                item: s
            } = t, {
                filename: i
            } = e;
            if (s.originalUri === e.uri) return !0;
            if (null != i) {
                var n;
                if (null === (n = s.originalUri) || void 0 === n ? void 0 : n.includes(i)) return !0
            }
        }
        return !1
    }

    function r(e, t) {
        return 0 === t ? 0 : Math.min(Math.floor(e / t * 100), 100)
    }
}