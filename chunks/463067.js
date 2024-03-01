function(t, e, s) {
    "use strict";
    s("70102"), s("975169")();
    var r = s("105562"),
        i = s("865435"),
        n = s("828194"),
        c = s("738838"),
        o = s("37549"),
        f = s("648644"),
        u = f(o("%Promise.all%")),
        a = f(o("%Promise.reject%"));
    t.exports = function(t) {
        var e = this;
        if ("Object" !== i(e)) throw TypeError("`this` value must be an object");
        return u(e, c(n(t), function(t) {
            var s = r(e, t);
            try {
                return s.then(function(t) {
                    return {
                        status: "fulfilled",
                        value: t
                    }
                }, function(t) {
                    return {
                        status: "rejected",
                        reason: t
                    }
                })
            } catch (t) {
                return a(e, t)
            }
        }))
    }
}