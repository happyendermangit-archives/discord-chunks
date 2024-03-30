function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("813970"),
        u = n("955297"),
        s = n("73013"),
        l = n("358425"),
        c = n("374550"),
        f = n("839433"),
        d = n("281767"),
        _ = n("941504");

    function E(e) {
        var t = e.onClose,
            n = (0, a.useAppContext)(),
            E = (0, o.useStateFromStores)([s.default], function() {
                return s.default.getCurrentUserActiveStream()
            }),
            p = (0, u.default)(E, n);
        return r.createElement(i.Menu, {
            onSelect: d.NOOP_NULL,
            navId: "manage-broadcast",
            onClose: t,
            "aria-label": _.default.Messages.SETTINGS
        }, c.isPlatformEmbedded && null != E ? r.createElement(i.MenuItem, {
            id: "stream-settings",
            label: _.default.Messages.SCREENSHARE_STREAM_QUALITY
        }, p) : null, r.createElement(i.MenuItem, {
            id: "broadcast-settings",
            label: _.default.Messages.BROADCAST_SETTINGS,
            icon: l.default,
            action: function() {
                return (0, f.openBroadcastingPrivacySettingsModal)()
            }
        }))
    }
}