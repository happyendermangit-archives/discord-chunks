function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("118133"),
        o = n("423731"),
        i = n("972715"),
        a = n("163291"),
        u = n("632142"),
        s = n("224680"),
        l = n("281767");

    function c(e, t) {
        o.default.getWindowOpen(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? (0, i.default)(l.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, a.transitionTo)(l.Routes.CHANNEL(e, t));
        var n = u.default.getSelfEmbeddedActivityForChannel(t);
        null != n && (0, s.default)(t) && r.default.selectParticipant(t, n.applicationId)
    }
}