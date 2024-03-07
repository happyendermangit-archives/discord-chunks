function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return T
        }
    }), E("222007");
    var t = E("689988"),
        o = E("191152"),
        n = E("713810"),
        r = E("435123"),
        a = E("558130"),
        i = E("677315"),
        I = E("724210");
    class s extends t.default {
        handleChannelPreload(e) {
            let {
                guildId: _,
                channelId: E
            } = e;
            if (null == _ || E !== I.StaticChannelRoute.GUILD_HOME || !(0, i.canSeeGuildHome)(_)) return !1;
            (0, r.shouldFetchGuildFeed)(_, !1) && (0, n.fetchGuildFeed)({
                guildId: _,
                refresh: !0
            }), a.default.shouldFetch(_) && (0, o.fetchActiveChannels)(_)
        }
        constructor(...e) {
            super(...e), this.actions = {
                CHANNEL_PRELOAD: this.handleChannelPreload
            }
        }
    }
    var T = new s
}