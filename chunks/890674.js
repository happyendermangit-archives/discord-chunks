function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("872717"),
        i = n("49111"),
        a = {
            updateNote(e, t) {
                l.default.put({
                    url: i.Endpoints.NOTE(e),
                    body: {
                        note: t
                    },
                    oldFormErrors: !0
                })
            }
        }
}