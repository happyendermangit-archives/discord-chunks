function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChildMapping: function() {
            return s
        },
        mergeChildMappings: function() {
            return r
        }
    }), n("424973");
    var i = n("884691");

    function s(e) {
        let t = {};
        if (e) {
            var n;
            null === (n = i.Children.map(e, e => e)) || void 0 === n || n.forEach(e => {
                let n = e.key;
                null != n && (t[n] = e)
            })
        }
        return t
    }

    function r() {
        let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

        function i(e) {
            return n.hasOwnProperty(e) ? n[e] : t[e]
        }
        let s = {},
            r = [];
        for (let e in t) n.hasOwnProperty(e) ? r.length && (s[e] = r, r = []) : r.push(e);
        let a = {};
        for (let t in n) {
            if (s.hasOwnProperty(t))
                for (e = 0; e < s[t].length; e++) {
                    let n = s[t][e];
                    a[s[t][e]] = i(n)
                }
            a[t] = i(t)
        }
        for (e = 0; e < r.length; e++) a[r[e]] = i(r[e]);
        return a
    }
}