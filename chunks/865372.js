function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("424973");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("80507"),
        l = n("374363"),
        u = n("718517"),
        d = n("364685"),
        c = n("397336");
    let f = {
        pendingUsages: []
    };
    u.default.Millis.DAY;
    let _ = new o.default({
            computeBonus: () => 100,
            computeWeight: e => {
                let t = 0;
                return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
            },
            lookupKey: e => d.default.getStickerById(e),
            afterCompute: () => {},
            numFrequentlyItems: 20
        }),
        h = () => {
            d.default.isLoaded && _.compute()
        },
        E = () => {
            h()
        };

    function g() {
        var e;
        let t = null === (e = l.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
        if (null == t) return !1;
        _.overwriteHistory(s.mapValues(t, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), f.pendingUsages)
    }
    class m extends r.default.PersistedStore {
        initialize(e) {
            this.waitFor(d.default), null != e && (f = e), this.syncWith([d.default], E), this.syncWith([l.default], g)
        }
        getState() {
            return f
        }
        hasPendingUsage() {
            return f.pendingUsages.length > 0
        }
        get stickerFrecencyWithoutFetchingLatest() {
            return _
        }
    }
    m.displayName = "StickersPersistedStore", m.persistKey = "StickersPersistedStoreV2";
    var p = new m(a.default, {
        STICKER_TRACK_USAGE: e => {
            let {
                stickerIds: t
            } = e;
            null == t || t.forEach(e => {
                _.track(e), f.pendingUsages.push({
                    key: e,
                    timestamp: Date.now()
                })
            }), h()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            f.pendingUsages = []
        }
    })
}