function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        trace: function() {
            return o
        }
    });
    var r = n("648238"),
        i = n("876122"),
        a = n("633401");

    function o(t, e, n = () => {}) {
        let o;
        let s = {
            ...t
        };
        void 0 !== s.name && void 0 === s.description && (s.description = s.name);
        let u = (0, i.getCurrentHub)(),
            l = u.getScope(),
            c = l.getSpan(),
            d = function() {
                if ((0, a.hasTracingEnabled)()) return c ? c.startChild(s) : u.startTransaction(s)
            }();

        function f() {
            d && d.finish(), u.getScope().setSpan(c)
        }
        l.setSpan(d);
        try {
            o = e(d)
        } catch (t) {
            throw d && d.setStatus("internal_error"), n(t), f(), t
        }
        return (0, r.isThenable)(o) ? Promise.resolve(o).then(() => {
            f()
        }, t => {
            d && d.setStatus("internal_error"), n(t), f()
        }) : f(), o
    }
}