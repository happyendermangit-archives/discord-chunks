function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationInstallURL: function() {
            return a
        }
    }), n("222007");
    var i = n("389153"),
        l = n("49111");

    function a(e) {
        let {
            id: t,
            customInstallUrl: n,
            installParams: a,
            integrationTypesConfig: s
        } = e;
        if (null != n) return n;
        let r = {};
        r.client_id = t;
        let o = (0, i.isUserInUserAppExperiment)({
                location: "getApplicationInstallURL"
            }),
            u = o && null != s && Object.values(s).some(e => (null == e ? void 0 : e.oauth2_install_params) != null);
        if (null != a && !u) {
            let {
                permissions: e,
                scopes: t
            } = a;
            null != e && (r.permissions = e), null != t && (r.scope = t.join(" "))
        }
        let d = Object.entries(r).map(e => {
            let [t, n] = e;
            return "".concat(t, "=").concat(encodeURIComponent(n))
        }).join("&");
        return "".concat(location.protocol, "//").concat(location.host).concat(l.Routes.OAUTH2_AUTHORIZE, "?").concat(d)
    }
}