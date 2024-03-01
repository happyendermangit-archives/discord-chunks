function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ModalTransitionState: function() {
            return r
        },
        TRANSITION_DURATION: function() {
            return s
        },
        DEFAULT_MODAL_CONTEXT: function() {
            return l
        },
        POPOUT_MODAL_CONTEXT: function() {
            return a
        },
        ModalContentContext: function() {
            return u
        }
    });
    var i, r, o = n("884691");
    (i = r || (r = {}))[i.ENTERING = 0] = "ENTERING", i[i.ENTERED = 1] = "ENTERED", i[i.EXITING = 2] = "EXITING", i[i.EXITED = 3] = "EXITED", i[i.HIDDEN = 4] = "HIDDEN";
    let s = 300,
        l = "default",
        a = "popout",
        u = o.createContext({
            headerId: void 0,
            headerIdIsManaged: !1
        })
}