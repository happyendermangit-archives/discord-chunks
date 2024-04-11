function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        transitionToGuildFromEventInvite: function() {
            return en
        }
    }), n("411104");
    var i = n("525654"),
        r = n.n(i),
        s = n("990547"),
        a = n("39612"),
        o = n("271579"),
        l = n("756647"),
        u = n("544891"),
        d = n("570140"),
        _ = n("479531"),
        c = n("34756"),
        E = n("867176"),
        I = n("839426"),
        T = n("625128"),
        f = n("972830"),
        S = n("859802"),
        A = n("305325"),
        h = n("281956"),
        m = n("931261"),
        N = n("15274"),
        O = n("924301"),
        p = n("82085"),
        R = n("264229"),
        C = n("652898"),
        g = n("895886"),
        L = n("143816"),
        D = n("703656"),
        v = n("922482"),
        M = n("131704"),
        y = n("314897"),
        P = n("592125"),
        U = n("984933"),
        b = n("271383"),
        G = n("430824"),
        w = n("607744"),
        k = n("341165"),
        B = n("496675"),
        F = n("594174"),
        V = n("626135"),
        x = n("70956"),
        H = n("573261"),
        Y = n("954824"),
        j = n("749210"),
        W = n("872810"),
        K = n("981631"),
        z = n("176505"),
        X = n("70722"),
        Q = n("245335"),
        q = n("157925");
    let J = "invite",
        Z = null;

    function $(e) {
        var t, n, i;
        let r = {};
        switch (e.target_type) {
            case Q.InviteTargetTypes.STREAM:
                r.targetType = e.target_type, r.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id;
                break;
            case Q.InviteTargetTypes.EMBEDDED_APPLICATION:
                r.targetType = e.target_type, r.targetApplicationId = null === (i = e.target_application) || void 0 === i ? void 0 : i.id;
                break;
            case Q.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE:
                r.targetType = e.target_type
        }
        return (!(null != G.default.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, M.isGuildTextChannelType)(e.channel.type) && (r.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (r.guildScheduledEvent = e.guild_scheduled_event), r
    }

    function ee(e) {
        let {
            guildId: t,
            channel: i,
            options: r,
            analyticsLocations: s = []
        } = e, {
            type: a
        } = i, o = P.default.getChannel(i.id), l = function(e, t, n) {
            var i, r;
            if ((null == n ? void 0 : n.targetType) === Q.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE) return z.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
            if ((null == n ? void 0 : n.targetType) == null && !M.GUILD_VOCAL_CHANNEL_TYPES.has(t.type) && ((0, S.canSeeGuildHome)(e) || (0, m.canSeeOnboardingHome)(e))) return z.StaticChannelRoute.GUILD_HOME;
            let s = P.default.getChannel(t.id);
            return B.default.can(K.Permissions.VIEW_CHANNEL, s) ? t.id : null !== (r = null === (i = U.default.getDefaultChannel(e, !0, K.Permissions.CREATE_INSTANT_INVITE)) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : t.id
        }(t, i, r), {
            targetUserId: u,
            targetType: d,
            targetApplicationId: _
        } = null != r ? r : {}, c = a === K.ChannelTypes.GUILD_STAGE_VOICE, T = K.Routes.CHANNEL(t, l);
        M.GUILD_VOCAL_CHANNEL_TYPES.has(a) ? (0, f.addPostConnectionCallback)(() => {
            Promise.resolve().then(n.bind(n, "287734")).then(e => {
                let {
                    default: n
                } = e, a = () => {
                    if (c) {
                        (0, v.connectAndOpen)(i instanceof M.ChannelRecordBase ? i : (0, M.createChannelRecord)(i)), (0, D.transitionTo)(T);
                        return
                    }
                    n.selectVoiceChannel(l), d === Q.InviteTargetTypes.STREAM && null != u && W.watchStreamAndTransitionToStream({
                        streamType: X.StreamTypes.GUILD,
                        ownerId: u,
                        guildId: t,
                        channelId: l
                    }), d === Q.InviteTargetTypes.EMBEDDED_APPLICATION && null != _ && ((0, D.transitionTo)(K.Routes.CHANNEL(null != t ? t : K.ME, l)), (0, I.default)(l, _, s, null == r ? void 0 : r.intent))
                };
                (0, h.shouldShowMembershipVerificationGate)(t, [G.default, w.default, F.default, b.default]) ? (0, A.openMemberVerificationModal)(t, a) : a()
            })
        }) : (0, E.isActivityInTextSupportedForChannel)(o) && d === Q.InviteTargetTypes.EMBEDDED_APPLICATION && null != _ && ((0, D.transitionTo)(K.Routes.CHANNEL(null != t ? t : K.ME, l)), (0, I.default)(l, _, s, null == r ? void 0 : r.intent)), (function(e, t) {
            let {
                type: n
            } = e, {
                transitionTo: i,
                welcomeModalChannelId: r,
                guildScheduledEvent: s
            } = null != t ? t : {}, a = n === K.ChannelTypes.GUILD_STAGE_VOICE, o = {
                navigationReplace: !0
            };
            return null != r && (o.welcomeModalChannelId = r), a && (o.state = q.STAGE_INVITE_STATE_KEY), null != s && (o.guildScheduledEventId = s.id), e => null != i ? i(e, o, L.default.INVITE_ACCEPT) : (0, D.transitionTo)(e, o, L.default.INVITE_ACCEPT)
        })(i, r)(T)
    }
    let et = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            P.default.addConditionalChangeListener(() => {
                var i;
                let r = P.default.getChannel(e),
                    s = F.default.getCurrentUser();
                return null == r || null == s || (!r.nsfw || !!s.nsfwAllowed) && ((null == t ? void 0 : t.guildScheduledEvent) != null ? (! function(e) {
                    let {
                        guildScheduledEvent: t,
                        welcomeModalChannelId: n
                    } = e;
                    null != t && (0, f.addPostConnectionCallback)(() => {
                        let e = {
                            guildScheduledEventId: t.id
                        };
                        null != n && (e.welcomeModalChannelId = n), (0, N.transitionToEventDetailsFromInvite)(t, e)
                    })
                }(t), !1) : (ee({
                    guildId: null !== (i = r.getGuildId()) && void 0 !== i ? i : K.ME,
                    channel: r,
                    options: t,
                    analyticsLocations: n
                }), !1))
            })
        },
        en = async e => {
            let {
                guild_id: t,
                channel_id: n
            } = e;
            (0, O.isGuildScheduledEventActive)(e) && null != n ? et(n) : await j.default.transitionToGuildSync(t)
        };
    t.default = {
        resolveInvite: function e(t, n, i) {
            return d.default.isDispatching() ? Promise.resolve().then(() => e(t, n, i)) : (d.default.dispatch({
                type: "INVITE_RESOLVE",
                code: t
            }), (0, C.default)(t, n, i).then(e => {
                let {
                    invite: t,
                    code: n,
                    banned: i
                } = e;
                return null != t ? d.default.dispatch({
                    type: "INVITE_RESOLVE_SUCCESS",
                    invite: t,
                    code: n
                }) : d.default.dispatch({
                    type: "INVITE_RESOLVE_FAILURE",
                    code: n,
                    banned: i
                }), {
                    invite: t,
                    code: n
                }
            }))
        },
        getInviteContext: (e, t) => ({
            location: e,
            location_guild_id: null != t.guild ? t.guild.id : void 0,
            location_channel_id: null != t.channel ? t.channel.id : void 0,
            location_channel_type: null != t.channel ? t.channel.type : void 0
        }),
        async createInvite(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0;
            try {
                let {
                    body: i
                } = await u.HTTP.post({
                    url: K.Endpoints.INSTANT_INVITES(e),
                    body: t,
                    context: {
                        location: n
                    }
                });
                return d.default.dispatch({
                    type: "INSTANT_INVITE_CREATE_SUCCESS",
                    channelId: e,
                    invite: i
                }), i
            } catch (t) {
                throw d.default.dispatch({
                    type: "INSTANT_INVITE_CREATE_FAILURE",
                    channelId: e
                }), new _.default(t)
            }
        },
        async mobileCreateInvite(e, t) {
            let n = k.default.getInvite(e.id);
            if (null != n && !n.isExpired()) return n.code;
            let i = {
                    max_age: x.default.Seconds.DAY
                },
                r = await this.createInvite(e.id, i, t).catch(() => d.default.dispatch({
                    type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
                }));
            return null == r ? void 0 : r.code
        },
        async getAllFriendInvites(e) {
            if (await new Promise(e => d.default.wait(() => e(null))), k.default.getFriendInvitesFetching()) return null != Z ? Z.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
            Z = u.HTTP.get({
                url: K.Endpoints.FRIEND_INVITES,
                context: {
                    location: e
                }
            }), d.default.dispatch({
                type: "FRIEND_INVITES_FETCH_REQUEST",
                requestedAt: new Date
            });
            let {
                body: t
            } = await Z;
            return Z = null, d.default.dispatch({
                type: "FRIEND_INVITES_FETCH_RESPONSE",
                receivedAt: new Date,
                invites: t
            }), t
        },
        createFriendInvite: (e, t) => (d.default.dispatch({
            type: "FRIEND_INVITE_CREATE_REQUEST"
        }), u.HTTP.post({
            url: K.Endpoints.FRIEND_INVITES,
            body: null != e ? e : {},
            context: {
                location: t
            }
        }).then(e => {
            let {
                body: t
            } = e;
            return d.default.dispatch({
                type: "FRIEND_INVITE_CREATE_SUCCESS",
                invite: t
            }), t
        }, e => {
            throw d.default.dispatch({
                type: "FRIEND_INVITE_CREATE_FAILURE",
                error: e
            }), e
        })),
        revokeFriendInvites: () => (d.default.dispatch({
            type: "FRIEND_INVITE_REVOKE_REQUEST"
        }), u.HTTP.del({
            url: K.Endpoints.FRIEND_INVITES,
            context: {
                location
            }
        }).then(e => {
            let {
                body: t
            } = e;
            d.default.dispatch({
                type: "FRIEND_INVITE_REVOKE_SUCCESS",
                invites: t
            })
        })),
        revokeFriendInvite: e => u.HTTP.del({
            url: K.Endpoints.INVITE(e)
        }),
        clearInviteFromStore(e) {
            d.default.dispatch({
                type: "INSTANT_INVITE_CLEAR",
                channelId: e
            })
        },
        revokeInvite(e) {
            let {
                code: t,
                channel: n
            } = e;
            return H.default.delete({
                url: K.Endpoints.INVITE(t),
                oldFormErrors: !0,
                trackedActionData: {
                    event: s.NetworkActionNames.INVITE_REVOKE,
                    properties: {
                        uses: e.uses,
                        max_uses: e.maxUses,
                        max_age: e.maxAge,
                        invite_type: e.type
                    }
                }
            }).then(() => {
                d.default.dispatch({
                    type: "INSTANT_INVITE_REVOKE_SUCCESS",
                    code: t,
                    channelId: n.id
                })
            })
        },
        acceptInvite(e) {
            var t, i, r;
            let {
                inviteKey: s,
                context: a,
                callback: o,
                skipOnboarding: l
            } = e, _ = (0, R.parseExtraDataFromInviteKey)(s), E = _.baseCode, I = y.default.getSessionId();
            let T = (i = a, r = _, {
                    ...i,
                    invite_guild_scheduled_event_id: r.guildScheduledEventId
                }),
                f = F.default.getCurrentUser();
            return null !== (t = null == f ? void 0 : f.hasFlag(K.UserFlags.QUARANTINED)) && void 0 !== t && t ? ((0, g.default)(), new Promise((e, t) => t(Error()))) : (d.default.dispatch({
                type: "INVITE_ACCEPT",
                code: E
            }), u.HTTP.post({
                url: K.Endpoints.INVITE(E),
                context: T,
                oldFormErrors: !0,
                body: {
                    session_id: I
                }
            }).then(async e => {
                var t, i;
                d.default.dispatch({
                    type: "INVITE_ACCEPT_SUCCESS",
                    invite: e.body,
                    code: E
                });
                let r = O.default.getGuildScheduledEvent(_.guildScheduledEventId),
                    s = {
                        ...e.body,
                        guild_scheduled_event: r
                    },
                    a = null !== (i = null == s ? void 0 : s.guild_id) && void 0 !== i ? i : null == s ? void 0 : null === (t = s.guild) || void 0 === t ? void 0 : t.id;
                if (!l && null != a && s.new_member) {
                    let {
                        default: e
                    } = await Promise.resolve().then(n.bind(n, "17181"));
                    await e({
                        guildId: a
                    })
                }
                return null == o || o(s), e.body
            }, e => {
                var t, n;
                throw d.default.dispatch({
                    type: "INVITE_ACCEPT_FAILURE",
                    code: E,
                    error: {
                        message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                        code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                    }
                }), new c.default(e)
            }))
        },
        acceptInviteAndTransitionToInviteChannel(e) {
            let {
                inviteKey: t,
                context: n,
                analyticsLocations: i,
                callback: r,
                skipOnboarding: s
            } = e;
            return this.acceptInvite({
                inviteKey: t,
                context: n,
                skipOnboarding: s,
                callback: e => {
                    if (null != e.channel) {
                        let t = $(e);
                        et(e.channel.id, t, null != i ? i : [])
                    }
                    null != r && r(e)
                }
            })
        },
        transitionToInvite(e, t) {
            var n, i, r;
            let {
                channel: s,
                guild: a
            } = e;
            if (null != a && (null === (n = a.features) || void 0 === n ? void 0 : n.includes(K.GuildFeatures.HUB))) {
                p.default.onOpenHubInvite(e);
                return
            }
            if (null != a && (null === (i = a.features) || void 0 === i ? void 0 : i.includes(K.GuildFeatures.COMMUNITY)) && (null === (r = a.features) || void 0 === r ? void 0 : r.includes(K.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !a.features.includes(K.GuildFeatures.PREVIEW_ENABLED)) {
                (0, D.transitionTo)(K.Routes.GUILD_MEMBER_VERIFICATION(a.id, e.code));
                return
            }
            if (null == s) return;
            let o = $(e);
            null != t && (o.transitionTo = t), ee({
                guildId: null != a ? a.id : K.ME,
                channel: s,
                options: o
            })
        },
        transitionToInviteSync(e, t, n) {
            if (null != e.channel) {
                let i = $(e);
                this.transitionToInviteChannelSync(e.channel.id, {
                    ...i,
                    intent: n,
                    transitionTo: t
                })
            }
        },
        openNativeAppModal(e) {
            T.default.openNativeAppModal(e, K.RPCCommands.INVITE_BROWSER)
        },
        openApp(e, t, n, i, s) {
            var u, _;
            let c;
            let E = null != e ? (0, R.parseExtraDataFromInviteKey)(e) : null,
                I = null == E ? void 0 : E.baseCode;
            if (d.default.dispatch({
                    type: "INVITE_APP_OPENING",
                    code: e
                }), null != r().ua && r().ua.toLowerCase().indexOf("googlebot") > -1) {
                d.default.dispatch({
                    type: "INVITE_APP_NOT_OPENED",
                    code: e
                });
                return
            }
            if ((null === (u = r().os) || void 0 === u ? void 0 : u.family) === "Android" || (null === (_ = r().os) || void 0 === _ ? void 0 : _.family) === "iOS") {
                let e = null != I ? (0, a.getInviteDynamicLinkTemplate)(I) : (0, a.getDefaultDynamicLinkTemplate)(),
                    t = (0, o.generateAttemptId)();
                c = (0, o.default)(e, {
                    utmSource: 2 === s ? "friend_invite" : J,
                    fingerprint: n,
                    username: i,
                    attemptId: t,
                    event: null == E ? void 0 : E.guildScheduledEventId,
                    iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(I)
                }), V.default.track(K.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, l.maybeExtractId)(n),
                    attempt_id: t,
                    source: J,
                    invite_code: I
                })
            } else "#" === (c = null != t ? K.Routes.INVITE_PROXY(t) : "")[0] && (c = c.slice(1)), c = "discord://".concat(c);
            Y.default.launch(c, t => {
                d.default.dispatch(t ? {
                    type: "INVITE_APP_OPENED",
                    code: e
                } : {
                    type: "INVITE_APP_NOT_OPENED",
                    code: e
                })
            })
        },
        transitionToInviteChannelSync: et
    }
}