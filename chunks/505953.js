function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("481060"),
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
        } = e, [L, v] = r.useState(!1), D = (0, u.getTimestampString)(f.default.extractTimestamp(t.startId)), M = (0, a.useStateFromStores)([S.default], () => S.default.summaryFeedback(t)), y = (e, n) => {
            e.stopPropagation(), (0, h.default)({
                summary: t,
                channel: _,
                rating: n
            })
        }, P = d.default.can(N.Permissions.MANAGE_MESSAGES, _);
        return (0, i.jsxs)(s.Clickable, {
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
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: [(0, i.jsx)(T.default, {
                hovered: L,
                unread: C,
                className: O.unreadPill
            }), (0, i.jsx)("div", {
                className: O.rowHeader,
                children: (0, i.jsxs)("div", {
                    className: O.rowHeaderLeft,
                    children: [(0, i.jsx)(s.Text, {
                        className: O.timestamp,
                        color: "interactive-normal",
                        variant: "text-xs/normal",
                        children: D
                    }), (0, i.jsx)(l.default, {
                        height: 4,
                        width: 4,
                        "aria-hidden": "true",
                        className: O.dot
                    }), (0, i.jsx)(c.default, {
                        height: 12,
                        width: 12,
                        className: O.icon
                    }), (0, i.jsx)(s.Text, {
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
                children: [(0, i.jsx)(s.Clickable, {
                    onClick: e => y(e, p.FeedbackRating.GOOD),
                    children: (0, i.jsx)(I.default, {
                        className: O.thumbIcon,
                        width: 12,
                        height: 12
                    })
                }), (0, i.jsx)(s.Clickable, {
                    onClick: e => y(e, p.FeedbackRating.BAD),
                    children: (0, i.jsx)(E.default, {
                        className: O.thumbIcon,
                        width: 12,
                        height: 12
                    })
                })]
            }), (0, i.jsx)(s.Text, {
                color: "header-primary",
                variant: "text-sm/semibold",
                className: O.title,
                children: t.topic
            }), (0, i.jsx)(s.Text, {
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
            channel: s,
            selectTopic: o,
            setOpen: l
        } = e, u = (0, a.useStateFromStores)([_.default], () => _.default.getOldestUnreadMessageId(s.id)), d = r.useCallback(e => {
            o(e), l(!1)
        }, [o, l]);
        return t.length < 1 ? (0, i.jsx)(m.default, {}) : (0, i.jsx)(i.Fragment, {
            children: t.map((e, t) => {
                var r;
                let a = null !== (r = n[t]) && void 0 !== r ? r : [];
                return (0, i.jsx)(R, {
                    summary: e,
                    channel: s,
                    members: a,
                    guildId: s.guild_id,
                    unread: null != u && f.default.compare(e.endId, u) > 0,
                    onClick: () => d(t)
                }, t)
            })
        })
    }
}