function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ActivityCategory: function() {
            return r
        },
        default: function() {
            return ei
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
        f = n("549817"),
        S = n("819553"),
        h = n("17181"),
        A = n("303737"),
        m = n("66999"),
        N = n("15274"),
        p = n("725436"),
        O = n("405613"),
        R = n("217804"),
        C = n("965638"),
        g = n("434404"),
        L = n("962086"),
        D = n("160404"),
        v = n("41776"),
        M = n("703656"),
        y = n("592125"),
        P = n("271383"),
        U = n("607744"),
        b = n("496675"),
        G = n("594174"),
        w = n("979651"),
        B = n("366695"),
        k = n("940627"),
        V = n("705600"),
        x = n("305878"),
        F = n("507893"),
        H = n("632184"),
        Y = n("806519"),
        j = n("51144"),
        W = n("718582"),
        K = n("981631"),
        z = n("765305"),
        X = n("689938"),
        Q = n("569779");

    function q(e) {
        let {
            users: t,
            othersCount: n
        } = e, i = e => {
            if (1 !== t.length) return 0 === e ? Q.activityCardImageAvatar1 : n > 0 || 2 === e ? Q.activityCardImageAvatar3 : Q.activityCardImageAvatar2
        };
        return (0, s.jsxs)("div", {
            className: l()(Q.activityCardImage, 1 === t.length && Q.activityCardImageOneAvatar),
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
                className: Q.activityCardImageAvatar2,
                children: ["+", n]
            })]
        })
    }

    function Z(e) {
        let {
            who: t,
            what: n,
            where: i
        } = e;
        return (0, s.jsxs)("div", {
            className: Q.activityCardDetailsContainer,
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

    function J(e) {
        let {
            onClick: t,
            disabled: n
        } = e;
        return (0, s.jsx)(d.Button, {
            size: d.Button.Sizes.TINY,
            color: d.Button.Colors.PRIMARY,
            disabled: n,
            onClick: t,
            className: Q.joinButton,
            children: X.default.Messages.JOIN
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
        } = e, _ = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(t)), T = (0, u.useStateFromStores)([b.default], () => !b.default.can(K.Permissions.CONNECT, _)), {
            totalUsers: f,
            usersText: S
        } = (0, W.useGetActivityUsers)(n, r, t), h = (0, c.useGetOrFetchApplication)(i), {
            needSubscriptionToAccess: A
        } = (0, m.default)(null != t ? t : void 0), N = (0, u.useStateFromStores)([w.default], () => w.default.isInChannel(t)), p = a.useMemo(() => {
            let e = (null == _ ? void 0 : _.type) != null ? (0, I.getSimpleChannelIconComponent)(_.type) : null;
            return null != e ? e : H.default
        }, [_]), O = a.useCallback(() => {
            (0, M.transitionToGuild)(r, t)
        }, [t, r]), R = a.useCallback(() => {
            null != _ && (_.type === K.ChannelTypes.GUILD_VOICE && E.default.handleVoiceConnect({
                channel: _,
                connected: N,
                needSubscriptionToAccess: A,
                locked: T
            }), (0, M.transitionToGuild)(r, t))
        }, [_, t, r, N, T, A]);
        return null == h ? null : (0, s.jsxs)(d.ClickableContainer, {
            onClick: O,
            tag: "div",
            "aria-label": X.default.Messages.GUILD_POPOUT_ACTIVITY_EMBEDDED_ACTIVITY_CARD_ARIA.format({
                users: f,
                gameName: h.name,
                channelName: null == _ ? void 0 : _.name
            }),
            className: Q.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: Q.activityCardImageContainer,
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
                        mask: "url(#".concat(Y.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(B.default, {
                            game: h,
                            className: Q.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: Q.mask,
                    children: (0, s.jsx)("div", {
                        className: Q.activityCardActivityIcon,
                        children: (0, s.jsx)(p, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(Z, {
                who: S,
                what: h.name,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == _ ? void 0 : _.name
                })
            }), (0, s.jsx)(J, {
                onClick: R,
                disabled: T || o || l
            })]
        })
    }

    function ee(e) {
        var t;
        let {
            hangoutActivity: n,
            guildId: i,
            isUserLurking: r,
            isUnverifiedAccount: o
        } = e, {
            channelId: l,
            userIds: _
        } = n, c = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(l)), {
            needSubscriptionToAccess: I
        } = (0, m.default)(null !== (t = null == c ? void 0 : c.id) && void 0 !== t ? t : void 0), T = (0, u.useStateFromStores)([b.default], () => !b.default.can(K.Permissions.CONNECT, c)), f = (0, u.useStateFromStores)([w.default], () => w.default.isInChannel(l)), {
            totalUsers: S,
            usersToShow: h,
            othersCount: A,
            usersText: N
        } = (0, W.useGetActivityUsers)(_, i, l), p = a.useCallback(() => {
            (0, M.transitionToGuild)(i, l)
        }, [l, i]), O = a.useCallback(() => {
            null != c && E.default.handleVoiceConnect({
                channel: c,
                connected: f,
                needSubscriptionToAccess: I,
                locked: T
            })
        }, [c, f, T, I]);
        return (0, s.jsxs)(d.ClickableContainer, {
            onClick: p,
            tag: "div",
            "aria-label": X.default.Messages.GUILD_POPOUT_ACTIVITY_HANGOUT_CARD_ARIA.format({
                users: S,
                channelName: null == c ? void 0 : c.name
            }),
            className: Q.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: Q.activityCardImageContainer,
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
                        mask: "url(#".concat(Y.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: (0, s.jsx)(q, {
                            users: h,
                            othersCount: A
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: Q.mask,
                    children: (0, s.jsx)("div", {
                        className: Q.activityCardActivityIcon,
                        children: (0, s.jsx)(H.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(Z, {
                who: N,
                what: X.default.Messages.GUILD_POPOUT_ACTIVITY_VOICE,
                where: (0, s.jsx)(d.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    lineClamp: 1,
                    children: null == c ? void 0 : c.name
                })
            }), (0, s.jsx)(J, {
                onClick: O,
                disabled: T || r || o
            })]
        })
    }

    function et(e) {
        var t;
        let {
            event: n,
            isUserLurking: i
        } = e, r = (0, u.useStateFromStores)([y.default], () => y.default.getChannel(n.channel_id)), o = (0, u.useStateFromStores)([G.default], () => G.default.getUser(n.creator_id)), _ = (0, u.useStateFromStores)([P.default], () => null != o ? P.default.getMember(n.guild_id, o.id) : null, [o, n.guild_id]), c = null !== (t = null == _ ? void 0 : _.nick) && void 0 !== t ? t : j.default.getName(o), E = (0, R.getLocationDataForEvent)(n, r), I = null == E ? void 0 : E.IconComponent, T = null == E ? void 0 : E.locationName, f = (0, O.default)(n), S = a.useCallback(() => {
            !i && (0, N.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n.id, i]), h = a.useCallback(() => {
            n.entity_type === z.GuildScheduledEventEntityTypes.STAGE_INSTANCE || n.entity_type === z.GuildScheduledEventEntityTypes.VOICE ? (0, M.transitionToGuild)(n.guild_id, n.channel_id) : (0, N.openGuildEventDetails)({
                eventId: n.id
            })
        }, [n]);
        return (0, s.jsxs)(d.ClickableContainer, {
            onClick: S,
            tag: "div",
            "aria-label": X.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CARD_ARIA.format({
                eventName: n.name
            }),
            className: Q.activityCardContainer,
            children: [(0, s.jsxs)("div", {
                className: Q.activityCardImageContainer,
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
                        mask: "url(#".concat(Y.MaskIDs.GUILD_POPOUT_ACTIVITY_ICON, ")"),
                        children: null != f ? (0, s.jsx)("img", {
                            src: f,
                            alt: "",
                            width: 48,
                            height: 48,
                            className: l()(Q.eventImage, Q.activityCardImage)
                        }) : (0, s.jsx)("div", {
                            className: Q.activityCardImage
                        })
                    })
                }), (0, s.jsx)("div", {
                    className: Q.mask,
                    children: (0, s.jsx)("div", {
                        className: Q.activityCardActivityIcon,
                        children: (0, s.jsx)(x.default, {
                            width: 12,
                            height: 12,
                            color: "white"
                        })
                    })
                })]
            }), (0, s.jsx)(Z, {
                who: X.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_CREATED_BY.format({
                    creatorName: c
                }),
                what: n.name,
                where: (0, s.jsxs)("div", {
                    className: Q.location,
                    "aria-label": "".concat(X.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION_A11Y.format({
                        location: T
                    })),
                    children: [(0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: X.default.Messages.GUILD_POPOUT_ACTIVITY_EVENT_LOCATION
                    }), null != I && (0, s.jsx)(I, {
                        width: 24,
                        height: 24,
                        className: Q.channelIcon
                    }), (0, s.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, p.guildEventDetailsParser)(T, !0)
                    })]
                })
            }), (0, s.jsx)(J, {
                onClick: h,
                disabled: i
            })]
        })
    }

    function en(e) {
        let {
            guild: t
        } = e, {
            isUserLurking: n,
            isUnverifiedAccount: i
        } = (0, u.useStateFromStoresObject)([v.default, U.default], () => {
            let e = v.default.isLurking(t.id);
            return {
                isUserLurking: e,
                isUnverifiedAccount: !U.default.getCheck(t.id).canChat
            }
        }), r = (0, W.useGuildActivity)(t), o = a.useMemo(() => r.slice(0, 3), [r]), l = a.useMemo(() => o.map(e => {
            if ("hangout" === e.category) return (0, s.jsx)(ee, {
                hangoutActivity: e,
                guildId: t.id,
                isUserLurking: n,
                isUnverifiedAccount: i
            }, "".concat(e.category, "-").concat(e.channelId));
            if ("event" === e.category) return (0, s.jsx)(et, {
                event: e.event,
                isUserLurking: n
            }, "".concat(e.category, "-").concat(e.event.id));
            if ("embedded-activity" === e.category) {
                let {
                    channelId: r,
                    applicationId: a,
                    userIds: o
                } = e.embeddedActivity;
                return (0, s.jsx)($, {
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
                return (0, s.jsx)($, {
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

    function ei(e) {
        let {
            guild: t,
            closePopout: n
        } = e, i = (0, T.default)(t), r = (0, C.useShouldShowInvitesDisabledNotif)(t), {
            isViewingRoles: a,
            backNavigationSection: o
        } = (0, u.useStateFromStoresObject)([D.default], () => ({
            isViewingRoles: D.default.isViewingRoles(t.id),
            backNavigationSection: D.default.getBackNavigationSection(t.id)
        })), l = () => {
            D.default.isFullServerPreview(t.id) && (0, M.transitionTo)(K.Routes.CHANNEL(t.id)), S.default.shouldShowOnboarding(t.id) && (f.default.finishOnboarding(t.id), (0, h.discardOnboardingPromise)(t.id)), (0, L.stopImpersonating)(t.id), g.default.open(t.id, o), o === K.GuildSettingsSections.ROLE_SUBSCRIPTIONS && (0, A.announceDeleteTemplateChannels)(t.id)
        };
        return (0, s.jsxs)("div", {
            className: Q.container,
            children: [(0, s.jsxs)("div", {
                className: Q.header,
                children: [i ? (0, s.jsx)(V.default, {
                    guild: t,
                    size: 16,
                    className: Q.rowIconV2
                }) : (0, s.jsx)(k.default, {
                    guild: t,
                    size: 20,
                    className: Q.rowIcon
                }), (0, s.jsx)(d.Text, {
                    variant: "text-md/bold",
                    color: "header-primary",
                    lineClamp: 1,
                    children: t.name
                })]
            }), (0, s.jsx)(en, {
                guild: t
            }), r ? (0, s.jsxs)("div", {
                className: Q.footer,
                children: [(0, s.jsx)(F.default, {
                    className: Q.infoIcon
                }), (0, s.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: X.default.Messages.GUILD_POPOUT_INVITES_PAUSED.format({
                        onClick: () => {
                            n(), g.default.open(t.id, K.GuildSettingsSections.INSTANT_INVITES)
                        }
                    })
                })]
            }) : null, a ? (0, s.jsxs)("div", {
                className: Q.footer,
                children: [(0, s.jsx)(F.default, {
                    className: Q.infoIcon
                }), (0, s.jsx)(d.Text, {
                    color: "text-muted",
                    variant: "text-xs/medium",
                    children: X.default.Messages.GUILD_POPOUT_VIEWING_AS_ROLES.format({
                        onClick: () => {
                            n(), l()
                        }
                    })
                })]
            }) : null]
        })
    }(i = r || (r = {})).HANGOUT = "hangout", i.EMBEDDED_ACTIVITY = "embedded-activity", i.EVENT = "event", i.GAMING = "gaming"
}