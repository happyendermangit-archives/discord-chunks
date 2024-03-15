function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualGuilds: function() {
            return r
        }
    }), n("808653"), n("424973");
    var i = n("884691"),
        l = n("446674"),
        a = n("677099"),
        s = n("713135");

    function r(e) {
        let t = (0, l.useStateFromStores)([s.default], () => s.default.getMutualGuilds(e.id)),
            n = (0, l.useStateFromStoresArray)([a.default], () => {
                if (null == t) return [];
                let e = a.default.getFlattenedGuildIds();
                return e.reduce((e, n) => {
                    let i = t.find(e => e.guild.id === n);
                    return null != i && e.push(i), e
                }, [])
            }, [t]),
            r = i.useRef(n);
        return null == t ? r.current : n
    }
}