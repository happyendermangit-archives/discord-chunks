function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        formatUsername: function() {
            return a
        }
    });
    var s = n("50885");
    async function a(e) {
        try {
            return await s.default.getSetting("USERNAME_PREFIX", "") + e
        } catch (e) {}
        return e
    }
}