function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("898511"),
        o = n("208454"),
        i = n("830721"),
        a = n("281767");

    function u() {
        return (0, r.useStateFromStores)([o.default], function() {
            return i.default.canUseIncreasedMessageLength(o.default.getCurrentUser())
        }) ? a.MAX_MESSAGE_LENGTH_PREMIUM : a.MAX_MESSAGE_LENGTH
    }
}