function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Histogram: function() {
            return r
        }
    }), n("653041"), n("47120");
    var i = n("508385");
    class r {
        addSample(e) {
            this.digest.push(e)
        }
        getReport() {
            var e, t, n, i;
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
                s = {};
            for (let t of r) s[t] = null !== (e = this.digest.percentile(t / 100)) && void 0 !== e ? e : 0;
            return {
                min: null !== (t = this.digest.percentile(0)) && void 0 !== t ? t : 0,
                max: null !== (n = this.digest.percentile(1)) && void 0 !== n ? n : 0,
                count: null !== (i = this.digest.size()) && void 0 !== i ? i : 0,
                percentiles: s
            }
        }
        constructor() {
            var e, t, n;
            e = this, t = "digest", n = new i.Digest, t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        }
    }
}