function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCategory: function() {
            return i
        },
        default: function() {
            return Q
        }
    }), n("390547"), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("442837"),
        d = n("481060"),
        _ = n("700582"),
        c = n("317381"),
        E = n("835473"),
        I = n("557135"),
        T = n("471445"),
        f = n("666188"),
        S = n("66999"),
        h = n("15274"),
        A = n("924301"),
        m = n("725436"),
        N = n("217804"),
        p = n("703656"),
        O = n("344185"),
        R = n("592125"),
        C = n("984933"),
        g = n("271383"),
        L = n("496675"),
        D = n("594174"),
        v = n("979651"),
        M = n("938475"),
        y = n("366695"),
        P = n("940627"),
        U = n("705600"),
        b = n("305878"),
        G = n("632184"),
        w = n("806519"),
        B = n("51144"),
        k = n("718582"),
        V = n("981631"),
        x = n("765305"),
        F = n("689938"),
        H = n("764864");
    (r = i || (i = {})).HANGOUT = "hangout", r.EMBEDDED_ACTIVITY = "embedded-activity", r.EVENT = "event";

    function Y(e) {
        let {
            users: t,
            othersCount: n
        } = e, i = e => {
            if (1 !== t.length) return 0 === e ? H.activityCardImageAvatar1 : n > 0 || 2 === e ? H.activityCardImageAvatar3 : H.activityCardImageAvatar2
        };
        return (0, s.jsxs)("div", {
            className: l()(H.activityCardImage, 1 === t.length && H.activityCardImageOneAvatar),
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
                className: H.activityCardImageAvatar2,
                children: ["+", n]
            })]
        })
    }

    function j(e) {
        let {
            who: t,
            what: n,
            where: i
        } = e;
        return (0, s.jsxs)("div", {
            className: H.activityCardDetailsContainer,
            children: [(0, s.jsx)(d.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                lineClamp: 1,
                children: t
            }), (0, s.jsx)(d.Heading, {
                color: "text-normal",
                variant: "heading-sm/semibold",
                lineClamp: 1,
                children: n
            }), i]
        })
    }

    function W(e) {
        let {
            embeddedActivity: t,
            guildId: n
        } = e, i = (0, u.useStateFromStores)([R.default], () => R.default.getChannel(t.channelId)), r = Array.from(t.userIds), {
            usersText: o
        } = (0, k.useGetActivityUsers)(r, n, t.channelId), l = (0, E.useGetOrFetchApplication)(t.applicationId), _ = a.useMemo(() => {
            let e = (null == i ? void 0 : i.type) != null ? (0, T.getSimpleChannelIconComponent)(i.type) : null;
            return null != e ? e : G.default
        }, [i]), c = a.useCallback(() => {
            null != t.channelId && (0, p.transitionToGuild)(n, t.channelId)
        }, [t.channelId, n]);
        return null == l ? null : (0, s.jsxs)("div", {
            className: H.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: H.activityCardImageContainer,
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
                        mask: "url(#".concat(w.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(y.default, {
                            game: l,
                            className: H.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: H.mask,
                    children: (0, s.jsx)("div", {
                        className: H.activityCardActivityIcon,
                        children: (0, s.jsx)(_, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(j, {
                who: o,
                what: l.name,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == i ? void 0 : i.name
                })
            }), (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.TINY,
                color: d.Button.Colors.PRIMARY,
                onClick: c,
                children: F.default.Messages.JOIN
            })]
        })
    }

    function K(e) {
        var t;
        let {
            hangoutActivity: n,
            guildId: i
        } = e, {
            channelId: r,
            userIds: o
        } = n, l = (0, u.useStateFromStores)([R.default], () => R.default.getChannel(r)), {
            needSubscriptionToAccess: _
        } = (0, S.default)(null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : void 0), c = (0, u.useStateFromStores)([L.default], () => !L.default.can(V.Permissions.CONNECT, l)), E = (0, u.useStateFromStores)([v.default], () => v.default.isInChannel(r)), {
            usersToShow: T,
            othersCount: f,
            usersText: h
        } = (0, k.useGetActivityUsers)(o, i, r), A = a.useCallback(() => {
            null != l && I.default.handleVoiceConnect({
                channel: l,
                connected: E,
                needSubscriptionToAccess: _,
                locked: c
            })
        }, [l, E, c, _]);
        return (0, s.jsxs)("div", {
            className: H.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: H.activityCardImageContainer,
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
                        mask: "url(#".concat(w.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(Y, {
                            users: T,
                            othersCount: f
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: H.mask,
                    children: (0, s.jsx)("div", {
                        className: H.activityCardActivityIcon,
                        children: (0, s.jsx)(G.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(j, {
                who: h,
                what: F.default.Messages.GUILD_POPOUT_ACTIVITY_VOICE,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == l ? void 0 : l.name
                })
            }), (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.TINY,
                color: d.Button.Colors.PRIMARY,
                onClick: A,
                children: F.default.Messages.JOIN
            })]
        })
    }

    function z(e) {
        var t;
        let {
            event: n
        } = e, i = (0, u.useStateFromStores)([R.default], () => R.default.getChannel(n.channel_id)), r = (0, u.useStateFromStores)([D.default], () => D.default.getUser(n.creator_id)), o = (0, u.useStateFromStores)([g.default], () => null != r ? g.default.getMember(n.guild_id, r.id) : null, [r, n.guild_id]), l = null !== (t = null == o ? void 0 : o.nick) && void 0 !== t ? t : B.default.getName(r), _ = (0, N.getLocationDataForEvent)(n, i), c = null == _ ? void 0 : _.IconComponent, E = null == _ ? void 0 : _.locationName, I = a.useCallback(() => {
            n.entity_type === x.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === x.GuildScheduledEventEntityTypes.VOICE ? (0, p.transitionToGuild)(n.guild_id, n.channel_id) : (0, h.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, s.jsxs)("div", {
            className: H.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: H.activityCardImageContainer,
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
                        mask: "url(#".concat(w.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)("div", {
                            className: H.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: H.mask,
                    children: (0, s.jsx)("div", {
                        className: H.activityCardActivityIcon,
                        children: (0, s.jsx)(b.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(j, {
                who: F.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                    creatorName: l
                }),
                what: n.name,
                where: (0, s.jsxs)("div", {
                    className: H.location,
                    "aria-label": "".concat(F.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION_A11Y.format({
                        location: E
                    })),
                    children: [(0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: F.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION
                    }), null != c && (0, s.jsx)(c, {
                        width: 24,
                        height: 24,
                        className: H.channelIcon
                    }), (0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, m.guildEventDetailsParser)(E, !0)
                    })]
                })
            }), (0, s.jsx)(d.Button, {
                size: d.Button.Sizes.TINY,
                color: d.Button.Colors.PRIMARY,
                onClick: I,
                children: F.default.Messages.JOIN
            })]
        })
    }

    function X(e) {
        let {
            guild: t
        } = e, n = function(e) {
            let t = e.id,
                n = (0, u.useStateFromStoresArray)([C.default, O.default], () => {
                    let e = C.default.getChannels(t)[C.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                        let {
                            channel: t
                        } = e;
                        return t.type === V.ChannelTypes.GUILD_VOICE
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t.id
                    });
                    return [...e, ...Object.values(O.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
                }, [t]),
                i = (0, u.useStateFromStores)([M.default], () => M.default.getVoiceStates(t), [t]),
                r = Object.keys(i).filter(t => t !== e.afkChannelId && n.includes(t)),
                s = (0, u.useStateFromStoresArray)([A.default], () => A.default.getGuildScheduledEventsForGuild(t).filter(e => (0, A.isGuildScheduledEventActive)(e)).map(e => ({
                    category: "event",
                    event: e
                })), [t]),
                a = (0, u.useStateFromStoresArray)([c.default], () => c.default.getEmbeddedActivitiesForGuild(t).map(e => ({
                    category: "embedded-activity",
                    embeddedActivity: e
                })), [t]),
                o = a.map(e => {
                    let {
                        embeddedActivity: t
                    } = e;
                    return t.channelId
                });
            return [...r.filter(e => !o.includes(e)).map(e => {
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
            }), ...a, ...s]
        }(t), i = (0, k.activityCardsSortedByAffinity)(n), r = a.useMemo(() => i.slice(0, 3), [i]), o = a.useMemo(() => r.map(e => {
            if ("hangout" === e.category) return (0, s.jsx)(K, {
                hangoutActivity: e,
                guildId: t.id
            }, "".concat(e.category, "-").concat(e.channelId));
            if ("event" === e.category) return (0, s.jsx)(z, {
                event: e.event
            }, "".concat(e.category, "-").concat(e.event.id));
            if ("embedded-activity" === e.category) return (0, s.jsx)(W, {
                embeddedActivity: e.embeddedActivity,
                guildId: t.id
            }, "".concat(e.category, "-").concat(e.embeddedActivity.channelId))
        }), [r, t.id]);
        return (0, s.jsx)(s.Fragment, {
            children: o
        })
    }

    function Q(e) {
        let {
            guild: t
        } = e, n = (0, f.default)(t);
        return (0, s.jsxs)("div", {
            className: H.container,
            children: [(0, s.jsxs)("div", {
                className: H.header,
                children: [n ? (0, s.jsx)(U.default, {
                    guild: t,
                    size: 16,
                    className: H.rowIconV2
                }) : (0, s.jsx)(P.default, {
                    guild: t,
                    size: 20,
                    className: H.rowIcon
                }), (0, s.jsx)(d.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, s.jsx)(X, {
                guild: t
            })]
        })
    }
}