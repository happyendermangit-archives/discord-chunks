function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilteredTopCommands: function() {
            return T
        }
    }), n("47120"), n("653041");
    var i, r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("570140"),
        l = n("911969"),
        u = n("704907"),
        d = n("581883");
    n("689079");
    var _ = n("526761");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = {
            pendingUsages: []
        },
        I = new u.default({
            computeBonus: () => 1,
            computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0,
            lookupKey: e => e,
            afterCompute: () => {},
            numFrequentlyItems: 500
        });

    function T(e, t) {
        return e.filter(e => {
            if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
            return !0
        }).map(e => e.split(":")[0])
    }

    function f(e, t) {
        return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
    }

    function S() {
        var e, t;
        let n = null !== (t = null === (e = d.default.frecencyWithoutFetchingLatest.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
        I.overwriteHistory(s().mapValues(n, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), E.pendingUsages)
    }
    class A extends(i = a.default.PersistedStore) {
        initialize(e) {
            null != e && (E = e), this.syncWith([d.default], S)
        }
        getState() {
            return E
        }
        hasPendingUsage() {
            return E.pendingUsages.length > 0
        }
        getCommandFrecencyWithoutLoadingLatest() {
            return I
        }
        getScoreWithoutLoadingLatest(e, t) {
            var n;
            return null !== (n = I.getScore(f(e, t))) && void 0 !== n ? n : 0
        }
        getTopCommandsWithoutLoadingLatest() {
            return I.frequently
        }
    }
    c(A, "displayName", "ApplicationCommandFrecencyStore"), c(A, "persistKey", "ApplicationCommandFrecencyV2"), t.default = new A(o.default, {
        APPLICATION_COMMAND_USED: function(e) {
            let {
                command: t,
                context: n
            } = e;
            if (t.type !== l.ApplicationCommandType.CHAT) return !1;
            let i = f(n, t);
            E.pendingUsages.push({
                key: i,
                timestamp: Date.now()
            }), I.track(i), I.compute()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            if (t !== _.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            E.pendingUsages = []
        }
    })
}