function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        UserDefenses: function() {
            return r
        }
    });
    var t = E("811335"),
        o = E("394846");

    function n(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            E = "" !== e.Messages.XSSDefenses ? e.Messages.XSSDefenses : e.Messages;
        null != E.SELF_XSS_HEADER && (console.log("%c".concat(E.SELF_XSS_HEADER), "color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;"), console.log("%c".concat(E.SELF_XSS_LINE_1), "font-size: 16px;"), console.log("%c".concat(E.SELF_XSS_LINE_2), "font-size: 18px; font-weight: bold; color: red;"), _ >= 4 ? (console.log("%c".concat(E.SELF_XSS_LINE_3), "font-size: 16px;"), console.log("%c".concat(E.SELF_XSS_LINE_4.format({
            url: "".concat(location.protocol).concat(window.GLOBAL_ENV.MARKETING_ENDPOINT, "/jobs")
        })), "font-size: 16px;")) : setTimeout(() => n(e, _ + 1), 1e3))
    }

    function r(e, _, E) {
        if (null != E && "0.0.0" === E.remoteApp.getVersion()) return;
        let r = new t.DevToolsListener;
        if (null != E) {
            if (null != E.window.setDevtoolsCallbacks) E.window.setDevtoolsCallbacks(() => {
                _.hideToken(), n(e)
            }, () => {
                _.showToken()
            });
            else {
                let t = E.window.webContents;
                t.removeAllListeners("devtools-opened"), t.on("devtools-opened", () => {
                    _.hideToken(), n(e)
                }), t.on("devtools-closed", _.showToken)
            }
        } else !o.isMobile && !o.isTablet && r.on("changed", E => {
            let {
                open: t
            } = E;
            t ? (_.hideToken(), n(e)) : _.showToken()
        });
        window.addEventListener("beforeunload", e => {
            e.isTrusted && _.showToken()
        })
    }
}