function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToken: function() {
            return a
        }
    });
    var i = n("65597"),
        s = n("841098"),
        r = n("206230");

    function a(e, t) {
        let n = (0, s.default)(),
            a = (0, i.useStateFromStores)([r.default], () => r.default.saturation);
        return e.resolve({
            theme: null != t ? t : n,
            saturation: a
        })
    }
}