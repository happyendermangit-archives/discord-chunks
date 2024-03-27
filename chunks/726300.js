function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getActivationStart: function() {
            return i
        }
    });
    var r = n("27583");
    let i = () => {
        let t = (0, r.getNavigationEntry)();
        return t && t.activationStart || 0
    }
}