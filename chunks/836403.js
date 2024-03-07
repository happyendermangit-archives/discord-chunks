function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        serializePushNotificationLogs: function() {
            return s
        },
        getPushNotificationLogs: function() {
            return o
        }
    });
    var i = n("95410"),
        a = n("271938"),
        l = n("49111");

    function s(e, t) {
        if (0 === e.length) return "No logs";
        let n = i.default.get(l.DEVICE_TOKEN),
            a = i.default.get(l.DEVICE_VOIP_TOKEN),
            s = e.map(e => {
                let n = e.silent ? "Silent" : "Displayed",
                    i = t ? "".concat(e.channelId, " - ").concat(e.messageId) : "".concat(e.title, " - ").concat(e.content);
                return "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(n, " - ").concat(i)
            }).join("\n");
        return "".concat(null != n ? "Device Token: ".concat(n) : "", "\n").concat(null != a ? "Device Voip Token: ".concat(a) : "", "\n\n").concat(s)
    }
    async function o() {
        let e = a.default.getId(),
            t = [];
        return t
    }
}