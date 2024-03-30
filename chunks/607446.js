function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("392711"),
        o = n.n(r);

    function i(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
            return !0
        };
        return o()(e).map(function(e) {
            return "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]
        }).flattenDeep().filter(n).value()
    }
}