function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("561513");

    function a(e) {
        var t = e.user,
            n = null != e.nickname;
        return r.createElement(o.Avatar, {
            src: t.getAvatarURL(void 0, n ? 16 : 24),
            size: n ? o.AvatarSizes.SIZE_16 : o.AvatarSizes.SIZE_24,
            className: n ? i.miniAvatar : i.largeAvatar,
            "aria-hidden": !0
        })
    }
}