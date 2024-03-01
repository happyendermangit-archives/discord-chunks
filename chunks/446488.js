function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("446674"),
        i = n("913144");
    let l = {
        fetched: !1,
        affinities: []
    };
    class a extends r.default.Store {
        get hasFetched() {
            return l.fetched
        }
        get affinities() {
            return l.affinities
        }
    }
    var s = new a(i.default, {
        BILLING_NITRO_AFFINITY_FETCHED: function(e) {
            let {} = e;
            l.fetched = !0
        },
        BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
            let {
                res: t
            } = e;
            l.affinities = t
        }
    })
}