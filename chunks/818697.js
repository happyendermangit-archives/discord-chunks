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
    var i = n("233069"),
        s = n("42203"),
        r = n("957255"),
        a = n("49111");
    let o = a.BasicPermissions.VIEW_CHANNEL | a.BasicPermissions.READ_MESSAGE_HISTORY;

    function l(e) {
        return null != e && (e.type === a.ChannelTypes.DM || e.type === a.ChannelTypes.GROUP_DM || (0, i.isTextChannel)(e.type) && r.default.canBasicChannel(o, e))
    }

    function u(e) {
        return null != e && l(s.default.getBasicChannel(e))
    }
}