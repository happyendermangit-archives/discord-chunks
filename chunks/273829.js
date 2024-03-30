function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canEditMessageWithStickers: function() {
            return D
        },
        createMessageRecord: function() {
            return g
        },
        updateMessageRecord: function() {
            return b
        },
        updateServerMessage: function() {
            return A
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("964164");
    n("340318");
    var a = n("395676"),
        u = n("443699"),
        s = n("55065"),
        l = n("715689"),
        c = n("428009"),
        f = n("217014"),
        d = n("776982"),
        _ = n("208454"),
        E = n("136938"),
        p = n("758989");
    n("374550"), n("830567");
    var m = n("645339");
    n("970930");
    var y = n("401146"),
        I = n("281767");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n("941504");

    function O(e) {
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

    function T(e, t) {
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

    function S(e) {
        return function(e) {
            if (Array.isArray(e)) return h(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var v = new c.default({
        id: "???",
        username: "???"
    });

    function g(e) {
        var t, n, r, o, u, E, y, h, S, g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            A = g.reactions,
            b = g.interactionData,
            D = null !== (E = null === (r = e.mentions) || void 0 === r ? void 0 : r.map(function(e) {
                return e.id
            })) && void 0 !== E ? E : [],
            L = null !== (y = e.mention_roles) && void 0 !== y ? y : [],
            M = null !== (h = e.mention_channels) && void 0 !== h ? h : [],
            U = e.message_reference,
            w = new Date(e.timestamp),
            k = e.type === I.MessageTypes.THREAD_CREATED ? [] : (0, i.default)(e.content);
        var G = null == (t = e).author ? v : null != t.webhook_id ? new c.default(t.author) : null !== (n = _.default.getUser(t.author.id)) && void 0 !== n ? n : new c.default(t.author),
            B = null == e ? void 0 : e.gift_info,
            j = null != e.interaction ? s.default.createFromServer(e.interaction) : null,
            F = e.type === I.MessageTypes.THREAD_STARTER_MESSAGE ? null === (u = e.referenced_message) || void 0 === u ? void 0 : null === (o = u.author) || void 0 === o ? void 0 : o.id : void 0,
            V = e.type === I.MessageTypes.PREMIUM_REFERRAL ? e.content : void 0,
            H = e.content;
        return e.type === I.MessageTypes.PREMIUM_REFERRAL && (H = ""), new l.default(T(O({}, e, null), {
            author: G,
            webhookId: e.webhook_id,
            blocked: d.default.isBlocked(G.id) || null != F && d.default.isBlocked(F),
            timestamp: w,
            editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
            mentionEveryone: e.mention_everyone,
            mentions: D,
            mentionRoles: L,
            mentionChannels: M,
            messageReference: U,
            mentioned: (0, m.isMentioned)({
                userId: f.default.getId(),
                channelId: e.channel_id,
                mentionEveryone: null !== (S = e.mention_everyone) && void 0 !== S && S,
                mentionUsers: D,
                mentionRoles: L
            }),
            attachments: N(e),
            embeds: C(e),
            codedLinks: k,
            giftCodes: (0, p.isGiftCodeEmbed)(e) ? (0, p.findGiftCodes)(null == e ? void 0 : e.embeds[0].url) : (0, p.findGiftCodes)(e.content),
            content: H,
            referralTrialOfferId: V,
            call: R(e.call, w),
            reactions: P(null != A ? A : e.reactions, e.poll),
            interaction: j,
            interactionData: null != b ? b : e.interaction_data,
            interactionMetadata: e.interaction_metadata,
            roleSubscriptionData: e.role_subscription_data,
            purchaseNotification: e.purchase_notification,
            poll: null == e.poll ? void 0 : (0, a.default)(e.poll),
            giftInfo: null == B ? void 0 : B
        }))
    }

    function A(e, t) {
        return null != t.edited_timestamp ? T(O({}, t), {
            reactions: e.reactions,
            interaction_data: e.interaction_data
        }) : O({}, e, t)
    }

    function b(e, t) {
        if (null != t.edited_timestamp) return g(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
        var n, r = e;
        return null != t.call && (r = r.set("call", R(t.call, e.timestamp))), null != t.attachments && (r = r.set("attachments", N(t))), null != t.content && "" !== t.content && (r = r.set("content", t.content)), null != t.embeds && (r = r.set("embeds", C(t))), t.pinned !== r.pinned && (r = r.set("pinned", t.pinned)), null != r.webhookId && null != t.author && (r = r.set("author", new c.default(t.author))), null != t.flags && t.flags !== r.flags && (r = r.set("flags", t.flags)), null != t.components && (r = r.set("components", t.components)), null != t.role_subscription_data && (r = r.set("roleSubscriptionData", t.role_subscription_data)), null != t.reactions && (r = r.set("reactions", P(null !== (n = e.reactions) && void 0 !== n ? n : t.reactions))), null != t.poll && (r = r.set("poll", (0, a.default)(t.poll))), r
    }

    function N(e) {
        return null == e.attachments ? [] : e.attachments.map(function(e) {
            return T(O({}, e), {
                spoiler: e.filename.startsWith(y.SPOILER_ATTACHMENT_PREFIX)
            })
        })
    }

    function R(e, t) {
        if (null != e) {
            var n = null != e.ended_timestamp ? o()(new Date(e.ended_timestamp)) : null,
                r = null != n ? o().duration(n.diff(t)) : null;
            return {
                participants: e.participants,
                endedTimestamp: n,
                duration: r
            }
        }
        return null
    }

    function C(e) {
        if (null == e.embeds) return [];
        var t = e.embeds.map(function(t) {
            return (0, E.sanitizeEmbed)(e.channel_id, e.id, t)
        });
        return (0, E.mergeEmbedsOnURL)(t)
    }

    function P(e, t) {
        if (null == e && (null == t ? void 0 : t.results) == null) return [];
        var n, r = null == t ? void 0 : null === (n = t.results) || void 0 === n ? void 0 : n.answer_counts.map(function(e) {
            return {
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
            }
        });
        return S(null != e ? e : []).concat(S(null != r ? r : [])).map(function(e) {
            var t, n, r = O({}, e);
            return (null == r ? void 0 : r.count_details) != null && (r.burst_count = null !== (t = r.count_details.burst) && void 0 !== t ? t : 0, r.count = null !== (n = r.count_details.normal) && void 0 !== n ? n : 0), r.count < 0 && (r.count = 0), r.burst_count < 0 && (r.burst_count = 0), r
        })
    }
    var D = function(e) {
        return 0 === (0, u.getMessageStickers)(e).length || "" !== e.content
    }
}