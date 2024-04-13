function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMyContentInventory: function() {
            return a
        }
    });
    var i = n("544891"),
        r = n("881052"),
        s = n("981631");
    let a = async () => {
        try {
            let e = (await i.HTTP.get({
                    url: s.Endpoints.MY_CONTENT_INVENTORY
                })).body,
                t = e.wait_ms_until_next_fetch;
            if (null != t) {
                let n = new Date(Date.now() + t);
                e.expired_at = n.toISOString()
            }
            return e
        } catch (e) {
            throw new r.APIError(e)
        }
    }
}