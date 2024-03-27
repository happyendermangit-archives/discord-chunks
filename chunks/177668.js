function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        dsnFromString: function() {
            return o
        },
        dsnToString: function() {
            return a
        },
        makeDsn: function() {
            return u
        }
    });
    var r = n("529866");
    let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function a(t, e = !1) {
        let {
            host: n,
            path: r,
            pass: i,
            port: a,
            projectId: o,
            protocol: s,
            publicKey: u
        } = t;
        return `${s}://${u}${e&&i?`:${i}`:""}@${n}${a?`:${a}`:""}/${r?`${r}/`:r}${o}`
    }

    function o(t) {
        let e = i.exec(t);
        if (!e) {
            console.error(`Invalid Sentry Dsn: ${t}`);
            return
        }
        let [n, r, a = "", o, u = "", c] = e.slice(1), l = "", d = c, f = d.split("/");
        if (f.length > 1 && (l = f.slice(0, -1).join("/"), d = f.pop()), d) {
            let t = d.match(/^\d+/);
            t && (d = t[0])
        }
        return s({
            host: o,
            pass: a,
            path: l,
            projectId: d,
            port: u,
            protocol: n,
            publicKey: r
        })
    }

    function s(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId
        }
    }

    function u(t) {
        let e = "string" == typeof t ? o(t) : s(t);
        if (e && function(t) {
                var e;
                if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__)) return !0;
                let {
                    port: n,
                    projectId: i,
                    protocol: a
                } = t;
                if (["protocol", "publicKey", "host", "projectId"].find(e => !t[e] && (r.logger.error(`Invalid Sentry Dsn: ${e} missing`), !0))) return !1;
                if (!i.match(/^\d+$/)) return r.logger.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), !1;
                return "http" === (e = a) || "https" === e ? !(n && isNaN(parseInt(n, 10))) || (r.logger.error(`Invalid Sentry Dsn: Invalid port ${n}`), !1) : (r.logger.error(`Invalid Sentry Dsn: Invalid protocol ${a}`), !1)
            }(e)) return e
    }
}