function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("727429"),
        r = n("703656"),
        s = n("769654"),
        a = n("592125"),
        o = n("754688"),
        l = n("849027"),
        u = n("927723"),
        d = n("981631");
    async function _(e, t, n) {
        let _ = (0, o.tryParseChannelPath)(e);
        if (null != _ && !await (0, l.default)(_)) {
            (0, u.showInaccessibleLinkModal)({
                kind: "channel"
            });
            return
        }
        if (null == _) {
            (0, r.transitionTo)(e, t, n);
            return
        }
        let c = function(e) {
            if (null == e.channelId) return e;
            let t = a.default.getChannel(e.channelId);
            if (null == t) return e;
            let n = (0, i.getGuildIdForGenericRedirect)(t);
            return {
                ...e,
                guildId: null != n ? n : d.ME
            }
        }(_);
        if (null == c.channelId) {
            (0, s.transitionToGuild)(c.guildId);
            return
        }
        null != c.threadId ? (0, r.transitionTo)(d.Routes.CHANNEL_THREAD_VIEW(c.guildId, c.channelId, c.threadId, c.messageId), t, n) : (0, r.transitionTo)(d.Routes.CHANNEL(c.guildId, c.channelId, c.messageId), t, n)
    }
}