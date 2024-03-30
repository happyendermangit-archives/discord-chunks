function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e) {
        var t;
        return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & r.UserFlags.STAFF) === r.UserFlags.STAFF || (null == e ? void 0 : e.personal_connection_id) != null
    }
}