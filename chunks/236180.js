function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("272030"),
        a = n("643306"),
        s = n("470648"),
        r = n("42203"),
        o = {
            handleUserContextMenu(e, t, a, s) {
                let o = r.default.getChannel(t);
                null != o && (0, l.openContextMenuLazy)(s, async () => {
                    let {
                        default: t
                    } = await n.el("834247").then(n.bind(n, "834247"));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        user: e,
                        channel: o,
                        guildId: a
                    })
                })
            },
            react(e, t, n) {
                let {
                    userId: l,
                    channelId: r
                } = e;
                return null == l ? (0, i.jsx)(a.default, {
                    inlinePreview: n.formatInline,
                    ...e,
                    children: t(e.content, n)
                }, n.key) : (0, i.jsx)(s.default, {
                    className: "mention",
                    userId: l,
                    channelId: r,
                    inlinePreview: n.noStyleAndInteraction
                }, n.key)
            }
        }
}