function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchValidContentScanVersion: function() {
            return u
        },
        reportFailedSendFalsePositive: function() {
            return s
        },
        reportFalsePositive: function() {
            return a
        },
        sendMessagesForScanning: function() {
            return o
        },
        sendMultiChannelMessagesForScanning: function() {
            return l
        }
    });
    var i = n("544891"),
        r = n("981631");

    function a(e, t, n, a) {
        return i.HTTP.post({
            url: r.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
            body: {
                channel_id: e,
                message_id: t,
                attachment_ids: n,
                embed_ids: a
            }
        })
    }

    function s(e, t, n, a) {
        return i.HTTP.post({
            url: r.Endpoints.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
            body: {
                channel_id: e,
                message_id: t,
                attachment_ids: n,
                filenames: a
            }
        })
    }

    function o(e, t) {
        return i.HTTP.patch({
            url: r.Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
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
            url: r.Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
            body: {
                messages: t
            }
        })
    }

    function u() {
        return i.HTTP.get({
            url: r.Endpoints.EXPLICIT_MEDIA_GET_VALID_CONTENT_SCAN_VERSION
        })
    }
}