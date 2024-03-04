function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return em
        }
    }), n("70102"), n("794252"), n("222007"), n("702976");
    var a = n("506838"),
        l = n("394846"),
        s = n("872717"),
        i = n("819855"),
        r = n("913144"),
        u = n("408062"),
        d = n("979911"),
        o = n("716241"),
        c = n("802493"),
        E = n("595525"),
        _ = n("219788"),
        f = n("139514"),
        g = n("312016"),
        S = n("605250"),
        h = n("447435"),
        m = n("619443"),
        T = n("582415"),
        M = n("600798"),
        A = n("569808"),
        p = n("9294"),
        I = n("52393"),
        C = n("143291"),
        L = n("379534"),
        D = n("40566"),
        O = n("994918"),
        v = n("815297"),
        N = n("168730"),
        R = n("129953"),
        y = n("28007"),
        U = n("880731"),
        b = n("562228"),
        P = n("793277"),
        G = n("815496");
    n("685841");
    var w = n("256572"),
        k = n("364685"),
        B = n("804888"),
        F = n("263024"),
        V = n("410912"),
        H = n("373469"),
        x = n("271938"),
        W = n("42203");
    n("836417");
    var K = n("337543"),
        Y = n("377253"),
        Q = n("957255"),
        j = n("824563"),
        X = n("660478"),
        q = n("18494"),
        J = n("162771"),
        z = n("401848"),
        Z = n("697218"),
        $ = n("599110"),
        ee = n("718517"),
        et = n("568734"),
        en = n("659632"),
        ea = n("701909"),
        el = n("719923"),
        es = n("299039"),
        ei = n("404118"),
        er = n("49111"),
        eu = n("724210"),
        ed = n("579033"),
        eo = n("782340");
    let ec = new S.default("MessageActionCreators"),
        eE = new S.default("MessageQueue"),
        e_ = !1;
    class ef {
        markComplete() {
            this.completed = !0
        }
        constructor() {
            this.completed = !1
        }
    }

    function eg(e) {
        let {
            inviteKey: t,
            channelId: n,
            messageId: a,
            location: l,
            suggested: s = null,
            overrideProperties: i = {}
        } = e, r = (0, p.parseExtraDataFromInviteKey)(t), u = W.default.getChannel(n);
        if (null != u) {
            let e = null;
            u.isMultiUserDM() ? e = er.LoggingInviteTypes.GDM_INVITE : !u.isPrivate() && (e = er.LoggingInviteTypes.SERVER_INVITE);
            let n = {},
                c = K.default.getInvite(t);
            if (null != c && c.state === er.InviteStates.RESOLVED && null != c.channel) {
                var d;
                let t = c.channel;
                n.invite_channel_id = t.id, n.invite_guild_id = null === (d = c.guild) || void 0 === d ? void 0 : d.id, n.invite_channel_type = t.type, null != c.inviter && (n.invite_inviter_id = c.inviter.id);
                let a = H.default.getLastActiveStream();
                if (null != a && a.channelId === t.id) {
                    e = er.LoggingInviteTypes.STREAM, n.destination_user_id = a.ownerId;
                    let t = (0, T.getStreamerApplication)(a, j.default);
                    n.application_id = null != t ? t.id : null
                }
            }
            null != s && (n.is_suggested = s.isAffinitySuggestion, n.row_num = s.rowNum, n.num_total = s.numTotal, n.num_affinity_connections = s.numAffinityConnections, n.is_filtered = s.isFiltered), n = {
                ...n,
                location: l,
                invite_type: e,
                invite_code: r.baseCode,
                guild_id: u.getGuildId(),
                channel_id: u.id,
                message_id: a,
                send_type: er.SendTypes.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: r.guildScheduledEventId,
                ...i
            }, o.default.trackWithMetadata(er.AnalyticEvents.INVITE_SENT, n)
        } else {
            let e = {},
                n = K.default.getInvite(t);
            null != n && n.state === er.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
                ...e,
                location: l,
                invite_type: er.LoggingInviteTypes.FRIEND_INVITE,
                invite_code: r.baseCode,
                message_id: a,
                send_type: er.SendTypes.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: r.guildScheduledEventId,
                ...i
            }, o.default.trackWithMetadata(er.AnalyticEvents.INVITE_SENT, e))
        }
    }
    let eS = {
            [er.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
                messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
                messageGetter: () => eo.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
            },
            [er.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
                messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
                messageGetter: () => eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                    helpUrl: ea.default.getArticleURL(er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                })
            },
            [er.AbortCodes.RATE_LIMIT_DM_OPEN]: {
                messageName: "BOT_DM_RATE_LIMITED",
                messageGetter: () => eo.default.Messages.BOT_DM_RATE_LIMITED
            },
            [er.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
                messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                messageGetter: () => eo.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
            },
            [er.AbortCodes.SLOWMODE_RATE_LIMITED]: {
                messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                messageGetter: () => eo.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
            }
        },
        eh = {
            receiveMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                r.default.dispatch({
                    type: "MESSAGE_CREATE",
                    channelId: e,
                    message: t,
                    optimistic: n,
                    sendMessageOptions: a,
                    isPushNotification: !1
                })
            },
            sendBotMessage(e, t, n, a) {
                null != n && o.default.trackWithMetadata(er.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: "Clyde",
                    message_name: n
                }), eh.receiveMessage(e, (0, v.createBotMessage)({
                    messageId: a,
                    channelId: e,
                    content: t,
                    loggingName: n
                }))
            },
            sendClydeError(e) {
                let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    l = W.default.getChannel(e);
                if (null != l) {
                    if (a === er.AbortCodes.SLOWMODE_RATE_LIMITED) t = eo.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                        seconds: l.rateLimitPerUser
                    }), n = "SLOWMODE_RATE_LIMITED";
                    else if (a === er.AbortCodes.INVALID_MESSAGE_SEND_USER) t = eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                        helpUrl: ea.default.getArticleURL(er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                    }), n = "INVALID_MESSAGE_SEND_USER";
                    else if (a === er.AbortCodes.TOO_MANY_THREADS) {
                        let e = l.isForumLikeChannel() || l.isForumPost();
                        t = e ? eo.default.Messages.BOT_DM_TOO_MANY_POSTS : eo.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS"
                    } else a === er.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = eo.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : a === er.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = eo.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                        helpUrl: er.MarketingURLs.HARMFUL_LINKS
                    }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : a in eS ? (n = eS[a].messageName, t = eS[a].messageGetter()) : (t = eo.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                        helpUrl: ea.default.getArticleURL(er.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                    }), n = "SEND_FAILED (".concat(a, ")"));
                    eh.sendBotMessage(e, t, n)
                }
            },
            sendExplicitMediaClydeError(e, t, n) {
                let l = W.default.getChannel(e);
                if (null == l) return;
                let {
                    message: s,
                    messageName: i
                } = (0, a.match)({
                    isDM: l.isDM(),
                    isGDM: l.isGroupDM()
                }).with({
                    isDM: !0
                }, () => ({
                    message: eo.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                    messageName: "BOT_DM_EXPLICIT_CONTENT"
                })).with({
                    isDM: !1,
                    isGDM: !0
                }, () => ({
                    message: eo.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                    messageName: "BOT_GDM_EXPLICIT_CONTENT"
                })).otherwise(() => ({
                    message: eo.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
                    messageName: "BOT_GUILD_EXPLICIT_CONTENT"
                })), u = (0, v.createNonce)();
                eh.sendBotMessage(e, s, i, u), (0, h.trackMediaRedactionAction)({
                    action: h.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: u,
                    channelId: e,
                    context: n
                }), null != t && t.length > 0 && r.default.dispatch({
                    type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                    messageId: u,
                    channelId: e,
                    attachments: t
                })
            },
            truncateMessages(e, t, n) {
                r.default.dispatch({
                    type: "TRUNCATE_MESSAGES",
                    channelId: e,
                    truncateBottom: t,
                    truncateTop: n
                })
            },
            clearChannel(e) {
                r.default.dispatch({
                    type: "CLEAR_MESSAGES",
                    channelId: e
                })
            },
            jumpToPresent(e, t) {
                eh.trackJump(e, null, "Present");
                let n = {
                    present: !0
                };
                Y.default.hasPresent(e) ? r.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    jump: n,
                    channelId: e,
                    limit: t
                }) : eh.fetchMessages({
                    channelId: e,
                    limit: t,
                    jump: n
                })
            },
            trackJump(e, t, n, a) {
                o.default.trackWithMetadata(er.AnalyticEvents.JUMP, {
                    context: n,
                    channel_id: e,
                    message_id: t,
                    ...a
                })
            },
            jumpToMessage(e) {
                let {
                    channelId: t,
                    messageId: n,
                    flash: a = !1,
                    offset: l,
                    context: s,
                    extraProperties: i = null,
                    isPreload: r,
                    returnMessageId: u,
                    skipLocalFetch: d,
                    jumpType: o
                } = e;
                return "string" == typeof s && eh.trackJump(t, n, s, i), eh.fetchMessages({
                    channelId: t,
                    limit: er.MAX_MESSAGES_FOR_JUMP,
                    jump: {
                        messageId: n,
                        flash: a,
                        offset: l,
                        returnMessageId: u,
                        jumpType: o
                    },
                    isPreload: r,
                    skipLocalFetch: d
                })
            },
            focusMessage(e) {
                let {
                    channelId: t,
                    messageId: n
                } = e;
                eh.fetchMessages({
                    channelId: t,
                    limit: er.MAX_MESSAGES_FOR_JUMP,
                    focus: {
                        messageId: n
                    }
                })
            },
            fetchMessages(e) {
                let {
                    channelId: t,
                    before: n,
                    after: a,
                    limit: l,
                    jump: i,
                    focus: d,
                    isPreload: o,
                    skipLocalFetch: c,
                    truncate: E
                } = e, _ = W.default.getChannel(t), f = m.default.isConnectedOrOverlay(), g = Date.now();
                if (null != _ && _.type === er.ChannelTypes.GUILD_STORE) return !1;
                if (t === eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
                if (ec.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(a, ". jump=").concat(JSON.stringify(i))), eh._tryFetchMessagesCached({
                        channelId: t,
                        before: n,
                        after: a,
                        limit: l,
                        jump: i,
                        focus: d,
                        truncate: E
                    })) return;
                V.default.fetchMessages.recordStart();
                let S = null != i ? i : void 0;
                null == S && null != d && (S = {
                    ...d
                });
                let h = u.default.getOrCreate(t),
                    T = h.loadStart(S);
                u.default.commit(T), r.default.dispatch({
                    type: "LOAD_MESSAGES"
                });
                let M = null == S ? void 0 : S.messageId,
                    A = new ef;
                return !c && this.fetchLocalMessages(t, n, a, l, A), s.default.get({
                    url: er.Endpoints.MESSAGES(t),
                    query: {
                        before: n,
                        after: a,
                        limit: l,
                        around: M,
                        preload: o
                    },
                    retries: 2,
                    oldFormErrors: !0
                }).then(e => (V.default.fetchMessages.recordEnd(), V.default.dispatchMessages.measure(() => {
                    let s = e.body,
                        u = null != n,
                        d = null != a,
                        o = null == n && null == a,
                        c = null != M || s.length === l && (u || o),
                        _ = null != M || d && s.length === l;
                    if (null != M) {
                        let e = Math.floor(l / 2),
                            n = [M, ...s.map(e => {
                                let {
                                    id: t
                                } = e;
                                return t
                            })].filter((e, t, n) => n.indexOf(e) === t).sort(es.default.compare),
                            a = n.indexOf(M);
                        if (a < e && (c = !1), s.length - a < e && (_ = !1), _ && s.length > 0) {
                            let e = X.default.lastMessageId(t);
                            s[0].id === e && (_ = !1)
                        }
                    }
                    ec.log("Fetched ".concat(s.length, " messages for ").concat(t, " isBefore:").concat(u, " isAfter:").concat(d)), A.markComplete(), r.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS",
                        channelId: t,
                        messages: s,
                        isBefore: u,
                        isAfter: d,
                        hasMoreBefore: c,
                        hasMoreAfter: _,
                        limit: l,
                        jump: i,
                        isStale: !f || m.default.lastTimeConnectedChanged() >= g,
                        truncate: E
                    })
                }), !0), () => (ec.log("Failed to fetch messages for ".concat(t)), r.default.dispatch({
                    type: "LOAD_MESSAGES_FAILURE",
                    channelId: t
                }), !1))
            },
            async fetchLocalMessages(e, t, n, a, l) {
                let s = W.default.getBasicChannel(e),
                    i = u.default.getOrCreate(e),
                    d = c.default.database();
                if (null == d || null == s || null != t || null != n) {
                    V.default.addLocalMessages(e, -1);
                    return
                }
                if (i.ready && !i.cached) {
                    V.default.addLocalMessages(e, -2);
                    return
                }
                let o = await (0, E.tryLoadAsync)(() => _.default.load(d, e, a));
                if (null == o) {
                    V.default.addLocalMessages(e, -3);
                    return
                }
                if (ec.log("fetched ".concat(o.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(l.completed, ")")), V.default.addLocalMessages(e, o.messages.length), !l.completed && o.messages.length > 0) {
                    let t = o.messages.length >= a && o.connectionId === m.default.lastTimeConnectedChanged();
                    r.default.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: s.guild_id,
                        channelId: e,
                        users: o.users,
                        members: o.members,
                        messages: o.messages,
                        stale: !t
                    })
                }
            },
            async fetchNewLocalMessages(e, t) {
                var n;
                let a = W.default.getBasicChannel(e),
                    l = c.default.database();
                if (null == l || null == a) return;
                let s = u.default.getOrCreate(e);
                if (s.hasMoreAfter) return;
                let i = await (0, E.tryLoadAsync)(() => _.default.load(l, e, t));
                if (null == i) return;
                s = u.default.getOrCreate(e);
                let d = null === (n = s.last()) || void 0 === n ? void 0 : n.id,
                    o = null == d ? i.messages : i.messages.filter(e => es.default.compare(e.id, d) > 0);
                ec.log("Fetched ".concat(i.messages.length, " messages from the cache after foregrounding. ").concat(o.length, " are new")), 0 !== o.length && r.default.dispatch({
                    type: "LOCAL_MESSAGES_LOADED",
                    guildId: a.guild_id,
                    channelId: e,
                    users: i.users,
                    members: i.members,
                    messages: o,
                    stale: !0
                })
            },
            _tryFetchMessagesCached(e) {
                let {
                    channelId: t,
                    before: n,
                    after: a,
                    limit: l,
                    jump: s,
                    focus: i,
                    truncate: u
                } = e, d = Y.default.getMessages(t);
                if (d.cached || !d.ready) return !1;
                if ((null == s ? void 0 : s.messageId) != null || (null == i ? void 0 : i.messageId) != null) {
                    if ((null == s ? void 0 : s.messageId) != null && d.has(s.messageId, !1)) return r.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        jump: s,
                        limit: l,
                        truncate: u
                    }), !0;
                    if ((null == i ? void 0 : i.messageId) != null) {
                        if (d.has(i.messageId, !1)) return r.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            focus: i,
                            limit: l,
                            truncate: u
                        }), !0;
                        s = {
                            ...i
                        }
                    }
                    let e = (null == s ? void 0 : s.messageId) != null ? es.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
                        n = d.first(),
                        a = d.last();
                    if (!d.hasMoreBefore && null != n && es.default.extractTimestamp(n.id) >= e || !d.hasMoreAfter && null != a && es.default.extractTimestamp(a.id) <= e || null != n && null != a && es.default.extractTimestamp(n.id) < e && es.default.extractTimestamp(a.id) > e) return r.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        jump: s,
                        limit: er.MAX_MESSAGES_FOR_JUMP
                    }), !0
                } else if (null != n && d.hasBeforeCached(n)) return r.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    before: n,
                    limit: l,
                    truncate: u
                }), !0;
                else if (null != a && d.hasAfterCached(a)) return r.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    after: a,
                    limit: l,
                    truncate: u
                }), !0;
                return !1
            },
            async sendMessage(e, t) {
                var n;
                let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (t.reaction) return Promise.resolve();
                let s = await (0, P.default)(e);
                if (null != s) return eh.sendMessage(s, t, a, l);
                let i = () => eh._sendMessage(e, t, l),
                    r = C.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                        location: "8e1e29_1"
                    }).enableBackgroundSending ? L.default.backgroundify(i, void 0) : i,
                    u = null !== (n = l.nonce) && void 0 !== n ? n : (0, v.createNonce)();
                return (l = {
                    ...l,
                    nonce: u
                }, D.default.recordMessageSendAttempt(e, u), Y.default.isReady(e)) ? r() : a && e !== eu.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (eE.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
                    Y.default.whenReady(e, () => {
                        eE.info("Channel ".concat(e, " is ready for sending now.")), r().then(t, n)
                    })
                })) : r()
            },
            getSendMessageOptionsForReply(e) {
                var t;
                if (null == e) return {};
                let n = {
                        guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
                        channel_id: e.channel.id,
                        message_id: e.message.id
                    },
                    a = e.shouldMention ? void 0 : {
                        parse: Object.values(er.AllowedMentionTypes),
                        replied_user: !1
                    };
                return {
                    messageReference: n,
                    allowedMentions: a
                }
            },
            sendInvite: (e, t, n, a) => eh._sendMessage(e, {
                content: (0, I.default)(t),
                tts: !1,
                validNonShortcutEmojis: [],
                invalidEmojis: []
            }, {
                location: n,
                suggestedInvite: null != a ? a : void 0
            }),
            sendActivityBookmark: (e, t, n, a) => eh._sendMessage(e, {
                content: t,
                tts: !1,
                validNonShortcutEmojis: [],
                invalidEmojis: []
            }, {
                location: n,
                suggestedInvite: null != a ? a : void 0
            }),
            sendStickers(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return eh._sendMessage(e, {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: l
                }, {
                    ...a,
                    stickerIds: t
                })
            },
            sendGreetMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        messageReference: a,
                        allowedMentions: l
                    } = n;
                return s.default.post({
                    url: er.Endpoints.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: l,
                        message_reference: a
                    },
                    oldFormErrors: !0
                }).then(n => (O.default.donateSentMessage(n.body.content, e), eh.receiveMessage(e, n.body), r.default.dispatch({
                    type: "STICKER_TRACK_USAGE",
                    stickerIds: [t]
                }), n), t => {
                    throw ec.log("Failed to send greeting"), 429 !== t.status && eh.sendClydeError(e, t.body.code), r.default.dispatch({
                        type: "MESSAGE_SEND_FAILED",
                        messageId: t.body.id,
                        channelId: e
                    }), t
                })
            },
            sendPollMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return eh._sendMessage(e, {
                    content: "",
                    tts: !1,
                    validNonShortcutEmojis: [],
                    invalidEmojis: []
                }, {
                    ...n,
                    poll: t
                })
            },
            _sendMessage(e, t, n) {
                var a, s;
                let i = (0, P.default)(e);
                if (null != i) return eE.info("Converting channel to a private channel"), i.then(e => {
                    eE.info("Finished converting channel to a private channel"), eh._sendMessage(e, t, n)
                });
                let u = t.content,
                    {
                        invalidEmojis: c,
                        validNonShortcutEmojis: E,
                        tts: _ = !1
                    } = t,
                    {
                        activityAction: S,
                        location: h,
                        suggestedInvite: m,
                        stickerIds: T,
                        messageReference: p,
                        allowedMentions: I,
                        poll: C
                    } = n,
                    L = null !== (a = n.flags) && void 0 !== a ? a : 0,
                    [R, w] = (0, B.default)(u);
                if (R && (u = w, L = (0, et.addFlag)(L, er.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === u && null == S && null == T && null == C) return Promise.reject(Error("not sending empty message"));
                let F = null != p ? er.MessageTypes.REPLY : er.MessageTypes.DEFAULT,
                    V = null !== (s = n.nonce) && void 0 !== s ? s : (0, v.createNonce)();
                if (!1 !== n.eagerDispatch) {
                    let t = (0, v.default)({
                        channelId: e,
                        content: u,
                        tts: _,
                        type: F,
                        messageReference: p,
                        allowedMentions: I,
                        flags: 0 !== L ? L : void 0,
                        nonce: V,
                        poll: (0, b.createPollServerDataFromCreateRequest)(C)
                    });
                    (0, y.updateComboOnMessageSend)(e, t.id), null != T && (t.sticker_items = T.map(e => k.default.getStickerById(e)).filter(e => null != e)), eh.receiveMessage(e, t, !0, n)
                }
                if (!e_ && null != c && c.length > 0) {
                    let t, n;
                    e_ = !0;
                    let a = Z.default.getCurrentUser();
                    c.some(e => e.animated) && !el.default.canUseAnimatedEmojis(a) ? (t = eo.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : Q.default.canWithPartialContext(er.Permissions.USE_EXTERNAL_EMOJIS, {
                        channelId: e
                    }) ? (t = eo.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = eo.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eh.sendBotMessage(e, t, n)
                }
                let H = {
                    type: d.MessageDataType.SEND,
                    message: {
                        channelId: e,
                        content: u,
                        nonce: V,
                        tts: _,
                        message_reference: p,
                        allowed_mentions: I,
                        flags: L
                    }
                };
                if (null != S) {
                    let e = S.type === er.ActivityActionTypes.JOIN_REQUEST ? null == S ? void 0 : S.activity.session_id : x.default.getSessionId();
                    if (null != e) {
                        let t = {
                                type: S.type,
                                session_id: e
                            },
                            {
                                activity: n
                            } = S;
                        null != n.party && null != n.party.id && (t.party_id = n.party.id), H.message.application_id = n.application_id, H.message.activity = t
                    }
                }
                return null != C && (H.message.poll = C), null != T && (H.message.sticker_ids = T), U.default.isEnabled() && (H.message.has_poggermode_enabled = !0), new Promise((t, a) => {
                    let s = Date.now(),
                        i = d.default.length,
                        c = Math.floor(1e4 * Math.random());
                    eE.info("Queueing message to be sent LogId:".concat(c)), d.default.enqueue(H, d => {
                        let c = Date.now() - s;
                        if (d.ok) O.default.donateSentMessage(u, e), eh.receiveMessage(e, d.body, !0, {
                            sendAnalytics: {
                                duration: c,
                                queueSize: i
                            },
                            poll: C
                        }), D.default.recordMessageSendApiResponse(V), r.default.dispatch({
                            type: "SLOWMODE_RESET_COOLDOWN",
                            slowmodeType: z.SlowmodeType.SendMessage,
                            channelId: e
                        }), r.default.dispatch({
                            type: "EMOJI_TRACK_USAGE",
                            emojiUsed: E
                        }), r.default.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: T
                        }), ! function(e) {
                            let {
                                content: t,
                                channelId: n,
                                messageId: a,
                                location: s,
                                suggested: i = null,
                                overrideProperties: r = {}
                            } = e;
                            (0, g.default)(t).forEach(e => {
                                let {
                                    type: t,
                                    code: u
                                } = e;
                                if (t === f.CodedLinkType.INVITE) eg({
                                    inviteKey: u,
                                    channelId: n,
                                    messageId: a,
                                    location: s,
                                    suggested: i,
                                    overrideProperties: r
                                });
                                else if (t === f.CodedLinkType.TEMPLATE) {
                                    let e = A.default.getGuildTemplate(u);
                                    if (null == e || e.state === ed.GuildTemplateStates.RESOLVING) return;
                                    o.default.trackWithMetadata(er.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                                        guild_template_code: u,
                                        guild_template_name: e.name,
                                        guild_template_description: e.description,
                                        guild_template_guild_id: e.sourceGuildId
                                    })
                                } else if (t === f.CodedLinkType.BUILD_OVERRIDE);
                                else if (t === f.CodedLinkType.MANUAL_BUILD_OVERRIDE);
                                else if (t === f.CodedLinkType.EVENT);
                                else if (t === f.CodedLinkType.CHANNEL_LINK);
                                else if (t === f.CodedLinkType.APP_DIRECTORY_PROFILE) $.default.track(er.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                    application_id: u,
                                    device_platform: l.isMobile ? "mobile_web" : "desktop_web",
                                    guild_id: J.default.getGuildId(),
                                    channel_id: q.default.getChannelId()
                                });
                                else if (t === f.CodedLinkType.ACTIVITY_BOOKMARK);
                                else if (t === f.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                                else if (t === f.CodedLinkType.GUILD_PRODUCT);
                                else if (t === f.CodedLinkType.SERVER_SHOP);
                                else if (t === f.CodedLinkType.QUESTS_EMBED) {
                                    var d;
                                    (0, G.trackQuestEvent)(u, er.AnalyticEvents.QUEST_LINK_SHARED, {
                                        guild_id: J.default.getGuildId(),
                                        channel_type: null === (d = W.default.getChannel(q.default.getChannelId())) || void 0 === d ? void 0 : d.type
                                    })
                                } else throw Error("Unknown coded link type: ".concat(t))
                            })
                        }({
                            content: u,
                            channelId: e,
                            messageId: d.body.id,
                            location: null != h ? h : "chat_input",
                            suggested: m
                        }), ! function(e, t, n, a, l) {
                            (0, en.findGiftCodes)(e).forEach(e => {
                                let s = W.default.getChannel(t);
                                null != s && o.default.trackWithMetadata(er.AnalyticEvents.GIFT_CODE_SENT, {
                                    location: a,
                                    gift_code: e,
                                    guild_id: s.getGuildId(),
                                    channel_id: s.id,
                                    channel_type: s.type,
                                    message_id: n,
                                    automatic_send: l
                                })
                            })
                        }(u, e, d.body.id, null != h ? h : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(d);
                        else {
                            var _;
                            ec.log("Failed to send message", {
                                hasErr: d.hasErr,
                                status: d.status,
                                code: null === (_ = d.body) || void 0 === _ ? void 0 : _.code,
                                error: d.err
                            });
                            let t = !1;
                            if (d.hasErr) "ABORTED" === d.err.code && (t = !0);
                            else if (d.status >= 400 && d.status < 500 && d.body) {
                                if (d.body.code === er.AbortCodes.SLOWMODE_RATE_LIMITED) {
                                    let t = d.body.retry_after;
                                    null != t && t > 0 && r.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: e,
                                        slowmodeType: z.SlowmodeType.SendMessage,
                                        cooldownMs: t * ee.default.Millis.SECOND
                                    })
                                } else M.AUTOMOD_ERROR_CODES.has(d.body.code) ? r.default.dispatch({
                                    type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                    messageData: H,
                                    errorResponseBody: {
                                        code: d.body.code,
                                        message: d.body.message
                                    }
                                }) : d.body.code === er.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? r.default.dispatch({
                                    type: "POGGERMODE_TEMPORARILY_DISABLED"
                                }) : null != C || eh.sendClydeError(e, d.body.code)
                            }
                            t ? eh.deleteMessage(e, V, !0) : (r.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: V,
                                channelId: e
                            }), (0, N.logMessageSendFailure)({
                                failureCode: d.hasErr ? void 0 : d.status,
                                errorMessage: d.hasErr ? d.err.message : void 0
                            })), a(d)
                        }
                    }, c)
                })
            },
            startEditMessage(e, t, n, a) {
                r.default.dispatch({
                    type: "MESSAGE_START_EDIT",
                    channelId: e,
                    messageId: t,
                    content: n,
                    source: a
                })
            },
            updateEditMessage(e, t, n) {
                r.default.dispatch({
                    type: "MESSAGE_UPDATE_EDIT",
                    channelId: e,
                    textValue: t,
                    richValue: n
                })
            },
            endEditMessage(e, t) {
                r.default.dispatch({
                    type: "MESSAGE_END_EDIT",
                    channelId: e,
                    response: t
                })
            },
            async editMessage(e, t, n) {
                let {
                    content: a
                } = n;
                await F.default.unarchiveThreadIfNecessary(e);
                let l = function(e, t) {
                        let n = Y.default.getMessage(e, t);
                        if (null == n || n.type !== er.MessageTypes.REPLY) return;
                        let a = w.default.getMessageByReference(n.messageReference);
                        if (a.state === w.ReferencedMessageState.LOADED) {
                            if (!n.mentions.includes(a.message.author.id)) return {
                                parse: Object.values(er.AllowedMentionTypes),
                                replied_user: !1
                            }
                        }
                    }(e, t),
                    s = {
                        channelId: e,
                        messageId: t,
                        content: a,
                        allowed_mentions: l
                    };
                d.default.enqueue({
                    type: d.MessageDataType.EDIT,
                    message: s
                }, n => {
                    let a = !n.hasErr && M.AUTOMOD_ERROR_CODES.has(n.body.code);
                    if (a) {
                        let e = {
                            type: d.MessageDataType.EDIT,
                            message: s
                        };
                        r.default.dispatch({
                            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message
                            }
                        })
                    }
                    n.hasErr ? i.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : a ? i.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : i.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eh.endEditMessage(e, n.hasErr ? void 0 : n), eh.focusMessage({
                        channelId: e,
                        messageId: t
                    })
                })
            },
            async suppressEmbeds(e, t) {
                await F.default.unarchiveThreadIfNecessary(e), s.default.patch({
                    url: er.Endpoints.MESSAGE(e, t),
                    body: {
                        flags: er.MessageFlags.SUPPRESS_EMBEDS
                    },
                    oldFormErrors: !0
                })
            },
            async patchMessageAttachments(e, t, n) {
                await F.default.unarchiveThreadIfNecessary(e), s.default.patch({
                    url: er.Endpoints.MESSAGE(e, t),
                    body: {
                        attachments: n
                    },
                    oldFormErrors: !0
                })
            },
            async deleteMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = () => {
                        r.default.dispatch({
                            type: "MESSAGE_DELETE",
                            id: t,
                            channelId: e
                        }).then(() => {
                            i.AccessibilityAnnouncer.announce(eo.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                        })
                    };
                n ? a() : (await F.default.unarchiveThreadIfNecessary(e), s.default.delete({
                    url: er.Endpoints.MESSAGE(e, t),
                    oldFormErrors: !0
                }).then(() => {
                    a()
                }));
                let l = Y.default.getMessage(e, t);
                (null == l ? void 0 : l.type) === er.MessageTypes.GUILD_INVITE_REMINDER && (0, R.trackGuildInviteNotificationDismissed)()
            },
            dismissAutomatedMessage(e) {
                null != e.loggingName && o.default.trackWithMetadata(er.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username
                }), this.deleteMessage(e.channel_id, e.id, !0)
            },
            revealMessage(e, t) {
                r.default.dispatch({
                    type: "MESSAGE_REVEAL",
                    channelId: e,
                    messageId: t
                })
            },
            crosspostMessage: (e, t) => s.default.post({
                url: er.Endpoints.MESSAGE_CROSSPOST(e, t),
                oldFormErrors: !0
            }).catch(e => {
                let t;
                t = 429 === e.status ? eo.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                    retryAfter: Math.floor(e.body.retry_after / 60)
                }) : eo.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, ei.default.show({
                    title: eo.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                    body: t,
                    confirmText: eo.default.Messages.OKAY
                })
            }),
            trackInvite: eg
        };
    var em = eh
}