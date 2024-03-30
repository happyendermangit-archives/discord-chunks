function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ensureItemVisible: function() {
            return o
        }
    });
    var r = n("622780");

    function o(e) {
        var t;
        r.default.keyboardModeEnabled && (null === (t = e.current) || void 0 === t || t.scrollIntoView({
            block: "nearest"
        }))
    }
}