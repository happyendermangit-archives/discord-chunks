function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_STORED_MESSAGES: function() {
            return y
        }
    });
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("935741");
    n("63116");
    var d = n("523018"),
        _ = n("928204");

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
    var y = 26,
        I = {},
        h = {},
        O = {},
        T = {};

    function S(e) {
        var t = h[e];
        if (null != t) {
            var n = d.default.fromTimestamp(Date.now() - 9e5),
                r = s().findIndex(t, function(e) {
                    return d.default.compare(e.id, n) > 0
                });
            if (-1 === r) h[e] = [];
            else {
                var o = Math.max(r, t.length - y);
                h[e] = s().slice(t, o)
            }
            O[e] = Date.now()
        }
    }

    function v(e, t, n, r) {
        I[e].add(t);
        var o = O[t];
        (null == o || o + 3e5 > Date.now()) && S(t), null == h[t] && (h[t] = []), h[t].push({
            id: n,
            userId: r
        })
    }

    function g(e) {
        var t = e.channel;
        delete h[t.id], delete O[t.id]
    }
    var A = function(e) {
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
            key: "getActiveChannelsFetchStatus",
            value: function(e) {
                return T[e]
            }
        }, {
            key: "getActiveChannelIds",
            value: function(e) {
                return I[e]
            }
        }, {
            key: "getChannelMessageData",
            value: function(e) {
                return h[e]
            }
        }, {
            key: "shouldFetch",
            value: function(e) {
                var t;
                return null == I[e] && !(null === (t = T[e]) || void 0 === t ? void 0 : t.loading)
            }
        }], E(r.prototype, o), i && E(r, i), u
    }(l.default.Store);
    i = "ActiveChannelsStore", (o = "displayName") in(r = A) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new A(c.default, {
        CHANNEL_SELECT: function(e) {
            var t = e.channelId,
                n = e.guildId;
            if (!(0, _.isGuildHomeChannel)(t) || null == n) return !1;
            var r = I[n];
            if (null == r) return !1;
            r.forEach(function(e) {
                var t;
                S(e), (null === (t = h[e]) || void 0 === t ? void 0 : t.length) === 0 && delete h[e]
            });
            var o = s().chain(Array.from(r)).filter(function(e) {
                return e in h
            }).sortBy(function(e) {
                var t, n;
                return -(null !== (n = null === (t = h[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0)
            }).value();
            I[n] = new Set(o)
        },
        MESSAGE_CREATE: function(e) {
            var t, n = e.channelId,
                r = e.message,
                o = e.optimistic,
                i = e.isPushNotification;
            if (o || i) return !1;
            var a = f.default.getChannel(n);
            if (null == a) return !1;
            var u = a.guild_id;
            if (null == u || null == I[u]) return !1;
            v(u, n, r.id, null === (t = r.author) || void 0 === t ? void 0 : t.id)
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            delete I[t.id]
        },
        CHANNEL_DELETE: g,
        THREAD_DELETE: g,
        ACTIVE_CHANNELS_FETCH_START: function(e) {
            T[e.guildId] = {
                loading: !0,
                error: null,
                fetchedAt: Date.now()
            }
        },
        ACTIVE_CHANNELS_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.channels;
            T[t] = {
                loading: !1,
                error: null,
                fetchedAt: Date.now()
            }, I[t] = new Set, n.forEach(function(e) {
                var n = e.channel_id;
                e.messages.forEach(function(e) {
                    v(t, n, e.message_id, e.user_id)
                })
            })
        },
        ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
            var t = e.guildId,
                n = e.error;
            T[t] = {
                loading: !1,
                error: n,
                fetchedAt: null
            }
        },
        CONNECTION_OPEN: function() {}
    })
}