function(e, t, n) {
    "use strict";
    n.r(t), n("411104");
    var s = n("153832"),
        a = n("544891"),
        i = n("981631");
    async function r(e) {
        let {
            body: {
                handoff_token: t
            }
        } = await a.HTTP.post({
            url: i.Endpoints.HANDOFF,
            body: {
                key: e
            },
            oldFormErrors: !0,
            retries: 1
        });
        if (null != t) return t;
        throw Error("Missing handoff token!")
    }
    t.default = {
        generateNonce: function() {
            return (0, s.v4)()
        },
        createHandoffToken: r
    }
}