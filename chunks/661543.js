function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeOpenProfilePreviewModal: function() {
            return r
        }
    });
    var i = n("570140");

    function r(e) {
        let {
            imageSrc: t,
            file: n,
            uploadType: r,
            guildId: a,
            isTryItOutFlow: s = !1
        } = e;
        i.default.dispatch({
            type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
            imageSrc: t,
            file: n,
            uploadType: r,
            guildId: a,
            isTryItOutFlow: s
        })
    }
}