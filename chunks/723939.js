function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("446674"),
        s = n("705909"),
        r = n("913144"),
        a = n("605250"),
        o = n("271938"),
        l = n("496533");
    let u = new a.default("DatabaseManager");
    class d extends i.Store {
        initialize() {
            this.waitFor(o.default), this.carefullySpeculativelyOpen(l.getUserId()), this.handleAuthenticationStoreChanged(), o.default.addChangeListener(() => this.handleAuthenticationStoreChanged())
        }
        databaseName(e) {
            return c(e)
        }
        database(e) {
            if (null != e) {
                var t;
                return null !== (t = this.databases.get(e)) && void 0 !== t ? t : null
            }
            return null
        }
        carefullyOpenDatabase(e) {
            if (this.preventWritingCachesAgainThisSession) return u.verbose("Not opening database because caches have been manually cleared."), null;
            if (null != e && !this.databases.has(e)) {
                let t = function(e) {
                    return null
                }(e);
                u.verbose("added database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange()
            }
            return this.database(e)
        }
        replaceDisableAllDatabases(e) {
            for (let t of (u.info("disabling and nulling all databases (reason: ".concat(e, ")")), this.databases.keys())) {
                let n = this.databases.get(t);
                null == n || n.disable(e), null == n || n.close(), this.databases.set(t, null)
            }
            this.emitChange()
        }
        remove(e) {
            let t = this.databases.get(e);
            u.log("removing database (user: ".concat(e, ", database: ").concat(t, ")")), null == t || t.close(), this.databases.delete(e), this.emitChange()
        }
        handleClearCaches(e) {
            e.preventWritingCachesAgainThisSession && (this.preventWritingCachesAgainThisSession = !0), this.replaceDisableAllDatabases("DatabaseManager (".concat(e.reason, ")"))
        }
        handleConnectionOpen() {
            let e = o.default.getId(),
                t = this.databases.get(e),
                n = null == t ? void 0 : t.state();
            null == t && n !== s.DatabaseState.Open && this.remove(e), this.carefullyOpenDatabase(e)
        }
        handleAuthenticationStoreChanged() {
            let e = o.default.getId(),
                t = this.activeUserId;
            if (e !== t) {
                let n = this.databases.get(t);
                u.verbose("active user changed (now: ".concat(e, ", was: ").concat(t, ", was: ").concat(n, ")")), null == n || n.close(), l.setUserId(e), this.activeUserId = e, this.databases.delete(t)
            }
        }
        async carefullySpeculativelyOpen(e) {
            if (this.preventWritingCachesAgainThisSession) {
                u.verbose("Not opening database because caches have been manually cleared.");
                return
            }
            if (null != e) {
                let t = await _(e);
                null == t || this.databases.has(e) ? (u.verbose("discarding speculative database (".concat(e, " → ").concat(t, ")")), null == t || t.close()) : (u.verbose("added speculative database (".concat(e, " → ").concat(t, ")")), this.databases.set(e, t), this.emitChange())
            }
        }
        constructor() {
            super(r.default, {
                CLEAR_CACHES: e => this.handleClearCaches(e),
                CONNECTION_CLOSED: () => this.handleAuthenticationStoreChanged(),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                LOGOUT: () => this.handleAuthenticationStoreChanged()
            }, r.DispatchBand.Early), this.databases = new Map, this.activeUserId = null, this.preventWritingCachesAgainThisSession = !1
        }
    }

    function c(e) {
        return "@account.".concat(e)
    }
    async function _(e) {
        var t;
        return null
    }
    var f = new d
}