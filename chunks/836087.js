function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("70102"), n("222007");
    var a = n("37983"),
        r = n("884691"),
        s = n("414456"),
        i = n.n(s),
        l = n("917351"),
        u = n.n(l),
        o = n("446674"),
        d = n("862337"),
        c = n("77078"),
        f = n("272030"),
        h = n("901582"),
        E = n("373469"),
        p = n("697218"),
        m = n("427302"),
        C = n("462579"),
        S = n("449008"),
        g = n("387111"),
        _ = n("99795"),
        T = n("49111"),
        v = n("782340"),
        I = n("964376");

    function A(e, t) {
        switch (e) {
            case _.ParticipantTypes.ACTIVITY:
                return v.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                    numUsers: t
                });
            case _.ParticipantTypes.STREAM:
                return v.default.Messages.SPECTATORS.format({
                    numViewers: t
                });
            default:
                throw Error("Unknown participant type.")
        }
    }

    function M(e) {
        let {
            users: t,
            disableInteraction: n,
            guildId: r,
            participantType: s,
            channelId: l,
            handleUserContextMenu: u
        } = e, o = A(s, t.length);
        return (0, a.jsx)(c.Dialog, {
            "aria-label": o,
            className: I.popoutWrapper,
            children: (0, a.jsxs)(c.Scroller, {
                className: I.scroller,
                children: [(0, a.jsx)(c.Heading, {
                    variant: "heading-deprecated-12/semibold",
                    className: I.memberListHeader,
                    children: o
                }), (0, a.jsx)("div", {
                    children: t.map(e => (0, a.jsx)(m.default, {
                        guildId: null != r ? r : void 0,
                        className: i(I.memberListItem, {
                            [I.popoutDisabled]: n
                        }),
                        textClassName: I.memberListItemText,
                        user: e,
                        disablePopout: n,
                        nick: g.default.getNickname(r, l, e),
                        onContextMenu: t => n ? null : u(t, e)
                    }, e.id))
                })]
            })
        })
    }

    function R(e) {
        let {
            users: t,
            guildId: n,
            channelId: r,
            maxVisibleUsers: s = 3,
            className: l,
            participantType: u
        } = e, o = A(u, t.length), d = t.length < s ? t.map(e => (0, a.jsx)("div", {
            className: I.viewersTooltipItem,
            children: g.default.getName(n, r, e)
        }, e.id)) : o;
        return (0, a.jsx)(c.TooltipContainer, {
            text: d,
            "aria-label": o,
            children: (0, a.jsxs)("div", {
                className: i(I.viewers, l),
                children: [(0, a.jsx)(C.default, {
                    className: I.viewersIcon
                }), (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    children: t.length
                })]
            })
        })
    }
    let N = [];

    function y(e) {
        let {
            channelId: t,
            guildId: s,
            participant: l,
            className: m,
            compact: C = !1,
            disableInteraction: g = !1,
            maxVisibleUsers: v = 3
        } = e, [A, y] = r.useState(!1), O = r.useRef(new d.DelayedCall(150, () => y(!1))), L = (0, o.useStateFromStoresArray)([E.default, p.default], () => {
            if (l.type === _.ParticipantTypes.STREAM) {
                let e = E.default.getViewerIds(l.id);
                return e.length > 0 ? e.map(e => p.default.getUser(e)).filter(S.isNotNullish) : N
            }
            return l.type === _.ParticipantTypes.ACTIVITY ? l.participants.size > 0 ? Array.from(l.participants).map(e => p.default.getUser(e)).filter(S.isNotNullish) : N : N
        }, [l]), x = r.useCallback(() => {
            O.current.cancel(), y(!0)
        }, []), P = r.useCallback(() => {
            O.current.delay()
        }, []), D = r.useCallback((e, t) => {
            x(), (0, f.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("406784").then(n.bind(n, "406784"));
                return n => (0, a.jsx)(e, {
                    ...n,
                    user: t
                })
            }, {
                onClose: P
            })
        }, [P, x]);
        if (0 === L.length) return null;
        if (C) return (0, a.jsx)(R, {
            maxVisibleUsers: v,
            users: L,
            guildId: s,
            channelId: t,
            className: m,
            participantType: l.type
        });
        let b = u(L).take(v).map(e => (0, a.jsx)(c.Avatar, {
            src: e.getAvatarURL(s, 24),
            "aria-label": e.username,
            size: c.AvatarSizes.SIZE_24,
            className: I.viewer
        }, e.id)).value();
        return L.length > v && (b[b.length - 1] = (0, a.jsxs)("div", {
            className: I.overflow,
            children: ["+", L.length - v + 1]
        }, "overflow")), (0, a.jsx)(h.default, {
            section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
            children: (0, a.jsx)("div", {
                onMouseEnter: x,
                onMouseLeave: P,
                children: (0, a.jsx)(c.Popout, {
                    renderPopout: () => (0, a.jsx)(M, {
                        participantType: l.type,
                        handleUserContextMenu: D,
                        guildId: s,
                        channelId: t,
                        users: L,
                        disableInteraction: g
                    }),
                    shouldShow: A,
                    position: "top",
                    children: () => (0, a.jsx)("div", {
                        className: i(I.viewers, m),
                        children: b
                    })
                })
            })
        })
    }
}