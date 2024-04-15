function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        uploadDebugLogFiles: function() {
            return I
        }
    });
    var i = n("544891"),
        r = n("552871"),
        s = n("283080"),
        a = n("592125"),
        o = n("569611"),
        l = n("710845"),
        u = n("705646"),
        d = n("104639"),
        _ = n("691895"),
        c = n("981631");
    let E = new l.default("DebugUploadManager");
    async function I(e, t) {
        await T(e), await (0, r.uploadRtcLogFiles)(14680064, t)
    }
    async function T(e) {
        try {
            let t = o.stringify(),
                n = "",
                r = await (0, u.getPushNotificationLogs)().then(e => (0, u.serializePushNotificationLogs)(e, !0)),
                l = t.length + n.length + r.length;
            if (l > 9437184) {
                let e = 1 - 9437184 / l;
                t = t.slice(t.length - Math.floor(t.length * e)), n = n.slice(n.length - Math.floor(n.length * e)), r = r.slice(r.length - Math.floor(r.length * e))
            }
            let E = null,
                I = "\n    ".concat((0, _.default)(E), "\n\n    ").concat((0, s.serializeComponentRenderAverages)(), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, d.default)(), void 0, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(a.default.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(r, "\n    ");
            o.clear();
            let T = c.Endpoints.DEBUG_LOG(e, "discord_app_logs");
            await i.HTTP.post({
                url: T,
                body: I,
                retries: 3,
                headers: {
                    "Content-Type": "text/plain"
                },
                oldFormErrors: !0
            })
        } catch (e) {
            E.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
        }
    }
}