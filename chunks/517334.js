function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("724458"), n("653041"), n("47120");
    var i = n("442837"),
        r = n("592125"),
        a = n("496675"),
        s = n("823379"),
        o = n("709054"),
        l = n("146085"),
        u = n("427679");

    function d(e) {
        return function(e) {
            let t = (0, i.useStateFromStoresArray)([r.default], () => e.map(e => r.default.getChannel(e)).filter(s.isNotNullish), [e]);
            return (0, i.useStateFromStoresArray)([a.default], () => t.filter(e => a.default.can(l.JOIN_VOCAL_CHANNEL_PERMISSIONS, e)), [t])
        }((0, i.useStateFromStoresArray)([u.default], () => o.default.keys(u.default.getStageInstancesByGuild(e)), [e]))
    }
}