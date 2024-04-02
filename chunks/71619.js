function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        useCurrentUserCommunicationDisabled: function() {
            return l
        },
        userCommunicationDisabled: function() {
            return d
        }
    });
    var a = n("442837"),
        r = n("271383"),
        i = n("594174"),
        s = n("69882");

    function l(e) {
        let t = (0, a.useStateFromStores)([i.default], () => i.default.getCurrentUser());
        return c(null == t ? void 0 : t.id, e)
    }

    function o(e, t, n) {
        return null != t && null != e ? n.getMember(t, e) : null
    }

    function u(e) {
        var t;
        return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, s.isMemberCommunicationDisabled)(e)]
    }

    function c(e, t) {
        return u((0, a.useStateFromStores)([r.default], () => o(e, t, r.default), [t, e]))
    }

    function d(e, t) {
        return u(o(e, t, r.default))
    }
}