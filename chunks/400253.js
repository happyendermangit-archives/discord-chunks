function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("374550");

    function o() {
        var e = "";
        return (0, r.isWindows)() ? e = "platform-win" : (0, r.isMac)() ? e = "platform-osx" : (0, r.isLinux)() ? e = "platform-linux" : (0, r.isWeb)() && (e = "platform-web"), __OVERLAY__ ? "".concat(e, " platform-overlay") : e
    }
}