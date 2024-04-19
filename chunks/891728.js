function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCurrentUserAvailableClanIds: function() {
            return _
        },
        useCurrentUserAvailableClans: function() {
            return d
        }
    }), n("47120");
    var i = n("470079"),
        r = n("392711"),
        s = n.n(r),
        a = n("442837"),
        o = n("271383"),
        l = n("430824"),
        u = n("353093");

    function d() {
        return (0, a.useStateFromStoresArray)([l.default, o.default], () => {
            let e = l.default.getGuilds();
            return s()(e).values().filter(e => {
                var t;
                return (0, u.isGuildAClan)(e) && (null === (t = o.default.getSelfMember(e.id)) || void 0 === t ? void 0 : t.joinedAt) != null
            }).value()
        })
    }

    function _() {
        let e = d();
        return i.useMemo(() => new Set(e.map(e => {
            let {
                id: t
            } = e;
            return t
        })), [e])
    }
}