function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isReadableChannel: function() {
            return u
        },
        isReadableChannelId: function() {
            return d
        }
    });
    var a = n("233069"),
        l = n("42203"),
        s = n("957255"),
        i = n("49111");
    let r = i.BasicPermissions.VIEW_CHANNEL | i.BasicPermissions.READ_MESSAGE_HISTORY;

    function u(e) {
        return null != e && (e.type === i.ChannelTypes.DM || e.type === i.ChannelTypes.GROUP_DM || (0, a.isTextChannel)(e.type) && s.default.canBasicChannel(r, e))
    }

    function d(e) {
        return null != e && u(l.default.getBasicChannel(e))
    }
}