function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("472015"),
        o = n("361729");

    function i(e) {
        var t = o.default.getState();
        return t.useActivityUrlOverride && null != t.activityUrlOverride && "" !== t.activityUrlOverride ? t.activityUrlOverride : r.default.inTestModeForEmbeddedApplication(e) ? r.default.testModeOriginURL : function(e) {
            var t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
            return null == t ? null : "https://".concat(e, ".").concat(t)
        }(e)
    }
}