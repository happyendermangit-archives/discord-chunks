function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140");
    t.default = {
        show(e, t, n, r, s) {
            i.default.dispatch({
                type: "NOTICE_SHOW",
                notice: {
                    id: s,
                    type: e,
                    message: t,
                    buttonText: n,
                    callback: r
                }
            })
        },
        dismiss(e) {
            i.default.dispatch({
                type: "NOTICE_DISMISS",
                ...e
            })
        }
    }
}