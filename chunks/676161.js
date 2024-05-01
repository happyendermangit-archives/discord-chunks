function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("724458");
    var i = n("470079"),
        r = n("700089"),
        a = n("654455"),
        s = n("496158");

    function o(e) {
        let {
            channel: t,
            commands: n,
            limit: o = n.length
        } = e, l = (0, s.useCommandContext)(t), u = (0, r.useTopCommands)(l), d = i.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]);
        return i.useMemo(() => u.map(e => d[e]).filter(e => null != e).sort((e, t) => {
            let n = a.default.getScoreWithoutLoadingLatest(l, e);
            return a.default.getScoreWithoutLoadingLatest(l, t) - n
        }).slice(0, o), [u, d, l, o])
    }
}