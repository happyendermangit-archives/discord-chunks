function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("524437"),
        o = n("780384"),
        l = n("481060"),
        u = n("410030"),
        d = n("980591"),
        _ = n("607070"),
        c = n("605236"),
        E = n("725790"),
        I = n("652853"),
        T = n("228168"),
        f = n("962657");
    let S = () => {
        let e = (0, c.useIsDismissibleContentDismissed)(a.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP),
            t = (0, s.useStateFromStores)([_.default], () => _.default.syncProfileThemeWithUserTheme),
            n = (0, u.default)(),
            {
                theme: i
            } = (0, I.useUserProfileThemeContext)(),
            r = (0, o.isThemeDark)(n) && (0, o.isThemeLight)(i);
        return !e && !t && r
    };
    t.default = e => {
        let {
            onTooltipClose: t
        } = e, {
            profileType: n
        } = (0, I.useUserProfileThemeContext)(), s = n === T.UserProfileTypes.POPOUT, a = S(), [o, u] = r.useState(!s && a);
        return (0, d.default)(() => u(a), s ? 300 : null), (0, i.jsx)(l.Popout, {
            shouldShow: o,
            position: "left",
            align: "center",
            spacing: 32,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                !s && u(!1)
            },
            renderPopout: e => {
                let {
                    position: n
                } = e;
                return (0, i.jsx)(E.default, {
                    position: null != n ? n : "left",
                    onClose: t
                })
            },
            children: () => (0, i.jsx)("span", {
                className: f.__invalid_hidden
            })
        })
    }
}