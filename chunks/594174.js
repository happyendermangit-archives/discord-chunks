function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: function() {
            return p
        },
        mergeUser: function() {
            return L
        },
        transformUser: function() {
            return C
        },
        users: function() {
            return m
        }
    }), n("47120"), n("789020"), n("724458"), n("51350"), n("653041");
    var i = n("348327"),
        r = n.n(i),
        s = n("392711"),
        a = n("864106"),
        o = n("900489"),
        l = n("502087"),
        u = n("911955"),
        d = n("168232"),
        _ = n("598077"),
        c = n("630388"),
        E = n("823379"),
        I = n("314897"),
        T = n("412788"),
        f = n("981631"),
        S = n("308083"),
        h = n("474936");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let m = {},
        N = 0,
        p = "47835198259242069";

    function O(e, t, n) {
        let i = e;
        i = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), m[e.id] = i;
        let r = e !== i;
        return r && N++, r
    }

    function R(e, t) {
        return !r()(e.clan, t.clan) && (null == e.clan || null != t.clan) && (e.clan = (0, S.ensureUserClanData)(t.clan), m[e.id] = e, !0)
    }

    function C(e) {
        let t = e.mfa_enabled;
        null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
        let n = (0, d.getPremiumTypeFromRawValue)(e.premium_type);
        void 0 !== n && (e.premiumType = n, delete e.premium_type);
        let i = e.nsfw_allowed;
        null != i && (e.nsfwAllowed = i, delete e.nsfw_allowed);
        let r = e.public_flags;
        null != r && (e.publicFlags = r, delete e.public_flags);
        let s = e.purchased_flags;
        void 0 !== s && (e.purchasedFlags = s, delete e.purchased_flags);
        let o = e.premium_usage_flags;
        void 0 !== o && (e.premiumUsageFlags = o, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
        let l = e.avatar_decoration_data;
        void 0 !== l && (e.avatarDecorationData = (0, a.parseAvatarDecorationData)(l), delete e.avatar_decoration_data);
        let u = e.global_name;
        void 0 !== u && (e.globalName = u, delete e.global_name);
        let _ = e.clan;
        return void 0 !== _ && (e.clan = (0, S.ensureUserClanData)(_)), e
    }

    function g(e) {
        return e.id !== I.default.getId()
    }

    function L(e) {
        let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = m[e.id],
            s = void 0 !== e.id && e.id === I.default.getId();
        if (null == i) void 0 !== (t = (i = new _.default(e)).premiumType) && s && (i.premiumType = D((0, d.isStaffEnv)(i), i.premiumType));
        else if (n) {
            var a;
            let n = C(e);
            void 0 !== (t = null !== (a = n.premium_type) && void 0 !== a ? a : n.premiumType) && s && (0, d.isStaffEnvRawData)(n) && (n = function(e) {
                var t;
                let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
                    i = D((0, d.isStaffEnvRawData)(e), n);
                return void 0 !== e.premiumType ? e.premiumType = i : void 0 !== e.premium_type && (e.premium_type = i), e
            }(n)), n = function(e, t) {
                switch (!0) {
                    case null == e.clan && null == t.clan:
                        break;
                    case null != e.clan && null == t.clan:
                    case r()(e.clan, t.clan):
                        t.clan = e.clan;
                        break;
                    default:
                        t.clan = (0, S.ensureUserClanData)(t.clan)
                }
                return t
            }(i, n), i = i.merge(n)
        }(0, d.validatePremiumType)((0, d.isStaffEnv)(i), t, i.premiumType);
        let o = m[e.id] !== i;
        return m[e.id] = i, o && N++, o
    }

    function D(e, t) {
        if (!e) return t;
        let n = l.default.getPremiumTypeOverride(),
            i = l.default.getPremiumTypeActual();
        return n === h.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? i : n
    }

    function v(e, t) {
        var n, i, r, s, a;
        if (null != e.author && "SENDING" !== e.state && g(e.author) && L(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
                g(e) && L(e, t)
            }), (null === (i = e.interaction) || void 0 === i ? void 0 : i.user) != null && g(null === (r = e.interaction) || void 0 === r ? void 0 : r.user) && L(e.interaction.user, t), null === (s = e.attachments) || void 0 === s || s.forEach(e => {
                var n;
                null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
                    g(e) && L(e, t)
                })
            }), (null === (a = e.resolved) || void 0 === a ? void 0 : a.users) != null)
            for (let n in e.resolved.users) {
                let i = e.resolved.users[n];
                g(i) && L(i, t)
            }
    }

    function M(e) {
        null != e.application.bot && L(e.application.bot)
    }

    function y(e) {
        let {
            user: t,
            users: n,
            guilds: i
        } = e;
        delete t.premium, delete t.banner_color, L(t), n.forEach(e => {
            L(e)
        }), i.forEach(e => {
            e.members.forEach(t => {
                let n = m[t.user.id];
                null != n && (O(n, e.id, t.avatar), R(n, t.user))
            })
        }), null != m[I.default.getId()] && (m[p] = new _.default({
            id: p,
            username: "Wumpus",
            discriminator: "0",
            globalName: "Wumpus",
            avatar: "c1f86b313385cb97985f1b118851c28c"
        }))
    }

    function P(e) {
        let {
            guilds: t,
            lazyPrivateChannels: n
        } = e;
        t.forEach(e => {
            e.members.forEach(t => {
                let n = m[t.user.id];
                null != n && (O(n, e.id, t.avatar), R(n, t.user))
            })
        }), null == n || n.forEach(e => {
            var t;
            null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
                L(e)
            })
        })
    }

    function U(e) {
        return !("incomplete" in e)
    }

    function b(e) {
        if (null != e.users)
            for (let t of e.users) !(t.id in m && U(t)) && (m[t.id] = new _.default(t))
    }

    function G(e) {
        let {
            user: t
        } = e;
        t.id !== I.default.getId() && L(t)
    }

    function w(e) {
        let {
            user: t
        } = e;
        L(t)
    }

    function B(e) {
        let {
            user: t
        } = e;
        L(t)
    }

    function k(e) {
        let {
            messages: t
        } = e;
        return t.forEach(e => v(e, !0)), !1
    }

    function V(e) {
        let {
            mostRecentMessages: t
        } = e;
        return null == t || t.forEach(e => v(e, !1)), !1
    }

    function x(e) {
        let {
            messages: t
        } = e;
        return t.forEach(e => k({
            messages: e
        })), !1
    }

    function F(e) {
        let {
            data: t
        } = e;
        (0, o.getMessagesFromGuildFeedFetch)(t).forEach(e => v(e, !0))
    }

    function H(e) {
        let {
            firstMessages: t,
            owners: n
        } = e;
        null != t && t.forEach(e => v(e, !0)), null != n && n.forEach(e => L(e.user, !0))
    }

    function Y(e) {
        let {
            threads: t
        } = e;
        Object.values(t).forEach(e => {
            let {
                first_message: t,
                most_recent_message: n,
                owner: i
            } = e;
            null != t && v(t, !0), null != n && v(n, !0), null != i && null != i.user && L(i.user, !0)
        })
    }

    function j(e) {
        let {
            supplementalData: t
        } = e;
        Object.values(t).forEach(e => {
            let {
                message_preview: t
            } = e;
            null != t && v(t, !0)
        })
    }

    function W(e) {
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
            L(t);
            let r = m[t.id],
                s = null == i ? void 0 : i.avatar;
            null != r && null != s && O(r, n, s)
        })
    }

    function K(e) {
        let {
            items: t
        } = e;
        t.forEach(e => {
            null != e.other_user && L(e.other_user)
        })
    }

    function z(e) {
        let {
            item: t
        } = e;
        null != t.other_user && L(t.other_user)
    }

    function X(e) {
        let {
            message: t
        } = e;
        if (v(t, !0), null != t.flags && c.hasFlag(t.flags, f.MessageFlags.URGENT)) {
            let e = m[I.default.getId()];
            return null != e && (m[I.default.getId()] = e.set("flags", c.setFlag(e.flags, f.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
        }
        return !1
    }

    function Q(e) {
        let {
            channel: {
                rawRecipients: t
            }
        } = e;
        return null != t && t.forEach(e => L(e)), !1
    }

    function q(e) {
        let {
            channels: t
        } = e;
        for (let {
                rawRecipients: e
            }
            of t) null != e && e.forEach(e => L(e));
        return !1
    }
    let Z = ["username", "avatar", "global_name", "discriminator", "bot", "clan"];

    function J(e) {
        let {
            updates: t
        } = e;
        return t.map(e => {
            let t = m[e.user.id];
            if (null == t) return !1;
            let n = Z.reduce((n, i) => {
                if (e.user.hasOwnProperty(i)) {
                    let r = t.set((0, s.camelCase)(i), e.user[i]);
                    n = n || r !== t, t = r
                }
                return n
            }, !1);
            return !!n && (m[t.id] = t, n)
        }).some(e => e)
    }

    function $(e) {
        let {
            bans: t
        } = e;
        t.forEach(e => L(e.user))
    }

    function ee(e) {
        let {
            bans: t
        } = e;
        t.forEach(e => L(e.user))
    }

    function et(e) {
        return L(e.user)
    }

    function en(e) {
        return !!e.isMember && L(e.user)
    }

    function ei(e) {
        let t = L(e.user),
            n = m[e.user.id];
        if (null == n) return t;
        let {
            avatar: i,
            guildId: r
        } = e;
        return O(n, r, i) || t
    }

    function er(e) {
        let {
            ops: t
        } = e;
        for (let e of t)
            if ("INSERT" === e.op || "UPDATE" === e.op) {
                var n;
                let t = null === (n = e.item.member) || void 0 === n ? void 0 : n.user;
                if (null == t) continue;
                R(m[t.id], t)
            } return !1
    }

    function es(e) {
        let {
            members: t,
            guildId: n
        } = e;
        return t.reduce((e, t) => {
            let i = L(t.user),
                r = m[t.user.id];
            if (null == r) return i || e;
            let {
                avatar: s
            } = t;
            return O(r, n, s) || i || e
        }, !1)
    }

    function ea(e) {
        var t;
        let n = !1;
        for (let i of null !== (t = e.members) && void 0 !== t ? t : []) L(i.user) && (n = !0), null != m[i.user.id] && O(m[i.user.id], e.guildId, i.avatar) && (n = !0);
        return n
    }

    function eo(e) {
        var t;
        let n = !1;
        for (let i of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(m, i.id) && (n = L(i) || n);
        return n
    }

    function el(e) {
        let {
            members: t
        } = e, n = !1;
        return t.forEach(e => {
            null != e.member && L(e.member.user) && (n = !0), null != e.presence && L(e.presence.user) && (n = !0)
        }), n
    }

    function eu(e) {
        let {
            addedMembers: t
        } = e, n = !1;
        return null == t || t.forEach(e => {
            null != e.member && L(e.member.user) && (n = !0), null != e.presence && L(e.presence.user) && (n = !0)
        }), n
    }

    function ed(e) {
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
            n !== I.default.getId() && L({
                id: n,
                username: i,
                avatar: r,
                discriminator: s,
                bot: a
            });
            let l = m[n];
            null != l && O(l, t.id, o)
        })
    }

    function e_(e) {
        return L(e.relationship.user)
    }

    function ec(e) {
        let {
            relationships: t
        } = e;
        return t.reduce((e, t) => L(t.user) || e, !1)
    }

    function eE(e) {
        return L(e.suggestion.suggested_user)
    }

    function eI(e) {
        let {
            suggestions: t
        } = e;
        return t.reduce((e, t) => L(t.suggested_user) || e, !1)
    }

    function eT(e) {
        let {
            users: t
        } = e;
        t.forEach(e => {
            null == m[e.id] && (m[e.id] = new _.default(e))
        })
    }

    function ef(e) {
        let {
            giftCode: t
        } = e;
        return null != t.user && L(t.user)
    }

    function eS(e) {
        let {
            appliedBoosts: t
        } = e;
        t.forEach(e => {
            let {
                user: t
            } = e;
            null != t && L(t)
        })
    }

    function eh(e) {
        let {
            request: t
        } = e, {
            user: n,
            actioned_by_user: i
        } = t, r = !1;
        return null != n && (r = r || L(n)), null != i && (r = r || L(i)), r
    }

    function eA(e) {
        let {
            integrations: t
        } = e;
        t.forEach(e => M((0, u.createPrivateChannelIntegration)(e)))
    }

    function em(e) {
        let {
            integration: t
        } = e;
        M((0, u.createPrivateChannelIntegration)(t))
    }

    function eN(e) {
        let {
            integration: t
        } = e;
        M((0, u.createPrivateChannelIntegration)(t))
    }

    function ep(e) {
        let {
            users: t,
            familyCenterTeenActivity: n
        } = e, {
            users: i
        } = n;
        return [...t, ...i].reduce((e, t) => L(t) || e, !1)
    }

    function eO(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => L(t) || e, !1)
    }

    function eR(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => L(t) || e, !1)
    }

    function eC(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => L(t) || e, !1)
    }

    function eg(e) {
        let {
            familyCenterTeenActivity: t
        } = e;
        if (void 0 === t) return;
        let {
            users: n
        } = t;
        return n.reduce((e, t) => L(t) || e, !1)
    }

    function eL(e) {
        let {
            familyCenterTeenActivity: t
        } = e, {
            users: n
        } = t;
        return n.reduce((e, t) => L(t) || e, !1)
    }

    function eD(e) {
        let {
            members: t
        } = e, n = I.default.getId();
        return t.reduce((e, t) => t.member.user.id === n ? e : L(t.member.user) || e, !1)
    }
    class ev extends T.default {
        initialize() {
            this.waitFor(I.default)
        }
        takeSnapshot() {
            let e = this.getCurrentUser();
            return {
                version: ev.LATEST_SNAPSHOT_VERSION,
                data: {
                    users: [e].filter(E.isNotNullish)
                }
            }
        }
        handleLoadCache(e) {
            let t = this.readSnapshot(ev.LATEST_SNAPSHOT_VERSION);
            if (null != t)
                for (let e of t.users) m[e.id] = new _.default(e);
            if (null != e.users)
                for (let t of e.users) !(t.id in m && U(t)) && (m[t.id] = new _.default(t));
            for (let t of [e.privateChannels, e.initialGuildChannels])
                for (let e of t) {
                    var n;
                    null === (n = e.rawRecipients) || void 0 === n || n.forEach(e => L(e, !1))
                }
        }
        getUserStoreVersion() {
            return N
        }
        getUser(e) {
            if (null != e) return m[e]
        }
        getUsers() {
            return m
        }
        forEach(e) {
            for (let t in m)
                if (!1 === e(m[t])) break
        }
        findByTag(e, t) {
            for (let n in m) {
                let i = m[n];
                if (null != t && i.username === e && i.discriminator === t) return i;
                if (null == t && i.username === e && i.isPomelo()) return i
            }
        }
        filter(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = [];
            for (let t in m) {
                let i = m[t];
                e(i) && n.push(i)
            }
            return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n
        }
        getCurrentUser() {
            return m[I.default.getId()]
        }
        constructor() {
            super({
                CONNECTION_OPEN: y,
                CONNECTION_OPEN_SUPPLEMENTAL: P,
                UPDATE_CLIENT_PREMIUM_TYPE: B,
                OVERLAY_INITIALIZE: b,
                CACHE_LOADED: e => this.handleLoadCache(e),
                USER_UPDATE: G,
                CURRENT_USER_UPDATE: w,
                PRESENCE_UPDATES: J,
                SEARCH_FINISH: x,
                MOD_VIEW_SEARCH_FINISH: x,
                LOAD_MESSAGES_SUCCESS: k,
                LOAD_MESSAGES_AROUND_SUCCESS: k,
                LOAD_PINNED_MESSAGES_SUCCESS: k,
                LOAD_RECENT_MENTIONS_SUCCESS: k,
                THREAD_LIST_SYNC: V,
                MESSAGE_CREATE: X,
                MESSAGE_UPDATE: X,
                GUILD_SETTINGS_LOADED_BANS: $,
                GUILD_SETTINGS_LOADED_BANS_BATCH: ee,
                GUILD_CREATE: ed,
                GUILD_BAN_ADD: et,
                GUILD_BAN_REMOVE: et,
                CHANNEL_RECIPIENT_ADD: en,
                CHANNEL_RECIPIENT_REMOVE: en,
                GUILD_JOIN_REQUEST_CREATE: eh,
                GUILD_JOIN_REQUEST_UPDATE: eh,
                GUILD_MEMBER_ADD: ei,
                GUILD_MEMBER_UPDATE: ei,
                GUILD_MEMBERS_CHUNK: es,
                GUILD_MEMBER_LIST_UPDATE: er,
                THREAD_MEMBER_LIST_UPDATE: el,
                THREAD_MEMBERS_UPDATE: eu,
                CHANNEL_CREATE: Q,
                CHANNEL_UPDATES: q,
                RELATIONSHIP_ADD: e_,
                LOAD_RELATIONSHIPS_SUCCESS: ec,
                FRIEND_SUGGESTION_CREATE: eE,
                LOAD_FRIEND_SUGGESTIONS_SUCCESS: eI,
                AUDIT_LOG_FETCH_SUCCESS: eT,
                AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eT,
                GIFT_CODE_RESOLVE_SUCCESS: ef,
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eS,
                GUILD_FEED_FETCH_SUCCESS: F,
                LOAD_THREADS_SUCCESS: H,
                LOAD_ARCHIVED_THREADS_SUCCESS: H,
                LOAD_FORUM_POSTS: Y,
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: W,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: K,
                NOTIFICATION_CENTER_ITEM_CREATE: z,
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: j,
                PASSIVE_UPDATE_V1: ea,
                LOCAL_MESSAGES_LOADED: eo,
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: eA,
                PRIVATE_CHANNEL_INTEGRATION_CREATE: em,
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: eN,
                FAMILY_CENTER_INITIAL_LOAD: ep,
                FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eO,
                FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eg,
                FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eL,
                FAMILY_CENTER_REQUEST_LINK_SUCCESS: eR,
                FRIEND_FINDER_PYMK_LOADED: eC,
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eD
            })
        }
    }
    A(ev, "displayName", "UserStore"), A(ev, "LATEST_SNAPSHOT_VERSION", 1), t.default = new ev
}