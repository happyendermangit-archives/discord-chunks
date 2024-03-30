function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("278074"),
        i = n("56300"),
        a = n("967888"),
        u = n("751848"),
        s = n("629815"),
        l = n("71578"),
        c = n("749055"),
        f = n("140817"),
        d = n("931983"),
        _ = n("921286"),
        E = n("347057"),
        p = n("420480"),
        m = n("964164"),
        y = n("35523"),
        I = n("411372"),
        h = n("950879"),
        O = n("977221"),
        T = n("964237"),
        S = n("152587"),
        v = n("54976"),
        g = n("279324"),
        A = n("908509"),
        b = n("106248"),
        N = n("227372"),
        R = n("254374"),
        C = n("192998"),
        P = n("907580"),
        D = n("147675"),
        L = n("69671"),
        M = n("251305"),
        U = n("821947"),
        w = n("79384"),
        k = n("867339");
    n("331286");
    var G = n("299794"),
        B = n("389712"),
        j = n("931582"),
        F = n("741471"),
        V = n("117459"),
        H = n("73013"),
        x = n("217014"),
        Y = n("935741");
    n("943115");
    var W = n("411778"),
        K = n("204394"),
        z = n("29884"),
        X = n("868447"),
        q = n("879547"),
        Q = n("894288"),
        J = n("63116"),
        Z = n("877708"),
        $ = n("208454"),
        ee = n("870331"),
        et = n("388990"),
        en = n("947248"),
        er = n("758989"),
        eo = n("481971"),
        ei = n("830721"),
        ea = n("523018"),
        eu = n("483587"),
        es = n("281767"),
        el = n("928204"),
        ec = n("243547"),
        ef = n("941504");

    function ed(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function e_(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function eE(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    e_(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    e_(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function ep(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function em(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function ey(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                em(e, t, n[t])
            })
        }
        return e
    }

    function eI(e, t) {
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

    function eh(e, t) {
        if (e) {
            if ("string" == typeof e) return ed(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ed(e, t)
        }
    }

    function eO(e, t) {
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
    var eT = new y.default("MessageActionCreators"),
        eS = new y.default("MessageQueue"),
        ev = !1,
        eg = function() {
            var e, t, n;

            function r() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), em(this, "completed", !1)
            }
            return e = r, t = [{
                key: "markComplete",
                value: function() {
                    this.completed = !0
                }
            }], ep(e.prototype, t), n && ep(e, n), r
        }();

    function eA(e) {
        var t = e.inviteKey,
            n = e.channelId,
            r = e.messageId,
            o = e.location,
            i = e.suggested,
            a = void 0 === i ? null : i,
            u = e.overrideProperties,
            s = void 0 === u ? {} : u,
            l = (0, v.parseExtraDataFromInviteKey)(t),
            c = Y.default.getChannel(n);
        if (null != c) {
            var d = null;
            c.isMultiUserDM() ? d = es.LoggingInviteTypes.GDM_INVITE : !c.isPrivate() && (d = es.LoggingInviteTypes.SERVER_INVITE);
            var _ = {},
                E = W.default.getInvite(t);
            if (null != E && E.state === es.InviteStates.RESOLVED && null != E.channel) {
                var p, m = E.channel;
                _.invite_channel_id = m.id, _.invite_guild_id = null === (p = E.guild) || void 0 === p ? void 0 : p.id, _.invite_channel_type = m.type, null != E.inviter && (_.invite_inviter_id = E.inviter.id);
                var y = H.default.getLastActiveStream();
                if (null != y && y.channelId === m.id) {
                    d = es.LoggingInviteTypes.STREAM, _.destination_user_id = y.ownerId;
                    var I = (0, O.getStreamerApplication)(y, X.default);
                    _.application_id = null != I ? I.id : null
                }
            }
            null != a && (_.is_suggested = a.isAffinitySuggestion, _.row_num = a.rowNum, _.num_total = a.numTotal, _.num_affinity_connections = a.numAffinityConnections, _.is_filtered = a.isFiltered), _ = ey(eI(ey({}, _), {
                location: o,
                invite_type: d,
                invite_code: l.baseCode,
                guild_id: c.getGuildId(),
                channel_id: c.id,
                message_id: r,
                send_type: es.SendTypes.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: l.guildScheduledEventId
            }), s), f.default.trackWithMetadata(es.AnalyticEvents.INVITE_SENT, _)
        } else {
            var h = {},
                T = W.default.getInvite(t);
            null != T && T.state === es.InviteStates.RESOLVED && null != T.inviter && (h.invite_inviter_id = T.inviter.id, h = ey(eI(ey({}, h), {
                location: o,
                invite_type: es.LoggingInviteTypes.FRIEND_INVITE,
                invite_code: l.baseCode,
                message_id: r,
                send_type: es.SendTypes.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: l.guildScheduledEventId
            }), s), f.default.trackWithMetadata(es.AnalyticEvents.INVITE_SENT, h))
        }
    }
    var eb = (em(r = {}, es.AbortCodes.EMAIL_VERIFICATION_REQUIRED, {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: function() {
                return ef.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
            }
        }), em(r, es.AbortCodes.INVALID_MESSAGE_SEND_USER, {
            messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
            messageGetter: function() {
                return ef.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                    helpUrl: eo.default.getArticleURL(es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                })
            }
        }), em(r, es.AbortCodes.RATE_LIMIT_DM_OPEN, {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: function() {
                return ef.default.Messages.BOT_DM_RATE_LIMITED
            }
        }), em(r, es.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED, {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: function() {
                return ef.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
            }
        }), em(r, es.AbortCodes.SLOWMODE_RATE_LIMITED, {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: function() {
                return ef.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
            }
        }), r),
        eN = {
            receiveMessage: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                s.default.dispatch({
                    type: "MESSAGE_CREATE",
                    channelId: e,
                    message: t,
                    optimistic: n,
                    sendMessageOptions: r,
                    isPushNotification: !1
                })
            },
            sendBotMessage: function(e, t, n, r) {
                null != n && f.default.trackWithMetadata(es.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: "Clyde",
                    message_name: n
                }), eN.receiveMessage(e, (0, C.createBotMessage)({
                    messageId: r,
                    channelId: e,
                    content: t,
                    loggingName: n
                }))
            },
            sendClydeError: function(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    o = Y.default.getChannel(e);
                null != o && (r === es.AbortCodes.SLOWMODE_RATE_LIMITED ? (t = ef.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                    seconds: o.rateLimitPerUser
                }), n = "SLOWMODE_RATE_LIMITED") : r === es.AbortCodes.INVALID_MESSAGE_SEND_USER ? (t = ef.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                    helpUrl: eo.default.getArticleURL(es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                }), n = "INVALID_MESSAGE_SEND_USER") : r === es.AbortCodes.TOO_MANY_THREADS ? (t = o.isForumLikeChannel() || o.isForumPost() ? ef.default.Messages.BOT_DM_TOO_MANY_POSTS : ef.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS") : r === es.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ef.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : r === es.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ef.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                    helpUrl: es.MarketingURLs.HARMFUL_LINKS
                }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : r in eb ? (n = eb[r].messageName, t = eb[r].messageGetter()) : (t = ef.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                    helpUrl: eo.default.getArticleURL(es.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                }), n = "SEND_FAILED (".concat(r, ")")), eN.sendBotMessage(e, t, n))
            },
            sendExplicitMediaClydeError: function(e, t, n) {
                var r = Y.default.getChannel(e);
                if (null != r) {
                    var i = (0, o.match)({
                            isDM: r.isDM(),
                            isGDM: r.isGroupDM()
                        }).with({
                            isDM: !0
                        }, function() {
                            return {
                                message: ef.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                                messageName: "BOT_DM_EXPLICIT_CONTENT"
                            }
                        }).with({
                            isDM: !1,
                            isGDM: !0
                        }, function() {
                            return {
                                message: ef.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                                messageName: "BOT_GDM_EXPLICIT_CONTENT"
                            }
                        }).otherwise(function() {
                            return {
                                message: ef.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
                                messageName: "BOT_GUILD_EXPLICIT_CONTENT"
                            }
                        }),
                        a = i.message,
                        u = i.messageName,
                        l = (0, C.createNonce)();
                    eN.sendBotMessage(e, a, u, l), (0, I.trackMediaRedactionAction)({
                        action: I.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                        messageId: l,
                        channelId: e,
                        context: n
                    }), null != t && t.length > 0 && s.default.dispatch({
                        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                        messageId: l,
                        channelId: e,
                        attachments: t
                    })
                }
            },
            truncateMessages: function(e, t, n) {
                s.default.dispatch({
                    type: "TRUNCATE_MESSAGES",
                    channelId: e,
                    truncateBottom: t,
                    truncateTop: n
                })
            },
            clearChannel: function(e) {
                s.default.dispatch({
                    type: "CLEAR_MESSAGES",
                    channelId: e
                })
            },
            jumpToPresent: function(e, t) {
                eN.trackJump(e, null, "Present");
                var n = {
                    present: !0
                };
                K.default.hasPresent(e) ? s.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    jump: n,
                    channelId: e,
                    limit: t
                }) : eN.fetchMessages({
                    channelId: e,
                    limit: t,
                    jump: n
                })
            },
            trackJump: function(e, t, n, r) {
                f.default.trackWithMetadata(es.AnalyticEvents.JUMP, ey({
                    context: n,
                    channel_id: e,
                    message_id: t
                }, r))
            },
            jumpToMessage: function(e) {
                var t = e.channelId,
                    n = e.messageId,
                    r = e.flash,
                    o = e.offset,
                    i = e.context,
                    a = e.extraProperties,
                    u = e.isPreload,
                    s = e.returnMessageId,
                    l = e.skipLocalFetch,
                    c = e.jumpType;
                return "string" == typeof i && eN.trackJump(t, n, i, void 0 === a ? null : a), eN.fetchMessages({
                    channelId: t,
                    limit: es.MAX_MESSAGES_FOR_JUMP,
                    jump: {
                        messageId: n,
                        flash: void 0 !== r && r,
                        offset: o,
                        returnMessageId: s,
                        jumpType: c
                    },
                    isPreload: u,
                    skipLocalFetch: l
                })
            },
            focusMessage: function(e) {
                var t = e.channelId,
                    n = e.messageId;
                eN.fetchMessages({
                    channelId: t,
                    limit: es.MAX_MESSAGES_FOR_JUMP,
                    focus: {
                        messageId: n
                    }
                })
            },
            fetchMessages: function(e) {
                var t = e.channelId,
                    n = e.before,
                    r = e.after,
                    o = e.limit,
                    i = e.jump,
                    u = e.focus,
                    c = e.isPreload,
                    f = e.skipLocalFetch,
                    d = e.truncate,
                    _ = Y.default.getChannel(t),
                    E = h.default.isConnectedOrOverlay(),
                    p = Date.now();
                if (null != _ && _.type === es.ChannelTypes.GUILD_STORE) return !1;
                if (t !== el.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
                    if (eT.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(r, ". jump=").concat(JSON.stringify(i))), !eN._tryFetchMessagesCached({
                            channelId: t,
                            before: n,
                            after: r,
                            limit: o,
                            jump: i,
                            focus: u,
                            truncate: d
                        })) {
                        V.default.fetchMessages.recordStart();
                        var m = null != i ? i : void 0;
                        null == m && null != u && (m = ey({}, u));
                        var y = l.default.getOrCreate(t).loadStart(m);
                        l.default.commit(y), s.default.dispatch({
                            type: "LOAD_MESSAGES"
                        });
                        var I = null == m ? void 0 : m.messageId,
                            O = new eg;
                        return !f && this.fetchLocalMessages(t, n, r, o, O), a.HTTP.get({
                            url: es.Endpoints.MESSAGES(t),
                            query: {
                                before: n,
                                after: r,
                                limit: o,
                                around: I,
                                preload: c
                            },
                            retries: 2,
                            oldFormErrors: !0
                        }).then(function(e) {
                            return V.default.fetchMessages.recordEnd(), V.default.dispatchMessages.measure(function() {
                                var a = e.body,
                                    u = null != n,
                                    l = null != r,
                                    c = null == n && null == r,
                                    f = null != I || a.length === o && (u || c),
                                    _ = null != I || l && a.length === o;
                                if (null != I) {
                                    var m, y = Math.floor(o / 2);
                                    var T = [I].concat(function(e) {
                                        if (Array.isArray(e)) return ed(e)
                                    }(m = a.map(function(e) {
                                        return e.id
                                    })) || function(e) {
                                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                    }(m) || eh(m) || function() {
                                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()).filter(function(e, t, n) {
                                        return n.indexOf(e) === t
                                    }).sort(ea.default.compare).indexOf(I);
                                    if (T < y && (f = !1), a.length - T < y && (_ = !1), _ && a.length > 0) {
                                        var S = q.default.lastMessageId(t);
                                        a[0].id === S && (_ = !1)
                                    }
                                }
                                eT.log("Fetched ".concat(a.length, " messages for ").concat(t, " isBefore:").concat(u, " isAfter:").concat(l)), O.markComplete(), s.default.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: a,
                                    isBefore: u,
                                    isAfter: l,
                                    hasMoreBefore: f,
                                    hasMoreAfter: _,
                                    limit: o,
                                    jump: i,
                                    isStale: !E || h.default.lastTimeConnectedChanged() >= p,
                                    truncate: d
                                })
                            }), !0
                        }, function() {
                            return eT.log("Failed to fetch messages for ".concat(t)), s.default.dispatch({
                                type: "LOAD_MESSAGES_FAILURE",
                                channelId: t
                            }), !1
                        })
                    }
                }
            },
            fetchLocalMessages: function(e, t, n, r, o) {
                return eE(function() {
                    var i, a, u, c, f;
                    return eO(this, function(p) {
                        switch (p.label) {
                            case 0:
                                if (i = Y.default.getBasicChannel(e), a = l.default.getOrCreate(e), null == (u = d.default.database()) || null == i || null != t || null != n) return V.default.addLocalMessages(e, -1), [2];
                                if (a.ready && !a.cached) return V.default.addLocalMessages(e, -2), [2];
                                return [4, (0, _.tryLoadAsync)(function() {
                                    return E.default.load(u, e, r)
                                })];
                            case 1:
                                if (null == (c = p.sent())) return V.default.addLocalMessages(e, -3), [2];
                                return eT.log("fetched ".concat(c.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(o.completed, ")")), V.default.addLocalMessages(e, c.messages.length), !o.completed && c.messages.length > 0 && (f = c.messages.length >= r && c.connectionId === h.default.lastTimeConnectedChanged(), s.default.dispatch({
                                    type: "LOCAL_MESSAGES_LOADED",
                                    guildId: i.guild_id,
                                    channelId: e,
                                    users: c.users,
                                    members: c.members,
                                    messages: c.messages,
                                    stale: !f
                                })), [2]
                        }
                    })
                })()
            },
            fetchNewLocalMessages: function(e, t) {
                return eE(function() {
                    var n, r, o, i, a, u, c;
                    return eO(this, function(f) {
                        switch (f.label) {
                            case 0:
                                if (r = Y.default.getBasicChannel(e), null == (o = d.default.database()) || null == r || (i = l.default.getOrCreate(e)).hasMoreAfter) return [2];
                                return [4, (0, _.tryLoadAsync)(function() {
                                    return E.default.load(o, e, t)
                                })];
                            case 1:
                                if (null == (a = f.sent())) return [2];
                                if (c = null == (u = null === (n = (i = l.default.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id) ? a.messages : a.messages.filter(function(e) {
                                        return ea.default.compare(e.id, u) > 0
                                    }), eT.log("Fetched ".concat(a.messages.length, " messages from the cache after foregrounding. ").concat(c.length, " are new")), 0 === c.length) return [2];
                                return s.default.dispatch({
                                    type: "LOCAL_MESSAGES_LOADED",
                                    guildId: r.guild_id,
                                    channelId: e,
                                    users: a.users,
                                    members: a.members,
                                    messages: c,
                                    stale: !0
                                }), [2]
                        }
                    })
                })()
            },
            _tryFetchMessagesCached: function(e) {
                var t = e.channelId,
                    n = e.before,
                    r = e.after,
                    o = e.limit,
                    i = e.jump,
                    a = e.focus,
                    u = e.truncate,
                    l = K.default.getMessages(t);
                if (l.cached || !l.ready) return !1;
                if ((null == i ? void 0 : i.messageId) != null || (null == a ? void 0 : a.messageId) != null) {
                    if ((null == i ? void 0 : i.messageId) != null && l.has(i.messageId, !1)) return s.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        jump: i,
                        limit: o,
                        truncate: u
                    }), !0;
                    if ((null == a ? void 0 : a.messageId) != null) {
                        if (l.has(a.messageId, !1)) return s.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            focus: a,
                            limit: o,
                            truncate: u
                        }), !0;
                        i = ey({}, a)
                    }
                    var c = (null == i ? void 0 : i.messageId) != null ? ea.default.extractTimestamp(null == i ? void 0 : i.messageId) : 0,
                        f = l.first(),
                        d = l.last();
                    if (!l.hasMoreBefore && null != f && ea.default.extractTimestamp(f.id) >= c || !l.hasMoreAfter && null != d && ea.default.extractTimestamp(d.id) <= c || null != f && null != d && ea.default.extractTimestamp(f.id) < c && ea.default.extractTimestamp(d.id) > c) return s.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        jump: i,
                        limit: es.MAX_MESSAGES_FOR_JUMP
                    }), !0
                } else if (null != n && l.hasBeforeCached(n)) return s.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    before: n,
                    limit: o,
                    truncate: u
                }), !0;
                else if (null != r && l.hasAfterCached(r)) return s.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    after: r,
                    limit: o,
                    truncate: u
                }), !0;
                return !1
            },
            sendMessage: function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return eE(function() {
                    var o, i, a, u, s;
                    return eO(this, function(l) {
                        switch (l.label) {
                            case 0:
                                if (t.reaction) return [2, Promise.resolve()];
                                return [4, (0, w.default)(e)];
                            case 1:
                                if (null != (o = l.sent())) return [2, eN.sendMessage(o, t, n, r)];
                                if (i = function() {
                                        return eN._sendMessage(e, t, r)
                                    }, a = A.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                                        location: "8e1e29_1"
                                    }).enableBackgroundSending ? b.default.backgroundify(i, void 0) : i, s = null !== (u = r.nonce) && void 0 !== u ? u : (0, C.createNonce)(), r = eI(ey({}, r), {
                                        nonce: s
                                    }), N.default.recordMessageSendAttempt(e, s), K.default.isReady(e)) return [2, a()];
                                if (n && e !== el.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return eS.info("Waiting for channel ".concat(e, " to be ready before sending.")), [2, new Promise(function(t, n) {
                                    K.default.whenReady(e, function() {
                                        eS.info("Channel ".concat(e, " is ready for sending now.")), a().then(t, n)
                                    })
                                })];
                                else return [2, a()]
                        }
                    })
                })()
            },
            getSendMessageOptionsForReply: function(e) {
                var t;
                if (null == e) return {};
                return {
                    messageReference: {
                        guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
                        channel_id: e.channel.id,
                        message_id: e.message.id
                    },
                    allowedMentions: e.shouldMention ? void 0 : {
                        parse: Object.values(es.AllowedMentionTypes),
                        replied_user: !1
                    }
                }
            },
            sendInvite: function(e, t, n, r) {
                return eN._sendMessage(e, {
                    content: (0, g.default)(t),
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                }, {
                    location: n,
                    suggestedInvite: null != r ? r : void 0
                })
            },
            sendActivityBookmark: function(e, t, n, r) {
                return eN._sendMessage(e, {
                    content: t,
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                }, {
                    location: n,
                    suggestedInvite: null != r ? r : void 0
                })
            },
            sendStickers: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return eN._sendMessage(e, {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: o
                }, eI(ey({}, r), {
                    stickerIds: t
                }))
            },
            sendGreetMessage: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.messageReference,
                    o = n.allowedMentions;
                return a.HTTP.post({
                    url: es.Endpoints.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: o,
                        message_reference: r
                    },
                    oldFormErrors: !0
                }).then(function(n) {
                    return R.default.donateSentMessage(n.body.content, e), eN.receiveMessage(e, n.body), s.default.dispatch({
                        type: "STICKER_TRACK_USAGE",
                        stickerIds: [t]
                    }), n
                }, function(t) {
                    throw eT.log("Failed to send greeting"), 429 !== t.status && eN.sendClydeError(e, t.body.code), s.default.dispatch({
                        type: "MESSAGE_SEND_FAILED",
                        messageId: t.body.id,
                        channelId: e
                    }), t
                })
            },
            sendPollMessage: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return eN._sendMessage(e, {
                    content: "",
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                }, eI(ey({}, n), {
                    poll: t
                }))
            },
            _sendMessage: function(e, t, n) {
                var r = (0, w.default)(e);
                if (null != r) return eS.info("Converting channel to a private channel"), r.then(function(e) {
                    eS.info("Finished converting channel to a private channel"), eN._sendMessage(e, t, n)
                });
                var o = t.content,
                    a = t.invalidEmojis,
                    u = t.validNonShortcutEmojis,
                    l = t.tts,
                    d = void 0 !== l && l,
                    _ = n.activityAction,
                    E = n.location,
                    y = n.suggestedInvite,
                    I = n.stickerIds,
                    h = n.messageReference,
                    O = n.allowedMentions,
                    v = n.poll,
                    g = null !== (K = n.flags) && void 0 !== K ? K : 0;
                var A = (H = (0, j.default)(o), W = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(H) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                u = !0, r = e
                            } finally {
                                try {
                                    !a && null != o.return && o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(H, W) || eh(H, W) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    b = A[0],
                    D = A[1];
                if (b && (o = D, g = (0, en.addFlag)(g, es.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === o && null == _ && null == I && null == v) return Promise.resolve();
                var G = null != h ? es.MessageTypes.REPLY : es.MessageTypes.DEFAULT,
                    F = null !== (X = n.nonce) && void 0 !== X ? X : (0, C.createNonce)();
                if (!1 !== n.eagerDispatch) {
                    var V = (0, C.default)({
                        channelId: e,
                        content: o,
                        tts: d,
                        type: G,
                        messageReference: h,
                        allowedMentions: O,
                        flags: 0 !== g ? g : void 0,
                        nonce: F,
                        poll: (0, U.createPollServerDataFromCreateRequest)(v)
                    });
                    (0, L.updateComboOnMessageSend)(e, V.id), null != I && (V.sticker_items = I.map(function(e) {
                        return B.default.getStickerById(e)
                    }).filter(function(e) {
                        return null != e
                    })), eN.receiveMessage(e, V, !0, n)
                }
                if (!ev && null != a && a.length > 0) {
                    ev = !0;
                    var H, W, K, X, q, eo, ea = $.default.getCurrentUser();
                    a.some(function(e) {
                        return e.animated
                    }) && !ei.default.canUseAnimatedEmojis(ea) ? (q = ef.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, eo = "INVALID_ANIMATED_EMOJI_BODY") : z.default.canWithPartialContext(es.Permissions.USE_EXTERNAL_EMOJIS, {
                        channelId: e
                    }) ? (q = ef.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, eo = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (q = ef.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, eo = "INVALID_EXTERNAL_EMOJI_BODY"), eN.sendBotMessage(e, q, eo)
                }
                var eu = {
                    type: c.MessageDataType.SEND,
                    message: {
                        channelId: e,
                        content: o,
                        nonce: F,
                        tts: d,
                        message_reference: h,
                        allowed_mentions: O,
                        flags: g
                    }
                };
                if (null != _) {
                    var el = _.type === es.ActivityActionTypes.JOIN_REQUEST ? null == _ ? void 0 : _.activity.session_id : x.default.getSessionId();
                    if (null != el) {
                        var ed = {
                                type: _.type,
                                session_id: el
                            },
                            e_ = _.activity;
                        null != e_.party && null != e_.party.id && (ed.party_id = e_.party.id), eu.message.application_id = e_.application_id, eu.message.activity = ed
                    }
                }
                return null != v && (eu.message.poll = v), null != I && (eu.message.sticker_ids = I), M.default.isEnabled() && (eu.message.has_poggermode_enabled = !0), new Promise(function(t, r) {
                    var a = Date.now(),
                        l = c.default.length,
                        d = Math.floor(1e4 * Math.random());
                    eS.info("Queueing message to be sent LogId:".concat(d)), c.default.enqueue(eu, function(c) {
                        var d = Date.now() - a;
                        if (c.ok) {
                            ;
                            R.default.donateSentMessage(o, e), eN.receiveMessage(e, c.body, !0, {
                                sendAnalytics: {
                                    duration: d,
                                    queueSize: l
                                },
                                poll: v
                            }), N.default.recordMessageSendApiResponse(F), s.default.dispatch({
                                type: "SLOWMODE_RESET_COOLDOWN",
                                slowmodeType: Z.SlowmodeType.SendMessage,
                                channelId: e
                            }), s.default.dispatch({
                                type: "EMOJI_TRACK_USAGE",
                                emojiUsed: u
                            }), s.default.dispatch({
                                type: "STICKER_TRACK_USAGE",
                                stickerIds: I
                            }), s.default.dispatch({
                                type: "LOCAL_MESSAGE_CREATE",
                                message: {
                                    channel_id: e,
                                    author: $.default.getCurrentUser()
                                }
                            }), h = (_ = {
                                content: o,
                                channelId: e,
                                messageId: c.body.id,
                                location: null != E ? E : "chat_input",
                                suggested: y
                            }).content, O = _.channelId, g = _.messageId, A = _.location, C = void 0 === (b = _.suggested) ? null : b, L = void 0 === (D = _.overrideProperties) ? {} : D, (0, m.default)(h).forEach(function(e) {
                                var t = e.type,
                                    n = e.code;
                                if (t === p.CodedLinkType.INVITE) eA({
                                    inviteKey: n,
                                    channelId: O,
                                    messageId: g,
                                    location: A,
                                    suggested: C,
                                    overrideProperties: L
                                });
                                else if (t === p.CodedLinkType.TEMPLATE) {
                                    var r = S.default.getGuildTemplate(n);
                                    if (null == r || r.state === ec.GuildTemplateStates.RESOLVING) return;
                                    f.default.trackWithMetadata(es.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                                        guild_template_code: n,
                                        guild_template_name: r.name,
                                        guild_template_description: r.description,
                                        guild_template_guild_id: r.sourceGuildId
                                    })
                                } else if (t === p.CodedLinkType.BUILD_OVERRIDE);
                                else if (t === p.CodedLinkType.MANUAL_BUILD_OVERRIDE);
                                else if (t === p.CodedLinkType.EVENT);
                                else if (t === p.CodedLinkType.CHANNEL_LINK);
                                else if (t === p.CodedLinkType.APP_DIRECTORY_PROFILE) ee.default.track(es.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                    application_id: n,
                                    device_platform: i.isMobile ? "mobile_web" : "desktop_web",
                                    guild_id: J.default.getGuildId(),
                                    channel_id: Q.default.getChannelId()
                                });
                                else if (t === p.CodedLinkType.ACTIVITY_BOOKMARK);
                                else if (t === p.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                                else if (t === p.CodedLinkType.GUILD_PRODUCT);
                                else if (t === p.CodedLinkType.SERVER_SHOP);
                                else if (t === p.CodedLinkType.QUESTS_EMBED)(0, k.trackQuestEvent)({
                                    questId: n,
                                    event: es.AnalyticEvents.QUEST_LINK_SHARED,
                                    trackGuildAndChannelMetadata: !0
                                });
                                else throw Error("Unknown coded link type: ".concat(t))
                            }), ! function(e, t, n, r, o) {
                                (0, er.findGiftCodes)(e).forEach(function(e) {
                                    var i = Y.default.getChannel(t);
                                    null != i && f.default.trackWithMetadata(es.AnalyticEvents.GIFT_CODE_SENT, {
                                        location: r,
                                        gift_code: e,
                                        guild_id: i.getGuildId(),
                                        channel_id: i.id,
                                        channel_type: i.type,
                                        message_id: n,
                                        automatic_send: o
                                    })
                                })
                            }(o, e, c.body.id, null != E ? E : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(c)
                        } else {
                            eT.log("Failed to send message", {
                                hasErr: c.hasErr,
                                status: c.status,
                                code: null === (M = c.body) || void 0 === M ? void 0 : M.code,
                                error: c.err
                            });
                            var _, h, O, g, A, b, C, D, L, M, U = !1;
                            if (c.hasErr) "ABORTED" === c.err.code && (U = !0);
                            else if (c.status >= 400 && c.status < 500 && c.body) {
                                if (c.body.code === es.AbortCodes.SLOWMODE_RATE_LIMITED) {
                                    var w = c.body.retry_after;
                                    null != w && w > 0 && s.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: e,
                                        slowmodeType: Z.SlowmodeType.SendMessage,
                                        cooldownMs: w * et.default.Millis.SECOND
                                    })
                                } else T.AUTOMOD_ERROR_CODES.has(c.body.code) ? s.default.dispatch({
                                    type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                    messageData: eu,
                                    errorResponseBody: {
                                        code: c.body.code,
                                        message: c.body.message
                                    }
                                }) : c.body.code === es.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? s.default.dispatch({
                                    type: "POGGERMODE_TEMPORARILY_DISABLED"
                                }) : null != v || eN.sendClydeError(e, c.body.code)
                            }
                            U ? eN.deleteMessage(e, F, !0) : (s.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: F,
                                channelId: e
                            }), (0, P.logMessageSendFailure)({
                                failureCode: c.hasErr ? void 0 : c.status,
                                errorMessage: c.hasErr ? c.err.message : void 0
                            })), r(c)
                        }
                    }, d)
                })
            },
            startEditMessage: function(e, t, n, r) {
                s.default.dispatch({
                    type: "MESSAGE_START_EDIT",
                    channelId: e,
                    messageId: t,
                    content: n,
                    source: r
                })
            },
            updateEditMessage: function(e, t, n) {
                s.default.dispatch({
                    type: "MESSAGE_UPDATE_EDIT",
                    channelId: e,
                    textValue: t,
                    richValue: n
                })
            },
            endEditMessage: function(e, t) {
                s.default.dispatch({
                    type: "MESSAGE_END_EDIT",
                    channelId: e,
                    response: t
                })
            },
            editMessage: function(e, t, n) {
                var r = n.content;
                return eE(function() {
                    var n, o;
                    return eO(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.default.unarchiveThreadIfNecessary(e)];
                            case 1:
                                return i.sent(), n = function(e, t) {
                                    var n = K.default.getMessage(e, t);
                                    if (null == n || n.type !== es.MessageTypes.REPLY) return;
                                    var r = G.default.getMessageByReference(n.messageReference);
                                    if (r.state === G.ReferencedMessageState.LOADED) {
                                        if (!n.mentions.includes(r.message.author.id)) return {
                                            parse: Object.values(es.AllowedMentionTypes),
                                            replied_user: !1
                                        }
                                    }
                                }(e, t), o = {
                                    channelId: e,
                                    messageId: t,
                                    content: r,
                                    allowed_mentions: n
                                }, c.default.enqueue({
                                    type: c.MessageDataType.EDIT,
                                    message: o
                                }, function(n) {
                                    var r = !n.hasErr && T.AUTOMOD_ERROR_CODES.has(n.body.code);
                                    if (r) {
                                        var i = {
                                            type: c.MessageDataType.EDIT,
                                            message: o
                                        };
                                        s.default.dispatch({
                                            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                                            messageData: i,
                                            errorResponseBody: {
                                                code: n.body.code,
                                                message: n.body.message
                                            }
                                        })
                                    }
                                    n.hasErr ? u.AccessibilityAnnouncer.announce(ef.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : r ? u.AccessibilityAnnouncer.announce(ef.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : u.AccessibilityAnnouncer.announce(ef.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eN.endEditMessage(e, n.hasErr ? void 0 : n), eN.focusMessage({
                                        channelId: e,
                                        messageId: t
                                    })
                                }), [2]
                        }
                    })
                })()
            },
            suppressEmbeds: function(e, t) {
                return eE(function() {
                    return eO(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, F.default.unarchiveThreadIfNecessary(e)];
                            case 1:
                                return n.sent(), a.HTTP.patch({
                                    url: es.Endpoints.MESSAGE(e, t),
                                    body: {
                                        flags: es.MessageFlags.SUPPRESS_EMBEDS
                                    },
                                    oldFormErrors: !0
                                }), [2]
                        }
                    })
                })()
            },
            patchMessageAttachments: function(e, t, n) {
                return eE(function() {
                    return eO(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, F.default.unarchiveThreadIfNecessary(e)];
                            case 1:
                                return r.sent(), a.HTTP.patch({
                                    url: es.Endpoints.MESSAGE(e, t),
                                    body: {
                                        attachments: n
                                    },
                                    oldFormErrors: !0
                                }), [2]
                        }
                    })
                })()
            },
            deleteMessage: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return eE(function() {
                    var r, o;
                    return eO(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (r = function() {
                                        s.default.dispatch({
                                            type: "MESSAGE_DELETE",
                                            id: t,
                                            channelId: e
                                        }).then(function() {
                                            u.AccessibilityAnnouncer.announce(ef.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                                        })
                                    }, !n) return [3, 1];
                                return r(), [3, 3];
                            case 1:
                                return [4, F.default.unarchiveThreadIfNecessary(e)];
                            case 2:
                                i.sent(), a.HTTP.del({
                                    url: es.Endpoints.MESSAGE(e, t),
                                    oldFormErrors: !0
                                }).then(function() {
                                    r()
                                }), i.label = 3;
                            case 3:
                                return (null == (o = K.default.getMessage(e, t)) ? void 0 : o.type) === es.MessageTypes.GUILD_INVITE_REMINDER && (0, D.trackGuildInviteNotificationDismissed)(), [2]
                        }
                    })
                })()
            },
            dismissAutomatedMessage: function(e) {
                null != e.loggingName && f.default.trackWithMetadata(es.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username
                }), this.deleteMessage(e.channel_id, e.id, !0)
            },
            revealMessage: function(e, t) {
                s.default.dispatch({
                    type: "MESSAGE_REVEAL",
                    channelId: e,
                    messageId: t
                })
            },
            crosspostMessage: function(e, t) {
                return a.HTTP.post({
                    url: es.Endpoints.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0
                }).catch(function(e) {
                    var t;
                    t = 429 === e.status ? ef.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                        retryAfter: Math.floor(e.body.retry_after / 60)
                    }) : ef.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, eu.default.show({
                        title: ef.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                        body: t,
                        confirmText: ef.default.Messages.OKAY
                    })
                })
            },
            trackInvite: eA
        };
    t.default = eN
}