function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationInstallURL: function() {
            return a
        }
    }), n("47120");
    var i = n("581364"),
        r = n("981631");

    function a(e) {
        let {
            id: t,
            customInstallUrl: n,
            installParams: a,
            integrationTypesConfig: s
        } = e;
        if (null != n) return n;
        let o = {};
        o.client_id = t;
        let l = (0, i.isUserInUserAppExperiment)({
            location: "getApplicationInstallURL"
        }) && null != s && Object.values(s).some(e => (null == e ? void 0 : e.oauth2_install_params) != null);
        if (null != a && !l) {
            let {
                permissions: e,
                scopes: t
            } = a;
            null != e && (o.permissions = e), null != t && (o.scope = t.join(" "))
        }
        let u = Object.entries(o).map(e => {
            let [t, n] = e;
            return "".concat(t, "=").concat(encodeURIComponent(n))
        }).join("&");
        return "".concat(location.protocol, "//").concat(location.host).concat(r.Routes.OAUTH2_AUTHORIZE, "?").concat(u)
    }
}