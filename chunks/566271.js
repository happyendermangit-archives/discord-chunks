function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSuspiciousDownload: function() {
            return l
        }
    }), n("222007");
    var i = n("746379"),
        s = n.n(i),
        r = n("555919");
    let a = new Set(r),
        o = {
            "github.com": RegExp("\\/releases\\S*\\/download"),
            "bitbucket.org": RegExp("\\/downloads\\S*\\/[^\\/]*"),
            "gitlab.com": RegExp("\\/downloads\\S*\\/[^\\/]*")
        };

    function l(e) {
        var t;
        let {
            pathname: n,
            hostname: i
        } = s.parse(e);
        if (null == i) return null;
        let r = o[i];
        if (null != r && null != n && !r.test(n) || null == n) return null;
        let l = n;
        try {
            l = decodeURIComponent(n)
        } catch (e) {}
        let u = l.split("/"),
            d = null,
            c = 0;
        for (let e = u.length - 1; e >= 0; e--) {
            let t = u[e];
            if ("" !== t && "." !== t) {
                if (".." === t) {
                    c++;
                    continue
                }
                if (c > e) break;
                d = u[e - c];
                break
            }
        }
        if (null == d) return null;
        let _ = d.split(".");
        if (_.length < 2) return null;
        let f = null === (t = _.pop()) || void 0 === t ? void 0 : t.toLowerCase();
        return null != f && a.has(f) ? f : null
    }
}