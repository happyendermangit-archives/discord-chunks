function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GameDisplayModeStorage: function() {
            return a
        }
    });
    var i = n("433517"),
        r = n("593472");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class a {
        save() {
            let e = {
                games: this.games
            };
            i.Storage.set(a.storageKey, e)
        }
        static load() {
            return null == a._loaded && (a._loaded = a.loadInternal()), a._loaded
        }
        static loadInternal() {
            let e = i.Storage.get(a.storageKey);
            if (null != e) {
                var t;
                return new a(null !== (t = e.games) && void 0 !== t ? t : {})
            }
            let n = new a({});
            return n.save(), n
        }
        static getGameSettings(e) {
            var t;
            return null == e ? null : null !== (t = a.load().games[e]) && void 0 !== t ? t : null
        }
        static updateGameSettings(e, t) {
            if (null == e) return;
            let n = a.load(),
                i = n.games[e];
            if (null == i) {
                n.games[e] = {
                    screen: r.RunningProcessFullscreenType.UNKNOWN,
                    date: Date.now(),
                    ...t
                }, n.save();
                return
            }
            "boolean" == typeof t.disabled && (i.disabled = t.disabled), "number" == typeof t.screen && (i.screen = t.screen), i.date = Date.now(), n.save()
        }
        static isPromptingForGameDisable(e) {
            var t, n;
            return null !== (n = null === (t = a.getGameSettings(e)) || void 0 === t ? void 0 : t.disabled) && void 0 !== n && n
        }
        static setPromptingForGameDisable(e, t) {
            a.updateGameSettings(e, {
                disabled: t
            })
        }
        static getGameDisplayMode(e) {
            var t, n;
            return null == e ? null : null !== (n = null === (t = a.getGameSettings(e)) || void 0 === t ? void 0 : t.screen) && void 0 !== n ? n : null
        }
        static setGameDisplayMode(e, t) {
            a.updateGameSettings(e, {
                screen: t
            })
        }
        static clearOldGameSettings() {
            let e = a.load();
            if (null == e.games) return;
            let t = Date.now() - 31536e6;
            for (let n in e.games) e.games[n].date < t && delete e.games[n];
            e.save()
        }
        static reset() {
            let e = a.load();
            e.games = {}, e.save()
        }
        static isTestMode() {
            var e;
            return e = !!window.__GAME_DISPLAY_MODE_TEST_MODE__, e
        }
        static isVerbose() {
            var e;
            return e = !!window.__GAME_DISPLAY_MODE_DEBUG__, e
        }
        constructor(e) {
            s(this, "games", void 0), this.games = e
        }
    }
    s(a, "_loaded", null), s(a, "storageKey", "GameDisplayModeStorage"), setTimeout(() => a.clearOldGameSettings(), 6e4)
}