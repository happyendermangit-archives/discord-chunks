function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return l
        }
    });
    var n = i("954016");

    function l(t) {
        if (null != t && null != t.url && n.validStreamURL.test(t.url)) return t.url
    }
}