function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("37295"), n("53867"), n("29884");
    var r = n("281767");

    function o(e, t) {
        switch (e) {
            case r.SpoilerRenderSetting.ALWAYS:
                return !0;
            case r.SpoilerRenderSetting.IF_MODERATOR:
                return t;
            case r.SpoilerRenderSetting.ON_CLICK:
            default:
                return !1
        }
    }
}