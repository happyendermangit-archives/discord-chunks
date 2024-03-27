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
            return (await i.HTTP.get({
                url: s.Endpoints.MY_CONTENT_INVENTORY
            })).body
        } catch (e) {
            throw new r.APIError(e)
        }
    }
}