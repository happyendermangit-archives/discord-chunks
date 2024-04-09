function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: function() {
            return A
        },
        mergeUser: function() {
            return p
        },
        transformUser: function() {
            return N
        },
        users: function() {
            return S
        }
    }), n("47120"), n("789020"), n("724458"), n("51350"), n("653041");
    var i = n("392711"),
        r = n("864106"),
        s = n("900489"),
        a = n("502087"),
        o = n("911955"),
        l = n("168232"),
        u = n("598077"),
        d = n("630388"),
        _ = n("823379"),
        c = n("314897"),
        E = n("412788"),
        I = n("981631"),
        T = n("474936");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let S = {},
        h = 0,
        A = "47835198259242069";

    function m(e, t, n) {
        let i = e;
        i = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), S[e.id] = i;
        let r = e !== i;
        return r && h++, r
    }

    function N(e) {
        let t = e.mfa_enabled;
        null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
        let n = (0, l.getPremiumTypeFromRawValue)(e.premium_type);
        void 0 !== n && (e.premiumType = n, delete e.premium_type);
        let i = e.nsfw_allowed;
        null != i && (e.nsfwAllowed = i, delete e.nsfw_allowed);
        let s = e.public_flags;
        null != s && (e.publicFlags = s, delete e.public_flags);
        let a = e.purchased_flags;
        void 0 !== a && (e.purchasedFlags = a, delete e.purchased_flags);
        let o = e.premium_usage_flags;
        void 0 !== o && (e.premiumUsageFlags = o, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
        let u = e.avatar_decoration_data;
        void 0 !== u && (e.avatarDecorationData = (0, r.parseAvatarDecorationData)(u), delete e.avatar_decoration_data);
        let d = e.global_name;
        return void 0 !== d && (e.globalName = d, delete e.global_name), e
    }

    function O(e) {
        return e.id !== c.default.getId()
    }

    function p(e) {
        let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = S[e.id],
            r = void 0 !== e.id && e.id === c.default.getId();
        if (null == i) void 0 !== (t = (i = new u.default(e)).premiumType) && r && (i.premiumType = R((0, l.isStaffEnv)(i), i.premiumType));
        else if (n) {
            var s;
            let n = N(e);
            void 0 !== (t = null !== (s = n.premium_type) && void 0 !== s ? s : n.premiumType) && r && (0, l.isStaffEnvRawData)(n) && (n = function(e) {
                var t;
                let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
                    i = R((0, l.isStaffEnvRawData)(e), n);
                return void 0 !== e.premiumType ? e.premiumType = i : void 0 !== e.premium_type && (e.premium_type = i), e
            }(n)), i = i.merge(n)
        }(0, l.validatePremiumType)((0, l.isStaffEnv)(i), t, i.premiumType);
        let a = S[e.id] !== i;
        return S[e.id] = i, a && h++, a
    }

    function R(e, t) {
        if (!e) return t;
        let n = a.default.getPremiumTypeOverride(),
            i = a.default.getPremiumTypeActual();
        return n === T.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? i : n
    }

    function C(e, t) {
        var n, i, r, s, a;
        if (null != e.author && "SENDING" !== e.state && O(e.author) && p(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
                O(e) && p(e, t)
            }), (null === (i = e.interaction) || void 0 === i ? void 0 : i.user) != null && O(null === (r = e.interaction) || void 0 === r ? void 0 : r.user) && p(e.interaction.user, t), null === (s = e.attachments) || void 0 === s || s.forEach(e => {
                var n;
                null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
                    O(e) && p(e, t)
                })
            }), (null === (a = e.resolved) || void 0 === a ? void 0 : a.users) != null)
            for (let n in e.resolved.users) {
                let i = e.resolved.users[n];
                O(i) && p(i, t)
            }
    }

    function g(e) {
        null != e.application.bot && p(e.application.bot)
    }

    function L(e) {
        let {
            user: t,
            users: n,
            guilds: i
        } = e;
        delete t.premium, delete t.banner_color, p(t), n.forEach(e => {
            p(e)
        }), i.forEach(e => {
            e.members.forEach(t => {
                let n = S[t.user.id];
                null != n && m(n, e.id, t.avatar)
            })
        }), null != S[c.default.getId()] && (S[A] = new u.default({
            id: A,
            username: "Wumpus",
            discriminator: "0",
            globalName: "Wumpus",
            avatar: "c1f86b313385cb97985f1b118851c28c"
        }))
    }

    function D(e) {
        let {
            guilds: t,
            lazyPrivateChannels: n
        } = e;
        t.forEach(e => {
            e.members.forEach(t => {
                let n = S[t.user.id];
                null != n && m(n, e.id, t.avatar)
            })
        }), null == n || n.forEach(e => {
            var t;
            null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
                p(e)
            })
        })
    }

    function v(e) {
        return !("incomplete" in e)
    }

    function M(e) {
        if (null != e.users)
            for (let t of e.users) !(t.id in S && v(t)) && (S[t.id] = new u.default(t))
    }

    function y(e) {
        let {
            user: t
        } = e;
        t.id !== c.default.getId() && p(t)
    }

    function P(e) {
        let {
            user: t
        } = e;
        p(t)
    }

    function U(e) {
        let {
            user: t
        } = e;
        p(t)
    }

    function b(e) {
        let {
            messages: t
        } = e;
        return t.forEach(e => C(e, !0)), !1
    }

    function G(e) {
        let {
            mostRecentMessages: t
        } = e;
        return null == t || t.forEach(e => C(e, !1)), !1
    }

    function w(e) {
        let {
            messages: t
        } = e;
        return t.forEach(e => b({
            messages: e
        })), !1
    }

    function B(e) {
        let {
            data: t
        } = e;
        (0, s.getMessagesFromGuildFeedFetch)(t).forEach(e => C(e, !0))
    }

    function k(e) {
        let {
            firstMessages: t,
            owners: n
        } = e;
        null != t && t.forEach(e => C(e, !0)), null != n && n.forEach(e => p(e.user, !0))
    }

    function V(e) {
        let {
            threads: t
        } = e;
        Object.values(t).forEach(e => {
            let {
                first_message: t,
                most_recent_message: n,
                owner: i
            } = e;
            null != t && C(t, !0), null != n && C(n, !0), null != i && null != i.user && p(i.user, !0)
        })
    }

    function F(e) {
        let {
            supplementalData: t
        } = e;
        Object.values(t).forEach(e => {
            let {
                message_preview: t
            } = e;
            null != t && C(t, !0)
        })
    }

    function x(e) {
        let {
            guildScheduledEventUsers: t,
            guildId: n
        } = e;
        t.forEach(e => {
            let {
                user: t,
                member: i
            } = e;
            if (null == t) return;
            p(t);
            let r = S[t.id],
                s = null == i ? void 0 : i.avatar;
            null != r && null != s && m(r, n, s)
        })
    }

    function H(e) {
        let {
            items: t
        } = e;
        t.forEach(e => {
            null != e.other_user && p(e.other_user)
        })
    }

    function Y(e) {
        let {
            item: t
        } = e;
        null != t.other_user && p(t.other_user)
    }

    function j(e) {
        let {
            message: t
        } = e;
        if (C(t, !0), null != t.flags && d.hasFlag(t.flags, I.MessageFlags.URGENT)) {
            let e = S[c.default.getId()];
            return null != e && (S[c.default.getId()] = e.set("flags", d.setFlag(e.flags, I.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
        }
        return !1
    }

    function W(e) {
        let {
            channel: {
                rawRecipients: t
            }
        } = e;
        return null != t && t.forEach(e => p(e)), !1
    }

    function K(e) {
        let {
            channels: t
        } = e;
        for (let {
                rawRecipients: e
            }
            of t) null != e && e.forEach(e => p(e));
        return !1
    }
    let z = ["username", "avatar", "global_name", "discriminator", "bot"];

    function X(e) {
        let {
            updates: t
        } = e;
        return t.map(e => {
            let t = S[e.user.id];
            if (null == t) return !1;
            let n = z.reduce((n, r) => {
                if (e.user.hasOwnProperty(r)) {
                    let s = t.set((0, i.camelCase)(r), e.user[r]);
                    n = n || s !== t, t = s
                }
                return n
            }, !1);
            return !!n && (S[t.id] = t, n)
        }).some(e => e)
    }

    function Q(e) {
        let {
            bans: t
        } = e;
        t.forEach(e => p(e.user))
    }

    function q(e) {
        let {
            bans: t
        } = e;
        t.forEach(e => p(e.user))
    }

    function J(e) {
        return p(e.user)
    }

    function Z(e) {
        return !!e.isMember && p(e.user)
    }

    function $(e) {
        let t = p(e.user),
            n = S[e.user.id];
        if (null == n) return t;
        let {
            avatar: i,
            guildId: r
        } = e;
        return m(n, r, i) || t
    }

    function ee(e) {
        let {
            members: t,
            guildId: n
        } = e;
        return t.reduce((e, t) => {
            let i = p(t.user),
                r = S[t.user.id];
            if (null == r) return i || e;
            let {
                avatar: s
            } = t;
            return m(r, n, s) || i || e
        }, !1)
    }

    function et(e) {
        var t;
        let n = !1;
        for (let i of null !== (t = e.members) && void 0 !== t ? t : []) p(i.user) && (n = !0), null != S[i.user.id] && m(S[i.user.id], e.guildId, i.avatar) && (n = !0);
        return n
    }

    function en(e) {
        var t;
        let n = !1;
        for (let i of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(S, i.id) && (n = p(i) || n);
        return n
    }

    function ei(e) {
        let {
            members: t
        } = e, n = !1;
        return t.forEach(e => {
            null != e.member && p(e.member.user) && (n = !0), null != e.presence && p(e.presence.user) && (n = !0)
        }), n
    }

    function er(e) {
        let {
            addedMembers: t
        } = e, n = !1;
        return null == t || t.forEach(e => {
            null != e.member && p(e.member.user) && (n = !0), null != e.presence && p(e.presence.user) && (n = !0)
        }), n
    }

    function es(e) {
        let {
            guild: t
        } = e;
        t.members.forEach(e => {
            let {
                user: {
                    id: n,
                    username: i,
                    avatar: r,
                    discriminator: s,
                    bot: a
                },
                avatar: o
            } = e;
            n !== c.default.getId() && p({
                id: n,
                username: i,
                avatar: r,
                discriminator: s,
                bot: a
            });
            let l = S[n];
            null != l && m(l, t.id, o)
        })
    }

    function ea(e) {
        return p(e.relationship.user)
    }

    function eo(e) {
        let {
            relationships: t
        } = e;
        return t.reduce((e, t) => p(t.user) || e, !1)
    }

    function el(e) {
        return p(e.suggestion.suggested_user)
    }

    function eu(e) {
        let {
            suggestions: t
        } = e;
        return t.reduce((e, t) => p(t.suggested_user) || e, !1)
    }

    function ed(e) {
        let {
            users: t
        } = e;
        t.forEach(e => {
            null == S[e.id] && (S[e.id] = new u.default(e))
        })
    }

    function e_(e) {
        let {
            lobby: t
        } = e;
        return t.members.reduce((e, t) => p(t.user) || e, !1)
    }

    function ec(e) {
        return p(e.member.user)
    }

    function eE(e) {
        let {
            giftCode: t
        } = e;
        return null != t.user && p(t.user)
    }

    function eI(e) {
        let {
            appliedBoosts: t
        } = e;
        t.forEach(e => {
            let {
                user: t
            } = e;
            null != t && p(t)
        })
    }

    function eT(e) {
        let {
            request: t
        } = e, {
            user: n,
            actioned_by_user: i
        } = t, r = !1;
        return null != n && (r = r || p(n)), null != i && (r = r || p(i)), r
    }

    function ef(e) {
        let {
            integrations: t
        } = e;
        t.forEach(e => g((0, o.createPrivateChannelIntegration)(e)))
    }

    function eS(e) {
        let {
            integration: t
        } = e;
        g((0, o.createPrivateChannelIntegration)(t))
    }

    function eh(e) {
        let {
            integration: t
        } = e;
        g((0, o.createPrivateChannelIntegration)(t))
    }

    function eA(e) {
        let {
            users: t,
            familyCenterTeenActivity: n
        } = e, {
            users: i
        } = n;
        return [...t, ...i].reduce((e, t) => p(t) || e, !1)
    }

    function em(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => p(t) || e, !1)
    }

    function eN(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => p(t) || e, !1)
    }

    function eO(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => p(t) || e, !1)
    }

    function ep(e) {
        let {
            familyCenterTeenActivity: t
        } = e;
        if (void 0 === t) return;
        let {
            users: n
        } = t;
        return n.reduce((e, t) => p(t) || e, !1)
    }

    function eR(e) {
        let {
            familyCenterTeenActivity: t
        } = e, {
            users: n
        } = t;
        return n.reduce((e, t) => p(t) || e, !1)
    }

    function eC(e) {
        let {
            members: t
        } = e, n = c.default.getId();
        return t.reduce((e, t) => t.member.user.id === n ? e : p(t.member.user) || e, !1)
    }
    class eg extends E.default {
        initialize() {
            this.waitFor(c.default)
        }
        takeSnapshot() {
            let e = this.getCurrentUser();
            return {
                version: eg.LATEST_SNAPSHOT_VERSION,
                data: {
                    users: [e].filter(_.isNotNullish)
                }
            }
        }
        handleLoadCache(e) {
            let t = this.readSnapshot(eg.LATEST_SNAPSHOT_VERSION);
            if (null != t)
                for (let e of t.users) S[e.id] = new u.default(e);
            if (null != e.users)
                for (let t of e.users) !(t.id in S && v(t)) && (S[t.id] = new u.default(t));
            for (let t of [e.privateChannels, e.initialGuildChannels])
                for (let e of t) {
                    var n;
                    null === (n = e.rawRecipients) || void 0 === n || n.forEach(e => p(e, !1))
                }
        }
        getUserStoreVersion() {
            return h
        }
        getUser(e) {
            if (null != e) return S[e]
        }
        getUsers() {
            return S
        }
        forEach(e) {
            for (let t in S)
                if (!1 === e(S[t])) break
        }
        findByTag(e, t) {
            for (let n in S) {
                let i = S[n];
                if (null != t && i.username === e && i.discriminator === t) return i;
                if (null == t && i.username === e && i.isPomelo()) return i
            }
        }
        filter(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = [];
            for (let t in S) {
                let i = S[t];
                e(i) && n.push(i)
            }
            return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n
        }
        getCurrentUser() {
            return S[c.default.getId()]
        }
        constructor() {
            super({
                CONNECTION_OPEN: L,
                CONNECTION_OPEN_SUPPLEMENTAL: D,
                UPDATE_CLIENT_PREMIUM_TYPE: U,
                OVERLAY_INITIALIZE: M,
                CACHE_LOADED: e => this.handleLoadCache(e),
                USER_UPDATE: y,
                CURRENT_USER_UPDATE: P,
                PRESENCE_UPDATES: X,
                SEARCH_FINISH: w,
                MOD_VIEW_SEARCH_FINISH: w,
                LOAD_MESSAGES_SUCCESS: b,
                LOAD_MESSAGES_AROUND_SUCCESS: b,
                LOAD_PINNED_MESSAGES_SUCCESS: b,
                LOAD_RECENT_MENTIONS_SUCCESS: b,
                THREAD_LIST_SYNC: G,
                MESSAGE_CREATE: j,
                MESSAGE_UPDATE: j,
                GUILD_SETTINGS_LOADED_BANS: Q,
                GUILD_SETTINGS_LOADED_BANS_BATCH: q,
                GUILD_CREATE: es,
                GUILD_BAN_ADD: J,
                GUILD_BAN_REMOVE: J,
                CHANNEL_RECIPIENT_ADD: Z,
                CHANNEL_RECIPIENT_REMOVE: Z,
                GUILD_JOIN_REQUEST_CREATE: eT,
                GUILD_JOIN_REQUEST_UPDATE: eT,
                GUILD_MEMBER_ADD: $,
                GUILD_MEMBER_UPDATE: $,
                GUILD_MEMBERS_CHUNK: ee,
                THREAD_MEMBER_LIST_UPDATE: ei,
                THREAD_MEMBERS_UPDATE: er,
                CHANNEL_CREATE: W,
                CHANNEL_UPDATES: K,
                RELATIONSHIP_ADD: ea,
                LOAD_RELATIONSHIPS_SUCCESS: eo,
                FRIEND_SUGGESTION_CREATE: el,
                LOAD_FRIEND_SUGGESTIONS_SUCCESS: eu,
                AUDIT_LOG_FETCH_SUCCESS: ed,
                AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: ed,
                LOBBY_CREATE: e_,
                LOBBY_MEMBER_CONNECT: ec,
                LOBBY_MEMBER_UPDATE: ec,
                GIFT_CODE_RESOLVE_SUCCESS: eE,
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eI,
                GUILD_FEED_FETCH_SUCCESS: B,
                LOAD_THREADS_SUCCESS: k,
                LOAD_ARCHIVED_THREADS_SUCCESS: k,
                LOAD_FORUM_POSTS: V,
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: x,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: H,
                NOTIFICATION_CENTER_ITEM_CREATE: Y,
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: F,
                PASSIVE_UPDATE_V1: et,
                LOCAL_MESSAGES_LOADED: en,
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: ef,
                PRIVATE_CHANNEL_INTEGRATION_CREATE: eS,
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: eh,
                FAMILY_CENTER_INITIAL_LOAD: eA,
                FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: em,
                FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: ep,
                FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eR,
                FAMILY_CENTER_REQUEST_LINK_SUCCESS: eN,
                FRIEND_FINDER_PYMK_LOADED: eO,
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eC
            })
        }
    }
    f(eg, "displayName", "UserStore"), f(eg, "LATEST_SNAPSHOT_VERSION", 1), t.default = new eg
}