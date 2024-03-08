function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("808653");
    var i = n("884691"),
        l = n("369010"),
        a = n("342564"),
        s = n("938767");

    function r(e) {
        let {
            channel: t,
            commands: n,
            limit: r = n.length
        } = e, o = (0, s.useCommandContext)(t), u = (0, l.useTopCommands)(o), d = i.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]), c = i.useMemo(() => u.map(e => d[e]).filter(e => null != e).sort((e, t) => {
            let n = a.default.getScoreWithoutLoadingLatest(o, e),
                i = a.default.getScoreWithoutLoadingLatest(o, t);
            return i - n
        }).slice(0, r), [u, d, o, r]);
        return c
    }
}