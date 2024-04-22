function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationDisclosure: function() {
            return r.ApplicationDisclosureType
        },
        ackDisclosures: function() {
            return o
        },
        getDisclosures: function() {
            return a
        }
    });
    var i = n("544891"),
        r = n("921072"),
        s = n("981631");
    async function a(e) {
        let t = s.Endpoints.APPLICATION_DISCLOSURES(e),
            n = await i.HTTP.get({
                url: t,
                retries: 3
            }),
            r = n.body.disclosures,
            a = n.body.acked_disclosures;
        return {
            disclosures: r,
            ackedDisclosures: a,
            allAcked: n.body.all_acked
        }
    }
    async function o(e, t) {
        let n = s.Endpoints.APPLICATION_DISCLOSURES(e);
        await i.HTTP.post({
            url: n,
            body: {
                disclosures: t
            }
        })
    }
}