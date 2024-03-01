function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusRingManager: function() {
            return s
        }
    });
    var i = n("15542"),
        r = n("206230");
    n("793728");
    let s = {
        init() {
            r.default.addChangeListener(() => {
                r.default.keyboardModeEnabled ? (i.FocusRingManager.setRingsEnabled(!0), i.FocusRingManager.enableAnimationTracking()) : (i.FocusRingManager.setRingsEnabled(!1), i.FocusRingManager.disableAnimationTracking())
            })
        }
    }
}