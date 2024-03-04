function(e, t, n) {
    "use strict";
    n("70102"), n("424973");
    var r = Array.prototype.slice,
        i = Object.prototype.toString;
    e.exports = function(e) {
        var t, n = this;
        if ("function" != typeof n || "[object Function]" !== i.call(n)) throw TypeError("Function.prototype.bind called on incompatible " + n);
        for (var o = r.call(arguments, 1), s = Math.max(0, n.length - o.length), a = [], c = 0; c < s; c++) a.push("$" + c);
        if (t = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                if (!(this instanceof t)) return n.apply(e, o.concat(r.call(arguments)));
                var i = n.apply(this, o.concat(r.call(arguments)));
                return Object(i) === i ? i : this
            }), n.prototype) {
            var u = function() {};
            u.prototype = n.prototype, t.prototype = new u, u.prototype = null
        }
        return t
    }
}