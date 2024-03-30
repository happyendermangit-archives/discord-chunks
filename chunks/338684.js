function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToken: function() {
            return a
        }
    });
    var r = n("37295"),
        o = n("523263"),
        i = n("622780");

    function a(e, t) {
        var n = (0, o.default)(),
            a = (0, r.useStateFromStores)([i.default], function() {
                return i.default.saturation
            });
        return e.resolve({
            theme: null != t ? t : n,
            saturation: a
        })
    }
}