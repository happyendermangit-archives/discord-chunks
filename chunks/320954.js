function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("917351"),
        i = n.n(l);

    function r(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
        return i(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
    }
}