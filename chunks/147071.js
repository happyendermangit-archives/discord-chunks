function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("569492"),
        l = n("935741"),
        c = n("523018");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function p(e, t) {
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

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = {},
        I = new Set;

    function h(e) {
        return {
            id: e.id,
            parentId: e.parent_id
        }
    }

    function O(e) {
        e in y && delete y[e]
    }

    function T(e) {
        null != e.threads && e.threads.length > 0 && (y[e.id] = {}, e.threads.filter(function(e) {
            return s.ALL_CHANNEL_TYPES.has(e.type)
        }).forEach(function(t) {
            return S(e.id, t)
        })), e.hasThreadsSubscription && I.add(e.id)
    }

    function S(e, t) {
        var n = y[e],
            r = t.parent_id;
        !(r in n) && (n[r] = {}), y[e][r][t.id] = h(t)
    }

    function v(e) {
        var t = e.channel;
        if (!s.ALL_CHANNEL_TYPES.has(t.type)) return !1;
        if ((null === (n = t.threadMetadata) || void 0 === n ? void 0 : n.archived) === !0) return g(t);
        var n, r, o = null !== (r = y[t.guild_id]) && void 0 !== r ? r : {};
        y[t.guild_id] = p(E({}, o), d({}, t.parent_id, p(E({}, o[t.parent_id]), d({}, t.id, h(t)))))
    }

    function g(e) {
        var t = e.guild_id,
            n = e.parent_id,
            r = e.id;
        if (null == t || null == n || !(t in y) || !(n in y[t]) || !(r in y[t][n])) return !1;
        y[t] = p(E({}, y[t]), d({}, n, E({}, y[t][n]))), delete y[t][n][r], i().isEmpty(y[t][n]) && delete y[t][n]
    }
    var A = {},
        b = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
            }(s, e);
            var t, n, r, o, a, u = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = _(t);
                if (n) {
                    var a = _(this).constructor;
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
            return r = s, o = [{
                key: "initialize",
                value: function() {
                    this.waitFor(l.default)
                }
            }, {
                key: "isActive",
                value: function(e, t, n) {
                    return null != e && null != this.getThreadsForParent(e, t)[n]
                }
            }, {
                key: "getThreadsForGuild",
                value: function(e) {
                    var t;
                    return null !== (t = y[e]) && void 0 !== t ? t : A
                }
            }, {
                key: "getThreadsForParent",
                value: function(e, t) {
                    var n;
                    return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : A
                }
            }, {
                key: "hasThreadsForChannel",
                value: function(e, t) {
                    return !i().isEmpty(this.getThreadsForParent(e, t))
                }
            }, {
                key: "forEachGuild",
                value: function(e) {
                    c.default.keys(y).forEach(function(t) {
                        e(t, y[t])
                    })
                }
            }, {
                key: "hasLoaded",
                value: function(e) {
                    return I.has(e)
                }
            }], f(r.prototype, o), a && f(r, a), s
        }(a.default.Store);
    d(b, "displayName", "ActiveThreadsStore"), t.default = new b(u.default, {
        CONNECTION_OPEN: function(e) {
            y = {}, I.clear(), e.guilds.forEach(function(e) {
                T(e)
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.channels;
            y = {}, i()(t).filter(function(e) {
                return s.THREAD_CHANNEL_TYPES.has(e.type)
            }).groupBy("guild_id").forEach(function(e, t) {
                y[t] = {}, e.forEach(function(e) {
                    return S(t, e)
                })
            })
        },
        GUILD_CREATE: function(e) {
            var t = e.guild;
            O(t.id), T(t)
        },
        GUILD_DELETE: function(e) {
            O(e.guild.id)
        },
        THREAD_CREATE: v,
        THREAD_UPDATE: v,
        THREAD_LIST_SYNC: function(e) {
            var t = e.guildId,
                n = e.threads;
            for (var r in null == e.channelIds && I.add(t), y[t] = E({}, y[t]), y[t]) y[t][r] = E({}, y[t][r]);
            n.forEach(function(e) {
                return S(t, e)
            })
        },
        THREAD_DELETE: function(e) {
            return g(e.channel)
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            if (null == t.guild_id || !(t.guild_id in y)) return !1;
            y[t.guild_id] = E({}, y[t.guild_id]), delete y[t.guild_id][t.id]
        }
    })
}