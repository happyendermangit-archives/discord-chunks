function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("446674"),
        s = n("77078"),
        r = n("272030"),
        o = n("120027"),
        u = n("487269"),
        d = n("957255"),
        c = n("660478"),
        f = n("109264"),
        p = n("251144"),
        m = n("20662"),
        h = n("15738"),
        x = n("299039"),
        E = n("347738"),
        y = n("118094"),
        g = n("402318"),
        S = n("976818"),
        C = n("49111"),
        I = n("200521"),
        _ = n("714997");

    function T(e) {
        let {
            summary: t,
            channel: c,
            members: S,
            guildId: T,
            unread: v,
            onClick: N
        } = e, [A, O] = l.useState(!1), R = (0, u.getTimestampString)(x.default.extractTimestamp(t.startId)), M = (0, a.useStateFromStores)([E.default], () => E.default.summaryFeedback(t)), k = (e, n) => {
            e.stopPropagation(), (0, y.default)({
                summary: t,
                channel: c,
                rating: n
            })
        }, L = d.default.can(C.Permissions.MANAGE_MESSAGES, c);
        return (0, i.jsxs)(s.Clickable, {
            className: _.container,
            onClick: N,
            onContextMenu: e => {
                L && (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("113286").then(n.bind(n, "113286"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        summary: t
                    })
                })
            },
            onMouseEnter: () => O(!0),
            onMouseLeave: () => O(!1),
            children: [(0, i.jsx)(h.default, {
                hovered: A,
                unread: v,
                className: _.unreadPill
            }), (0, i.jsx)("div", {
                className: _.rowHeader,
                children: (0, i.jsxs)("div", {
                    className: _.rowHeaderLeft,
                    children: [(0, i.jsx)(s.Text, {
                        className: _.timestamp,
                        color: "interactive-normal",
                        variant: "text-xs/normal",
                        children: R
                    }), (0, i.jsx)(o.default, {
                        height: 4,
                        width: 4,
                        "aria-hidden": "true",
                        className: _.dot
                    }), (0, i.jsx)(f.default, {
                        height: 12,
                        width: 12,
                        className: _.icon
                    }), (0, i.jsx)(s.Text, {
                        className: _.count,
                        color: "interactive-normal",
                        variant: "text-xs/normal",
                        children: t.count
                    }), S.length > 0 && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(o.default, {
                            height: 4,
                            width: 4,
                            "aria-hidden": "true",
                            className: _.dot
                        }), (0, i.jsx)(g.default, {
                            partySize: {
                                knownSize: S.length,
                                totalSize: S.length
                            },
                            maxAvatarsShown: 3,
                            members: S,
                            guildId: T
                        })]
                    })]
                })
            }), A && !M && (0, i.jsxs)("div", {
                className: _.feedbackContainer,
                children: [(0, i.jsx)(s.Clickable, {
                    onClick: e => k(e, I.FeedbackRating.GOOD),
                    children: (0, i.jsx)(m.default, {
                        className: _.thumbIcon,
                        width: 12,
                        height: 12
                    })
                }), (0, i.jsx)(s.Clickable, {
                    onClick: e => k(e, I.FeedbackRating.BAD),
                    children: (0, i.jsx)(p.default, {
                        className: _.thumbIcon,
                        width: 12,
                        height: 12
                    })
                })]
            }), (0, i.jsx)(s.Text, {
                color: "header-primary",
                variant: "text-sm/semibold",
                className: _.title,
                children: t.topic
            }), (0, i.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: _.subtitle,
                children: t.summShort
            })]
        })
    }

    function v(e) {
        let {
            summaries: t,
            summariesMembers: n,
            channel: s,
            selectTopic: r,
            setOpen: o
        } = e, u = (0, a.useStateFromStores)([c.default], () => c.default.getOldestUnreadMessageId(s.id)), d = l.useCallback(e => {
            r(e), o(!1)
        }, [r, o]);
        return t.length < 1 ? (0, i.jsx)(S.default, {}) : (0, i.jsx)(i.Fragment, {
            children: t.map((e, t) => {
                var l;
                let a = null !== (l = n[t]) && void 0 !== l ? l : [];
                return (0, i.jsx)(T, {
                    summary: e,
                    channel: s,
                    members: a,
                    guildId: s.guild_id,
                    unread: null != u && x.default.compare(e.endId, u) > 0,
                    onClick: () => d(t)
                }, t)
            })
        })
    }
}