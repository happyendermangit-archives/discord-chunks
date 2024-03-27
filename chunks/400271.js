function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildEventStatus: function() {
            return C
        },
        GuildEventDetails: function() {
            return S
        },
        default: function() {
            return D
        }
    });
    var l = n("37983");
    n("884691");
    var a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        u = n("77078"),
        i = n("26989"),
        c = n("155207"),
        d = n("158998"),
        o = n("398604"),
        E = n("397680"),
        f = n("466148"),
        v = n("18284"),
        h = n("189443"),
        T = n("822516"),
        m = n("909151"),
        N = n("255050"),
        g = n("393745"),
        _ = n("782340"),
        x = n("502249");

    function C(e) {
        let {
            className: t,
            creator: n,
            guildId: a,
            isNew: m,
            isHub: N = !1,
            guildEventId: C,
            eventPreview: S,
            recurrenceId: D
        } = e, R = (0, r.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(C)), I = (0, v.default)(a, C, D), p = null != R ? R : S, L = (0, r.useStateFromStores)([i.default], () => i.default.getNick(a, null == n ? void 0 : n.id), [a, n]);
        D = null == p || null != D ? D : (0, T.getNextRecurrenceIdInEvent)(p);
        let {
            startTime: A
        } = (0, f.default)(C, D, S), w = (0, E.default)(D, C), j = (null == p ? void 0 : p.scheduled_start_time) != null ? (0, T.getRecurrenceStatus)(w, A, new Date(p.scheduled_start_time)) : null;
        if (null == p) return null;
        let {
            entity_type: M,
            status: O,
            recurrence_rule: G
        } = p;
        return (0, l.jsxs)("div", {
            className: s(x.statusContainer, t),
            children: [(0, l.jsx)(g.GuildEventTimeStatus, {
                startTime: A.toISOString(),
                status: null != j ? j : O,
                eventType: M,
                isNew: m,
                recurrenceRule: (0, h.recurrenceRuleFromServer)(G),
                guildEventId: C,
                recurrenceId: D
            }), (0, l.jsx)("div", {
                className: x.spacer
            }), !N && null != n && (0, l.jsx)(u.Tooltip, {
                text: _.default.Messages.GUILD_EVENT_CREATED_BY.format({
                    username: null != L ? L : d.default.getName(n)
                }),
                children: e => (0, l.jsx)(u.Avatar, {
                    ...e,
                    src: n.getAvatarURL(a, 20),
                    size: u.AvatarSizes.SIZE_20,
                    "aria-label": null != L ? L : n.username,
                    className: x.creator
                })
            }), (0, l.jsx)(u.Tooltip, {
                text: _.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                    count: I
                }),
                children: e => (0, l.jsxs)("div", {
                    className: x.rsvpCount,
                    ...e,
                    children: [(0, l.jsx)(c.default, {
                        width: 12,
                        height: 12,
                        className: x.rsvpIcon
                    }), (0, l.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: I
                    })]
                })
            })]
        })
    }

    function S(e) {
        let {
            headerVariant: t = "heading-lg/medium",
            descriptionClassName: n,
            name: a,
            description: r,
            truncate: i,
            guildId: c,
            imageSource: d
        } = e;
        return (0, l.jsxs)("div", {
            className: s({
                [x.withThumbnail]: null != d
            }),
            children: [(0, l.jsxs)("div", {
                className: s({
                    [x.descriptionWithThumbnail]: null != d
                }),
                children: [(0, l.jsx)(u.Heading, {
                    variant: t,
                    selectable: !0,
                    className: x.eventName,
                    children: a
                }), null != r && (0, l.jsx)(m.default, {
                    description: r,
                    className: s(n, x.description),
                    truncate: i,
                    guildId: c
                })]
            }), null != d && (0, l.jsx)("div", {
                className: x.thumbnailContainer,
                children: (0, l.jsx)(N.default, {
                    source: d,
                    className: x.thumbnail
                })
            })]
        })
    }

    function D(e) {
        let {
            headerVariant: t,
            descriptionClassName: n,
            creator: a,
            name: s,
            description: r,
            imageSource: u,
            isHub: i = !1,
            truncate: c,
            guildId: d,
            isNew: o,
            guildEventId: E,
            eventPreview: f,
            recurrenceId: v
        } = e;
        return (0, l.jsxs)("div", {
            className: x.container,
            children: [(0, l.jsx)(C, {
                className: x.eventInfoStatusContainer,
                creator: a,
                guildId: d,
                isHub: i,
                isNew: o,
                guildEventId: E,
                eventPreview: f,
                recurrenceId: v
            }), (0, l.jsx)(S, {
                name: s,
                description: r,
                headerVariant: t,
                descriptionClassName: n,
                truncate: c,
                guildId: d,
                imageSource: u
            })]
        })
    }
}