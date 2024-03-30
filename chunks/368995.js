function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("957808"),
        c = n("306912"),
        f = n("208454"),
        d = n("281767");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function y(e) {
        return function(e) {
            if (Array.isArray(e)) return _(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var I = [],
        h = {},
        O = null,
        T = null;

    function S(e) {
        var t = I.indexOf(e);
        if (t > -1) {
            var n = y(I);
            return n.splice(t, 1), I = n, delete h[e], !0
        }
        return !1
    }

    function v(e) {
        return !(e === d.ME || I.includes(e)) && (I = y(I).concat([e]), !0)
    }
    var g = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
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
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
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
                this.waitFor(c.default, f.default)
            }
        }, {
            key: "setHistorySnapshot",
            value: function(e) {
                O = e
            }
        }, {
            key: "getHistorySnapshot",
            value: function() {
                return O
            }
        }, {
            key: "lurkingGuildIds",
            value: function() {
                return I
            }
        }, {
            key: "mostRecentLurkedGuildId",
            value: function() {
                return 0 === I.length ? null : I[I.length - 1]
            }
        }, {
            key: "isLurking",
            value: function(e) {
                var t, n = l.default.isCurrentUserGuest(e),
                    r = null === (t = c.default.getGuild(e)) || void 0 === t ? void 0 : t.isLurker();
                return !!(!n && r)
            }
        }, {
            key: "getLurkingSource",
            value: function() {
                return T
            }
        }, {
            key: "getLoadId",
            value: function(e) {
                return null != e ? h[e] : null
            }
        }], E(r.prototype, o), i && E(r, i), u
    }(u.default.Store);
    i = "LurkingStore", (o = "displayName") in(r = g) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new g(s.default, {
        CONNECTION_OPEN: function() {
            I = Object.values(c.default.getGuilds()).reduce(function(e, t) {
                return t.isLurker() ? y(e).concat([t.id]) : e
            }, [])
        },
        GUILD_JOIN: function(e) {
            var t, n, r = e.guildId,
                o = e.lurker,
                i = e.source,
                a = e.directoryChannelId,
                u = e.loadId;
            if (o) {
                ;
                switch (v(r), t = r, null != (n = u) && (h[t] = n), i) {
                    case d.JoinGuildSources.MOBILE_GUILD_DISCOVERY:
                        T = {
                            type: d.JoinGuildSources.MOBILE_GUILD_DISCOVERY
                        };
                        break;
                    case d.JoinGuildSources.DIRECTORY_ENTRY:
                        T = {
                            type: d.JoinGuildSources.DIRECTORY_ENTRY,
                            directoryChannelId: a
                        };
                        break;
                    default:
                        T = null
                }
                return !0
            }
            return !1
        },
        GUILD_STOP_LURKING: function(e) {
            var t, n, r = (t = e.ignoredGuildIds, n = new Set(y(null != t ? t : [])), y(I).reduce(function(e, t) {
                return n.has(t) ? e : S(t) || e
            }, !1));
            return r && (O = null, T = null), r
        },
        GUILD_STOP_LURKING_FAILURE: function(e) {
            var t = e.lurkingGuildId,
                n = e.lurkingSource;
            return v(t), T = n, !0
        },
        GUILD_CREATE: function(e) {
            var t = e.guild;
            return !!(null != t.joined_at && I.includes(t.id)) && (S(t.id), O = null, T = null, !0)
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            return !!I.includes(t.id) && (S(t.id), O = null, T = null, !0)
        },
        GUILD_MEMBER_ADD: function(e) {
            var t, n = e.guildId,
                r = e.joinedAt,
                o = e.user.id === (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
            return !!(o && null != r && I.includes(n)) && (S(n), O = null, T = null, !0)
        }
    })
}