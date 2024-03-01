function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return r
        }
    });
    var n = i("292687"),
        l = i("974889"),
        a = i("393414"),
        u = i("49111");

    function r(e, t) {
        let i = n.default.getWindowOpen(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
        i ? (0, l.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT) : (0, a.transitionTo)(u.Routes.CHANNEL(e, t))
    }
}