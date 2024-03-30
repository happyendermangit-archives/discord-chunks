function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldDisableUserPresenceInChannel: function() {
            return r
        }
    });
    var i = n("592125");

    function r(e, t) {
        let n = i.default.getChannel(t);
        return null != n && e.bot && n.isPrivate() && null == n.rawRecipients.find(t => t.id === e.id)
    }
}