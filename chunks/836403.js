function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        serializePushNotificationLogs: function() {
            return l
        },
        getPushNotificationLogs: function() {
            return o
        }
    });
    var a = n("95410"),
        i = n("271938"),
        s = n("49111");

    function l(e, t) {
        if (0 === e.length) return "No logs";
        let n = a.default.get(s.DEVICE_TOKEN),
            i = a.default.get(s.DEVICE_VOIP_TOKEN),
            l = e.map(e => {
                let n = e.silent ? "Silent" : "Displayed",
                    a = t ? "".concat(e.channelId, " - ").concat(e.messageId) : "".concat(e.title, " - ").concat(e.content);
                return "".concat(new Date(e.receivedTimestamp).toISOString(), " [").concat(e.type, "] ").concat(n, " - ").concat(a)
            }).join("\n");
        return "".concat(null != n ? "Device Token: ".concat(n) : "", "\n").concat(null != i ? "Device Voip Token: ".concat(i) : "", "\n\n").concat(l)
    }
    async function o() {
        let e = i.default.getId(),
            t = [];
        return t
    }
}