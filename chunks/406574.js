function(e) {
    "use strict";
    var t = Array.prototype.slice,
        n = Object.prototype.toString;
    e.exports = function(e) {
        var r, i = this;
        if ("function" != typeof i || "[object Function]" !== n.call(i)) throw TypeError("Function.prototype.bind called on incompatible " + i);
        for (var a = t.call(arguments, 1), o = Math.max(0, i.length - a.length), s = [], u = 0; u < o; u++) s.push("$" + u);
        if (r = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(function() {
                if (!(this instanceof r)) return i.apply(e, a.concat(t.call(arguments)));
                var n = i.apply(this, a.concat(t.call(arguments)));
                return Object(n) === n ? n : this
            }), i.prototype) {
            var c = function() {};
            c.prototype = i.prototype, r.prototype = new c, c.prototype = null
        }
        return r
    }
}