function(e, t, n) {
    "use strict";
    n("70102"), n("975169")();
    var r = n("105562"),
        i = n("865435"),
        o = n("828194"),
        s = n("738838"),
        a = n("37549"),
        c = n("648644"),
        u = c(a("%Promise.all%")),
        d = c(a("%Promise.reject%"));
    e.exports = function(e) {
        var t = this;
        if ("Object" !== i(t)) throw TypeError("`this` value must be an object");
        return u(t, s(o(e), function(e) {
            var n = r(t, e);
            try {
                return n.then(function(e) {
                    return {
                        status: "fulfilled",
                        value: e
                    }
                }, function(e) {
                    return {
                        status: "rejected",
                        reason: e
                    }
                })
            } catch (e) {
                return d(t, e)
            }
        }))
    }
}