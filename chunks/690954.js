function(e, t, n) {
    "use strict";

    function r(e) {
        return null != e && new Date(e) > new Date
    }

    function o(e) {
        return r(null == e ? void 0 : e.communicationDisabledUntil)
    }
    n.r(t), n.d(t, {
        isCommunicationDisabled: function() {
            return r
        },
        isMemberCommunicationDisabled: function() {
            return o
        }
    })
}