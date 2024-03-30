function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFlattenedChannels: function() {
            return l
        },
        useFlattenedChannels: function() {
            return u
        }
    }), n("47120"), n("653041");
    var i = n("392711"),
        r = n.n(i),
        s = n("442837"),
        a = n("592125"),
        o = n("823379");

    function l(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = r()(a.default.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
            l = r()(n).map(e => e.isCategory() ? e.id : e.parent_id).filter(o.isNotNullish).uniq().map(e => a.default.getChannel(e)).filter(o.isNotNullish).sortBy("position").value(),
            u = new Set(l.map(e => e.id)),
            d = n.filter(e => !e.isCategory() && (null == e.parent_id || !u.has(e.parent_id)));
        for (let e of (d = r().sortBy(d, e => e.isGuildVocal() ? e.position + 1e4 : e.position), l)) {
            !i && d.push(e);
            let a = t.has(e.id) ? s[e.id] : n.filter(t => t.parent_id === e.id);
            a = r().sortBy(null != a ? a : [], e => e.isGuildVocal() ? e.position + 1e4 : e.position), d.push(...a)
        }
        return d
    }

    function u(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (0, s.useStateFromStoresArray)([a.default], () => {
            let i = Array.from(t).map(e => a.default.getChannel(e)).filter(o.isNotNullish);
            return l(e, t, i, n)
        })
    }
}