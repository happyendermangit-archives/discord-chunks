function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("239091"),
        s = n("644956"),
        a = n("819366"),
        o = n("592125");
    t.default = {
        handleUserContextMenu(e, t, s, a) {
            let l = o.default.getChannel(t);
            null != l && (0, r.openContextMenuLazy)(a, async () => {
                let {
                    default: t
                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("70866"), n.e("12435"), n.e("6696")]).then(n.bind(n, "757387"));
                return n => (0, i.jsx)(t, {
                    ...n,
                    user: e,
                    channel: l,
                    guildId: s
                })
            })
        },
        react(e, t, n) {
            let {
                userId: r,
                channelId: o,
                roleId: l,
                roleName: u
            } = e;
            return null == r && (null != l || "@everyone" === u || "@here" === u) ? (0, i.jsx)(s.default, {
                inlinePreview: n.formatInline,
                ...e,
                children: t(e.content, n)
            }, n.key) : (0, i.jsx)(a.default, {
                className: "mention",
                userId: r,
                channelId: o,
                inlinePreview: n.noStyleAndInteraction
            }, n.key)
        }
    }
}