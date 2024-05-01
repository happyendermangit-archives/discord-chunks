function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("710845"),
        r = n("287328"),
        a = n("870078");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = new i.default("KvCacheVersion");
    t.default = new class e {
        async okAsync(e) {
            let t = await r.default.cache(e).get(a.VERSION_TO_SKIP_READING_THE_DATABASE_KEY);
            return null == t ? null : t === a.VERSION_TO_SKIP_READING_THE_DATABASE
        }
        canUseGuildVersions() {
            return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants()
        }
        async doesDatabaseVersionMatchJsConstants() {
            let e = r.default.forceResyncVersion();
            if (null == e) return !1;
            let t = await e.get(a.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY),
                n = null == t ? void 0 : t.version;
            return n === a.VERSION_TO_FORCE_RESYNCING_ALL_DATA || (o.info("KVStore version mismatch: ".concat(n, " vs ").concat(a.VERSION_TO_FORCE_RESYNCING_ALL_DATA)), !1)
        }
        handleClear() {
            this.hasSuccessfullyConnected = !1
        }
        handleConnectionOpen() {
            this.hasSuccessfullyConnected = !0
        }
        handleWrite(e) {
            this.hasSuccessfullyConnected = !0, r.default.cacheTransaction(e).put(a.HELLO_KEY, "\uD83D\uDC4B"), r.default.cacheTransaction(e).put(a.VERSION_TO_SKIP_READING_THE_DATABASE_KEY, a.VERSION_TO_SKIP_READING_THE_DATABASE), r.default.forceResyncVersionTransaction(e).put(a.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY, {
                version: a.VERSION_TO_FORCE_RESYNCING_ALL_DATA
            })
        }
        resetInMemoryState() {
            this.hasSuccessfullyConnected = !1
        }
        constructor() {
            s(this, "hasSuccessfullyConnected", !1), s(this, "actions", {
                BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                WRITE_CACHES: (e, t) => this.handleWrite(t)
            })
        }
    }
}