function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("470079"),
        r = n("613828"),
        c = n("898511"),
        o = n("217014"),
        i = n("139890"),
        f = n("281767");
    t.default = c.default.connectStores([i.default, o.default], function() {
        var e = o.default.getToken();
        return {
            token: e,
            hasLoadedExperiments: null != e || i.default.hasLoadedExperiments
        }
    })(function(e) {
        var t = e.hasLoadedExperiments;
        return null != e.token ? a.createElement(r.Redirect, {
            to: f.Routes.APP
        }) : t ? a.createElement(r.Redirect, {
            to: f.Routes.DEFAULT_LOGGED_OUT
        }) : null
    })
}