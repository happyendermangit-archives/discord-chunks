function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("29570"),
        s = n("503113"),
        l = n("292206"),
        c = n("861272"),
        f = n("960201"),
        d = n("712398"),
        _ = n("998880"),
        E = n("247164"),
        p = n("974052"),
        m = n("299529"),
        y = n("120447"),
        I = n("288625"),
        h = n("159433"),
        O = n("903787"),
        T = n("281767"),
        S = n("118891"),
        v = n("941504"),
        g = n("474691"),
        A = n("931093");

    function b(e) {
        var t = e.channel,
            n = e.command,
            o = e.section,
            i = r.useCallback(function() {
                I.dismissAppLauncherPopup(), s.setActiveCommand({
                    channelId: t.id,
                    command: n,
                    section: o,
                    location: c.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW
                }), y.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: t.id
                })
            }, [t, n, o]);
        return r.createElement("li", {
            className: g.command,
            onClick: i
        }, r.createElement(a.Text, {
            variant: "text-sm/semibold"
        }, n.displayName), r.createElement(a.Text, {
            variant: "text-xs/medium",
            lineClamp: 1
        }, n.displayDescription))
    }

    function N(e) {
        var t, n, o = e.channel,
            s = e.appDetail,
            c = l.useDiscovery(o, {
                commandType: u.ApplicationCommandType.CHAT
            }, {
                placeholderCount: 0,
                limit: S.DISCOVERY_COMMANDS_QUERY_LIMIT,
                includeFrecency: !0
            }),
            y = c.filterSection,
            T = c.commandsByActiveSection,
            N = (0, h.default)({
                sectionId: s.id,
                commandsByActiveSection: T
            }).commands;
        r.useEffect(function() {
            y(s.id)
        }, [s.id, y]);
        var R = m.default.getApplicationIconSource({
                id: s.id,
                icon: s.icon,
                bot: null === (t = s.application) || void 0 === t ? void 0 : t.bot,
                botIconFirst: !0
            }),
            C = r.useCallback(function() {
                I.dismissAppDetail()
            }, []),
            P = (0, a.useToken)(a.tokens.colors.BG_BASE_PRIMARY).hex(),
            D = (0, d.default)("number" == typeof R ? "" : null == R ? void 0 : R.uri, null != P ? P : ""),
            L = (0, f.getIconComponent)(s),
            M = r.useMemo(function() {
                var e, t;
                return (0, _.parseBioReact)(null !== (t = null === (e = s.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
            }, [null === (n = s.application) || void 0 === n ? void 0 : n.description]);
        return r.createElement(a.ScrollerNone, {
            className: g.container,
            fade: !0
        }, r.createElement("div", {
            className: g.headerWhenSideCard,
            style: {
                backgroundColor: D
            }
        }, r.createElement(a.Clickable, {
            "aria-label": v.default.Messages.CLOSE,
            onClick: C,
            className: g.headerCloseButton
        }, r.createElement(E.default, null))), r.createElement("div", {
            className: g.contentContainer
        }, r.createElement("div", {
            className: g.appIcon
        }, r.createElement(L, {
            channel: o,
            section: s,
            width: 72,
            height: 72
        }), r.createElement("div", {
            className: g.appIconBorderThingy
        })), r.createElement("section", null, r.createElement(a.Heading, {
            className: g.appName,
            variant: "heading-lg/bold"
        }, s.name), r.createElement(a.Text, {
            className: i()(g.__invalid_appDescription, A.markup),
            variant: "text-sm/medium",
            lineClamp: 3
        }, M)), r.createElement(O.default, {
            commands: N,
            channel: o
        }), r.createElement("div", {
            className: g.commandListHeader
        }, r.createElement(a.Heading, {
            variant: "text-md/medium"
        }, "All Commands"), r.createElement(a.Text, {
            className: g.sortSelector,
            variant: "text-md/medium"
        }, "Popular", r.createElement(p.default, null))), r.createElement("ul", null, N.map(function(e) {
            return r.createElement(b, {
                key: e.id,
                channel: o,
                command: e,
                section: s
            })
        }))))
    }
}