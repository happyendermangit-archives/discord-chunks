function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("35523"),
        d = n("306912");

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = new f.default("GuildAvailabilityStore"),
        y = new Set;

    function I(e) {
        y = new Set(e.unavailableGuilds), e.unavailableGuilds.length > 0 && m.warn("".concat(e.unavailableGuilds.length, " guilds are unavailable on connection open: ").concat(e.unavailableGuilds))
    }

    function h(e) {
        if (!y.has(e.guild.id)) return !1;
        y.delete(e.guild.id), m.info("Guild has become available: ".concat(e.guild.id))
    }
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
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
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
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
                this.waitFor(d.default)
            }
        }, {
            key: "isUnavailable",
            value: function(e) {
                return null != e && y.has(e)
            }
        }, {
            key: "totalGuilds",
            get: function() {
                return s().size(d.default.getGuilds()) + y.size
            }
        }, {
            key: "totalUnavailableGuilds",
            get: function() {
                return y.size
            }
        }, {
            key: "unavailableGuilds",
            get: function() {
                return Array.from(y)
            }
        }], _(r.prototype, o), i && _(r, i), u
    }(l.default.Store);
    i = "GuildAvailabilityStore", (o = "displayName") in(r = O) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new O(c.default, {
        CONNECTION_OPEN: I,
        OVERLAY_INITIALIZE: I,
        GUILD_UNAVAILABLE: function(e) {
            if (y.has(e.guildId)) return !1;
            var t = d.default.getGuild(e.guildId),
                n = "???";
            null != t && null != t.name && (n = t.name), m.warn("Guild has gone unavailable: ".concat(e.guildId, " (").concat(n, ")")), y.add(e.guildId)
        },
        GUILD_DELETE: function(e) {
            !0 !== e.guild.unavailable && y.delete(e.guild.id)
        },
        GUILD_CREATE: h,
        GUILD_UPDATE: h,
        GUILD_GEO_RESTRICTED: function(e) {
            if (!y.has(e.guildId)) return !1;
            y.delete(e.guildId)
        }
    })
}