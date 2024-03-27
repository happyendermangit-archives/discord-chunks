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
        m = n("251144"),
        p = n("20662"),
        h = n("15738"),
        x = n("299039"),
        E = n("347738"),
        y = n("118094"),
        g = n("402318"),
        S = n("976818"),
        C = n("49111"),
        T = n("200521"),
        _ = n("714997");

    function I(e) {
        let {
            summary: t,
            channel: c,
            members: S,
            guildId: I,
            unread: v,
            onClick: A
        } = e, [N, R] = l.useState(!1), O = (0, u.getTimestampString)(x.default.extractTimestamp(t.startId)), M = (0, a.useStateFromStores)([E.default], () => E.default.summaryFeedback(t)), k = (e, n) => {
            e.stopPropagation(), (0, y.default)({
                summary: t,
                channel: c,
                rating: n
            })
        }, L = d.default.can(C.Permissions.MANAGE_MESSAGES, c);
        return (0, i.jsxs)(s.Clickable, {
            className: _.container,
            onClick: A,
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
            onMouseEnter: () => R(!0),
            onMouseLeave: () => R(!1),
            children: [(0, i.jsx)(h.default, {
                hovered: N,
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
                        children: O
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
                            guildId: I
                        })]
                    })]
                })
            }), N && !M && (0, i.jsxs)("div", {
                className: _.feedbackContainer,
                children: [(0, i.jsx)(s.Clickable, {
                    onClick: e => k(e, T.FeedbackRating.GOOD),
                    children: (0, i.jsx)(p.default, {
                        className: _.thumbIcon,
                        width: 12,
                        height: 12
                    })
                }), (0, i.jsx)(s.Clickable, {
                    onClick: e => k(e, T.FeedbackRating.BAD),
                    children: (0, i.jsx)(m.default, {
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
                return (0, i.jsx)(I, {
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