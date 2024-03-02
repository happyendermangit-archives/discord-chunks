function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("272030"),
        o = n("85027"),
        u = n("33942"),
        d = n("252063"),
        c = n("42203"),
        f = n("18494"),
        m = n("191814"),
        p = n("758710"),
        h = n("351825"),
        E = n("306160"),
        g = n("253981"),
        C = n("613676"),
        S = n("49111"),
        T = n("782340"),
        I = n("796440");

    function v(e) {
        var t;
        let {
            application: n,
            className: i
        } = e, v = c.default.getChannel(f.default.getChannelId()), {
            appsInGDMEnabled: _,
            availableApplications: N
        } = (0, d.usePrivateChannelIntegrationState)({
            channelId: null !== (t = null == v ? void 0 : v.id) && void 0 !== t ? t : S.EMPTY_STRING_SNOWFLAKE_ID
        });
        if (null == n || !(0, C.canInstallApplication)({
                customInstallUrl: n.customInstallUrl,
                installParams: n.installParams,
                integrationTypesConfig: n.integrationTypesConfig
            })) return null;
        let A = _ && null != N.find(e => e.id === (null == n ? void 0 : n.id));
        return (0, l.jsx)(s.Button, {
            color: s.Button.Colors.PRIMARY,
            look: s.Button.Looks.FILLED,
            size: s.Button.Sizes.SMALL,
            onContextMenu: E.SUPPORTS_COPY ? e => {
                var t, i;
                let a = (0, o.getApplicationInstallURL)({
                    id: n.id,
                    custom_install_url: null !== (t = n.customInstallUrl) && void 0 !== t ? t : void 0,
                    install_params: null !== (i = n.installParams) && void 0 !== i ? i : void 0
                });
                (0, r.openContextMenu)(e, e => (0, l.jsx)(s.Menu, {
                    navId: "component-button",
                    onClose: r.closeContextMenu,
                    "aria-label": T.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS,
                    onSelect: void 0,
                    ...e,
                    children: (0, l.jsx)(s.MenuGroup, {
                        children: (0, l.jsx)(s.MenuItem, {
                            id: "copy",
                            label: T.default.Messages.APPLICATION_ADD_TO_SERVER_ACTIONS_COPY,
                            action: () => (0, E.copy)(a)
                        })
                    })
                }))
            } : void 0,
            onClick: () => {
                A ? (0, u.openOAuth2Modal)({
                    clientId: n.id,
                    scopes: [S.OAuth2Scopes.APPLICATIONS_COMMANDS],
                    channelId: v.id,
                    disableGuildSelect: !0
                }) : (0, C.installApplication)({
                    applicationId: n.id,
                    customInstallUrl: n.customInstallUrl,
                    installParams: n.installParams,
                    integrationTypesConfig: n.integrationTypesConfig
                })
            },
            className: a(I.applicationInstallButton, i),
            children: (0, l.jsxs)("div", {
                className: I.applicationInstallButtonContent,
                children: [(0, l.jsx)(h.default, {
                    width: 16,
                    height: 16
                }), (0, l.jsx)(m.default, {
                    size: 4,
                    horizontal: !0
                }), (0, l.jsx)("span", {
                    className: I.applicationInstallButtonText,
                    children: A ? T.default.Messages.ADD : T.default.Messages.APPLICATION_ADD_BUTTON
                }), null == n.customInstallUrl || g.default.isDiscordUrl(n.customInstallUrl) ? null : (0, l.jsx)(p.default, {
                    className: I.launchIcon,
                    width: 16,
                    height: 16
                })]
            })
        })
    }
}