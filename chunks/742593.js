function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        GuildEventDetails: function() {
            return g
        },
        GuildEventStatus: function() {
            return D
        },
        default: function() {
            return x
        }
    });
    var n = s("735250");
    s("470079");
    var l = s("120356"),
        a = s.n(l),
        r = s("442837"),
        u = s("481060"),
        i = s("271383"),
        d = s("158010"),
        c = s("51144"),
        o = s("924301"),
        E = s("894017"),
        f = s("79874"),
        T = s("315416"),
        v = s("236373"),
        N = s("854698"),
        S = s("391174"),
        h = s("95291"),
        m = s("390966"),
        _ = s("689938"),
        R = s("127790");

    function D(e) {
        let {
            className: t,
            creator: s,
            guildId: l,
            isNew: S,
            isHub: h = !1,
            guildEventId: D,
            eventPreview: g,
            recurrenceId: x
        } = e, p = (0, r.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(D)), C = (0, T.default)(l, D, x), I = null != p ? p : g, L = (0, r.useStateFromStores)([i.default], () => i.default.getNick(l, null == s ? void 0 : s.id), [l, s]);
        x = null == I || null != x ? x : (0, N.getNextRecurrenceIdInEvent)(I);
        let {
            startTime: A
        } = (0, f.default)(D, x, g), j = (0, E.default)(x, D), G = (null == I ? void 0 : I.scheduled_start_time) != null ? (0, N.getRecurrenceStatus)(j, A, new Date(I.scheduled_start_time)) : null;
        if (null == I) return null;
        let {
            entity_type: U,
            status: M,
            recurrence_rule: O
        } = I;
        return (0, n.jsxs)("div", {
            className: a()(R.statusContainer, t),
            children: [(0, n.jsx)(m.GuildEventTimeStatus, {
                startTime: A.toISOString(),
                status: null != G ? G : M,
                eventType: U,
                isNew: S,
                recurrenceRule: (0, v.recurrenceRuleFromServer)(O),
                guildEventId: D,
                recurrenceId: x
            }), (0, n.jsx)("div", {
                className: R.spacer
            }), !h && null != s && (0, n.jsx)(u.Tooltip, {
                text: _.default.Messages.GUILD_EVENT_CREATED_BY.format({
                    username: null != L ? L : c.default.getName(s)
                }),
                children: e => (0, n.jsx)(u.Avatar, {
                    ...e,
                    src: s.getAvatarURL(l, 20),
                    size: u.AvatarSizes.SIZE_20,
                    "aria-label": null != L ? L : s.username,
                    className: R.creator
                })
            }), (0, n.jsx)(u.Tooltip, {
                text: _.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                    count: C
                }),
                children: e => (0, n.jsxs)("div", {
                    className: R.rsvpCount,
                    ...e,
                    children: [(0, n.jsx)(d.default, {
                        width: 12,
                        height: 12,
                        className: R.rsvpIcon
                    }), (0, n.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: C
                    })]
                })
            })]
        })
    }

    function g(e) {
        let {
            headerVariant: t = "heading-lg/medium",
            descriptionClassName: s,
            name: l,
            description: r,
            truncate: i,
            guildId: d,
            imageSource: c
        } = e;
        return (0, n.jsxs)("div", {
            className: a()({
                [R.withThumbnail]: null != c
            }),
            children: [(0, n.jsxs)("div", {
                className: a()({
                    [R.descriptionWithThumbnail]: null != c
                }),
                children: [(0, n.jsx)(u.Heading, {
                    variant: t,
                    selectable: !0,
                    className: R.eventName,
                    children: l
                }), null != r && (0, n.jsx)(S.default, {
                    description: r,
                    className: a()(s, R.description),
                    truncate: i,
                    guildId: d
                })]
            }), null != c && (0, n.jsx)("div", {
                className: R.thumbnailContainer,
                children: (0, n.jsx)(h.default, {
                    source: c,
                    className: R.thumbnail
                })
            })]
        })
    }

    function x(e) {
        let {
            headerVariant: t,
            descriptionClassName: s,
            creator: l,
            name: a,
            description: r,
            imageSource: u,
            isHub: i = !1,
            truncate: d,
            guildId: c,
            isNew: o,
            guildEventId: E,
            eventPreview: f,
            recurrenceId: T
        } = e;
        return (0, n.jsxs)("div", {
            className: R.container,
            children: [(0, n.jsx)(D, {
                className: R.eventInfoStatusContainer,
                creator: l,
                guildId: c,
                isHub: i,
                isNew: o,
                guildEventId: E,
                eventPreview: f,
                recurrenceId: T
            }), (0, n.jsx)(g, {
                name: a,
                description: r,
                headerVariant: t,
                descriptionClassName: s,
                truncate: d,
                guildId: c,
                imageSource: u
            })]
        })
    }
}