function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("70102");
    var s = n("748820"),
        a = n("872717"),
        r = n("49111"),
        l = {
            generateNonce: function() {
                return (0, s.v4)()
            },
            createHandoffToken: async function e(e) {
                let {
                    body: {
                        handoff_token: t
                    }
                } = await a.default.post({
                    url: r.Endpoints.HANDOFF,
                    body: {
                        key: e
                    },
                    oldFormErrors: !0,
                    retries: 1
                });
                if (null != t) return t;
                throw Error("Missing handoff token!")
            }
        }
}