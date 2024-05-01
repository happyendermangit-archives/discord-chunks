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
        a = n("496675"),
        s = n("981631");
    let o = s.BasicPermissions.VIEW_CHANNEL | s.BasicPermissions.READ_MESSAGE_HISTORY;

    function l(e) {
        return null != e && (e.type === s.ChannelTypes.DM || e.type === s.ChannelTypes.GROUP_DM || (0, i.isTextChannel)(e.type) && a.default.canBasicChannel(o, e))
    }

    function u(e) {
        return null != e && l(r.default.getBasicChannel(e))
    }
}