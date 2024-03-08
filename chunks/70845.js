function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("65597"), n("845579"), n("957255");
    var i = n("49111");

    function l(e, t) {
        switch (e) {
            case i.SpoilerRenderSetting.ALWAYS:
                return !0;
            case i.SpoilerRenderSetting.IF_MODERATOR:
                return t;
            case i.SpoilerRenderSetting.ON_CLICK:
            default:
                return !1
        }
    }
}