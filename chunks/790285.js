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
    var i = n("149765"),
        r = n("981631");

    function s(e) {
        return i.has(e.permissions, r.Permissions.VIEW_CHANNEL)
    }

    function a(e, t) {
        return null != t && (!!i.has(t.deny, r.Permissions.VIEW_CHANNEL) || e.isGuildVocal() && i.has(t.deny, r.Permissions.CONNECT))
    }

    function o(e, t) {
        return !(null == t || a(e, t)) && !!i.has(t.allow, r.Permissions.VIEW_CHANNEL) && (!e.isGuildVocal() || i.has(t.allow, r.Permissions.CONNECT))
    }
}