function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("566471");

    function s(e) {
        let {
            user: t,
            nickname: n
        } = e, s = null != n;
        return (0, l.jsx)(i.Avatar, {
            src: t.getAvatarURL(void 0, s ? 16 : 24),
            size: s ? i.AvatarSizes.SIZE_16 : i.AvatarSizes.SIZE_24,
            className: s ? a.miniAvatar : a.largeAvatar,
            "aria-hidden": !0
        })
    }
}