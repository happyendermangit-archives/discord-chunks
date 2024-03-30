function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("701488");

    function r(e) {
        if (null != e && null != e.url && i.validStreamURL.test(e.url)) return e.url
    }
}