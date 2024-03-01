function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return u
        }
    });
    var r = s("37983");
    s("884691");
    var o = s("77078"),
        l = s("292687"),
        a = s("974889"),
        n = s("599110"),
        i = s("49111");

    function u(e, t) {
        let u = null != t ? t : "".concat(i.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL);
        null != e.targetBoostedGuildTier && (u += " - Tier ".concat(e.targetBoostedGuildTier));
        n.default.track(i.AnalyticEvents.OPEN_MODAL, {
            type: u,
            location: e.analyticsSourceLocation
        });
        let {
            openInPopoutEnabled: d,
            ...c
        } = e, f = l.default.getWindowOpen(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && null != d && d;
        f && (0, a.default)(i.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
        let _ = f ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT;
        (0, o.openModalLazy)(async () => {
            let {
                default: e
            } = await s.el("874642").then(s.bind(s, "874642"));
            return t => (0, r.jsx)(e, {
                ...c,
                ...t
            })
        }, {
            onCloseCallback: () => {
                n.default.track(i.AnalyticEvents.MODAL_DISMISSED, {
                    type: u,
                    location: e.analyticsSourceLocation
                })
            },
            contextKey: _
        })
    }
}