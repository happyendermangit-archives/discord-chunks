function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("465029"),
        a = n("276438"),
        s = n("190159"),
        o = n("580079"),
        l = n("859802"),
        u = n("176505");
    class d extends i.default {
        handleChannelPreload(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            if (null == t || n !== u.StaticChannelRoute.GUILD_HOME || !(0, l.canSeeGuildHome)(t)) return !1;
            (0, s.shouldFetchGuildFeed)(t, !1) && (0, a.fetchGuildFeed)({
                guildId: t,
                refresh: !0
            }), o.default.shouldFetch(t) && (0, r.fetchActiveChannels)(t)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                CHANNEL_PRELOAD: this.handleChannelPreload
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new d
}