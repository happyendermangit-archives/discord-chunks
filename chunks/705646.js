function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPushNotificationLogs: function() {
            return o
        },
        serializePushNotificationLogs: function() {
            return s
        }
    });
    var i = n("433517"),
        r = n("314897"),
        a = n("981631");

    function s(e, t) {
        if (0 === e.length) return "No logs";
        let n = i.Storage.get(a.DEVICE_TOKEN),
            r = i.Storage.get(a.DEVICE_VOIP_TOKEN),
            s = e.map(e => {
                let n = e.silent ? "Silent" : "Displayed",
                    i = t ? "".concat(e.channelId, " - ").concat(e.messageId) : "".concat(e.title, " - ").concat(e.content);
                return "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(n, " - ").concat(i)
            }).join("\n");
        return "".concat(null != n ? "Device Token: ".concat(n) : "", "\n").concat(null != r ? "Device Voip Token: ".concat(r) : "", "\n\n").concat(s)
    }
    async function o() {
        let e = r.default.getId();
        return []
    }
}