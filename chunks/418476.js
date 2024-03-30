function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("786761"),
        r = n("901461"),
        s = n("981631");

    function a(e, t) {
        return !(null == t || e.author.id !== t || e.state !== s.MessageStates.SENT || (0, r.default)(e) || !(0, i.canEditMessageWithStickers)(e) || e.hasFlag(s.MessageFlags.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll()) && !0
    }
}