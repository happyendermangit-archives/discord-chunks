function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isReadableChannel: function() {
            return s
        },
        isReadableChannelId: function() {
            return l
        }
    });
    var r = n("569492"),
        o = n("935741"),
        i = n("29884"),
        a = n("281767"),
        u = a.BasicPermissions.VIEW_CHANNEL | a.BasicPermissions.READ_MESSAGE_HISTORY;

    function s(e) {
        return null != e && (e.type === a.ChannelTypes.DM || e.type === a.ChannelTypes.GROUP_DM || (0, r.isTextChannel)(e.type) && i.default.canBasicChannel(u, e))
    }

    function l(e) {
        return null != e && s(o.default.getBasicChannel(e))
    }
}