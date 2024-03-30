function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        useCurrentUserCommunicationDisabled: function() {
            return l
        },
        userCommunicationDisabled: function() {
            return d
        }
    });
    var r = n("898511"),
        a = n("957808"),
        o = n("208454"),
        i = n("690954");

    function l(e) {
        var t = (0, r.useStateFromStores)([o.default], function() {
            return o.default.getCurrentUser()
        });
        return u(null == t ? void 0 : t.id, e)
    }

    function s(e, t, n) {
        return null != t && null != e ? n.getMember(t, e) : null
    }

    function c(e) {
        var t;
        return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, i.isMemberCommunicationDisabled)(e)]
    }

    function u(e, t) {
        return c((0, r.useStateFromStores)([a.default], function() {
            return s(e, t, a.default)
        }, [t, e]))
    }

    function d(e, t) {
        return c(s(e, t, a.default))
    }
}