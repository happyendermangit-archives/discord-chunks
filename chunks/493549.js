function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_NUM_SELECTED_ITEMS: function() {
            return O
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("419135"),
        l = n("851285"),
        c = n("935741"),
        f = n("306912"),
        d = n("894288"),
        _ = n("63116"),
        E = n("281767"),
        p = n("382021");

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var O = 100,
        T = new s.default({
            computeBonus: function() {
                return 100
            },
            computeWeight: function(e) {
                var t = 0;
                return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
            },
            lookupKey: function(e) {
                var t, n;
                return null !== (n = null !== (t = f.default.getGuild(e)) && void 0 !== t ? t : c.default.getChannel(e)) && void 0 !== n ? n : c.default.getChannel(c.default.getDMFromUserId(e))
            },
            afterCompute: function() {},
            numFrequentlyItems: O,
            maxSamples: 10
        }),
        S = null,
        v = null;

    function g(e) {
        var t = e.guildId,
            n = e.channelId,
            r = !1;
        return n !== S && (S = null != n ? n : null, null != n && E.ID_REGEX.test(n) && (r = !0, T.track(n), b.pendingUsages.push({
            key: n,
            timestamp: Date.now()
        }))), t !== v && (v = null != t ? t : null, null != t && E.ID_REGEX.test(t) && (r = !0, T.track(t), b.pendingUsages.push({
            key: t,
            timestamp: Date.now()
        }))), r
    }

    function A() {
        var e, t = null === (e = l.default.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
        if (null == t) return !1;
        T.overwriteHistory(i().mapValues(t, function(e) {
            var t, n;
            return t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        y(e, t, n[t])
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
        }), b.pendingUsages)
    }
    var b = {
            pendingUsages: []
        },
        N = function(e) {
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
                value: function(e) {
                    this.waitFor(_.default, d.default), null != e && (e.pendingUsages = e.pendingUsages.filter(function(e) {
                        return null != e && E.ID_REGEX.test(e.key)
                    }), b = e), this.syncWith([l.default], A)
                }
            }, {
                key: "getState",
                value: function() {
                    return b
                }
            }, {
                key: "hasPendingUsage",
                value: function() {
                    return b.pendingUsages.length > 0
                }
            }, {
                key: "frecencyWithoutFetchingLatest",
                get: function() {
                    return T
                }
            }, {
                key: "getFrequentlyWithoutFetchingLatest",
                value: function() {
                    return T.frequently
                }
            }, {
                key: "getScoreWithoutFetchingLatest",
                value: function(e) {
                    var t;
                    return null !== (t = T.getFrecency(e)) && void 0 !== t ? t : 0
                }
            }, {
                key: "getScoreForDMWithoutFetchingLatest",
                value: function(e) {
                    var t = c.default.getDMFromUserId(e);
                    return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
                }
            }, {
                key: "getMaxScore",
                value: function() {
                    return 10 * O
                }
            }, {
                key: "getBonusScore",
                value: function() {
                    return 100
                }
            }], m(r.prototype, o), i && m(r, i), u
        }(a.default.PersistedStore);
    y(N, "displayName", "FrecencyStore"), y(N, "persistKey", "FrecencyStore"), t.default = new N(u.default, {
        CHANNEL_SELECT: g,
        VOICE_CHANNEL_SELECT: g,
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t = e.settings.type,
                n = e.wasSaved;
            return t === p.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && !!n && (b.pendingUsages = [], !0)
        }
    })
}