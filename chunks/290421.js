function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("399606"),
        r = n("695346"),
        s = n("246946"),
        a = n("594174"),
        o = n("689938");
    let l = "legacy_username";

    function u(e) {
        var t;
        let n = r.LegacyUsernameDisabled.useSetting(),
            u = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
            d = (0, i.useStateFromStores)([s.default], () => s.default.hidePersonalInformation);
        if (null == e) return [];
        let _ = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
        return null != u && u.id === e.userId && n && (_ = _.filter(e => e.id !== l)), d && (_ = _.map(e => ({
            ...e,
            description: e.id === l ? o.default.Messages.STREAMER_MODE_ENABLED : e.description
        }))), _
    }
}