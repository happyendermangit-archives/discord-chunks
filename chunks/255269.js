function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("399606"), n("695346"), n("496675");
    var i = n("981631");

    function r(e, t) {
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