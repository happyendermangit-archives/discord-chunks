function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("442837"),
        r = n("594174"),
        a = n("74538"),
        s = n("981631");

    function o() {
        return (0, i.useStateFromStores)([r.default], () => a.default.canUseIncreasedMessageLength(r.default.getCurrentUser())) ? s.MAX_MESSAGE_LENGTH_PREMIUM : s.MAX_MESSAGE_LENGTH
    }
}