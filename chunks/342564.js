function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFilteredTopCommands: function() {
            return f
        },
        default: function() {
            return T
        }
    }), n("222007"), n("424973");
    var i = n("917351"),
        l = n.n(i),
        a = n("446674"),
        o = n("913144"),
        s = n("798609"),
        r = n("80507"),
        u = n("374363");
    n("317041");
    var d = n("397336");
    let c = {
            pendingUsages: []
        },
        p = new r.default({
            computeBonus: () => 1,
            computeWeight: e => e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 0,
            lookupKey: e => e,
            afterCompute: () => {},
            numFrequentlyItems: 500
        });

    function f(e, t) {
        return e.filter(e => {
            if (e.includes(":")) return null != t.guild && t.guild.id === e.split(":")[1];
            return !0
        }).map(e => e.split(":")[0])
    }

    function m(e, t) {
        return 0 > Number(t.id) ? t.id : null != e.guild && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
    }

    function _() {
        var e, t;
        let n = u.default.frecencyWithoutFetchingLatest,
            i = null !== (t = null === (e = n.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
        p.overwriteHistory(l.mapValues(i, e => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter(e => e > 0)
        })), c.pendingUsages)
    }
    class I extends a.default.PersistedStore {
        initialize(e) {
            null != e && (c = e), this.syncWith([u.default], _)
        }
        getState() {
            return c
        }
        hasPendingUsage() {
            return c.pendingUsages.length > 0
        }
        getCommandFrecencyWithoutLoadingLatest() {
            return p
        }
        getScoreWithoutLoadingLatest(e, t) {
            var n;
            return null !== (n = p.getScore(m(e, t))) && void 0 !== n ? n : 0
        }
        getTopCommandsWithoutLoadingLatest() {
            return p.frequently
        }
    }
    I.displayName = "ApplicationCommandFrecencyStore", I.persistKey = "ApplicationCommandFrecencyV2";
    var T = new I(o.default, {
        APPLICATION_COMMAND_USED: function(e) {
            let {
                command: t,
                context: n
            } = e;
            if (t.type !== s.ApplicationCommandType.CHAT) return !1;
            let i = m(n, t);
            c.pendingUsages.push({
                key: i,
                timestamp: Date.now()
            }), p.track(i), p.compute()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                wasSaved: n
            } = e;
            if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            c.pendingUsages = []
        }
    })
}