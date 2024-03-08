function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("77078"),
        a = n("566471");

    function s(e) {
        let {
            user: t,
            nickname: n
        } = e, s = null != n;
        return (0, i.jsx)(l.Avatar, {
            src: t.getAvatarURL(void 0, s ? 16 : 24),
            size: s ? l.AvatarSizes.SIZE_16 : l.AvatarSizes.SIZE_24,
            className: s ? a.miniAvatar : a.largeAvatar,
            "aria-hidden": !0
        })
    }
}