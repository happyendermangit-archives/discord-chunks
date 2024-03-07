function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualGuilds: function() {
            return s
        }
    }), n("808653"), n("424973");
    var l = n("446674"),
        i = n("677099"),
        a = n("713135");

    function s(e) {
        let t = (0, l.useStateFromStores)([a.default], () => a.default.getMutualGuilds(e.id)),
            n = (0, l.useStateFromStoresArray)([i.default], () => {
                if (null == t) return [];
                let e = i.default.getFlattenedGuildIds();
                return e.reduce((e, n) => {
                    let l = t.find(e => e.guild.id === n);
                    return null != l && e.push(l), e
                }, [])
            }, [t]);
        return n
    }
}