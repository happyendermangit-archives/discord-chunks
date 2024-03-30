function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("273829"),
        o = n("746373"),
        i = n("281767");

    function a(e, t) {
        return !(null == t || e.author.id !== t || e.state !== i.MessageStates.SENT || (0, o.default)(e) || !(0, r.canEditMessageWithStickers)(e) || e.hasFlag(i.MessageFlags.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll()) && !0
    }
}