function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualGuilds: function() {
            return o
        }
    }), n("724458"), n("653041");
    var i = n("470079"),
        r = n("442837"),
        a = n("771845"),
        s = n("621853");

    function o(e) {
        let t = (0, r.useStateFromStores)([s.default], () => s.default.getMutualGuilds(e.id)),
            n = (0, r.useStateFromStoresArray)([a.default], () => null == t ? [] : a.default.getFlattenedGuildIds().reduce((e, n) => {
                let i = t.find(e => e.guild.id === n);
                return null != i && e.push(i), e
            }, []), [t]),
            o = i.useRef(n);
        return null == t ? o.current : n
    }
}