function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("160600"),
        a = n("14782"),
        u = n("242880"),
        s = n("807471"),
        l = n("653211"),
        c = n("254061"),
        f = n("452700"),
        d = n("217014"),
        _ = n("335911"),
        E = n("523018"),
        p = n("238022"),
        m = n("679203"),
        y = n("413087"),
        I = n("968574"),
        h = n("439386");

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function T(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function A(e, t) {
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
                if ("string" == typeof e) return O(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var b = function(e) {
            return "AudioContextSettingsMigrated:".concat(e)
        },
        N = function(e) {
            return e === h.MediaEngineContextTypes.STREAM ? i.AudioSettingsDefaultVolumes.STREAM : i.AudioSettingsDefaultVolumes.USER
        };

    function R() {
        (0, p.shouldReadWriteAudioSettings)() && (u.Storage.get(b(d.default.getId())) || I.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", function(e) {
            var t = !1,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = Object.entries(_.default.getState().settingsByContext)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var s = A(i.value, 2),
                        l = s[0],
                        c = s[1],
                        f = (0, y.coerceAudioContextForProto)(l);
                    if (null != f) {
                        var E = e[f],
                            p = String(Date.now()),
                            m = {},
                            I = !0,
                            h = !1,
                            O = void 0;
                        try {
                            for (var T, v = Object.entries(c.localMutes)[Symbol.iterator](); !(I = (T = v.next()).done); I = !0) {
                                var g = A(T.value, 2),
                                    R = g[0],
                                    C = g[1];
                                m[R] = {
                                    muted: C,
                                    volume: N(l),
                                    modifiedAt: p,
                                    soundboardMuted: !1
                                }
                            }
                        } catch (e) {
                            h = !0, O = e
                        } finally {
                            try {
                                !I && null != v.return && v.return()
                            } finally {
                                if (h) throw O
                            }
                        }
                        var P = !0,
                            D = !1,
                            L = void 0;
                        try {
                            for (var M, U = Object.entries(c.localVolumes)[Symbol.iterator](); !(P = (M = U.next()).done); P = !0) {
                                var w = A(M.value, 2),
                                    k = w[0],
                                    G = w[1];
                                m[k] = function(e, t) {
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
                                }(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))), r.forEach(function(t) {
                                            S(e, t, n[t])
                                        })
                                    }
                                    return e
                                }({
                                    muted: !1,
                                    modifiedAt: p
                                }, m[k]), {
                                    volume: (0, y.snapVolumeToDefault)(G, l)
                                })
                            }
                        } catch (e) {
                            D = !0, L = e
                        } finally {
                            try {
                                !P && null != U.return && U.return()
                            } finally {
                                if (D) throw L
                            }
                        }
                        var B = Object.keys(E).length,
                            j = !0,
                            F = !1,
                            V = void 0;
                        try {
                            for (var H, x = Object.entries(m).entries()[Symbol.iterator](); !(j = (H = x.next()).done); j = !0) {
                                var Y = A(H.value, 2),
                                    W = Y[0],
                                    K = A(Y[1], 2),
                                    z = K[0],
                                    X = K[1];
                                if (300 - B - (W + 1) <= 0) break;
                                null == E[z] && (t = !0, E[z] = X)
                            }
                        } catch (e) {
                            F = !0, V = e
                        } finally {
                            try {
                                !j && null != x.return && x.return()
                            } finally {
                                if (F) throw V
                            }
                        }
                    }
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
            return u.Storage.set(b(d.default.getId()), !0), t
        }, I.UserSettingsDelay.AUTOMATED))
    }
    var C = o().debounce(function() {
            D()
        }, 2e3),
        P = o().debounce(l.remoteAudioSettingsUpdate, 500, {
            maxWait: 500
        });

    function D() {
        I.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", function(e) {
            var t = !1;
            return (0, m.drainPendingAudioSettings)(function(n, r, o) {
                var i = function(e, t, n, r) {
                    var o, i, u, s, l, c = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        f = (0, y.coerceAudioContextForProto)(n);
                    if (null == f) return !1;
                    var d = e[f];
                    if (d[t] = null !== (l = d[t]) && void 0 !== l ? l : (o = n, a.AudioContextSetting.create({
                            muted: !1,
                            volume: N(o)
                        })), r(d[t]), d[t].modifiedAt = String(Date.now()), c) {
                        ;
                        i = d, u = t, s = n, i[u].volume !== N(s) || i[u].muted || i[u].soundboardMuted || delete i[u]
                    }
                    return ! function(e) {
                        var t = E.default.entries(e),
                            n = t.length;
                        if (!(n <= 300)) {
                            for (var r = t.sort(function(e, t) {
                                    var n = A(e, 2),
                                        r = (n[0], n[1]).modifiedAt,
                                        o = A(t, 2),
                                        i = (o[0], o[1]).modifiedAt;
                                    return Number(r) - Number(i)
                                }), o = n - 300, i = 0; i < o; i++) {
                                var a = A(r[i], 1)[0];
                                delete e[a]
                            }
                        }
                    }(d), !0
                }(e, r, n, function(e) {
                    Object.assign(e, o)
                });
                t = t || i
            }), t
        }, I.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function L(e) {
        var t = e.context,
            n = e.userId,
            r = e.volume;
        if (n !== d.default.getId()) {
            if ((0, p.shouldReadWriteAudioSettings)()) {
                var o, i, a, u = c.default.getRemoteSessionId();
                null != u && P(u, n, t, {
                    muted: _.default.isLocalMute(n, t),
                    volume: r
                }), o = t, i = n, a = r, (0, m.updatePendingSettings)(o, i, {
                    volume: a
                }), C()
            }
        }
    }

    function M(e) {
        var t, n, r, o = e.context,
            i = e.userId;
        if (i !== d.default.getId()) {
            if ((0, p.shouldReadWriteAudioSettings)()) {
                ;
                t = o, n = i, r = _.default.isLocalMute(i, o), (0, m.updatePendingSettings)(t, n, {
                    muted: r
                }), C.cancel(), D()
            }
        }
    }

    function U(e) {
        var t, n, r, o = e.context,
            i = e.userId;
        if (i !== d.default.getId()) {
            if ((0, p.shouldReadWriteAudioSettings)()) {
                ;
                t = o, n = i, r = f.default.isLocalSoundboardMuted(i), (0, m.updatePendingSettings)(t, n, {
                    soundboardMuted: r
                }), C.cancel(), D()
            }
        }
    }
    var w = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = v(t);
            if (n) {
                var a = v(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : T(e)
        });

        function o() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = r.apply(this, arguments), S(T(e), "actions", {
                POST_CONNECTION_OPEN: R,
                AUDIO_SET_LOCAL_VOLUME: L,
                AUDIO_TOGGLE_LOCAL_MUTE: M,
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: U
            }), e
        }
        return o
    }(s.default);
    t.default = new w
}