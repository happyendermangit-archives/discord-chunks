function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("65597"),
        i = n("845579"),
        a = n("102985"),
        s = n("697218"),
        r = n("782340");
    let o = "legacy_username";

    function u(e) {
        var t;
        let n = i.LegacyUsernameDisabled.useSetting(),
            u = (0, l.default)([s.default], () => s.default.getCurrentUser()),
            d = (0, l.default)([a.default], () => a.default.hidePersonalInformation);
        if (null == e) return [];
        let c = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
        return null != u && u.id === e.userId && n && (c = c.filter(e => e.id !== o)), d && (c = c.map(e => ({
            ...e,
            description: e.id === o ? r.default.Messages.STREAMER_MODE_ENABLED : e.description
        }))), c
    }
}