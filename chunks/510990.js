function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        cancelGetAttachmentFile: function() {
            return l
        },
        getAttachmentFile: function() {
            return o
        }
    });
    var i = n("512722"),
        r = n.n(i),
        a = n("476326"),
        s = n("861990");

    function o(e, t) {
        var n;
        r()(e.item.platform === a.UploadPlatform.WEB, "Upload must be in the Web format");
        let i = (0, s.getAttachmentPayload)(e, t);
        return Promise.resolve({
            file: e.item.file,
            name: null !== (n = i.filename) && void 0 !== n ? n : ""
        })
    }
    async function l(e) {}
}