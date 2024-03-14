function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("551042"),
        r = n("565298"),
        a = n("393414"),
        o = n("239380"),
        l = n("42203"),
        u = n("361572"),
        d = n("232054"),
        c = n("49111");
    async function f(e, t, f) {
        let _ = (0, u.tryParseChannelPath)(e);
        if (null != _ && !await (0, d.default)(_)) {
            (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await n.el("332579").then(n.bind(n, "332579"));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            });
            return
        }
        if (null == _) {
            (0, a.transitionTo)(e);
            return
        }
        let h = function(e) {
            if (null == e.channelId) return e;
            let t = l.default.getChannel(e.channelId);
            if (null == t) return e;
            let n = (0, r.getGuildIdForGenericRedirect)(t);
            return {
                ...e,
                guildId: null != n ? n : c.ME
            }
        }(_);
        if (null == h.channelId) {
            (0, o.transitionToGuild)(h.guildId);
            return
        }
        null != h.threadId ? (0, a.transitionTo)(c.Routes.CHANNEL_THREAD_VIEW(h.guildId, h.channelId, h.threadId, h.messageId), t, f) : (0, a.transitionTo)(c.Routes.CHANNEL(h.guildId, h.channelId, h.messageId), t, f)
    }
}