function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        uploadDebugLogFiles: function() {
            return g
        }
    });
    var i = n("872717"),
        a = n("890747"),
        l = n("42203"),
        s = n("821316"),
        o = n("605250"),
        r = n("836403"),
        u = n("825287"),
        d = n("929331"),
        c = n("49111");
    let f = new o.default("DebugUploadManager");
    async function g(e, t) {
        await m(e), await (0, a.uploadRtcLogFiles)(14680064, t)
    }
    async function m(e) {
        try {
            let t = s.stringify(),
                n = "",
                a = await (0, r.getPushNotificationLogs)().then(e => (0, r.serializePushNotificationLogs)(e, !0)),
                o = t.length + n.length + a.length;
            if (o > 9437184) {
                let e = 1 - 9437184 / o;
                t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), a = a.slice(a.length - Math.floor(a.length * e))
            }
            let f = null,
                g = "\n    ".concat((0, d.default)(f), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, u.default)(), void 0, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(l.default.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(a, "\n    ");
            s.clear();
            let m = c.Endpoints.DEBUG_LOG(e, "discord_app_logs");
            await i.default.post({
                url: m,
                body: g,
                retries: 3,
                headers: {
                    "Content-Type": "text/plain"
                },
                oldFormErrors: !0
            })
        } catch (e) {
            f.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
        }
    }
}