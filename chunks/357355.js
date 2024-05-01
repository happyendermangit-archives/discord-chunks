function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("442837"),
        r = n("570140");
    let a = {
        fetched: !1,
        affinities: []
    };
    class s extends i.default.Store {
        get hasFetched() {
            return a.fetched
        }
        get affinities() {
            return a.affinities
        }
    }
    t.default = new s(r.default, {
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