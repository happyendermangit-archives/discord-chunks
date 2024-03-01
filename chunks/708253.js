function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToken: function() {
            return a
        }
    });
    var i = n("65597"),
        r = n("841098"),
        s = n("206230");

    function a(e, t) {
        let n = (0, r.default)(),
            a = (0, i.default)([s.default], () => s.default.saturation);
        return e.resolve({
            theme: null != t ? t : n,
            saturation: a
        })
    }
}