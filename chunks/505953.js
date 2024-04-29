function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("239091"),
        l = n("79712"),
        u = n("91159"),
        d = n("496675"),
        _ = n("306680"),
        c = n("974029"),
        E = n("446183"),
        I = n("677281"),
        T = n("880080"),
        f = n("709054"),
        S = n("765104"),
        h = n("477291"),
        A = n("478758"),
        m = n("789707"),
        N = n("981631"),
        p = n("531578"),
        O = n("235445");

    function R(e) {
        let {
            summary: t,
            channel: _,
            members: m,
            guildId: R,
            unread: C,
            onClick: g
        } = e, [L, D] = r.useState(!1), v = (0, u.getTimestampString)(f.default.extractTimestamp(t.startId)), M = (0, s.useStateFromStores)([S.default], () => S.default.summaryFeedback(t)), y = (e, n) => {
            e.stopPropagation(), (0, h.default)({
                summary: t,
                channel: _,
                rating: n
            })
        }, P = d.default.can(N.Permissions.MANAGE_MESSAGES, _);
        return (0, i.jsxs)(a.Clickable, {
            className: O.container,
            onClick: g,
            onContextMenu: e => {
                P && (0, o.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.e("12891").then(n.bind(n, "519620"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        summary: t
                    })
                })
            },
            onMouseEnter: () => D(!0),
            onMouseLeave: () => D(!1),
            children: [(0, i.jsx)(T.default, {
                hovered: L,
                unread: C,
                className: O.unreadPill
            }), (0, i.jsx)("div", {
                className: O.rowHeader,
                children: (0, i.jsxs)("div", {
                    className: O.rowHeaderLeft,
                    children: [(0, i.jsx)(a.Text, {
                        className: O.timestamp,
                        color: "interactive-normal",
                        variant: "text-xs/normal",
                        children: v
                    }), (0, i.jsx)(l.default, {
                        height: 4,
                        width: 4,
                        "aria-hidden": "true",
                        className: O.dot
                    }), (0, i.jsx)(c.default, {
                        height: 12,
                        width: 12,
                        className: O.icon
                    }), (0, i.jsx)(a.Text, {
                        className: O.count,
                        color: "interactive-normal",
                        variant: "text-xs/normal",
                        children: t.count
                    }), m.length > 0 && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(l.default, {
                            height: 4,
                            width: 4,
                            "aria-hidden": "true",
                            className: O.dot
                        }), (0, i.jsx)(A.default, {
                            partySize: {
                                knownSize: m.length,
                                totalSize: m.length
                            },
                            maxAvatarsShown: 3,
                            members: m,
                            guildId: R
                        })]
                    })]
                })
            }), L && !M && (0, i.jsxs)("div", {
                className: O.feedbackContainer,
                children: [(0, i.jsx)(a.Clickable, {
                    onClick: e => y(e, p.FeedbackRating.GOOD),
                    children: (0, i.jsx)(I.default, {
                        className: O.thumbIcon,
                        width: 12,
                        height: 12
                    })
                }), (0, i.jsx)(a.Clickable, {
                    onClick: e => y(e, p.FeedbackRating.BAD),
                    children: (0, i.jsx)(E.default, {
                        className: O.thumbIcon,
                        width: 12,
                        height: 12
                    })
                })]
            }), (0, i.jsx)(a.Text, {
                color: "header-primary",
                variant: "text-sm/semibold",
                className: O.title,
                children: t.topic
            }), (0, i.jsx)(a.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: O.subtitle,
                children: t.summShort
            })]
        })
    }

    function C(e) {
        let {
            summaries: t,
            summariesMembers: n,
            channel: a,
            selectTopic: o,
            setOpen: l
        } = e, u = (0, s.useStateFromStores)([_.default], () => _.default.getOldestUnreadMessageId(a.id)), d = r.useCallback(e => {
            o(e), l(!1)
        }, [o, l]);
        return t.length < 1 ? (0, i.jsx)(m.default, {}) : (0, i.jsx)(i.Fragment, {
            children: t.map((e, t) => {
                var r;
                let s = null !== (r = n[t]) && void 0 !== r ? r : [];
                return (0, i.jsx)(R, {
                    summary: e,
                    channel: a,
                    members: s,
                    guildId: a.guild_id,
                    unread: null != u && f.default.compare(e.endId, u) > 0,
                    onClick: () => d(t)
                }, t)
            })
        })
    }
}