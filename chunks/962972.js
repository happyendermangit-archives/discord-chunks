function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_FILE_UPLOAD_ICONS: function() {
            return l
        },
        EMOJI_FILE_UPLOAD_ICONS: function() {
            return c
        },
        FileUploadIconClassNames: function() {
            return s
        }
    });
    var r, o, i, a = n("294575");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = o || (o = {}))[r.IMAGE = 0] = "IMAGE", r[r.DOCUMENT = 1] = "DOCUMENT", r[r.CODE = 2] = "CODE";
    var s = (u(i = {}, 0, a.image), u(i, 1, a.document), u(i, 2, a.code), i),
        l = [1, 0, 2],
        c = [0, 0, 0]
}