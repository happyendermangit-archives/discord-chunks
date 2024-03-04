function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("913144"),
        s = {
            show(e, t, n, s, r) {
                i.default.dispatch({
                    type: "NOTICE_SHOW",
                    notice: {
                        id: r,
                        type: e,
                        message: t,
                        buttonText: n,
                        callback: s
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