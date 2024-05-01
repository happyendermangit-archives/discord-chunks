function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToken: function() {
            return a
        }
    });
    var i = n("399606"),
        r = n("410030"),
        s = n("607070");

    function a(e, t) {
        let n = (0, r.default)(),
            a = (0, i.useStateFromStores)([s.default], () => s.default.saturation);
        return e.resolve({
            theme: null != t ? t : n,
            saturation: a
        })
    }
}