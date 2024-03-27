function(e, t, n) {
    "use strict";

    function i(e) {
        null != window.DiscordSentry && window.DiscordSentry.addBreadcrumb({
            type: "default",
            level: "info",
            category: e.category,
            message: e.message,
            data: e.data,
            timestamp: Date.now()
        })
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    })
}