function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("911969"),
        u = n("555573"),
        d = n("10718"),
        _ = n("895924"),
        c = n("826298"),
        E = n("220082"),
        I = n("240991"),
        T = n("465670"),
        f = n("605403"),
        S = n("768581"),
        h = n("585483"),
        A = n("499254"),
        m = n("660090"),
        N = n("14770"),
        p = n("981631"),
        O = n("689079"),
        R = n("689938"),
        C = n("717784"),
        g = n("946278");

    function L(e) {
        let {
            channel: t,
            command: n,
            section: s
        } = e, a = r.useCallback(() => {
            A.dismissAppLauncherPopup(), u.setActiveCommand({
                channelId: t.id,
                command: n,
                section: s,
                location: _.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW
            }), h.ComponentDispatch.dispatch(p.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: t.id
            })
        }, [t, n, s]);
        return (0, i.jsxs)("li", {
            className: C.command,
            onClick: a,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-sm/semibold",
                children: n.displayName
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                lineClamp: 1,
                children: n.displayDescription
            })]
        })
    }

    function D(e) {
        var t, n;
        let {
            channel: s,
            appDetail: u
        } = e, {
            filterSection: _,
            commandsByActiveSection: h
        } = d.useDiscovery(s, {
            commandType: l.ApplicationCommandType.CHAT
        }, {
            placeholderCount: 0,
            limit: O.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        }), {
            commands: p
        } = (0, m.default)({
            sectionId: u.id,
            commandsByActiveSection: h
        });
        r.useEffect(() => {
            _(u.id)
        }, [u.id, _]);
        let D = S.default.getApplicationIconSource({
                id: u.id,
                icon: u.icon,
                bot: null === (t = u.application) || void 0 === t ? void 0 : t.bot,
                botIconFirst: !0
            }),
            v = r.useCallback(() => {
                A.dismissAppDetail()
            }, []),
            M = (0, o.useToken)(o.tokens.colors.BG_BASE_PRIMARY).hex(),
            y = (0, E.default)("number" == typeof D ? "" : null == D ? void 0 : D.uri, null != M ? M : ""),
            P = (0, c.getIconComponent)(u),
            U = r.useMemo(() => {
                var e, t;
                return (0, I.parseBioReact)(null !== (t = null === (e = u.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
            }, [null === (n = u.application) || void 0 === n ? void 0 : n.description]);
        return (0, i.jsxs)(o.ScrollerNone, {
            className: C.container,
            fade: !0,
            children: [(0, i.jsx)("div", {
                className: C.headerWhenSideCard,
                style: {
                    backgroundColor: y
                },
                children: (0, i.jsx)(o.Clickable, {
                    "aria-label": R.default.Messages.CLOSE,
                    onClick: v,
                    className: C.headerCloseButton,
                    children: (0, i.jsx)(T.default, {})
                })
            }), (0, i.jsxs)("div", {
                className: C.contentContainer,
                children: [(0, i.jsxs)("div", {
                    className: C.appIcon,
                    children: [(0, i.jsx)(P, {
                        channel: s,
                        section: u,
                        width: 72,
                        height: 72
                    }), (0, i.jsx)("div", {
                        className: C.appIconBorderThingy
                    })]
                }), (0, i.jsxs)("section", {
                    children: [(0, i.jsx)(o.Heading, {
                        className: C.appName,
                        variant: "heading-lg/bold",
                        children: u.name
                    }), (0, i.jsx)(o.Text, {
                        className: a()(C.__invalid_appDescription, g.markup),
                        variant: "text-sm/medium",
                        lineClamp: 3,
                        children: U
                    })]
                }), (0, i.jsx)(N.default, {
                    commands: p,
                    channel: s
                }), (0, i.jsxs)("div", {
                    className: C.commandListHeader,
                    children: [(0, i.jsx)(o.Heading, {
                        variant: "text-md/medium",
                        children: "All Commands"
                    }), (0, i.jsxs)(o.Text, {
                        className: C.sortSelector,
                        variant: "text-md/medium",
                        children: ["Popular", (0, i.jsx)(f.default, {})]
                    })]
                }), (0, i.jsx)("ul", {
                    children: p.map(e => (0, i.jsx)(L, {
                        channel: s,
                        command: e,
                        section: u
                    }, e.id))
                })]
            })]
        })
    }
}