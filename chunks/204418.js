function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("204197"),
        a = n("998502"),
        o = n("689938");
    let l = a.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;
    t.default = e => {
        let {
            user: t,
            avatarDecorationOverride: n,
            status: a,
            avatarSize: u = r.AvatarSizes.SIZE_120,
            "aria-hidden": d = !1
        } = e, {
            avatarDecorationSrc: _,
            avatarSrc: c,
            eventHandlers: E
        } = (0, s.default)({
            user: t,
            size: u,
            showPending: !0,
            avatarDecorationOverride: n
        });
        return (0, i.jsx)(l, {
            avatarDecoration: _,
            src: c,
            size: u,
            status: a,
            "aria-label": d ? void 0 : o.default.Messages.USER_SETTINGS_AVATAR,
            "aria-hidden": d,
            ...E
        })
    }
}