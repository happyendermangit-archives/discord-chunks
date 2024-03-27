function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        },
        getVideoPermission: function() {
            return l
        }
    });
    var i = n("442837"),
        r = n("102172"),
        s = n("430824"),
        a = n("496675");

    function o(e) {
        return (0, i.useStateFromStores)([s.default, a.default], () => e.isPrivate() || (0, r.canStreamInChannel)(e, s.default, a.default, !1), [e])
    }

    function l(e) {
        return e.isPrivate() || (0, r.canStreamInChannel)(e, s.default, a.default, !1)
    }
}