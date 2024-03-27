function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("789020");
    var i = n("981631");

    function r(e) {
        var t;
        return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & i.UserFlags.STAFF) === i.UserFlags.STAFF || (null == e ? void 0 : e.personal_connection_id) != null
    }
}