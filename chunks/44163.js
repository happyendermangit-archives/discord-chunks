function(e, t, a) {
    "use strict";
    a.r(t);
    var d = a("585483"),
        n = a("5967"),
        c = a("933513"),
        i = a("981631");
    t.default = {
        init() {
            document.addEventListener("paste", e => {
                !(0, c.default)((0, n.eventOwnerDocument)(e)) && d.ComponentDispatch.dispatchToLastSubscribed(i.ComponentActions.GLOBAL_CLIPBOARD_PASTE, {
                    event: e
                })
            })
        }
    }
}