function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("70102");
    var s = n("748820"),
        a = n("872717"),
        i = n("49111"),
        r = {
            generateNonce: function() {
                return (0, s.v4)()
            },
            createHandoffToken: async function e(e) {
                let {
                    body: {
                        handoff_token: t
                    }
                } = await a.default.post({
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
        }
}