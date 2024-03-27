function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("481060"),
        o = n("239091"),
        l = n("311819"),
        u = n("69580"),
        d = n("556084"),
        _ = n("592125"),
        c = n("944486"),
        E = n("682864"),
        I = n("441957"),
        T = n("151785"),
        f = n("572004"),
        S = n("591759"),
        h = n("135431"),
        A = n("981631"),
        m = n("689938"),
        N = n("681132");

    function O(e) {
        var t;
        let {
            application: n,
            className: r
        } = e, O = _.default.getChannel(c.default.getChannelId()), {
            appsInGDMEnabled: p,
            availableApplications: R
        } = (0, d.usePrivateChannelIntegrationState)({
            channelId: null !== (t = null == O ? void 0 : O.id) && void 0 !== t ? t : A.EMPTY_STRING_SNOWFLAKE_ID
        });
        if (null == n || !(0, h.canInstallApplication)({
                customInstallUrl: n.customInstallUrl,
                installParams: n.installParams,
                integrationTypesConfig: n.integrationTypesConfig
            })) return null;
        let C = p && null != R.find(e => e.id === (null == n ? void 0 : n.id));
        return (0, i.jsx)(a.Button, {
            color: a.Button.Colors.PRIMARY,
            look: a.Button.Looks.FILLED,
            size: a.Button.Sizes.SMALL,
            onContextMenu: f.SUPPORTS_COPY ? e => {
                (0, o.openContextMenu)(e, e => (0, i.jsx)(a.Menu, {
                    navId: "component-button",
                    onClose: o.closeContextMenu,
                    "aria-label": m.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
                    onSelect: void 0,
                    ...e,
                    children: (0, i.jsx)(a.MenuGroup, {
                        children: (0, i.jsx)(a.MenuItem, {
                            id: "copy",
                            label: m.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
                            action: () => (0, f.copy)((0, l.getApplicationInstallURL)(n))
                        })
                    })
                }))
            } : void 0,
            onClick: () => {
                C ? (0, u.openOAuth2Modal)({
                    clientId: n.id,
                    scopes: [A.OAuth2Scopes.APPLICATIONS_COMMANDS],
                    channelId: O.id,
                    disableGuildSelect: !0
                }) : (0, h.installApplication)({
                    applicationId: n.id,
                    customInstallUrl: n.customInstallUrl,
                    installParams: n.installParams,
                    integrationTypesConfig: n.integrationTypesConfig
                })
            },
            className: s()(N.applicationInstallButton, r),
            children: (0, i.jsxs)("div", {
                className: N.applicationInstallButtonContent,
                children: [(0, i.jsx)(T.default, {
                    width: 16,
                    height: 16
                }), (0, i.jsx)(E.default, {
                    size: 4,
                    horizontal: !0
                }), (0, i.jsx)("span", {
                    className: N.applicationInstallButtonText,
                    children: C ? m.default.Messages.ADD : m.default.Messages.APPLICATION_ADD_BUTTON
                }), null == n.customInstallUrl || S.default.isDiscordUrl(n.customInstallUrl) ? null : (0, i.jsx)(I.default, {
                    className: N.launchIcon,
                    width: 16,
                    height: 16
                })]
            })
        })
    }
}