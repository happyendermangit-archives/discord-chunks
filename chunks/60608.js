function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return o
        }
    });
    var d = t("37983"),
        s = t("884691"),
        n = t("703809"),
        i = t("90915"),
        c = t("1501"),
        r = t("393414");

    function o(e) {
        let {
            children: a
        } = e;
        return s.useEffect(() => (c.default.initialize(), () => c.default.cleanup()), []), (0, d.jsx)(n.HelmetProvider, {
            children: (0, d.jsx)(i.Router, {
                history: (0, r.getHistory)(),
                children: a
            })
        })
    }
}