function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("928518"),
        s = n("776862"),
        o = n("626135"),
        l = n("981631");

    function u(e, t) {
        let u = null != t ? t : "".concat(l.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL);
        null != e.targetBoostedGuildTier && (u += " - Tier ".concat(e.targetBoostedGuildTier));
        o.default.track(l.AnalyticEvents.OPEN_MODAL, {
            type: u,
            location: e.analyticsSourceLocation
        });
        let {
            openInPopoutEnabled: d,
            ..._
        } = e, c = a.default.getWindowOpen(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && null != d && d;
        c && (0, s.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
        let E = c ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("89675")]).then(n.bind(n, "146747"));
            return t => (0, i.jsx)(e, {
                ..._,
                ...t
            })
        }, {
            onCloseCallback: () => {
                o.default.track(l.AnalyticEvents.MODAL_DISMISSED, {
                    type: u,
                    location: e.analyticsSourceLocation
                })
            },
            contextKey: E
        })
    }
}