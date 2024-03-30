function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ASSISTANT_WUMPUS_VOICE_USER: function() {
            return g
        },
        mergeUser: function() {
            return R
        },
        transformUser: function() {
            return b
        },
        users: function() {
            return S
        }
    });
    var r = n("392711"),
        o = n("272665"),
        i = n("56449"),
        a = n("442754"),
        u = n("541746"),
        s = n("902356"),
        l = n("428009"),
        c = n("947248"),
        f = n("162677"),
        d = n("217014"),
        _ = n("837133"),
        E = n("281767"),
        p = n("868615");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function T(e) {
        return function(e) {
            if (Array.isArray(e)) return m(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var S = {},
        v = 0,
        g = "47835198259242069";

    function A(e, t, n) {
        var r = e;
        r = null == n ? e.removeGuildAvatarHash(t) : e.addGuildAvatarHash(t, n), S[e.id] = r;
        var o = e !== r;
        return o && v++, o
    }

    function b(e) {
        var t = e.mfa_enabled;
        null != t && (e.mfaEnabled = t, delete e.mfa_enabled);
        var n = (0, s.getPremiumTypeFromRawValue)(e.premium_type);
        void 0 !== n && (e.premiumType = n, delete e.premium_type);
        var r = e.nsfw_allowed;
        null != r && (e.nsfwAllowed = r, delete e.nsfw_allowed);
        var i = e.public_flags;
        null != i && (e.publicFlags = i, delete e.public_flags);
        var a = e.purchased_flags;
        void 0 !== a && (e.purchasedFlags = a, delete e.purchased_flags);
        var u = e.premium_usage_flags;
        void 0 !== u && (e.premiumUsageFlags = u, delete e.premium_usage_flags), null === e.banner_color && delete e.banner_color;
        var l = e.avatar_decoration_data;
        void 0 !== l && (e.avatarDecorationData = (0, o.parseAvatarDecorationData)(l), delete e.avatar_decoration_data);
        var c = e.global_name;
        return void 0 !== c && (e.globalName = c, delete e.global_name), e
    }

    function N(e) {
        return e.id !== d.default.getId()
    }

    function R(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = S[e.id],
            r = void 0 !== e.id && e.id === d.default.getId();
        if (null == n) void 0 !== (o = (n = new l.default(e)).premiumType) && r && (n.premiumType = C((0, s.isStaffEnv)(n), n.premiumType));
        else if (t) {
            var o, i, a = b(e);
            void 0 !== (o = null !== (i = a.premium_type) && void 0 !== i ? i : a.premiumType) && r && (0, s.isStaffEnvRawData)(a) && (a = function(e) {
                var t, n = null !== (t = e.premium_type) && void 0 !== t ? t : e.premiumType,
                    r = C((0, s.isStaffEnvRawData)(e), n);
                return void 0 !== e.premiumType ? e.premiumType = r : void 0 !== e.premium_type && (e.premium_type = r), e
            }(a)), n = n.merge(a)
        }(0, s.validatePremiumType)((0, s.isStaffEnv)(n), o, n.premiumType);
        var u = S[e.id] !== n;
        return S[e.id] = n, u && v++, u
    }

    function C(e, t) {
        if (!e) return t;
        var n = a.default.getPremiumTypeOverride(),
            r = a.default.getPremiumTypeActual();
        return n === p.UNSELECTED_PREMIUM_TYPE_OVERRIDE ? r : n
    }

    function P(e, t) {
        var n, r, o, i, a;
        if (null != e.author && "SENDING" !== e.state && N(e.author) && R(e.author, t), null === (n = e.mentions) || void 0 === n || n.forEach(function(e) {
                N(e) && R(e, t)
            }), (null === (r = e.interaction) || void 0 === r ? void 0 : r.user) != null && N(null === (o = e.interaction) || void 0 === o ? void 0 : o.user) && R(e.interaction.user, t), null === (i = e.attachments) || void 0 === i || i.forEach(function(e) {
                var n;
                null === (n = e.clip_participants) || void 0 === n || n.forEach(function(e) {
                    N(e) && R(e, t)
                })
            }), (null === (a = e.resolved) || void 0 === a ? void 0 : a.users) != null)
            for (var u in e.resolved.users) {
                var s = e.resolved.users[u];
                N(s) && R(s, t)
            }
    }

    function D(e) {
        null != e.application.bot && R(e.application.bot)
    }

    function L(e) {
        var t = e.user,
            n = e.users,
            r = e.guilds;
        delete t.premium, delete t.banner_color, R(t), n.forEach(function(e) {
            R(e)
        }), r.forEach(function(e) {
            e.members.forEach(function(t) {
                var n = S[t.user.id];
                null != n && A(n, e.id, t.avatar)
            })
        }), null != S[d.default.getId()] && (S[g] = new l.default({
            id: g,
            username: "Wumpus",
            discriminator: "0",
            globalName: "Wumpus",
            avatar: "c1f86b313385cb97985f1b118851c28c"
        }))
    }

    function M(e) {
        var t = e.guilds,
            n = e.lazyPrivateChannels;
        t.forEach(function(e) {
            e.members.forEach(function(t) {
                var n = S[t.user.id];
                null != n && A(n, e.id, t.avatar)
            })
        }), null == n || n.forEach(function(e) {
            var t;
            null === (t = e.rawRecipients) || void 0 === t || t.forEach(function(e) {
                R(e)
            })
        })
    }

    function U(e) {
        return !("incomplete" in e)
    }

    function w(e) {
        if (null != e.users) {
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = e.users[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = o.value;
                    !(a.id in S && U(a)) && (S[a.id] = new l.default(a))
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
        }
    }

    function k(e) {
        var t = e.user;
        t.id !== d.default.getId() && R(t)
    }

    function G(e) {
        R(e.user)
    }

    function B(e) {
        R(e.user)
    }

    function j(e) {
        return e.messages.forEach(function(e) {
            return P(e, !0)
        }), !1
    }

    function F(e) {
        var t = e.mostRecentMessages;
        return null == t || t.forEach(function(e) {
            return P(e, !1)
        }), !1
    }

    function V(e) {
        return e.messages.forEach(function(e) {
            return j({
                messages: e
            })
        }), !1
    }

    function H(e) {
        var t = e.data;
        (0, i.getMessagesFromGuildFeedFetch)(t).forEach(function(e) {
            return P(e, !0)
        })
    }

    function x(e) {
        var t = e.firstMessages,
            n = e.owners;
        null != t && t.forEach(function(e) {
            return P(e, !0)
        }), null != n && n.forEach(function(e) {
            return R(e.user, !0)
        })
    }

    function Y(e) {
        Object.values(e.threads).forEach(function(e) {
            var t = e.first_message,
                n = e.most_recent_message,
                r = e.owner;
            null != t && P(t, !0), null != n && P(n, !0), null != r && null != r.user && R(r.user, !0)
        })
    }

    function W(e) {
        Object.values(e.supplementalData).forEach(function(e) {
            var t = e.message_preview;
            null != t && P(t, !0)
        })
    }

    function K(e) {
        var t = e.guildScheduledEventUsers,
            n = e.guildId;
        t.forEach(function(e) {
            var t = e.user,
                r = e.member;
            if (null != t) {
                R(t);
                var o = S[t.id],
                    i = null == r ? void 0 : r.avatar;
                null != o && null != i && A(o, n, i)
            }
        })
    }

    function z(e) {
        e.items.forEach(function(e) {
            null != e.other_user && R(e.other_user)
        })
    }

    function X(e) {
        var t = e.item;
        null != t.other_user && R(t.other_user)
    }

    function q(e) {
        var t = e.message;
        if (P(t, !0), null != t.flags && c.hasFlag(t.flags, E.MessageFlags.URGENT)) {
            var n = S[d.default.getId()];
            return null != n && (S[d.default.getId()] = n.set("flags", c.setFlag(n.flags, E.UserFlags.HAS_UNREAD_URGENT_MESSAGES, !0)), !0)
        }
        return !1
    }

    function Q(e) {
        var t = e.channel.rawRecipients;
        return null != t && t.forEach(function(e) {
            return R(e)
        }), !1
    }

    function J(e) {
        var t = e.channels,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value.rawRecipients;
                null != u && u.forEach(function(e) {
                    return R(e)
                })
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return !1
    }
    var Z = ["username", "avatar", "global_name", "discriminator", "bot"];

    function $(e) {
        return e.updates.map(function(e) {
            var t = S[e.user.id];
            if (null == t) return !1;
            var n = Z.reduce(function(n, o) {
                if (e.user.hasOwnProperty(o)) {
                    var i = t.set((0, r.camelCase)(o), e.user[o]);
                    n = n || i !== t, t = i
                }
                return n
            }, !1);
            return !!n && (S[t.id] = t, n)
        }).some(function(e) {
            return e
        })
    }

    function ee(e) {
        e.bans.forEach(function(e) {
            return R(e.user)
        })
    }

    function et(e) {
        e.bans.forEach(function(e) {
            return R(e.user)
        })
    }

    function en(e) {
        return R(e.user)
    }

    function er(e) {
        return !!e.isMember && R(e.user)
    }

    function eo(e) {
        var t = R(e.user),
            n = S[e.user.id];
        if (null == n) return t;
        var r = e.avatar;
        return A(n, e.guildId, r) || t
    }

    function ei(e) {
        var t = e.members,
            n = e.guildId;
        return t.reduce(function(e, t) {
            var r = R(t.user),
                o = S[t.user.id];
            return null == o ? r || e : A(o, n, t.avatar) || r || e
        }, !1)
    }

    function ea(e) {
        var t = !1,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a, u = (null !== (i = e.members) && void 0 !== i ? i : [])[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                var s = a.value;
                R(s.user) && (t = !0), null != S[s.user.id] && A(S[s.user.id], e.guildId, s.avatar) && (t = !0)
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != u.return && u.return()
            } finally {
                if (r) throw o
            }
        }
        return t
    }

    function eu(e) {
        var t = !1,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a, u = (null !== (i = e.users) && void 0 !== i ? i : [])[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                var s = a.value;
                !Object.hasOwn(S, s.id) && (t = R(s) || t)
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != u.return && u.return()
            } finally {
                if (r) throw o
            }
        }
        return t
    }

    function es(e) {
        var t = e.members,
            n = !1;
        return t.forEach(function(e) {
            null != e.member && R(e.member.user) && (n = !0), null != e.presence && R(e.presence.user) && (n = !0)
        }), n
    }

    function el(e) {
        var t = e.addedMembers,
            n = !1;
        return null == t || t.forEach(function(e) {
            null != e.member && R(e.member.user) && (n = !0), null != e.presence && R(e.presence.user) && (n = !0)
        }), n
    }

    function ec(e) {
        var t = e.guild;
        t.members.forEach(function(e) {
            var n = e.user,
                r = n.id,
                o = n.username,
                i = n.avatar,
                a = n.discriminator,
                u = n.bot,
                s = e.avatar;
            r !== d.default.getId() && R({
                id: r,
                username: o,
                avatar: i,
                discriminator: a,
                bot: u
            });
            var l = S[r];
            null != l && A(l, t.id, s)
        })
    }

    function ef(e) {
        return R(e.relationship.user)
    }

    function ed(e) {
        return e.relationships.reduce(function(e, t) {
            return R(t.user) || e
        }, !1)
    }

    function e_(e) {
        return R(e.suggestion.suggested_user)
    }

    function eE(e) {
        return e.suggestions.reduce(function(e, t) {
            return R(t.suggested_user) || e
        }, !1)
    }

    function ep(e) {
        e.users.forEach(function(e) {
            null == S[e.id] && (S[e.id] = new l.default(e))
        })
    }

    function em(e) {
        return e.lobby.members.reduce(function(e, t) {
            return R(t.user) || e
        }, !1)
    }

    function ey(e) {
        return R(e.member.user)
    }

    function eI(e) {
        var t = e.giftCode;
        return null != t.user && R(t.user)
    }

    function eh(e) {
        e.appliedBoosts.forEach(function(e) {
            var t = e.user;
            null != t && R(t)
        })
    }

    function eO(e) {
        var t = e.request,
            n = t.user,
            r = t.actioned_by_user,
            o = !1;
        return null != n && (o = o || R(n)), null != r && (o = o || R(r)), o
    }

    function eT(e) {
        e.integrations.forEach(function(e) {
            return D((0, u.createPrivateChannelIntegration)(e))
        })
    }

    function eS(e) {
        var t = e.integration;
        D((0, u.createPrivateChannelIntegration)(t))
    }

    function ev(e) {
        var t = e.integration;
        D((0, u.createPrivateChannelIntegration)(t))
    }

    function eg(e) {
        var t = e.users,
            n = e.familyCenterTeenActivity.users;
        return T(t).concat(T(n)).reduce(function(e, t) {
            return R(t) || e
        }, !1)
    }

    function eA(e) {
        return e.users.reduce(function(e, t) {
            return R(t) || e
        }, !1)
    }

    function eb(e) {
        return e.users.reduce(function(e, t) {
            return R(t) || e
        }, !1)
    }

    function eN(e) {
        return e.users.reduce(function(e, t) {
            return R(t) || e
        }, !1)
    }

    function eR(e) {
        var t = e.familyCenterTeenActivity;
        if (void 0 !== t) return t.users.reduce(function(e, t) {
            return R(t) || e
        }, !1)
    }

    function eC(e) {
        return e.familyCenterTeenActivity.users.reduce(function(e, t) {
            return R(t) || e
        }, !1)
    }

    function eP(e) {
        var t = e.members,
            n = d.default.getId();
        return t.reduce(function(e, t) {
            return t.member.user.id === n ? e : R(t.member.user) || e
        }, !1)
    }
    var eD = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), e = a.call(this, {
                CONNECTION_OPEN: L,
                CONNECTION_OPEN_SUPPLEMENTAL: M,
                UPDATE_CLIENT_PREMIUM_TYPE: B,
                OVERLAY_INITIALIZE: w,
                CACHE_LOADED: function(t) {
                    return e.handleLoadCache(t)
                },
                USER_UPDATE: k,
                CURRENT_USER_UPDATE: G,
                PRESENCE_UPDATES: $,
                SEARCH_FINISH: V,
                MOD_VIEW_SEARCH_FINISH: V,
                LOAD_MESSAGES_SUCCESS: j,
                LOAD_MESSAGES_AROUND_SUCCESS: j,
                LOAD_PINNED_MESSAGES_SUCCESS: j,
                LOAD_RECENT_MENTIONS_SUCCESS: j,
                THREAD_LIST_SYNC: F,
                MESSAGE_CREATE: q,
                MESSAGE_UPDATE: q,
                GUILD_SETTINGS_LOADED_BANS: ee,
                GUILD_SETTINGS_LOADED_BANS_BATCH: et,
                GUILD_CREATE: ec,
                GUILD_BAN_ADD: en,
                GUILD_BAN_REMOVE: en,
                CHANNEL_RECIPIENT_ADD: er,
                CHANNEL_RECIPIENT_REMOVE: er,
                GUILD_JOIN_REQUEST_CREATE: eO,
                GUILD_JOIN_REQUEST_UPDATE: eO,
                GUILD_MEMBER_ADD: eo,
                GUILD_MEMBER_UPDATE: eo,
                GUILD_MEMBERS_CHUNK: ei,
                THREAD_MEMBER_LIST_UPDATE: es,
                THREAD_MEMBERS_UPDATE: el,
                CHANNEL_CREATE: Q,
                CHANNEL_UPDATES: J,
                RELATIONSHIP_ADD: ef,
                LOAD_RELATIONSHIPS_SUCCESS: ed,
                FRIEND_SUGGESTION_CREATE: e_,
                LOAD_FRIEND_SUGGESTIONS_SUCCESS: eE,
                AUDIT_LOG_FETCH_SUCCESS: ep,
                AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: ep,
                LOBBY_CREATE: em,
                LOBBY_MEMBER_CONNECT: ey,
                LOBBY_MEMBER_UPDATE: ey,
                GIFT_CODE_RESOLVE_SUCCESS: eI,
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: eh,
                GUILD_FEED_FETCH_SUCCESS: H,
                LOAD_THREADS_SUCCESS: x,
                LOAD_ARCHIVED_THREADS_SUCCESS: x,
                LOAD_FORUM_POSTS: Y,
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: K,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: z,
                NOTIFICATION_CENTER_ITEM_CREATE: X,
                LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: W,
                PASSIVE_UPDATE_V1: ea,
                LOCAL_MESSAGES_LOADED: eu,
                FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: eT,
                PRIVATE_CHANNEL_INTEGRATION_CREATE: eS,
                PRIVATE_CHANNEL_INTEGRATION_UPDATE: ev,
                FAMILY_CENTER_INITIAL_LOAD: eg,
                FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: eA,
                FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: eR,
                FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: eC,
                FAMILY_CENTER_REQUEST_LINK_SUCCESS: eb,
                FRIEND_FINDER_PYMK_LOADED: eN,
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eP
            })
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(d.default)
            }
        }, {
            key: "takeSnapshot",
            value: function() {
                var e = this.getCurrentUser();
                return {
                    version: u.LATEST_SNAPSHOT_VERSION,
                    data: {
                        users: [e].filter(f.isNotNullish)
                    }
                }
            }
        }, {
            key: "handleLoadCache",
            value: function(e) {
                var t = this.readSnapshot(u.LATEST_SNAPSHOT_VERSION);
                if (null != t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = t.users[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var s = i.value;
                            S[s.id] = new l.default(s)
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                }
                if (null != e.users) {
                    var c = !0,
                        f = !1,
                        d = void 0;
                    try {
                        for (var _, E = e.users[Symbol.iterator](); !(c = (_ = E.next()).done); c = !0) {
                            var p = _.value;
                            !(p.id in S && U(p)) && (S[p.id] = new l.default(p))
                        }
                    } catch (e) {
                        f = !0, d = e
                    } finally {
                        try {
                            !c && null != E.return && E.return()
                        } finally {
                            if (f) throw d
                        }
                    }
                }
                for (var m = 0, y = [e.privateChannels, e.initialGuildChannels]; m < y.length; m++) {
                    var I = y[m],
                        h = !0,
                        O = !1,
                        T = void 0;
                    try {
                        for (var v, g = I[Symbol.iterator](); !(h = (v = g.next()).done); h = !0) {
                            var A, b = v.value;
                            null === (A = b.rawRecipients) || void 0 === A || A.forEach(function(e) {
                                return R(e, !1)
                            })
                        }
                    } catch (e) {
                        O = !0, T = e
                    } finally {
                        try {
                            !h && null != g.return && g.return()
                        } finally {
                            if (O) throw T
                        }
                    }
                }
            }
        }, {
            key: "getUserStoreVersion",
            value: function() {
                return v
            }
        }, {
            key: "getUser",
            value: function(e) {
                if (null != e) return S[e]
            }
        }, {
            key: "getUsers",
            value: function() {
                return S
            }
        }, {
            key: "forEach",
            value: function(e) {
                for (var t in S)
                    if (!1 === e(S[t])) break
            }
        }, {
            key: "findByTag",
            value: function(e, t) {
                for (var n in S) {
                    var r = S[n];
                    if (null != t && r.username === e && r.discriminator === t) return r;
                    if (null == t && r.username === e && r.isPomelo()) return r
                }
            }
        }, {
            key: "filter",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = [];
                for (var r in S) {
                    var o = S[r];
                    e(o) && n.push(o)
                }
                return t && n.sort(function(e, t) {
                    return e.username > t.username ? 1 : e.username < t.username ? -1 : 0
                }), n
            }
        }, {
            key: "getCurrentUser",
            value: function() {
                return S[d.default.getId()]
            }
        }], y(r.prototype, o), i && y(r, i), u
    }(_.default);
    I(eD, "displayName", "UserStore"), I(eD, "LATEST_SNAPSHOT_VERSION", 1), t.default = new eD
}