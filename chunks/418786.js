function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("622780"),
        o = n("281767");

    function i(e, t, n) {
        var i, a, u, s, l, c, f, d, _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            key: null !== (a = null !== (i = t.key) && void 0 !== i ? i : _) && void 0 !== a ? a : "modal",
            modal: e,
            animation: null !== (u = t.animation) && void 0 !== u ? u : r.default.useReducedMotion ? o.ModalAnimation.FADE : o.ModalAnimation.SLIDE_UP,
            shouldPersistUnderModals: null !== (s = t.shouldPersistUnderModals) && void 0 !== s && s,
            props: n,
            backdropStyle: null !== (l = t.backdropStyle) && void 0 !== l ? l : null,
            backdropInstant: null !== (c = t.backdropInstant) && void 0 !== c && c,
            disableAnimation: null !== (f = t.disableAnimation) && void 0 !== f && f,
            closable: "boolean" != typeof t.closable || t.closable,
            label: null !== (d = t.label) && void 0 !== d ? d : "",
            callbacks: {}
        }
    }
}