function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSuspiciousDownload: function() {
            return u
        }
    });
    var r = n("729594"),
        o = n("821445"),
        i = new Set(o),
        a = {
            "github.com": RegExp("\\/releases\\S*\\/download"),
            "bitbucket.org": RegExp("\\/downloads\\S*\\/[^\\/]*"),
            "gitlab.com": RegExp("\\/downloads\\S*\\/[^\\/]*")
        };

    function u(e) {
        var t, n = r.parse(e),
            o = n.pathname,
            u = n.hostname;
        if (null == u) return null;
        var s = a[u];
        if (null != s && null != o && !s.test(o) || null == o) return null;
        var l = o;
        try {
            l = decodeURIComponent(o)
        } catch (e) {}
        for (var c = l.split("/"), f = null, d = 0, _ = c.length - 1; _ >= 0; _--) {
            var E = c[_];
            if ("" !== E && "." !== E) {
                if (".." === E) {
                    d++;
                    continue
                }
                if (d > _) break;
                f = c[_ - d];
                break
            }
        }
        if (null == f) return null;
        var p = f.split(".");
        if (p.length < 2) return null;
        var m = null === (t = p.pop()) || void 0 === t ? void 0 : t.toLowerCase();
        return null != m && i.has(m) ? m : null
    }
}