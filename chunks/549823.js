function(e, t, n) {
    "use strict";

    function r(e) {
        return /^(?:discord:\/)?\/[a-zA-Z0-9_-]/.test(e)
    }
    n.r(t), n.d(t, {
        isSafeRedirect: function() {
            return r
        }
    })
}