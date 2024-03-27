function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("952265"),
        s = n("727429"),
        a = n("703656"),
        o = n("920440"),
        l = n("592125"),
        u = n("754688"),
        d = n("849027"),
        _ = n("981631");
    async function c(e, t, c) {
        let E = (0, u.tryParseChannelPath)(e);
        if (null != E && !await (0, d.default)(E)) {
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("22706")]).then(n.bind(n, "438725"));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            });
            return
        }
        if (null == E) {
            (0, a.transitionTo)(e);
            return
        }
        let I = function(e) {
            if (null == e.channelId) return e;
            let t = l.default.getChannel(e.channelId);
            if (null == t) return e;
            let n = (0, s.getGuildIdForGenericRedirect)(t);
            return {
                ...e,
                guildId: null != n ? n : _.ME
            }
        }(E);
        if (null == I.channelId) {
            (0, o.transitionToGuild)(I.guildId);
            return
        }
        null != I.threadId ? (0, a.transitionTo)(_.Routes.CHANNEL_THREAD_VIEW(I.guildId, I.channelId, I.threadId, I.messageId), t, c) : (0, a.transitionTo)(_.Routes.CHANNEL(I.guildId, I.channelId, I.messageId), t, c)
    }
}