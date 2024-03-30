function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("419135"),
        l = n("851285"),
        c = n("388990"),
        f = n("389712"),
        d = n("382021");

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var y = {
        pendingUsages: []
    };
    c.default.Millis.DAY;
    var I = new s.default({
            computeBonus: function() {
                return 100
            },
            computeWeight: function(e) {
                var t = 0;
                return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
            },
            lookupKey: function(e) {
                return f.default.getStickerById(e)
            },
            afterCompute: function() {},
            numFrequentlyItems: 20
        }),
        h = function() {
            f.default.isLoaded && I.compute()
        },
        O = function() {
            h()
        };

    function T() {
        var e, t = null === (e = l.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
        if (null == t) return !1;
        I.overwriteHistory(i().mapValues(t, function(e) {
            var t, n;
            return t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        E(e, t, n[t])
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
        }), y.pendingUsages)
    }
    var S = function(e) {
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
            key: "initialize",
            value: function(e) {
                this.waitFor(f.default), null != e && (y = e), this.syncWith([f.default], O), this.syncWith([l.default], T)
            }
        }, {
            key: "getState",
            value: function() {
                return y
            }
        }, {
            key: "hasPendingUsage",
            value: function() {
                return y.pendingUsages.length > 0
            }
        }, {
            key: "stickerFrecencyWithoutFetchingLatest",
            get: function() {
                return I
            }
        }], _(r.prototype, o), i && _(r, i), u
    }(a.default.PersistedStore);
    E(S, "displayName", "StickersPersistedStore"), E(S, "persistKey", "StickersPersistedStoreV2"), t.default = new S(u.default, {
        STICKER_TRACK_USAGE: function(e) {
            var t = e.stickerIds;
            null == t || t.forEach(function(e) {
                I.track(e), y.pendingUsages.push({
                    key: e,
                    timestamp: Date.now()
                })
            }), h()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t = e.settings.type,
                n = e.wasSaved;
            if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            y.pendingUsages = []
        }
    })
}