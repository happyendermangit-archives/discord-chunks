function(e, t, a) {
    "use strict";
    a.r(t);
    var d = a("735250");
    a("470079");
    var n = a("613828"),
        i = a("442837"),
        c = a("314897"),
        o = a("828695"),
        r = a("981631");
    t.default = i.default.connectStores([o.default, c.default], () => {
        let e = c.default.getToken();
        return {
            token: e,
            hasLoadedExperiments: null != e || o.default.hasLoadedExperiments
        }
    })(e => {
        let {
            hasLoadedExperiments: t,
            token: a
        } = e;
        return null != a ? (0, d.jsx)(n.Redirect, {
            to: r.Routes.APP
        }) : t ? (0, d.jsx)(n.Redirect, {
            to: r.Routes.DEFAULT_LOGGED_OUT
        }) : null
    })
}