function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return i
        }
    });
    var a = n("913144"),
        i = {
            show(t, e, n, i, l) {
                a.default.dispatch({
                    type: "NOTICE_SHOW",
                    notice: {
                        id: l,
                        type: t,
                        message: e,
                        buttonText: n,
                        callback: i
                    }
                })
            },
            dismiss(t) {
                a.default.dispatch({
                    type: "NOTICE_DISMISS",
                    ...t
                })
            }
        }
}