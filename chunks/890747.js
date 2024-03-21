function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        uploadRtcLogFiles: function() {
            return c
        }
    }), n("222007");
    var i = n("811022"),
        a = n("872717"),
        s = n("448993"),
        l = n("42887"),
        o = n("254490"),
        r = n("49671"),
        u = n("49111");
    let d = new i.default("uploadRtcLogFiles");
    async function c(e, t) {
        let n;
        if (null == r.default.fileManager.readLogFiles) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
        let i = [];
        try {
            i = (i = await r.default.fileManager.readLogFiles(e)).map(e => (0, o.transformNativeFile)(e, "application/octet-stream"))
        } catch (e) {
            throw d.error("uploadDebugFiles: read error '".concat(e, "'")), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.READ)
        }
        if (0 === i.length) throw new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.NO_FILE);
        try {
            let e = {
                extraInfo: t,
                mediaEngineState: l.default.getState()
            };
            n = await a.HTTP.post({
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
        let c = i.length + 1;
        if ("success_count" in n.body && n.body.success_count !== c) throw d.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(c)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL);
        if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw d.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new s.UploadVoiceDebugLogsError(s.UploadErrorCodes.GENERAL)
    }
}