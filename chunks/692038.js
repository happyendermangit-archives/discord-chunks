function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createMessageRecord: function() {
            return y
        },
        updateServerMessage: function() {
            return T
        },
        updateMessageRecord: function() {
            return C
        },
        canEditMessageWithStickers: function() {
            return N
        }
    }), n("702976"), n("222007");
    var s = n("866227"),
        i = n.n(s),
        r = n("312016");
    n("584375");
    var a = n("552310"),
        o = n("24373"),
        d = n("459018"),
        u = n("719926"),
        l = n("766274"),
        f = n("271938"),
        _ = n("27618"),
        c = n("697218"),
        g = n("240873"),
        m = n("659632");
    n("773336"), n("158998");
    var h = n("406297");
    n("574073");
    var v = n("894488"),
        E = n("49111");
    n("782340");
    let p = new l.default({
        id: "???",
        username: "???"
    });

    function y(e) {
        var t, n, s, i, o, g, v, y, T;
        let {
            reactions: C,
            interactionData: N
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, O = null !== (i = null === (t = e.mentions) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== i ? i : [], P = null !== (o = e.mention_roles) && void 0 !== o ? o : [], b = null !== (g = e.mention_channels) && void 0 !== g ? g : [], V = e.message_reference, R = new Date(e.timestamp), k = e.type === E.MessageTypes.THREAD_CREATED ? [] : (0, r.default)(e.content);
        let M = null == (y = e).author ? p : null != y.webhook_id ? new l.default(y.author) : null !== (T = c.default.getUser(y.author.id)) && void 0 !== T ? T : new l.default(y.author),
            w = null == e ? void 0 : e.gift_info,
            L = null != e.interaction ? d.default.createFromServer(e.interaction) : null,
            U = e.type === E.MessageTypes.THREAD_STARTER_MESSAGE ? null === (s = e.referenced_message) || void 0 === s ? void 0 : null === (n = s.author) || void 0 === n ? void 0 : n.id : void 0,
            G = e.type === E.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
            F = e.content;
        return e.type === E.MessageTypes.PREMIUM_REFERRAL && (F = ""), new u.default({
            ...e,
            author: M,
            webhookId: e.webhook_id,
            blocked: _.default.isBlocked(M.id) || null != U && _.default.isBlocked(U),
            timestamp: R,
            editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
            mentionEveryone: e.mention_everyone,
            mentions: O,
            mentionRoles: P,
            mentionChannels: b,
            messageReference: V,
            mentioned: (0, h.isMentioned)({
                userId: f.default.getId(),
                channelId: e.channel_id,
                mentionEveryone: null !== (v = e.mention_everyone) && void 0 !== v && v,
                mentionUsers: O,
                mentionRoles: P
            }),
            attachments: I(e),
            embeds: A(e),
            codedLinks: k,
            giftCodes: (0, m.isGiftCodeEmbed)(e) ? (0, m.findGiftCodes)((null == e ? void 0 : e.embeds[0]).url) : (0, m.findGiftCodes)(e.content),
            content: F,
            referralTrialOfferId: G,
            call: S(e.call, R),
            reactions: D(null != C ? C : e.reactions, e.poll),
            interaction: L,
            interactionData: null != N ? N : e.interaction_data,
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

    function C(e, t) {
        if (null != t.edited_timestamp) return y(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
        let n = e;
        if (null != t.call && (n = n.set("call", S(t.call, e.timestamp))), null != t.attachments && (n = n.set("attachments", I(t))), null != t.content && "" !== t.content && (n = n.set("content", t.content)), null != t.embeds && (n = n.set("embeds", A(t))), t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)), null != n.webhookId && null != t.author && (n = n.set("author", new l.default(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)), null != t.components && (n = n.set("components", t.components)), null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions) {
            var s;
            n = n.set("reactions", D(null !== (s = e.reactions) && void 0 !== s ? s : t.reactions))
        }
        return null != t.poll && (n = n.set("poll", (0, a.default)(t.poll))), n
    }

    function I(e) {
        return null == e.attachments ? [] : e.attachments.map(e => ({
            ...e,
            spoiler: e.filename.startsWith(v.SPOILER_ATTACHMENT_PREFIX)
        }))
    }

    function S(e, t) {
        if (null != e) {
            let n = null != e.ended_timestamp ? i(new Date(e.ended_timestamp)) : null,
                s = null != n ? i.duration(n.diff(t)) : null;
            return {
                participants: e.participants,
                endedTimestamp: n,
                duration: s
            }
        }
        return null
    }

    function A(e) {
        if (null == e.embeds) return [];
        let t = e.embeds.map(t => (0, g.sanitizeEmbed)(e.channel_id, e.id, t));
        return (0, g.mergeEmbedsOnURL)(t)
    }

    function D(e, t) {
        var n, s;
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
        });
        e = null !== (s = null == e ? void 0 : e.filter(e => (null == e ? void 0 : e.me_vote) == null)) && void 0 !== s ? s : [];
        let r = [...e, ...null != i ? i : []];
        return r.map(e => {
            let t = {
                ...e
            };
            if ((null == t ? void 0 : t.count_details) != null) {
                var n, s;
                t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0, t.count = null !== (s = t.count_details.normal) && void 0 !== s ? s : 0
            }
            return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t
        })
    }
    let N = e => {
        let t = (0, o.getMessageStickers)(e);
        return 0 === t.length || "" !== e.content
    }
}