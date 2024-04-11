function(e, t, n) {
    "use strict";
    n.r(t), n("653041");
    var i, r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("570140"),
        l = n("704907"),
        u = n("581883"),
        d = n("70956"),
        _ = n("926491"),
        c = n("526761");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = {
        pendingUsages: []
    };
    d.default.Millis.DAY;
    let T = new l.default({
            computeBonus: () => 100,
            computeWeight: e => {
                let t = 0;
                return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
            },
            lookupKey: e => _.default.getStickerById(e),
            afterCompute: () => {},
            numFrequentlyItems: 20
        }),
        f = () => {
            _.default.isLoaded && T.compute()
        },
        S = () => {
            f()
        };

    function A() {
        var e;
        let t = null === (e = u.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
        if (null == t) return !1;
        T.overwriteHistory(s().mapValues(t, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), I.pendingUsages)
    }
    class h extends(i = a.default.PersistedStore) {
        initialize(e) {
            this.waitFor(_.default), null != e && (I = e), this.syncWith([_.default], S), this.syncWith([u.default], A)
        }
        getState() {
            return I
        }
        hasPendingUsage() {
            return I.pendingUsages.length > 0
        }
        get stickerFrecencyWithoutFetchingLatest() {
            return T
        }
    }
    E(h, "displayName", "StickersPersistedStore"), E(h, "persistKey", "StickersPersistedStoreV2"), t.default = new h(o.default, {
        STICKER_TRACK_USAGE: e => {
            let {
                stickerIds: t
            } = e;
            null == t || t.forEach(e => {
                T.track(e), I.pendingUsages.push({
                    key: e,
                    timestamp: Date.now()
                })
            }), f()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            I.pendingUsages = []
        }
    })
}