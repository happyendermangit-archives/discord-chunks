function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        useCurrentUserCommunicationDisabled: function() {
            return o
        },
        userCommunicationDisabled: function() {
            return _
        }
    });
    var i = n("442837"),
        r = n("271383"),
        s = n("594174"),
        a = n("69882");

    function o(e) {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser());
        return d(null == t ? void 0 : t.id, e)
    }

    function l(e, t, n) {
        return null != t && null != e ? n.getMember(t, e) : null
    }

    function u(e) {
        var t;
        return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, a.isMemberCommunicationDisabled)(e)]
    }

    function d(e, t) {
        return u((0, i.useStateFromStores)([r.default], () => l(e, t, r.default), [t, e]))
    }

    function _(e, t) {
        return u(l(e, t, r.default))
    }
}