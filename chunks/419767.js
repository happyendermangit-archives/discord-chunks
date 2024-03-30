function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        createEventEnvelope: function() {
            return a
        },
        createSessionEnvelope: function() {
            return i
        }
    });
    var r = n("648238");

    function i(t, e, n, i) {
        let a = (0, r.getSdkMetadataForEnvelopeHeader)(n),
            o = {
                sent_at: new Date().toISOString(),
                ...a && {
                    sdk: a
                },
                ...!!i && {
                    dsn: (0, r.dsnToString)(e)
                }
            },
            s = "aggregates" in t ? [{
                type: "sessions"
            }, t] : [{
                type: "session"
            }, t.toJSON()];
        return (0, r.createEnvelope)(o, [s])
    }

    function a(t, e, n, i) {
        var a, o;
        let s = (0, r.getSdkMetadataForEnvelopeHeader)(n),
            u = t.type && "replay_event" !== t.type ? t.type : "event";
        a = t, !(o = n && n.sdk) || (a.sdk = a.sdk || {}, a.sdk.name = a.sdk.name || o.name, a.sdk.version = a.sdk.version || o.version, a.sdk.integrations = [...a.sdk.integrations || [], ...o.integrations || []], a.sdk.packages = [...a.sdk.packages || [], ...o.packages || []]);
        let l = (0, r.createEventEnvelopeHeaders)(t, s, i, e);
        delete t.sdkProcessingMetadata;
        let c = [{
            type: u
        }, t];
        return (0, r.createEnvelope)(l, [c])
    }
}