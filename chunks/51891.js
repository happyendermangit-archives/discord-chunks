function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("557775"),
        i = n("855286"),
        a = n("98397");

    function u(e) {
        var t = e.channel,
            n = e.commands,
            u = e.limit,
            s = void 0 === u ? n.length : u,
            l = (0, a.useCommandContext)(t),
            c = (0, o.useTopCommands)(l),
            f = r.useMemo(function() {
                return n.reduce(function(e, t) {
                    return e[t.id] = t, e
                }, {})
            }, [n]);
        return r.useMemo(function() {
            return c.map(function(e) {
                return f[e]
            }).filter(function(e) {
                return null != e
            }).sort(function(e, t) {
                var n = i.default.getScoreWithoutLoadingLatest(l, e);
                return i.default.getScoreWithoutLoadingLatest(l, t) - n
            }).slice(0, s)
        }, [c, f, l, s])
    }
}