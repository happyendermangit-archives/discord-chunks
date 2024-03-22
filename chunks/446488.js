function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("446674"),
        i = n("913144");
    let a = {
        fetched: !1,
        affinities: []
    };
    class l extends r.default.Store {
        get hasFetched() {
            return a.fetched
        }
        get affinities() {
            return a.affinities
        }
    }
    var s = new l(i.default, {
        BILLING_NITRO_AFFINITY_FETCHED: function(e) {
            let {} = e;
            a.fetched = !0
        },
        BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
            let {
                res: t
            } = e;
            a.affinities = t
        }
    })
}