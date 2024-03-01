function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return a
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("77078"),
        n = E("913144"),
        r = E("42203"),
        i = E("988878");
    async function a(e) {
        let _ = r.default.getChannel(e.channelId),
            a = null == _ ? void 0 : _.guild_id;
        if ((0, i.default)(a)) {
            let _ = await (0, o.openModalLazy)(async () => {
                let {
                    default: _
                } = await E.el("168984").then(E.bind(E, "168984"));
                return E => (0, t.jsx)(_, {
                    ...E,
                    ...e
                })
            }, {
                onCloseCallback: () => {
                    n.default.dispatch({
                        type: "INTERACTION_IFRAME_MODAL_CLOSE",
                        applicationId: e.application.id
                    })
                }
            });
            n.default.dispatch({
                type: "INTERACTION_IFRAME_MODAL_KEY_CREATE",
                modalKey: _
            })
        }
    }
}