function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setupWindow: function() {
            return o
        }
    }), n("47120");
    var i = n("284737"),
        r = n("228488"),
        a = n("830917"),
        s = n("919570");

    function o(e) {
        let t = e.document,
            n = (0, a.setupWindowId)(e);

        function o() {
            (0, s.setCurrentlyInteractingWindowId)(n)
        }

        function l() {
            setTimeout(() => {
                (0, s.clearCurrentlyInteractingWindowId)(n)
            }, 0)
        }
        for (let n of (e.addEventListener("resize", function() {
                (0, i.resized)(e)
            }), e.addEventListener("focus", function() {
                (0, i.focus)(e, !0)
            }), e.addEventListener("blur", function() {
                !e.document.hasFocus() && (0, i.focus)(e, !1)
            }), e.addEventListener("unload", function() {
                (0, i.unload)(e)
            }), e.addEventListener("visibilitychange", function() {
                (0, i.visibilityChange)(e)
            }), s.INTERACTION_EVENTS)) t.addEventListener(n, o, !0), t.addEventListener(n, l, !1);
        (0, r.subscribeDocumentToFullScreenChange)(t, function() {
            (0, i.fullscreenChange)(e)
        }), (0, i.init)(e)
    }
}