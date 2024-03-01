function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var s = n("692038"),
        i = n("913491"),
        r = n("49111");

    function a(e, t) {
        return !(null == t || e.author.id !== t || e.state !== r.MessageStates.SENT || (0, i.default)(e) || !(0, s.canEditMessageWithStickers)(e) || e.hasFlag(r.MessageFlags.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll()) && !0
    }
}