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
            guildId: n,
            avatarDecorationOverride: a,
            status: u,
            avatarSize: d = r.AvatarSizes.SIZE_120,
            "aria-hidden": _ = !1
        } = e, {
            avatarDecorationSrc: c,
            avatarSrc: E,
            eventHandlers: I
        } = (0, s.default)({
            user: t,
            guildId: n,
            size: d,
            showPending: !0,
            avatarDecorationOverride: a
        });
        return (0, i.jsx)(l, {
            avatarDecoration: c,
            src: E,
            size: d,
            status: u,
            "aria-label": _ ? void 0 : o.default.Messages.USER_SETTINGS_AVATAR,
            "aria-hidden": _,
            ...I
        })
    }
}