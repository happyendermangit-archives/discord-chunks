function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return o
        }
    });
    var n = i("255397"),
        l = i("292687"),
        a = i("974889"),
        u = i("393414"),
        r = i("191225"),
        d = i("420444"),
        s = i("49111");

    function o(t, e) {
        let i = l.default.getWindowOpen(s.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
        i ? (0, a.default)(s.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, u.transitionTo)(s.Routes.CHANNEL(t, e));
        let o = r.default.getSelfEmbeddedActivityForChannel(e);
        null != o && (0, d.default)(e) && n.default.selectParticipant(e, o.applicationId)
    }
}