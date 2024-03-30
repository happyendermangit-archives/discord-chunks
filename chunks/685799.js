function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchValidContentScanVersion: function() {
            return l
        },
        reportFailedSendFalsePositive: function() {
            return a
        },
        reportFalsePositive: function() {
            return i
        },
        sendMessagesForScanning: function() {
            return u
        },
        sendMultiChannelMessagesForScanning: function() {
            return s
        }
    });
    var r = n("967888"),
        o = n("281767");

    function i(e, t, n, i) {
        return r.HTTP.post({
            url: o.Endpoints.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
            body: {
                channel_id: e,
                message_id: t,
                attachment_ids: n,
                embed_ids: i
            }
        })
    }

    function a(e, t, n, i) {
        return r.HTTP.post({
            url: o.Endpoints.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
            body: {
                channel_id: e,
                message_id: t,
                attachment_ids: n,
                filenames: i
            }
        })
    }

    function u(e, t) {
        return r.HTTP.patch({
            url: o.Endpoints.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
            body: {
                message_ids: t
            }
        })
    }

    function s(e) {
        var t = e.map(function(e) {
            return {
                channel_id: e.channel_id,
                message_id: e.id
            }
        });
        return r.HTTP.patch({
            url: o.Endpoints.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
            body: {
                messages: t
            }
        })
    }

    function l() {
        return r.HTTP.get({
            url: o.Endpoints.EXPLICIT_MEDIA_GET_VALID_CONTENT_SCAN_VERSION
        })
    }
}