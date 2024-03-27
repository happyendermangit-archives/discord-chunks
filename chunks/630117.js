function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("441319"),
        s = n("689938");

    function a(e) {
        let {
            id: t,
            width: n = r.CUSTOM_BASE_SIZE
        } = e, a = r.ICONS_BY_ID[t];
        return null == a ? null : (0, i.jsx)("img", {
            src: a.iconSource,
            width: n,
            alt: s.default.Messages.SETTINGS_CUSTOM_APP_ICONS,
            draggable: !1
        })
    }
}