function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("595681");

    function a(e) {
        let {
            user: t,
            nickname: n
        } = e, a = null != n;
        return (0, i.jsx)(r.Avatar, {
            src: t.getAvatarURL(void 0, a ? 16 : 24),
            size: a ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
            className: a ? s.miniAvatar : s.largeAvatar,
            "aria-hidden": !0
        })
    }
}