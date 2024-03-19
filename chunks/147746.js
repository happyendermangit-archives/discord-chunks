function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        uploadDebugLogFiles: function() {
            return g
        }
    });
    var a = n("872717"),
        i = n("890747"),
        s = n("42203"),
        l = n("821316"),
        o = n("605250"),
        r = n("836403"),
        u = n("825287"),
        d = n("929331"),
        c = n("49111");
    let f = new o.default("DebugUploadManager");
    async function g(e, t) {
        await m(e), await (0, i.uploadRtcLogFiles)(14680064, t)
    }
    async function m(e) {
        try {
            let t = l.stringify(),
                n = "",
                i = await (0, r.getPushNotificationLogs)().then(e => (0, r.serializePushNotificationLogs)(e, !0)),
                o = t.length + n.length + i.length;
            if (o > 9437184) {
                let e = 1 - 9437184 / o;
                t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), i = i.slice(i.length - Math.floor(i.length * e))
            }
            let f = null,
                g = "\n    ".concat((0, d.default)(f), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, u.default)(), void 0, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(s.default.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(i, "\n    ");
            l.clear();
            let m = c.Endpoints.DEBUG_LOG(e, "discord_app_logs");
            await a.default.post({
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