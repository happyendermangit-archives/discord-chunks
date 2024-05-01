function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("445346"),
        r = n("570140"),
        a = n("710845"),
        s = n("93093");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let l = new a.default("BasicChannelCacheStore");
    class u extends i.Store {
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
            this.waitFor(s.default)
        }
        handleCacheLoadedLazy(e) {
            for (let [t, n] of(this.guilds = new Map, this.channels = new Map, e.basicGuildChannels))
                for (let e of (this.guilds.set(t, Object.fromEntries(n.map(e => [e.id, e]))), n)) this.channels.set(e.id, e)
        }
        handleCacheLoadedLazyNoCache(e) {
            this.guilds.clear(), this.channels.clear()
        }
        handleConnectionOpen(e) {
            let t = s.default.allGuildIds();
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
            super(r.default, {
                CACHE_LOADED_LAZY_NO_CACHE: e => this.handleCacheLoadedLazyNoCache(e),
                CACHE_LOADED_LAZY: e => this.handleCacheLoadedLazy(e),
                CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                LOGOUT: e => this.handleLogout(e)
            }), o(this, "channels", new Map), o(this, "guilds", new Map)
        }
    }
    t.default = new u
}