function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("204197"),
        s = n("998502"),
        o = n("689938");
    let l = s.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;
    t.default = e => {
        let {
            user: t,
            guildId: n,
            avatarDecorationOverride: s,
            status: u,
            avatarSize: d = r.AvatarSizes.SIZE_120,
            "aria-hidden": _ = !1,
            className: c,
            animateOnHover: E = !1
        } = e, {
            avatarDecorationSrc: I,
            avatarSrc: T,
            eventHandlers: f
        } = (0, a.default)({
            user: t,
            guildId: n,
            size: d,
            showPending: !0,
            avatarDecorationOverride: s,
            animateOnHover: E
        });
        return (0, i.jsx)(l, {
            avatarDecoration: I,
            src: T,
            size: d,
            status: u,
            "aria-label": _ ? void 0 : o.default.Messages.USER_SETTINGS_AVATAR,
            "aria-hidden": _,
            className: c,
            ...f
        })
    }
}