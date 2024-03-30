function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DispatchBand: function() {
            return o
        }
    });
    var r, o, i, a, u = n("898511"),
        s = n("392022"),
        l = n("242880"),
        c = n("767349"),
        f = n("632255");
    (r = o || (o = {}))[r.Early = 0] = "Early", r[r.Database = 1] = "Database", r[r.Default = 2] = "Default", i = new s.ActionLogger({
        persist: null !== (a = l.Storage.get(f.STORAGE_KEY_LOG_DISPATCHES)) && void 0 !== a && a
    });
    var d = new u.Dispatcher(2, i, {
        addBreadcrumb: c.default
    });
    t.default = d
}