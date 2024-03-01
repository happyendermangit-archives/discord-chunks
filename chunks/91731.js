function(t, e, o) {
    "use strict";
    o.r(e), o.d(e, {
        default: function() {
            return r
        }
    });
    var n = o("206230"),
        d = o("49111");

    function r(t, e, o) {
        var r, l, i, a, s, u, E, c;
        let p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            key: null !== (l = null !== (r = e.key) && void 0 !== r ? r : p) && void 0 !== l ? l : "modal",
            modal: t,
            animation: null !== (i = e.animation) && void 0 !== i ? i : n.default.useReducedMotion ? d.ModalAnimation.FADE : d.ModalAnimation.SLIDE_UP,
            shouldPersistUnderModals: null !== (a = e.shouldPersistUnderModals) && void 0 !== a && a,
            props: o,
            backdropStyle: null !== (s = e.backdropStyle) && void 0 !== s ? s : null,
            backdropInstant: null !== (u = e.backdropInstant) && void 0 !== u && u,
            disableAnimation: null !== (E = e.disableAnimation) && void 0 !== E && E,
            closable: "boolean" != typeof e.closable || e.closable,
            label: null !== (c = e.label) && void 0 !== c ? c : "",
            callbacks: {}
        }
    }
}