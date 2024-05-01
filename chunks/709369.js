function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        a = n("481060"),
        s = n("40851"),
        o = n("776031"),
        l = n("199902"),
        u = n("937482"),
        d = n("358085"),
        _ = n("134598"),
        c = n("981631"),
        E = n("689938");

    function I(e) {
        let {
            onClose: t
        } = e, n = (0, s.useAppContext)(), I = (0, r.useStateFromStores)([l.default], () => l.default.getCurrentUserActiveStream()), T = (0, o.default)(I, n);
        return (0, i.jsxs)(a.Menu, {
            onSelect: c.NOOP_NULL,
            navId: "manage-broadcast",
            onClose: t,
            "aria-label": E.default.Messages.SETTINGS,
            children: [d.isPlatformEmbedded && null != I ? (0, i.jsx)(a.MenuItem, {
                id: "stream-settings",
                label: E.default.Messages.SCREENSHARE_STREAM_QUALITY,
                children: T
            }) : null, (0, i.jsx)(a.MenuItem, {
                id: "broadcast-settings",
                label: E.default.Messages.BROADCAST_SETTINGS,
                icon: u.default,
                action: () => (0, _.openBroadcastingPrivacySettingsModal)()
            })]
        })
    }
}