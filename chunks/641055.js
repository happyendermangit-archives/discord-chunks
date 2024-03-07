function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("446674"),
        s = n("151426"),
        r = n("819855"),
        o = n("77078"),
        u = n("841098"),
        d = n("340066"),
        c = n("206230"),
        f = n("10641"),
        m = n("874419"),
        p = n("430312"),
        h = n("590456"),
        E = n("779614");
    let g = () => {
        let e = (0, f.useIsDismissibleContentDismissed)(s.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP),
            t = (0, a.useStateFromStores)([c.default], () => c.default.syncProfileThemeWithUserTheme),
            n = (0, u.default)(),
            {
                profileTheme: l
            } = i.useContext(p.UserProfileContext),
            o = (0, r.isThemeDark)(n) && (0, r.isThemeLight)(l);
        return !e && !t && o
    };
    var S = e => {
        let {
            onTooltipClose: t
        } = e, {
            profileType: n
        } = i.useContext(p.UserProfileContext), a = n === h.UserProfileTypes.POPOUT, s = g(), [r, u] = i.useState(!a && s);
        return (0, d.default)(() => u(s), a ? 300 : null), (0, l.jsx)(o.Popout, {
            shouldShow: r,
            position: "left",
            align: "center",
            spacing: 32,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                !a && u(!1)
            },
            renderPopout: e => {
                let {
                    position: n
                } = e;
                return (0, l.jsx)(m.default, {
                    position: null != n ? n : "left",
                    onClose: t
                })
            },
            children: () => (0, l.jsx)("span", {
                className: E.hidden
            })
        })
    }
}