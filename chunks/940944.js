function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("967888"),
        o = n("281767");
    t.default = {
        updateNote: function(e, t) {
            r.HTTP.put({
                url: o.Endpoints.NOTE(e),
                body: {
                    note: t
                },
                oldFormErrors: !0
            })
        }
    }
}