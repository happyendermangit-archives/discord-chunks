function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("359017"),
        c = n("935741"),
        f = n("335911"),
        d = n("545072"),
        _ = n("894288"),
        E = n("281767"),
        p = n("439386");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = new Map,
        T = null,
        S = null,
        v = null;

    function g(e, t) {
        var n = O.get(e);
        if (null == n) return !1;
        var r = n.delete(t);
        return 0 === n.size && O.delete(e), r
    }

    function A(e, t, n) {
        var r, o, i;
        return ((null !== (i = null === (o = O.get(e)) || void 0 === o ? void 0 : null === (r = o.get(t)) || void 0 === r ? void 0 : r.flags) && void 0 !== i ? i : p.SpeakingFlags.NONE) & n) === n
    }

    function b(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = O.get(e);
        if (null == r) return !1;
        var o = !0,
            i = !1,
            a = void 0;
        try {
            for (var u, s = r[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                var l, c, f = (l = u.value, c = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(l) || function(e, t) {
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
                    }(l, c) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return m(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                        }
                    }(l, c) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    d = f[0],
                    _ = f[1].flags;
                if ((!n || d !== T) && (_ & t) === t) return !0
            }
        } catch (e) {
            i = !0, a = e
        } finally {
            try {
                !o && null != s.return && s.return()
            } finally {
                if (i) throw a
            }
        }
        return !1
    }

    function N(e) {
        var t = e.user,
            n = e.sessionId;
        T = t.id, S = n, v = null
    }
    var R = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
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

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.mustEmitChanges(function(e) {
                    return "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type
                }), this.waitFor(d.default)
            }
        }, {
            key: "getSpeakingDuration",
            value: function(e, t) {
                var n, r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.MediaEngineContextTypes.DEFAULT,
                    i = null === (r = O.get(o)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.since;
                return null != i ? t - i : 0
            }
        }, {
            key: "getSpeakers",
            value: function() {
                var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.MediaEngineContextTypes.DEFAULT;
                return Array.from(null !== (t = null === (e = O.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(function(e) {
                    return A(n, e, p.SpeakingFlags.VOICE)
                })
            }
        }, {
            key: "isSpeaking",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.MediaEngineContextTypes.DEFAULT;
                return A(t, e, p.SpeakingFlags.VOICE)
            }
        }, {
            key: "isPrioritySpeaker",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.MediaEngineContextTypes.DEFAULT;
                return A(t, e, p.SpeakingFlags.PRIORITY)
            }
        }, {
            key: "isSoundSharing",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.MediaEngineContextTypes.DEFAULT;
                return A(t, e, p.SpeakingFlags.SOUNDSHARE)
            }
        }, {
            key: "isAnyoneElseSpeaking",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.MediaEngineContextTypes.DEFAULT;
                return b(e, p.SpeakingFlags.VOICE, !0)
            }
        }, {
            key: "isCurrentUserSpeaking",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.MediaEngineContextTypes.DEFAULT;
                return null != T && this.isSpeaking(T, e)
            }
        }, {
            key: "isAnyonePrioritySpeaking",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.MediaEngineContextTypes.DEFAULT;
                return b(e, p.SpeakingFlags.VOICE | p.SpeakingFlags.PRIORITY)
            }
        }, {
            key: "isCurrentUserPrioritySpeaking",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.MediaEngineContextTypes.DEFAULT;
                return null != T && this.isPrioritySpeaker(T, e) && this.isSpeaking(T, e)
            }
        }], y(r.prototype, o), i && y(r, i), u
    }(u.default.Store);
    i = "SpeakingStore", (o = "displayName") in(r = R) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new R(s.default, {
        CONNECTION_OPEN: N,
        OVERLAY_INITIALIZE: N,
        SPEAKING: function(e) {
            var t = e.context,
                n = e.userId,
                r = e.speakingFlags;
            if ((r & p.SpeakingFlags.PRIORITY) === p.SpeakingFlags.PRIORITY) {
                var o = c.default.getChannel(_.default.getVoiceChannelId());
                null != o && l.can({
                    permission: E.Permissions.PRIORITY_SPEAKER,
                    user: n,
                    context: o
                }) ? f.default.setCanHavePriority(n, !0) : (f.default.setCanHavePriority(n, !1), r &= ~p.SpeakingFlags.PRIORITY)
            }
            return function(e, t, n) {
                var r = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.MediaEngineContextTypes.DEFAULT,
                            t = O.get(e);
                        return null == t && (t = new Map, O.set(e, t)), t
                    }(e),
                    o = r.get(t),
                    i = null !== (a = null == o ? void 0 : o.flags) && void 0 !== a ? a : 0;
                if (0 === i && 0 === n) return !1;
                if (0 === n) r.delete(t), 0 === r.size && O.delete(e);
                else {
                    var a, u, s = null !== (u = null == o ? void 0 : o.since) && void 0 !== u ? u : null,
                        l = (i & p.SpeakingFlags.VOICE) === p.SpeakingFlags.VOICE,
                        c = (n & p.SpeakingFlags.VOICE) === p.SpeakingFlags.VOICE;
                    l !== c && (s = c ? Date.now() : null), r.set(t, {
                        flags: n,
                        since: s
                    })
                }
                return !0
            }(t, n, r)
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                var n = t.userId,
                    r = t.channelId,
                    o = t.sessionId,
                    i = !1,
                    a = v;
                return n === T && o === S && (v = null != r ? r : null), a !== v && (i = O.delete(p.MediaEngineContextTypes.DEFAULT) || i), null == r ? i = n === T && o === S ? O.delete(p.MediaEngineContextTypes.DEFAULT) || i : g(p.MediaEngineContextTypes.DEFAULT, n) || i : n === T && o !== S ? i = O.delete(p.MediaEngineContextTypes.DEFAULT) || i : n !== T && r !== d.default.getChannelId() && (i = g(p.MediaEngineContextTypes.DEFAULT, n) || i), i || e
            }, !1)
        },
        LOBBY_VOICE_STATE_UPDATE: function(e) {}
    })
}