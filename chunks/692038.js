function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createMessageRecord: function() {
            return v
        },
        updateServerMessage: function() {
            return T
        },
        updateMessageRecord: function() {
            return I
        },
        canEditMessageWithStickers: function() {
            return R
        }
    }), n("702976"), n("222007");
    var i = n("866227"),
        s = n.n(i),
        r = n("312016");
    n("584375");
    var a = n("552310"),
        o = n("24373"),
        l = n("459018"),
        u = n("719926"),
        d = n("766274"),
        c = n("271938"),
        _ = n("27618"),
        f = n("697218"),
        E = n("240873"),
        h = n("659632");
    n("773336"), n("158998");
    var g = n("406297");
    n("574073");
    var m = n("894488"),
        p = n("49111");
    n("782340");
    let S = new d.default({
        id: "???",
        username: "???"
    });

    function v(e) {
        var t, n, i, s, o, E, m, v, T;
        let {
            reactions: I,
            interactionData: R
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, O = null !== (s = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== s ? s : [], D = null !== (o = e.mention_roles) && void 0 !== o ? o : [], P = null !== (E = e.mention_channels) && void 0 !== E ? E : [], L = e.message_reference, M = new Date(e.timestamp), b = e.type === p.MessageTypes.THREAD_CREATED ? [] : (0, r.default)(e.content);
        let U = null == (v = e).author ? S : null != v.webhook_id ? new d.default(v.author) : null !== (T = f.default.getUser(v.author.id)) && void 0 !== T ? T : new d.default(v.author),
            w = null == e ? void 0 : e.gift_info,
            k = null != e.interaction ? l.default.createFromServer(e.interaction) : null,
            V = e.type === p.MessageTypes.THREAD_STARTER_MESSAGE ? null === (i = e.referenced_message) || void 0 === i ? void 0 : null === (n = i.author) || void 0 === n ? void 0 : n.id : void 0,
            G = e.type === p.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
            F = e.content;
        return e.type === p.MessageTypes.PREMIUM_REFERRAL && (F = ""), new u.default({
            ...e,
            author: U,
            webhookId: e.webhook_id,
            blocked: _.default.isBlocked(U.id) || null != V && _.default.isBlocked(V),
            timestamp: M,
            editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
            mentionEveryone: e.mention_everyone,
            mentions: O,
            mentionRoles: D,
            mentionChannels: P,
            messageReference: L,
            mentioned: (0, g.isMentioned)({
                userId: c.default.getId(),
                channelId: e.channel_id,
                mentionEveryone: null !== (m = e.mention_everyone) && void 0 !== m && m,
                mentionUsers: O,
                mentionRoles: D
            }),
            attachments: A(e),
            embeds: y(e),
            codedLinks: b,
            giftCodes: (0, h.isGiftCodeEmbed)(e) ? (0, h.findGiftCodes)((null == e ? void 0 : e.embeds[0]).url) : (0, h.findGiftCodes)(e.content),
            content: F,
            referralTrialOfferId: G,
            call: C(e.call, M),
            reactions: N(null != I ? I : e.reactions, e.poll),
            interaction: k,
            interactionData: null != R ? R : e.interaction_data,
            interactionMetadata: e.interaction_metadata,
            roleSubscriptionData: e.role_subscription_data,
            purchaseNotification: e.purchase_notification,
            poll: null == e.poll ? void 0 : (0, a.default)(e.poll),
            giftInfo: null == w ? void 0 : w
        })
    }

    function T(e, t) {
        return null != t.edited_timestamp ? {
            ...t,
            reactions: e.reactions,
            interaction_data: e.interaction_data
        } : {
            ...e,
            ...t
        }
    }

    function I(e, t) {
        if (null != t.edited_timestamp) return v(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
        let n = e;
        if (null != t.call && (n = n.set("call", C(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", A(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", y(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new d.default(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", t.components)), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
            var i;
            n = n.set("reactions", N(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions))
        }
        return null != t.poll && (n = n.set("poll", (0, a.default)(t.poll))), n
    }

    function A(e) {
        return null == e.attachments ? [] : e.attachments.map(e => ({
            ...e,
            spoiler: e.filename.startsWith(m.SPOILER_ATTACHMENT_PREFIX)
        }))
    }

    function C(e, t) {
        if (null != e) {
            let n = null != e.ended_timestamp ? s(new Date(e.ended_timestamp)) : null,
                i = null != n ? s.duration(n.diff(t)) : null;
            return {
                participants: e.participants,
                endedTimestamp: n,
                duration: i
            }
        }
        return null
    }

    function y(e) {
        if (null == e.embeds) return [];
        let t = e.embeds.map(t => (0, E.sanitizeEmbed)(e.channel_id, e.id, t));
        return (0, E.mergeEmbedsOnURL)(t)
    }

    function N(e, t) {
        var n;
        if (null == e && (null == t ? void 0 : t.results) == null) return [];
        let i = null == t ? void 0 : null === (n = t.results) || void 0 === n ? void 0 : n.answer_counts.map(e => {
                let t = {
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
                };
                return t
            }),
            s = [...null != e ? e : [], ...null != i ? i : []];
        return s.map(e => {
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
    let R = e => {
        let t = (0, o.getMessageStickers)(e);
        return 0 === t.length || "" !== e.content
    }
}