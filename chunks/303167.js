function(e, _, E) {
    "use strict";

    function t(e) {
        null != window.DiscordSentry && window.DiscordSentry.addBreadcrumb({
            type: "default",
            level: "info",
            category: e.category,
            message: e.message,
            data: e.data,
            timestamp: Date.now()
        })
    }
    E.r(_), E.d(_, {
        default: function() {
            return t
        }
    })
}