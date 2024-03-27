function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        createUserFeedbackEnvelope: function() {
            return i
        }
    });
    var r = n("648238");

    function i(t, {
        metadata: e,
        tunnel: n,
        dsn: i
    }) {
        let a = {
                event_id: t.event_id,
                sent_at: new Date().toISOString(),
                ...e && e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version
                    }
                },
                ...!!n && !!i && {
                    dsn: (0, r.dsnToString)(i)
                }
            },
            o = function(t) {
                return [{
                    type: "user_report"
                }, t]
            }(t);
        return (0, r.createEnvelope)(a, [o])
    }
}