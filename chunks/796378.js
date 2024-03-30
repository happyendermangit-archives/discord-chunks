function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeOpenProfilePreviewModal: function() {
            return o
        }
    });
    var r = n("629815");

    function o(e) {
        var t = e.imageSrc,
            n = e.file,
            o = e.uploadType,
            i = e.guildId,
            a = e.isTryItOutFlow;
        r.default.dispatch({
            type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
            imageSrc: t,
            file: n,
            uploadType: o,
            guildId: i,
            isTryItOutFlow: void 0 !== a && a
        })
    }
}