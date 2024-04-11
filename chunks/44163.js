function(e, t, a) {
    "use strict";
    a.r(t);
    var d = a("585483"),
        n = a("5967"),
        i = a("933513"),
        c = a("981631");
    t.default = {
        init() {
            document.addEventListener("paste", e => {
                !(0, i.default)((0, n.eventOwnerDocument)(e)) && d.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.GLOBAL_CLIPBOARD_PASTE, {
                    event: e
                })
            })
        }
    }
}