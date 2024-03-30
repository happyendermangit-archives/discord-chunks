function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualGuilds: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("380512"),
        a = n("903716");

    function u(e) {
        var t = (0, o.useStateFromStores)([a.default], function() {
                return a.default.getMutualGuilds(e.id)
            }),
            n = (0, o.useStateFromStoresArray)([i.default], function() {
                return null == t ? [] : i.default.getFlattenedGuildIds().reduce(function(e, n) {
                    var r = t.find(function(e) {
                        return e.guild.id === n
                    });
                    return null != r && e.push(r), e
                }, [])
            }, [t]),
            u = r.useRef(n);
        return null == t ? u.current : n
    }
}