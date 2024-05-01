function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CardCategory: function() {
            return r
        },
        default: function() {
            return er
        }
    });
    var i, r, a = n("735250"),
        s = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("442837"),
        d = n("481060"),
        _ = n("700582"),
        c = n("835473"),
        E = n("557135"),
        I = n("666188"),
        T = n("549817"),
        f = n("819553"),
        S = n("17181"),
        h = n("303737"),
        A = n("66999"),
        m = n("15274"),
        N = n("725436"),
        p = n("217804"),
        O = n("965638"),
        R = n("434404"),
        C = n("962086"),
        g = n("160404"),
        L = n("41776"),
        v = n("703656"),
        D = n("592125"),
        M = n("271383"),
        y = n("607744"),
        P = n("496675"),
        U = n("594174"),
        b = n("979651"),
        G = n("366695"),
        w = n("940627"),
        B = n("705600"),
        k = n("305878"),
        V = n("507893"),
        x = n("645284"),
        F = n("632184"),
        H = n("806519"),
        Y = n("51144"),
        j = n("59688"),
        W = n("718582"),
        K = n("981631"),
        z = n("765305"),
        Z = n("689938"),
        X = n("569779");

    function Q(e) {
        let {
            users: t,
            othersCount: n
        } = e;
        return (0, a.jsxs)("div", {
            className: X.facepile,
            children: [t.map((e, i) => {
                let r = (0, a.jsx)(_.default, {
                    user: e,
                    size: d.AvatarSizes.SIZE_16,
                    "aria-label": ""
                });
                return i === t.length - 1 && 0 === n ? (0, a.jsx)("div", {
                    className: X.facePileItem,
                    children: r
                }, e.id) : (0, a.jsx)(H.default, {
                    width: 16,
                    height: 16,
                    mask: H.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
                    className: X.facePileItem,
                    children: r
                }, e.id)
            }), n > 0 && (0, a.jsxs)(d.Text, {
                color: "interactive-normal",
                variant: "text-xs/medium",
                className: X.othersCount,
                children: ["+", n]
            })]
        })
    }

    function q(e) {
        let {
            title: t,
            subtitle: n,
            users: i
        } = e;
        return (0, a.jsxs)("div", {
            className: X.activityCardDetailsContainer,
            children: [(0, a.jsx)(d.Heading, {
                color: "header-primary",
                variant: "heading-sm/semibold",
                lineClamp: 1,
                children: t
            }), (0, a.jsx)(d.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                lineClamp: 1,
                children: n
            }), i]
        })
    }

    function J(e) {
        let {
            onClick: t,
            disabled: n,
            inCall: i
        } = e, r = i ? Z.default.Messages.GUILD_POPOUT_JOINED : Z.default.Messages.JOIN;
        return (0, a.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            color: d.Button.Colors.GREEN,
            disabled: n,
            onClick: t,
            className: X.joinButton,
            children: r
        })
    }

    function $(e) {
        let {
            channelId: t,
            userIds: n,
            applicationId: i,
            guildId: r,
            isUserLurking: o,
            isUnverifiedAccount: l
        } = e, _ = (0, u.useStateFromStores)([D.default], () => D.default.getChannel(t)), I = (0, u.useStateFromStores)([P.default], () => !P.default.can(K.Permissions.CONNECT, _)), {
            totalUsers: T,
            usersToShow: f,
            othersCount: S
        } = (0, W.useGetActivityUsers)(n, r, t), h = (0, c.useGetOrFetchApplication)(i), {
            needSubscriptionToAccess: m
        } = (0, A.default)(null != t ? t : void 0), N = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(t)), p = s.useCallback(() => {
            (0, v.transitionToGuild)(r, t)
        }, [t, r]), O = s.useCallback(() => {
            null != _ && (_.type === K.ChannelTypes.GUILD_VOICE && E.default.handleVoiceConnect({
                channel: _,
                connected: N,
                needSubscriptionToAccess: m,
                locked: I
            }), (0, v.transitionToGuild)(r, t))
        }, [_, t, r, N, I, m]);
        return null == h ? null : (0, a.jsxs)(d.ClickableContainer, {
            onClick: p,
            tag: "div",
            "aria-label": Z.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
                users: T,
                gameName: h.name,
                channelName: null == _ ? void 0 : _.name
            }),
            className: X.activityCardContainer,
            children: [(0, a.jsx)(G.default, {
                game: h,
                className: X.activityCardImage
            }), (0, a.jsx)(q, {
                title: h.name,
                subtitle: null == _ ? void 0 : _.name,
                users: (0, a.jsx)(Q, {
                    users: f,
                    othersCount: S
                })
            }), (0, a.jsx)(J, {
                onClick: O,
                disabled: I || o || l || N,
                inCall: N
            })]
        })
    }

    function ee(e) {
        var t, n;
        let {
            hangoutActivity: i,
            guildId: r,
            isUserLurking: o,
            isUnverifiedAccount: l
        } = e, {
            channelId: _,
            userIds: c
        } = i, I = (0, u.useStateFromStores)([D.default], () => D.default.getChannel(_)), {
            needSubscriptionToAccess: T
        } = (0, A.default)(null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : void 0), f = (0, u.useStateFromStores)([P.default], () => !P.default.can(K.Permissions.CONNECT, I)), S = (0, u.useStateFromStores)([b.default], () => b.default.isInChannel(_)), {
            totalUsers: h,
            usersToShow: m,
            othersCount: N,
            streamUserIds: p,
            streamerUsersText: O
        } = (0, W.useGetActivityUsers)(c, r, _), R = s.useCallback(() => {
            (0, v.transitionToGuild)(r, _)
        }, [_, r]), C = s.useCallback(() => {
            null != I && E.default.handleVoiceConnect({
                channel: I,
                connected: S,
                needSubscriptionToAccess: T,
                locked: f
            })
        }, [I, S, f, T]);
        return (0, a.jsxs)(d.ClickableContainer, {
            onClick: R,
            tag: "div",
            "aria-label": Z.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
                users: h,
                channelName: null == I ? void 0 : I.name
            }),
            className: X.activityCardContainer,
            children: [(0, a.jsx)("div", {
                className: X.activityCardActivityIcon,
                children: p.length > 0 ? (0, a.jsx)(x.default, {
                    width: 16,
                    height: 16,
                    color: "white"
                }) : (0, a.jsx)(F.default, {
                    width: 16,
                    height: 16,
                    color: "white"
                })
            }), (0, a.jsx)(q, {
                title: null !== (n = null == I ? void 0 : I.name) && void 0 !== n ? n : "",
                subtitle: p.length > 0 ? O : "",
                users: (0, a.jsx)(Q, {
                    users: m,
                    othersCount: N
                })
            }), (0, a.jsx)(J, {
                onClick: C,
                disabled: f || o || l || S,
                inCall: S
            })]
        })
    }

    function et(e) {
        var t;
        let {
            event: n,
            isUserLurking: i
        } = e, r = (0, u.useStateFromStores)([D.default], () => D.default.getChannel(n.channel_id)), o = (0, u.useStateFromStores)([U.default], () => U.default.getUser(n.creator_id)), l = (0, u.useStateFromStores)([M.default], () => null != o ? M.default.getMember(n.guild_id, o.id) : null, [o, n.guild_id]), _ = null !== (t = null == l ? void 0 : l.nick) && void 0 !== t ? t : Y.default.getName(o), c = (0, p.getLocationDataForEvent)(n, r), E = null == c ? void 0 : c.locationName, I = s.useCallback(() => {
            !i && (0, m.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n.id, i]), T = s.useCallback(() => {
            n.entity_type === z.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === z.GuildScheduledEventEntityTypes.VOICE ? (0, v.transitionToGuild)(n.guild_id, n.channel_id) : (0, m.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, a.jsxs)(d.ClickableContainer, {
            onClick: I,
            tag: "div",
            "aria-label": Z.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
                eventName: n.name
            }),
            className: X.activityCardContainer,
            children: [(0, a.jsx)("div", {
                className: X.activityCardActivityIcon,
                children: (0, a.jsx)(k.default, {
                    width: 16,
                    height: 16,
                    color: "white"
                })
            }), (0, a.jsx)(q, {
                title: n.name,
                subtitle: (0, N.guildEventDetailsParser)(E, !0),
                users: (0, a.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: Z.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                        creatorName: _
                    })
                })
            }), (0, a.jsx)(J, {
                onClick: T,
                disabled: i
            })]
        })
    }

    function en(e) {
        var t;
        let {
            channelId: n,
            guildId: i,
            isUserLurking: r,
            isUnverifiedAccount: o
        } = e, _ = (0, u.useStateFromStores)([D.default], () => D.default.getChannel(n)), {
            needSubscriptionToAccess: c
        } = (0, A.default)(null !== (t = null == _ ? void 0 : _.id) && void 0 !== t ? t : void 0), I = (0, u.useStateFromStores)([P.default], () => !P.default.can(K.Permissions.CONNECT, _)), T = s.useCallback(() => {
            (0, v.transitionToGuild)(i, n)
        }, [n, i]), f = s.useCallback(() => {
            null != _ && E.default.handleVoiceConnect({
                channel: _,
                connected: !1,
                needSubscriptionToAccess: c,
                locked: I
            })
        }, [_, I, c]);
        return (0, a.jsxs)(d.ClickableContainer, {
            onClick: T,
            tag: "div",
            "aria-label": "",
            className: l()(X.emptyActivityCardContainer, X.activityCardContainer),
            children: [(0, a.jsx)(F.default, {
                width: 12,
                height: 12,
                color: "white"
            }), (0, a.jsx)("div", {
                className: X.activityCardDetailsContainer,
                children: (0, a.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children: null == _ ? void 0 : _.name
                })
            }), (0, a.jsx)(J, {
                onClick: f,
                disabled: I || r || o
            })]
        })
    }

    function ei(e) {
        let {
            guild: t
        } = e, i = (0, j.useCanShowNewGuildTooltipActivityEmptyState)(), {
            isUserLurking: r,
            isUnverifiedAccount: o
        } = (0, u.useStateFromStoresObject)([L.default, y.default], () => {
            let e = L.default.isLurking(t.id);
            return {
                isUserLurking: e,
                isUnverifiedAccount: !y.default.getCheck(t.id).canChat
            }
        }), l = (0, W.useGuildActivity)(t), _ = s.useMemo(() => l.map(e => {
            if ("hangout" === e.category) return (0, a.jsx)(ee, {
                hangoutActivity: e,
                guildId: t.id,
                isUserLurking: r,
                isUnverifiedAccount: o
            }, "".concat(e.category, "-").concat(e.channelId));
            if ("event" === e.category) return (0, a.jsx)(et, {
                event: e.event,
                isUserLurking: r
            }, "".concat(e.category, "-").concat(e.event.id));
            if ("embedded-activity" === e.category) {
                let {
                    channelId: n,
                    applicationId: i,
                    userIds: s
                } = e.embeddedActivity;
                return (0, a.jsx)($, {
                    channelId: n,
                    applicationId: i,
                    userIds: Array.from(s),
                    guildId: t.id,
                    isUserLurking: r,
                    isUnverifiedAccount: o
                }, "".concat(e.category, "-").concat(e.embeddedActivity.channelId))
            } else if ("gaming" === e.category) {
                let {
                    channelId: n,
                    game: i,
                    voiceStates: s
                } = e;
                return (0, a.jsx)($, {
                    channelId: n,
                    applicationId: i.application_id,
                    userIds: s.map(e => {
                        let {
                            user: t
                        } = e;
                        return t.id
                    }),
                    guildId: t.id,
                    isUserLurking: r,
                    isUnverifiedAccount: o
                }, "".concat(e.category, "-").concat(e.channelId))
            } else if ("empty" === e.category) return (0, a.jsx)(en, {
                channelId: e.channelId,
                guildId: t.id,
                isUserLurking: r,
                isUnverifiedAccount: o
            }, "".concat(e.category, "-").concat(e.channelId))
        }), [l, t.id, o, r]);
        if (0 === l.length) return null;
        if ("empty" === l[0].category) return i ? (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)("div", {
                className: X.emptyActivityCardPrompt,
                children: [(0, a.jsxs)("div", {
                    className: X.emptyStateTextContainer,
                    children: [(0, a.jsx)(d.Heading, {
                        variant: "heading-sm/semibold",
                        color: "header-primary",
                        children: Z.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_HEADER
                    }), (0, a.jsx)(d.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: Z.default.Messages.GUILD_POPOUT_EMPTY_PROMPT_BODY
                    })]
                }), (0, a.jsx)("img", {
                    src: n("121727"),
                    alt: ""
                })]
            }), _]
        }) : null;
        return (0, a.jsx)(a.Fragment, {
            children: _
        })
    }

    function er(e) {
        let {
            guild: t,
            closePopout: n
        } = e, i = (0, I.default)(t), r = (0, O.useShouldShowInvitesDisabledNotif)(t), {
            isViewingRoles: s,
            backNavigationSection: o
        } = (0, u.useStateFromStoresObject)([g.default], () => ({
            isViewingRoles: g.default.isViewingRoles(t.id),
            backNavigationSection: g.default.getBackNavigationSection(t.id)
        })), l = () => {
            g.default.isFullServerPreview(t.id) && (0, v.transitionTo)(K.Routes.CHANNEL(t.id)), f.default.shouldShowOnboarding(t.id) && (T.default.finishOnboarding(t.id), (0, S.discardOnboardingPromise)(t.id)), (0, C.stopImpersonating)(t.id), R.default.open(t.id, o), o === K.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, h.announceDeleteTemplateChannels)(t.id)
        };
        return (0, a.jsxs)("div", {
            className: X.container,
            children: [(0, a.jsxs)("div", {
                className: X.header,
                children: [i ? (0, a.jsx)(B.default, {
                    guild: t,
                    size: 16,
                    className: X.rowIconV2
                }) : (0, a.jsx)(w.default, {
                    guild: t,
                    size: 20,
                    className: X.rowIcon
                }), (0, a.jsx)(d.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, a.jsx)(ei, {
                guild: t
            }), r ? (0, a.jsxs)("div", {
                className: X.footer,
                children: [(0, a.jsx)(V.default, {
                    className: X.infoIcon
                }), (0, a.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: Z.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
                        onClick: () => {
                            n(), R.default.open(t.id, K.GuildSettingsSections.INSTANT_INVITES)
                        }
                    })
                })]
            }) : null, s ? (0, a.jsxs)("div", {
                className: X.footer,
                children: [(0, a.jsx)(V.default, {
                    className: X.infoIcon
                }), (0, a.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: Z.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
                        onClick: () => {
                            n(), l()
                        }
                    })
                })]
            }) : null]
        })
    }(i = r || (r = {})).HANGOUT = "hangout", i.EMBEDDED_ACTIVITY = "embedded-activity", i.EVENT = "event", i.GAMING = "gaming", i.EMPTY = "empty"
}