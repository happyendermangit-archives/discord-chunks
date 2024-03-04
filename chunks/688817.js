function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusRingManager: function() {
            return r
        }
    });
    var i = n("15542"),
        s = n("206230");
    n("793728");
    let r = {
        init() {
            s.default.addChangeListener(() => {
                s.default.keyboardModeEnabled ? (i.FocusRingManager.setRingsEnabled(!0), i.FocusRingManager.enableAnimationTracking()) : (i.FocusRingManager.setRingsEnabled(!1), i.FocusRingManager.disableAnimationTracking())
            })
        }
    }
}