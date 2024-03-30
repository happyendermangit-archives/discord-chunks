function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("898511"),
        a = n("252546"),
        u = n("629815"),
        s = n("393588"),
        l = n("593607"),
        c = n("989396"),
        f = n("523018"),
        d = n("217014"),
        _ = n("281767"),
        E = n("135042");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function O(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                y(e, t, n[t])
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

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function v(e) {
        return function(e) {
            if (Array.isArray(e)) return p(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var g = {},
        A = {},
        b = !1,
        N = [];

    function R(e) {
        A = {}, g = {}, r = 0;
        var t = !0,
            n = !1,
            o = void 0;
        try {
            for (var i, a = e[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                var u = i.value;
                r++, A[u.id] = l.fromSerializedGuildRecord(u), g[u.id] = u.roles
            }
        } catch (e) {
            n = !0, o = e
        } finally {
            try {
                !t && null != a.return && a.return()
            } finally {
                if (n) throw o
            }
        }
    }

    function C(e) {
        var t = e.guildId,
            n = e.role,
            r = g[t],
            o = c.fromServerRole(n),
            i = null == r ? void 0 : r[o.id];
        if (null != i && (0, a.default)(o, i)) return !1;
        r = T(O({}, r), y({}, n.id, c.fromServerRole(n))), g[t] = r
    }
    var P = Object.freeze({}),
        D = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && S(e, t)
            }(s, e);
            var t, n, o, i, a, u = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = I(t);
                if (n) {
                    var a = I(this).constructor;
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
                }(this, s), u.apply(this, arguments)
            }
            return o = s, i = [{
                key: "getGuild",
                value: function(e) {
                    if (null != e) return e === _.FAVORITES ? E.FAVORITES_GUILD_RECORD : A[e]
                }
            }, {
                key: "getGuilds",
                value: function() {
                    return A
                }
            }, {
                key: "getGuildIds",
                value: function() {
                    return f.default.keys(A)
                }
            }, {
                key: "getGuildCount",
                value: function() {
                    return r
                }
            }, {
                key: "isLoaded",
                value: function() {
                    return b
                }
            }, {
                key: "getGeoRestrictedGuilds",
                value: function() {
                    return N
                }
            }, {
                key: "getAllGuildsRoles",
                value: function() {
                    return g
                }
            }, {
                key: "getRoles",
                value: function(e) {
                    var t;
                    return null !== (t = g[e]) && void 0 !== t ? t : P
                }
            }, {
                key: "getRole",
                value: function(e, t) {
                    var n;
                    return null === (n = g[e]) || void 0 === n ? void 0 : n[t]
                }
            }], m(o.prototype, i), a && m(o, a), s
        }(i.default.Store);
    y(D, "displayName", "GuildStore"), t.default = new D(u.default, {
        BACKGROUND_SYNC: function(e) {
            var t = !0,
                n = !1,
                o = void 0;
            try {
                for (var i, a = e.guilds[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                    var u, s = i.value,
                        f = A[s.id];
                    if (null == f || "unavailable" === s.data_mode) return;
                    A[s.id] = l.fromBackgroundSync(s, f), g[s.id] = "partial" === s.data_mode ? l.filterRoleDeletes(s.id, null !== (u = g[s.id]) && void 0 !== u ? u : P, s.partial_updates.roles, s.partial_updates.deleted_role_ids) : c.sortServerRoles(s.id, s.roles)
                }
            } catch (e) {
                n = !0, o = e
            } finally {
                try {
                    !t && null != a.return && a.return()
                } finally {
                    if (n) throw o
                }
            }
            r = Object.keys(A).length
        },
        CONNECTION_OPEN: function(e) {
            b = !0;
            var t = A;
            A = {}, g = {}, r = 0, e.guilds.forEach(function(e) {
                r++, A[e.id] = l.fromServer(e, t[e.id]), g[e.id] = h(e.roles, Array) ? c.sortServerRoles(e.id, e.roles) : e.roles
            });
            var n = !1;
            if (N.length !== e.geoRestrictedGuilds.length) n = !0;
            else
                for (var o = 0; o < e.geoRestrictedGuilds.length; o++)
                    if (!(0, a.default)(N[o], e.geoRestrictedGuilds[o])) {
                        n = !0;
                        break
                    } n && (N = e.geoRestrictedGuilds)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t;
            A = {}, g = {}, r = 0, null === (t = e.guilds) || void 0 === t || t.forEach(function(e) {
                r++, A[e.id] = new s.default(e)
            }), g = e.allGuildsRoles
        },
        CACHE_LOADED: function(e) {
            R(e.guilds)
        },
        CACHE_LOADED_LAZY: function(e) {
            if (0 === e.guilds.length) return !1;
            R(e.guilds)
        },
        GUILD_CREATE: function(e) {
            var t = l.fromServer(e.guild, A[e.guild.id]);
            null == A[t.id] && r++, A = T(O({}, A), y({}, t.id, t)), g[t.id] = h(e.guild.roles, Array) ? c.sortServerRoles(t.id, e.guild.roles) : e.guild.roles
        },
        GUILD_UPDATE: function(e) {
            var t = l.fromServerUpdate(e.guild, A[e.guild.id]);
            null == A[t.id] && r++, A = T(O({}, A), y({}, t.id, t)), g[t.id] = c.sortServerRoles(t.id, e.guild.roles)
        },
        GUILD_DELETE: function(e) {
            var t = e.guild,
                n = N.findIndex(function(e) {
                    return e.id === t.id
                });
            if (-1 !== n) {
                N.splice(n, 1), N = v(N);
                return
            }
            if (null == A[t.id] || t.unavailable) return !1;
            A = O({}, A), delete A[t.id], g[t.id] = void 0, r--
        },
        GUILD_ROLE_CREATE: C,
        GUILD_ROLE_UPDATE: C,
        GUILD_ROLE_DELETE: function(e) {
            var t = e.guildId,
                n = e.roleId,
                r = g[t];
            if (null == r) return !1;
            r = O({}, r), delete r[n], g[t] = r
        },
        GUILD_MEMBER_ADD: function(e) {
            var t = e.guildId,
                n = e.joinedAt,
                r = e.user,
                o = d.default.getId(),
                i = A[t];
            if (o !== r.id || null == i) return !1;
            var a = "string" == typeof n ? new Date(n) : n;
            if (a === i.joinedAt || null == a) return !1;
            A = T(O({}, A), y({}, t, i.updateJoinedAt(a)))
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
            return !0
        },
        GUILD_GEO_RESTRICTED: function(e) {
            N = v(N).concat([{
                id: e.guildId,
                name: e.name,
                icon: e.icon,
                unavailable: !0,
                geo_restricted: !0
            }])
        }
    })
}