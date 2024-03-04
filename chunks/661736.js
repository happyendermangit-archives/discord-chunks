function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        let i;
        let s = [],
            r = function() {
                for (var a = arguments.length, o = Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                let u = Date.now();
                for (null != i && (clearTimeout(i), i = null); s.length > 0 && s[0] <= u;) s.shift();
                s.length < e ? (s.push(u + t), n(...o)) : i = setTimeout(() => r(...o), s[0] - u)
            };
        return r
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("424973"), n("222007")
}