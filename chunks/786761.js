function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canEditMessageWithStickers: function() {
            return D
        },
        createMessageRecord: function() {
            return N
        },
        updateMessageRecord: function() {
            return O
        },
        updateServerMessage: function() {
            return p
        }
    }), n("789020"), n("47120");
    var i = n("913527"),
        r = n.n(i),
        s = n("830121");
    n("712057");
    var a = n("292419"),
        o = n("330044"),
        l = n("378233"),
        u = n("360742"),
        d = n("23750"),
        _ = n("598077"),
        c = n("314897"),
        E = n("699516"),
        I = n("594174"),
        T = n("408433"),
        f = n("669079");
    n("358085"), n("51144");
    var S = n("572804");
    n("739566");
    var h = n("959517"),
        A = n("981631");
    n("689938");
    let m = new _.default({
        id: "???",
        username: "???"
    });

    function N(e) {
        var t, n, i, r, l, T, h, N, p, O;
        let {
            reactions: D,
            interactionData: v
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, M = null !== (r = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== r ? r : [], y = null !== (l = e.mention_roles) && void 0 !== l ? l : [], P = null !== (T = e.mention_channels) && void 0 !== T ? T : [], U = e.message_reference, b = new Date(e.timestamp), G = e.type === A.MessageTypes.THREAD_CREATED ? [] : (0, s.default)(e.content);
        let w = null == (p = e).author ? m : null != p.webhook_id ? new _.default(p.author) : null !== (O = I.default.getUser(p.author.id)) && void 0 !== O ? O : new _.default(p.author),
            k = null == e ? void 0 : e.gift_info,
            B = null != e.interaction ? u.default.createFromServer(e.interaction) : null,
            V = e.type === A.MessageTypes.THREAD_STARTER_MESSAGE ? null === (i = e.referenced_message) || void 0 === i ? void 0 : null === (n = i.author) || void 0 === n ? void 0 : n.id : void 0,
            x = e.type === A.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
            F = e.content;
        return e.type === A.MessageTypes.PREMIUM_REFERRAL && (F = ""), new d.default({
            ...e,
            author: w,
            webhookId: e.webhook_id,
            blocked: E.default.isBlocked(w.id) || null != V && E.default.isBlocked(V),
            timestamp: b,
            editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
            mentionEveryone: e.mention_everyone,
            mentions: M,
            mentionRoles: y,
            mentionChannels: P,
            messageReference: U,
            mentioned: (0, S.isMentioned)({
                userId: c.default.getId(),
                channelId: e.channel_id,
                mentionEveryone: null !== (h = e.mention_everyone) && void 0 !== h && h,
                mentionUsers: M,
                mentionRoles: y
            }),
            attachments: R(e),
            embeds: g(e),
            components: (0, a.transformComponents)(null !== (N = e.components) && void 0 !== N ? N : [], {
                includeEmojiSrc: !1
            }),
            codedLinks: G,
            giftCodes: (0, f.isGiftCodeEmbed)(e) ? (0, f.findGiftCodes)(null == e ? void 0 : e.embeds[0].url) : (0, f.findGiftCodes)(e.content),
            content: F,
            referralTrialOfferId: x,
            call: C(e.call, b),
            reactions: L(null != D ? D : e.reactions, e.poll),
            interaction: B,
            interactionData: null != v ? v : e.interaction_data,
            interactionMetadata: e.interaction_metadata,
            roleSubscriptionData: e.role_subscription_data,
            purchaseNotification: e.purchase_notification,
            poll: null == e.poll ? void 0 : (0, o.default)(e.poll),
            giftInfo: null == k ? void 0 : k
        })
    }

    function p(e, t) {
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
        if (null != t.edited_timestamp) return N(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
        let n = e;
        if (null != t.call && (n = n.set("call", C(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", R(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", g(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new _.default(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", (0, a.transformComponents)(t.components, {
                includeEmojiSrc: !1
            }))), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
            var i;
            n = n.set("reactions", L(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions))
        }
        return null != t.poll && (n = n.set("poll", (0, o.default)(t.poll))), n
    }

    function R(e) {
        return null == e.attachments ? [] : e.attachments.map(e => ({
            ...e,
            spoiler: e.filename.startsWith(h.SPOILER_ATTACHMENT_PREFIX)
        }))
    }

    function C(e, t) {
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

    function g(e) {
        if (null == e.embeds) return [];
        let t = e.embeds.map(t => (0, T.sanitizeEmbed)(e.channel_id, e.id, t));
        return (0, T.mergeEmbedsOnURL)(t)
    }

    function L(e, t) {
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
    let D = e => 0 === (0, l.getMessageStickers)(e).length || "" !== e.content
}