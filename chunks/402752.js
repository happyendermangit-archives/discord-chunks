function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        doesImageMatchUpload: function() {
            return s
        },
        calculateProgress: function() {
            return r
        }
    });
    var i = n("966724");

    function s(e, t) {
        if (t.id === e.uri || null != t.id && t.id === e.id) return !0;
        if (t.item.platform === i.UploadPlatform.REACT_NATIVE) {
            let {
                item: i
            } = t, {
                filename: s
            } = e;
            if (i.originalUri === e.uri) return !0;
            if (null != s) {
                var n;
                if (null === (n = i.originalUri) || void 0 === n ? void 0 : n.includes(s)) return !0
            }
        }
        return !1
    }

    function r(e, t) {
        return 0 === t ? 0 : Math.min(Math.floor(e / t * 100), 100)
    }
}