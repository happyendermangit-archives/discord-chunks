function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("475179"),
        r = n("928518"),
        s = n("776862"),
        a = n("703656"),
        o = n("317381"),
        l = n("917107"),
        u = n("981631");

    function d(e, t) {
        r.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? (0, s.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, a.transitionTo)(u.Routes.CHANNEL(e, t));
        let n = o.default.getSelfEmbeddedActivityForChannel(t);
        null != n && (0, l.default)(t) && i.default.selectParticipant(t, n.applicationId)
    }
}