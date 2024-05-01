function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isSuspiciousDownload: function() {
            return o
        }
    }), n("47120");
    var i = n("729594"),
        r = n("821445");
    let s = new Set(r),
        a = {
            "github.com": RegExp("\\/releases\\S*\\/download"),
            "bitbucket.org": RegExp("\\/downloads\\S*\\/[^\\/]*"),
            "gitlab.com": RegExp("\\/downloads\\S*\\/[^\\/]*")
        };

    function o(e) {
        var t;
        let {
            pathname: n,
            hostname: r
        } = i.parse(e);
        if (null == r) return null;
        let o = a[r];
        if (null != o && null != n && !o.test(n) || null == n) return null;
        let l = n;
        try {
            l = decodeURIComponent(n)
        } catch (e) {}
        let u = l.split("/"),
            d = null,
            _ = 0;
        for (let e = u.length - 1; e >= 0; e--) {
            let t = u[e];
            if ("" !== t && "." !== t) {
                if (".." === t) {
                    _++;
                    continue
                }
                if (_ > e) break;
                d = u[e - _];
                break
            }
        }
        if (null == d) return null;
        let c = d.split(".");
        if (c.length < 2) return null;
        let E = null === (t = c.pop()) || void 0 === t ? void 0 : t.toLowerCase();
        return null != E && s.has(E) ? E : null
    }
}