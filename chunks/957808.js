function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getGuildIdFromCommunicationDisabledUserKey: function() {
            return K
        },
        getUserIdFromCommunicationDisabledUserKey: function() {
            return W
        }
    });
    var r, o, i, a = n("392711"),
        u = n.n(a),
        s = n("194926"),
        l = n("898511"),
        c = n("629815"),
        f = n("35523"),
        d = n("690954"),
        _ = n("948187"),
        E = n("717744"),
        p = n("947248"),
        m = n("162677"),
        y = n("523018"),
        I = n("217014"),
        h = n("935741"),
        O = n("306912"),
        T = n("844659");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function N(e, t) {
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

    function R(e, t) {
        return (R = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function C(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var P = new f.default("GuildMemberStore"),
        D = {},
        L = {},
        M = {},
        U = !1,
        w = 0,
        k = 0,
        G = {},
        B = {},
        j = {
            added: [],
            removed: []
        };

    function F(e, t) {
        if (null == t.communicationDisabledUntil || !(0, d.isMemberCommunicationDisabled)(t)) return V(e, t.userId);
        var n = Y(e, t.userId);
        M[n] !== t.communicationDisabledUntil && (0, d.isMemberCommunicationDisabled)(t) && (M[n] = t.communicationDisabledUntil, H(n))
    }

    function V(e, t) {
        if (null != t) {
            var n = Y(e, t);
            null != M[n] && H(n), x(Y(e, t))
        } else
            for (var r in M) K(r) === e && (H(r), x(r))
    }

    function H(e) {
        w += 1, G[e] = w
    }

    function x(e) {
        W(e) === I.default.getId() && (0, _.clearCommunicationDisabledNotice)(K(e)), delete M[e]
    }

    function Y(e, t) {
        var n = [];
        return n[0] = e, n[1] = t, n.join("-")
    }

    function W(e) {
        return e.split("-")[1]
    }

    function K(e) {
        return e.split("-")[0]
    }

    function z(e, t) {
        if (0 === t.length) return {
            colorString: void 0,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
        var n, r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u, l, c, f, d, _ = t[Symbol.iterator](); !(r = (d = _.next()).done); r = !0) {
                var E = e[d.value];
                null != E && ((null == f || E.position > f.position) && (f = E), E.color > 0 && (null == u || E.position > u.position) && (u = E), E.hoist && (null == l || E.position > l.position) && (l = E), (null != E.icon || null != E.unicodeEmoji) && (null == c || E.position > c.position) && (c = E))
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != _.return && _.return()
            } finally {
                if (o) throw i
            }
        }
        return null != u && (null == u.colorString && u.color > 0 && (u.colorString = (0, s.int2hex)(u.color)), a = null !== (n = u.colorString) && void 0 !== n ? n : void 0), {
            colorString: a,
            colorRoleId: null == u ? void 0 : u.id,
            iconRoleId: null == c ? void 0 : c.id,
            hoistRoleId: null == l ? void 0 : l.id,
            highestRoleId: null == f ? void 0 : f.id
        }
    }

    function X(e) {
        var t = e.userId,
            n = e.nick,
            r = e.guildId,
            o = e.avatar,
            i = e.avatarDecoration,
            a = e.guildRoles,
            u = e.roles,
            s = e.premiumSince,
            l = e.isPending,
            c = e.joinedAt,
            f = e.communicationDisabledUntil,
            d = e.unusualDMActivityUntil,
            _ = e.fullProfileLoadedTimestamp,
            p = e.flags,
            m = z(a, u),
            h = {
                userId: t,
                nick: n,
                guildId: r,
                avatar: o,
                avatarDecoration: i,
                roles: u,
                colorString: m.colorString,
                colorRoleId: m.colorRoleId,
                iconRoleId: m.iconRoleId,
                hoistRoleId: m.hoistRoleId,
                highestRoleId: m.highestRoleId,
                premiumSince: s,
                isPending: l,
                joinedAt: c,
                communicationDisabledUntil: f,
                unusualDMActivityUntil: d,
                fullProfileLoadedTimestamp: _,
                flags: p
            };
        if (null == D[r]) return h;
        if (t === I.default.getId()) {
            if (E.default.isViewingRoles(r) || E.default.isFullServerPreview(r)) {
                var O = E.default.getViewingRoles(r);
                L[r] = N(b({}, h, E.default.getMemberOptions(r)), {
                    roles: null != O ? y.default.keys(O) : []
                })
            } else null != L[r] && delete L[r]
        }
        return h
    }(r = o || (o = {}))[r.GUILD = 0] = "GUILD", r[r.USER = 1] = "USER";

    function q(e) {
        e.guilds.forEach(function(e) {
            $(e)
        })
    }

    function Q(e) {
        var t, n = e.guildId,
            r = e.user,
            o = e.nick,
            i = e.avatar,
            a = e.avatarDecoration,
            u = e.roles,
            s = e.premiumSince,
            l = e.isPending,
            c = e.joinedAt,
            f = e.communicationDisabledUntil,
            d = e.unusualDMActivityUntil,
            _ = e.flags,
            E = D[n];
        if (null == E) return !1;
        var p = O.default.getGuild(n);
        if (null == p) return P.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
        E[r.id] = X({
            userId: r.id,
            nick: o,
            guildId: n,
            avatar: i,
            avatarDecoration: null != a ? {
                asset: a.asset,
                skuId: a.sku_id
            } : void 0,
            guildRoles: O.default.getRoles(p.id),
            roles: u,
            premiumSince: s,
            isPending: l,
            joinedAt: c,
            communicationDisabledUntil: f,
            unusualDMActivityUntil: d,
            fullProfileLoadedTimestamp: null === (t = E[r.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
            flags: _
        }), F(n, E[r.id])
    }

    function J(e, t) {
        var n = D[e];
        if (null == n) return !1;
        var r = O.default.getGuild(e);
        return null == r ? (P.warn("Guild ".concat(e, " not found during GUILD_MEMBERS_CHUNK.")), !1) : (t.forEach(function(t) {
            var o, i = n[t.user.id];
            n[t.user.id] = X({
                userId: t.user.id,
                nick: t.nick,
                guildId: e,
                avatar: t.avatar,
                avatarDecoration: Z(t),
                guildRoles: O.default.getRoles(r.id),
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: null == i ? void 0 : i.fullProfileLoadedTimestamp,
                unusualDMActivityUntil: null !== (o = t.unusual_dm_activity_until) && void 0 !== o ? o : null == i ? void 0 : i.unusualDMActivityUntil
            }), F(e, n[t.user.id])
        }), k++, !0)
    }

    function Z(e) {
        return null != e.avatar_decoration_data ? {
            asset: e.avatar_decoration_data.asset,
            skuId: e.avatar_decoration_data.sku_id
        } : void 0
    }

    function $(e) {
        var t = e.id;
        !(t in D) && (D[e.id] = {});
        var n = O.default.getGuild(t);
        if (null == n) return !1;
        var r = D[t],
            o = !0,
            i = !1,
            a = void 0;
        try {
            for (var u, s = e.members[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                var l, c = u.value,
                    f = c.user.id,
                    d = r[f],
                    _ = X({
                        userId: f,
                        nick: c.nick,
                        guildId: e.id,
                        avatar: c.avatar,
                        avatarDecoration: Z(c),
                        guildRoles: O.default.getRoles(n.id),
                        roles: c.roles,
                        premiumSince: c.premium_since,
                        isPending: c.pending,
                        joinedAt: c.joined_at,
                        communicationDisabledUntil: c.communication_disabled_until,
                        fullProfileLoadedTimestamp: null == d ? void 0 : d.fullProfileLoadedTimestamp,
                        flags: c.flags,
                        unusualDMActivityUntil: null !== (l = c.unusual_dm_activity_until) && void 0 !== l ? l : null == d ? void 0 : d.unusualDMActivityUntil
                    });
                r[f] = _, F(t, _)
            }
        } catch (e) {
            i = !0, a = e
        } finally {
            try {
                !o && null != s.return && s.return()
            } finally {
                if (i) throw a
            }
        }
        return !0
    }

    function ee(e) {
        var t = D[e.guildId];
        if (null == t) return !1;
        var n = O.default.getGuild(e.guildId);
        if (null == n) return P.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), !1;
        var r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = y.default.keys(t)[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s = a.value,
                    l = t[s];
                (null != l.roles && l.roles.length > 0 || null != l.colorString || null != l.hoistRoleId) && (t[s] = X({
                    userId: s,
                    nick: l.nick,
                    guildId: e.guildId,
                    avatar: l.avatar,
                    avatarDecoration: l.avatarDecoration,
                    guildRoles: O.default.getRoles(n.id),
                    roles: l.roles,
                    premiumSince: l.premiumSince,
                    isPending: l.isPending,
                    joinedAt: l.joinedAt,
                    flags: l.flags,
                    fullProfileLoadedTimestamp: null == l ? void 0 : l.fullProfileLoadedTimestamp
                }), F(e.guildId, t[s]))
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != u.return && u.return()
            } finally {
                if (o) throw i
            }
        }
    }

    function et(e) {
        var t = e.guildId,
            n = D[t];
        if (null == n) return !1;
        var r = O.default.getGuild(t);
        if (null == r) return P.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), !1;
        var o = I.default.getId(),
            i = n[o];
        n[o] = X({
            userId: o,
            nick: i.nick,
            guildId: t,
            avatar: i.avatar,
            avatarDecoration: i.avatarDecoration,
            guildRoles: O.default.getRoles(r.id),
            roles: i.roles,
            premiumSince: i.premiumSince,
            isPending: i.isPending,
            joinedAt: i.joinedAt,
            communicationDisabledUntil: i.communicationDisabledUntil,
            fullProfileLoadedTimestamp: i.fullProfileLoadedTimestamp,
            flags: i.flags
        })
    }

    function en(e) {
        var t, n = e.message,
            r = e.guildId;
        (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null && null != r && $({
            id: r,
            members: Object.entries(n.resolved.members).map(function(e) {
                var t, r, o = C(e, 2),
                    i = o[0],
                    a = o[1],
                    u = null === (r = n.resolved) || void 0 === r ? void 0 : null === (t = r.users) || void 0 === t ? void 0 : t[i];
                if (null != u) return N(b({}, a), {
                    user: u
                })
            }).filter(function(e) {
                return null != e
            })
        })
    }

    function er(e) {
        e.messages.forEach(function(e) {
            return function(e) {
                if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) != null) {
                    var t, n = h.default.getChannel(e.channel_id);
                    !(null == n || n.isPrivate()) && $({
                        id: n.guild_id,
                        members: Object.entries(e.resolved.members).map(function(t) {
                            var n, r, o = C(t, 2),
                                i = o[0],
                                a = o[1],
                                u = null === (r = e.resolved) || void 0 === r ? void 0 : null === (n = r.users) || void 0 === n ? void 0 : n[i];
                            if (null != u) return N(b({}, a), {
                                user: u
                            })
                        }).filter(function(e) {
                            return null != e
                        })
                    })
                }
            }(e)
        })
    }

    function eo(e) {
        e.messages.forEach(function(e) {
            return er({
                messages: e
            })
        })
    }
    var ei = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && R(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = A(t);
            if (n) {
                var a = A(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), a.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(O.default, I.default, E.default)
            }
        }, {
            key: "getMutableAllGuildsAndMembers",
            value: function() {
                return D
            }
        }, {
            key: "memberOf",
            value: function(e) {
                return u()(D).toPairs().filter(function(t) {
                    var n = C(t, 2);
                    return null != (n[0], n[1])[e]
                }).map(function(e) {
                    return C(e, 1)[0]
                }).value()
            }
        }, {
            key: "getNicknameGuildsMapping",
            value: function(e) {
                var t = {};
                for (var n in D) {
                    var r, o = null === (r = D[n][e]) || void 0 === r ? void 0 : r.nick;
                    null != o && (!Object.prototype.hasOwnProperty.call(t, o) && (t[o] = []), t[o].push(n))
                }
                return t
            }
        }, {
            key: "getNicknames",
            value: function(e) {
                return Object.keys(this.getNicknameGuildsMapping(e))
            }
        }, {
            key: "isMember",
            value: function(e, t) {
                if (null == e || null == t) return !1;
                var n = D[e];
                return null != n && null != n[t]
            }
        }, {
            key: "isGuestOrLurker",
            value: function(e, t) {
                if (null == e || null == t) return !1;
                var n, r = D[e];
                return null != r && (null === (n = r[t]) || void 0 === n ? void 0 : n.joinedAt) == null
            }
        }, {
            key: "isCurrentUserGuest",
            value: function(e) {
                if (null == e) return !1;
                var t = I.default.getId(),
                    n = D[e];
                if (null == n || null == n[t]) return !1;
                var r = n[t].flags;
                return null != r && (0, p.hasFlag)(r, T.GuildMemberFlags.IS_GUEST)
            }
        }, {
            key: "getMemberIds",
            value: function(e) {
                if (null == e) return [];
                var t = D[e];
                return null == t ? [] : y.default.keys(t)
            }
        }, {
            key: "getMembers",
            value: function(e) {
                if (null == e) return [];
                var t = D[e];
                return null == t ? [] : Object.values(t)
            }
        }, {
            key: "getTrueMember",
            value: function(e, t) {
                var n = D[e];
                return null != n ? n[t] : null
            }
        }, {
            key: "getMember",
            value: function(e, t) {
                var n, r = this.getTrueMember(e, t);
                return null != r && t === I.default.getId() && (E.default.isViewingRoles(e) || E.default.isFullServerPreview(e)) ? null !== (n = L[e]) && void 0 !== n ? n : r : r
            }
        }, {
            key: "getSelfMember",
            value: function(e) {
                return this.getMember(e, I.default.getId())
            }
        }, {
            key: "getNick",
            value: function(e, t) {
                if (null == e || null == t) return null;
                var n = this.getMember(e, t);
                return null != n ? n.nick : null
            }
        }, {
            key: "getCommunicationDisabledUserMap",
            value: function() {
                return M
            }
        }, {
            key: "getCommunicationDisabledVersion",
            value: function() {
                return w
            }
        }, {
            key: "getPendingRoleUpdates",
            value: function(e) {
                var t;
                return null !== (t = B[e]) && void 0 !== t ? t : j
            }
        }, {
            key: "getMemberRoleWithPendingUpdates",
            value: function(e, t) {
                var n, r, o = null !== (r = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== r ? r : [],
                    i = B[e];
                return null == i ? o : u().difference(u().union(o, i.added), i.removed)
            }
        }, {
            key: "getMemberVersion",
            value: function() {
                return k
            }
        }], v(r.prototype, o), i && v(r, i), s
    }(l.default.Store);
    g(ei, "displayName", "GuildMemberStore"), t.default = new ei(c.default, {
        CONNECTION_OPEN: function(e) {
            U ? U = !1 : D = {}, M = {}, q(e)
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            q(e)
        },
        OVERLAY_INITIALIZE: function(e) {
            D = b({}, e.guildMembers)
        },
        CACHE_LOADED: function(e) {
            var t = e.guildMembers;
            U = !0, D = b({}, t)
        },
        GUILD_CREATE: function(e) {
            return $(e.guild)
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            delete D[t.id], V(t.id)
        },
        GUILD_MEMBER_ADD: Q,
        GUILD_MEMBER_UPDATE: Q,
        GUILD_MEMBER_UPDATE_LOCAL: function(e) {
            var t, n, r, o = e.guildId,
                i = e.roles,
                a = e.addedRoleIds,
                s = e.removedRoleIds,
                l = e.flags,
                c = I.default.getId(),
                f = D[o],
                d = null != f ? f[c] : null;
            if (null == d) return !1;
            var _ = O.default.getGuild(o);
            if (null == _) return !1;
            var E = null !== (t = B[o]) && void 0 !== t ? t : {};
            B[o] = {
                added: u().difference(u().union(null !== (n = E.added) && void 0 !== n ? n : [], a), null != s ? s : []),
                removed: u().difference(u().union(null !== (r = E.removed) && void 0 !== r ? r : [], s), null != a ? a : [])
            }, f[c] = X({
                userId: c,
                guildId: o,
                nick: d.nick,
                avatar: d.avatar,
                avatarDecoration: d.avatarDecoration,
                guildRoles: O.default.getRoles(_.id),
                roles: null != i ? i : d.roles,
                premiumSince: d.premiumSince,
                isPending: d.isPending,
                joinedAt: d.joinedAt,
                flags: null != l ? l : d.flags,
                fullProfileLoadedTimestamp: d.fullProfileLoadedTimestamp
            })
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            return J(e.guildId, e.members)
        },
        GUILD_MEMBER_REMOVE: function(e) {
            var t = e.guildId,
                n = e.user,
                r = D[t];
            if (null == r || null == r[n.id]) return !1;
            delete r[n.id], V(t, n.id), k++
        },
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            return J(e.guildId, e.members.map(function(e) {
                return e.member
            }).filter(m.isNotNullish))
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            var t = e.guildId,
                n = e.addedMembers;
            return null != n && J(t, n.map(function(e) {
                return e.member
            }).filter(m.isNotNullish))
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            return J(e.guildId, e.owners)
        },
        LOAD_FORUM_POSTS: function(e) {
            return J(e.guildId, Object.values(e.threads).map(function(e) {
                return e.owner
            }).filter(m.isNotNullish))
        },
        GUILD_ROLE_UPDATE: ee,
        GUILD_ROLE_DELETE: ee,
        GUILD_ROLE_MEMBER_REMOVE: function(e) {
            var t = e.guildId,
                n = e.userId,
                r = e.roleId,
                o = D[t];
            if (null == o) return !1;
            var i = O.default.getGuild(t);
            if (null == i) return P.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            var a = o[n];
            if (null == a || !a.roles.includes(r)) return !1;
            a.roles = a.roles.filter(function(e) {
                return e !== r
            });
            var u = z(O.default.getRoles(i.id), a.roles);
            return o[n] = b({}, a, u), !0
        },
        GUILD_ROLE_MEMBER_ADD: function(e) {
            var t = e.guildId,
                n = e.userId,
                r = e.roleId,
                o = D[t];
            if (null == o) return !1;
            var i = O.default.getGuild(t);
            if (null == i) return P.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), !1;
            var a = o[n];
            if (null == a || a.roles.includes(r)) return !1;
            a.roles.push(r);
            var u = z(O.default.getRoles(i.id), a.roles);
            return o[n] = b({}, a, u), !0
        },
        GUILD_MEMBER_PROFILE_UPDATE: function(e) {
            var t = e.guildMember,
                n = e.guildId,
                r = D[n];
            if (null == r) return !1;
            var o = O.default.getGuild(n);
            if (null == o) return P.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), !1;
            r[t.user.id] = X({
                userId: t.user.id,
                nick: t.nick,
                guildId: n,
                avatar: t.avatar,
                avatarDecoration: Z(t),
                guildRoles: O.default.getRoles(o.id),
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                unusualDMActivityUntil: t.unusual_dm_activity_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: Date.now()
            }), F(n, r[t.user.id])
        },
        IMPERSONATE_UPDATE: et,
        IMPERSONATE_STOP: et,
        PASSIVE_UPDATE_V1: function(e) {
            return null != e.members && J(e.guildId, e.members)
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function(e) {
            var t = e.guildId;
            if (null == t) return !1;
            delete B[t]
        },
        LOCAL_MESSAGES_LOADED: function(e) {
            if (null == e.guildId || null == O.default.getGuild(e.guildId)) return !1;
            U = !0, D[e.guildId] = null !== (i = D[e.guildId]) && void 0 !== i ? i : {};
            var t = !1;
            U = !0, D[e.guildId] = null !== (a = D[e.guildId]) && void 0 !== a ? a : {};
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a, u, s = e.members[Symbol.iterator](); !(n = (u = s.next()).done); n = !0) {
                    var l = u.value;
                    null == D[e.guildId][l.userId] && (t = !0, D[e.guildId][l.userId] = l)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != s.return && s.return()
                } finally {
                    if (r) throw o
                }
            }
            return t
        },
        MESSAGE_CREATE: en,
        MESSAGE_UPDATE: en,
        LOAD_MESSAGES_SUCCESS: er,
        LOAD_MESSAGES_AROUND_SUCCESS: er,
        LOAD_PINNED_MESSAGES_SUCCESS: er,
        LOAD_RECENT_MENTIONS_SUCCESS: er,
        SEARCH_FINISH: eo,
        MOD_VIEW_SEARCH_FINISH: eo,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function(e) {
            return J(e.guildId, e.members.map(function(e) {
                return e.member
            }))
        }
    })
}