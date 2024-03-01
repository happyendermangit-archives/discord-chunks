function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        uploadRtcLogFiles: function() {
            return d
        }
    }), n("222007");
    var o = n("811022"),
        a = n("872717"),
        l = n("448993"),
        r = n("42887"),
        i = n("254490"),
        c = n("49671"),
        s = n("49111");
    let u = new o.default("uploadRtcLogFiles");
    async function d(t, e) {
        let n;
        if (null == c.default.fileManager.readLogFiles) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL);
        let o = [];
        try {
            o = (o = await c.default.fileManager.readLogFiles(t)).map(t => (0, i.transformNativeFile)(t, "application/octet-stream"))
        } catch (t) {
            throw u.error("uploadDebugFiles: read error '".concat(t, "'")), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.READ)
        }
        if (0 === o.length) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.NO_FILE);
        try {
            let t = {
                extraInfo: e,
                mediaEngineState: r.default.getState()
            };
            n = await a.default.post({
                url: s.Endpoints.DEBUG_LOGS(s.DebugLogCategory.RTC),
                attachments: [...o.map(t => ({
                    name: t.name,
                    file: t,
                    filename: t.name
                })), {
                    name: "media_engine_state.json",
                    filename: "media_engine_state.json",
                    file: new Blob([JSON.stringify(t, void 0, 2)])
                }]
            })
        } catch (t) {
            if (429 === t.status) throw new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.PROGRESS);
            throw u.error("Debug log upload error: status: ".concat(t.status, ", message: ").concat(t.message)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.UPLOAD)
        }
        let d = o.length + 1;
        if ("success_count" in n.body && n.body.success_count !== d) throw u.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(d)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL);
        if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw u.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new l.UploadVoiceDebugLogsError(l.UploadErrorCodes.GENERAL)
    }
}