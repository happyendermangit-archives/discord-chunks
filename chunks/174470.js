function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getGuildIdsToFetchSoundsFor: function() {
            return d
        },
        useGuildIdsToFetchSoundsFor: function() {
            return u
        }
    }), n("47120");
    var i = n("470079"),
        r = n("399606"),
        a = n("430824"),
        s = n("709054"),
        o = n("763296");

    function l(e, t) {
        return s.default.keys(e).filter(e => null == t.get(e))
    }

    function u() {
        let e = (0, r.useStateFromStores)([a.default], () => a.default.getGuilds()),
            t = (0, r.useStateFromStores)([o.default], () => o.default.getSounds());
        return (0, i.useMemo)(() => l(e, t), [e, t])
    }

    function d() {
        let e = a.default.getGuilds();
        return l(e, o.default.getSounds())
    }
}