function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        reportFalsePositive: function() {
            return r
        },
        reportFailedSendFalsePositive: function() {
            return a
        },
        sendMessagesForScanning: function() {
            return o
        },
        sendMultiChannelMessagesForScanning: function() {
            return l
        }
    });
    var i = n("872717"),
        s = n("49111");

    function r(e, t, n, r) {
        return i.HTTP.post({
            url: s.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
            body: {
                channel_id: e,
                message_id: t,
                attachment_ids: n,
                embed_ids: r
            }
        })
    }

    function a(e, t, n, r) {
        return i.HTTP.post({
            url: s.Endpoints.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
            body: {
                channel_id: e,
                message_id: t,
                attachment_ids: n,
                filenames: r
            }
        })
    }

    function o(e, t) {
        return i.HTTP.patch({
            url: s.Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
            body: {
                message_ids: t
            }
        })
    }

    function l(e) {
        let t = e.map(e => ({
            channel_id: e.channel_id,
            message_id: e.id
        }));
        return i.HTTP.patch({
            url: s.Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
            body: {
                messages: t
            }
        })
    }
}