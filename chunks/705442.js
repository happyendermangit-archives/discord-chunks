function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("31775"),
        u = n.n(a),
        s = n("898511"),
        l = n("629815"),
        c = n("419135"),
        f = n("851285"),
        d = n("208454"),
        _ = n("991611"),
        E = n("452700"),
        p = n("686309"),
        m = n("571336"),
        y = n("382021");

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var S = [],
        v = new(u())({
            max: m.NUM_RECENTLY_HEARD_SOUNDS
        }),
        g = new c.default({
            computeBonus: function() {
                return 100
            },
            computeWeight: function(e) {
                var t = 0;
                return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
            },
            lookupKey: function(e) {
                return E.default.getSoundById(e)
            },
            afterCompute: function() {},
            numFrequentlyItems: m.NUM_FREQUENTLY_USED_SOUNDS
        });

    function A() {
        if (b()) {
            var e, t, n = null === (t = f.default.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === t ? void 0 : t.playedSounds;
            g.overwriteHistory((e = null != n ? n : {}, i().mapValues(e, function(e) {
                var t, n;
                return t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            h(e, t, n[t])
                        })
                    }
                    return e
                }({}, e), n = (n = {
                    recentUses: e.recentUses.map(Number).filter(function(e) {
                        return e > 0
                    })
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t
            })), S)
        }
    }

    function b() {
        return (0, _.recentlyHeardExperiment)({
            location: "soundboard_event_store",
            autoTrackExposure: !1
        }).canSeeFrequentlyPlayed
    }
    var N = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && T(e, t)
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
            var e, r, o, i = O(t);
            if (n) {
                var a = O(this).constructor;
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
            value: function(e) {
                this.waitFor(d.default, E.default), (null == e ? void 0 : e.recentlyHeardCache) != null && v.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (S = e.playedEventsPendingFlush), this.syncWith([f.default], A)
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    recentlyHeardCache: v.dump(),
                    playedEventsPendingFlush: S
                }
            }
        }, {
            key: "hasPendingUsage",
            value: function() {
                return S.length > 0
            }
        }, {
            key: "playedSoundHistory",
            get: function() {
                return g.usageHistory
            }
        }, {
            key: "recentlyHeardSoundIds",
            get: function() {
                return v.values()
            }
        }, {
            key: "frecentlyPlayedSounds",
            get: function() {
                return g.frequently
            }
        }], I(r.prototype, o), i && I(r, i), u
    }(s.default.PersistedStore);
    h(N, "displayName", "SoundboardEventStore"), h(N, "persistKey", "SoundboardEventStore"), t.default = new N(l.default, {
        GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
            var t = e.sound,
                n = e.trigger;
            if (b()) {
                var r = t.soundId.toString();
                n === p.LocalSoundTrigger.SOUNDBOARD && function(e) {
                    g.track(e), S.push({
                        key: e,
                        timestamp: Date.now()
                    }), g.compute()
                }(r)
            }
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
            var t, n = e.soundId,
                r = e.userId;
            if (function() {
                    return (0, _.recentlyHeardExperiment)({
                        location: "soundboard_event_store",
                        autoTrackExposure: !1
                    }).canSeeRecentlyHeard
                }()) {
                var o = n.toString();
                r !== (null === (t = d.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && function(e) {
                    var t = E.default.getSounds(),
                        n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = t.values()[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value.find(function(t) {
                                return t.soundId.toString() === e
                            });
                            if (null != u) return !0
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
                    return !1
                }(o) && function(e) {
                    v.set(e, e)
                }(o)
            }
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t = e.settings.type,
                n = e.wasSaved;
            b() && t === y.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && n && (S = [])
        }
    })
}