function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("167726"),
        s = n("84460");

    function r(e) {
        let t = s.default.getState();
        return t.useActivityUrlOverride && null != t.activityUrlOverride && "" !== t.activityUrlOverride ? t.activityUrlOverride : i.default.inTestModeForEmbeddedApplication(e) ? i.default.testModeOriginURL : function(e) {
            let t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
            return null == t ? null : "https://".concat(e, ".").concat(t)
        }(e)
    }
}