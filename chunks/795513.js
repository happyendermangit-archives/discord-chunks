function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("710845"),
        r = n("287328"),
        s = n("870078");

    function a(e, t, n) {
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
            let t = await r.default.cache(e).get(s.VERSION_TO_SKIP_READING_THE_DATABASE_KEY);
            return null == t ? null : t === s.VERSION_TO_SKIP_READING_THE_DATABASE
        }
        canUseGuildVersions() {
            return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants()
        }
        async doesDatabaseVersionMatchJsConstants() {
            let e = r.default.forceResyncVersion();
            if (null == e) return !1;
            let t = await e.get(s.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY),
                n = null == t ? void 0 : t.version;
            return n === s.VERSION_TO_FORCE_RESYNCING_ALL_DATA || (o.info("KVStore version mismatch: ".concat(n, " vs ").concat(s.VERSION_TO_FORCE_RESYNCING_ALL_DATA)), !1)
        }
        handleClear() {
            this.hasSuccessfullyConnected = !1
        }
        handleConnectionOpen() {
            this.hasSuccessfullyConnected = !0
        }
        handleWrite(e) {
            this.hasSuccessfullyConnected = !0, r.default.cacheTransaction(e).put(s.HELLO_KEY, "\uD83D\uDC4B"), r.default.cacheTransaction(e).put(s.VERSION_TO_SKIP_READING_THE_DATABASE_KEY, s.VERSION_TO_SKIP_READING_THE_DATABASE), r.default.forceResyncVersionTransaction(e).put(s.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY, {
                version: s.VERSION_TO_FORCE_RESYNCING_ALL_DATA
            })
        }
        resetInMemoryState() {
            this.hasSuccessfullyConnected = !1
        }
        constructor() {
            a(this, "hasSuccessfullyConnected", !1), a(this, "actions", {
                BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                WRITE_CACHES: (e, t) => this.handleWrite(t)
            })
        }
    }
}