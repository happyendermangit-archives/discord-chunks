function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToken: function() {
            return s
        }
    });
    var i = n("399606"),
        r = n("410030"),
        a = n("607070");

    function s(e, t) {
        let n = (0, r.default)(),
            s = (0, i.useStateFromStores)([a.default], () => a.default.saturation);
        return e.resolve({
            theme: null != t ? t : n,
            saturation: s
        })
    }
}