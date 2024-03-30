function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l = n("392711"),
        c = n.n(l),
        f = n("898511"),
        d = n("629815"),
        _ = n("621195"),
        E = n("523018"),
        p = n("281767"),
        m = n("656462");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function T(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var S = 0,
        v = 0,
        g = {},
        A = new Set,
        b = new Map,
        N = {},
        R = {},
        C = {},
        P = {};

    function D(e, t) {
        return "".concat(e, ":").concat(t)
    }

    function L(e, t) {
        var n = e[t];
        return null == n && (n = {}, e[t] = n), n
    }

    function M(e) {
        var t, n = null !== (t = g[p.ME]) && void 0 !== t ? t : {},
            r = {};
        c().each(n, function(t, n) {
            t.channelId !== e && (r[n] = t)
        }), g[p.ME] = r
    }

    function U(e) {
        var t;
        return null !== (t = b.get(e)) && void 0 !== t ? t : new Set
    }

    function w(e, t, n) {
        var r, o, i, a, u, s, l = L(g, null != e ? e : p.ME),
            c = l[t],
            f = n(c);
        if (c === f) return [!1, f, c];
        if (null != c) {
            ;
            delete l[t], null != c.channelId && (delete L(N, c.channelId)[t], delete L(R, c.channelId)[t]), null != c.sessionId && delete L(C, t)[c.sessionId], r = null != e ? e : p.ME, o = t, !(i = U(r)).has(o) || ((i = new Set(i)).delete(o), 0 === i.size ? b.delete(r) : b.set(r, i))
        }
        if (null != f) {
            if (l[t] = f, null != f.channelId && (L(N, f.channelId)[t] = f, f.selfVideo)) {
                ;
                L(R, f.channelId)[t] = f, a = null != e ? e : p.ME, u = t, (s = U(a)).has(u) || ((s = new Set(s)).add(u), b.set(a, s))
            }
            null != f.sessionId && (L(C, t)[f.sessionId] = f)
        }
        return [!0, f, c]
    }

    function k(e, t) {
        return w(e, t.userId, function(e) {
            if (null == t.channelId) return null;
            var n = {
                channelId: t.channelId,
                deaf: t.deaf,
                mute: t.mute,
                requestToSpeakTimestamp: t.requestToSpeakTimestamp,
                selfDeaf: t.selfDeaf,
                selfMute: t.selfMute,
                selfStream: t.selfStream,
                selfVideo: t.selfVideo,
                sessionId: t.sessionId,
                suppress: t.suppress,
                userId: t.userId
            };
            return null != e ? e.merge(n) : new _.default(n)
        })
    }

    function G(e) {
        var t = e.guild;
        c().forEach(g[t.id], function(e) {
            w(t.id, e.userId, function() {
                return null
            })
        }), delete g[t.id]
    }
    var B = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(l, e);
        var t, n, r, o, i, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), s.apply(this, arguments)
        }
        return r = l, o = [{
            key: "getAllVoiceStates",
            value: function() {
                return g
            }
        }, {
            key: "getVoiceStateVersion",
            value: function() {
                return v
            }
        }, {
            key: "getVoiceStates",
            value: function(e) {
                return L(g, null != e ? e : p.ME)
            }
        }, {
            key: "getVoiceStatesForChannel",
            value: function(e) {
                return L(N, e)
            }
        }, {
            key: "getVideoVoiceStatesForChannel",
            value: function(e) {
                return L(R, e)
            }
        }, {
            key: "getVoiceState",
            value: function(e, t) {
                return this.getVoiceStates(e)[t]
            }
        }, {
            key: "getVoiceStateForChannel",
            value: function(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
                return null === (t = L(N, e)) || void 0 === t ? void 0 : t[n]
            }
        }, {
            key: "getVoiceStateForUser",
            value: function(e) {
                return Object.values(L(C, e))[0]
            }
        }, {
            key: "getVoiceStateForSession",
            value: function(e, t) {
                var n;
                return null != t ? null === (n = L(C, e)) || void 0 === n ? void 0 : n[t] : null
            }
        }, {
            key: "getUserVoiceChannelId",
            value: function(e, t) {
                var n;
                return null === (n = this.getVoiceState(e, t)) || void 0 === n ? void 0 : n.channelId
            }
        }, {
            key: "getCurrentClientVoiceChannelId",
            value: function(e) {
                var t = this.getVoiceState(e, a);
                return null != t && null != u && t.sessionId === u ? t.channelId : null
            }
        }, {
            key: "getUsersWithVideo",
            value: function(e) {
                var t;
                return null !== (t = b.get(e)) && void 0 !== t ? t : A
            }
        }, {
            key: "isCurrentClientInVoiceChannel",
            value: function() {
                var e;
                return null != u && (null === (e = C[a]) || void 0 === e ? void 0 : e[u]) != null
            }
        }, {
            key: "isInChannel",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
                if (null == e) return !1;
                var n = this.getVoiceStateForChannel(e, t);
                return null != n && (t !== a || null != u && n.sessionId === u)
            }
        }, {
            key: "hasVideo",
            value: function(e) {
                return Object.values(L(R, e)).length > 0
            }
        }, {
            key: "getVoicePlatformForChannel",
            value: function(e, t) {
                var n, r, o = null != u && (null === (r = C[a]) || void 0 === r ? void 0 : null === (n = r[u]) || void 0 === n ? void 0 : n.channelId);
                return t === a && e === o ? m.VoicePlatforms.DESKTOP : P[D(t, e)]
            }
        }, {
            key: "userHasBeenMovedVersion",
            get: function() {
                return S
            }
        }], I(r.prototype, o), i && I(r, i), l
    }(f.default.Store);
    i = "VoiceStateStore", (o = "displayName") in(r = B) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new B(d.default, {
        CONNECTION_OPEN: function(e) {
            var t = e.user,
                n = e.sessionId,
                r = null != a && a !== t.id;
            return r && (g = {}, N = {}, C = {}, R = {}, b.clear()), a = t.id, u = n, r
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function() {
            g = {}, N = {}, C = {}, R = {}, b.clear()
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.voiceStates,
                n = e.user,
                r = e.sessionId;
            g = {}, N = {}, C = {}, R = {};
            var o = !0,
                i = !1,
                s = void 0;
            try {
                for (var l, c = Object.entries(t)[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) ! function() {
                    var e = T(l.value, 2),
                        t = e[0],
                        n = e[1],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = Object.entries(n)[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) ! function() {
                            var e = T(a.value, 2),
                                n = e[0],
                                r = e[1];
                            w(t, n, function() {
                                return new _.default(r)
                            })
                        }()
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }()
            } catch (e) {
                i = !0, s = e
            } finally {
                try {
                    !o && null != c.return && c.return()
                } finally {
                    if (i) throw s
                }
            }
            a = n.id, u = r
        },
        VOICE_CHANNEL_SELECT: function(e) {
            var t = e.guildId,
                n = e.channelId;
            return T(w(t, a, function(e) {
                return null == e ? void 0 : e.set("channelId", n)
            }), 1)[0]
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                var n = T(k(t.guildId, t), 3),
                    r = n[0],
                    o = n[1],
                    i = n[2];
                return r ? (t.sessionId === u && null != o && null != i && i.channelId !== o.channelId && (S += 1), v++, !0) : e
            }, !1)
        },
        GUILD_DELETE: G,
        GUILD_CREATE: G,
        CHANNEL_DELETE: function(e) {
            M(e.channel.id)
        },
        CALL_DELETE: function(e) {
            M(e.channelId)
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t = !1,
                n = E.default.keys(null !== (u = g[e.guildId]) && void 0 !== u ? u : {}),
                r = new Set(n),
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s, l, c = (null !== (s = e.voiceStates) && void 0 !== s ? s : [])[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) {
                    var f = l.value,
                        d = T(k(e.guildId, f), 1)[0];
                    t = t || d, r.delete(f.userId)
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != c.return && c.return()
                } finally {
                    if (i) throw a
                }
            }
            var _ = !0,
                p = !1,
                m = void 0;
            try {
                for (var y, I = r[Symbol.iterator](); !(_ = (y = I.next()).done); _ = !0) {
                    var h = y.value;
                    w(e.guildId, h, function() {
                        return null
                    }), t = !0
                }
            } catch (e) {
                p = !0, m = e
            } finally {
                try {
                    !_ && null != I.return && I.return()
                } finally {
                    if (p) throw m
                }
            }
            return t && v++, t
        },
        RTC_CONNECTION_PLATFORM: function(e) {
            var t = e.userId,
                n = e.channelId,
                r = e.platform;
            P[D(t, n)] = r
        }
    })
}