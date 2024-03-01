function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSuspiciousDownload: function() {
            return d
        }
    }), n("222007");
    var s = n("746379"),
        i = n.n(s),
        r = n("555919");
    let a = new Set(r),
        o = {
            "github.com": RegExp("\\/releases\\S*\\/download"),
            "bitbucket.org": RegExp("\\/downloads\\S*\\/[^\\/]*"),
            "gitlab.com": RegExp("\\/downloads\\S*\\/[^\\/]*")
        };

    function d(e) {
        var t;
        let {
            pathname: n,
            hostname: s
        } = i.parse(e);
        if (null == s) return null;
        let r = o[s];
        if (null != r && null != n && !r.test(n) || null == n) return null;
        let d = n;
        try {
            d = decodeURIComponent(n)
        } catch (e) {}
        let u = d.split("/"),
            l = null,
            f = 0;
        for (let e = u.length - 1; e >= 0; e--) {
            let t = u[e];
            if ("" !== t && "." !== t) {
                if (".." === t) {
                    f++;
                    continue
                }
                if (f > e) break;
                l = u[e - f];
                break
            }
        }
        if (null == l) return null;
        let _ = l.split(".");
        if (_.length < 2) return null;
        let c = null === (t = _.pop()) || void 0 === t ? void 0 : t.toLowerCase();
        return null != c && a.has(c) ? c : null
    }
}