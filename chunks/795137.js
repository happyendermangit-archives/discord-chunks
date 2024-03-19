function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return o
        }
    });
    var d = t("37983");
    t("884691");
    var s = t("90915"),
        n = t("446674"),
        i = t("271938"),
        c = t("760190"),
        r = t("49111"),
        o = n.default.connectStores([c.default, i.default], () => {
            let e = i.default.getToken();
            return {
                token: e,
                hasLoadedExperiments: null != e || c.default.hasLoadedExperiments
            }
        })(e => {
            let {
                hasLoadedExperiments: a,
                token: t
            } = e;
            return null != t ? (0, d.jsx)(s.Redirect, {
                to: r.Routes.APP
            }) : a ? (0, d.jsx)(s.Redirect, {
                to: r.Routes.DEFAULT_LOGGED_OUT
            }) : null
        })
}