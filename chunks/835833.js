function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });

    function o(e) {
        return function(e) {
            if (Array.isArray(e)) return r(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function i(e, t, n) {
        var r, i = [],
            a = function() {
                for (var u = arguments.length, s = Array(u), l = 0; l < u; l++) s[l] = arguments[l];
                var c = Date.now();
                for (null != r && (clearTimeout(r), r = null); i.length > 0 && i[0] <= c;) i.shift();
                i.length < e ? (i.push(c + t), n.apply(void 0, o(s))) : r = setTimeout(function() {
                    return a.apply(void 0, o(s))
                }, i[0] - c)
            };
        return a
    }
}