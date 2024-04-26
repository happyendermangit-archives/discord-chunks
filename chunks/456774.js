function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCategory: function() {
            return i
        },
        default: function() {
            return $
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
        N = n("405613"),
        p = n("217804"),
        O = n("41776"),
        R = n("703656"),
        C = n("344185"),
        g = n("592125"),
        L = n("984933"),
        D = n("271383"),
        v = n("607744"),
        M = n("496675"),
        y = n("594174"),
        P = n("979651"),
        U = n("938475"),
        b = n("366695"),
        G = n("940627"),
        w = n("705600"),
        B = n("305878"),
        k = n("632184"),
        V = n("806519"),
        x = n("51144"),
        F = n("718582"),
        H = n("981631"),
        Y = n("765305"),
        j = n("689938"),
        W = n("764864");
    (r = i || (i = {})).HANGOUT = "hangout", r.EMBEDDED_ACTIVITY = "embedded-activity", r.EVENT = "event";

    function K(e) {
        let {
            users: t,
            othersCount: n
        } = e, i = e => {
            if (1 !== t.length) return 0 === e ? W.activityCardImageAvatar1 : n > 0 || 2 === e ? W.activityCardImageAvatar3 : W.activityCardImageAvatar2
        };
        return (0, s.jsxs)("div", {
            className: l()(W.activityCardImage, 1 === t.length && W.activityCardImageOneAvatar),
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
                className: W.activityCardImageAvatar2,
                children: ["+", n]
            })]
        })
    }

    function z(e) {
        let {
            who: t,
            what: n,
            where: i
        } = e;
        return (0, s.jsxs)("div", {
            className: W.activityCardDetailsContainer,
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

    function X(e) {
        let {
            onClick: t,
            disabled: n
        } = e;
        return (0, s.jsx)(d.Button, {
            size: d.Button.Sizes.TINY,
            color: d.Button.Colors.PRIMARY,
            disabled: n,
            onClick: t,
            children: j.default.Messages.JOIN
        })
    }

    function Q(e) {
        let {
            embeddedActivity: t,
            guildId: n,
            isUserLurking: i,
            isUnverifiedAccount: r
        } = e, o = (0, u.useStateFromStores)([g.default], () => g.default.getChannel(t.channelId)), l = (0, u.useStateFromStores)([M.default], () => !M.default.can(H.Permissions.CONNECT, o)), _ = Array.from(t.userIds), {
            usersText: c
        } = (0, F.useGetActivityUsers)(_, n, t.channelId), I = (0, E.useGetOrFetchApplication)(t.applicationId), f = a.useMemo(() => {
            let e = (null == o ? void 0 : o.type) != null ? (0, T.getSimpleChannelIconComponent)(o.type) : null;
            return null != e ? e : k.default
        }, [o]), S = a.useCallback(() => {
            null != t.channelId && (0, R.transitionToGuild)(n, t.channelId)
        }, [t.channelId, n]);
        return null == I ? null : (0, s.jsxs)("div", {
            className: W.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: W.activityCardImageContainer,
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
                        mask: "url(#".concat(V.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(b.default, {
                            game: I,
                            className: W.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: W.mask,
                    children: (0, s.jsx)("div", {
                        className: W.activityCardActivityIcon,
                        children: (0, s.jsx)(f, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(z, {
                who: c,
                what: I.name,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == o ? void 0 : o.name
                })
            }), (0, s.jsx)(X, {
                onClick: S,
                disabled: l || i || r
            })]
        })
    }

    function q(e) {
        var t;
        let {
            hangoutActivity: n,
            guildId: i,
            isUserLurking: r,
            isUnverifiedAccount: o
        } = e, {
            channelId: l,
            userIds: _
        } = n, c = (0, u.useStateFromStores)([g.default], () => g.default.getChannel(l)), {
            needSubscriptionToAccess: E
        } = (0, S.default)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0), T = (0, u.useStateFromStores)([M.default], () => !M.default.can(H.Permissions.CONNECT, c)), f = (0, u.useStateFromStores)([P.default], () => P.default.isInChannel(l)), {
            usersToShow: h,
            othersCount: A,
            usersText: m
        } = (0, F.useGetActivityUsers)(_, i, l), N = a.useCallback(() => {
            null != c && I.default.handleVoiceConnect({
                channel: c,
                connected: f,
                needSubscriptionToAccess: E,
                locked: T
            })
        }, [c, f, T, E]);
        return (0, s.jsxs)("div", {
            className: W.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: W.activityCardImageContainer,
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
                        mask: "url(#".concat(V.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(K, {
                            users: h,
                            othersCount: A
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: W.mask,
                    children: (0, s.jsx)("div", {
                        className: W.activityCardActivityIcon,
                        children: (0, s.jsx)(k.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(z, {
                who: m,
                what: j.default.Messages.GUILD_POPOUT_ACTIVITY_VOICE,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == c ? void 0 : c.name
                })
            }), (0, s.jsx)(X, {
                onClick: N,
                disabled: T || r || o
            })]
        })
    }

    function Z(e) {
        var t;
        let {
            event: n,
            isUserLurking: i
        } = e, r = (0, u.useStateFromStores)([g.default], () => g.default.getChannel(n.channel_id)), o = (0, u.useStateFromStores)([y.default], () => y.default.getUser(n.creator_id)), _ = (0, u.useStateFromStores)([D.default], () => null != o ? D.default.getMember(n.guild_id, o.id) : null, [o, n.guild_id]), c = null !== (t = null == _ ? void 0 : _.nick) && void 0 !== t ? t : x.default.getName(o), E = (0, p.getLocationDataForEvent)(n, r), I = null == E ? void 0 : E.IconComponent, T = null == E ? void 0 : E.locationName, f = (0, N.default)(n), S = a.useCallback(() => {
            n.entity_type === Y.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === Y.GuildScheduledEventEntityTypes.VOICE ? (0, R.transitionToGuild)(n.guild_id, n.channel_id) : (0, h.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, s.jsxs)("div", {
            className: W.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: W.activityCardImageContainer,
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
                        mask: "url(#".concat(V.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: null != f ? (0, s.jsx)("img", {
                            src: f,
                            alt: "",
                            width: 48,
                            height: 48,
                            className: l()(W.eventImage, W.activityCardImage)
                        }) : (0, s.jsx)("div", {
                            className: W.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: W.mask,
                    children: (0, s.jsx)("div", {
                        className: W.activityCardActivityIcon,
                        children: (0, s.jsx)(B.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(z, {
                who: j.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                    creatorName: c
                }),
                what: n.name,
                where: (0, s.jsxs)("div", {
                    className: W.location,
                    "aria-label": "".concat(j.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION_A11Y.format({
                        location: T
                    })),
                    children: [(0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: j.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION
                    }), null != I && (0, s.jsx)(I, {
                        width: 24,
                        height: 24,
                        className: W.channelIcon
                    }), (0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, m.guildEventDetailsParser)(T, !0)
                    })]
                })
            }), (0, s.jsx)(X, {
                onClick: S,
                disabled: i
            })]
        })
    }

    function J(e) {
        let {
            guild: t
        } = e, {
            isUserLurking: n,
            isUnverifiedAccount: i
        } = (0, u.useStateFromStoresObject)([O.default, v.default], () => {
            let e = O.default.isLurking(t.id);
            return {
                isUserLurking: e,
                isUnverifiedAccount: !v.default.getCheck(t.id).canChat
            }
        }), r = function(e) {
            let t = e.id,
                n = (0, u.useStateFromStoresArray)([L.default, C.default], () => {
                    let e = L.default.getChannels(t)[L.GUILD_VOCAL_CHANNELS_KEY].filter(e => {
                        let {
                            channel: t
                        } = e;
                        return t.type === H.ChannelTypes.GUILD_VOICE
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t.id
                    });
                    return [...e, ...Object.values(C.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
                }, [t]),
                i = (0, u.useStateFromStores)([U.default], () => U.default.getVoiceStates(t), [t]),
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
        }(t), o = (0, F.activityCardsSortedByAffinity)(r), l = a.useMemo(() => o.slice(0, 3), [o]), d = a.useMemo(() => l.map(e => {
            if ("hangout" === e.category) return (0, s.jsx)(q, {
                hangoutActivity: e,
                guildId: t.id,
                isUserLurking: n,
                isUnverifiedAccount: i
            }, "".concat(e.category, "-").concat(e.channelId));
            if ("event" === e.category) return (0, s.jsx)(Z, {
                event: e.event,
                isUserLurking: n
            }, "".concat(e.category, "-").concat(e.event.id));
            if ("embedded-activity" === e.category) return (0, s.jsx)(Q, {
                embeddedActivity: e.embeddedActivity,
                guildId: t.id,
                isUserLurking: n,
                isUnverifiedAccount: i
            }, "".concat(e.category, "-").concat(e.embeddedActivity.channelId))
        }), [l, t.id, i, n]);
        return (0, s.jsx)(s.Fragment, {
            children: d
        })
    }

    function $(e) {
        let {
            guild: t
        } = e, n = (0, f.default)(t);
        return (0, s.jsxs)("div", {
            className: W.container,
            children: [(0, s.jsxs)("div", {
                className: W.header,
                children: [n ? (0, s.jsx)(w.default, {
                    guild: t,
                    size: 16,
                    className: W.rowIconV2
                }) : (0, s.jsx)(G.default, {
                    guild: t,
                    size: 20,
                    className: W.rowIcon
                }), (0, s.jsx)(d.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, s.jsx)(J, {
                guild: t
            })]
        })
    }
}