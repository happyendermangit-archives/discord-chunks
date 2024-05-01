function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        DispatchBand: function() {
            return s
        }
    });
    var r, s, a, o = n("442837"),
        l = n("420970"),
        u = n("433517"),
        d = n("464847"),
        _ = n("180893");
    (r = s || (s = {}))[r.Early = 0] = "Early", r[r.Database = 1] = "Database", r[r.Default = 2] = "Default", i = new l.ActionLogger({
        persist: null !== (a = u.Storage.get(_.STORAGE_KEY_LOG_DISPATCHES)) && void 0 !== a && a
    });
    let c = new o.Dispatcher(2, i, {
        addBreadcrumb: d.default
    });
    t.default = c
}