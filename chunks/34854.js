function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("981631");
    t.default = {
        updateNote(e, t) {
            i.HTTP.put({
                url: r.Endpoints.NOTE(e),
                body: {
                    note: t
                },
                oldFormErrors: !0
            })
        }
    }
}