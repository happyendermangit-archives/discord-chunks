function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCategory: function() {
            return i
        },
        default: function() {
            return ee
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
        y = n("699516"),
        P = n("594174"),
        U = n("979651"),
        b = n("938475"),
        G = n("366695"),
        w = n("940627"),
        B = n("705600"),
        k = n("305878"),
        V = n("632184"),
        x = n("806519"),
        F = n("51144"),
        H = n("718582"),
        Y = n("981631"),
        j = n("765305"),
        W = n("689938"),
        K = n("569779");
    (r = i || (i = {})).HANGOUT = "hangout", r.EMBEDDED_ACTIVITY = "embedded-activity", r.EVENT = "event";

    function z(e) {
        let {
            users: t,
            othersCount: n
        } = e, i = e => {
            if (1 !== t.length) return 0 === e ? K.activityCardImageAvatar1 : n > 0 || 2 === e ? K.activityCardImageAvatar3 : K.activityCardImageAvatar2
        };
        return (0, s.jsxs)("div", {
            className: l()(K.activityCardImage, 1 === t.length && K.activityCardImageOneAvatar),
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
                className: K.activityCardImageAvatar2,
                children: ["+", n]
            })]
        })
    }

    function X(e) {
        let {
            who: t,
            what: n,
            where: i
        } = e;
        return (0, s.jsxs)("div", {
            className: K.activityCardDetailsContainer,
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

    function Q(e) {
        let {
            onClick: t,
            disabled: n
        } = e;
        return (0, s.jsx)(d.Button, {
            size: d.Button.Sizes.TINY,
            color: d.Button.Colors.PRIMARY,
            disabled: n,
            onClick: t,
            className: K.joinButton,
            children: W.default.Messages.JOIN
        })
    }

    function q(e) {
        var t;
        let {
            embeddedActivity: n,
            guildId: i,
            isUserLurking: r,
            isUnverifiedAccount: o
        } = e, l = (0, u.useStateFromStores)([g.default], () => g.default.getChannel(n.channelId)), _ = (0, u.useStateFromStores)([M.default], () => !M.default.can(Y.Permissions.CONNECT, l)), c = Array.from(n.userIds), {
            totalUsers: f,
            usersText: h
        } = (0, H.useGetActivityUsers)(c, i, n.channelId), A = (0, E.useGetOrFetchApplication)(n.applicationId), {
            needSubscriptionToAccess: m
        } = (0, S.default)(null !== (t = n.channelId) && void 0 !== t ? t : void 0), N = (0, u.useStateFromStores)([U.default], () => U.default.isInChannel(n.channelId)), p = a.useMemo(() => {
            let e = (null == l ? void 0 : l.type) != null ? (0, T.getSimpleChannelIconComponent)(l.type) : null;
            return null != e ? e : V.default
        }, [l]), O = a.useCallback(() => {
            (0, R.transitionToGuild)(i, n.channelId)
        }, [n.channelId, i]), C = a.useCallback(() => {
            null != l && (l.type === Y.ChannelTypes.GUILD_VOICE && I.default.handleVoiceConnect({
                channel: l,
                connected: N,
                needSubscriptionToAccess: m,
                locked: _
            }), (0, R.transitionToGuild)(i, n.channelId))
        }, [l, n.channelId, i, N, _, m]);
        return null == A ? null : (0, s.jsxs)(d.ClickableContainer, {
            onClick: O,
            tag: "div",
            "aria-label": W.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
                users: f,
                gameName: A.name,
                channelName: null == l ? void 0 : l.name
            }),
            className: K.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: K.activityCardImageContainer,
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
                        mask: "url(#".concat(x.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(G.default, {
                            game: A,
                            className: K.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: K.mask,
                    children: (0, s.jsx)("div", {
                        className: K.activityCardActivityIcon,
                        children: (0, s.jsx)(p, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(X, {
                who: h,
                what: A.name,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == l ? void 0 : l.name
                })
            }), (0, s.jsx)(Q, {
                onClick: C,
                disabled: _ || r || o
            })]
        })
    }

    function Z(e) {
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
        } = (0, S.default)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0), T = (0, u.useStateFromStores)([M.default], () => !M.default.can(Y.Permissions.CONNECT, c)), f = (0, u.useStateFromStores)([U.default], () => U.default.isInChannel(l)), {
            totalUsers: h,
            usersToShow: A,
            othersCount: m,
            usersText: N
        } = (0, H.useGetActivityUsers)(_, i, l), p = a.useCallback(() => {
            (0, R.transitionToGuild)(i, l)
        }, [l, i]), O = a.useCallback(() => {
            null != c && I.default.handleVoiceConnect({
                channel: c,
                connected: f,
                needSubscriptionToAccess: E,
                locked: T
            })
        }, [c, f, T, E]);
        return (0, s.jsxs)(d.ClickableContainer, {
            onClick: p,
            tag: "div",
            "aria-label": W.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
                users: h,
                channelName: null == c ? void 0 : c.name
            }),
            className: K.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: K.activityCardImageContainer,
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
                        mask: "url(#".concat(x.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(z, {
                            users: A,
                            othersCount: m
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: K.mask,
                    children: (0, s.jsx)("div", {
                        className: K.activityCardActivityIcon,
                        children: (0, s.jsx)(V.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(X, {
                who: N,
                what: W.default.Messages.GUILD_POPOUT_ACTIVITY_VOICE,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == c ? void 0 : c.name
                })
            }), (0, s.jsx)(Q, {
                onClick: O,
                disabled: T || r || o
            })]
        })
    }

    function J(e) {
        var t;
        let {
            event: n,
            isUserLurking: i
        } = e, r = (0, u.useStateFromStores)([g.default], () => g.default.getChannel(n.channel_id)), o = (0, u.useStateFromStores)([P.default], () => P.default.getUser(n.creator_id)), _ = (0, u.useStateFromStores)([D.default], () => null != o ? D.default.getMember(n.guild_id, o.id) : null, [o, n.guild_id]), c = null !== (t = null == _ ? void 0 : _.nick) && void 0 !== t ? t : F.default.getName(o), E = (0, p.getLocationDataForEvent)(n, r), I = null == E ? void 0 : E.IconComponent, T = null == E ? void 0 : E.locationName, f = (0, N.default)(n), S = a.useCallback(() => {
            !i && (0, h.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n.id, i]), A = a.useCallback(() => {
            n.entity_type === j.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === j.GuildScheduledEventEntityTypes.VOICE ? (0, R.transitionToGuild)(n.guild_id, n.channel_id) : (0, h.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, s.jsxs)(d.ClickableContainer, {
            onClick: S,
            tag: "div",
            "aria-label": W.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
                eventName: n.name
            }),
            className: K.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: K.activityCardImageContainer,
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
                        mask: "url(#".concat(x.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: null != f ? (0, s.jsx)("img", {
                            src: f,
                            alt: "",
                            width: 48,
                            height: 48,
                            className: l()(K.eventImage, K.activityCardImage)
                        }) : (0, s.jsx)("div", {
                            className: K.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: K.mask,
                    children: (0, s.jsx)("div", {
                        className: K.activityCardActivityIcon,
                        children: (0, s.jsx)(k.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(X, {
                who: W.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                    creatorName: c
                }),
                what: n.name,
                where: (0, s.jsxs)("div", {
                    className: K.location,
                    "aria-label": "".concat(W.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION_A11Y.format({
                        location: T
                    })),
                    children: [(0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: W.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION
                    }), null != I && (0, s.jsx)(I, {
                        width: 24,
                        height: 24,
                        className: K.channelIcon
                    }), (0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, m.guildEventDetailsParser)(T, !0)
                    })]
                })
            }), (0, s.jsx)(Q, {
                onClick: A,
                disabled: i
            })]
        })
    }

    function $(e) {
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
                        return t.type === Y.ChannelTypes.GUILD_VOICE
                    }).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t.id
                    });
                    return [...e, ...Object.values(C.default.getThreadsForGuild(t)).flatMap(e => Object.keys(e))]
                }, [t]),
                i = (0, u.useStateFromStores)([b.default], () => b.default.getVoiceStates(t), [t]),
                r = Object.keys(i).filter(t => t !== e.afkChannelId && n.includes(t)),
                s = (0, u.useStateFromStoresArray)([A.default], () => A.default.getGuildScheduledEventsForGuild(t).filter(e => (0, A.isGuildScheduledEventActive)(e)).map(e => ({
                    category: "event",
                    event: e
                })), [t]),
                a = (0, u.useStateFromStoresArray)([c.default, y.default], () => c.default.getEmbeddedActivitiesForGuild(t).filter(e => {
                    let {
                        userIds: t
                    } = e;
                    return null == [...t].find(e => y.default.isBlocked(e)) && !0
                }).map(e => ({
                    category: "embedded-activity",
                    embeddedActivity: e
                })), [t]),
                o = a.map(e => {
                    let {
                        embeddedActivity: t
                    } = e;
                    return t.channelId
                });
            return [...r.filter(e => !o.includes(e) && null == i[e].find(e => {
                let {
                    user: t
                } = e;
                return y.default.isBlocked(t.id)
            }) && !0).map(e => {
                let t = i[e].map(e => {
                    let {
                        user: t
                    } = e;
                    return t.id
                });
                return {
                    category: "hangout",
                    channelId: e,
                    userIds: t
                }
            }), ...a, ...s]
        }(t), o = (0, H.activityCardsSortedByAffinity)(r), l = a.useMemo(() => o.slice(0, 3), [o]), d = a.useMemo(() => l.map(e => {
            if ("hangout" === e.category) return (0, s.jsx)(Z, {
                hangoutActivity: e,
                guildId: t.id,
                isUserLurking: n,
                isUnverifiedAccount: i
            }, "".concat(e.category, "-").concat(e.channelId));
            if ("event" === e.category) return (0, s.jsx)(J, {
                event: e.event,
                isUserLurking: n
            }, "".concat(e.category, "-").concat(e.event.id));
            if ("embedded-activity" === e.category) return (0, s.jsx)(q, {
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

    function ee(e) {
        let {
            guild: t
        } = e, n = (0, f.default)(t);
        return (0, s.jsxs)("div", {
            className: K.container,
            children: [(0, s.jsxs)("div", {
                className: K.header,
                children: [n ? (0, s.jsx)(B.default, {
                    guild: t,
                    size: 16,
                    className: K.rowIconV2
                }) : (0, s.jsx)(w.default, {
                    guild: t,
                    size: 20,
                    className: K.rowIcon
                }), (0, s.jsx)(d.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, s.jsx)($, {
                guild: t
            })]
        })
    }
}