function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("872717"),
        l = n("49111"),
        a = {
            updateNote(e, t) {
                i.HTTP.put({
                    url: l.Endpoints.NOTE(e),
                    body: {
                        note: t
                    },
                    oldFormErrors: !0
                })
            }
        }
}