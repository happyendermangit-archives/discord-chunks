function(e, t, n) {
    e = n.nmd(e), n("424973"), ! function() {
        "use strict";
        var t = {}.hasOwnProperty;

        function n() {
            for (var e = [], r = 0; r < arguments.length; r++) {
                var i = arguments[r];
                if (i) {
                    var o = typeof i;
                    if ("string" === o || "number" === o) e.push(i);
                    else if (Array.isArray(i)) {
                        if (i.length) {
                            var s = n.apply(null, i);
                            s && e.push(s)
                        }
                    } else if ("object" === o) {
                        if (i.toString === Object.prototype.toString)
                            for (var a in i) t.call(i, a) && i[a] && e.push(a);
                        else e.push(i.toString())
                    }
                }
            }
            return e.join(" ")
        }
        void 0 !== e && e.exports ? (n.default = n, e.exports = n) : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
            return n
        }) : window.classNames = n
    }()
}