function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("935741"),
        o = n("382199"),
        i = n("894288"),
        a = n("837133"),
        u = n("960468"),
        s = n("363442"),
        l = n("577969"),
        c = n("892548"),
        f = n("447422"),
        d = n("991591"),
        _ = n("941455");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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

    function h(e) {
        return function(e) {
            if (Array.isArray(e)) return E(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var O = null,
        T = new s.ExtendedMemoryLru(750, 500),
        S = new l.Lru(15),
        v = !1,
        g = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && I(e, t)
            }(g, e);
            var t, n, a, _, E, m = (t = g, n = function() {
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

            function g() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, g), e = m.call(this, {
                    CACHE_LOADED_LAZY_NO_CACHE: U,
                    CACHE_LOADED_LAZY: function() {
                        return e.loadCache()
                    },
                    CHANNEL_DELETE: C,
                    CHANNEL_UPDATES: R,
                    CONNECTION_OPEN_SUPPLEMENTAL: b,
                    GUILD_DELETE: L,
                    LOGIN_SUCCESS: M,
                    THREAD_DELETE: D,
                    THREAD_UPDATE: P
                })
            }
            return a = g, _ = [{
                key: "initialize",
                value: function() {
                    this.waitFor(r.default), this.waitFor(i.default), this.waitFor(o.default), this.syncWith([u.default], function() {
                        return !0
                    }), this.syncWith([i.default], A)
                }
            }, {
                key: "loadCache",
                value: function() {
                    var e = this.readSnapshot(g.LATEST_SNAPSHOT_VERSION);
                    null != e && (v = !0, g.mergeSnapshot(e))
                }
            }, {
                key: "canEvictOrphans",
                value: function() {
                    return v
                }
            }, {
                key: "saveLimit",
                value: function(e) {
                    var t = r.default.getBasicChannel(e);
                    return null != t && (0, f.isPrivateChannel)(t) || null != t && T.has(e) ? 25 : 1
                }
            }, {
                key: "getSaveableChannels",
                value: function() {
                    var e = r.default.getChannelIds(null).map(function(e) {
                        return {
                            guildId: null,
                            channelId: e
                        }
                    });
                    return u.default.isLowDisk ? null != O ? h(e).concat([O]) : e : h(e).concat(h(T.values()))
                }
            }, {
                key: "takeSnapshot",
                value: function() {
                    return {
                        version: g.LATEST_SNAPSHOT_VERSION,
                        data: {
                            channels: h(T.allValues()).filter(function(e) {
                                return !e.fallback
                            }),
                            penalized: h(S.keys()),
                            lastChannel: O
                        }
                    }
                }
            }], E = [{
                key: "mergeSnapshot",
                value: function(e) {
                    var t = T,
                        n = S;
                    T = new s.ExtendedMemoryLru(T.primaryCapacity, T.extendedCapacity), S = new l.Lru(S.capacity), O = null != O ? O : e.lastChannel;
                    for (var r = 0, o = [e.channels, t.values()]; r < o.length; r++) {
                        var i = o[r],
                            a = !0,
                            u = !1,
                            c = void 0;
                        try {
                            for (var f, d = i[Symbol.iterator](); !(a = (f = d.next()).done); a = !0) {
                                var _ = f.value;
                                !_.fallback && T.put(_.channelId, _)
                            }
                        } catch (e) {
                            u = !0, c = e
                        } finally {
                            try {
                                !a && null != d.return && d.return()
                            } finally {
                                if (u) throw c
                            }
                        }
                    }
                    for (var E = 0, p = [e.penalized, n.keys()]; E < p.length; E++) {
                        var m = p[E],
                            y = !0,
                            I = !1,
                            h = void 0;
                        try {
                            for (var v, g = m[Symbol.iterator](); !(y = (v = g.next()).done); y = !0) {
                                var A = v.value;
                                S.put(A, null)
                            }
                        } catch (e) {
                            I = !0, h = e
                        } finally {
                            try {
                                !y && null != g.return && g.return()
                            } finally {
                                if (I) throw h
                            }
                        }
                    }
                }
            }, {
                key: "recordChannel",
                value: function(e) {
                    var t = r.default.getBasicChannel(e);
                    if (null != t && (0, d.isReadableChannel)(t)) {
                        var n, o = {
                            guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                            channelId: e,
                            channelType: t.type
                        };
                        O = o, T.put(e, o), (0, c.isLimitedChannel)(t) && null != S.put(e, null) && T.delete(e)
                    }
                }
            }, {
                key: "deleteChannel",
                value: function(e) {
                    T.delete(e)
                }
            }, {
                key: "deleteGuild",
                value: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = T.allValues()[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value;
                            a.guildId === e && T.delete(a.channelId)
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
                key: "dropUnreachableChannels",
                value: function() {
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var o, i = T.keys()[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
                            var a = o.value,
                                u = r.default.getBasicChannel(a);
                            !(0, d.isReadableChannel)(u) && g.deleteChannel(a)
                        }
                    } catch (e) {
                        t = !0, n = e
                    } finally {
                        try {
                            !e && null != i.return && i.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                }
            }, {
                key: "deleteUnreadableGuildChannels",
                value: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = T.values()[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            var a = o.value;
                            e === a.guildId && !(0, d.isReadableChannelId)(a.channelId) && g.deleteChannel(a.channelId)
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
                key: "replaceLru",
                value: function(e) {
                    T = e
                }
            }], _ && p(a.prototype, _), E && p(a, E), g
        }(a.default);

    function A() {
        var e = i.default.getChannelId();
        null != e && g.recordChannel(e)
    }

    function b() {
        g.dropUnreachableChannels(), g.replaceLru((0, _.withFallbacks)(T, 1250))
    }

    function N(e) {
        var t = e.id,
            n = (0, d.isReadableChannel)(e),
            r = i.default.getChannelId();
        n && t === r && g.recordChannel(t), !n && g.deleteChannel(t)
    }

    function R(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = e.channels[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = o.value;
                N(a)
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

    function C(e) {
        g.deleteChannel(e.channel.id)
    }

    function P(e) {
        N(e.channel)
    }

    function D(e) {
        g.deleteChannel(e.channel.id)
    }

    function L(e) {
        return !e.guild.unavailable && (g.deleteGuild(e.guild.id), !0)
    }

    function M(e) {
        T.clear(), S.clear(), v = !1
    }

    function U(e) {
        v = !0
    }
    m(g, "displayName", "SaveableChannelsStore"), m(g, "LATEST_SNAPSHOT_VERSION", 1), t.default = new g
}