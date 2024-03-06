function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationInstallURL: function() {
            return s
        }
    }), n("222007");
    var l = n("872717"),
        i = n("389153"),
        a = n("49111");

    function s(e) {
        let {
            id: t,
            customInstallUrl: n,
            installParams: s,
            integrationTypesConfig: r
        } = e;
        if (null != n) return n;
        let o = {};
        o.client_id = t;
        let u = (0, i.isInUserAppExperiment)(null, {
                location: "getApplicationInstallURL"
            }),
            d = u && null != r && Object.values(r).some(e => (null == e ? void 0 : e.oauth2_install_params) != null);
        if (null != s && !d) {
            let {
                permissions: e,
                scopes: t
            } = s;
            null != e && (o.permissions = e), null != t && (o.scope = t.join(" "))
        }
        let c = Object.entries(o).map(e => {
            let [t, n] = e;
            return "".concat(t, "=").concat(encodeURIComponent(n))
        }).join("&");
        return "".concat(l.default.getAPIBaseURL(!1)).concat(a.Endpoints.OAUTH2_AUTHORIZE, "?").concat(c)
    }
}