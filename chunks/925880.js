function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("424973"), n("222007");
    var i = n("714617"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("77173");
    let l = [o.default],
        u = [];

    function d() {
        let e = [];
        for (let t of l) {
            let n = t.getActivity();
            null != n && e.push(n)
        }
        return !s(e, u) && (u = e, !0)
    }
    class c extends r.default.Store {
        initialize() {
            this.syncWith(l, d)
        }
        getActivities() {
            return u
        }
    }
    c.displayName = "FirstPartyRichPresenceStore";
    var _ = new c(a.default)
}