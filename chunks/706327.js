function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMutualFriends: function() {
            return l
        }
    });
    var i = n("392711"),
        r = n("442837"),
        s = n("800599"),
        a = n("621853");
    let o = [];

    function l(e) {
        return (0, r.useStateFromStoresArray)([a.default, s.default], () => {
            let t = a.default.getMutualFriends(e.id);
            return null == t || 0 === t.length ? o : (0, i.sortBy)(t, e => {
                var t, n;
                let {
                    user: i
                } = e;
                return -(null !== (n = null === (t = s.default.getUserAffinity(i.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0)
            })
        }, [e.id])
    }
}