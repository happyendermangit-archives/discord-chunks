function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("592125"),
        a = n("109590"),
        s = n("176505");
    class o extends i.default {
        handleChannelPreload(e) {
            let {
                channelId: t
            } = e;
            if ((0, s.isStaticChannelRoute)(t)) return;
            let n = r.default.getChannel(t);
            null != n && n.isForumLikeChannel() && (0, a.preloadForumThreads)(n)
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
    t.default = new o
}