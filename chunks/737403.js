function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeOpenProfilePreviewModal: function() {
            return i
        }
    });
    var r = n("913144");

    function i(e) {
        let {
            imageSrc: t,
            file: n,
            uploadType: i,
            guildId: l,
            isTryItOutFlow: a = !1
        } = e;
        r.default.dispatch({
            type: "PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL",
            imageSrc: t,
            file: n,
            uploadType: i,
            guildId: l,
            isTryItOutFlow: a
        })
    }
}