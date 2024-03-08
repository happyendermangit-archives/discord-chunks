function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualGuilds: function() {
            return s
        }
    }), n("808653"), n("424973");
    var i = n("446674"),
        l = n("677099"),
        a = n("713135");

    function s(e) {
        let t = (0, i.useStateFromStores)([a.default], () => a.default.getMutualGuilds(e.id)),
            n = (0, i.useStateFromStoresArray)([l.default], () => {
                if (null == t) return [];
                let e = l.default.getFlattenedGuildIds();
                return e.reduce((e, n) => {
                    let i = t.find(e => e.guild.id === n);
                    return null != i && e.push(i), e
                }, [])
            }, [t]);
        return n
    }
}