function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        users: function() {
            return g
        },
        ASSISTANT_WUMPUS_VOICE_USER: function() {
            return p
        },
        transformUser: function() {
            return v
        },
        mergeUser: function() {
            return I
        },
        default: function() {
            return eN
        }
    }), n("222007"), n("702976"), n("808653"), n("581081"), n("424973");
    var i = n("917351"),
        s = n("234251"),
        r = n("560208"),
        a = n("400205"),
        o = n("946028"),
        l = n("517001"),
        u = n("766274"),
        d = n("568734"),
        c = n("449008"),
        f = n("271938"),
        _ = n("455079"),
        h = n("49111"),
        E = n("646718");
    let g = {},
        m = 0,
        p = "47835198259242069";

    function S(e, t, n) {
        let i = e;
        i = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), g[e.id] = i;
        let s = e !== i;
        return s && m++, s
    }

    function v(e) {
        let t = e.mfa_enabled;
        null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
        let n = (0, l.getPremiumTypeFromRawValue)(e.premium_type);
        void 0 !== n && (e.premiumType = n, delete e.premium_type);
        let i = e.nsfw_allowed;
        null != i && (e.nsfwAllowed = i, delete e.nsfw_allowed);
        let r = e.public_flags;
        null != r && (e.publicFlags = r, delete e.public_flags);
        let a = e.purchased_flags;
        void 0 !== a && (e.purchasedFlags = a, delete e.purchased_flags);
        let o = e.premium_usage_flags;
        void 0 !== o && (e.premiumUsageFlags = o, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
        let u = e.avatar_decoration_data;
        void 0 !== u && (e.avatarDecorationData = (0, s.parseAvatarDecorationData)(u), delete e.avatar_decoration_data);
        let d = e.global_name;
        return void 0 !== d && (e.globalName = d, delete e.global_name), e
    }

    function T(e) {
        return e.id !== f.default.getId()
    }

    function I(e) {
        let t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = g[e.id],
            s = void 0 !== e.id && e.id === f.default.getId();
        if (null == i) void 0 !== (t = (i = new u.default(e)).premiumType) && s && (i.premiumType = C((0, l.isStaffEnv)(i), i.premiumType));
        else if (n) {
            var r;
            let n = v(e);
            void 0 !== (t = null !== (r = n.premium_type) && void 0 !== r ? r : n.premiumType) && s && (0, l.isStaffEnvRawData)(n) && (n = function(e) {
                var t;
                let n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
                    i = C((0, l.isStaffEnvRawData)(e), n);
                return void 0 !== e.premiumType ? e.premiumType = i : void 0 !== e.premium_type && (e.premium_type = i), e
            }(n)), i = i.merge(n)
        }(0, l.validatePremiumType)((0, l.isStaffEnv)(i), t, i.premiumType);
        let a = g[e.id] !== i;
        return g[e.id] = i, a && m++, a
    }

    function C(e, t) {
        if (!e) return t;
        let n = a.default.getPremiumTypeOverride(),
            i = a.default.getPremiumTypeActual();
        return n === E.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? i : n
    }

    function A(e, t) {
        var n, i, s, r, a;
        if (null != e.author && "SENDING" !== e.state && T(e.author) && I(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(e => {
                T(e) && I(e, t)
            }), (null === (i = e.interaction) || void 0 === i ? void 0 : i.user) != null && T(null === (s = e.interaction) || void 0 === s ? void 0 : s.user) && I(e.interaction.user, t), null === (r = e.attachments) || void 0 === r || r.forEach(e => {
                var n;
                null === (n = e.clip_participants) || void 0 === n || n.forEach(e => {
                    T(e) && I(e, t)
                })
            }), (null === (a = e.resolved) || void 0 === a ? void 0 : a.users) != null)
            for (let n in e.resolved.users) {
                let i = e.resolved.users[n];
                T(i) && I(i, t)
            }
    }

    function y(e) {
        null != e.application.bot && I(e.application.bot)
    }

    function N(e) {
        let {
            user: t,
            users: n,
            guilds: i
        } = e;
        delete t.premium, delete t.banner_color, I(t), n.forEach(e => {
            I(e)
        }), i.forEach(e => {
            e.members.forEach(t => {
                let n = g[t.user.id];
                null != n && S(n, e.id, t.avatar)
            })
        });
        let s = g[f.default.getId()];
        null != s && (g[p] = new u.default({
            id: p,
            username: "Wumpus",
            discriminator: "0",
            globalName: "Wumpus",
            avatar: "c1f86b313385cb97985f1b118851c28c"
        }))
    }

    function R(e) {
        let {
            guilds: t,
            lazyPrivateChannels: n
        } = e;
        t.forEach(e => {
            e.members.forEach(t => {
                let n = g[t.user.id];
                null != n && S(n, e.id, t.avatar)
            })
        }), null == n || n.forEach(e => {
            var t;
            null === (t = e.rawRecipients) || void 0 === t || t.forEach(e => {
                I(e)
            })
        })
    }

    function O(e) {
        return !("incomplete" in e)
    }

    function D(e) {
        if (null != e.users)
            for (let t of e.users) !(t.id in g && O(t)) && (g[t.id] = new u.default(t))
    }

    function P(e) {
        let {
            user: t
        } = e;
        t.id !== f.default.getId() && I(t)
    }

    function L(e) {
        let {
            user: t
        } = e;
        I(t)
    }

    function M(e) {
        let {
            user: t
        } = e;
        I(t)
    }

    function b(e) {
        let {
            messages: t
        } = e;
        return t.forEach(e => A(e, !0)), !1
    }

    function U(e) {
        let {
            mostRecentMessages: t
        } = e;
        return null == t || t.forEach(e => A(e, !1)), !1
    }

    function w(e) {
        let {
            messages: t
        } = e;
        return t.forEach(e => b({
            messages: e
        })), !1
    }

    function k(e) {
        let {
            data: t
        } = e;
        (0, r.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e, !0))
    }

    function V(e) {
        let {
            firstMessages: t,
            owners: n
        } = e;
        null != t && t.forEach(e => A(e, !0)), null != n && n.forEach(e => I(e.user, !0))
    }

    function G(e) {
        let {
            threads: t
        } = e;
        Object.values(t).forEach(e => {
            let {
                first_message: t,
                most_recent_message: n,
                owner: i
            } = e;
            null != t && A(t, !0), null != n && A(n, !0), null != i && null != i.user && I(i.user, !0)
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
            null != t && A(t, !0)
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
            I(t);
            let s = g[t.id],
                r = null == i ? void 0 : i.avatar;
            null != s && null != r && S(s, n, r)
        })
    }

    function B(e) {
        let {
            items: t
        } = e;
        t.forEach(e => {
            null != e.other_user && I(e.other_user)
        })
    }

    function H(e) {
        let {
            item: t
        } = e;
        null != t.other_user && I(t.other_user)
    }

    function Y(e) {
        let {
            message: t
        } = e;
        if (A(t, !0), null != t.flags && d.hasFlag(t.flags, h.MessageFlags.URGENT)) {
            let e = g[f.default.getId()];
            return null != e && (g[f.default.getId()] = e.set("flags", d.setFlag(e.flags, h.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
        }
        return !1
    }

    function j(e) {
        let {
            channel: {
                rawRecipients: t
            }
        } = e;
        return null != t && t.forEach(e => I(e)), !1
    }

    function W(e) {
        let {
            channels: t
        } = e;
        for (let {
                rawRecipients: e
            }
            of t) null != e && e.forEach(e => I(e));
        return !1
    }
    let K = ["username", "avatar", "global_name", "discriminator", "bot"];

    function z(e) {
        let {
            updates: t
        } = e;
        return t.map(e => {
            let t = g[e.user.id];
            if (null == t) return !1;
            let n = K.reduce((n, s) => {
                if (e.user.hasOwnProperty(s)) {
                    let r = t.set((0, i.camelCase)(s), e.user[s]);
                    n = n || r !== t, t = r
                }
                return n
            }, !1);
            return !!n && (g[t.id] = t, n)
        }).some(e => e)
    }

    function q(e) {
        let {
            bans: t
        } = e;
        t.forEach(e => I(e.user))
    }

    function X(e) {
        let {
            bans: t
        } = e;
        t.forEach(e => I(e.user))
    }

    function Q(e) {
        return I(e.user)
    }

    function Z(e) {
        return !!e.isMember && I(e.user)
    }

    function J(e) {
        let t = I(e.user),
            n = g[e.user.id];
        if (null == n) return t;
        let {
            avatar: i,
            guildId: s
        } = e;
        return S(n, s, i) || t
    }

    function $(e) {
        let {
            members: t,
            guildId: n
        } = e;
        return t.reduce((e, t) => {
            let i = I(t.user),
                s = g[t.user.id];
            if (null == s) return i || e;
            let {
                avatar: r
            } = t;
            return S(s, n, r) || i || e
        }, !1)
    }

    function ee(e) {
        var t;
        let n = !1;
        for (let i of null !== (t = e.members) && void 0 !== t ? t : []) I(i.user) && (n = !0), null != g[i.user.id] && S(g[i.user.id], e.guildId, i.avatar) && (n = !0);
        return n
    }

    function et(e) {
        var t;
        let n = !1;
        for (let i of null !== (t = e.users) && void 0 !== t ? t : []) !Object.hasOwn(g, i.id) && (n = I(i) || n);
        return n
    }

    function en(e) {
        let {
            members: t
        } = e, n = !1;
        return t.forEach(e => {
            null != e.member && I(e.member.user) && (n = !0), null != e.presence && I(e.presence.user) && (n = !0)
        }), n
    }

    function ei(e) {
        let {
            addedMembers: t
        } = e, n = !1;
        return null == t || t.forEach(e => {
            null != e.member && I(e.member.user) && (n = !0), null != e.presence && I(e.presence.user) && (n = !0)
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
                    avatar: s,
                    discriminator: r,
                    bot: a
                },
                avatar: o
            } = e;
            n !== f.default.getId() && I({
                id: n,
                username: i,
                avatar: s,
                discriminator: r,
                bot: a
            });
            let l = g[n];
            null != l && S(l, t.id, o)
        })
    }

    function er(e) {
        return I(e.relationship.user)
    }

    function ea(e) {
        let {
            relationships: t
        } = e;
        return t.reduce((e, t) => I(t.user) || e, !1)
    }

    function eo(e) {
        return I(e.suggestion.suggested_user)
    }

    function el(e) {
        let {
            suggestions: t
        } = e;
        return t.reduce((e, t) => I(t.suggested_user) || e, !1)
    }

    function eu(e) {
        let {
            users: t
        } = e;
        t.forEach(e => {
            null == g[e.id] && (g[e.id] = new u.default(e))
        })
    }

    function ed(e) {
        let {
            lobby: t
        } = e;
        return t.members.reduce((e, t) => I(t.user) || e, !1)
    }

    function ec(e) {
        return I(e.member.user)
    }

    function ef(e) {
        let {
            giftCode: t
        } = e;
        return null != t.user && I(t.user)
    }

    function e_(e) {
        let {
            appliedBoosts: t
        } = e;
        t.forEach(e => {
            let {
                user: t
            } = e;
            null != t && I(t)
        })
    }

    function eh(e) {
        let {
            request: t
        } = e, {
            user: n,
            actioned_by_user: i
        } = t, s = !1;
        return null != n && (s = s || I(n)), null != i && (s = s || I(i)), s
    }

    function eE(e) {
        let {
            integrations: t
        } = e;
        t.forEach(e => y((0, o.createPrivateChannelIntegration)(e)))
    }

    function eg(e) {
        let {
            integration: t
        } = e;
        y((0, o.createPrivateChannelIntegration)(t))
    }

    function em(e) {
        let {
            integration: t
        } = e;
        y((0, o.createPrivateChannelIntegration)(t))
    }

    function ep(e) {
        let {
            users: t,
            familyCenterTeenActivity: n
        } = e, {
            users: i
        } = n, s = [...t, ...i];
        return s.reduce((e, t) => I(t) || e, !1)
    }

    function eS(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => I(t) || e, !1)
    }

    function ev(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => I(t) || e, !1)
    }

    function eT(e) {
        let {
            users: t
        } = e;
        return t.reduce((e, t) => I(t) || e, !1)
    }

    function eI(e) {
        let {
            familyCenterTeenActivity: t
        } = e;
        if (void 0 === t) return;
        let {
            users: n
        } = t;
        return n.reduce((e, t) => I(t) || e, !1)
    }

    function eC(e) {
        let {
            familyCenterTeenActivity: t
        } = e, {
            users: n
        } = t;
        return n.reduce((e, t) => I(t) || e, !1)
    }

    function eA(e) {
        let {
            members: t
        } = e, n = f.default.getId();
        return t.reduce((e, t) => {
            if (t.member.user.id === n) return e;
            let i = I(t.member.user);
            return i || e
        }, !1)
    }
    class ey extends _.default {
        initialize() {
            this.waitFor(f.default)
        }
        takeSnapshot() {
            let e = this.getCurrentUser();
            return {
                version: ey.LATEST_SNAPSHOT_VERSION,
                data: {
                    users: [e].filter(c.isNotNullish)
                }
            }
        }
        handleLoadCache(e) {
            let t = this.readSnapshot(ey.LATEST_SNAPSHOT_VERSION);
            if (null != t)
                for (let e of t.users) g[e.id] = new u.default(e);
            if (null != e.users)
                for (let t of e.users) !(t.id in g && O(t)) && (g[t.id] = new u.default(t));
            for (let t of e.channels) {
                var n;
                null === (n = t.rawRecipients) || void 0 === n || n.forEach(e => I(e, !1))
            }
        }
        getUserStoreVersion() {
            return m
        }
        getUser(e) {
            if (null != e) return g[e]
        }
        getUsers() {
            return g
        }
        forEach(e) {
            for (let t in g)
                if (!1 === e(g[t])) break
        }
        findByTag(e, t) {
            for (let n in g) {
                let i = g[n];
                if (null != t && i.username === e && i.discriminator === t) return i;
                if (null == t && i.username === e && i.isPomelo()) return i
            }
        }
        filter(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = [];
            for (let t in g) {
                let i = g[t];
                e(i) && n.push(i)
            }
            return t && n.sort((e, t) => e.username > t.username ? 1 : e.username < t.username ? -1 : 0), n
        }
        getCurrentUser() {
            return g[f.default.getId()]
        }
        constructor() {
            super({
                CONNECTION_OPEN: N,
                CONNECTION_OPEN_SUPPLEMENTAL: R,
                UPDATE_CLIENT_PREMIUM_TYPE: M,
                OVERLAY_INITIALIZE: D,
                CACHE_LOADED: e => this.handleLoadCache(e),
                USER_UPDATE: P,
                CURRENT_USER_UPDATE: L,
                PRESENCE_UPDATES: z,
                SEARCH_FINISH: w,
                MOD_VIEW_SEARCH_FINISH: w,
                LOAD_MESSAGES_SUCCESS: b,
                LOAD_MESSAGES_AROUND_SUCCESS: b,
                LOAD_PINNED_MESSAGES_SUCCESS: b,
                LOAD_RECENT_MENTIONS_SUCCESS: b,
                THREAD_LIST_SYNC: U,
                MESSAGE_CREATE: Y,
                MESSAGE_UPDATE: Y,
                GUILD_SETTINGS_LOADED_BANS: q,
                GUILD_SETTINGS_LOADED_BANS_BATCH: X,
                GUILD_CREATE: es,
                GUILD_BAN_ADD: Q,
                GUILD_BAN_REMOVE: Q,
                CHANNEL_RECIPIENT_ADD: Z,
                CHANNEL_RECIPIENT_REMOVE: Z,
                GUILD_JOIN_REQUEST_CREATE: eh,
                GUILD_JOIN_REQUEST_UPDATE: eh,
                GUILD_MEMBER_ADD: J,
                GUILD_MEMBER_UPDATE: J,
                GUILD_MEMBERS_CHUNK: $,
                THREAD_MEMBER_LIST_UPDATE: en,
                THREAD_MEMBERS_UPDATE: ei,
                CHANNEL_CREATE: j,
                CHANNEL_UPDATES: W,
                RELATIONSHIP_ADD: er,
                LOAD_RELATIONSHIPS_SUCCESS: ea,
                FRIEND_SUGGESTION_CREATE: eo,
                LOAD_FRIEND_SUGGESTIONS_SUCCESS: el,
                AUDIT_LOG_FETCH_SUCCESS: eu,
                AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: eu,
                LOBBY_CREATE: ed,
                LOBBY_MEMBER_CONNECT: ec,
                LOBBY_MEMBER_UPDATE: ec,
                GIFT_CODE_RESOLVE_SUCCESS: ef,
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: e_,
                GUILD_FEED_FETCH_SUCCESS: k,
                LOAD_THREADS_SUCCESS: V,
                LOAD_ARCHIVED_THREADS_SUCCESS: V,
                LOAD_FORUM_POSTS: G,
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: x,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: B,
                NOTIFICATION_CENTER_ITEM_CREATE: H,
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: F,
                PASSIVE_UPDATE_V1: ee,
                LOCAL_MESSAGES_LOADED: et,
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: eE,
                PRIVATE_CHANNEL_INTEGRATION_CREATE: eg,
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: em,
                FAMILY_CENTER_INITIAL_LOAD: ep,
                FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eS,
                FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eI,
                FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eC,
                FAMILY_CENTER_REQUEST_LINK_SUCCESS: ev,
                FRIEND_FINDER_PYMK_LOADED: eT,
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eA
            })
        }
    }
    ey.displayName = "UserStore", ey.LATEST_SNAPSHOT_VERSION = 1;
    var eN = new ey
}