function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("798609"),
        u = n("507217"),
        d = n("240249"),
        c = n("524768"),
        f = n("355263"),
        p = n("462274"),
        m = n("368639"),
        h = n("945330"),
        x = n("256170"),
        E = n("315102"),
        y = n("659500"),
        g = n("82372"),
        S = n("476606"),
        C = n("540843"),
        T = n("49111"),
        _ = n("317041"),
        I = n("782340"),
        v = n("23429"),
        N = n("919163");

    function A(e) {
        let {
            channel: t,
            command: n,
            section: a
        } = e, s = l.useCallback(() => {
            g.dismissAppLauncherPopup(), u.setActiveCommand({
                channelId: t.id,
                command: n,
                section: a,
                location: c.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW
            }), y.ComponentDispatch.dispatch(T.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                channelId: t.id
            })
        }, [t, n, a]);
        return (0, i.jsxs)("li", {
            className: v.command,
            onClick: s,
            children: [(0, i.jsx)(r.Text, {
                variant: "text-sm/semibold",
                children: n.displayName
            }), (0, i.jsx)(r.Text, {
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
            commandsByActiveSection: y
        } = d.useDiscovery(a, {
            commandType: o.ApplicationCommandType.CHAT
        }, {
            placeholderCount: 0,
            limit: _.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        }), {
            commands: T
        } = (0, S.default)({
            sectionId: u.id,
            commandsByActiveSection: y
        });
        l.useEffect(() => {
            c(u.id)
        }, [u.id, c]);
        let O = E.default.getApplicationIconSource({
                id: u.id,
                icon: u.icon,
                bot: null === (t = u.application) || void 0 === t ? void 0 : t.bot,
                botIconFirst: !0
            }),
            R = l.useCallback(() => {
                g.dismissAppDetail()
            }, []),
            M = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
            k = (0, p.default)("number" == typeof O ? "" : null == O ? void 0 : O.uri, null != M ? M : ""),
            L = (0, f.getIconComponent)(u),
            P = l.useMemo(() => {
                var e, t;
                return (0, m.parseBioReact)(null !== (t = null === (e = u.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
            }, [null === (n = u.application) || void 0 === n ? void 0 : n.description]);
        return (0, i.jsxs)(r.ScrollerNone, {
            className: v.container,
            fade: !0,
            children: [(0, i.jsx)("div", {
                className: v.headerWhenSideCard,
                style: {
                    backgroundColor: k
                },
                children: (0, i.jsx)(r.Clickable, {
                    "aria-label": I.default.Messages.CLOSE,
                    onClick: R,
                    className: v.headerCloseButton,
                    children: (0, i.jsx)(h.default, {})
                })
            }), (0, i.jsxs)("div", {
                className: v.contentContainer,
                children: [(0, i.jsxs)("div", {
                    className: v.appIcon,
                    children: [(0, i.jsx)(L, {
                        channel: a,
                        section: u,
                        width: 72,
                        height: 72
                    }), (0, i.jsx)("div", {
                        className: v.appIconBorderThingy
                    })]
                }), (0, i.jsxs)("section", {
                    children: [(0, i.jsx)(r.Heading, {
                        className: v.appName,
                        variant: "heading-lg/bold",
                        children: u.name
                    }), (0, i.jsx)(r.Text, {
                        className: s(v.appDescription, N.markup),
                        variant: "text-sm/medium",
                        lineClamp: 3,
                        children: P
                    })]
                }), (0, i.jsx)(C.default, {
                    commands: T,
                    channel: a
                }), (0, i.jsxs)("div", {
                    className: v.commandListHeader,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "text-md/medium",
                        children: "All Commands"
                    }), (0, i.jsxs)(r.Text, {
                        className: v.sortSelector,
                        variant: "text-md/medium",
                        children: ["Popular", (0, i.jsx)(x.default, {})]
                    })]
                }), (0, i.jsx)("ul", {
                    children: T.map(e => (0, i.jsx)(A, {
                        channel: a,
                        command: e,
                        section: u
                    }, e.id))
                })]
            })]
        })
    }
}