function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FREQUENCY_ITEM_LIMIT: function() {
            return E
        }
    }), n("653041");
    var i, r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("570140"),
        l = n("911969"),
        u = n("704907"),
        d = n("581883"),
        _ = n("526761");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = 250,
        I = {
            pendingUsages: []
        },
        T = new u.default({
            computeBonus: () => 100,
            computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0,
            lookupKey: e => e,
            afterCompute: () => {},
            numFrequentlyItems: E
        });

    function f(e) {
        I.pendingUsages.push({
            key: e,
            timestamp: Date.now()
        }), T.track(e), T.compute()
    }

    function S() {
        var e, t;
        let n = null !== (t = null === (e = d.default.frecencyWithoutFetchingLatest.applicationFrecency) || void 0 === e ? void 0 : e.applications) && void 0 !== t ? t : {};
        T.overwriteHistory(s().mapValues(n, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), I.pendingUsages)
    }
    class A extends(i = a.default.PersistedStore) {
        initialize(e) {
            null != e && (I = e), this.syncWith([d.default], S)
        }
        getState() {
            return I
        }
        hasPendingUsage() {
            return I.pendingUsages.length > 0
        }
        getApplicationFrecencyWithoutLoadingLatest() {
            return T
        }
        getScoreWithoutLoadingLatest(e) {
            var t;
            return null !== (t = T.getScore(e)) && void 0 !== t ? t : 0
        }
        getTopApplicationsWithoutLoadingLatest() {
            return T.frequently
        }
    }
    c(A, "displayName", "ApplicationFrecencyStore"), c(A, "persistKey", "ApplicationFrecency"), t.default = new A(o.default, {
        APPLICATION_COMMAND_USED: function(e) {
            let {
                command: t
            } = e;
            if (t.type !== l.ApplicationCommandType.CHAT) return !1;
            f(t.applicationId)
        },
        EMBEDDED_ACTIVITY_OPEN: function(e) {
            let {
                applicationId: t
            } = e;
            f(t)
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            if (t !== _.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            I.pendingUsages = []
        }
    })
}