function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return ep
        }
    }), n("70102"), n("794252"), n("222007"), n("702976");
    var i = n("506838"),
        s = n("394846"),
        r = n("872717"),
        a = n("819855"),
        o = n("913144"),
        l = n("408062"),
        u = n("979911"),
        d = n("716241"),
        c = n("802493"),
        f = n("595525"),
        _ = n("219788"),
        h = n("139514"),
        E = n("312016"),
        g = n("605250"),
        m = n("447435"),
        p = n("619443"),
        S = n("582415"),
        v = n("600798"),
        T = n("569808"),
        I = n("9294"),
        C = n("52393"),
        A = n("143291"),
        y = n("379534"),
        N = n("40566"),
        R = n("994918"),
        O = n("815297"),
        D = n("168730"),
        P = n("129953"),
        M = n("28007"),
        L = n("880731"),
        b = n("562228"),
        U = n("793277"),
        w = n("815496");
    n("685841");
    var k = n("256572"),
        V = n("364685"),
        G = n("804888"),
        F = n("263024"),
        x = n("410912"),
        B = n("373469"),
        H = n("271938"),
        Y = n("42203");
    n("836417");
    var j = n("337543"),
        W = n("377253"),
        K = n("957255"),
        z = n("824563"),
        q = n("660478"),
        X = n("18494"),
        Q = n("162771"),
        Z = n("401848"),
        J = n("697218"),
        $ = n("599110"),
        ee = n("718517"),
        et = n("568734"),
        en = n("659632"),
        ei = n("701909"),
        es = n("719923"),
        er = n("299039"),
        ea = n("404118"),
        eo = n("49111"),
        el = n("724210"),
        eu = n("579033"),
        ed = n("782340");
    let ec = new g.default("MessageActionCreators"),
        ef = new g.default("MessageQueue"),
        e_ = !1;
    class eh {
        markComplete() {
            this.completed = !0
        }
        constructor() {
            this.completed = !1
        }
    }

    function eE(e) {
        let {
            inviteKey: t,
            channelId: n,
            messageId: i,
            location: s,
            suggested: r = null,
            overrideProperties: a = {}
        } = e, o = (0, I.parseExtraDataFromInviteKey)(t), l = Y.default.getChannel(n);
        if (null != l) {
            let e = null;
            l.isMultiUserDM() ? e = eo.LoggingInviteTypes.GDM_INVITE : !l.isPrivate() && (e = eo.LoggingInviteTypes.SERVER_INVITE);
            let n = {},
                c = j.default.getInvite(t);
            if (null != c && c.state === eo.InviteStates.RESOLVED && null != c.channel) {
                var u;
                let t = c.channel;
                n.invite_channel_id = t.id, n.invite_guild_id = null === (u = c.guild) || void 0 === u ? void 0 : u.id, n.invite_channel_type = t.type, null != c.inviter && (n.invite_inviter_id = c.inviter.id);
                let i = B.default.getLastActiveStream();
                if (null != i && i.channelId === t.id) {
                    e = eo.LoggingInviteTypes.STREAM, n.destination_user_id = i.ownerId;
                    let t = (0, S.getStreamerApplication)(i, z.default);
                    n.application_id = null != t ? t.id : null
                }
            }
            null != r && (n.is_suggested = r.isAffinitySuggestion, n.row_num = r.rowNum, n.num_total = r.numTotal, n.num_affinity_connections = r.numAffinityConnections, n.is_filtered = r.isFiltered), n = {
                ...n,
                location: s,
                invite_type: e,
                invite_code: o.baseCode,
                guild_id: l.getGuildId(),
                channel_id: l.id,
                message_id: i,
                send_type: eo.SendTypes.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: o.guildScheduledEventId,
                ...a
            }, d.default.trackWithMetadata(eo.AnalyticEvents.INVITE_SENT, n)
        } else {
            let e = {},
                n = j.default.getInvite(t);
            null != n && n.state === eo.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
                ...e,
                location: s,
                invite_type: eo.LoggingInviteTypes.FRIEND_INVITE,
                invite_code: o.baseCode,
                message_id: i,
                send_type: eo.SendTypes.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: o.guildScheduledEventId,
                ...a
            }, d.default.trackWithMetadata(eo.AnalyticEvents.INVITE_SENT, e))
        }
    }
    let eg = {
            [eo.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
                messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
                messageGetter: () => ed.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
            },
            [eo.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
                messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
                messageGetter: () => ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                    helpUrl: ei.default.getArticleURL(eo.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                })
            },
            [eo.AbortCodes.RATE_LIMIT_DM_OPEN]: {
                messageName: "BOT_DM_RATE_LIMITED",
                messageGetter: () => ed.default.Messages.BOT_DM_RATE_LIMITED
            },
            [eo.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
                messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                messageGetter: () => ed.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
            },
            [eo.AbortCodes.SLOWMODE_RATE_LIMITED]: {
                messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                messageGetter: () => ed.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
            }
        },
        em = {
            receiveMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                o.default.dispatch({
                    type: "MESSAGE_CREATE",
                    channelId: e,
                    message: t,
                    optimistic: n,
                    sendMessageOptions: i,
                    isPushNotification: !1
                })
            },
            sendBotMessage(e, t, n, i) {
                null != n && d.default.trackWithMetadata(eo.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
                    message_author: "Clyde",
                    message_name: n
                }), em.receiveMessage(e, (0, O.createBotMessage)({
                    messageId: i,
                    channelId: e,
                    content: t,
                    loggingName: n
                }))
            },
            sendClydeError(e) {
                let t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    s = Y.default.getChannel(e);
                if (null != s) {
                    if (i === eo.AbortCodes.SLOWMODE_RATE_LIMITED) t = ed.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                        seconds: s.rateLimitPerUser
                    }), n = "SLOWMODE_RATE_LIMITED";
                    else if (i === eo.AbortCodes.INVALID_MESSAGE_SEND_USER) t = ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                        helpUrl: ei.default.getArticleURL(eo.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                    }), n = "INVALID_MESSAGE_SEND_USER";
                    else if (i === eo.AbortCodes.TOO_MANY_THREADS) {
                        let e = s.isForumLikeChannel() || s.isForumPost();
                        t = e ? ed.default.Messages.BOT_DM_TOO_MANY_POSTS : ed.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS"
                    } else i === eo.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ed.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : i === eo.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ed.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                        helpUrl: eo.MarketingURLs.HARMFUL_LINKS
                    }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : i in eg ? (n = eg[i].messageName, t = eg[i].messageGetter()) : (t = ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                        helpUrl: ei.default.getArticleURL(eo.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                    }), n = "SEND_FAILED (".concat(i, ")"));
                    em.sendBotMessage(e, t, n)
                }
            },
            sendExplicitMediaClydeError(e, t, n) {
                let s = Y.default.getChannel(e);
                if (null == s) return;
                let {
                    message: r,
                    messageName: a
                } = (0, i.match)({
                    isDM: s.isDM(),
                    isGDM: s.isGroupDM()
                }).with({
                    isDM: !0
                }, () => ({
                    message: ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                    messageName: "BOT_DM_EXPLICIT_CONTENT"
                })).with({
                    isDM: !1,
                    isGDM: !0
                }, () => ({
                    message: ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
                    messageName: "BOT_GDM_EXPLICIT_CONTENT"
                })).otherwise(() => ({
                    message: ed.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
                    messageName: "BOT_GUILD_EXPLICIT_CONTENT"
                })), l = (0, O.createNonce)();
                em.sendBotMessage(e, r, a, l), (0, m.trackMediaRedactionAction)({
                    action: m.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: l,
                    channelId: e,
                    context: n
                }), null != t && t.length > 0 && o.default.dispatch({
                    type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                    messageId: l,
                    channelId: e,
                    attachments: t
                })
            },
            truncateMessages(e, t, n) {
                o.default.dispatch({
                    type: "TRUNCATE_MESSAGES",
                    channelId: e,
                    truncateBottom: t,
                    truncateTop: n
                })
            },
            clearChannel(e) {
                o.default.dispatch({
                    type: "CLEAR_MESSAGES",
                    channelId: e
                })
            },
            jumpToPresent(e, t) {
                em.trackJump(e, null, "Present");
                let n = {
                    present: !0
                };
                W.default.hasPresent(e) ? o.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    jump: n,
                    channelId: e,
                    limit: t
                }) : em.fetchMessages({
                    channelId: e,
                    limit: t,
                    jump: n
                })
            },
            trackJump(e, t, n, i) {
                d.default.trackWithMetadata(eo.AnalyticEvents.JUMP, {
                    context: n,
                    channel_id: e,
                    message_id: t,
                    ...i
                })
            },
            jumpToMessage(e) {
                let {
                    channelId: t,
                    messageId: n,
                    flash: i = !1,
                    offset: s,
                    context: r,
                    extraProperties: a = null,
                    isPreload: o,
                    returnMessageId: l,
                    skipLocalFetch: u,
                    jumpType: d
                } = e;
                return "string" == typeof r && em.trackJump(t, n, r, a), em.fetchMessages({
                    channelId: t,
                    limit: eo.MAX_MESSAGES_FOR_JUMP,
                    jump: {
                        messageId: n,
                        flash: i,
                        offset: s,
                        returnMessageId: l,
                        jumpType: d
                    },
                    isPreload: o,
                    skipLocalFetch: u
                })
            },
            focusMessage(e) {
                let {
                    channelId: t,
                    messageId: n
                } = e;
                em.fetchMessages({
                    channelId: t,
                    limit: eo.MAX_MESSAGES_FOR_JUMP,
                    focus: {
                        messageId: n
                    }
                })
            },
            fetchMessages(e) {
                let {
                    channelId: t,
                    before: n,
                    after: i,
                    limit: s,
                    jump: a,
                    focus: u,
                    isPreload: d,
                    skipLocalFetch: c,
                    truncate: f
                } = e, _ = Y.default.getChannel(t), h = p.default.isConnectedOrOverlay(), E = Date.now();
                if (null != _ && _.type === eo.ChannelTypes.GUILD_STORE) return !1;
                if (t === el.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
                if (ec.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(i, ". jump=").concat(JSON.stringify(a))), em._tryFetchMessagesCached({
                        channelId: t,
                        before: n,
                        after: i,
                        limit: s,
                        jump: a,
                        focus: u,
                        truncate: f
                    })) return;
                x.default.fetchMessages.recordStart();
                let g = null != a ? a : void 0;
                null == g && null != u && (g = {
                    ...u
                });
                let m = l.default.getOrCreate(t),
                    S = m.loadStart(g);
                l.default.commit(S), o.default.dispatch({
                    type: "LOAD_MESSAGES"
                });
                let v = null == g ? void 0 : g.messageId,
                    T = new eh;
                return !c && this.fetchLocalMessages(t, n, i, s, T), r.default.get({
                    url: eo.Endpoints.MESSAGES(t),
                    query: {
                        before: n,
                        after: i,
                        limit: s,
                        around: v,
                        preload: d
                    },
                    retries: 2,
                    oldFormErrors: !0
                }).then(e => (x.default.fetchMessages.recordEnd(), x.default.dispatchMessages.measure(() => {
                    let r = e.body,
                        l = null != n,
                        u = null != i,
                        d = null == n && null == i,
                        c = null != v || r.length === s && (l || d),
                        _ = null != v || u && r.length === s;
                    if (null != v) {
                        let e = Math.floor(s / 2),
                            n = [v, ...r.map(e => {
                                let {
                                    id: t
                                } = e;
                                return t
                            })].filter((e, t, n) => n.indexOf(e) === t).sort(er.default.compare),
                            i = n.indexOf(v);
                        if (i < e && (c = !1), r.length - i < e && (_ = !1), _ && r.length > 0) {
                            let e = q.default.lastMessageId(t);
                            r[0].id === e && (_ = !1)
                        }
                    }
                    ec.log("Fetched ".concat(r.length, " messages for ").concat(t, " isBefore:").concat(l, " isAfter:").concat(u)), T.markComplete(), o.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS",
                        channelId: t,
                        messages: r,
                        isBefore: l,
                        isAfter: u,
                        hasMoreBefore: c,
                        hasMoreAfter: _,
                        limit: s,
                        jump: a,
                        isStale: !h || p.default.lastTimeConnectedChanged() >= E,
                        truncate: f
                    })
                }), !0), () => (ec.log("Failed to fetch messages for ".concat(t)), o.default.dispatch({
                    type: "LOAD_MESSAGES_FAILURE",
                    channelId: t
                }), !1))
            },
            async fetchLocalMessages(e, t, n, i, s) {
                let r = Y.default.getBasicChannel(e),
                    a = l.default.getOrCreate(e),
                    u = c.default.database();
                if (null == u || null == r || null != t || null != n) {
                    x.default.addLocalMessages(e, -1);
                    return
                }
                if (a.ready && !a.cached) {
                    x.default.addLocalMessages(e, -2);
                    return
                }
                let d = await (0, f.tryLoadAsync)(() => _.default.load(u, e, i));
                if (null == d) {
                    x.default.addLocalMessages(e, -3);
                    return
                }
                if (ec.log("fetched ".concat(d.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(s.completed, ")")), x.default.addLocalMessages(e, d.messages.length), !s.completed && d.messages.length > 0) {
                    let t = d.messages.length >= i && d.connectionId === p.default.lastTimeConnectedChanged();
                    o.default.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: r.guild_id,
                        channelId: e,
                        users: d.users,
                        members: d.members,
                        messages: d.messages,
                        stale: !t
                    })
                }
            },
            async fetchNewLocalMessages(e, t) {
                var n;
                let i = Y.default.getBasicChannel(e),
                    s = c.default.database();
                if (null == s || null == i) return;
                let r = l.default.getOrCreate(e);
                if (r.hasMoreAfter) return;
                let a = await (0, f.tryLoadAsync)(() => _.default.load(s, e, t));
                if (null == a) return;
                r = l.default.getOrCreate(e);
                let u = null === (n = r.last()) || void 0 === n ? void 0 : n.id,
                    d = null == u ? a.messages : a.messages.filter(e => er.default.compare(e.id, u) > 0);
                ec.log("Fetched ".concat(a.messages.length, " messages from the cache after foregrounding. ").concat(d.length, " are new")), 0 !== d.length && o.default.dispatch({
                    type: "LOCAL_MESSAGES_LOADED",
                    guildId: i.guild_id,
                    channelId: e,
                    users: a.users,
                    members: a.members,
                    messages: d,
                    stale: !0
                })
            },
            _tryFetchMessagesCached(e) {
                let {
                    channelId: t,
                    before: n,
                    after: i,
                    limit: s,
                    jump: r,
                    focus: a,
                    truncate: l
                } = e, u = W.default.getMessages(t);
                if (u.cached || !u.ready) return !1;
                if ((null == r ? void 0 : r.messageId) != null || (null == a ? void 0 : a.messageId) != null) {
                    if ((null == r ? void 0 : r.messageId) != null && u.has(r.messageId, !1)) return o.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        jump: r,
                        limit: s,
                        truncate: l
                    }), !0;
                    if ((null == a ? void 0 : a.messageId) != null) {
                        if (u.has(a.messageId, !1)) return o.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            focus: a,
                            limit: s,
                            truncate: l
                        }), !0;
                        r = {
                            ...a
                        }
                    }
                    let e = (null == r ? void 0 : r.messageId) != null ? er.default.extractTimestamp(null == r ? void 0 : r.messageId) : 0,
                        n = u.first(),
                        i = u.last();
                    if (!u.hasMoreBefore && null != n && er.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != i && er.default.extractTimestamp(i.id) <= e || null != n && null != i && er.default.extractTimestamp(n.id) < e && er.default.extractTimestamp(i.id) > e) return o.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        jump: r,
                        limit: eo.MAX_MESSAGES_FOR_JUMP
                    }), !0
                } else if (null != n && u.hasBeforeCached(n)) return o.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    before: n,
                    limit: s,
                    truncate: l
                }), !0;
                else if (null != i && u.hasAfterCached(i)) return o.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    after: i,
                    limit: s,
                    truncate: l
                }), !0;
                return !1
            },
            async sendMessage(e, t) {
                var n;
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (t.reaction) return Promise.resolve();
                let r = await (0, U.default)(e);
                if (null != r) return em.sendMessage(r, t, i, s);
                let a = () => em._sendMessage(e, t, s),
                    o = A.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                        location: "8e1e29_1"
                    }).enableBackgroundSending ? y.default.backgroundify(a, void 0) : a,
                    l = null !== (n = s.nonce) && void 0 !== n ? n : (0, O.createNonce)();
                return (s = {
                    ...s,
                    nonce: l
                }, N.default.recordMessageSendAttempt(e, l), W.default.isReady(e)) ? o() : i && e !== el.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (ef.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
                    W.default.whenReady(e, () => {
                        ef.info("Channel ".concat(e, " is ready for sending now.")), o().then(t, n)
                    })
                })) : o()
            },
            getSendMessageOptionsForReply(e) {
                var t;
                if (null == e) return {};
                let n = {
                        guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
                        channel_id: e.channel.id,
                        message_id: e.message.id
                    },
                    i = e.shouldMention ? void 0 : {
                        parse: Object.values(eo.AllowedMentionTypes),
                        replied_user: !1
                    };
                return {
                    messageReference: n,
                    allowedMentions: i
                }
            },
            sendInvite: (e, t, n, i) => em._sendMessage(e, {
                content: (0, C.default)(t),
                tts: !1,
                validNonShortcutEmojis: [],
                invalidEmojis: []
            }, {
                location: n,
                suggestedInvite: null != i ? i : void 0
            }),
            sendActivityBookmark: (e, t, n, i) => em._sendMessage(e, {
                content: t,
                tts: !1,
                validNonShortcutEmojis: [],
                invalidEmojis: []
            }, {
                location: n,
                suggestedInvite: null != i ? i : void 0
            }),
            sendStickers(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return em._sendMessage(e, {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: s
                }, {
                    ...i,
                    stickerIds: t
                })
            },
            sendGreetMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        messageReference: i,
                        allowedMentions: s
                    } = n;
                return r.default.post({
                    url: eo.Endpoints.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: s,
                        message_reference: i
                    },
                    oldFormErrors: !0
                }).then(n => (R.default.donateSentMessage(n.body.content, e), em.receiveMessage(e, n.body), o.default.dispatch({
                    type: "STICKER_TRACK_USAGE",
                    stickerIds: [t]
                }), n), t => {
                    throw ec.log("Failed to send greeting"), 429 !== t.status && em.sendClydeError(e, t.body.code), o.default.dispatch({
                        type: "MESSAGE_SEND_FAILED",
                        messageId: t.body.id,
                        channelId: e
                    }), t
                })
            },
            sendPollMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return em._sendMessage(e, {
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
                var i, r;
                let a = (0, U.default)(e);
                if (null != a) return ef.info("Converting channel to a private channel"), a.then(e => {
                    ef.info("Finished converting channel to a private channel"), em._sendMessage(e, t, n)
                });
                let l = t.content,
                    {
                        invalidEmojis: c,
                        validNonShortcutEmojis: f,
                        tts: _ = !1
                    } = t,
                    {
                        activityAction: g,
                        location: m,
                        suggestedInvite: p,
                        stickerIds: S,
                        messageReference: I,
                        allowedMentions: C,
                        poll: A
                    } = n,
                    y = null !== (i = n.flags) && void 0 !== i ? i : 0,
                    [P, k] = (0, G.default)(l);
                if (P && (l = k, y = (0, et.addFlag)(y, eo.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === l && null == g && null == S && null == A) return Promise.resolve();
                let F = null != I ? eo.MessageTypes.REPLY : eo.MessageTypes.DEFAULT,
                    x = null !== (r = n.nonce) && void 0 !== r ? r : (0, O.createNonce)();
                if (!1 !== n.eagerDispatch) {
                    let t = (0, O.default)({
                        channelId: e,
                        content: l,
                        tts: _,
                        type: F,
                        messageReference: I,
                        allowedMentions: C,
                        flags: 0 !== y ? y : void 0,
                        nonce: x,
                        poll: (0, b.createPollServerDataFromCreateRequest)(A)
                    });
                    (0, M.updateComboOnMessageSend)(e, t.id), null != S && (t.sticker_items = S.map(e => V.default.getStickerById(e)).filter(e => null != e)), em.receiveMessage(e, t, !0, n)
                }
                if (!e_ && null != c && c.length > 0) {
                    let t, n;
                    e_ = !0;
                    let i = J.default.getCurrentUser();
                    c.some(e => e.animated) && !es.default.canUseAnimatedEmojis(i) ? (t = ed.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : K.default.canWithPartialContext(eo.Permissions.USE_EXTERNAL_EMOJIS, {
                        channelId: e
                    }) ? (t = ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), em.sendBotMessage(e, t, n)
                }
                let B = {
                    type: u.MessageDataType.SEND,
                    message: {
                        channelId: e,
                        content: l,
                        nonce: x,
                        tts: _,
                        message_reference: I,
                        allowed_mentions: C,
                        flags: y
                    }
                };
                if (null != g) {
                    let e = g.type === eo.ActivityActionTypes.JOIN_REQUEST ? null == g ? void 0 : g.activity.session_id : H.default.getSessionId();
                    if (null != e) {
                        let t = {
                                type: g.type,
                                session_id: e
                            },
                            {
                                activity: n
                            } = g;
                        null != n.party && null != n.party.id && (t.party_id = n.party.id), B.message.application_id = n.application_id, B.message.activity = t
                    }
                }
                return null != A && (B.message.poll = A), null != S && (B.message.sticker_ids = S), L.default.isEnabled() && (B.message.has_poggermode_enabled = !0), new Promise((t, i) => {
                    let r = Date.now(),
                        a = u.default.length,
                        c = Math.floor(1e4 * Math.random());
                    ef.info("Queueing message to be sent LogId:".concat(c)), u.default.enqueue(B, u => {
                        let c = Date.now() - r;
                        if (u.ok) R.default.donateSentMessage(l, e), em.receiveMessage(e, u.body, !0, {
                            sendAnalytics: {
                                duration: c,
                                queueSize: a
                            },
                            poll: A
                        }), N.default.recordMessageSendApiResponse(x), o.default.dispatch({
                            type: "SLOWMODE_RESET_COOLDOWN",
                            slowmodeType: Z.SlowmodeType.SendMessage,
                            channelId: e
                        }), o.default.dispatch({
                            type: "EMOJI_TRACK_USAGE",
                            emojiUsed: f
                        }), o.default.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: S
                        }), o.default.dispatch({
                            type: "LOCAL_MESSAGE_CREATE",
                            message: {
                                channel_id: e,
                                author: J.default.getCurrentUser()
                            }
                        }), ! function(e) {
                            let {
                                content: t,
                                channelId: n,
                                messageId: i,
                                location: r,
                                suggested: a = null,
                                overrideProperties: o = {}
                            } = e;
                            (0, E.default)(t).forEach(e => {
                                let {
                                    type: t,
                                    code: l
                                } = e;
                                if (t === h.CodedLinkType.INVITE) eE({
                                    inviteKey: l,
                                    channelId: n,
                                    messageId: i,
                                    location: r,
                                    suggested: a,
                                    overrideProperties: o
                                });
                                else if (t === h.CodedLinkType.TEMPLATE) {
                                    let e = T.default.getGuildTemplate(l);
                                    if (null == e || e.state === eu.GuildTemplateStates.RESOLVING) return;
                                    d.default.trackWithMetadata(eo.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                                        guild_template_code: l,
                                        guild_template_name: e.name,
                                        guild_template_description: e.description,
                                        guild_template_guild_id: e.sourceGuildId
                                    })
                                } else if (t === h.CodedLinkType.BUILD_OVERRIDE);
                                else if (t === h.CodedLinkType.MANUAL_BUILD_OVERRIDE);
                                else if (t === h.CodedLinkType.EVENT);
                                else if (t === h.CodedLinkType.CHANNEL_LINK);
                                else if (t === h.CodedLinkType.APP_DIRECTORY_PROFILE) $.default.track(eo.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                    application_id: l,
                                    device_platform: s.isMobile ? "mobile_web" : "desktop_web",
                                    guild_id: Q.default.getGuildId(),
                                    channel_id: X.default.getChannelId()
                                });
                                else if (t === h.CodedLinkType.ACTIVITY_BOOKMARK);
                                else if (t === h.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                                else if (t === h.CodedLinkType.GUILD_PRODUCT);
                                else if (t === h.CodedLinkType.SERVER_SHOP);
                                else if (t === h.CodedLinkType.QUESTS_EMBED) {
                                    var u;
                                    (0, w.trackQuestEvent)(l, eo.AnalyticEvents.QUEST_LINK_SHARED, {
                                        guild_id: Q.default.getGuildId(),
                                        channel_type: null === (u = Y.default.getChannel(X.default.getChannelId())) || void 0 === u ? void 0 : u.type
                                    })
                                } else throw Error("Unknown coded link type: ".concat(t))
                            })
                        }({
                            content: l,
                            channelId: e,
                            messageId: u.body.id,
                            location: null != m ? m : "chat_input",
                            suggested: p
                        }), ! function(e, t, n, i, s) {
                            (0, en.findGiftCodes)(e).forEach(e => {
                                let r = Y.default.getChannel(t);
                                null != r && d.default.trackWithMetadata(eo.AnalyticEvents.GIFT_CODE_SENT, {
                                    location: i,
                                    gift_code: e,
                                    guild_id: r.getGuildId(),
                                    channel_id: r.id,
                                    channel_type: r.type,
                                    message_id: n,
                                    automatic_send: s
                                })
                            })
                        }(l, e, u.body.id, null != m ? m : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(u);
                        else {
                            var _;
                            ec.log("Failed to send message", {
                                hasErr: u.hasErr,
                                status: u.status,
                                code: null === (_ = u.body) || void 0 === _ ? void 0 : _.code,
                                error: u.err
                            });
                            let t = !1;
                            if (u.hasErr) "ABORTED" === u.err.code && (t = !0);
                            else if (u.status >= 400 && u.status < 500 && u.body) {
                                if (u.body.code === eo.AbortCodes.SLOWMODE_RATE_LIMITED) {
                                    let t = u.body.retry_after;
                                    null != t && t > 0 && o.default.dispatch({
                                        type: "SLOWMODE_SET_COOLDOWN",
                                        channelId: e,
                                        slowmodeType: Z.SlowmodeType.SendMessage,
                                        cooldownMs: t * ee.default.Millis.SECOND
                                    })
                                } else v.AUTOMOD_ERROR_CODES.has(u.body.code) ? o.default.dispatch({
                                    type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                    messageData: B,
                                    errorResponseBody: {
                                        code: u.body.code,
                                        message: u.body.message
                                    }
                                }) : u.body.code === eo.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? o.default.dispatch({
                                    type: "POGGERMODE_TEMPORARILY_DISABLED"
                                }) : null != A || em.sendClydeError(e, u.body.code)
                            }
                            t ? em.deleteMessage(e, x, !0) : (o.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: x,
                                channelId: e
                            }), (0, D.logMessageSendFailure)({
                                failureCode: u.hasErr ? void 0 : u.status,
                                errorMessage: u.hasErr ? u.err.message : void 0
                            })), i(u)
                        }
                    }, c)
                })
            },
            startEditMessage(e, t, n, i) {
                o.default.dispatch({
                    type: "MESSAGE_START_EDIT",
                    channelId: e,
                    messageId: t,
                    content: n,
                    source: i
                })
            },
            updateEditMessage(e, t, n) {
                o.default.dispatch({
                    type: "MESSAGE_UPDATE_EDIT",
                    channelId: e,
                    textValue: t,
                    richValue: n
                })
            },
            endEditMessage(e, t) {
                o.default.dispatch({
                    type: "MESSAGE_END_EDIT",
                    channelId: e,
                    response: t
                })
            },
            async editMessage(e, t, n) {
                let {
                    content: i
                } = n;
                await F.default.unarchiveThreadIfNecessary(e);
                let s = function(e, t) {
                        let n = W.default.getMessage(e, t);
                        if (null == n || n.type !== eo.MessageTypes.REPLY) return;
                        let i = k.default.getMessageByReference(n.messageReference);
                        if (i.state === k.ReferencedMessageState.LOADED) {
                            if (!n.mentions.includes(i.message.author.id)) return {
                                parse: Object.values(eo.AllowedMentionTypes),
                                replied_user: !1
                            }
                        }
                    }(e, t),
                    r = {
                        channelId: e,
                        messageId: t,
                        content: i,
                        allowed_mentions: s
                    };
                u.default.enqueue({
                    type: u.MessageDataType.EDIT,
                    message: r
                }, n => {
                    let i = !n.hasErr && v.AUTOMOD_ERROR_CODES.has(n.body.code);
                    if (i) {
                        let e = {
                            type: u.MessageDataType.EDIT,
                            message: r
                        };
                        o.default.dispatch({
                            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                            messageData: e,
                            errorResponseBody: {
                                code: n.body.code,
                                message: n.body.message
                            }
                        })
                    }
                    n.hasErr ? a.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : i ? a.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : a.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), em.endEditMessage(e, n.hasErr ? void 0 : n), em.focusMessage({
                        channelId: e,
                        messageId: t
                    })
                })
            },
            async suppressEmbeds(e, t) {
                await F.default.unarchiveThreadIfNecessary(e), r.default.patch({
                    url: eo.Endpoints.MESSAGE(e, t),
                    body: {
                        flags: eo.MessageFlags.SUPPRESS_EMBEDS
                    },
                    oldFormErrors: !0
                })
            },
            async patchMessageAttachments(e, t, n) {
                await F.default.unarchiveThreadIfNecessary(e), r.default.patch({
                    url: eo.Endpoints.MESSAGE(e, t),
                    body: {
                        attachments: n
                    },
                    oldFormErrors: !0
                })
            },
            async deleteMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = () => {
                        o.default.dispatch({
                            type: "MESSAGE_DELETE",
                            id: t,
                            channelId: e
                        }).then(() => {
                            a.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                        })
                    };
                n ? i() : (await F.default.unarchiveThreadIfNecessary(e), r.default.delete({
                    url: eo.Endpoints.MESSAGE(e, t),
                    oldFormErrors: !0
                }).then(() => {
                    i()
                }));
                let s = W.default.getMessage(e, t);
                (null == s ? void 0 : s.type) === eo.MessageTypes.GUILD_INVITE_REMINDER && (0, P.trackGuildInviteNotificationDismissed)()
            },
            dismissAutomatedMessage(e) {
                null != e.loggingName && d.default.trackWithMetadata(eo.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username
                }), this.deleteMessage(e.channel_id, e.id, !0)
            },
            revealMessage(e, t) {
                o.default.dispatch({
                    type: "MESSAGE_REVEAL",
                    channelId: e,
                    messageId: t
                })
            },
            crosspostMessage: (e, t) => r.default.post({
                url: eo.Endpoints.MESSAGE_CROSSPOST(e, t),
                oldFormErrors: !0
            }).catch(e => {
                let t;
                t = 429 === e.status ? ed.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                    retryAfter: Math.floor(e.body.retry_after / 60)
                }) : ed.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, ea.default.show({
                    title: ed.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                    body: t,
                    confirmText: ed.default.Messages.OKAY
                })
            }),
            trackInvite: eE
        };
    var ep = em
}