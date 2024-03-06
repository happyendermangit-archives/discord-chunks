function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        uploadDebugLogFiles: function() {
            return m
        },
        getBlindIds: function() {
            return E
        },
        uploadCallscopeLogs: function() {
            return L
        },
        uploadCallscopeLogFiles: function() {
            return w
        }
    }), n("222007");
    var o = n("872717"),
        a = n("869586"),
        l = n("49671"),
        r = n("890747"),
        i = n("42203"),
        c = n("254490"),
        s = n("821316"),
        u = n("605250"),
        d = n("836403"),
        g = n("825287"),
        p = n("929331"),
        f = n("49111");
    let h = new u.default("DebugUploadManager");
    async function m(t, e) {
        await y(t), await (0, r.uploadRtcLogFiles)(14680064, e)
    }
    class b {
        static getTrimmedFilename(t) {
            let e = /^channel\.\d+\.(.+)$/.exec(t);
            return null == e || e.length < 2 || null == e[1] ? "unknown" : e[1]
        }
        static getChannelId(t) {
            let e = /channel\.(\d+)\..+(?:tsi|tsd)$/.exec(t);
            return null == e || e.length < 2 || null == e[1] ? "unknown" : e[1]
        }
    }
    async function E(t, e, n) {
        let o = new a.BlindID(n),
            l = await o.blind(t),
            r = await o.blind(e);
        return {
            blindChannelId: l,
            blindUserId: r
        }
    }
    async function L(t, e, n, o) {
        var a;
        if (!__OVERLAY__) {
            if ((null === l.default || void 0 === l.default ? void 0 : null === (a = l.default.fileManager) || void 0 === a ? void 0 : a.getCallscopeLogFiles) == null) {
                h.error("uploadCallscopeLogs: Upload RTC logs failed because native is out of date (getCallscopeLogFiles).");
                return
            }
            if (!("crypto" in window)) {
                h.error("uploadCallscopeLogs: Upload RTC logs failed because crypto is not supported.");
                return
            }
            try {
                let {
                    blindChannelId: a,
                    blindUserId: r
                } = await E(t, e, n), i = "channel blind(".concat(t, "): ").concat(a, ", user blind(").concat(e, "): ").concat(r);
                h.info("uploadCallscopeLogs: Uploading callscope logs for context: ".concat(o, ", ").concat(i));
                let c = await l.default.fileManager.getCallscopeLogFiles(a);
                await w(r, c)
            } catch (t) {
                h.error("uploadCallscopeLogs: Error uploading logs ".concat(null == t ? void 0 : t.text), t)
            }
        }
    }
    async function w(t, e) {
        try {
            if (0 === e.length) {
                h.error("uploadCallscopeLogFiles: No files found.");
                return
            }
            for (let n of e.map(t => c.transformNativeFile(t, "application/octet-stream"))) {
                h.log("uploadCallscopeLogFiles: Uploading ".concat(n.name));
                let e = b.getChannelId(n.name);
                try {
                    let a = await o.default.post({
                            url: f.Endpoints.CALLSCOPE_LOGS(e, t, b.getTrimmedFilename(n.name)),
                            headers: {
                                "Content-Type": "application/octet-stream"
                            },
                            body: n
                        }),
                        l = a.status >= 200 && a.status <= 299;
                    !l && h.error("uploadCallscopeLogFiles: Failed to upload ".concat(n.name, " with status ").concat(a.status, ", ").concat(a.text))
                } catch (t) {
                    h.error("uploadCallscopeLogFiles: Error uploading file ".concat(n.name, " ").concat(null == t ? void 0 : t.text), t)
                }
            }
        } catch (t) {
            h.error("uploadCallscopeLogFiles: Error uploading logs ".concat(null == t ? void 0 : t.text), t)
        }
    }
    async function y(t) {
        try {
            let e = s.stringify(),
                n = "",
                a = await (0, d.getPushNotificationLogs)().then(t => (0, d.serializePushNotificationLogs)(t, !0)),
                l = e.length + n.length + a.length;
            if (l > 9437184) {
                let t = 1 - 9437184 / l;
                e = e.slice(e.length - Math.floor(e.length * t)), n = n.slice(n.length - Math.floor(n.length * t)), a = a.slice(a.length - Math.floor(a.length * t))
            }
            let r = null,
                c = "\n    ".concat((0, p.default)(r), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, g.default)(), void 0, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(i.default.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ").concat(e, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(a, "\n    ");
            s.clear();
            let u = f.Endpoints.DEBUG_LOG(t, "discord_app_logs");
            await o.default.post({
                url: u,
                body: c,
                retries: 3,
                headers: {
                    "Content-Type": "text/plain"
                },
                oldFormErrors: !0
            })
        } catch (t) {
            h.error("uploadAppLogFiles: upload app log files error ".concat(t.message))
        }
    }
}