function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("281767"),
        u = n("439386");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = null,
        _ = null,
        E = {};

    function p(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = E[e];
        if (null != r) {
            var o = r[null != t ? t : a.NULL_STRING_GUILD_ID];
            if (null != o) {
                var i = !0,
                    s = !1,
                    l = void 0;
                try {
                    for (var c, f = Object.values(u.MediaEngineContextTypes)[Symbol.iterator](); !(i = (c = f.next()).done); i = !0) {
                        var d = c.value;
                        (n === d || null == n) && delete o[d]
                    }
                } catch (e) {
                    s = !0, l = e
                } finally {
                    try {
                        !i && null != f.return && f.return()
                    } finally {
                        if (s) throw l
                    }
                }
                E[e][null != t ? t : a.NULL_STRING_GUILD_ID] = o
            }
        }
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(d, e);
        var t, n, r, o, i, l = (t = d, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function d() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), l.apply(this, arguments)
        }
        return r = d, o = [{
            key: "getStreamId",
            value: function(e, t) {
                var n, r, o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.MediaEngineContextTypes.DEFAULT;
                return null === (o = E[e]) || void 0 === o ? void 0 : null === (r = o[null != t ? t : a.NULL_STRING_GUILD_ID]) || void 0 === r ? void 0 : null === (n = r[i]) || void 0 === n ? void 0 : n.streamId
            }
        }, {
            key: "getUserStreamData",
            value: function(e, t) {
                var n, r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.MediaEngineContextTypes.DEFAULT;
                return null === (r = E[e]) || void 0 === r ? void 0 : null === (n = r[null != t ? t : a.NULL_STRING_GUILD_ID]) || void 0 === n ? void 0 : n[o]
            }
        }], s(r.prototype, o), i && s(r, i), d
    }(o.default.Store);
    l(m, "displayName", "VideoStreamStore"), t.default = new m(i.default, {
        CONNECTION_OPEN: function(e) {
            var t = e.user,
                n = e.sessionId;
            d = t.id, _ = n
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.user,
                n = e.sessionId;
            d = t.id, _ = n
        },
        RTC_CONNECTION_VIDEO: function(e) {
            var t, n, r, o, i, u, s, c, f = e.userId,
                d = e.guildId,
                _ = e.streamId,
                m = e.context;
            if (null != _) {
                ;
                t = f, n = d, r = _, o = m, t in E || (E[t] = {}), u = null !== (i = E[t][null != n ? n : a.NULL_STRING_GUILD_ID]) && void 0 !== i ? i : {}, E[t][null != n ? n : a.NULL_STRING_GUILD_ID] = (s = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            l(e, t, n[t])
                        })
                    }
                    return e
                }({}, u), c = null != (c = l({}, o, {
                    streamId: r
                })) ? c : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(c)).forEach(function(e) {
                    Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e))
                }), s)
            } else p(f, d, m)
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                var n, r = t.userId,
                    o = t.sessionId,
                    i = t.channelId,
                    u = t.guildId;
                if (null == i && r === d) {
                    if (o !== _) return e;
                    E = {}
                } else {
                    if (null != i || (null === (n = E[r]) || void 0 === n ? void 0 : n[null != u ? u : a.NULL_STRING_GUILD_ID]) == null) return e;
                    p(r, u)
                }
                return !0
            }, !1)
        }
    })
}