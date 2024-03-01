function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        createEventEnvelope: function() {
            return a
        },
        createSessionEnvelope: function() {
            return i
        }
    }), n("222007"), n("274635");
    var r = n("103787");

    function i(t, e, n, i) {
        let a = (0, r.getSdkMetadataForEnvelopeHeader)(n),
            s = {
                sent_at: new Date().toISOString(),
                ...a && {
                    sdk: a
                },
                ...!!i && {
                    dsn: (0, r.dsnToString)(e)
                }
            },
            o = "aggregates" in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t.toJSON()];
        return (0, r.createEnvelope)(s, [o])
    }

    function a(t, e, n, i) {
        var a, s;
        let o = (0, r.getSdkMetadataForEnvelopeHeader)(n),
            c = t.type && "replay_event" !== t.type ? t.type : "event";
        a = t, !(s = n && n.sdk) || (a.sdk = a.sdk || {}, a.sdk.name = a.sdk.name || s.name, a.sdk.version = a.sdk.version || s.version, a.sdk.integrations = [...a.sdk.integrations || [], ...s.integrations || []], a.sdk.packages = [...a.sdk.packages || [], ...s.packages || []]);
        let l = (0, r.createEventEnvelopeHeaders)(t, o, i, e);
        delete t.sdkProcessingMetadata;
        let u = [{
            type: c
        }, t];
        return (0, r.createEnvelope)(l, [u])
    }
}