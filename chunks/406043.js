function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCurrentUserCommunicationDisabled: function() {
            return o
        },
        default: function() {
            return d
        },
        userCommunicationDisabled: function() {
            return c
        }
    });
    var l = n("446674"),
        a = n("26989"),
        u = n("697218"),
        i = n("509");

    function o(e) {
        let t = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser());
        return d(null == t ? void 0 : t.id, e)
    }

    function s(e, t, n) {
        return null != t && null != e ? n.getMember(t, e) : null
    }

    function r(e) {
        var t;
        return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, i.isMemberCommunicationDisabled)(e)]
    }

    function d(e, t) {
        let n = (0, l.useStateFromStores)([a.default], () => s(e, t, a.default), [t, e]);
        return r(n)
    }

    function c(e, t) {
        let n = s(e, t, a.default);
        return r(n)
    }
}