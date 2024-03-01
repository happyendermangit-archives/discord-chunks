function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("808653"), n("424973"), n("222007");
    var l = n("446674"),
        i = n("42203"),
        a = n("957255"),
        s = n("449008"),
        r = n("299039"),
        o = n("923510"),
        u = n("834052");

    function d(e) {
        let t = (0, l.useStateFromStoresArray)([u.default], () => r.default.keys(u.default.getStageInstancesByGuild(e)), [e]);
        return function(e) {
            let t = (0, l.useStateFromStoresArray)([i.default], () => e.map(e => i.default.getChannel(e)).filter(s.isNotNullish), [e]);
            return (0, l.useStateFromStoresArray)([a.default], () => t.filter(e => a.default.can(o.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)), [t])
        }(t)
    }
}