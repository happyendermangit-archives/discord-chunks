function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return f
        }
    });
    var d = a("735250"),
        n = a("470079"),
        i = a("445131"),
        c = a("613828"),
        r = a("304445"),
        o = a("703656");

    function f(e) {
        let {
            children: t
        } = e;
        return n.useEffect(() => (r.default.initialize(), () => r.default.cleanup()), []), (0, d.jsx)(i.HelmetProvider, {
            children: (0, d.jsx)(c.Router, {
                history: (0, o.getHistory)(),
                children: t
            })
        })
    }
}