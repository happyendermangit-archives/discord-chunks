function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("442837"),
        r = n("258609");

    function s() {
        return (0, i.useStateFromStores)([r.default], () => null != r.default.getRemoteSessionId() || null != r.default.getAwaitingRemoteSessionInfo())
    }
}