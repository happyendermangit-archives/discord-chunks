function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAttachmentFile: function() {
            return o
        },
        cancelGetAttachmentFile: function() {
            return l
        }
    });
    var i = n("627445"),
        s = n.n(i),
        r = n("966724"),
        a = n("980134");

    function o(e, t) {
        var n;
        s(e.item.platform === r.UploadPlatform.WEB, "Upload must be in the Web format");
        let i = (0, a.getAttachmentPayload)(e, t);
        return Promise.resolve({
            file: e.item.file,
            name: null !== (n = i.filename) && void 0 !== n ? n : ""
        })
    }
    async function l(e) {}
}