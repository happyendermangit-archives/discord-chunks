function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("22287"),
        c = n("898511"),
        f = n("629815"),
        d = n("56449"),
        _ = n("717744"),
        E = n("368995"),
        p = n("487181"),
        m = n("956774"),
        y = n("526514"),
        I = n("569492"),
        h = n("393588"),
        O = n("428009"),
        T = n("181994"),
        S = n("359017"),
        v = n("935741"),
        g = n("181631"),
        A = n("957808"),
        b = n("306912"),
        N = n("208454"),
        R = n("281767"),
        C = n("964115");

    function P(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function D(e) {
        return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function L(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function M(e, t) {
        return (M = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var U = {},
        w = {},
        k = {},
        G = 0;

    function B(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = U[e];
        if (null != n) return n;
        var r = N.default.getCurrentUser();
        if (null == r) return S.NONE;
        var o = b.default.getGuild(e);
        return null == o ? S.NONE : U[e] = S.computePermissions({
            user: r,
            context: o,
            checkElevated: t
        })
    }

    function j(e) {
        var t, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = N.default.getCurrentUser();
        if (null == r) return S.NONE;
        var o = v.default.getChannel(e);
        if (null == o) return S.NONE;
        var i = o.getGuildId(),
            a = null != i && (E.default.isLurking(i) || (null === (t = A.default.getMember(i, r.id)) || void 0 === t ? void 0 : t.isPending));
        return !o.isScheduledForDeletion() && !a && s().isEmpty(o.permissionOverwrites) && null != i ? B(i) : S.computePermissions({
            user: r,
            context: o,
            checkElevated: n
        })
    }

    function F(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = w[e];
        return null != n ? n : w[e] = j(e, t)
    }

    function V(e) {
        if (null != e) {
            var t;
            k[e] = (null !== (t = k[e]) && void 0 !== t ? t : 0) + 1
        }
    }

    function H() {
        for (var e in U = {}, w = {}, k) k[e] += 1;
        G += 1
    }

    function x() {
        H()
    }

    function Y() {
        H()
    }

    function W(e) {
        var t;
        if (e.user.id !== (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
        H()
    }

    function K() {
        return !0
    }

    function z(e) {
        var t = e.messages;
        return !!(e.threads.length > 0) || t.some(function(e) {
            return e.some(function(e) {
                return null != e.thread
            })
        })
    }

    function X(e) {
        var t = e.guildId;
        delete U[t];
        var n = v.default.getMutableBasicGuildChannelsForGuild(t);
        s().forEach(n, function(e) {
            delete w[e.id]
        }), G += 1, V(t)
    }

    function q(e) {
        var t = e.instance,
            n = v.default.getChannel(t.channel_id);
        if (null == n) return !1;
        var r = N.default.getCurrentUser(),
            o = S.computePermissions({
                user: r,
                context: n
            });
        if (o === w[n.id]) return !1;
        w[n.id] = o, G += 1
    }

    function Q(e) {
        var t = e.guildId;
        delete U[t];
        var n = v.default.getMutableBasicGuildChannelsForGuild(t);
        s().forEach(n, function(e) {
            delete w[e.id]
        }), G += 1, V(t)
    }

    function J(e, t, n, r) {
        var o = S.NONE;
        if (L(e, I.ChannelRecordBase)) {
            if (I.THREAD_CHANNEL_TYPES.has(e.type)) {
                var i = v.default.getChannel(e.parent_id);
                return null == i ? S.NONE : S.applyThreadPermissions(e, J(i, t, n, r), m.default.hasJoined(e.id))
            }
            o = F(e.id)
        } else L(e, h.default) && (o = B(e.id));
        return void 0 !== t || void 0 !== n || void 0 !== r ? S.computePermissions({
            user: N.default.getCurrentUser(),
            context: e,
            overwrites: t,
            roles: n,
            checkElevated: !0,
            excludeGuildPermissions: r
        }) : o
    }
    var Z = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && M(e, t)
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
            var e, r, o, i = D(t);
            if (n) {
                var a = D(this).constructor;
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
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(N.default, b.default, v.default, A.default, g.default, m.default, p.default, _.default)
            }
        }, {
            key: "getChannelPermissions",
            value: function(e) {
                return I.THREAD_CHANNEL_TYPES.has(e.type) ? j(e.id) : F(e.id)
            }
        }, {
            key: "getGuildPermissions",
            value: function(e) {
                return B(e.id)
            }
        }, {
            key: "getGuildPermissionProps",
            value: function(e) {
                var t = N.default.getCurrentUser();
                return {
                    canManageGuild: this.can(R.Permissions.MANAGE_GUILD, e),
                    canManageChannels: this.can(R.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: this.can(R.Permissions.MANAGE_ROLES, e),
                    canManageBans: this.can(R.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: this.can(R.Permissions.MANAGE_NICKNAMES, e),
                    canManageGuildExpressions: this.can(R.Permissions.MANAGE_GUILD_EXPRESSIONS, e) || this.can(R.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canViewAuditLog: this.can(R.Permissions.VIEW_AUDIT_LOG, e),
                    canViewAuditLogV2: this.can(R.Permissions.VIEW_AUDIT_LOG, e),
                    canManageWebhooks: this.can(R.Permissions.MANAGE_WEBHOOKS, e),
                    canViewGuildAnalytics: this.can(R.Permissions.VIEW_GUILD_ANALYTICS, e),
                    canAccessMembersPage: this.canAccessMemberSafetyPage(e),
                    isGuildAdmin: this.can(R.Permissions.ADMINISTRATOR, e),
                    isOwner: null != t && e.isOwner(t),
                    isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
                    guild: e
                }
            }
        }, {
            key: "canAccessMemberSafetyPage",
            value: function(e) {
                return l.hasAny(B(e.id), C.MemberSafetyPagePermissions)
            }
        }, {
            key: "canAccessGuildSettings",
            value: function(e) {
                return l.hasAny(B(e.id), S.VIEW_GUILD_SETTINGS)
            }
        }, {
            key: "canWithPartialContext",
            value: function(e, t) {
                return "channelId" in t && "string" == typeof t.channelId ? this.can(e, v.default.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, b.default.getGuild(t.guildId))
            }
        }, {
            key: "can",
            value: function(e, t, n, r, o) {
                var i = J(t, n, r, o);
                return l.has(i, e)
            }
        }, {
            key: "canBasicChannel",
            value: function(e, t, n, r, o) {
                return "basicPermissions" in t ? T.default.has(t.basicPermissions, e) : l.has(J(t, n, r, o), T.default.asBigFlag(e))
            }
        }, {
            key: "computePermissions",
            value: function(e, t, n, r) {
                return J(e, t, n, r)
            }
        }, {
            key: "computeBasicPermissions",
            value: function(e) {
                return "basicPermissions" in e ? e.basicPermissions : T.default.asBasicFlag(J(e))
            }
        }, {
            key: "canManageUser",
            value: function(e, t, n) {
                var r = L(t, O.default) ? t.id : t;
                if (n.isOwner(r)) return !1;
                var o = N.default.getCurrentUser();
                if (!this.can(e, n)) return !1;
                var i = null != o ? S.getHighestRole(n, o.id) : void 0,
                    a = S.getHighestRole(n, r);
                return null != o && S.isRoleHigher(n, o.id, i, a)
            }
        }, {
            key: "getHighestRole",
            value: function(e) {
                var t = N.default.getCurrentUser();
                return null != t ? S.getHighestRole(e, t.id) : null
            }
        }, {
            key: "isRoleHigher",
            value: function(e, t, n) {
                var r = N.default.getCurrentUser(),
                    o = _.default.isViewingRoles(e.id);
                return S.isRoleHigher(e, o ? void 0 : null == r ? void 0 : r.id, t, n)
            }
        }, {
            key: "canImpersonateRole",
            value: function(e, t) {
                var n = this.getHighestRole(e),
                    r = this.can(R.Permissions.MANAGE_GUILD, e) && this.can(R.Permissions.MANAGE_ROLES, e),
                    o = this.isRoleHigher(e, n, t);
                return r && (o || t.id === (null == n ? void 0 : n.id))
            }
        }, {
            key: "getGuildVersion",
            value: function(e) {
                var t;
                return null !== (t = k[e]) && void 0 !== t ? t : 0
            }
        }, {
            key: "getChannelsVersion",
            value: function() {
                return G
            }
        }], P(r.prototype, o), i && P(r, i), u
    }(c.default.Store);

    function $() {
        w = {}, U = {}, k = {}, G = 0
    }
    i = "PermissionStore", (o = "displayName") in(r = Z) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new Z(f.default, {
        BACKGROUND_SYNC: x,
        CONNECTION_OPEN: x,
        OVERLAY_INITIALIZE: x,
        CACHE_LOADED: x,
        CACHE_LOADED_LAZY: x,
        CONNECTION_CLOSED: function() {
            $()
        },
        GUILD_CREATE: Y,
        GUILD_UPDATE: Y,
        GUILD_DELETE: Y,
        GUILD_MEMBER_ADD: W,
        GUILD_MEMBER_UPDATE: W,
        CURRENT_USER_UPDATE: W,
        CHANNEL_CREATE: function(e) {
            var t = e.channel.id,
                n = v.default.getChannel(t);
            if (null == n || n.isPrivate()) return !1;
            var r = N.default.getCurrentUser(),
                o = S.computePermissions({
                    user: r,
                    context: n
                });
            if (w[n.id] === o) return !1;
            w[n.id] = o, G += 1, V(n.getGuildId())
        },
        THREAD_CREATE: K,
        THREAD_UPDATE: K,
        THREAD_LIST_SYNC: K,
        LOAD_THREADS_SUCCESS: K,
        LOAD_ARCHIVED_THREADS_SUCCESS: K,
        CHANNEL_UPDATES: function(e) {
            var t = e.channels,
                n = !1,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value.id,
                        l = v.default.getChannel(s);
                    if (!(null == l || l.isPrivate())) {
                        var c = N.default.getCurrentUser(),
                            f = S.computePermissions({
                                user: c,
                                context: l
                            });
                        w[l.id] !== f && (w[l.id] = f, V(l.getGuildId()), n = !0)
                    }
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
            return !!n && (G += 1, n)
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            return e.messages.some(function(e) {
                return null != e.thread
            })
        },
        SEARCH_FINISH: z,
        MOD_VIEW_SEARCH_FINISH: z,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            var t = e.data;
            return (0, d.getThreadsFromGuildFeedFetch)(t).length > 0
        },
        THREAD_MEMBER_UPDATE: function(e) {
            var t;
            return (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (V(e.guildId), !0)
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            return !!(0, y.doesThreadMembersActionAffectMe)(e) && (V(e.guildId), !0)
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            return delete w[t.id], G += 1, V(t.guild_id), !1
        },
        GUILD_ROLE_CREATE: X,
        GUILD_ROLE_UPDATE: X,
        GUILD_ROLE_DELETE: X,
        LOGOUT: $,
        STAGE_INSTANCE_CREATE: q,
        STAGE_INSTANCE_UPDATE: q,
        STAGE_INSTANCE_DELETE: q,
        IMPERSONATE_UPDATE: Q,
        IMPERSONATE_STOP: Q
    })
}