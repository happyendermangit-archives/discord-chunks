function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_MODAL_CONTEXT: function() {
            return o
        },
        ModalContentContext: function() {
            return u
        },
        ModalTransitionState: function() {
            return r
        },
        POPOUT_MODAL_CONTEXT: function() {
            return l
        },
        TRANSITION_DURATION: function() {
            return s
        }
    });
    var i, r, a = n("470079");
    (i = r || (r = {}))[i.ENTERING = 0] = "ENTERING", i[i.ENTERED = 1] = "ENTERED", i[i.EXITING = 2] = "EXITING", i[i.EXITED = 3] = "EXITED", i[i.HIDDEN = 4] = "HIDDEN";
    let s = 300,
        o = "default",
        l = "popout",
        u = a.createContext({
            headerId: void 0,
            headerIdIsManaged: !1
        })
}