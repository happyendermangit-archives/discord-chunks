function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRedirectPath: function() {
            return s
        }
    });
    var l = n("735250");
    n("470079");
    var a = n("266067"),
        u = n("860911"),
        r = n("981631"),
        i = n("188785");

    function s() {
        let e = location.pathname + location.search;
        return i.CONFERENCE_MODE_ENABLED ? r.Routes.REGISTER : (0, u.getLoginPath)(e, !1)
    }
    t.default = function() {
        return (0, l.jsx)(a.Redirect, {
            to: s()
        })
    }
}