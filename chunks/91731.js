function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("206230"),
        s = n("49111");

    function r(e, t, n) {
        var r, a, o, l, u, d, c, f;
        let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            key: null !== (a = null !== (r = t.key) && void 0 !== r ? r : _) && void 0 !== a ? a : "modal",
            modal: e,
            animation: null !== (o = t.animation) && void 0 !== o ? o : i.default.useReducedMotion ? s.ModalAnimation.FADE : s.ModalAnimation.SLIDE_UP,
            shouldPersistUnderModals: null !== (l = t.shouldPersistUnderModals) && void 0 !== l && l,
            props: n,
            backdropStyle: null !== (u = t.backdropStyle) && void 0 !== u ? u : null,
            backdropInstant: null !== (d = t.backdropInstant) && void 0 !== d && d,
            disableAnimation: null !== (c = t.disableAnimation) && void 0 !== c && c,
            closable: "boolean" != typeof t.closable || t.closable,
            label: null !== (f = t.label) && void 0 !== f ? f : "",
            callbacks: {}
        }
    }
}