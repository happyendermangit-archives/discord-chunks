function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMyContentInventory: function() {
            return s
        },
        postTrackToContentInventory: function() {
            return o
        }
    });
    var i = n("544891"),
        r = n("881052"),
        a = n("981631");
    let s = async () => {
        try {
            let e = (await i.HTTP.get({
                    url: a.Endpoints.MY_CONTENT_INVENTORY
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
    };
    async function o(e, t) {
        try {
            await i.HTTP.post({
                url: a.Endpoints.MY_SPOTIFY_CONTENT_INVENTORY,
                body: {
                    connection_id: e,
                    tracks: [t]
                }
            })
        } catch (e) {
            throw new r.APIError(e)
        }
    }
}