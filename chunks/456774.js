function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCategory: function() {
            return r
        },
        default: function() {
            return X
        }
    });
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("442837"),
        d = n("481060"),
        _ = n("700582"),
        c = n("835473"),
        E = n("557135"),
        I = n("471445"),
        T = n("666188"),
        f = n("66999"),
        S = n("15274"),
        h = n("725436"),
        A = n("405613"),
        m = n("217804"),
        N = n("41776"),
        p = n("703656"),
        O = n("592125"),
        R = n("271383"),
        C = n("607744"),
        g = n("496675"),
        L = n("594174"),
        D = n("979651"),
        v = n("366695"),
        M = n("940627"),
        y = n("705600"),
        P = n("305878"),
        U = n("632184"),
        b = n("806519"),
        G = n("51144"),
        w = n("718582"),
        B = n("981631"),
        k = n("765305"),
        V = n("689938"),
        x = n("569779");

    function F(e) {
        let {
            users: t,
            othersCount: n
        } = e, i = e => {
            if (1 !== t.length) return 0 === e ? x.activityCardImageAvatar1 : n > 0 || 2 === e ? x.activityCardImageAvatar3 : x.activityCardImageAvatar2
        };
        return (0, s.jsxs)("div", {
            className: l()(x.activityCardImage, 1 === t.length && x.activityCardImageOneAvatar),
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
                className: x.activityCardImageAvatar2,
                children: ["+", n]
            })]
        })
    }

    function H(e) {
        let {
            who: t,
            what: n,
            where: i
        } = e;
        return (0, s.jsxs)("div", {
            className: x.activityCardDetailsContainer,
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

    function Y(e) {
        let {
            onClick: t,
            disabled: n
        } = e;
        return (0, s.jsx)(d.Button, {
            size: d.Button.Sizes.TINY,
            color: d.Button.Colors.PRIMARY,
            disabled: n,
            onClick: t,
            className: x.joinButton,
            children: V.default.Messages.JOIN
        })
    }

    function j(e) {
        let {
            channelId: t,
            userIds: n,
            applicationId: i,
            guildId: r,
            isUserLurking: o,
            isUnverifiedAccount: l
        } = e, _ = (0, u.useStateFromStores)([O.default], () => O.default.getChannel(t)), T = (0, u.useStateFromStores)([g.default], () => !g.default.can(B.Permissions.CONNECT, _)), {
            totalUsers: S,
            usersText: h
        } = (0, w.useGetActivityUsers)(n, r, t), A = (0, c.useGetOrFetchApplication)(i), {
            needSubscriptionToAccess: m
        } = (0, f.default)(null != t ? t : void 0), N = (0, u.useStateFromStores)([D.default], () => D.default.isInChannel(t)), R = a.useMemo(() => {
            let e = (null == _ ? void 0 : _.type) != null ? (0, I.getSimpleChannelIconComponent)(_.type) : null;
            return null != e ? e : U.default
        }, [_]), C = a.useCallback(() => {
            (0, p.transitionToGuild)(r, t)
        }, [t, r]), L = a.useCallback(() => {
            null != _ && (_.type === B.ChannelTypes.GUILD_VOICE && E.default.handleVoiceConnect({
                channel: _,
                connected: N,
                needSubscriptionToAccess: m,
                locked: T
            }), (0, p.transitionToGuild)(r, t))
        }, [_, t, r, N, T, m]);
        return null == A ? null : (0, s.jsxs)(d.ClickableContainer, {
            onClick: C,
            tag: "div",
            "aria-label": V.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
                users: S,
                gameName: A.name,
                channelName: null == _ ? void 0 : _.name
            }),
            className: x.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: x.activityCardImageContainer,
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
                        mask: "url(#".concat(b.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(v.default, {
                            game: A,
                            className: x.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: x.mask,
                    children: (0, s.jsx)("div", {
                        className: x.activityCardActivityIcon,
                        children: (0, s.jsx)(R, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(H, {
                who: h,
                what: A.name,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == _ ? void 0 : _.name
                })
            }), (0, s.jsx)(Y, {
                onClick: L,
                disabled: T || o || l
            })]
        })
    }

    function W(e) {
        var t;
        let {
            hangoutActivity: n,
            guildId: i,
            isUserLurking: r,
            isUnverifiedAccount: o
        } = e, {
            channelId: l,
            userIds: _
        } = n, c = (0, u.useStateFromStores)([O.default], () => O.default.getChannel(l)), {
            needSubscriptionToAccess: I
        } = (0, f.default)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0), T = (0, u.useStateFromStores)([g.default], () => !g.default.can(B.Permissions.CONNECT, c)), S = (0, u.useStateFromStores)([D.default], () => D.default.isInChannel(l)), {
            totalUsers: h,
            usersToShow: A,
            othersCount: m,
            usersText: N
        } = (0, w.useGetActivityUsers)(_, i, l), R = a.useCallback(() => {
            (0, p.transitionToGuild)(i, l)
        }, [l, i]), C = a.useCallback(() => {
            null != c && E.default.handleVoiceConnect({
                channel: c,
                connected: S,
                needSubscriptionToAccess: I,
                locked: T
            })
        }, [c, S, T, I]);
        return (0, s.jsxs)(d.ClickableContainer, {
            onClick: R,
            tag: "div",
            "aria-label": V.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
                users: h,
                channelName: null == c ? void 0 : c.name
            }),
            className: x.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: x.activityCardImageContainer,
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
                        mask: "url(#".concat(b.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(F, {
                            users: A,
                            othersCount: m
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: x.mask,
                    children: (0, s.jsx)("div", {
                        className: x.activityCardActivityIcon,
                        children: (0, s.jsx)(U.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(H, {
                who: N,
                what: V.default.Messages.GUILD_POPOUT_ACTIVITY_VOICE,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == c ? void 0 : c.name
                })
            }), (0, s.jsx)(Y, {
                onClick: C,
                disabled: T || r || o
            })]
        })
    }

    function K(e) {
        var t;
        let {
            event: n,
            isUserLurking: i
        } = e, r = (0, u.useStateFromStores)([O.default], () => O.default.getChannel(n.channel_id)), o = (0, u.useStateFromStores)([L.default], () => L.default.getUser(n.creator_id)), _ = (0, u.useStateFromStores)([R.default], () => null != o ? R.default.getMember(n.guild_id, o.id) : null, [o, n.guild_id]), c = null !== (t = null == _ ? void 0 : _.nick) && void 0 !== t ? t : G.default.getName(o), E = (0, m.getLocationDataForEvent)(n, r), I = null == E ? void 0 : E.IconComponent, T = null == E ? void 0 : E.locationName, f = (0, A.default)(n), N = a.useCallback(() => {
            !i && (0, S.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n.id, i]), C = a.useCallback(() => {
            n.entity_type === k.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === k.GuildScheduledEventEntityTypes.VOICE ? (0, p.transitionToGuild)(n.guild_id, n.channel_id) : (0, S.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, s.jsxs)(d.ClickableContainer, {
            onClick: N,
            tag: "div",
            "aria-label": V.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
                eventName: n.name
            }),
            className: x.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: x.activityCardImageContainer,
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
                        mask: "url(#".concat(b.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: null != f ? (0, s.jsx)("img", {
                            src: f,
                            alt: "",
                            width: 48,
                            height: 48,
                            className: l()(x.eventImage, x.activityCardImage)
                        }) : (0, s.jsx)("div", {
                            className: x.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: x.mask,
                    children: (0, s.jsx)("div", {
                        className: x.activityCardActivityIcon,
                        children: (0, s.jsx)(P.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(H, {
                who: V.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                    creatorName: c
                }),
                what: n.name,
                where: (0, s.jsxs)("div", {
                    className: x.location,
                    "aria-label": "".concat(V.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION_A11Y.format({
                        location: T
                    })),
                    children: [(0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: V.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION
                    }), null != I && (0, s.jsx)(I, {
                        width: 24,
                        height: 24,
                        className: x.channelIcon
                    }), (0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, h.guildEventDetailsParser)(T, !0)
                    })]
                })
            }), (0, s.jsx)(Y, {
                onClick: C,
                disabled: i
            })]
        })
    }

    function z(e) {
        let {
            guild: t
        } = e, {
            isUserLurking: n,
            isUnverifiedAccount: i
        } = (0, u.useStateFromStoresObject)([N.default, C.default], () => {
            let e = N.default.isLurking(t.id);
            return {
                isUserLurking: e,
                isUnverifiedAccount: !C.default.getCheck(t.id).canChat
            }
        }), r = (0, w.useGuildActivity)(t), o = a.useMemo(() => r.slice(0, 3), [r]), l = a.useMemo(() => o.map(e => {
            if ("hangout" === e.category) return (0, s.jsx)(W, {
                hangoutActivity: e,
                guildId: t.id,
                isUserLurking: n,
                isUnverifiedAccount: i
            }, "".concat(e.category, "-").concat(e.channelId));
            if ("event" === e.category) return (0, s.jsx)(K, {
                event: e.event,
                isUserLurking: n
            }, "".concat(e.category, "-").concat(e.event.id));
            if ("embedded-activity" === e.category) {
                let {
                    channelId: r,
                    applicationId: a,
                    userIds: o
                } = e.embeddedActivity;
                return (0, s.jsx)(j, {
                    channelId: r,
                    applicationId: a,
                    userIds: Array.from(o),
                    guildId: t.id,
                    isUserLurking: n,
                    isUnverifiedAccount: i
                }, "".concat(e.category, "-").concat(e.embeddedActivity.channelId))
            } else if ("gaming" === e.category) {
                let {
                    channelId: r,
                    game: a,
                    voiceStates: o
                } = e;
                return (0, s.jsx)(j, {
                    channelId: r,
                    applicationId: a.application_id,
                    userIds: o.map(e => {
                        let {
                            user: t
                        } = e;
                        return t.id
                    }),
                    guildId: t.id,
                    isUserLurking: n,
                    isUnverifiedAccount: i
                }, "".concat(e.category, "-").concat(e.channelId))
            }
        }), [o, t.id, i, n]);
        return (0, s.jsx)(s.Fragment, {
            children: l
        })
    }

    function X(e) {
        let {
            guild: t
        } = e, n = (0, T.default)(t);
        return (0, s.jsxs)("div", {
            className: x.container,
            children: [(0, s.jsxs)("div", {
                className: x.header,
                children: [n ? (0, s.jsx)(y.default, {
                    guild: t,
                    size: 16,
                    className: x.rowIconV2
                }) : (0, s.jsx)(M.default, {
                    guild: t,
                    size: 20,
                    className: x.rowIcon
                }), (0, s.jsx)(d.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, s.jsx)(z, {
                guild: t
            })]
        })
    }(i = r || (r = {})).HANGOUT = "hangout", i.EMBEDDED_ACTIVITY = "embedded-activity", i.EVENT = "event", i.GAMING = "gaming"
}