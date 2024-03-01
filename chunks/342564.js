function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getTopRealCommands: function() {
            return m
        },
        getFilteredTopCommands: function() {
            return _
        },
        default: function() {
            return A
        }
    }), n("222007"), n("424973");
    var i = n("917351"),
        l = n.n(i),
        a = n("446674"),
        o = n("913144"),
        r = n("798609"),
        s = n("80507"),
        u = n("374363"),
        d = n("317041"),
        c = n("397336");
    let p = {
            pendingUsages: []
        },
        f = new s.default({
            computeBonus: () => 1,
            computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0,
            lookupKey: e => e,
            afterCompute: () => {},
            numFrequentlyItems: 500
        });

    function m(e) {
        let t = new Set;
        for (let n of e) {
            let e = n.split(d.SUB_COMMAND_KEY_SEPARATOR)[0];
            if (Number(e) > 0 && t.add(e), t.size >= d.DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT) break
        }
        return [...t]
    }

    function _(e, t) {
        return e.filter(e => {
            if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
            return !0
        }).map(e => e.split(":")[0])
    }

    function I(e, t) {
        return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
    }

    function C() {
        var e, t;
        let n = u.default.frecencyWithoutFetchingLatest,
            i = null !== (t = null === (e = n.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
        f.overwriteHistory(l.mapValues(i, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), p.pendingUsages)
    }
    class T extends a.default.PersistedStore {
        initialize(e) {
            null != e && (p = e), this.syncWith([u.default], C)
        }
        getState() {
            return p
        }
        hasPendingUsage() {
            return p.pendingUsages.length > 0
        }
        getCommandFrecencyWithoutLoadingLatest() {
            return f
        }
        getScoreWithoutLoadingLatest(e, t) {
            var n;
            return null !== (n = f.getScore(I(e, t))) && void 0 !== n ? n : 0
        }
        getTopCommandsWithoutLoadingLatest() {
            return f.frequently
        }
    }
    T.displayName = "ApplicationCommandFrecencyStore", T.persistKey = "ApplicationCommandFrecencyV2";
    var A = new T(o.default, {
        APPLICATION_COMMAND_USED: function(e) {
            let {
                command: t,
                context: n
            } = e;
            if (t.type !== r.ApplicationCommandType.CHAT) return !1;
            let i = I(n, t);
            p.pendingUsages.push({
                key: i,
                timestamp: Date.now()
            }), f.track(i), f.compute()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            p.pendingUsages = []
        }
    })
}