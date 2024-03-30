function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FREQUENCY_ITEM_LIMIT: function() {
            return m
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("29570"),
        l = n("419135"),
        c = n("851285"),
        f = n("382021");

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = 250,
        y = {
            pendingUsages: []
        },
        I = new l.default({
            computeBonus: function() {
                return 100
            },
            computeWeight: function(e) {
                return e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0
            },
            lookupKey: function(e) {
                return e
            },
            afterCompute: function() {},
            numFrequentlyItems: m
        });

    function h(e) {
        y.pendingUsages.push({
            key: e,
            timestamp: Date.now()
        }), I.track(e), I.compute()
    }

    function O() {
        var e, t, n = null !== (t = null === (e = c.default.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
        I.overwriteHistory(i().mapValues(n, function(e) {
            var t, n;
            return t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        _(e, t, n[t])
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
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
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
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
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
                null != e && (y = e), this.syncWith([c.default], O)
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
            key: "getApplicationFrecencyWithoutLoadingLatest",
            value: function() {
                return I
            }
        }, {
            key: "getScoreWithoutLoadingLatest",
            value: function(e) {
                var t;
                return null !== (t = I.getScore(e)) && void 0 !== t ? t : 0
            }
        }, {
            key: "getTopApplicationsWithoutLoadingLatest",
            value: function() {
                return I.frequently
            }
        }], d(r.prototype, o), i && d(r, i), u
    }(a.default.PersistedStore);
    _(T, "displayName", "ApplicationFrecencyStore"), _(T, "persistKey", "ApplicationFrecency"), t.default = new T(u.default, {
        APPLICATION_COMMAND_USED: function(e) {
            var t = e.command;
            if (t.type !== s.ApplicationCommandType.CHAT) return !1;
            h(t.applicationId)
        },
        EMBEDDED_ACTIVITY_OPEN: function(e) {
            h(e.applicationId)
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t = e.settings.type,
                n = e.wasSaved;
            if (t !== f.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            y.pendingUsages = []
        }
    })
}