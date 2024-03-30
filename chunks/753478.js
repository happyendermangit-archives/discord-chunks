function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        combineKey: function() {
            return a
        },
        combineKeyPrefix: function() {
            return u
        }
    });
    var r = n("767689");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e) {
        return function(e) {
            if (Array.isArray(e)) return o(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t) {
        var n = Array.isArray(t) ? i(e).concat(i(t)) : i(e).concat([t]);
        if (n.length >= 1 && n.length <= r.MAXIMUM_KEY_BITS) return n;
        throw Error("combination results in an invalid key that has ".concat(n.length, " elements: ").concat(JSON.stringify(n)))
    }

    function u(e, t) {
        var n = Array.isArray(t) ? i(e).concat(i(t)) : i(e).concat([t]);
        if (n.length <= r.MAXIMUM_KEY_BITS) return n;
        throw Error("combination results in an invalid prefix key that has ".concat(n.length, " elements: ").concat(JSON.stringify(n)))
    }
}