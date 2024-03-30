function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("997133");

    function o(e) {
        if (null != e && null != e.url && r.validStreamURL.test(e.url)) return e.url
    }
}