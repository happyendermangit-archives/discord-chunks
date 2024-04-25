function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCategory: function() {
            return i
        },
        default: function() {
            return Y
        }
    }), n("390547"), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("442837"),
        d = n("481060"),
        _ = n("700582"),
        c = n("557135"),
        E = n("666188"),
        I = n("66999"),
        T = n("15274"),
        f = n("924301"),
        S = n("725436"),
        h = n("217804"),
        A = n("703656"),
        m = n("344185"),
        N = n("592125"),
        p = n("984933"),
        O = n("271383"),
        R = n("496675"),
        C = n("594174"),
        g = n("979651"),
        L = n("938475"),
        D = n("940627"),
        v = n("705600"),
        M = n("305878"),
        y = n("632184"),
        P = n("806519"),
        U = n("51144"),
        b = n("718582"),
        G = n("981631"),
        w = n("765305"),
        B = n("689938"),
        k = n("764864");
    (r = i || (i = {})).HANGOUT = "hangout", r.EMBEDDED_ACTIVITY = "embedded-activity", r.EVENT = "event";

    function V(e) {
        let {
            users: t,
            othersCount: n
        } = e, i = e => {
            if (1 !== t.length) return 0 === e ? k.activityCardImageAvatar1 : n > 0 || 2 === e ? k.activityCardImageAvatar3 : k.activityCardImageAvatar2
        };
        return (0, s.jsxs)("div", {
            className: l()(k.activityCardImage, 1 === t.length && k.activityCardImageOneAvatar),
            children: [t.map((e, t) => {
                let n = i(t);
                return (0, s.jsx)(_.default, {
                    user: e,
                    size: d.AvatarSizes.SIZE_16,
                    className: n
                }, e.id)
            }), n > 0 && (0, s.jsxs)(d.Text, {
                color: "text-normal",
                variant: "text-xxs/semibold",
                className: k.activityCardImageAvatar2,
                children: ["+", n]
            })]
        })
    }

    function x(e) {
        var t;
        let {
            hangoutActivity: n,
            guildId: i
        } = e, {
            channelId: r,
            userIds: o
        } = n, l = (0, u.useStateFromStores)([N.default], () => N.default.getChannel(r)), {
            needSubscriptionToAccess: _
        } = (0, I.default)(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : void 0), E = (0, u.useStateFromStores)([R.default], () => !R.default.can(G.Permissions.CONNECT, l)), T = (0, u.useStateFromStores)([g.default], () => g.default.isInChannel(r)), {
            usersToShow: f,
            othersCount: S,
            usersText: h
        } = (0, b.useGetActivityUsers)(o, i, r), A = a.useCallback(() => {
            null != l && c.default.handleVoiceConnect({
                channel: l,
                connected: T,
                needSubscriptionToAccess: _,
                locked: E
            })
        }, [l, T, E, _]);
        return (0, s.jsxs)("div", {
            className: k.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: k.activityCardImageContainer,
                children: [(0, s.jsx)("svg", {
                    width: 48,
                    height: 48,
                    viewBox: "0 0 48 48",
                    "aria-hidden": !0,
                    children: (0, s.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: 48,
                        height: 48,
                        mask: "url(#".concat(P.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(V, {
                            users: f,
                            othersCount: S
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: k.mask,
                    children: (0, s.jsx)("div", {
                        className: k.activityCardActivityIcon,
                        children: (0, s.jsx)(y.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsxs)("div", {
                className: k.activityCardDetailsContainer,
                children: [(0, s.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    lineClamp: 1,
                    children: h
                }), (0, s.jsx)(d.Heading, {
                    color: "text-normal",
                    variant: "heading-sm/semibold",
                    lineClamp: 1,
                    children: B.default.Messages.GUILD_POPOUT_ACTIVITY_VOICE
                }), (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == l ? void 0 : l.name
                })]
            }), (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.TINY,
                color: d.Button.Colors.PRIMARY,
                onClick: A,
                children: B.default.Messages.JOIN
            })]
        })
    }

    function F(e) {
        var t;
        let {
            event: n
        } = e, i = (0, u.useStateFromStores)([N.default], () => N.default.getChannel(n.channel_id)), r = (0, u.useStateFromStores)([C.default], () => C.default.getUser(n.creator_id)), o = (0, u.useStateFromStores)([O.default], () => null != r ? O.default.getMember(n.guild_id, r.id) : null, [r, n.guild_id]), l = n.name, _ = null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : U.default.getName(r), c = (0, h.getLocationDataForEvent)(n, i), E = null == c ? void 0 : c.IconComponent, I = null == c ? void 0 : c.locationName, f = a.useCallback(() => {
            (n.entity_type === w.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === w.GuildScheduledEventEntityTypes.VOICE) && (0, A.transitionToGuild)(n.guild_id, n.channel_id), (0, T.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, s.jsxs)("div", {
            className: k.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: k.activityCardImageContainer,
                children: [(0, s.jsx)("svg", {
                    width: 48,
                    height: 48,
                    viewBox: "0 0 48 48",
                    "aria-hidden": !0,
                    children: (0, s.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: 48,
                        height: 48,
                        mask: "url(#".concat(P.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)("div", {
                            className: k.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: k.mask,
                    children: (0, s.jsx)("div", {
                        className: k.activityCardActivityIcon,
                        children: (0, s.jsx)(M.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsxs)("div", {
                className: k.activityCardDetailsContainer,
                children: [(0, s.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    lineClamp: 1,
                    children: B.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                        creatorName: _
                    })
                }), (0, s.jsx)(d.Heading, {
                    color: "text-normal",
                    variant: "heading-sm/semibold",
                    lineClamp: 1,
                    children: l
                }), (0, s.jsxs)("div", {
                    className: k.location,
                    "aria-label": "".concat(B.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION_A11Y.format({
                        location: I
                    })),
                    children: [(0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: B.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION
                    }), null != E && (0, s.jsx)(E, {
                        width: 24,
                        height: 24,
                        className: k.channelIcon
                    }), (0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, S.guildEventDetailsParser)(I, !0)
                    })]
                })]
            }), (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.TINY,
                color: d.Button.Colors.PRIMARY,
                onClick: f,
                children: B.default.Messages.JOIN
            })]
        })
    }

    function H(e) {
        let {
            guild: t
        } = e, n = function(e) {
            let t = e.id,
                n = (0, u.useStateFromStoresArray)([p.default, m.default], () => {
                    let e = p.default.getChannels(t)[p.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                        let {
                            channel: t
                        } = e;
                        return t.type === G.ChannelTypes.GUILD_VOICE
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t.id
                    });
                    return [...e, ...Object.values(m.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
                }, [t]),
                i = (0, u.useStateFromStores)([L.default], () => L.default.getVoiceStates(t), [t]),
                r = Object.keys(i).filter(t => t !== e.afkChannelId && n.includes(t)).map(e => {
                    var t;
                    let n = (null !== (t = i[e]) && void 0 !== t ? t : []).map(e => {
                        let {
                            user: t
                        } = e;
                        return t.id
                    });
                    return {
                        category: "hangout",
                        channelId: e,
                        userIds: n
                    }
                });
            return [...r, ...(0, u.useStateFromStoresArray)([f.default], () => f.default.getGuildScheduledEventsForGuild(t).filter(e => (0, f.isGuildScheduledEventActive)(e)).map(e => ({
                category: "event",
                event: e
            })), [t])]
        }(t), i = (0, b.activityCardsSortedByAffinity)(n), r = a.useMemo(() => i.slice(0, 3), [i]), o = a.useMemo(() => r.map(e => "hangout" === e.category ? (0, s.jsx)(x, {
            hangoutActivity: e,
            guildId: t.id
        }, "".concat(e.category, "-").concat(e.channelId)) : "event" === e.category ? (0, s.jsx)(F, {
            event: e.event
        }, "".concat(e.category, "-").concat(e.event.id)) : void 0), [r, t.id]);
        return (0, s.jsx)(s.Fragment, {
            children: o
        })
    }

    function Y(e) {
        let {
            guild: t
        } = e, n = (0, E.default)(t);
        return (0, s.jsxs)("div", {
            className: k.container,
            children: [(0, s.jsxs)("div", {
                className: k.header,
                children: [n ? (0, s.jsx)(v.default, {
                    guild: t,
                    size: 16,
                    className: k.rowIconV2
                }) : (0, s.jsx)(D.default, {
                    guild: t,
                    size: 20,
                    className: k.rowIcon
                }), (0, s.jsx)(d.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, s.jsx)(H, {
                guild: t
            })]
        })
    }
}