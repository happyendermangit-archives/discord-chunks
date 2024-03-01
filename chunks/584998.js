function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
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
        E = n("299039"),
        g = n("347738"),
        C = n("118094"),
        S = n("402318"),
        T = n("976818"),
        v = n("49111"),
        I = n("200521"),
        _ = n("714997");

    function N(e) {
        let {
            summary: t,
            channel: c,
            members: T,
            guildId: N,
            unread: A,
            onClick: x
        } = e, [y, O] = i.useState(!1), R = (0, u.getTimestampString)(E.default.extractTimestamp(t.startId)), M = (0, a.useStateFromStores)([g.default], () => g.default.summaryFeedback(t)), L = (e, n) => {
            e.stopPropagation(), (0, C.default)({
                summary: t,
                channel: c,
                rating: n
            })
        }, P = d.default.can(v.Permissions.MANAGE_MESSAGES, c);
        return (0, l.jsxs)(s.Clickable, {
            className: _.container,
            onClick: x,
            onContextMenu: e => {
                P && (0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("113286").then(n.bind(n, "113286"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        summary: t
                    })
                })
            },
            onMouseEnter: () => O(!0),
            onMouseLeave: () => O(!1),
            children: [(0, l.jsx)(h.default, {
                hovered: y,
                unread: A,
                className: _.unreadPill
            }), (0, l.jsx)("div", {
                className: _.rowHeader,
                children: (0, l.jsxs)("div", {
                    className: _.rowHeaderLeft,
                    children: [(0, l.jsx)(s.Text, {
                        className: _.timestamp,
                        color: "interactive-normal",
                        variant: "text-xs/normal",
                        children: R
                    }), (0, l.jsx)(o.default, {
                        height: 4,
                        width: 4,
                        "aria-hidden": "true",
                        className: _.dot
                    }), (0, l.jsx)(f.default, {
                        height: 12,
                        width: 12,
                        className: _.icon
                    }), (0, l.jsx)(s.Text, {
                        className: _.count,
                        color: "interactive-normal",
                        variant: "text-xs/normal",
                        children: t.count
                    }), T.length > 0 && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(o.default, {
                            height: 4,
                            width: 4,
                            "aria-hidden": "true",
                            className: _.dot
                        }), (0, l.jsx)(S.default, {
                            partySize: {
                                knownSize: T.length,
                                totalSize: T.length
                            },
                            maxAvatarsShown: 3,
                            members: T,
                            guildId: N
                        })]
                    })]
                })
            }), y && !M && (0, l.jsxs)("div", {
                className: _.feedbackContainer,
                children: [(0, l.jsx)(s.Clickable, {
                    onClick: e => L(e, I.FeedbackRating.GOOD),
                    children: (0, l.jsx)(p.default, {
                        className: _.thumbIcon,
                        width: 12,
                        height: 12
                    })
                }), (0, l.jsx)(s.Clickable, {
                    onClick: e => L(e, I.FeedbackRating.BAD),
                    children: (0, l.jsx)(m.default, {
                        className: _.thumbIcon,
                        width: 12,
                        height: 12
                    })
                })]
            }), (0, l.jsx)(s.Text, {
                color: "header-primary",
                variant: "text-sm/semibold",
                className: _.title,
                children: t.topic
            }), (0, l.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: _.subtitle,
                children: t.summShort
            })]
        })
    }

    function A(e) {
        let {
            summaries: t,
            summariesMembers: n,
            channel: s,
            selectTopic: r,
            setOpen: o
        } = e, u = (0, a.useStateFromStores)([c.default], () => c.default.getOldestUnreadMessageId(s.id)), d = i.useCallback(e => {
            r(e), o(!1)
        }, [r, o]);
        return t.length < 1 ? (0, l.jsx)(T.default, {}) : (0, l.jsx)(l.Fragment, {
            children: t.map((e, t) => {
                var i;
                let a = null !== (i = n[t]) && void 0 !== i ? i : [];
                return (0, l.jsx)(N, {
                    summary: e,
                    channel: s,
                    members: a,
                    guildId: s.guild_id,
                    unread: null != u && E.default.compare(e.endId, u) > 0,
                    onClick: () => d(t)
                }, t)
            })
        })
    }
}