function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldDisableUserPresenceInChannel: function() {
            return o
        }
    });
    var r = n("935741");

    function o(e, t) {
        var n = r.default.getChannel(t);
        return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(function(t) {
            return t.id === e.id
        })
    }
}