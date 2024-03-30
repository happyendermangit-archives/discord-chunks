function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserDefenses: function() {
            return a
        }
    });
    var r = n("851743"),
        o = n("56300");

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = "XSSDefenses" in e.Messages ? e.Messages.XSSDefenses : e.Messages;
        null != n.SELF_XSS_HEADER && (console.log("%c".concat(n.SELF_XSS_HEADER), "color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;"), console.log("%c".concat(n.SELF_XSS_LINE_1), "font-size: 16px;"), console.log("%c".concat(n.SELF_XSS_LINE_2), "font-size: 18px; font-weight: bold; color: red;"), t >= 4 ? (console.log("%c".concat(n.SELF_XSS_LINE_3), "font-size: 16px;"), console.log("%c".concat(n.SELF_XSS_LINE_4.format({
            url: "".concat(location.protocol).concat(window.GLOBAL_ENV.MARKETING_ENDPOINT, "/jobs")
        })), "font-size: 16px;")) : setTimeout(function() {
            return i(e, t + 1)
        }, 1e3))
    }

    function a(e, t, n) {
        if (null == n || "0.0.0" !== n.remoteApp.getVersion()) {
            var a = new r.DevToolsListener;
            if (null != n) {
                if (null != n.window.setDevtoolsCallbacks) n.window.setDevtoolsCallbacks(function() {
                    t.hideToken(), i(e)
                }, function() {
                    t.showToken()
                });
                else {
                    var u = n.window.webContents;
                    u.removeAllListeners("devtools-opened"), u.on("devtools-opened", function() {
                        t.hideToken(), i(e)
                    }), u.on("devtools-closed", t.showToken)
                }
            } else !o.isMobile && !o.isTablet && a.on("changed", function(n) {
                n.open ? (t.hideToken(), i(e)) : t.showToken()
            });
            window.addEventListener("beforeunload", function(e) {
                e.isTrusted && t.showToken()
            })
        }
    }
}