function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("222007");
    var i = n("75247"),
        s = n("913144"),
        r = n("605250"),
        a = n("778689");
    let o = new r.default("BasicChannelCacheStore");
    class l extends i.default {
        hasChannel(e) {
            return this.channels.has(e)
        }
        hasGuild(e) {
            return this.guilds.has(e)
        }
        getBasicChannel(e) {
            var t;
            return null !== (t = this.channels.get(e)) && void 0 !== t ? t : null
        }
        getGuildBasicChannels(e) {
            var t;
            return null !== (t = this.guilds.get(e)) && void 0 !== t ? t : null
        }
        invalidate(e) {
            this.delete(e)
        }
        restored(e) {
            this.delete(e)
        }
        initialize() {
            this.waitFor(a.default)
        }
        handleCacheLoadedLazy(e) {
            for (let [t, n] of(this.guilds = new Map, this.channels = new Map, e.basicGuildChannels))
                for (let e of (this.guilds.set(t, Object.fromEntries(n.map(e => [e.id, e]))), n)) this.channels.set(e.id, e)
        }
        handleCacheLoadedLazyNoCache(e) {
            this.guilds.clear(), this.channels.clear()
        }
        handleConnectionOpen(e) {
            let t = a.default.allGuildIds();
            for (let e of this.guilds.keys()) !t.has(e) && this.delete(e)
        }
        handleLogout(e) {
            this.guilds.clear(), this.channels.clear()
        }
        delete(e) {
            var t;
            for (let n in null !== (t = this.guilds.get(e)) && void 0 !== t ? t : {}) this.channels.delete(n);
            this.guilds.delete(e)
        }
        constructor() {
            super(s.default, {
                CACHE_LOADED_LAZY_NO_CACHE: e => this.handleCacheLoadedLazyNoCache(e),
                CACHE_LOADED_LAZY: e => this.handleCacheLoadedLazy(e),
                CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                LOGOUT: e => this.handleLogout(e)
            }), this.channels = new Map, this.guilds = new Map
        }
    }
    var u = new l
}