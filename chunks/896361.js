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
        o = a("304445"),
        r = a("703656");

    function f(e) {
        let {
            children: t
        } = e;
        return n.useEffect(() => (o.default.initialize(), () => o.default.cleanup()), []), (0, d.jsx)(i.HelmetProvider, {
            children: (0, d.jsx)(c.Router, {
                history: (0, r.getHistory)(),
                children: t
            })
        })
    }
}