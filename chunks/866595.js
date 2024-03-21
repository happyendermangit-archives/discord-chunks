function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAllChannelsRole: function() {
            return r
        },
        isChannelAccessDeniedBy: function() {
            return a
        },
        isChannelAccessGrantedBy: function() {
            return o
        }
    });
    var i = n("316693"),
        s = n("49111");

    function r(e) {
        return i.has(e.permissions, s.Permissions.VIEW_CHANNEL)
    }

    function a(e, t) {
        return null != t && (!!i.has(t.deny, s.Permissions.VIEW_CHANNEL) || e.isGuildVocal() && i.has(t.deny, s.Permissions.CONNECT))
    }

    function o(e, t) {
        return !(null == t || a(e, t)) && !!i.has(t.allow, s.Permissions.VIEW_CHANNEL) && (!e.isGuildVocal() || i.has(t.allow, s.Permissions.CONNECT))
    }
}