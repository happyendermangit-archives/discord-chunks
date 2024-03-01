function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationInstallURL: function() {
            return a
        }
    }), n("222007");
    var l = n("872717"),
        i = n("49111");

    function a(e) {
        var t, n;
        if (null != e.custom_install_url) return e.custom_install_url;
        let a = {};
        a.client_id = e.id, (null === (t = e.install_params) || void 0 === t ? void 0 : t.permissions) != null && (a.permissions = e.install_params.permissions), (null === (n = e.install_params) || void 0 === n ? void 0 : n.scopes) != null && (a.scope = e.install_params.scopes.join(" "));
        let s = Object.entries(a).map(e => {
            let [t, n] = e;
            return "".concat(t, "=").concat(encodeURIComponent(n))
        }).join("&");
        return "".concat(l.default.getAPIBaseURL(!1)).concat(i.Endpoints.OAUTH2_AUTHORIZE, "?").concat(s)
    }
}