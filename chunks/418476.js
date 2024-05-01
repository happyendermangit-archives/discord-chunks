function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("786761"),
        r = n("901461"),
        a = n("981631");

    function s(e, t) {
        return !(null == t || e.author.id !== t || e.state !== a.MessageStates.SENT || (0, r.default)(e) || !(0, i.canEditMessageWithStickers)(e) || e.hasFlag(a.MessageFlags.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll()) && !0
    }
}