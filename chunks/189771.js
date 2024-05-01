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
        a = n("430824"),
        s = n("496675");

    function o(e) {
        return (0, i.useStateFromStores)([a.default, s.default], () => e.isPrivate() || (0, r.canStreamInChannel)(e, a.default, s.default, !1), [e])
    }

    function l(e) {
        return e.isPrivate() || (0, r.canStreamInChannel)(e, a.default, s.default, !1)
    }
}