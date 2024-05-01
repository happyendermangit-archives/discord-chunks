function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChildMapping: function() {
            return r
        },
        mergeChildMappings: function() {
            return s
        }
    }), n("653041");
    var i = n("470079");

    function r(e) {
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

    function s() {
        let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

        function i(e) {
            return n.hasOwnProperty(e) ? n[e] : t[e]
        }
        let r = {},
            s = [];
        for (let e in t) n.hasOwnProperty(e) ? s.length && (r[e] = s, s = []) : s.push(e);
        let a = {};
        for (let t in n) {
            if (r.hasOwnProperty(t))
                for (e = 0; e < r[t].length; e++) {
                    let n = r[t][e];
                    a[r[t][e]] = i(n)
                }
            a[t] = i(t)
        }
        for (e = 0; e < s.length; e++) a[s[e]] = i(s[e]);
        return a
    }
}