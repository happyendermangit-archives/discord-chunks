function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l = n("392711"),
        c = n.n(l),
        f = n("898511"),
        d = n("629815"),
        _ = n("53867"),
        E = n("851285"),
        p = n("208454"),
        m = n("870331"),
        y = n("605855"),
        I = n("523018"),
        h = n("571336"),
        O = n("281767"),
        T = n("382021");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function b(e) {
        return function(e) {
            if (Array.isArray(e)) return S(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || N(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function N(e, t) {
        if (e) {
            if ("string" == typeof e) return S(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
        }
    }(r = u || (u = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
    var R = new Map,
        C = new Map,
        P = new Set,
        D = 0,
        L = 0,
        M = new Set,
        U = new Map,
        w = !1;

    function k(e) {
        var t = e.sound,
            n = R.get(t.guildId),
            r = null == n ? void 0 : n.findIndex(function(e) {
                return e.soundId === t.soundId
            });
        null != n && null != r && -1 !== r ? (n[r] = t, R.set(t.guildId, b(n))) : null != n && (null == n || n.push(t), R.set(t.guildId, b(n)))
    }
    var G = c().debounce(function(e) {
        m.default.track(O.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
            volume: Math.round((0, y.amplitudeToPerceptual)(e))
        }), _.SoundboardSettings.updateSetting({
            volume: e
        })
    }, 1e3);

    function B(e) {
        var t = null !== (a = null == e ? void 0 : null === (i = e.audioContextSettings) || void 0 === i ? void 0 : i.user) && void 0 !== a ? a : {},
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a, u, s = Object.entries(t)[Symbol.iterator](); !(n = (u = s.next()).done); n = !0) {
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
                    }(l, c) || N(l, c) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    d = f[0];
                f[1].soundboardMuted ? P.add(d) : P.delete(d)
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != s.return && s.return()
            } finally {
                if (r) throw o
            }
        }
        var _ = !0,
            E = !1,
            p = void 0;
        try {
            for (var m, y = P.keys()[Symbol.iterator](); !(_ = (m = y.next()).done); _ = !0) {
                var I = m.value;
                null == t[I] && P.delete(I)
            }
        } catch (e) {
            E = !0, p = e
        } finally {
            try {
                !_ && null != y.return && y.return()
            } finally {
                if (E) throw p
            }
        }
    }
    var j = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t)
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
            var e, r, o, i = g(t);
            if (n) {
                var a = g(this).constructor;
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
                this.waitFor(E.default), B(E.default.settings)
            }
        }, {
            key: "getOverlaySerializedState",
            value: function() {
                return {
                    soundboardSounds: Object.fromEntries(R),
                    favoritedSoundIds: Array.from(M),
                    localSoundboardMutes: Array.from(P)
                }
            }
        }, {
            key: "getSounds",
            value: function() {
                return R
            }
        }, {
            key: "getSoundsForGuild",
            value: function(e) {
                return R.get(e)
            }
        }, {
            key: "getSound",
            value: function(e, t) {
                var n;
                return (null !== (n = R.get(e)) && void 0 !== n ? n : []).find(function(e) {
                    return e.soundId === t
                })
            }
        }, {
            key: "getSoundById",
            value: function(e) {
                return Array.from(R.values()).flat().find(function(t) {
                    return t.soundId === e
                })
            }
        }, {
            key: "isFetchingSounds",
            value: function() {
                return 1 === L
            }
        }, {
            key: "isFetchingDefaultSounds",
            value: function() {
                return 1 === D
            }
        }, {
            key: "isFetching",
            value: function() {
                return this.isFetchingSounds() || this.isFetchingDefaultSounds()
            }
        }, {
            key: "shouldFetchDefaultSounds",
            value: function() {
                return 0 === D
            }
        }, {
            key: "hasFetchedDefaultSounds",
            value: function() {
                return 2 === D
            }
        }, {
            key: "isUserPlayingSounds",
            value: function(e) {
                var t = U.get(e);
                return null != t && t > 0
            }
        }, {
            key: "isPlayingSound",
            value: function(e) {
                return null != C.get(e)
            }
        }, {
            key: "isFavoriteSound",
            value: function(e) {
                return M.has(e)
            }
        }, {
            key: "getFavorites",
            value: function() {
                return M
            }
        }, {
            key: "isLocalSoundboardMuted",
            value: function(e) {
                return P.has(e)
            }
        }, {
            key: "hasHadOtherUserPlaySoundInSession",
            value: function() {
                return w
            }
        }, {
            key: "hasFetchedAllSounds",
            value: function() {
                return 2 === L && 2 === D
            }
        }], v(r.prototype, o), i && v(r, i), u
    }(f.default.Store);
    a = "SoundboardStore", (i = "displayName") in(o = j) ? Object.defineProperty(o, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[i] = a, t.default = new j(d.default, {
        LOGOUT: function() {
            R.clear(), C.clear(), U.clear(), w = !1, L = 0, D = 0
        },
        GUILD_SOUNDBOARD_FETCH: function() {
            L = 1
        },
        GUILD_SOUNDBOARD_SOUND_CREATE: k,
        GUILD_SOUNDBOARD_SOUND_UPDATE: k,
        GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
            var t = e.soundId,
                n = e.guildId,
                r = R.get(n),
                o = null == r ? void 0 : r.findIndex(function(e) {
                    return e.soundId === t
                });
            null != r && null != o && !(o < 0) && (r.splice(o, 1), R.set(n, b(r)))
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
            var t, n, r, o = e.soundId,
                i = e.userId,
                a = (null !== (n = C.get(o)) && void 0 !== n ? n : 0) + 1,
                u = (null !== (r = U.get(i)) && void 0 !== r ? r : 0) + 1;
            C.set(o, a), U.set(i, u), i !== (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (w = !0)
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
            var t, n, r = e.soundId,
                o = e.userId,
                i = (null !== (t = C.get(r)) && void 0 !== t ? t : 0) - 1,
                a = (null !== (n = U.get(o)) && void 0 !== n ? n : 0) - 1;
            i <= 0 ? C.delete(r) : C.set(r, i), a <= 0 ? U.delete(o) : U.set(o, a)
        },
        USER_SOUNDBOARD_SET_VOLUME: function(e) {
            G(e.volume)
        },
        VOICE_CHANNEL_SELECT: function() {
            C.clear(), U.clear()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t, n, r = e.settings,
                o = r.type,
                i = r.proto;
            o === T.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS ? M = new Set(null !== (n = null == i ? void 0 : null === (t = i.favoriteSoundboardSounds) || void 0 === t ? void 0 : t.soundIds) && void 0 !== n ? n : []) : o === T.UserSettingsTypes.PRELOADED_USER_SETTINGS && B(i)
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
            D = 1
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
            var t = e.soundboardSounds;
            R.set(h.DEFAULT_SOUND_GUILD_ID, t), D = 2
        },
        SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
            e.updates.forEach(function(e) {
                var t = e.guildId,
                    n = e.sounds;
                R.set(t, n)
            }), L = 2
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            R.delete(t.id)
        },
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
            var t = e.userId;
            P.has(t) ? P.delete(t) : P.add(t)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.soundboardStoreState;
            R = new Map(I.default.entries(t.soundboardSounds)), M = new Set(t.favoritedSoundIds), P = new Set(t.localSoundboardMutes)
        },
        GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
            var t = e.guildId,
                n = e.soundboardSounds;
            R.set(t, n)
        }
    })
}