function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationInstallURL: function() {
            return a
        }
    });
    var r = n("653754"),
        o = n("281767");

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function a(e) {
        var t = e.id,
            n = e.customInstallUrl,
            a = e.installParams,
            u = e.integrationTypesConfig;
        if (null != n) return n;
        var s = {};
        s.client_id = t;
        var l = (0, r.isUserInUserAppExperiment)({
            location: "getApplicationInstallURL"
        }) && null != u && Object.values(u).some(function(e) {
            return (null == e ? void 0 : e.oauth2_install_params) != null
        });
        if (null != a && !l) {
            var c = a.permissions,
                f = a.scopes;
            null != c && (s.permissions = c), null != f && (s.scope = f.join(" "))
        }
        var d = Object.entries(s).map(function(e) {
            var t, n, r = (n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t = e) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                o = r[0],
                a = r[1];
            return "".concat(o, "=").concat(encodeURIComponent(a))
        }).join("&");
        return "".concat(location.protocol, "//").concat(location.host).concat(o.Routes.OAUTH2_AUTHORIZE, "?").concat(d)
    }
}