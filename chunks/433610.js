function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAllChannelsRole: function() {
            return i
        },
        isChannelAccessDeniedBy: function() {
            return a
        },
        isChannelAccessGrantedBy: function() {
            return u
        }
    });
    var r = n("22287"),
        o = n("281767");

    function i(e) {
        return r.has(e.permissions, o.Permissions.VIEW_CHANNEL)
    }

    function a(e, t) {
        return null != t && (!!r.has(t.deny, o.Permissions.VIEW_CHANNEL) || e.isGuildVocal() && r.has(t.deny, o.Permissions.CONNECT))
    }

    function u(e, t) {
        return !(null == t || a(e, t)) && !!r.has(t.allow, o.Permissions.VIEW_CHANNEL) && (!e.isGuildVocal() || r.has(t.allow, o.Permissions.CONNECT))
    }
}