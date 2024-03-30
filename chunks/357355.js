function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("442837"),
        r = n("570140");
    let s = {
        fetched: !1,
        affinities: []
    };
    class a extends i.default.Store {
        get hasFetched() {
            return s.fetched
        }
        get affinities() {
            return s.affinities
        }
    }
    t.default = new a(r.default, {
        BILLING_NITRO_AFFINITY_FETCHED: function(e) {
            let {} = e;
            s.fetched = !0
        },
        BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
            let {
                res: t
            } = e;
            s.affinities = t
        }
    })
}