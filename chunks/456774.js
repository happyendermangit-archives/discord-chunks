function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("666188"),
        l = n("15274"),
        u = n("924301"),
        d = n("725436"),
        _ = n("217804"),
        c = n("703656"),
        E = n("592125"),
        I = n("271383"),
        T = n("594174"),
        f = n("940627"),
        S = n("705600"),
        h = n("305878"),
        A = n("806519"),
        m = n("51144"),
        N = n("765305"),
        p = n("689938"),
        O = n("764864");

    function R(e) {
        var t;
        let {
            event: n
        } = e, o = (0, s.useStateFromStores)([E.default], () => E.default.getChannel(n.channel_id)), u = (0, s.useStateFromStores)([T.default], () => T.default.getUser(n.creator_id)), f = (0, s.useStateFromStores)([I.default], () => null != u ? I.default.getMember(n.guild_id, u.id) : null, [u, n.guild_id]), S = n.name, R = null !== (t = null == f ? void 0 : f.nick) && void 0 !== t ? t : m.default.getName(u), C = (0, _.getLocationDataForEvent)(n, o), g = null == C ? void 0 : C.IconComponent, L = null == C ? void 0 : C.locationName, D = r.useCallback(() => {
            (n.entity_type === N.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === N.GuildScheduledEventEntityTypes.VOICE) && (0, c.transitionToGuild)(n.guild_id, n.channel_id), (0, l.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, i.jsxs)("div", {
            className: O.activityCardContainer,
            children: [(0, i.jsxs)("div", {
                className: O.activityCardImageContainer,
                children: [(0, i.jsx)("svg", {
                    width: 48,
                    height: 48,
                    viewBox: "0 0 48 48",
                    "aria-hidden": !0,
                    children: (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: 48,
                        height: 48,
                        mask: "url(#".concat(A.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, i.jsx)("div", {
                            className: O.activityCardImage
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: O.mask,
                    children: (0, i.jsx)("div", {
                        className: O.activityCardActivityIcon,
                        children: (0, i.jsx)(h.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, i.jsxs)("div", {
                className: O.activityCardDetailsContainer,
                children: [(0, i.jsx)(a.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    lineClamp: 1,
                    children: p.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                        creatorName: R
                    })
                }), (0, i.jsx)(a.Heading, {
                    color: "text-normal",
                    variant: "heading-sm/semibold",
                    lineClamp: 1,
                    children: S
                }), (0, i.jsxs)("div", {
                    className: O.location,
                    "aria-label": "".concat(p.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION_A11Y.format({
                        location: L
                    })),
                    children: [(0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: p.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION
                    }), null != g && (0, i.jsx)(g, {
                        width: 24,
                        height: 24,
                        className: O.channelIcon
                    }), (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, d.guildEventDetailsParser)(L, !0)
                    })]
                })]
            }), (0, i.jsx)(a.Button, {
                size: a.Button.Sizes.TINY,
                color: a.Button.Colors.PRIMARY,
                onClick: D,
                children: p.default.Messages.JOIN
            })]
        })
    }

    function C(e) {
        let {
            guild: t
        } = e, {
            event: n
        } = function(e) {
            let t = e.id;
            return {
                hangout: [],
                gaming: [],
                activity: [],
                event: (0, s.useStateFromStoresArray)([u.default], () => u.default.getGuildScheduledEventsForGuild(t).filter(e => (0, u.isGuildScheduledEventActive)(e)), [t])
            }
        }(t), r = n.length > 0 ? n[0] : null;
        return (0, i.jsx)(i.Fragment, {
            children: null !== r && (0, i.jsx)(R, {
                event: r
            })
        })
    }

    function g(e) {
        let {
            guild: t
        } = e, n = (0, o.default)(t);
        return (0, i.jsxs)("div", {
            className: O.container,
            children: [(0, i.jsxs)("div", {
                className: O.header,
                children: [n ? (0, i.jsx)(S.default, {
                    guild: t,
                    size: 16,
                    className: O.rowIconV2
                }) : (0, i.jsx)(f.default, {
                    guild: t,
                    size: 20,
                    className: O.rowIcon
                }), (0, i.jsx)(a.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, i.jsx)(C, {
                guild: t
            })]
        })
    }
}