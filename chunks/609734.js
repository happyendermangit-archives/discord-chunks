function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("272030"),
        o = n("85027"),
        u = n("33942"),
        d = n("252063"),
        c = n("42203"),
        f = n("18494"),
        p = n("191814"),
        m = n("758710"),
        h = n("351825"),
        x = n("306160"),
        E = n("253981"),
        y = n("613676"),
        g = n("49111"),
        S = n("782340"),
        C = n("796440");

    function _(e) {
        var t;
        let {
            application: n,
            className: l
        } = e, _ = c.default.getChannel(f.default.getChannelId()), {
            appsInGDMEnabled: T,
            availableApplications: I
        } = (0, d.usePrivateChannelIntegrationState)({
            channelId: null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : g.EMPTY_STRING_SNOWFLAKE_ID
        });
        if (null == n || !(0, y.canInstallApplication)({
                customInstallUrl: n.customInstallUrl,
                installParams: n.installParams,
                integrationTypesConfig: n.integrationTypesConfig
            })) return null;
        let v = T && null != I.find(e => e.id === (null == n ? void 0 : n.id));
        return (0, i.jsx)(s.Button, {
            color: s.Button.Colors.PRIMARY,
            look: s.Button.Looks.FILLED,
            size: s.Button.Sizes.SMALL,
            onContextMenu: x.SUPPORTS_COPY ? e => {
                (0, r.openContextMenu)(e, e => (0, i.jsx)(s.Menu, {
                    navId: "component-button",
                    onClose: r.closeContextMenu,
                    "aria-label": S.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
                    onSelect: void 0,
                    ...e,
                    children: (0, i.jsx)(s.MenuGroup, {
                        children: (0, i.jsx)(s.MenuItem, {
                            id: "copy",
                            label: S.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
                            action: () => (0, x.copy)((0, o.getApplicationInstallURL)(n))
                        })
                    })
                }))
            } : void 0,
            onClick: () => {
                v ? (0, u.openOAuth2Modal)({
                    clientId: n.id,
                    scopes: [g.OAuth2Scopes.APPLICATIONS_COMMANDS],
                    channelId: _.id,
                    disableGuildSelect: !0
                }) : (0, y.installApplication)({
                    applicationId: n.id,
                    customInstallUrl: n.customInstallUrl,
                    installParams: n.installParams,
                    integrationTypesConfig: n.integrationTypesConfig
                })
            },
            className: a(C.applicationInstallButton, l),
            children: (0, i.jsxs)("div", {
                className: C.applicationInstallButtonContent,
                children: [(0, i.jsx)(h.default, {
                    width: 16,
                    height: 16
                }), (0, i.jsx)(p.default, {
                    size: 4,
                    horizontal: !0
                }), (0, i.jsx)("span", {
                    className: C.applicationInstallButtonText,
                    children: v ? S.default.Messages.ADD : S.default.Messages.APPLICATION_ADD_BUTTON
                }), null == n.customInstallUrl || E.default.isDiscordUrl(n.customInstallUrl) ? null : (0, i.jsx)(m.default, {
                    className: C.launchIcon,
                    width: 16,
                    height: 16
                })]
            })
        })
    }
}