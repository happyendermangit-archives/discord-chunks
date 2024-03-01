function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var s = n("917351"),
        i = n.n(s),
        r = n("400683"),
        a = n("605250"),
        o = n("162771"),
        d = n("718517"),
        u = n("802493");
    let l = new a.default("NonGuildVersions");
    var f = new class e {
        async getCommittedVersions() {
            try {
                let e = u.default.nonGuildVersions();
                if (null == e) return {};
                let t = (await e.getMany()).map(e => [e.id, "version" in e ? e.version : e.versionString]);
                return Object.fromEntries(null != t ? t : [])
            } catch (e) {
                return l.warn("couldn't load guild versions", e), {}
            }
        }
        handleConnectionOpen(e, t) {
            null != e.apiCodeVersion && u.default.nonGuildVersionsTransaction(t).put({
                id: "api_code_version",
                version: e.apiCodeVersion
            })
        }
        resetInMemoryState() {}
        constructor() {
            if (this.actions = {
                    CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                    BACKGROUND_SYNC: (e, t) => this.handleConnectionOpen(e, t)
                }, !(0, r.isCacheEnabled)()) return;
            o.default.addChangeListener(i.throttle(() => {
                var e;
                null === (e = u.default.database()) || void 0 === e || e.transaction(e => {
                    let t = o.default.getGuildId();
                    null == t || isNaN(Number(t)) ? u.default.nonGuildVersionsTransaction(e).delete("initial_guild_id") : u.default.nonGuildVersionsTransaction(e).put({
                        id: "initial_guild_id",
                        versionString: t
                    })
                })
            }, 10 * d.default.Millis.SECOND))
        }
    }
}