function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        patchContentInventoryApplication: function() {
            return s
        }
    });
    var i = n("544891"),
        r = n("881052"),
        a = n("981631");
    async function s(e, t) {
        try {
            await i.HTTP.post({
                url: a.Endpoints.MY_CONTENT_INVENTORY_APPLICATION(e),
                body: t
            })
        } catch (e) {
            throw new r.APIError(e)
        }
    }
}