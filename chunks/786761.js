function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canEditMessageWithStickers: function() {
            return L
        },
        createMessageRecord: function() {
            return m
        },
        updateMessageRecord: function() {
            return O
        },
        updateServerMessage: function() {
            return N
        }
    }), n("789020"), n("47120");
    var i = n("913527"),
        r = n.n(i),
        s = n("830121");
    n("712057");
    var a = n("330044"),
        o = n("378233"),
        l = n("360742"),
        u = n("23750"),
        d = n("598077"),
        _ = n("314897"),
        c = n("699516"),
        E = n("594174"),
        I = n("408433"),
        T = n("669079");
    n("358085"), n("51144");
    var f = n("572804");
    n("739566");
    var S = n("959517"),
        A = n("981631");
    n("689938");
    let h = new d.default({
        id: "???",
        username: "???"
    });

    function m(e) {
        var t, n, i, r, o, I, S, m, N;
        let {
            reactions: O,
            interactionData: L
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, D = null !== (r = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== r ? r : [], v = null !== (o = e.mention_roles) && void 0 !== o ? o : [], M = null !== (I = e.mention_channels) && void 0 !== I ? I : [], y = e.message_reference, P = new Date(e.timestamp), U = e.type === A.MessageTypes.THREAD_CREATED ? [] : (0, s.default)(e.content);
        let b = null == (m = e).author ? h : null != m.webhook_id ? new d.default(m.author) : null !== (N = E.default.getUser(m.author.id)) && void 0 !== N ? N : new d.default(m.author),
            G = null == e ? void 0 : e.gift_info,
            w = null != e.interaction ? l.default.createFromServer(e.interaction) : null,
            k = e.type === A.MessageTypes.THREAD_STARTER_MESSAGE ? null === (i = e.referenced_message) || void 0 === i ? void 0 : null === (n = i.author) || void 0 === n ? void 0 : n.id : void 0,
            B = e.type === A.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
            F = e.content;
        return e.type === A.MessageTypes.PREMIUM_REFERRAL && (F = ""), new u.default({
            ...e,
            author: b,
            webhookId: e.webhook_id,
            blocked: c.default.isBlocked(b.id) || null != k && c.default.isBlocked(k),
            timestamp: P,
            editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
            mentionEveryone: e.mention_everyone,
            mentions: D,
            mentionRoles: v,
            mentionChannels: M,
            messageReference: y,
            mentioned: (0, f.isMentioned)({
                userId: _.default.getId(),
                channelId: e.channel_id,
                mentionEveryone: null !== (S = e.mention_everyone) && void 0 !== S && S,
                mentionUsers: D,
                mentionRoles: v
            }),
            attachments: p(e),
            embeds: C(e),
            codedLinks: U,
            giftCodes: (0, T.isGiftCodeEmbed)(e) ? (0, T.findGiftCodes)(null == e ? void 0 : e.embeds[0].url) : (0, T.findGiftCodes)(e.content),
            content: F,
            referralTrialOfferId: B,
            call: R(e.call, P),
            reactions: g(null != O ? O : e.reactions, e.poll),
            interaction: w,
            interactionData: null != L ? L : e.interaction_data,
            interactionMetadata: e.interaction_metadata,
            roleSubscriptionData: e.role_subscription_data,
            purchaseNotification: e.purchase_notification,
            poll: null == e.poll ? void 0 : (0, a.default)(e.poll),
            giftInfo: null == G ? void 0 : G
        })
    }

    function N(e, t) {
        return null != t.edited_timestamp ? {
            ...t,
            reactions: e.reactions,
            interaction_data: e.interaction_data
        } : {
            ...e,
            ...t
        }
    }

    function O(e, t) {
        if (null != t.edited_timestamp) return m(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
        let n = e;
        if (null != t.call && (n = n.set("call", R(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", p(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", C(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new d.default(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", t.components)), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
            var i;
            n = n.set("reactions", g(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions))
        }
        return null != t.poll && (n = n.set("poll", (0, a.default)(t.poll))), n
    }

    function p(e) {
        return null == e.attachments ? [] : e.attachments.map(e => ({
            ...e,
            spoiler: e.filename.startsWith(S.SPOILER_ATTACHMENT_PREFIX)
        }))
    }

    function R(e, t) {
        if (null != e) {
            let n = null != e.ended_timestamp ? r()(new Date(e.ended_timestamp)) : null,
                i = null != n ? r().duration(n.diff(t)) : null;
            return {
                participants: e.participants,
                endedTimestamp: n,
                duration: i
            }
        }
        return null
    }

    function C(e) {
        if (null == e.embeds) return [];
        let t = e.embeds.map(t => (0, I.sanitizeEmbed)(e.channel_id, e.id, t));
        return (0, I.mergeEmbedsOnURL)(t)
    }

    function g(e, t) {
        var n;
        if (null == e && (null == t ? void 0 : t.results) == null) return [];
        let i = null == t ? void 0 : null === (n = t.results) || void 0 === n ? void 0 : n.answer_counts.map(e => ({
            count_details: {
                vote: e.count
            },
            me_vote: e.me_voted,
            emoji: {
                id: e.id.toString(),
                name: "",
                animated: !1
            },
            me: !1,
            me_burst: !1,
            count: e.count,
            burst_count: 0
        }));
        return [...null != e ? e : [], ...null != i ? i : []].map(e => {
            let t = {
                ...e
            };
            if ((null == t ? void 0 : t.count_details) != null) {
                var n, i;
                t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0, t.count = null !== (i = t.count_details.normal) && void 0 !== i ? i : 0
            }
            return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t
        })
    }
    let L = e => 0 === (0, o.getMessageStickers)(e).length || "" !== e.content
}