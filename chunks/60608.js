function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return o
        }
    });
    var s = t("37983"),
        d = t("884691"),
        n = t("703809"),
        i = t("90915"),
        c = t("1501"),
        r = t("393414");

    function o(e) {
        let {
            children: a
        } = e;
        return d.useEffect(() => (c.default.initialize(), () => c.default.cleanup()), []), (0, s.jsx)(n.HelmetProvider, {
            children: (0, s.jsx)(i.Router, {
                history: (0, r.getHistory)(),
                children: a
            })
        })
    }
}