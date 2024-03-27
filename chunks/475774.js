function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("570140"),
        a = n("592125"),
        o = n("978578");
    async function l(e) {
        let t = a.default.getChannel(e.channelId),
            l = null == t ? void 0 : t.guild_id;
        if ((0, o.default)(l)) {
            let t = await (0, r.openModalLazy)(async () => {
                let {
                    default: t
                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("57650")]).then(n.bind(n, "677012"));
                return n => (0, i.jsx)(t, {
                    ...n,
                    ...e
                })
            }, {
                onCloseCallback: () => {
                    s.default.dispatch({
                        type: "INTERACTION_IFRAME_MODAL_CLOSE",
                        applicationId: e.application.id
                    })
                }
            });
            s.default.dispatch({
                type: "INTERACTION_IFRAME_MODAL_KEY_CREATE",
                modalKey: t
            })
        }
    }
}