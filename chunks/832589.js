function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GameDisplayModeStorage: function() {
            return u
        }
    });
    var r = n("242880"),
        o = n("660939");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = function() {
        var e, t, n;

        function u(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a(this, "games", void 0), this.games = e
        }
        return e = u, t = [{
            key: "save",
            value: function() {
                var e = {
                    games: this.games
                };
                r.Storage.set(u.storageKey, e)
            }
        }], n = [{
            key: "load",
            value: function() {
                return null == u._loaded && (u._loaded = u.loadInternal()), u._loaded
            }
        }, {
            key: "loadInternal",
            value: function() {
                var e, t = r.Storage.get(u.storageKey);
                if (null != t) return new u(null !== (e = t.games) && void 0 !== e ? e : {});
                var n = new u({});
                return n.save(), n
            }
        }, {
            key: "getGameSettings",
            value: function(e) {
                var t;
                if (null == e) return null;
                return null !== (t = u.load().games[e]) && void 0 !== t ? t : null
            }
        }, {
            key: "updateGameSettings",
            value: function(e, t) {
                if (null != e) {
                    var n = u.load(),
                        r = n.games[e];
                    if (null == r) {
                        n.games[e] = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    a(e, t, n[t])
                                })
                            }
                            return e
                        }({
                            screen: o.RunningProcessFullscreenType.UNKNOWN,
                            date: Date.now()
                        }, t), n.save();
                        return
                    }
                    "boolean" == typeof t.disabled && (r.disabled = t.disabled), "number" == typeof t.screen && (r.screen = t.screen), r.date = Date.now(), n.save()
                }
            }
        }, {
            key: "isPromptingForGameDisable",
            value: function(e) {
                var t, n;
                return null !== (n = null === (t = u.getGameSettings(e)) || void 0 === t ? void 0 : t.disabled) && void 0 !== n && n
            }
        }, {
            key: "setPromptingForGameDisable",
            value: function(e, t) {
                u.updateGameSettings(e, {
                    disabled: t
                })
            }
        }, {
            key: "getGameDisplayMode",
            value: function(e) {
                var t, n;
                return null == e ? null : null !== (n = null === (t = u.getGameSettings(e)) || void 0 === t ? void 0 : t.screen) && void 0 !== n ? n : null
            }
        }, {
            key: "setGameDisplayMode",
            value: function(e, t) {
                u.updateGameSettings(e, {
                    screen: t
                })
            }
        }, {
            key: "clearOldGameSettings",
            value: function() {
                var e = u.load();
                if (null != e.games) {
                    var t = Date.now() - 31536e6;
                    for (var n in e.games) e.games[n].date < t && delete e.games[n];
                    e.save()
                }
            }
        }, {
            key: "reset",
            value: function() {
                var e = u.load();
                e.games = {}, e.save()
            }
        }, {
            key: "isTestMode",
            value: function() {
                var e;
                return e = !!window.__GAME_DISPLAY_MODE_TEST_MODE__, e
            }
        }, {
            key: "isVerbose",
            value: function() {
                var e;
                return e = !!window.__GAME_DISPLAY_MODE_DEBUG__, e
            }
        }], t && i(e.prototype, t), n && i(e, n), u
    }();
    a(u, "_loaded", null), a(u, "storageKey", "GameDisplayModeStorage"), setTimeout(function() {
        return u.clearOldGameSettings()
    }, 6e4)
}