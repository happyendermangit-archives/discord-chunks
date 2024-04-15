function(e) {
    ! function() {
        "use strict";
        var t = {}.hasOwnProperty;

        function n() {
            for (var e = "", i = 0; i < arguments.length; i++) {
                var a = arguments[i];
                a && (e = r(e, function(e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return n.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var i = "";
                    for (var a in e) t.call(e, a) && e[a] && (i = r(i, a));
                    return i
                }(a)))
            }
            return e
        }

        function r(e, t) {
            return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (n.default = n, e.exports = n) : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
            return n
        }) : window.classNames = n
    }()
}