function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isReadableChannel: function() {
            return l
        },
        isReadableChannelId: function() {
            return u
        }
    });
    var i = n("131704"),
        r = n("592125"),
        s = n("496675"),
        a = n("981631");
    let o = a.BasicPermissions.VIEW_CHANNEL | a.BasicPermissions.READ_MESSAGE_HISTORY;

    function l(e) {
        return null != e && (e.type === a.ChannelTypes.DM || e.type === a.ChannelTypes.GROUP_DM || (0, i.isTextChannel)(e.type) && s.default.canBasicChannel(o, e))
    }

    function u(e) {
        return null != e && l(r.default.getBasicChannel(e))
    }
}