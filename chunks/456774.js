function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return k
        }
    }), n("390547"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("700582"),
        d = n("666188"),
        _ = n("15274"),
        c = n("924301"),
        E = n("725436"),
        I = n("217804"),
        T = n("703656"),
        f = n("344185"),
        S = n("592125"),
        h = n("984933"),
        A = n("271383"),
        m = n("594174"),
        N = n("938475"),
        p = n("940627"),
        O = n("705600"),
        R = n("305878"),
        C = n("632184"),
        g = n("806519"),
        L = n("823379"),
        D = n("5192"),
        v = n("51144"),
        M = n("981631"),
        y = n("765305"),
        P = n("689938"),
        U = n("764864");

    function b(e) {
        let {
            users: t,
            othersCount: n
        } = e, r = e => {
            if (1 !== t.length) return 0 === e ? U.activityCardImageAvatar1 : n > 0 || 2 === e ? U.activityCardImageAvatar3 : U.activityCardImageAvatar2
        };
        return (0, i.jsxs)("div", {
            className: a()(U.activityCardImage, 1 === t.length && U.activityCardImageOneAvatar),
            children: [t.map((e, t) => {
                let n = r(t);
                return (0, i.jsx)(u.default, {
                    user: e,
                    size: l.AvatarSizes.SIZE_16,
                    className: n
                }, e.id)
            }), n > 0 && (0, i.jsxs)(l.Text, {
                color: "text-normal",
                variant: "text-xxs/semibold",
                className: U.activityCardImageAvatar2,
                children: ["+", n]
            })]
        })
    }

    function G(e) {
        let {
            hangoutActivity: t,
            guildId: n
        } = e, {
            channelId: s,
            userIds: a
        } = t, u = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(s)), {
            usersToShow: d,
            othersCount: _,
            usersText: c
        } = function(e, t, n) {
            let i = (0, o.useStateFromStoresArray)([m.default], () => e.map(e => m.default.getUser(e))).filter(L.isNotNullish),
                r = i.length > 3 ? i.slice(0, 2) : i.slice(0, 3),
                s = r.map(e => D.default.getName(t, n, e)),
                a = Math.max(0, i.length - r.length),
                l = function(e, t) {
                    if (1 === e.length) return t > 0 ? P.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_1_N.format({
                        a: e[0],
                        n: t.toLocaleString()
                    }) : e[0];
                    if (2 === e.length) return t > 0 ? P.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2_N.format({
                        a: e[0],
                        b: e[1],
                        n: t.toLocaleString()
                    }) : P.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_2.format({
                        a: e[0],
                        b: e[1]
                    });
                    if (3 !== e.length) return P.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_N.format({
                        n: t.toLocaleString()
                    });
                    else return t > 0 ? P.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3_N.format({
                        a: e[0],
                        b: e[1],
                        c: e[2],
                        n: t.toLocaleString()
                    }) : P.default.Messages.GUILD_POPOUT_ACTIVITY_USERS_3.format({
                        a: e[0],
                        b: e[1],
                        c: e[2]
                    })
                }(s, a);
            return {
                usersToShow: r,
                othersCount: a,
                usersText: l
            }
        }(a, n, s), E = r.useCallback(() => {
            (0, T.transitionToGuild)(n, s)
        }, [s, n]);
        return (0, i.jsxs)("div", {
            className: U.activityCardContainer,
            children: [(0, i.jsxs)("div", {
                className: U.activityCardImageContainer,
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
                        mask: "url(#".concat(g.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, i.jsx)(b, {
                            users: d,
                            othersCount: _
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: U.mask,
                    children: (0, i.jsx)("div", {
                        className: U.activityCardActivityIcon,
                        children: (0, i.jsx)(C.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, i.jsxs)("div", {
                className: U.activityCardDetailsContainer,
                children: [(0, i.jsx)(l.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    lineClamp: 1,
                    children: c
                }), (0, i.jsx)(l.Heading, {
                    color: "text-normal",
                    variant: "heading-sm/semibold",
                    lineClamp: 1,
                    children: P.default.Messages.GUILD_POPOUT_ACTIVITY_VOICE
                }), (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == u ? void 0 : u.name
                })]
            }), (0, i.jsx)(l.Button, {
                size: l.Button.Sizes.TINY,
                color: l.Button.Colors.PRIMARY,
                onClick: E,
                children: P.default.Messages.JOIN
            })]
        })
    }

    function w(e) {
        var t;
        let {
            event: n
        } = e, s = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(n.channel_id)), a = (0, o.useStateFromStores)([m.default], () => m.default.getUser(n.creator_id)), u = (0, o.useStateFromStores)([A.default], () => null != a ? A.default.getMember(n.guild_id, a.id) : null, [a, n.guild_id]), d = n.name, c = null !== (t = null == u ? void 0 : u.nick) && void 0 !== t ? t : v.default.getName(a), f = (0, I.getLocationDataForEvent)(n, s), h = null == f ? void 0 : f.IconComponent, N = null == f ? void 0 : f.locationName, p = r.useCallback(() => {
            (n.entity_type === y.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === y.GuildScheduledEventEntityTypes.VOICE) && (0, T.transitionToGuild)(n.guild_id, n.channel_id), (0, _.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, i.jsxs)("div", {
            className: U.activityCardContainer,
            children: [(0, i.jsxs)("div", {
                className: U.activityCardImageContainer,
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
                        mask: "url(#".concat(g.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, i.jsx)("div", {
                            className: U.activityCardImage
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: U.mask,
                    children: (0, i.jsx)("div", {
                        className: U.activityCardActivityIcon,
                        children: (0, i.jsx)(R.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, i.jsxs)("div", {
                className: U.activityCardDetailsContainer,
                children: [(0, i.jsx)(l.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    lineClamp: 1,
                    children: P.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                        creatorName: c
                    })
                }), (0, i.jsx)(l.Heading, {
                    color: "text-normal",
                    variant: "heading-sm/semibold",
                    lineClamp: 1,
                    children: d
                }), (0, i.jsxs)("div", {
                    className: U.location,
                    "aria-label": "".concat(P.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION_A11Y.format({
                        location: N
                    })),
                    children: [(0, i.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: P.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION
                    }), null != h && (0, i.jsx)(h, {
                        width: 24,
                        height: 24,
                        className: U.channelIcon
                    }), (0, i.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, E.guildEventDetailsParser)(N, !0)
                    })]
                })]
            }), (0, i.jsx)(l.Button, {
                size: l.Button.Sizes.TINY,
                color: l.Button.Colors.PRIMARY,
                onClick: p,
                children: P.default.Messages.JOIN
            })]
        })
    }

    function B(e) {
        let {
            guild: t
        } = e, {
            hangout: n,
            event: r
        } = function(e) {
            let t = e.id,
                n = (0, o.useStateFromStoresArray)([h.default, f.default], () => {
                    let e = h.default.getChannels(t)[h.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                        let {
                            channel: t
                        } = e;
                        return t.type === M.ChannelTypes.GUILD_VOICE
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t.id
                    });
                    return [...e, ...Object.values(f.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
                }, [t]),
                i = (0, o.useStateFromStores)([N.default], () => N.default.getVoiceStates(t), [t]),
                r = Object.keys(i).filter(t => t !== e.afkChannelId && n.includes(t)).map(e => {
                    var t;
                    let n = (null !== (t = i[e]) && void 0 !== t ? t : []).map(e => {
                        let {
                            user: t
                        } = e;
                        return t.id
                    });
                    return {
                        channelId: e,
                        userIds: n
                    }
                });
            return {
                hangout: r,
                gaming: [],
                activity: [],
                event: (0, o.useStateFromStoresArray)([c.default], () => c.default.getGuildScheduledEventsForGuild(t).filter(e => (0, c.isGuildScheduledEventActive)(e)), [t])
            }
        }(t), s = r.length > 0 ? r[0] : null, a = n.length > 0 ? n[0] : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [null !== s && (0, i.jsx)(w, {
                event: s
            }), null !== a && (0, i.jsx)(G, {
                hangoutActivity: a,
                guildId: t.id
            })]
        })
    }

    function k(e) {
        let {
            guild: t
        } = e, n = (0, d.default)(t);
        return (0, i.jsxs)("div", {
            className: U.container,
            children: [(0, i.jsxs)("div", {
                className: U.header,
                children: [n ? (0, i.jsx)(O.default, {
                    guild: t,
                    size: 16,
                    className: U.rowIconV2
                }) : (0, i.jsx)(p.default, {
                    guild: t,
                    size: 20,
                    className: U.rowIcon
                }), (0, i.jsx)(l.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, i.jsx)(B, {
                guild: t
            })]
        })
    }
}