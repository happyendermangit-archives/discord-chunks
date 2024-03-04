function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("692038"),
        s = n("913491"),
        r = n("49111");

    function a(e, t) {
        return !(null == t || e.author.id !== t || e.state !== r.MessageStates.SENT || (0, s.default)(e) || !(0, i.canEditMessageWithStickers)(e) || e.hasFlag(r.MessageFlags.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll()) && !0
    }
}