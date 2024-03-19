function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return i
        }
    });
    var s = t("659500"),
        d = t("791776"),
        n = t("75480"),
        c = t("49111"),
        i = {
            init() {
                document.addEventListener("paste", e => {
                    !(0, n.default)((0, d.eventOwnerDocument)(e)) && s.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.GLOBAL_CLIPBOARD_PASTE, {
                        event: e
                    })
                })
            }
        }
}