function(e, t) {
    "use strict";
    t.extend = function(e) {
        var t, r, i, a, o = Array.prototype.slice.call(arguments, 1);
        for (t = 0, r = o.length; t < r; t += 1)
            if (i = o[t])
                for (a in i) n.call(i, a) && (e[a] = i[a]);
        return e
    };
    var n = Object.prototype.hasOwnProperty;
    t.hop = n
}