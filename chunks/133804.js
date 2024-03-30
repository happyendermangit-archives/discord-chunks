function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("120447"),
        r = n("850168"),
        c = n("983877"),
        o = n("281767");
    t.default = {
        init: function() {
            document.addEventListener("paste", function(e) {
                !(0, c.default)((0, r.eventOwnerDocument)(e)) && a.ComponentDispatch.dispatchToLastSubscribed(o.ComponentActions.GLOBAL_CLIPBOARD_PASTE, {
                    event: e
                })
            })
        }
    }
}