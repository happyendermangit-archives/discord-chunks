function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("595681");

    function s(e) {
        let {
            user: t,
            nickname: n
        } = e, s = null != n;
        return (0, i.jsx)(r.Avatar, {
            src: t.getAvatarURL(void 0, s ? 16 : 24),
            size: s ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
            className: s ? a.miniAvatar : a.largeAvatar,
            "aria-hidden": !0
        })
    }
}