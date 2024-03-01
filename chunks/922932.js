function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("50885"),
        r = {
            flushDNSCache() {
                i.default.flushDNSCache()
            },
            flushCookies: () => i.default.flushCookies(),
            setApplicationBackgroundColor(e) {
                i.default.setApplicationBackgroundColor(e)
            },
            setZoomFactor: e => i.default.setZoomFactor(e),
            focus(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                i.default.focus(e, t)
            },
            submitLiveCrashReport: e => i.default.submitLiveCrashReport(e),
            getPidFromDesktopSource: e => i.default.getPidFromDesktopSource(e),
            getAudioPid: e => i.default.getAudioPid(e),
            generateSessionFromPid: e => i.default.generateSessionFromPid(e)
        }
}