function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("358085");

    function r() {
        let e = "";
        return (0, i.isWindows)() ? e = "platform-win" : (0, i.isMac)() ? e = "platform-osx" : (0, i.isLinux)() ? e = "platform-linux" : (0, i.isWeb)() && (e = "platform-web"), __OVERLAY__ ? "".concat(e, " platform-overlay") : e
    }
}