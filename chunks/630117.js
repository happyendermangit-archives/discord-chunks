function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("441319"),
        a = n("689938");

    function s(e) {
        let {
            id: t,
            width: n = r.CUSTOM_BASE_SIZE
        } = e, s = r.ICONS_BY_ID[t];
        return null == s ? null : (0, i.jsx)("img", {
            src: s.iconSource,
            width: n,
            alt: a.default.Messages.SETTINGS_CUSTOM_APP_ICONS,
            draggable: !1
        })
    }
}