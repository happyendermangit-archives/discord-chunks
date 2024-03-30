function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        uploadDebugLogFiles: function() {
            return E
        }
    });
    var i = n("544891"),
        r = n("552871"),
        s = n("592125"),
        a = n("569611"),
        o = n("710845"),
        l = n("705646"),
        u = n("104639"),
        d = n("691895"),
        _ = n("981631");
    let c = new o.default("DebugUploadManager");
    async function E(e, t) {
        await I(e), await (0, r.uploadRtcLogFiles)(14680064, t)
    }
    async function I(e) {
        try {
            let t = a.stringify(),
                n = "",
                r = await (0, l.getPushNotificationLogs)().then(e => (0, l.serializePushNotificationLogs)(e, !0)),
                o = t.length + n.length + r.length;
            if (o > 9437184) {
                let e = 1 - 9437184 / o;
                t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), r = r.slice(r.length - Math.floor(r.length * e))
            }
            let c = null,
                E = "\n    ".concat((0, d.default)(c), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, u.default)(), void 0, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(s.default.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(r, "\n    ");
            a.clear();
            let I = _.Endpoints.DEBUG_LOG(e, "discord_app_logs");
            await i.HTTP.post({
                url: I,
                body: E,
                retries: 3,
                headers: {
                    "Content-Type": "text/plain"
                },
                oldFormErrors: !0
            })
        } catch (e) {
            c.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
        }
    }
}