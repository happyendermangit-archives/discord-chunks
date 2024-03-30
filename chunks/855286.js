function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilteredTopCommands: function() {
            return I
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("29570"),
        l = n("419135"),
        c = n("851285");
    n("118891");
    var f = n("382021");

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
    var m = {
            pendingUsages: []
        },
        y = new l.default({
            computeBonus: function() {
                return 1
            },
            computeWeight: function(e) {
                return e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0
            },
            lookupKey: function(e) {
                return e
            },
            afterCompute: function() {},
            numFrequentlyItems: 500
        });

    function I(e, t) {
        return e.filter(function(e) {
            if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
            return !0
        }).map(function(e) {
            return e.split(":")[0]
        })
    }

    function h(e, t) {
        return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
    }

    function O() {
        var e, t, n = null !== (t = null === (e = c.default.frecencyWithoutFetchingLatest.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
        y.overwriteHistory(i().mapValues(n, function(e) {
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
        }), m.pendingUsages)
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
                null != e && (m = e), this.syncWith([c.default], O)
            }
        }, {
            key: "getState",
            value: function() {
                return m
            }
        }, {
            key: "hasPendingUsage",
            value: function() {
                return m.pendingUsages.length > 0
            }
        }, {
            key: "getCommandFrecencyWithoutLoadingLatest",
            value: function() {
                return y
            }
        }, {
            key: "getScoreWithoutLoadingLatest",
            value: function(e, t) {
                var n;
                return null !== (n = y.getScore(h(e, t))) && void 0 !== n ? n : 0
            }
        }, {
            key: "getTopCommandsWithoutLoadingLatest",
            value: function() {
                return y.frequently
            }
        }], d(r.prototype, o), i && d(r, i), u
    }(a.default.PersistedStore);
    _(T, "displayName", "ApplicationCommandFrecencyStore"), _(T, "persistKey", "ApplicationCommandFrecencyV2"), t.default = new T(u.default, {
        APPLICATION_COMMAND_USED: function(e) {
            var t = e.command,
                n = e.context;
            if (t.type !== s.ApplicationCommandType.CHAT) return !1;
            var r = h(n, t);
            m.pendingUsages.push({
                key: r,
                timestamp: Date.now()
            }), y.track(r), y.compute()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t = e.settings.type,
                n = e.wasSaved;
            if (t !== f.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            m.pendingUsages = []
        }
    })
}