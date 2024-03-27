function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        __assign: function() {
            return r
        },
        __spread: function() {
            return i
        }
    });
    var r = function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

    function i() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(function(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, a = n.call(e),
                o = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = a.next()).done;) o.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = a.return) && n.call(a)
                } finally {
                    if (i) throw i.error
                }
            }
            return o
        }(arguments[t]));
        return e
    }
}