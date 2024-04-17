function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        GuildEventDetails: function() {
            return x
        },
        GuildEventStatus: function() {
            return g
        },
        default: function() {
            return R
        }
    });
    var l = a("735250");
    a("470079");
    var n = a("120356"),
        s = a.n(n),
        r = a("442837"),
        u = a("481060"),
        i = a("271383"),
        d = a("158010"),
        c = a("51144"),
        o = a("924301"),
        E = a("894017"),
        f = a("79874"),
        T = a("315416"),
        m = a("236373"),
        N = a("854698"),
        v = a("391174"),
        _ = a("95291"),
        h = a("390966"),
        S = a("689938"),
        D = a("328481");

    function g(e) {
        let {
            className: t,
            creator: a,
            guildId: n,
            isNew: v,
            isHub: _ = !1,
            guildEventId: g,
            eventPreview: x,
            recurrenceId: R
        } = e, L = (0, r.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(g)), C = (0, T.default)(n, g, R), A = null != L ? L : x, I = (0, r.useStateFromStores)([i.default], () => i.default.getNick(n, null == a ? void 0 : a.id), [n, a]);
        R = null == A || null != R ? R : (0, N.getNextRecurrenceIdInEvent)(A);
        let {
            startTime: p
        } = (0, f.default)(g, R, x), j = (0, E.default)(R, g), O = (null == A ? void 0 : A.scheduled_start_time) != null ? (0, N.getRecurrenceStatus)(j, p, new Date(A.scheduled_start_time)) : null;
        if (null == A) return null;
        let {
            entity_type: G,
            status: M,
            recurrence_rule: U
        } = A;
        return (0, l.jsxs)("div", {
            className: s()(D.statusContainer, t),
            children: [(0, l.jsx)(h.GuildEventTimeStatus, {
                startTime: p.toISOString(),
                status: null != O ? O : M,
                eventType: G,
                isNew: v,
                recurrenceRule: (0, m.recurrenceRuleFromServer)(U),
                guildEventId: g,
                recurrenceId: R
            }), (0, l.jsx)("div", {
                className: D.spacer
            }), !_ && null != a && (0, l.jsx)(u.Tooltip, {
                text: S.default.Messages.GUILD_EVENT_CREATED_BY.format({
                    username: null != I ? I : c.default.getName(a)
                }),
                children: e => (0, l.jsx)(u.Avatar, {
                    ...e,
                    src: a.getAvatarURL(n, 20),
                    size: u.AvatarSizes.SIZE_20,
                    "aria-label": null != I ? I : a.username,
                    className: D.creator
                })
            }), (0, l.jsx)(u.Tooltip, {
                text: S.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                    count: C
                }),
                children: e => (0, l.jsxs)("div", {
                    className: D.rsvpCount,
                    ...e,
                    children: [(0, l.jsx)(d.default, {
                        width: 12,
                        height: 12,
                        className: D.rsvpIcon
                    }), (0, l.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: C
                    })]
                })
            })]
        })
    }

    function x(e) {
        let {
            headerVariant: t = "heading-lg/medium",
            descriptionClassName: a,
            name: n,
            description: r,
            truncate: i,
            guildId: d,
            imageSource: c
        } = e;
        return (0, l.jsxs)("div", {
            className: s()({
                [D.withThumbnail]: null != c
            }),
            children: [(0, l.jsxs)("div", {
                className: s()({
                    [D.descriptionWithThumbnail]: null != c
                }),
                children: [(0, l.jsx)(u.Heading, {
                    variant: t,
                    selectable: !0,
                    className: D.eventName,
                    children: n
                }), null != r && (0, l.jsx)(v.default, {
                    description: r,
                    className: s()(a, D.description),
                    truncate: i,
                    guildId: d
                })]
            }), null != c && (0, l.jsx)("div", {
                className: D.thumbnailContainer,
                children: (0, l.jsx)(_.default, {
                    source: c,
                    className: D.thumbnail
                })
            })]
        })
    }

    function R(e) {
        let {
            headerVariant: t,
            descriptionClassName: a,
            creator: n,
            name: s,
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
        return (0, l.jsxs)("div", {
            className: D.container,
            children: [(0, l.jsx)(g, {
                className: D.eventInfoStatusContainer,
                creator: n,
                guildId: c,
                isHub: i,
                isNew: o,
                guildEventId: E,
                eventPreview: f,
                recurrenceId: T
            }), (0, l.jsx)(x, {
                name: s,
                description: r,
                headerVariant: t,
                descriptionClassName: a,
                truncate: d,
                guildId: c,
                imageSource: u
            })]
        })
    }
}