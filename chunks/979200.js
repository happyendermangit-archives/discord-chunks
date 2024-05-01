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
            return s
        }
    });
    var i = n("544891"),
        r = n("921072"),
        a = n("981631");
    async function s(e) {
        let t = a.Endpoints.APPLICATION_DISCLOSURES(e),
            n = await i.HTTP.get({
                url: t,
                retries: 3
            }),
            r = n.body.disclosures,
            s = n.body.acked_disclosures;
        return {
            disclosures: r,
            ackedDisclosures: s,
            allAcked: n.body.all_acked
        }
    }
    async function o(e, t) {
        let n = a.Endpoints.APPLICATION_DISCLOSURES(e);
        await i.HTTP.post({
            url: n,
            body: {
                disclosures: t
            }
        })
    }
}