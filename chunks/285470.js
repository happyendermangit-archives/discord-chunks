function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualGuilds: function() {
            return o
        }
    }), n("724458"), n("653041");
    var i = n("470079"),
        r = n("442837"),
        s = n("771845"),
        a = n("621853");

    function o(e) {
        let t = (0, r.useStateFromStores)([a.default], () => a.default.getMutualGuilds(e.id)),
            n = (0, r.useStateFromStoresArray)([s.default], () => null == t ? [] : s.default.getFlattenedGuildIds().reduce((e, n) => {
                let i = t.find(e => e.guild.id === n);
                return null != i && e.push(i), e
            }, []), [t]),
            o = i.useRef(n);
        return null == t ? o.current : n
    }
}