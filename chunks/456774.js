function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCategory: function() {
            return r
        },
        default: function() {
            return ee
        }
    });
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("442837"),
        l = n("481060"),
        u = n("700582"),
        d = n("835473"),
        _ = n("557135"),
        c = n("666188"),
        E = n("549817"),
        I = n("819553"),
        T = n("17181"),
        f = n("303737"),
        S = n("66999"),
        h = n("15274"),
        A = n("725436"),
        m = n("217804"),
        N = n("965638"),
        p = n("434404"),
        O = n("962086"),
        R = n("160404"),
        C = n("41776"),
        g = n("703656"),
        L = n("592125"),
        v = n("271383"),
        D = n("607744"),
        M = n("496675"),
        y = n("594174"),
        P = n("979651"),
        U = n("366695"),
        b = n("940627"),
        G = n("705600"),
        w = n("305878"),
        B = n("507893"),
        k = n("645284"),
        V = n("632184"),
        x = n("806519"),
        F = n("51144"),
        H = n("718582"),
        Y = n("981631"),
        j = n("765305"),
        W = n("689938"),
        K = n("569779");

    function z(e) {
        let {
            users: t,
            othersCount: n
        } = e;
        return (0, s.jsxs)("div", {
            className: K.facepile,
            children: [t.map((e, i) => {
                let r = (0, s.jsx)(u.default, {
                    user: e,
                    size: l.AvatarSizes.SIZE_16,
                    "aria-label": ""
                });
                return i === t.length - 1 && 0 === n ? (0, s.jsx)("div", {
                    className: K.facePileItem,
                    children: r
                }, e.id) : (0, s.jsx)(x.default, {
                    width: 16,
                    height: 16,
                    mask: x.default.Masks.GUILD_POPOUT_FACE_PILE_AVATAR,
                    className: K.facePileItem,
                    children: r
                }, e.id)
            }), n > 0 && (0, s.jsxs)(l.Text, {
                color: "interactive-normal",
                variant: "text-xs/medium",
                className: K.othersCount,
                children: ["+", n]
            })]
        })
    }

    function Z(e) {
        let {
            title: t,
            subtitle: n,
            users: i
        } = e;
        return (0, s.jsxs)("div", {
            className: K.activityCardDetailsContainer,
            children: [(0, s.jsx)(l.Heading, {
                color: "header-primary",
                variant: "heading-sm/semibold",
                lineClamp: 1,
                children: t
            }), (0, s.jsx)(l.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                lineClamp: 1,
                children: n
            }), i]
        })
    }

    function X(e) {
        let {
            onClick: t,
            disabled: n,
            inCall: i
        } = e, r = i ? W.default.Messages.GUILD_POPOUT_JOINED : W.default.Messages.JOIN;
        return (0, s.jsx)(l.Button, {
            size: l.Button.Sizes.SMALL,
            color: l.Button.Colors.GREEN,
            disabled: n,
            onClick: t,
            className: K.joinButton,
            children: r
        })
    }

    function Q(e) {
        let {
            channelId: t,
            userIds: n,
            applicationId: i,
            guildId: r,
            isUserLurking: u,
            isUnverifiedAccount: c
        } = e, E = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(t)), I = (0, o.useStateFromStores)([M.default], () => !M.default.can(Y.Permissions.CONNECT, E)), {
            totalUsers: T,
            usersToShow: f,
            othersCount: h
        } = (0, H.useGetActivityUsers)(n, r, t), A = (0, d.useGetOrFetchApplication)(i), {
            needSubscriptionToAccess: m
        } = (0, S.default)(null != t ? t : void 0), N = (0, o.useStateFromStores)([P.default], () => P.default.isInChannel(t)), p = a.useCallback(() => {
            (0, g.transitionToGuild)(r, t)
        }, [t, r]), O = a.useCallback(() => {
            null != E && (E.type === Y.ChannelTypes.GUILD_VOICE && _.default.handleVoiceConnect({
                channel: E,
                connected: N,
                needSubscriptionToAccess: m,
                locked: I
            }), (0, g.transitionToGuild)(r, t))
        }, [E, t, r, N, I, m]);
        return null == A ? null : (0, s.jsxs)(l.ClickableContainer, {
            onClick: p,
            tag: "div",
            "aria-label": W.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
                users: T,
                gameName: A.name,
                channelName: null == E ? void 0 : E.name
            }),
            className: K.activityCardContainer,
            children: [(0, s.jsx)(U.default, {
                game: A,
                className: K.activityCardImage
            }), (0, s.jsx)(Z, {
                title: A.name,
                subtitle: null == E ? void 0 : E.name,
                users: (0, s.jsx)(z, {
                    users: f,
                    othersCount: h
                })
            }), (0, s.jsx)(X, {
                onClick: O,
                disabled: I || u || c || N,
                inCall: N
            })]
        })
    }

    function q(e) {
        var t, n;
        let {
            hangoutActivity: i,
            guildId: r,
            isUserLurking: u,
            isUnverifiedAccount: d
        } = e, {
            channelId: c,
            userIds: E
        } = i, I = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(c)), {
            needSubscriptionToAccess: T
        } = (0, S.default)(null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : void 0), f = (0, o.useStateFromStores)([M.default], () => !M.default.can(Y.Permissions.CONNECT, I)), h = (0, o.useStateFromStores)([P.default], () => P.default.isInChannel(c)), {
            totalUsers: A,
            usersToShow: m,
            othersCount: N,
            streamUserIds: p,
            streamerUsersText: O
        } = (0, H.useGetActivityUsers)(E, r, c), R = a.useCallback(() => {
            (0, g.transitionToGuild)(r, c)
        }, [c, r]), C = a.useCallback(() => {
            null != I && _.default.handleVoiceConnect({
                channel: I,
                connected: h,
                needSubscriptionToAccess: T,
                locked: f
            })
        }, [I, h, f, T]);
        return (0, s.jsxs)(l.ClickableContainer, {
            onClick: R,
            tag: "div",
            "aria-label": W.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
                users: A,
                channelName: null == I ? void 0 : I.name
            }),
            className: K.activityCardContainer,
            children: [(0, s.jsx)("div", {
                className: K.activityCardActivityIcon,
                children: p.length > 0 ? (0, s.jsx)(k.default, {
                    width: 16,
                    height: 16,
                    color: "white"
                }) : (0, s.jsx)(V.default, {
                    width: 16,
                    height: 16,
                    color: "white"
                })
            }), (0, s.jsx)(Z, {
                title: null !== (n = null == I ? void 0 : I.name) && void 0 !== n ? n : "",
                subtitle: p.length > 0 ? O : "",
                users: (0, s.jsx)(z, {
                    users: m,
                    othersCount: N
                })
            }), (0, s.jsx)(X, {
                onClick: C,
                disabled: f || u || d || h,
                inCall: h
            })]
        })
    }

    function J(e) {
        var t;
        let {
            event: n,
            isUserLurking: i
        } = e, r = (0, o.useStateFromStores)([L.default], () => L.default.getChannel(n.channel_id)), u = (0, o.useStateFromStores)([y.default], () => y.default.getUser(n.creator_id)), d = (0, o.useStateFromStores)([v.default], () => null != u ? v.default.getMember(n.guild_id, u.id) : null, [u, n.guild_id]), _ = null !== (t = null == d ? void 0 : d.nick) && void 0 !== t ? t : F.default.getName(u), c = (0, m.getLocationDataForEvent)(n, r), E = null == c ? void 0 : c.locationName, I = a.useCallback(() => {
            !i && (0, h.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n.id, i]), T = a.useCallback(() => {
            n.entity_type === j.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === j.GuildScheduledEventEntityTypes.VOICE ? (0, g.transitionToGuild)(n.guild_id, n.channel_id) : (0, h.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, s.jsxs)(l.ClickableContainer, {
            onClick: I,
            tag: "div",
            "aria-label": W.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
                eventName: n.name
            }),
            className: K.activityCardContainer,
            children: [(0, s.jsx)("div", {
                className: K.activityCardActivityIcon,
                children: (0, s.jsx)(w.default, {
                    width: 16,
                    height: 16,
                    color: "white"
                })
            }), (0, s.jsx)(Z, {
                title: n.name,
                subtitle: (0, A.guildEventDetailsParser)(E, !0),
                users: (0, s.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: W.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                        creatorName: _
                    })
                })
            }), (0, s.jsx)(X, {
                onClick: T,
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
        } = (0, o.useStateFromStoresObject)([C.default, D.default], () => {
            let e = C.default.isLurking(t.id);
            return {
                isUserLurking: e,
                isUnverifiedAccount: !D.default.getCheck(t.id).canChat
            }
        }), r = (0, H.useGuildActivity)(t), l = a.useMemo(() => r.slice(0, 3), [r]), u = a.useMemo(() => l.map(e => {
            if ("hangout" === e.category) return (0, s.jsx)(q, {
                hangoutActivity: e,
                guildId: t.id,
                isUserLurking: n,
                isUnverifiedAccount: i
            }, "".concat(e.category, "-").concat(e.channelId));
            if ("event" === e.category) return (0, s.jsx)(J, {
                event: e.event,
                isUserLurking: n
            }, "".concat(e.category, "-").concat(e.event.id));
            if ("embedded-activity" === e.category) {
                let {
                    channelId: r,
                    applicationId: a,
                    userIds: o
                } = e.embeddedActivity;
                return (0, s.jsx)(Q, {
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
                return (0, s.jsx)(Q, {
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
        }), [l, t.id, i, n]);
        return (0, s.jsx)(s.Fragment, {
            children: u
        })
    }

    function ee(e) {
        let {
            guild: t,
            closePopout: n
        } = e, i = (0, c.default)(t), r = (0, N.useShouldShowInvitesDisabledNotif)(t), {
            isViewingRoles: a,
            backNavigationSection: u
        } = (0, o.useStateFromStoresObject)([R.default], () => ({
            isViewingRoles: R.default.isViewingRoles(t.id),
            backNavigationSection: R.default.getBackNavigationSection(t.id)
        })), d = () => {
            R.default.isFullServerPreview(t.id) && (0, g.transitionTo)(Y.Routes.CHANNEL(t.id)), I.default.shouldShowOnboarding(t.id) && (E.default.finishOnboarding(t.id), (0, T.discardOnboardingPromise)(t.id)), (0, O.stopImpersonating)(t.id), p.default.open(t.id, u), u === Y.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, f.announceDeleteTemplateChannels)(t.id)
        };
        return (0, s.jsxs)("div", {
            className: K.container,
            children: [(0, s.jsxs)("div", {
                className: K.header,
                children: [i ? (0, s.jsx)(G.default, {
                    guild: t,
                    size: 16,
                    className: K.rowIconV2
                }) : (0, s.jsx)(b.default, {
                    guild: t,
                    size: 20,
                    className: K.rowIcon
                }), (0, s.jsx)(l.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, s.jsx)($, {
                guild: t
            }), r ? (0, s.jsxs)("div", {
                className: K.footer,
                children: [(0, s.jsx)(B.default, {
                    className: K.infoIcon
                }), (0, s.jsx)(l.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: W.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
                        onClick: () => {
                            n(), p.default.open(t.id, Y.GuildSettingsSections.INSTANT_INVITES)
                        }
                    })
                })]
            }) : null, a ? (0, s.jsxs)("div", {
                className: K.footer,
                children: [(0, s.jsx)(B.default, {
                    className: K.infoIcon
                }), (0, s.jsx)(l.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: W.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
                        onClick: () => {
                            n(), d()
                        }
                    })
                })]
            }) : null]
        })
    }(i = r || (r = {})).HANGOUT = "hangout", i.EMBEDDED_ACTIVITY = "embedded-activity", i.EVENT = "event", i.GAMING = "gaming"
}