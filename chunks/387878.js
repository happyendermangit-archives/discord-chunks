function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("898511"),
        o = n("254061");

    function i() {
        return (0, r.useStateFromStores)([o.default], function() {
            return null != o.default.getRemoteSessionId() || null != o.default.getAwaitingRemoteSessionInfo()
        })
    }
}