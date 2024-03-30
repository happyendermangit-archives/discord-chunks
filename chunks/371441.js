function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        encodeProperties: function() {
            return o
        }
    });
    var r = n("413135").Buffer;

    function o(e) {
        try {
            return r.from(JSON.stringify(e)).toString("base64")
        } catch (e) {
            return null
        }
    }
}