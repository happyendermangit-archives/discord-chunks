function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("131900");
    t.default = {
        flushDNSCache: function() {
            r.default.flushDNSCache()
        },
        flushCookies: function() {
            return r.default.flushCookies()
        },
        setApplicationBackgroundColor: function(e) {
            r.default.setApplicationBackgroundColor(e)
        },
        setZoomFactor: function(e) {
            return r.default.setZoomFactor(e)
        },
        focus: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            r.default.focus(e, t)
        },
        submitLiveCrashReport: function(e) {
            return r.default.submitLiveCrashReport(e)
        },
        getPidFromDesktopSource: function(e) {
            return r.default.getPidFromDesktopSource(e)
        },
        getAudioPid: function(e) {
            return r.default.getAudioPid(e)
        },
        generateSessionFromPid: function(e) {
            return r.default.generateSessionFromPid(e)
        }
    }
}