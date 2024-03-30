function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("442837"),
        r = n("594174"),
        s = n("74538"),
        a = n("981631");

    function o() {
        return (0, i.useStateFromStores)([r.default], () => s.default.canUseIncreasedMessageLength(r.default.getCurrentUser())) ? a.MAX_MESSAGE_LENGTH_PREMIUM : a.MAX_MESSAGE_LENGTH
    }
}