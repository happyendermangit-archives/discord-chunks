function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getDynamicSamplingContextFromClient: function() {
            return a
        }
    });
    var r = n("648238"),
        i = n("28434");

    function a(t, e, n) {
        let a = e.getOptions(),
            {
                publicKey: o
            } = e.getDsn() || {},
            {
                segment: s
            } = n && n.getUser() || {},
            u = (0, r.dropUndefinedKeys)({
                environment: a.environment || i.DEFAULT_ENVIRONMENT,
                release: a.release,
                user_segment: s,
                public_key: o,
                trace_id: t
            });
        return e.emit && e.emit("createDsc", u), u
    }
}