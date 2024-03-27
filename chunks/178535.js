function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("607070"),
        r = n("981631");

    function s(e, t, n) {
        var s, a, o, l, u, d, _, c;
        let E = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            key: null !== (a = null !== (s = t.key) && void 0 !== s ? s : E) && void 0 !== a ? a : "modal",
            modal: e,
            animation: null !== (o = t.animation) && void 0 !== o ? o : i.default.useReducedMotion ? r.ModalAnimation.FADE : r.ModalAnimation.SLIDE_UP,
            shouldPersistUnderModals: null !== (l = t.shouldPersistUnderModals) && void 0 !== l && l,
            props: n,
            backdropStyle: null !== (u = t.backdropStyle) && void 0 !== u ? u : null,
            backdropInstant: null !== (d = t.backdropInstant) && void 0 !== d && d,
            disableAnimation: null !== (_ = t.disableAnimation) && void 0 !== _ && _,
            closable: "boolean" != typeof t.closable || t.closable,
            label: null !== (c = t.label) && void 0 !== c ? c : "",
            callbacks: {}
        }
    }
}