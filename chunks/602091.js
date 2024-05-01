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
            return a
        }
    });
    var i, r, s = n("470079");
    (i = r || (r = {}))[i.ENTERING = 0] = "ENTERING", i[i.ENTERED = 1] = "ENTERED", i[i.EXITING = 2] = "EXITING", i[i.EXITED = 3] = "EXITED", i[i.HIDDEN = 4] = "HIDDEN";
    let a = 300,
        o = "default",
        l = "popout",
        u = s.createContext({
            headerId: void 0,
            headerIdIsManaged: !1
        })
}