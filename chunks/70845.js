function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("65597"), n("845579"), n("957255");
    var l = n("49111");

    function i(e, t) {
        switch (e) {
            case l.SpoilerRenderSetting.ALWAYS:
                return !0;
            case l.SpoilerRenderSetting.IF_MODERATOR:
                return t;
            case l.SpoilerRenderSetting.ON_CLICK:
            default:
                return !1
        }
    }
}