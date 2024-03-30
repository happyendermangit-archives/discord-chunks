function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        transitionToGuildFromEventInvite: function() {
            return es
        }
    });
    var r, o = n("525654"),
        i = n.n(o),
        a = n("383959"),
        u = n("99109"),
        s = n("296890"),
        l = n("732268"),
        c = n("967888"),
        f = n("629815"),
        d = n("375314"),
        _ = n("445515"),
        E = n("987351"),
        p = n("892819"),
        m = n("856469"),
        y = n("834169"),
        I = n("924504"),
        h = n("175446"),
        O = n("654417"),
        T = n("29221"),
        S = n("118944"),
        v = n("89536"),
        g = n("850472"),
        A = n("54976"),
        b = n("439970"),
        N = n("770755"),
        R = n("989635"),
        C = n("163291"),
        P = n("104747"),
        D = n("569492"),
        L = n("217014"),
        M = n("935741"),
        U = n("29604"),
        w = n("957808"),
        k = n("306912"),
        G = n("267322"),
        B = n("594182"),
        j = n("29884"),
        F = n("208454"),
        V = n("870331"),
        H = n("388990"),
        x = n("463156"),
        Y = n("165091"),
        W = n("322997"),
        K = n("224359"),
        z = n("281767"),
        X = n("928204"),
        q = n("367965"),
        Q = n("551941"),
        J = n("886708");

    function Z(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function $(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    Z(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    Z(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function et(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function en(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var er = "invite",
        eo = null;

    function ei(e) {
        var t, n, r, o = {};
        switch (e.target_type) {
            case Q.InviteTargetTypes.STREAM:
                o.targetType = e.target_type, o.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id;
                break;
            case Q.InviteTargetTypes.EMBEDDED_APPLICATION:
                o.targetType = e.target_type, o.targetApplicationId = null === (r = e.target_application) || void 0 === r ? void 0 : r.id;
                break;
            case Q.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE:
                o.targetType = e.target_type
        }
        return (!(null != k.default.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, D.isGuildTextChannelType)(e.channel.type) && (o.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (o.guildScheduledEvent = e.guild_scheduled_event), o
    }

    function ea(e) {
        var t, r, o, i, a, u, s, l, c, f = e.guildId,
            d = e.channel,
            _ = e.options,
            m = e.analyticsLocations,
            S = void 0 === m ? [] : m,
            v = d.type,
            g = function(e, t, n) {
                if ((null == n ? void 0 : n.targetType) === Q.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE) return X.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                if ((null == n ? void 0 : n.targetType) == null && !D.GUILD_VOCAL_CHANNEL_TYPES.has(t.type) && ((0, I.canSeeGuildHome)(e) || (0, T.canSeeOnboardingHome)(e))) return X.StaticChannelRoute.GUILD_HOME;
                var r, o, i = M.default.getChannel(t.id);
                return j.default.can(z.Permissions.VIEW_CHANNEL, i) ? t.id : null !== (o = null === (r = U.default.getDefaultChannel(e, !0, z.Permissions.CREATE_INSTANT_INVITE)) || void 0 === r ? void 0 : r.id) && void 0 !== o ? o : t.id
            }(f, d, _),
            A = null != _ ? _ : {},
            b = A.targetUserId,
            N = A.targetType,
            L = A.targetApplicationId,
            B = v === z.ChannelTypes.GUILD_STAGE_VOICE,
            V = z.Routes.CHANNEL(f, g);
        D.GUILD_VOCAL_CHANNEL_TYPES.has(v) ? (0, y.addPostConnectionCallback)(function() {
            Promise.resolve().then(n.bind(n, "585949")).then(function(e) {
                var t = e.default,
                    n = function() {
                        if (B) {
                            var e, n;
                            (0, P.connectAndOpen)((e = d, null != (n = D.ChannelRecordBase) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : e instanceof n) ? d : (0, D.createChannelRecord)(d)), (0, C.transitionTo)(V);
                            return
                        }
                        t.selectVoiceChannel(g), N === Q.InviteTargetTypes.STREAM && null != b && K.watchStreamAndTransitionToStream({
                            streamType: q.StreamTypes.GUILD,
                            ownerId: b,
                            guildId: f,
                            channelId: g
                        }), N === Q.InviteTargetTypes.EMBEDDED_APPLICATION && null != L && ((0, C.transitionTo)(z.Routes.CHANNEL(null != f ? f : z.ME, g)), (0, p.default)(g, L, S, null == _ ? void 0 : _.intent))
                    };
                (0, O.shouldShowMembershipVerificationGate)(f, [k.default, G.default, F.default, w.default]) ? (0, h.openMemberVerificationModal)(f, n) : n()
            })
        }) : (0, E.isActivityInTextSupportedForChannelType)(v) && N === Q.InviteTargetTypes.EMBEDDED_APPLICATION && null != L && ((0, C.transitionTo)(z.Routes.CHANNEL(null != f ? f : z.ME, g)), (0, p.default)(g, L, S, null == _ ? void 0 : _.intent)), (t = d, r = _, o = t.type, a = (i = null != r ? r : {}).transitionTo, u = i.welcomeModalChannelId, s = i.guildScheduledEvent, l = o === z.ChannelTypes.GUILD_STAGE_VOICE, c = {
            navigationReplace: !0
        }, null != u && (c.welcomeModalChannelId = u), l && (c.state = J.STAGE_INVITE_STATE_KEY), null != s && (c.guildScheduledEventId = s.id), function(e) {
            return null != a ? a(e, c, R.default.INVITE_ACCEPT) : (0, C.transitionTo)(e, c, R.default.INVITE_ACCEPT)
        })(V)
    }
    var eu = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        M.default.addConditionalChangeListener(function() {
            var r, o, i, a, u = M.default.getChannel(e),
                s = F.default.getCurrentUser();
            if (null == u || null == s) return !0;
            if (u.nsfw && !s.nsfwAllowed) return !1;
            if ((null == t ? void 0 : t.guildScheduledEvent) != null) {
                ;
                return o = (r = t).guildScheduledEvent, i = r.welcomeModalChannelId, null != o && (0, y.addPostConnectionCallback)(function() {
                    var e = {
                        guildScheduledEventId: o.id
                    };
                    null != i && (e.welcomeModalChannelId = i), (0, S.transitionToEventDetailsFromInvite)(o, e)
                }), !1
            }
            return ea({
                guildId: null !== (a = u.getGuildId()) && void 0 !== a ? a : z.ME,
                channel: u,
                options: t,
                analyticsLocations: n
            }), !1
        })
    };
    var es = (r = $(function(e) {
        var t, n;
        return en(this, function(r) {
            switch (r.label) {
                case 0:
                    if (t = e.guild_id, n = e.channel_id, !((0, v.isGuildScheduledEventActive)(e) && null != n)) return [3, 1];
                    return eu(n), [3, 3];
                case 1:
                    return [4, W.default.transitionToGuildSync(t)];
                case 2:
                    r.sent(), r.label = 3;
                case 3:
                    return [2]
            }
        })
    }), function(e) {
        return r.apply(this, arguments)
    });
    t.default = {
        resolveInvite: function e(t, n, r) {
            return f.default.isDispatching() ? Promise.resolve().then(function() {
                return e(t, n, r)
            }) : (f.default.dispatch({
                type: "INVITE_RESOLVE",
                code: t
            }), (0, b.default)(t, n, r).then(function(e) {
                var t = e.invite,
                    n = e.code,
                    r = e.banned;
                return null != t ? f.default.dispatch({
                    type: "INVITE_RESOLVE_SUCCESS",
                    invite: t,
                    code: n
                }) : f.default.dispatch({
                    type: "INVITE_RESOLVE_FAILURE",
                    code: n,
                    banned: r
                }), {
                    invite: t,
                    code: n
                }
            }))
        },
        getInviteContext: function(e, t) {
            return {
                location: e,
                location_guild_id: null != t.guild ? t.guild.id : void 0,
                location_channel_id: null != t.channel ? t.channel.id : void 0,
                location_channel_type: null != t.channel ? t.channel.type : void 0
            }
        },
        createInvite: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0;
            return $(function() {
                var r, o;
                return en(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 2, , 3]), [4, c.HTTP.post({
                                url: z.Endpoints.INSTANT_INVITES(e),
                                body: t,
                                context: {
                                    location: n
                                }
                            })];
                        case 1:
                            return r = i.sent().body, f.default.dispatch({
                                type: "INSTANT_INVITE_CREATE_SUCCESS",
                                channelId: e,
                                invite: r
                            }), [2, r];
                        case 2:
                            throw o = i.sent(), f.default.dispatch({
                                type: "INSTANT_INVITE_CREATE_FAILURE",
                                channelId: e
                            }), new d.default(o);
                        case 3:
                            return [2]
                    }
                })
            })()
        },
        mobileCreateInvite: function(e, t) {
            return $(function() {
                var n, r, o;
                return en(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (null != (n = B.default.getInvite(e.id)) && !n.isExpired()) return [2, n.code];
                            return r = {
                                max_age: H.default.Seconds.DAY
                            }, [4, this.createInvite(e.id, r, t).catch(function() {
                                return f.default.dispatch({
                                    type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
                                })
                            })];
                        case 1:
                            return [2, null == (o = i.sent()) ? void 0 : o.code]
                    }
                })
            }).apply(this)
        },
        getAllFriendInvites: function(e) {
            return $(function() {
                var t;
                return en(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, new Promise(function(e) {
                                return f.default.wait(function() {
                                    return e(null)
                                })
                            })];
                        case 1:
                            if (n.sent(), B.default.getFriendInvitesFetching()) {
                                if (null != eo) return [2, eo.then(function(e) {
                                    return e.body
                                })];
                                return [2, Promise.reject(Error("Invalid friend invite fetch request"))]
                            }
                            return eo = c.HTTP.get({
                                url: z.Endpoints.FRIEND_INVITES,
                                context: {
                                    location: e
                                }
                            }), f.default.dispatch({
                                type: "FRIEND_INVITES_FETCH_REQUEST",
                                requestedAt: new Date
                            }), [4, eo];
                        case 2:
                            return t = n.sent().body, eo = null, f.default.dispatch({
                                type: "FRIEND_INVITES_FETCH_RESPONSE",
                                receivedAt: new Date,
                                invites: t
                            }), [2, t]
                    }
                })
            })()
        },
        createFriendInvite: function(e, t) {
            return f.default.dispatch({
                type: "FRIEND_INVITE_CREATE_REQUEST"
            }), c.HTTP.post({
                url: z.Endpoints.FRIEND_INVITES,
                body: null != e ? e : {},
                context: {
                    location: t
                }
            }).then(function(e) {
                var t = e.body;
                return f.default.dispatch({
                    type: "FRIEND_INVITE_CREATE_SUCCESS",
                    invite: t
                }), t
            }, function(e) {
                throw f.default.dispatch({
                    type: "FRIEND_INVITE_CREATE_FAILURE",
                    error: e
                }), e
            })
        },
        revokeFriendInvites: function() {
            return f.default.dispatch({
                type: "FRIEND_INVITE_REVOKE_REQUEST"
            }), c.HTTP.del({
                url: z.Endpoints.FRIEND_INVITES,
                context: {
                    location: location
                }
            }).then(function(e) {
                var t = e.body;
                f.default.dispatch({
                    type: "FRIEND_INVITE_REVOKE_SUCCESS",
                    invites: t
                })
            })
        },
        revokeFriendInvite: function(e) {
            return c.HTTP.del({
                url: z.Endpoints.INVITE(e)
            })
        },
        clearInviteFromStore: function(e) {
            f.default.dispatch({
                type: "INSTANT_INVITE_CLEAR",
                channelId: e
            })
        },
        revokeInvite: function(e) {
            var t = e.code,
                n = e.channel;
            return x.default.delete({
                url: z.Endpoints.INVITE(t),
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.INVITE_REVOKE,
                    properties: {
                        uses: e.uses,
                        max_uses: e.maxUses,
                        max_age: e.maxAge,
                        invite_type: e.type
                    }
                }
            }).then(function() {
                f.default.dispatch({
                    type: "INSTANT_INVITE_REVOKE_SUCCESS",
                    code: t,
                    channelId: n.id
                })
            })
        },
        acceptInvite: function(e) {
            var t, r, o, i, a = e.inviteKey,
                u = e.context,
                s = e.callback,
                l = e.skipOnboarding,
                d = (0, A.parseExtraDataFromInviteKey)(a),
                E = d.baseCode,
                p = L.default.getSessionId();
            var m = (t = u, r = d, et(ee({}, t), {
                    invite_guild_scheduled_event_id: r.guildScheduledEventId
                })),
                y = F.default.getCurrentUser();
            if (null !== (i = null == y ? void 0 : y.hasFlag(z.UserFlags.QUARANTINED)) && void 0 !== i && i) return (0, N.default)(), new Promise(function(e, t) {
                return t(Error())
            });
            return f.default.dispatch({
                type: "INVITE_ACCEPT",
                code: E
            }), c.HTTP.post({
                url: z.Endpoints.INVITE(E),
                context: m,
                oldFormErrors: !0,
                body: {
                    session_id: p
                }
            }).then((o = $(function(e) {
                var t, r, o, i, a;
                return en(this, function(u) {
                    switch (u.label) {
                        case 0:
                            if (f.default.dispatch({
                                    type: "INVITE_ACCEPT_SUCCESS",
                                    invite: e.body,
                                    code: E
                                }), r = v.default.getGuildScheduledEvent(d.guildScheduledEventId), a = null !== (i = null == (o = et(ee({}, e.body), {
                                    guild_scheduled_event: r
                                })) ? void 0 : o.guild_id) && void 0 !== i ? i : null == o ? void 0 : null === (t = o.guild) || void 0 === t ? void 0 : t.id, !(!l && null != a && o.new_member)) return [3, 3];
                            return [4, Promise.resolve().then(n.bind(n, "166603"))];
                        case 1:
                            return [4, (0, u.sent().default)({
                                guildId: a
                            })];
                        case 2:
                            u.sent(), u.label = 3;
                        case 3:
                            return null == s || s(o), [2, e.body]
                    }
                })
            }), function(e) {
                return o.apply(this, arguments)
            }), function(e) {
                var t, n;
                throw f.default.dispatch({
                    type: "INVITE_ACCEPT_FAILURE",
                    code: E,
                    error: {
                        message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                        code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                    }
                }), new _.default(e)
            })
        },
        acceptInviteAndTransitionToInviteChannel: function(e) {
            var t = e.inviteKey,
                n = e.context,
                r = e.analyticsLocations,
                o = e.callback,
                i = e.skipOnboarding;
            return this.acceptInvite({
                inviteKey: t,
                context: n,
                skipOnboarding: i,
                callback: function(e) {
                    if (null != e.channel) {
                        var t = ei(e);
                        eu(e.channel.id, t, null != r ? r : [])
                    }
                    null != o && o(e)
                }
            })
        },
        transitionToInvite: function(e, t) {
            var n, r, o, i = e.channel,
                a = e.guild;
            if (null != a && (null === (n = a.features) || void 0 === n ? void 0 : n.includes(z.GuildFeatures.HUB))) {
                g.default.onOpenHubInvite(e);
                return
            }
            if (null != a && (null === (r = a.features) || void 0 === r ? void 0 : r.includes(z.GuildFeatures.COMMUNITY)) && (null === (o = a.features) || void 0 === o ? void 0 : o.includes(z.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !a.features.includes(z.GuildFeatures.PREVIEW_ENABLED)) {
                (0, C.transitionTo)(z.Routes.GUILD_MEMBER_VERIFICATION(a.id, e.code));
                return
            }
            if (null != i) {
                var u = ei(e);
                null != t && (u.transitionTo = t), ea({
                    guildId: null != a ? a.id : z.ME,
                    channel: i,
                    options: u
                })
            }
        },
        transitionToInviteSync: function(e, t, n) {
            if (null != e.channel) {
                var r = ei(e);
                this.transitionToInviteChannelSync(e.channel.id, et(ee({}, r), {
                    intent: n,
                    transitionTo: t
                }))
            }
        },
        openNativeAppModal: function(e) {
            m.default.openNativeAppModal(e, z.RPCCommands.INVITE_BROWSER)
        },
        openApp: function(e, t, n, r, o) {
            var a, c, d, _ = null != e ? (0, A.parseExtraDataFromInviteKey)(e) : null,
                E = null == _ ? void 0 : _.baseCode;
            if (f.default.dispatch({
                    type: "INVITE_APP_OPENING",
                    code: e
                }), null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > -1) {
                f.default.dispatch({
                    type: "INVITE_APP_NOT_OPENED",
                    code: e
                });
                return
            }
            if ((null === (a = i().os) || void 0 === a ? void 0 : a.family) === "Android" || (null === (c = i().os) || void 0 === c ? void 0 : c.family) === "iOS") {
                var p = null != E ? (0, u.getInviteDynamicLinkTemplate)(E) : (0, u.getDefaultDynamicLinkTemplate)(),
                    m = (0, s.generateAttemptId)();
                d = (0, s.default)(p, {
                    utmSource: 2 === o ? "friend_invite" : er,
                    fingerprint: n,
                    username: r,
                    attemptId: m,
                    event: null == _ ? void 0 : _.guildScheduledEventId,
                    iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(E)
                }), V.default.track(z.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, l.maybeExtractId)(n),
                    attempt_id: m,
                    source: er,
                    invite_code: E
                })
            } else "#" === (d = null != t ? z.Routes.INVITE_PROXY(t) : "")[0] && (d = d.slice(1)), d = "discord://".concat(d);
            Y.default.launch(d, function(t) {
                f.default.dispatch(t ? {
                    type: "INVITE_APP_OPENED",
                    code: e
                } : {
                    type: "INVITE_APP_NOT_OPENED",
                    code: e
                })
            })
        },
        transitionToInviteChannelSync: eu
    }
}