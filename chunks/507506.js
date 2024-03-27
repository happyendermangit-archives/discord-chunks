function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getEnvelopeEndpointWithUrlEncodedAuth: function() {
            return a
        },
        getReportDialogEndpoint: function() {
            return o
        }
    });
    var r = n("648238");

    function i(t) {
        let e = t.protocol ? `${t.protocol}:` : "",
            n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
    }

    function a(t, e = {}) {
        var n, a, o;
        let s = "string" == typeof e ? e : e.tunnel,
            u = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
        return s || `${n=t,`${i(n)}${n.projectId}/envelope/`}?${a=t,o=u,(0,r.urlEncode)({sentry_key:a.publicKey,sentry_version:"7",...o&&{sentry_client:`${o.name}/${o.version}`}})}`
    }

    function o(t, e) {
        let n = (0, r.makeDsn)(t);
        if (!n) return "";
        let a = `${i(n)}embed/error-page/`,
            o = `dsn=${(0,r.dsnToString)(n)}`;
        for (let t in e)
            if ("dsn" !== t) {
                if ("user" === t) {
                    let t = e.user;
                    if (!t) continue;
                    t.name && (o += `&name=${encodeURIComponent(t.name)}`), t.email && (o += `&email=${encodeURIComponent(t.email)}`)
                } else o += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`
            } return `${a}?${o}`
    }
}