function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setApplicationSharing: function() {
            return s
        }
    });
    var i = n("960048"),
        r = n("536150");
    async function s(e, t) {
        try {
            await (0, r.patchContentInventoryApplication)(e, {
                is_sharing: t
            })
        } catch (e) {
            i.default.captureException(e)
        }
    }
}