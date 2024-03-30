function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("607446"),
        c = n("652709"),
        f = n("217014"),
        d = n("935741"),
        _ = n("29604"),
        E = n("306912"),
        p = n("281767");

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = null,
        O = {},
        T = null;

    function S() {
        return {
            _categories: [],
            null: []
        }
    }
    var v = S();

    function g(e, t) {
        e.index = t
    }

    function A(e) {
        var t = _.default.getChannels(e),
            n = S(),
            r = function(e) {
                var t, r = e.channel;
                (null !== (t = n[null != r.parent_id ? r.parent_id : "null"]) && void 0 !== t ? t : n.null).push({
                    channel: r,
                    index: -1
                })
            };
        return t[p.ChannelTypes.GUILD_CATEGORY].forEach(function(e) {
            var t = e.channel;
            n._categories.push({
                channel: t,
                index: -1
            }), n[t.id] = []
        }), t[0, _.GUILD_SELECTABLE_CHANNELS_KEY].forEach(r), t[0, _.GUILD_VOCAL_CHANNELS_KEY].forEach(r), (0, l.default)(n._categories, n).forEach(g), O[e] = n, n
    }

    function b() {
        O = {}, null != h && A(h)
    }

    function N(e) {
        var t = e.guild.id;
        O[t] = void 0, h === t && A(t)
    }

    function R(e) {
        var t = e.channel.guild_id;
        if (null == t) return !1;
        O[t] = void 0, h === t && A(t)
    }

    function C(e) {
        var t = e.guildId;
        O[t] = void 0, t === h && A(t)
    }

    function P(e, t) {
        if (T = t, null == e || null == e.getGuildId()) return !1;
        var n = e.getGuildId();
        return null != n && (O[n] = void 0, n === h && A(n), !0)
    }

    function D() {
        A(p.FAVORITES)
    }
    var L = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
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
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
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
                this.waitFor(_.default, E.default, f.default, d.default, c.default), this.syncWith([c.default], D)
            }
        }, {
            key: "getCategories",
            value: function(e) {
                var t, n;
                return null != e ? null != (n = O[t = e]) ? n : A(t) : v
            }
        }], m(r.prototype, o), i && m(r, i), u
    }(u.default.Store);
    i = "GuildCategoryStore", (o = "displayName") in(r = L) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new L(s.default, {
        CHANNEL_SELECT: function(e) {
            var t = e.guildId;
            if (h = null != t ? t : null, null == t || null != O[t]) return !1;
            A(t)
        },
        CONNECTION_OPEN: b,
        OVERLAY_INITIALIZE: b,
        CACHE_LOADED_LAZY: b,
        GUILD_CREATE: N,
        GUILD_UPDATE: N,
        GUILD_DELETE: function(e) {
            var t = e.guild.id;
            delete O[t]
        },
        CHANNEL_CREATE: R,
        CHANNEL_DELETE: R,
        CHANNEL_UPDATES: function(e) {
            var t = e.channels,
                n = !1,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value.guild_id;
                    null != s && (O[s] = void 0, n = !0, h === s && A(s))
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
            return n
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t = e.guildId,
                n = e.user;
            if (f.default.getId() !== n.id) return !1;
            O[t] = void 0, t === h && A(t)
        },
        CURRENT_USER_UPDATE: function() {
            if (null == h) return !1;
            A(h)
        },
        GUILD_ROLE_CREATE: C,
        GUILD_ROLE_UPDATE: C,
        GUILD_ROLE_DELETE: C,
        IMPERSONATE_UPDATE: C,
        IMPERSONATE_STOP: C,
        VOICE_CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            return null == t && null != T ? P(d.default.getChannel(T), null) : P(d.default.getChannel(t), t)
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                var n = t.channelId,
                    r = t.sessionId;
                return f.default.getSessionId() !== r ? e : P(d.default.getChannel(n), n) || e
            }, !1)
        }
    })
}