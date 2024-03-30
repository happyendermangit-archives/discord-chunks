function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_MODAL_CONTEXT: function() {
            return u
        },
        ModalContentContext: function() {
            return l
        },
        ModalTransitionState: function() {
            return o
        },
        POPOUT_MODAL_CONTEXT: function() {
            return s
        },
        TRANSITION_DURATION: function() {
            return a
        }
    });
    var r, o, i = n("470079");
    (r = o || (o = {}))[r.ENTERING = 0] = "ENTERING", r[r.ENTERED = 1] = "ENTERED", r[r.EXITING = 2] = "EXITING", r[r.EXITED = 3] = "EXITED", r[r.HIDDEN = 4] = "HIDDEN";
    var a = 300,
        u = "default",
        s = "popout",
        l = i.createContext({
            headerId: void 0,
            headerIdIsManaged: !1
        })
}