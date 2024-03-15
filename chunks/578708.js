function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return u
        }
    });
    var n = i("292687"),
        l = i("974889"),
        a = i("393414"),
        r = i("49111");

    function u(t, e) {
        let i = n.default.getWindowOpen(r.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
        i ? (0, l.default)(r.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, a.transitionTo)(r.Routes.CHANNEL(t, e))
    }
}