function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        uploadRtcLogFiles: function() {
            return _
        }
    }), n("47120");
    var i = n("259443"),
        r = n("544891"),
        s = n("881052"),
        a = n("131951"),
        o = n("403182"),
        l = n("579806"),
        u = n("981631");
    let d = new i.Logger("uploadRtcLogFiles");
    async function _(e, t) {
        let n;
        if (null == l.default.fileManager.readLogFiles) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
        let i = [];
        try {
            i = (i = await l.default.fileManager.readLogFiles(e)).map(e => (0, o.transformNativeFile)(e, "application/octet-stream"))
        } catch (e) {
            throw d.error("uploadDebugFiles: read error '".concat(e, "'")), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.READ)
        }
        if (0 === i.length) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.NO_FILE);
        try {
            let e = {
                extraInfo: t,
                mediaEngineState: a.default.getState()
            };
            n = await r.HTTP.post({
                url: u.Endpoints.DEBUG_LOGS(u.DebugLogCategory.RTC),
                attachments: [...i.map(e => ({
                    name: e.name,
                    file: e,
                    filename: e.name
                })), {
                    name: "media_engine_state.json",
                    filename: "media_engine_state.json",
                    file: new Blob([JSON.stringify(e, void 0, 2)])
                }]
            })
        } catch (e) {
            if (429 === e.status) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.PROGRESS);
            throw d.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.UPLOAD)
        }
        let _ = i.length + 1;
        if ("success_count" in n.body && n.body.success_count !== _) throw d.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(_)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
        if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw d.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL)
    }
}