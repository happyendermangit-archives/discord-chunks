function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setupWindow: function() {
            return u
        }
    });
    var r = n("619378"),
        o = n("172637"),
        i = n("502752"),
        a = n("436993");

    function u(e) {
        var t = e.document,
            n = (0, i.setupWindowId)(e);

        function u() {
            (0, a.setCurrentlyInteractingWindowId)(n)
        }

        function s() {
            setTimeout(function() {
                (0, a.clearCurrentlyInteractingWindowId)(n)
            }, 0)
        }
        e.addEventListener("resize", function() {
            (0, r.resized)(e)
        }), e.addEventListener("focus", function() {
            (0, r.focus)(e, !0)
        }), e.addEventListener("blur", function() {
            !e.document.hasFocus() && (0, r.focus)(e, !1)
        }), e.addEventListener("unload", function() {
            (0, r.unload)(e)
        }), e.addEventListener("visibilitychange", function() {
            (0, r.visibilityChange)(e)
        });
        var l = !0,
            c = !1,
            f = void 0;
        try {
            for (var d, _ = (0, a.INTERACTION_EVENTS)[Symbol.iterator](); !(l = (d = _.next()).done); l = !0) {
                var E = d.value;
                t.addEventListener(E, u, !0), t.addEventListener(E, s, !1)
            }
        } catch (e) {
            c = !0, f = e
        } finally {
            try {
                !l && null != _.return && _.return()
            } finally {
                if (c) throw f
            }
        }(0, o.subscribeDocumentToFullScreenChange)(t, function() {
            (0, r.fullscreenChange)(e)
        }), (0, r.init)(e)
    }
}