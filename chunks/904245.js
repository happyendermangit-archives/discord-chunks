function(e, t, n) {
    "use strict";
    n.r(t), n("411104"), n("627341"), n("47120"), n("789020");
    var i = n("278074"),
        r = n("873546"),
        s = n("544891"),
        a = n("780384"),
        o = n("570140"),
        l = n("89892"),
        u = n("673750"),
        d = n("367907"),
        _ = n("287328"),
        c = n("86670"),
        E = n("685736"),
        I = n("960904"),
        T = n("830121"),
        f = n("710845"),
        S = n("163268"),
        h = n("38618"),
        A = n("687516"),
        m = n("539573"),
        N = n("409059"),
        p = n("264229"),
        O = n("366980"),
        R = n("287925"),
        C = n("779832"),
        g = n("459618"),
        L = n("541288"),
        D = n("3148"),
        v = n("785359"),
        M = n("646504"),
        y = n("64078"),
        P = n("351780"),
        U = n("79390"),
        b = n("643266"),
        G = n("617136");
    n("807092");
    var w = n("869765"),
        B = n("926491"),
        k = n("467798"),
        V = n("346479"),
        x = n("218543"),
        F = n("199902"),
        H = n("314897"),
        Y = n("592125");
    n("323873");
    var j = n("701190"),
        W = n("375954"),
        K = n("496675"),
        z = n("158776"),
        X = n("306680"),
        Q = n("944486"),
        q = n("914010"),
        Z = n("300429"),
        J = n("594174"),
        $ = n("626135"),
        ee = n("70956"),
        et = n("630388"),
        en = n("669079"),
        ei = n("63063"),
        er = n("74538"),
        es = n("709054"),
        ea = n("668781"),
        eo = n("981631"),
        el = n("176505"),
        eu = n("58346"),
        ed = n("689938");
    let e_ = new f.default("MessageActionCreators"),
        ec = new f.default("MessageQueue"),
        eE = !1;
    class eI {
        markComplete() {
            this.completed = !0
        }
        constructor() {
            var e, t, n;
            e = this, n = !1, (t = "completed") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }

    function eT(e) {
        let {
            inviteKey: t,
            channelId: n,
            messageId: i,
            location: r,
            suggested: s = null,
            overrideProperties: a = {}
        } = e, o = (0, p.parseExtraDataFromInviteKey)(t), l = Y.default.getChannel(n);
        if (null != l) {
            let e = null;
            l.isMultiUserDM() ? e = eo.LoggingInviteTypes.GDM_INVITE : !l.isPrivate() && (e = eo.LoggingInviteTypes.SERVER_INVITE);
            let n = {},
                _ = j.default.getInvite(t);
            if (null != _ && _.state === eo.InviteStates.RESOLVED && null != _.channel) {
                var u;
                let t = _.channel;
                n.invite_channel_id = t.id, n.invite_guild_id = null === (u = _.guild) || void 0 === u ? void 0 : u.id, n.invite_channel_type = t.type, null != _.inviter && (n.invite_inviter_id = _.inviter.id);
                let i = F.default.getLastActiveStream();
                if (null != i && i.channelId === t.id) {
                    e = eo.LoggingInviteTypes.STREAM, n.destination_user_id = i.ownerId;
                    let t = (0, A.getStreamerApplication)(i, z.default);
                    n.application_id = null != t ? t.id : null
                }
            }
            null != s && (n.is_suggested = s.isAffinitySuggestion, n.row_num = s.rowNum, n.num_total = s.numTotal, n.num_affinity_connections = s.numAffinityConnections, n.is_filtered = s.isFiltered), n = {
                ...n,
                location: r,
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
                location: r,
                invite_type: eo.LoggingInviteTypes.FRIEND_INVITE,
                invite_code: o.baseCode,
                message_id: i,
                send_type: eo.SendTypes.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: o.guildScheduledEventId,
                ...a
            }, d.default.trackWithMetadata(eo.AnalyticEvents.INVITE_SENT, e))
        }
    }
    let ef = {
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
        eS = {
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
                }), eS.receiveMessage(e, (0, D.createBotMessage)({
                    messageId: i,
                    channelId: e,
                    content: t,
                    loggingName: n
                }))
            },
            sendClydeError(e) {
                let t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = Y.default.getChannel(e);
                null != r && (i === eo.AbortCodes.SLOWMODE_RATE_LIMITED ? (t = ed.default.Messages.CHANNEL_SLOWMODE_DESC.format({
                    seconds: r.rateLimitPerUser
                }), n = "SLOWMODE_RATE_LIMITED") : i === eo.AbortCodes.INVALID_MESSAGE_SEND_USER ? (t = ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                    helpUrl: ei.default.getArticleURL(eo.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                }), n = "INVALID_MESSAGE_SEND_USER") : i === eo.AbortCodes.TOO_MANY_THREADS ? (t = r.isForumLikeChannel() || r.isForumPost() ? ed.default.Messages.BOT_DM_TOO_MANY_POSTS : ed.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS") : i === eo.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ed.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : i === eo.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ed.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                    helpUrl: eo.MarketingURLs.HARMFUL_LINKS
                }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : i in ef ? (n = ef[i].messageName, t = ef[i].messageGetter()) : (t = ed.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                    helpUrl: ei.default.getArticleURL(eo.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
                }), n = "SEND_FAILED (".concat(i, ")")), eS.sendBotMessage(e, t, n))
            },
            sendExplicitMediaClydeError(e, t, n) {
                let r = Y.default.getChannel(e);
                if (null == r) return;
                let {
                    message: s,
                    messageName: a
                } = (0, i.match)({
                    isDM: r.isDM(),
                    isGDM: r.isGroupDM()
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
                })), l = (0, D.createNonce)();
                eS.sendBotMessage(e, s, a, l), (0, S.trackMediaRedactionAction)({
                    action: S.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
                eS.trackJump(e, null, "Present");
                let n = {
                    present: !0
                };
                W.default.hasPresent(e) ? o.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    jump: n,
                    channelId: e,
                    limit: t
                }) : eS.fetchMessages({
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
                    offset: r,
                    context: s,
                    extraProperties: a = null,
                    isPreload: o,
                    returnMessageId: l,
                    skipLocalFetch: u,
                    jumpType: d
                } = e;
                return "string" == typeof s && eS.trackJump(t, n, s, a), eS.fetchMessages({
                    channelId: t,
                    limit: eo.MAX_MESSAGES_FOR_JUMP,
                    jump: {
                        messageId: n,
                        flash: i,
                        offset: r,
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
                eS.fetchMessages({
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
                    limit: r,
                    jump: a,
                    focus: u,
                    isPreload: d,
                    skipLocalFetch: _,
                    truncate: c
                } = e, E = Y.default.getChannel(t), I = h.default.isConnectedOrOverlay(), T = Date.now();
                if (null != E && E.type === eo.ChannelTypes.GUILD_STORE) return !1;
                if (t === el.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
                if (e_.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(i, ". jump=").concat(JSON.stringify(a))), eS._tryFetchMessagesCached({
                        channelId: t,
                        before: n,
                        after: i,
                        limit: r,
                        jump: a,
                        focus: u,
                        truncate: c
                    })) return;
                x.default.fetchMessages.recordStart();
                let f = null != a ? a : void 0;
                null == f && null != u && (f = {
                    ...u
                });
                let S = l.default.getOrCreate(t).loadStart(f);
                l.default.commit(S), o.default.dispatch({
                    type: "LOAD_MESSAGES"
                });
                let A = null == f ? void 0 : f.messageId,
                    m = new eI;
                return !_ && this.fetchLocalMessages(t, n, i, r, m), s.HTTP.get({
                    url: eo.Endpoints.MESSAGES(t),
                    query: {
                        before: n,
                        after: i,
                        limit: r,
                        around: A,
                        preload: d
                    },
                    retries: 2,
                    oldFormErrors: !0
                }).then(e => (x.default.fetchMessages.recordEnd(), x.default.dispatchMessages.measure(() => {
                    let s = e.body,
                        l = null != n,
                        u = null != i,
                        d = null == n && null == i,
                        _ = null != A || s.length === r && (l || d),
                        E = null != A || u && s.length === r;
                    if (null != A) {
                        let e = Math.floor(r / 2),
                            n = [A, ...s.map(e => {
                                let {
                                    id: t
                                } = e;
                                return t
                            })].filter((e, t, n) => n.indexOf(e) === t).sort(es.default.compare).indexOf(A);
                        if (n < e && (_ = !1), s.length - n < e && (E = !1), E && s.length > 0) {
                            let e = X.default.lastMessageId(t);
                            s[0].id === e && (E = !1)
                        }
                    }
                    e_.log("Fetched ".concat(s.length, " messages for ").concat(t, " isBefore:").concat(l, " isAfter:").concat(u)), m.markComplete(), o.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS",
                        channelId: t,
                        messages: s,
                        isBefore: l,
                        isAfter: u,
                        hasMoreBefore: _,
                        hasMoreAfter: E,
                        limit: r,
                        jump: a,
                        isStale: !I || h.default.lastTimeConnectedChanged() >= T,
                        truncate: c
                    })
                }), !0), () => (e_.log("Failed to fetch messages for ".concat(t)), o.default.dispatch({
                    type: "LOAD_MESSAGES_FAILURE",
                    channelId: t
                }), !1))
            },
            async fetchLocalMessages(e, t, n, i, r) {
                let s = Y.default.getBasicChannel(e),
                    a = l.default.getOrCreate(e),
                    u = _.default.database();
                if (null == u || null == s || null != t || null != n) {
                    x.default.addLocalMessages(e, -1);
                    return
                }
                if (a.ready && !a.cached) {
                    x.default.addLocalMessages(e, -2);
                    return
                }
                let d = await (0, c.tryLoadAsync)(() => E.default.load(u, e, i));
                if (null == d) {
                    x.default.addLocalMessages(e, -3);
                    return
                }
                if (e_.log("fetched ".concat(d.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(r.completed, ")")), x.default.addLocalMessages(e, d.messages.length), !r.completed && d.messages.length > 0) {
                    let t = d.messages.length >= i && d.connectionId === h.default.lastTimeConnectedChanged();
                    o.default.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: s.guild_id,
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
                    r = _.default.database();
                if (null == r || null == i) return;
                let s = l.default.getOrCreate(e);
                if (s.hasMoreAfter) return;
                let a = await (0, c.tryLoadAsync)(() => E.default.load(r, e, t));
                if (null == a) return;
                let u = null === (n = (s = l.default.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
                    d = null == u ? a.messages : a.messages.filter(e => es.default.compare(e.id, u) > 0);
                e_.log("Fetched ".concat(a.messages.length, " messages from the cache after foregrounding. ").concat(d.length, " are new")), 0 !== d.length && o.default.dispatch({
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
                    limit: r,
                    jump: s,
                    focus: a,
                    truncate: l
                } = e, u = W.default.getMessages(t);
                if (u.cached || !u.ready) return !1;
                if ((null == s ? void 0 : s.messageId) != null || (null == a ? void 0 : a.messageId) != null) {
                    if ((null == s ? void 0 : s.messageId) != null && u.has(s.messageId, !1)) return o.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        jump: s,
                        limit: r,
                        truncate: l
                    }), !0;
                    if ((null == a ? void 0 : a.messageId) != null) {
                        if (u.has(a.messageId, !1)) return o.default.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            focus: a,
                            limit: r,
                            truncate: l
                        }), !0;
                        s = {
                            ...a
                        }
                    }
                    let e = (null == s ? void 0 : s.messageId) != null ? es.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
                        n = u.first(),
                        i = u.last();
                    if (!u.hasMoreBefore && null != n && es.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != i && es.default.extractTimestamp(i.id) <= e || null != n && null != i && es.default.extractTimestamp(n.id) < e && es.default.extractTimestamp(i.id) > e) return o.default.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        jump: s,
                        limit: eo.MAX_MESSAGES_FOR_JUMP
                    }), !0
                } else if (null != n && u.hasBeforeCached(n)) return o.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    before: n,
                    limit: r,
                    truncate: l
                }), !0;
                else if (null != i && u.hasAfterCached(i)) return o.default.dispatch({
                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                    channelId: t,
                    after: i,
                    limit: r,
                    truncate: l
                }), !0;
                return !1
            },
            async sendMessage(e, t) {
                var n;
                let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (t.reaction) return Promise.resolve();
                let s = await (0, b.default)(e);
                if (null != s) return eS.sendMessage(s, t, i, r);
                let a = () => eS._sendMessage(e, t, r),
                    o = R.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
                        location: "8e1e29_1"
                    }).enableBackgroundSending ? C.default.backgroundify(a, void 0) : a,
                    l = null !== (n = r.nonce) && void 0 !== n ? n : (0, D.createNonce)();
                return (r = {
                    ...r,
                    nonce: l
                }, g.default.recordMessageSendAttempt(e, l), W.default.isReady(e)) ? o() : i && e !== el.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (ec.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
                    W.default.whenReady(e, () => {
                        ec.info("Channel ".concat(e, " is ready for sending now.")), o().then(t, n)
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
                };
                return {
                    messageReference: n,
                    allowedMentions: e.shouldMention ? void 0 : {
                        parse: Object.values(eo.AllowedMentionTypes),
                        replied_user: !1
                    }
                }
            },
            sendInvite: (e, t, n, i) => eS._sendMessage(e, {
                content: (0, O.default)(t),
                tts: !1,
                validNonShortcutEmojis: [],
                invalidEmojis: []
            }, {
                location: n,
                suggestedInvite: null != i ? i : void 0
            }),
            sendActivityBookmark: (e, t, n, i) => eS._sendMessage(e, {
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
                    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                return eS._sendMessage(e, {
                    content: n,
                    invalidEmojis: [],
                    validNonShortcutEmojis: [],
                    tts: r
                }, {
                    ...i,
                    stickerIds: t
                })
            },
            sendGreetMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        messageReference: i,
                        allowedMentions: r
                    } = n;
                return s.HTTP.post({
                    url: eo.Endpoints.MESSAGES_GREET(e),
                    body: {
                        sticker_ids: [t],
                        allowed_mentions: r,
                        message_reference: i
                    },
                    oldFormErrors: !0
                }).then(n => (L.default.donateSentMessage(n.body.content, e), eS.receiveMessage(e, n.body), o.default.dispatch({
                    type: "STICKER_TRACK_USAGE",
                    stickerIds: [t]
                }), n), t => {
                    throw e_.log("Failed to send greeting"), 429 !== t.status && eS.sendClydeError(e, t.body.code), o.default.dispatch({
                        type: "MESSAGE_SEND_FAILED",
                        messageId: t.body.id,
                        channelId: e
                    }), t
                })
            },
            sendPollMessage(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return eS._sendMessage(e, {
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
                var i, s;
                let a = (0, b.default)(e);
                if (null != a) return ec.info("Converting channel to a private channel"), a.then(e => {
                    ec.info("Finished converting channel to a private channel"), eS._sendMessage(e, t, n)
                });
                let l = t.content,
                    {
                        invalidEmojis: _,
                        validNonShortcutEmojis: c,
                        tts: E = !1
                    } = t,
                    {
                        activityAction: f,
                        location: S,
                        suggestedInvite: h,
                        stickerIds: A,
                        messageReference: p,
                        allowedMentions: O,
                        poll: R
                    } = n,
                    C = null !== (i = n.flags) && void 0 !== i ? i : 0,
                    [M, w] = (0, k.default)(l);
                if (M && (l = w, C = (0, et.addFlag)(C, eo.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === l && null == f && null == A && null == R) return Promise.resolve();
                let V = null != p ? eo.MessageTypes.REPLY : eo.MessageTypes.DEFAULT,
                    x = null !== (s = n.nonce) && void 0 !== s ? s : (0, D.createNonce)();
                if (!1 !== n.eagerDispatch) {
                    let t = (0, D.default)({
                        channelId: e,
                        content: l,
                        tts: E,
                        type: V,
                        messageReference: p,
                        allowedMentions: O,
                        flags: 0 !== C ? C : void 0,
                        nonce: x,
                        poll: (0, U.createPollServerDataFromCreateRequest)(R)
                    });
                    (0, y.updateComboOnMessageSend)(e, t.id), null != A && (t.sticker_items = A.map(e => B.default.getStickerById(e)).filter(e => null != e)), eS.receiveMessage(e, t, !0, n)
                }
                if (!eE && null != _ && _.length > 0) {
                    let t, n;
                    eE = !0;
                    let i = J.default.getCurrentUser();
                    _.some(e => e.animated) && !er.default.canUseAnimatedEmojis(i) ? (t = ed.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : K.default.canWithPartialContext(eo.Permissions.USE_EXTERNAL_EMOJIS, {
                        channelId: e
                    }) ? (t = ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = ed.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eS.sendBotMessage(e, t, n)
                }
                let F = {
                    type: u.MessageDataType.SEND,
                    message: {
                        channelId: e,
                        content: l,
                        nonce: x,
                        tts: E,
                        message_reference: p,
                        allowed_mentions: O,
                        flags: C
                    }
                };
                if (null != f) {
                    let e = f.type === eo.ActivityActionTypes.JOIN_REQUEST ? null == f ? void 0 : f.activity.session_id : H.default.getSessionId();
                    if (null != e) {
                        let t = {
                                type: f.type,
                                session_id: e
                            },
                            {
                                activity: n
                            } = f;
                        null != n.party && null != n.party.id && (t.party_id = n.party.id), F.message.application_id = n.application_id, F.message.activity = t
                    }
                }
                return null != R && (F.message.poll = R), null != A && (F.message.sticker_ids = A), P.default.isEnabled() && (F.message.has_poggermode_enabled = !0), new Promise((t, i) => {
                    let s = Date.now(),
                        a = u.default.length,
                        _ = Math.floor(1e4 * Math.random());
                    ec.info("Queueing message to be sent LogId:".concat(_)), u.default.enqueue(F, u => {
                        let _ = Date.now() - s;
                        if (u.ok) L.default.donateSentMessage(l, e), eS.receiveMessage(e, u.body, !0, {
                            sendAnalytics: {
                                duration: _,
                                queueSize: a
                            },
                            poll: R
                        }), g.default.recordMessageSendApiResponse(x), o.default.dispatch({
                            type: "SLOWMODE_RESET_COOLDOWN",
                            slowmodeType: Z.SlowmodeType.SendMessage,
                            channelId: e
                        }), o.default.dispatch({
                            type: "EMOJI_TRACK_USAGE",
                            emojiUsed: c
                        }), o.default.dispatch({
                            type: "STICKER_TRACK_USAGE",
                            stickerIds: A
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
                                location: s,
                                suggested: a = null,
                                overrideProperties: o = {}
                            } = e;
                            (0, T.default)(t).forEach(e => {
                                let {
                                    type: t,
                                    code: l
                                } = e;
                                if (t === I.CodedLinkType.INVITE) eT({
                                    inviteKey: l,
                                    channelId: n,
                                    messageId: i,
                                    location: s,
                                    suggested: a,
                                    overrideProperties: o
                                });
                                else if (t === I.CodedLinkType.TEMPLATE) {
                                    let e = N.default.getGuildTemplate(l);
                                    if (null == e || e.state === eu.GuildTemplateStates.RESOLVING) return;
                                    d.default.trackWithMetadata(eo.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                                        guild_template_code: l,
                                        guild_template_name: e.name,
                                        guild_template_description: e.description,
                                        guild_template_guild_id: e.sourceGuildId
                                    })
                                } else if (t === I.CodedLinkType.BUILD_OVERRIDE);
                                else if (t === I.CodedLinkType.MANUAL_BUILD_OVERRIDE);
                                else if (t === I.CodedLinkType.EVENT);
                                else if (t === I.CodedLinkType.CHANNEL_LINK);
                                else if (t === I.CodedLinkType.APP_DIRECTORY_PROFILE) $.default.track(eo.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                    application_id: l,
                                    device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                                    guild_id: q.default.getGuildId(),
                                    channel_id: Q.default.getChannelId()
                                });
                                else if (t === I.CodedLinkType.ACTIVITY_BOOKMARK);
                                else if (t === I.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                                else if (t === I.CodedLinkType.GUILD_PRODUCT);
                                else if (t === I.CodedLinkType.SERVER_SHOP);
                                else if (t === I.CodedLinkType.QUESTS_EMBED)(0, G.trackQuestEvent)({
                                    questId: l,
                                    event: eo.AnalyticEvents.QUEST_LINK_SHARED,
                                    trackGuildAndChannelMetadata: !0
                                });
                                else throw Error("Unknown coded link type: ".concat(t))
                            })
                        }({
                            content: l,
                            channelId: e,
                            messageId: u.body.id,
                            location: null != S ? S : "chat_input",
                            suggested: h
                        }), ! function(e, t, n, i, r) {
                            (0, en.findGiftCodes)(e).forEach(e => {
                                let s = Y.default.getChannel(t);
                                null != s && d.default.trackWithMetadata(eo.AnalyticEvents.GIFT_CODE_SENT, {
                                    location: i,
                                    gift_code: e,
                                    guild_id: s.getGuildId(),
                                    channel_id: s.id,
                                    channel_type: s.type,
                                    message_id: n,
                                    automatic_send: r
                                })
                            })
                        }(l, e, u.body.id, null != S ? S : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(u);
                        else {
                            var E;
                            e_.log("Failed to send message", {
                                hasErr: u.hasErr,
                                status: u.status,
                                code: null === (E = u.body) || void 0 === E ? void 0 : E.code,
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
                                } else m.AUTOMOD_ERROR_CODES.has(u.body.code) ? o.default.dispatch({
                                    type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                    messageData: F,
                                    errorResponseBody: {
                                        code: u.body.code,
                                        message: u.body.message
                                    }
                                }) : u.body.code === eo.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? o.default.dispatch({
                                    type: "POGGERMODE_TEMPORARILY_DISABLED"
                                }) : null != R || eS.sendClydeError(e, u.body.code)
                            }
                            t ? eS.deleteMessage(e, x, !0) : (o.default.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: x,
                                channelId: e
                            }), (0, v.logMessageSendFailure)({
                                failureCode: u.hasErr ? void 0 : u.status,
                                errorMessage: u.hasErr ? u.err.message : void 0
                            })), i(u)
                        }
                    }, _)
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
                await V.default.unarchiveThreadIfNecessary(e);
                let r = function(e, t) {
                        let n = W.default.getMessage(e, t);
                        if (null == n || n.type !== eo.MessageTypes.REPLY) return;
                        let i = w.default.getMessageByReference(n.messageReference);
                        if (i.state === w.ReferencedMessageState.LOADED) {
                            if (!n.mentions.includes(i.message.author.id)) return {
                                parse: Object.values(eo.AllowedMentionTypes),
                                replied_user: !1
                            }
                        }
                    }(e, t),
                    s = {
                        channelId: e,
                        messageId: t,
                        content: i,
                        allowed_mentions: r
                    };
                u.default.enqueue({
                    type: u.MessageDataType.EDIT,
                    message: s
                }, n => {
                    let i = !n.hasErr && m.AUTOMOD_ERROR_CODES.has(n.body.code);
                    if (i) {
                        let e = {
                            type: u.MessageDataType.EDIT,
                            message: s
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
                    n.hasErr ? a.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : i ? a.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : a.AccessibilityAnnouncer.announce(ed.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eS.endEditMessage(e, n.hasErr ? void 0 : n), eS.focusMessage({
                        channelId: e,
                        messageId: t
                    })
                })
            },
            async suppressEmbeds(e, t) {
                await V.default.unarchiveThreadIfNecessary(e), s.HTTP.patch({
                    url: eo.Endpoints.MESSAGE(e, t),
                    body: {
                        flags: eo.MessageFlags.SUPPRESS_EMBEDS
                    },
                    oldFormErrors: !0
                })
            },
            async patchMessageAttachments(e, t, n) {
                await V.default.unarchiveThreadIfNecessary(e), s.HTTP.patch({
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
                n ? i() : (await V.default.unarchiveThreadIfNecessary(e), s.HTTP.del({
                    url: eo.Endpoints.MESSAGE(e, t),
                    oldFormErrors: !0
                }).then(() => {
                    i()
                }));
                let r = W.default.getMessage(e, t);
                (null == r ? void 0 : r.type) === eo.MessageTypes.GUILD_INVITE_REMINDER && (0, M.trackGuildInviteNotificationDismissed)()
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
            crosspostMessage: (e, t) => s.HTTP.post({
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
            trackInvite: eT
        };
    t.default = eS
}