function(e, t, n) {
    "use strict";

    function r(e) {
        return {
            id: e.id,
            filename: e.filename,
            size: e.size,
            width: e.width,
            height: e.height,
            mimeType: e.mime_type
        }
    }
    n.r(t), n.d(t, {
        transformStoreAssetFromServer: function() {
            return r
        }
    })
}