function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusRingManager: function() {
            return s
        }
    });
    var i = n("789978"),
        r = n("607070");
    n("790381");
    let s = {
        init() {
            r.default.addChangeListener(() => {
                r.default.keyboardModeEnabled ? (i.FocusRingManager.setRingsEnabled(!0), i.FocusRingManager.enableAnimationTracking()) : (i.FocusRingManager.setRingsEnabled(!1), i.FocusRingManager.disableAnimationTracking())
            })
        }
    }
}