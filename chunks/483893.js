function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("898511"),
        o = n("629815");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function c(e) {
        return function(e) {
            if (Array.isArray(e)) return i(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(_, e);
        var t, n, r, i, f, d = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = s(t);
            if (n) {
                var u = s(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(e)
        });

        function _() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), t = a(e = d.call(this, o.default, {
                CACHE_LOADED: function(t) {
                    return e.handleCacheLoaded(t)
                },
                CACHE_LOADED_LAZY: function(t) {
                    return e.handleCacheLoadedLazy(t)
                },
                CONNECTION_OPEN: function(t) {
                    return e.handleConnectionOpen(t)
                },
                GUILD_CREATE: function(t) {
                    return e.handleGuildCreate(t)
                },
                GUILD_DELETE: function(t) {
                    return e.handleGuildDelete(t)
                }
            }, o.DispatchBand.Early)), n = "guildIds", r = new Set, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return r = _, i = [{
            key: "allGuildIds",
            value: function() {
                return this.guildIds
            }
        }, {
            key: "isMember",
            value: function(e) {
                return this.guildIds.has(e)
            }
        }, {
            key: "handleConnectionOpen",
            value: function(e) {
                this.guildIds = new Set(c(e.guilds.map(function(e) {
                    return e.id
                })).concat(c(e.unavailableGuilds)))
            }
        }, {
            key: "handleCacheLoaded",
            value: function(e) {
                this.guildIds = new Set(e.guilds.map(function(e) {
                    return e.id
                }))
            }
        }, {
            key: "handleCacheLoadedLazy",
            value: function(e) {
                var t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = e.guilds[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = o.value;
                        this.guildIds.add(a.id)
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
        }, {
            key: "handleGuildCreate",
            value: function(e) {
                this.guildIds.add(e.guild.id)
            }
        }, {
            key: "handleGuildDelete",
            value: function(e) {
                !0 !== e.guild.unavailable && this.guildIds.delete(e.guild.id)
            }
        }], u(r.prototype, i), f && u(r, f), _
    }(r.Store);
    t.default = new f
}