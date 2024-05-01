function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildEventDetails: function() {
            return g
        },
        GuildEventStatus: function() {
            return R
        },
        default: function() {
            return p
        }
    });
    var s = n("735250");
    n("470079");
    var l = n("120356"),
        a = n.n(l),
        r = n("442837"),
        u = n("481060"),
        i = n("271383"),
        c = n("158010"),
        d = n("51144"),
        o = n("924301"),
        E = n("894017"),
        f = n("79874"),
        T = n("315416"),
        v = n("236373"),
        N = n("854698"),
        _ = n("391174"),
        S = n("95291"),
        h = n("390966"),
        m = n("689938"),
        D = n("127790");

    function R(e) {
        let {
            className: t,
            creator: n,
            guildId: l,
            isNew: _,
            isHub: S = !1,
            guildEventId: R,
            eventPreview: g,
            recurrenceId: p
        } = e, x = (0, r.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(R)), C = (0, T.default)(l, R, p), I = null != x ? x : g, L = (0, r.useStateFromStores)([i.default], () => i.default.getNick(l, null == n ? void 0 : n.id), [l, n]);
        p = null == I || null != p ? p : (0, N.getNextRecurrenceIdInEvent)(I);
        let {
            startTime: A
        } = (0, f.default)(R, p, g), G = (0, E.default)(p, R), j = (null == I ? void 0 : I.scheduled_start_time) != null ? (0, N.getRecurrenceStatus)(G, A, new Date(I.scheduled_start_time)) : null;
        if (null == I) return null;
        let {
            entity_type: O,
            status: M,
            recurrence_rule: U
        } = I;
        return (0, s.jsxs)("div", {
            className: a()(D.statusContainer, t),
            children: [(0, s.jsx)(h.GuildEventTimeStatus, {
                startTime: A.toISOString(),
                status: null != j ? j : M,
                eventType: O,
                isNew: _,
                recurrenceRule: (0, v.recurrenceRuleFromServer)(U),
                guildEventId: R,
                recurrenceId: p
            }), (0, s.jsx)("div", {
                className: D.spacer
            }), !S && null != n && (0, s.jsx)(u.Tooltip, {
                text: m.default.Messages.GUILD_EVENT_CREATED_BY.format({
                    username: null != L ? L : d.default.getName(n)
                }),
                children: e => (0, s.jsx)(u.Avatar, {
                    ...e,
                    src: n.getAvatarURL(l, 20),
                    size: u.AvatarSizes.SIZE_20,
                    "aria-label": null != L ? L : n.username,
                    className: D.creator
                })
            }), (0, s.jsx)(u.Tooltip, {
                text: m.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                    count: C
                }),
                children: e => (0, s.jsxs)("div", {
                    className: D.rsvpCount,
                    ...e,
                    children: [(0, s.jsx)(c.default, {
                        width: 12,
                        height: 12,
                        className: D.rsvpIcon
                    }), (0, s.jsx)(u.Text, {
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
            descriptionClassName: n,
            name: l,
            description: r,
            truncate: i,
            guildId: c,
            imageSource: d
        } = e;
        return (0, s.jsxs)("div", {
            className: a()({
                [D.withThumbnail]: null != d
            }),
            children: [(0, s.jsxs)("div", {
                className: a()({
                    [D.descriptionWithThumbnail]: null != d
                }),
                children: [(0, s.jsx)(u.Heading, {
                    variant: t,
                    selectable: !0,
                    className: D.eventName,
                    children: l
                }), null != r && (0, s.jsx)(_.default, {
                    description: r,
                    className: a()(n, D.description),
                    truncate: i,
                    guildId: c
                })]
            }), null != d && (0, s.jsx)("div", {
                className: D.thumbnailContainer,
                children: (0, s.jsx)(S.default, {
                    source: d,
                    className: D.thumbnail
                })
            })]
        })
    }

    function p(e) {
        let {
            headerVariant: t,
            descriptionClassName: n,
            creator: l,
            name: a,
            description: r,
            imageSource: u,
            isHub: i = !1,
            truncate: c,
            guildId: d,
            isNew: o,
            guildEventId: E,
            eventPreview: f,
            recurrenceId: T
        } = e;
        return (0, s.jsxs)("div", {
            className: D.container,
            children: [(0, s.jsx)(R, {
                className: D.eventInfoStatusContainer,
                creator: l,
                guildId: d,
                isHub: i,
                isNew: o,
                guildEventId: E,
                eventPreview: f,
                recurrenceId: T
            }), (0, s.jsx)(g, {
                name: a,
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