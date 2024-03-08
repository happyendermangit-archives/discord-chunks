function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGuildIdsToFetchSoundsFor: function() {
            return u
        },
        getGuildIdsToFetchSoundsFor: function() {
            return d
        }
    }), n("222007");
    var i = n("884691"),
        l = n("65597"),
        a = n("305961"),
        s = n("299039"),
        r = n("235004");

    function o(e, t) {
        let n = s.default.keys(e);
        return n.filter(e => null == t.get(e))
    }

    function u() {
        let e = (0, l.default)([a.default], () => a.default.getGuilds()),
            t = (0, l.default)([r.default], () => r.default.getSounds());
        return (0, i.useMemo)(() => o(e, t), [e, t])
    }

    function d() {
        let e = a.default.getGuilds(),
            t = r.default.getSounds();
        return o(e, t)
    }
}