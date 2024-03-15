function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        transitionToGuildFromEventInvite: function() {
            return en
        },
        default: function() {
            return ei
        }
    }), n("70102");
    var i = n("597755"),
        s = n.n(i),
        r = n("759843"),
        a = n("742270"),
        o = n("815157"),
        l = n("391679"),
        u = n("872717"),
        d = n("913144"),
        c = n("599417"),
        f = n("333805"),
        _ = n("427953"),
        E = n("644223"),
        h = n("523086"),
        g = n("263901"),
        m = n("677315"),
        p = n("233322"),
        S = n("157186"),
        v = n("290886"),
        T = n("374021"),
        I = n("398604"),
        A = n("704341"),
        C = n("9294"),
        y = n("487946"),
        N = n("258158"),
        R = n("877275"),
        O = n("393414"),
        D = n("716214"),
        P = n("233069"),
        L = n("271938"),
        M = n("42203"),
        b = n("923959"),
        U = n("26989"),
        w = n("305961"),
        k = n("88093"),
        V = n("330154"),
        G = n("957255"),
        F = n("697218"),
        x = n("599110"),
        B = n("718517"),
        H = n("840707"),
        Y = n("65300"),
        K = n("851387"),
        j = n("990766"),
        W = n("49111"),
        z = n("724210"),
        q = n("706530"),
        X = n("91366"),
        Q = n("837979");
    let Z = "invite",
        J = null;

    function $(e) {
        var t, n, i;
        let s = {};
        switch (e.target_type) {
            case X.InviteTargetTypes.STREAM:
                s.targetType = e.target_type, s.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id;
                break;
            case X.InviteTargetTypes.EMBEDDED_APPLICATION:
                s.targetType = e.target_type, s.targetApplicationId = null === (i = e.target_application) || void 0 === i ? void 0 : i.id;
                break;
            case X.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE:
                s.targetType = e.target_type
        }
        let r = null != w.default.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id),
            a = !r || e.new_member;
        return a && null != e.channel && (0, P.isGuildTextChannelType)(e.channel.type) && (s.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (s.guildScheduledEvent = e.guild_scheduled_event), s
    }

    function ee(e) {
        let {
            guildId: t,
            channel: i,
            options: s,
            analyticsLocations: r = []
        } = e, {
            type: a
        } = i, o = function(e, t, n) {
            var i, s;
            if ((null == n ? void 0 : n.targetType) === X.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE) return z.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
            if ((null == n ? void 0 : n.targetType) == null && !P.GUILD_VOCAL_CHANNEL_TYPES.has(t.type) && ((0, m.canSeeGuildHome)(e) || (0, v.canSeeOnboardingHome)(e))) return z.StaticChannelRoute.GUILD_HOME;
            let r = M.default.getChannel(t.id);
            return G.default.can(W.Permissions.VIEW_CHANNEL, r) ? t.id : null !== (s = null === (i = b.default.getDefaultChannel(e, !0, W.Permissions.CREATE_INSTANT_INVITE)) || void 0 === i ? void 0 : i.id) && void 0 !== s ? s : t.id
        }(t, i, s), {
            targetUserId: l,
            targetType: u,
            targetApplicationId: d
        } = null != s ? s : {}, c = a === W.ChannelTypes.GUILD_STAGE_VOICE, f = W.Routes.CHANNEL(t, o);
        P.GUILD_VOCAL_CHANNEL_TYPES.has(a) ? (0, g.addPostConnectionCallback)(() => {
            n.el("987317").then(n.bind(n, "987317")).then(e => {
                let {
                    default: n
                } = e, a = () => {
                    if (c) {
                        (0, D.connectAndOpen)(i instanceof P.ChannelRecordBase ? i : (0, P.createChannelRecord)(i)), (0, O.transitionTo)(f);
                        return
                    }
                    n.selectVoiceChannel(o), u === X.InviteTargetTypes.STREAM && null != l && j.watchStreamAndTransitionToStream({
                        streamType: q.StreamTypes.GUILD,
                        ownerId: l,
                        guildId: t,
                        channelId: o
                    }), u === X.InviteTargetTypes.EMBEDDED_APPLICATION && null != d && ((0, O.transitionTo)(W.Routes.CHANNEL(null != t ? t : W.ME, o)), (0, E.default)(o, d, r, null == s ? void 0 : s.intent))
                };
                (0, S.shouldShowMembershipVerificationGate)(t, [w.default, k.default, F.default, U.default]) ? (0, p.openMemberVerificationModal)(t, a) : a()
            })
        }) : (0, _.isActivityInTextSupportedForChannelType)(a) && u === X.InviteTargetTypes.EMBEDDED_APPLICATION && null != d && ((0, O.transitionTo)(W.Routes.CHANNEL(null != t ? t : W.ME, o)), (0, E.default)(o, d, r, null == s ? void 0 : s.intent)), (function(e, t) {
            let {
                type: n
            } = e, {
                transitionTo: i,
                welcomeModalChannelId: s,
                guildScheduledEvent: r
            } = null != t ? t : {}, a = n === W.ChannelTypes.GUILD_STAGE_VOICE, o = {
                navigationReplace: !0
            };
            return null != s && (o.welcomeModalChannelId = s), a && (o.state = Q.STAGE_INVITE_STATE_KEY), null != r && (o.guildScheduledEventId = r.id), e => null != i ? i(e, o, R.default.INVITE_ACCEPT) : (0, O.transitionTo)(e, o, R.default.INVITE_ACCEPT)
        })(i, s)(f)
    }
    let et = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            M.default.addConditionalChangeListener(() => {
                var i;
                let s = M.default.getChannel(e),
                    r = F.default.getCurrentUser();
                return null == s || null == r || (!s.nsfw || !!r.nsfwAllowed) && ((null == t ? void 0 : t.guildScheduledEvent) != null ? (! function(e) {
                    let {
                        guildScheduledEvent: t,
                        welcomeModalChannelId: n
                    } = e;
                    null != t && (0, g.addPostConnectionCallback)(() => {
                        let e = {
                            guildScheduledEventId: t.id
                        };
                        null != n && (e.welcomeModalChannelId = n), (0, T.transitionToEventDetailsFromInvite)(t, e)
                    })
                }(t), !1) : (ee({
                    guildId: null !== (i = s.getGuildId()) && void 0 !== i ? i : W.ME,
                    channel: s,
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
            (0, I.isGuildScheduledEventActive)(e) && null != n ? et(n) : await K.default.transitionToGuildSync(t)
        };
    var ei = {
        resolveInvite: function e(t, n, i) {
            return d.default.isDispatching() ? Promise.resolve().then(() => e(t, n, i)) : (d.default.dispatch({
                type: "INVITE_RESOLVE",
                code: t
            }), (0, y.default)(t, n, i).then(e => {
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
                } = await u.default.post({
                    url: W.Endpoints.INSTANT_INVITES(e),
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
                }), new c.default(t)
            }
        },
        async mobileCreateInvite(e, t) {
            let n = V.default.getInvite(e.id);
            if (null != n && !n.isExpired()) return n.code;
            let i = {
                    max_age: B.default.Seconds.DAY
                },
                s = await this.createInvite(e.id, i, t).catch(() => d.default.dispatch({
                    type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
                }));
            return null == s ? void 0 : s.code
        },
        async getAllFriendInvites(e) {
            await new Promise(e => d.default.wait(() => e(null)));
            let t = V.default.getFriendInvitesFetching();
            if (t) return null != J ? J.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
            J = u.default.get({
                url: W.Endpoints.FRIEND_INVITES,
                context: {
                    location: e
                }
            }), d.default.dispatch({
                type: "FRIEND_INVITES_FETCH_REQUEST",
                requestedAt: new Date
            });
            let {
                body: n
            } = await J;
            return J = null, d.default.dispatch({
                type: "FRIEND_INVITES_FETCH_RESPONSE",
                receivedAt: new Date,
                invites: n
            }), n
        },
        createFriendInvite: (e, t) => (d.default.dispatch({
            type: "FRIEND_INVITE_CREATE_REQUEST"
        }), u.default.post({
            url: W.Endpoints.FRIEND_INVITES,
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
        }), u.default.delete({
            url: W.Endpoints.FRIEND_INVITES,
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
        revokeFriendInvite: e => u.default.delete({
            url: W.Endpoints.INVITE(e)
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
                url: W.Endpoints.INVITE(t),
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.INVITE_REVOKE,
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
            var t, i, s;
            let {
                inviteKey: r,
                context: a,
                callback: o,
                skipOnboarding: l
            } = e, c = (0, C.parseExtraDataFromInviteKey)(r), _ = c.baseCode, E = L.default.getSessionId();
            let h = (i = a, s = c, {
                    ...i,
                    invite_guild_scheduled_event_id: s.guildScheduledEventId
                }),
                g = F.default.getCurrentUser();
            return null !== (t = null == g ? void 0 : g.hasFlag(W.UserFlags.QUARANTINED)) && void 0 !== t && t ? ((0, N.default)(), new Promise((e, t) => t(Error()))) : (d.default.dispatch({
                type: "INVITE_ACCEPT",
                code: _
            }), u.default.post({
                url: W.Endpoints.INVITE(_),
                context: h,
                oldFormErrors: !0,
                body: {
                    session_id: E
                }
            }).then(async e => {
                var t, i;
                d.default.dispatch({
                    type: "INVITE_ACCEPT_SUCCESS",
                    invite: e.body,
                    code: _
                });
                let s = I.default.getGuildScheduledEvent(c.guildScheduledEventId),
                    r = {
                        ...e.body,
                        guild_scheduled_event: s
                    },
                    a = null !== (i = null == r ? void 0 : r.guild_id) && void 0 !== i ? i : null == r ? void 0 : null === (t = r.guild) || void 0 === t ? void 0 : t.id;
                if (!l && null != a && r.new_member) {
                    let {
                        default: e
                    } = await n.el("937692").then(n.bind(n, "937692"));
                    await e({
                        guildId: a
                    })
                }
                return null == o || o(r), e.body
            }, e => {
                var t, n;
                throw d.default.dispatch({
                    type: "INVITE_ACCEPT_FAILURE",
                    code: _,
                    error: {
                        message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                        code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                    }
                }), new f.default(e)
            }))
        },
        acceptInviteAndTransitionToInviteChannel(e) {
            let {
                inviteKey: t,
                context: n,
                analyticsLocations: i,
                callback: s,
                skipOnboarding: r
            } = e;
            return this.acceptInvite({
                inviteKey: t,
                context: n,
                skipOnboarding: r,
                callback: e => {
                    if (null != e.channel) {
                        let t = $(e);
                        et(e.channel.id, t, null != i ? i : [])
                    }
                    null != s && s(e)
                }
            })
        },
        transitionToInvite(e, t) {
            var n, i, s;
            let {
                channel: r,
                guild: a
            } = e;
            if (null != a && (null === (n = a.features) || void 0 === n ? void 0 : n.includes(W.GuildFeatures.HUB))) {
                A.default.onOpenHubInvite(e);
                return
            }
            if (null != a && (null === (i = a.features) || void 0 === i ? void 0 : i.includes(W.GuildFeatures.COMMUNITY)) && (null === (s = a.features) || void 0 === s ? void 0 : s.includes(W.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !a.features.includes(W.GuildFeatures.PREVIEW_ENABLED)) {
                (0, O.transitionTo)(W.Routes.GUILD_MEMBER_VERIFICATION(a.id, e.code));
                return
            }
            if (null == r) return;
            let o = $(e);
            null != t && (o.transitionTo = t);
            let l = null != a ? a.id : W.ME;
            ee({
                guildId: l,
                channel: r,
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
            h.default.openNativeAppModal(e, W.RPCCommands.INVITE_BROWSER)
        },
        openApp(e, t, n, i, r) {
            var u, c;
            let f;
            let _ = null != e ? (0, C.parseExtraDataFromInviteKey)(e) : null,
                E = null == _ ? void 0 : _.baseCode;
            if (d.default.dispatch({
                    type: "INVITE_APP_OPENING",
                    code: e
                }), null != s.ua && s.ua.toLowerCase().indexOf("googlebot") > -1) {
                d.default.dispatch({
                    type: "INVITE_APP_NOT_OPENED",
                    code: e
                });
                return
            }
            if ((null === (u = s.os) || void 0 === u ? void 0 : u.family) === "Android" || (null === (c = s.os) || void 0 === c ? void 0 : c.family) === "iOS") {
                let e = null != E ? (0, a.getInviteDynamicLinkTemplate)(E) : (0, a.getDefaultDynamicLinkTemplate)(),
                    t = (0, o.generateAttemptId)();
                f = (0, o.default)(e, {
                    utmSource: 2 === r ? "friend_invite" : Z,
                    fingerprint: n,
                    username: i,
                    attemptId: t,
                    event: null == _ ? void 0 : _.guildScheduledEventId,
                    iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(E)
                }), x.default.track(W.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, l.maybeExtractId)(n),
                    attempt_id: t,
                    source: Z,
                    invite_code: E
                })
            } else "#" === (f = null != t ? W.Routes.INVITE_PROXY(t) : "")[0] && (f = f.slice(1)), f = "discord://".concat(f);
            Y.default.launch(f, t => {
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