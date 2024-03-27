function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        let i;
        let r = [],
            s = function() {
                for (var a = arguments.length, o = Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                let u = Date.now();
                for (null != i && (clearTimeout(i), i = null); r.length > 0 && r[0] <= u;) r.shift();
                r.length < e ? (r.push(u + t), n(...o)) : i = setTimeout(() => s(...o), r[0] - u)
            };
        return s
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("653041"), n("47120")
}