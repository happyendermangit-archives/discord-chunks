function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAllChannelsRole: function() {
            return s
        },
        isChannelAccessDeniedBy: function() {
            return a
        },
        isChannelAccessGrantedBy: function() {
            return o
        }
    });
    var i = n("316693"),
        r = n("49111");

    function s(e) {
        return i.default.has(e.permissions, r.Permissions.VIEW_CHANNEL)
    }

    function a(e, t) {
        return null != t && (!!i.default.has(t.deny, r.Permissions.VIEW_CHANNEL) || e.isGuildVocal() && i.default.has(t.deny, r.Permissions.CONNECT))
    }

    function o(e, t) {
        return !(null == t || a(e, t)) && !!i.default.has(t.allow, r.Permissions.VIEW_CHANNEL) && (!e.isGuildVocal() || i.default.has(t.allow, r.Permissions.CONNECT))
    }
}