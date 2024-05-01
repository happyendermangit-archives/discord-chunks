function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAllChannelsRole: function() {
            return a
        },
        isChannelAccessDeniedBy: function() {
            return s
        },
        isChannelAccessGrantedBy: function() {
            return o
        }
    });
    var i = n("149765"),
        r = n("981631");

    function a(e) {
        return i.has(e.permissions, r.Permissions.VIEW_CHANNEL)
    }

    function s(e, t) {
        return null != t && (!!i.has(t.deny, r.Permissions.VIEW_CHANNEL) || e.isGuildVocal() && i.has(t.deny, r.Permissions.CONNECT))
    }

    function o(e, t) {
        return !(null == t || s(e, t)) && !!i.has(t.allow, r.Permissions.VIEW_CHANNEL) && (!e.isGuildVocal() || i.has(t.allow, r.Permissions.CONNECT))
    }
}