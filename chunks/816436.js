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
        a = n("442837"),
        s = n("592125"),
        o = n("823379");

    function l(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            a = r()(s.default.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
            l = r()(n).map(e => e.isCategory() ? e.id : e.parent_id).filter(o.isNotNullish).uniq().map(e => s.default.getChannel(e)).filter(o.isNotNullish).sortBy("position").value(),
            u = new Set(l.map(e => e.id)),
            d = n.filter(e => !e.isCategory() && (null == e.parent_id || !u.has(e.parent_id)));
        for (let e of (d = r().sortBy(d, e => e.isGuildVocal() ? e.position + 1e4 : e.position), l)) {
            !i && d.push(e);
            let s = t.has(e.id) ? a[e.id] : n.filter(t => t.parent_id === e.id);
            s = r().sortBy(null != s ? s : [], e => e.isGuildVocal() ? e.position + 1e4 : e.position), d.push(...s)
        }
        return d
    }

    function u(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (0, a.useStateFromStoresArray)([s.default], () => {
            let i = Array.from(t).map(e => s.default.getChannel(e)).filter(o.isNotNullish);
            return l(e, t, i, n)
        })
    }
}