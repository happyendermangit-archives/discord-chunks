function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("549579"),
        s = n("616782"),
        l = n("971332"),
        c = n("429383"),
        f = n("935741"),
        d = n("894288"),
        _ = n("644463"),
        E = n("169613"),
        p = n("749904"),
        m = n("53053"),
        y = n("822853"),
        I = n("227289"),
        h = n("281767"),
        O = n("941504"),
        T = n("681132");

    function S(e) {
        var t, n = e.application,
            o = e.className,
            S = f.default.getChannel(d.default.getChannelId()),
            v = (0, c.usePrivateChannelIntegrationState)({
                channelId: null !== (t = null == S ? void 0 : S.id) && void 0 !== t ? t : h.EMPTY_STRING_SNOWFLAKE_ID
            }),
            g = v.appsInGDMEnabled,
            A = v.availableApplications;
        if (null == n || !(0, I.canInstallApplication)({
                customInstallUrl: n.customInstallUrl,
                installParams: n.installParams,
                integrationTypesConfig: n.integrationTypesConfig
            })) return null;
        var b = g && null != A.find(function(e) {
            return e.id === (null == n ? void 0 : n.id)
        });
        return r.createElement(a.Button, {
            color: a.Button.Colors.PRIMARY,
            look: a.Button.Looks.FILLED,
            size: a.Button.Sizes.SMALL,
            onContextMenu: m.SUPPORTS_COPY ? function(e) {
                (0, u.openContextMenu)(e, function(e) {
                    return r.createElement(a.Menu, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r, o, i;
                                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[o] = i
                            })
                        }
                        return e
                    }({
                        navId: "component-button",
                        onClose: u.closeContextMenu,
                        "aria-label": O.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
                        onSelect: void 0
                    }, e), r.createElement(a.MenuGroup, null, r.createElement(a.MenuItem, {
                        id: "copy",
                        label: O.default.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
                        action: function() {
                            return (0, m.copy)((0, s.getApplicationInstallURL)(n))
                        }
                    })))
                })
            } : void 0,
            onClick: function() {
                b ? (0, l.openOAuth2Modal)({
                    clientId: n.id,
                    scopes: [h.OAuth2Scopes.APPLICATIONS_COMMANDS],
                    channelId: S.id,
                    disableGuildSelect: !0
                }) : (0, I.installApplication)({
                    applicationId: n.id,
                    customInstallUrl: n.customInstallUrl,
                    installParams: n.installParams,
                    integrationTypesConfig: n.integrationTypesConfig
                })
            },
            className: i()(T.__invalid_applicationInstallButton, o)
        }, r.createElement("div", {
            className: T.applicationInstallButtonContent
        }, r.createElement(p.default, {
            width: 16,
            height: 16
        }), r.createElement(_.default, {
            size: 4,
            horizontal: !0
        }), r.createElement("span", {
            className: T.applicationInstallButtonText
        }, b ? O.default.Messages.ADD : O.default.Messages.APPLICATION_ADD_BUTTON), null == n.customInstallUrl || y.default.isDiscordUrl(n.customInstallUrl) ? null : r.createElement(E.default, {
            className: T.launchIcon,
            width: 16,
            height: 16
        })))
    }
}