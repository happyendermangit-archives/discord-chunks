function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRedirectPath: function() {
            return u
        },
        default: function() {
            return o
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("803182"),
        l = n("447669"),
        r = n("49111"),
        i = n("492397");

    function u() {
        let e = location.pathname + location.search,
            t = i.CONFERENCE_MODE_ENABLED ? r.Routes.REGISTER : (0, l.getLoginPath)(e, !1);
        return t
    }
    var o = function() {
        return (0, s.jsx)(a.Redirect, {
            to: u()
        })
    }
}