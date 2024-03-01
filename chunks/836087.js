function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("70102"), n("222007");
    var a = n("37983"),
        r = n("884691"),
        s = n("414456"),
        l = n.n(s),
        i = n("917351"),
        u = n.n(i),
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
        v = n("49111"),
        T = n("782340"),
        I = n("964376");

    function A(e, t) {
        switch (e) {
            case _.ParticipantTypes.ACTIVITY:
                return T.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                    numUsers: t
                });
            case _.ParticipantTypes.STREAM:
                return T.default.Messages.SPECTATORS.format({
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
            channelId: i,
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
                        className: l(I.memberListItem, {
                            [I.popoutDisabled]: n
                        }),
                        textClassName: I.memberListItemText,
                        user: e,
                        disablePopout: n,
                        nick: g.default.getNickname(r, i, e),
                        onContextMenu: t => n ? null : u(t, e)
                    }, e.id))
                })]
            })
        })
    }

    function x(e) {
        let {
            users: t,
            guildId: n,
            channelId: r,
            maxVisibleUsers: s = 3,
            className: i,
            participantType: u
        } = e, o = A(u, t.length), d = t.length < s ? t.map(e => (0, a.jsx)("div", {
            className: I.viewersTooltipItem,
            children: g.default.getName(n, r, e)
        }, e.id)) : o;
        return (0, a.jsx)(c.TooltipContainer, {
            text: d,
            "aria-label": o,
            children: (0, a.jsxs)("div", {
                className: l(I.viewers, i),
                children: [(0, a.jsx)(C.default, {
                    className: I.viewersIcon
                }), (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    children: t.length
                })]
            })
        })
    }
    let y = [];

    function N(e) {
        let {
            channelId: t,
            guildId: s,
            participant: i,
            className: m,
            compact: C = !1,
            disableInteraction: g = !1,
            maxVisibleUsers: T = 3
        } = e, [A, N] = r.useState(!1), R = r.useRef(new d.DelayedCall(150, () => N(!1))), L = (0, o.useStateFromStoresArray)([E.default, p.default], () => {
            if (i.type === _.ParticipantTypes.STREAM) {
                let e = E.default.getViewerIds(i.id);
                return e.length > 0 ? e.map(e => p.default.getUser(e)).filter(S.isNotNullish) : y
            }
            return i.type === _.ParticipantTypes.ACTIVITY ? i.participants.size > 0 ? Array.from(i.participants).map(e => p.default.getUser(e)).filter(S.isNotNullish) : y : y
        }, [i]), O = r.useCallback(() => {
            R.current.cancel(), N(!0)
        }, []), P = r.useCallback(() => {
            R.current.delay()
        }, []), b = r.useCallback((e, t) => {
            O(), (0, f.openContextMenuLazy)(e, async () => {
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
        }, [P, O]);
        if (0 === L.length) return null;
        if (C) return (0, a.jsx)(x, {
            maxVisibleUsers: T,
            users: L,
            guildId: s,
            channelId: t,
            className: m,
            participantType: i.type
        });
        let D = u(L).take(T).map(e => (0, a.jsx)(c.Avatar, {
            src: e.getAvatarURL(s, 24),
            "aria-label": e.username,
            size: c.AvatarSizes.SIZE_24,
            className: I.viewer
        }, e.id)).value();
        return L.length > T && (D[D.length - 1] = (0, a.jsxs)("div", {
            className: I.overflow,
            children: ["+", L.length - T + 1]
        }, "overflow")), (0, a.jsx)(h.default, {
            section: v.AnalyticsSections.STREAM_VIEWER_POPOUT,
            children: (0, a.jsx)("div", {
                onMouseEnter: O,
                onMouseLeave: P,
                children: (0, a.jsx)(c.Popout, {
                    renderPopout: () => (0, a.jsx)(M, {
                        participantType: i.type,
                        handleUserContextMenu: b,
                        guildId: s,
                        channelId: t,
                        users: L,
                        disableInteraction: g
                    }),
                    shouldShow: A,
                    position: "top",
                    children: () => (0, a.jsx)("div", {
                        className: l(I.viewers, m),
                        children: D
                    })
                })
            })
        })
    }
}