function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRedirectPath: function() {
            return u
        }
    });
    var s = n("735250");
    n("470079");
    var a = n("266067"),
        l = n("860911"),
        i = n("981631"),
        r = n("188785");

    function u() {
        let e = location.pathname + location.search;
        return r.CONFERENCE_MODE_ENABLED ? i.Routes.REGISTER : (0, l.getLoginPath)(e, !1)
    }
    t.default = function() {
        return (0, s.jsx)(a.Redirect, {
            to: u()
        })
    }
}