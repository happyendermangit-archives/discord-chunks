function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        GuildEventDetails: function() {
            return x
        },
        GuildEventStatus: function() {
            return D
        },
        default: function() {
            return R
        }
    });
    var a = l("735250");
    l("470079");
    var n = l("803997"),
        s = l.n(n),
        r = l("442837"),
        u = l("481060"),
        i = l("271383"),
        d = l("158010"),
        c = l("51144"),
        o = l("924301"),
        E = l("894017"),
        f = l("79874"),
        T = l("315416"),
        m = l("236373"),
        v = l("854698"),
        N = l("391174"),
        h = l("95291"),
        _ = l("390966"),
        S = l("689938"),
        g = l("328481");

    function D(e) {
        let {
            className: t,
            creator: l,
            guildId: n,
            isNew: N,
            isHub: h = !1,
            guildEventId: D,
            eventPreview: x,
            recurrenceId: R
        } = e, C = (0, r.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(D)), L = (0, T.default)(n, D, R), A = null != C ? C : x, I = (0, r.useStateFromStores)([i.default], () => i.default.getNick(n, null == l ? void 0 : l.id), [n, l]);
        R = null == A || null != R ? R : (0, v.getNextRecurrenceIdInEvent)(A);
        let {
            startTime: p
        } = (0, f.default)(D, R, x), j = (0, E.default)(R, D), G = (null == A ? void 0 : A.scheduled_start_time) != null ? (0, v.getRecurrenceStatus)(j, p, new Date(A.scheduled_start_time)) : null;
        if (null == A) return null;
        let {
            entity_type: O,
            status: M,
            recurrence_rule: U
        } = A;
        return (0, a.jsxs)("div", {
            className: s()(g.statusContainer, t),
            children: [(0, a.jsx)(_.GuildEventTimeStatus, {
                startTime: p.toISOString(),
                status: null != G ? G : M,
                eventType: O,
                isNew: N,
                recurrenceRule: (0, m.recurrenceRuleFromServer)(U),
                guildEventId: D,
                recurrenceId: R
            }), (0, a.jsx)("div", {
                className: g.spacer
            }), !h && null != l && (0, a.jsx)(u.Tooltip, {
                text: S.default.Messages.GUILD_EVENT_CREATED_BY.format({
                    username: null != I ? I : c.default.getName(l)
                }),
                children: e => (0, a.jsx)(u.Avatar, {
                    ...e,
                    src: l.getAvatarURL(n, 20),
                    size: u.AvatarSizes.SIZE_20,
                    "aria-label": null != I ? I : l.username,
                    className: g.creator
                })
            }), (0, a.jsx)(u.Tooltip, {
                text: S.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                    count: L
                }),
                children: e => (0, a.jsxs)("div", {
                    className: g.rsvpCount,
                    ...e,
                    children: [(0, a.jsx)(d.default, {
                        width: 12,
                        height: 12,
                        className: g.rsvpIcon
                    }), (0, a.jsx)(u.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: L
                    })]
                })
            })]
        })
    }

    function x(e) {
        let {
            headerVariant: t = "heading-lg/medium",
            descriptionClassName: l,
            name: n,
            description: r,
            truncate: i,
            guildId: d,
            imageSource: c
        } = e;
        return (0, a.jsxs)("div", {
            className: s()({
                [g.withThumbnail]: null != c
            }),
            children: [(0, a.jsxs)("div", {
                className: s()({
                    [g.descriptionWithThumbnail]: null != c
                }),
                children: [(0, a.jsx)(u.Heading, {
                    variant: t,
                    selectable: !0,
                    className: g.eventName,
                    children: n
                }), null != r && (0, a.jsx)(N.default, {
                    description: r,
                    className: s()(l, g.description),
                    truncate: i,
                    guildId: d
                })]
            }), null != c && (0, a.jsx)("div", {
                className: g.thumbnailContainer,
                children: (0, a.jsx)(h.default, {
                    source: c,
                    className: g.thumbnail
                })
            })]
        })
    }

    function R(e) {
        let {
            headerVariant: t,
            descriptionClassName: l,
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
        return (0, a.jsxs)("div", {
            className: g.container,
            children: [(0, a.jsx)(D, {
                className: g.eventInfoStatusContainer,
                creator: n,
                guildId: c,
                isHub: i,
                isNew: o,
                guildEventId: E,
                eventPreview: f,
                recurrenceId: T
            }), (0, a.jsx)(x, {
                name: s,
                description: r,
                headerVariant: t,
                descriptionClassName: l,
                truncate: d,
                guildId: c,
                imageSource: u
            })]
        })
    }
}