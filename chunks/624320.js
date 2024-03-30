function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusRingManager: function() {
            return i
        }
    });
    var r = n("789978"),
        o = n("622780");
    n("797100");
    var i = {
        init: function() {
            o.default.addChangeListener(function() {
                o.default.keyboardModeEnabled ? (r.FocusRingManager.setRingsEnabled(!0), r.FocusRingManager.enableAnimationTracking()) : (r.FocusRingManager.setRingsEnabled(!1), r.FocusRingManager.disableAnimationTracking())
            })
        }
    }
}