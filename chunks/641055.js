function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
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
        x = n("779614");
    let E = () => {
        let e = (0, f.useIsDismissibleContentDismissed)(s.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP),
            t = (0, a.useStateFromStores)([c.default], () => c.default.syncProfileThemeWithUserTheme),
            n = (0, u.default)(),
            {
                profileTheme: i
            } = l.useContext(p.UserProfileContext),
            o = (0, r.isThemeDark)(n) && (0, r.isThemeLight)(i);
        return !e && !t && o
    };
    var y = e => {
        let {
            onTooltipClose: t
        } = e, {
            profileType: n
        } = l.useContext(p.UserProfileContext), a = n === h.UserProfileTypes.POPOUT, s = E(), [r, u] = l.useState(!a && s);
        return (0, d.default)(() => u(s), a ? 300 : null), (0, i.jsx)(o.Popout, {
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
                return (0, i.jsx)(m.default, {
                    position: null != n ? n : "left",
                    onClose: t
                })
            },
            children: () => (0, i.jsx)("span", {
                className: x.hidden
            })
        })
    }
}