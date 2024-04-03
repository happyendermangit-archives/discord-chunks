function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QUEST_COMPLETED_BADGE: function() {
            return l
        },
        default: function() {
            return d
        }
    });
    var i = n("399606"),
        r = n("695346"),
        s = n("246946"),
        a = n("594174"),
        o = n("689938");
    let l = "quest_completed",
        u = "legacy_username";

    function d(e) {
        var t;
        let n = r.LegacyUsernameDisabled.useSetting(),
            l = (0, i.useStateFromStores)([a.default], () => a.default.getCurrentUser()),
            d = (0, i.useStateFromStores)([s.default], () => s.default.hidePersonalInformation);
        if (null == e) return [];
        let _ = null !== (t = null == e ? void 0 : e.getBadges()) && void 0 !== t ? t : [];
        return null != l && l.id === e.userId && n && (_ = _.filter(e => e.id !== u)), d && (_ = _.map(e => ({
            ...e,
            description: e.id === u ? o.default.Messages.STREAMER_MODE_ENABLED : e.description
        }))), _
    }
}