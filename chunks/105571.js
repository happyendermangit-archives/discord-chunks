function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("798609"),
        u = n("507217"),
        d = n("240249"),
        c = n("524768"),
        f = n("355263"),
        m = n("462274"),
        p = n("368639"),
        h = n("945330"),
        E = n("256170"),
        g = n("315102"),
        C = n("659500"),
        S = n("82372"),
        T = n("476606"),
        v = n("540843"),
        I = n("49111"),
        _ = n("317041"),
        N = n("782340"),
        A = n("23429"),
        x = n("919163");

    function y(e) {
        let {
            channel: t,
            command: n,
            section: a
        } = e, s = i.useCallback(() => {
            S.dismissAppLauncherPopup(), u.setActiveCommand({
                channelId: t.id,
                command: n,
                section: a,
                location: c.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW
            }), C.ComponentDispatch.dispatch(I.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: t.id
            })
        }, [t, n, a]);
        return (0, l.jsxs)("li", {
            className: A.command,
            onClick: s,
            children: [(0, l.jsx)(r.Text, {
                variant: "text-sm/semibold",
                children: n.displayName
            }), (0, l.jsx)(r.Text, {
                variant: "text-xs/medium",
                lineClamp: 1,
                children: n.displayDescription
            })]
        })
    }

    function O(e) {
        var t, n;
        let {
            channel: a,
            appDetail: u
        } = e, {
            filterSection: c,
            commandsByActiveSection: C
        } = d.useDiscovery(a, {
            commandType: o.ApplicationCommandType.CHAT
        }, {
            placeholderCount: 0,
            limit: _.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        }), {
            commands: I
        } = (0, T.default)({
            sectionId: u.id,
            commandsByActiveSection: C
        });
        i.useEffect(() => {
            c(u.id)
        }, [u.id, c]);
        let O = g.default.getApplicationIconSource({
                id: u.id,
                icon: u.icon,
                bot: null === (t = u.application) || void 0 === t ? void 0 : t.bot,
                botIconFirst: !0
            }),
            R = i.useCallback(() => {
                S.dismissAppDetail()
            }, []),
            M = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
            L = (0, m.default)("number" == typeof O ? "" : null == O ? void 0 : O.uri, null != M ? M : ""),
            P = (0, f.getIconComponent)(u),
            b = i.useMemo(() => {
                var e, t;
                return (0, p.parseBioReact)(null !== (t = null === (e = u.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
            }, [null === (n = u.application) || void 0 === n ? void 0 : n.description]);
        return (0, l.jsxs)(r.ScrollerNone, {
            className: A.container,
            fade: !0,
            children: [(0, l.jsx)("div", {
                className: A.headerWhenSideCard,
                style: {
                    backgroundColor: L
                },
                children: (0, l.jsx)(r.Clickable, {
                    "aria-label": N.default.Messages.CLOSE,
                    onClick: R,
                    className: A.headerCloseButton,
                    children: (0, l.jsx)(h.default, {})
                })
            }), (0, l.jsxs)("div", {
                className: A.contentContainer,
                children: [(0, l.jsxs)("div", {
                    className: A.appIcon,
                    children: [(0, l.jsx)(P, {
                        channel: a,
                        section: u,
                        width: 72,
                        height: 72
                    }), (0, l.jsx)("div", {
                        className: A.appIconBorderThingy
                    })]
                }), (0, l.jsxs)("section", {
                    children: [(0, l.jsx)(r.Heading, {
                        className: A.appName,
                        variant: "heading-lg/bold",
                        children: u.name
                    }), (0, l.jsx)(r.Text, {
                        className: s(A.appDescription, x.markup),
                        variant: "text-sm/medium",
                        lineClamp: 3,
                        children: b
                    })]
                }), (0, l.jsx)(v.default, {
                    commands: I,
                    channel: a
                }), (0, l.jsxs)("div", {
                    className: A.commandListHeader,
                    children: [(0, l.jsx)(r.Heading, {
                        variant: "text-md/medium",
                        children: "All Commands"
                    }), (0, l.jsxs)(r.Text, {
                        className: A.sortSelector,
                        variant: "text-md/medium",
                        children: ["Popular", (0, l.jsx)(E.default, {})]
                    })]
                }), (0, l.jsx)("ul", {
                    children: I.map(e => (0, l.jsx)(y, {
                        channel: a,
                        command: e,
                        section: u
                    }, e.id))
                })]
            })]
        })
    }
}