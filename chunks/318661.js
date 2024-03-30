function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        getDisplayProfile: function() {
            return d
        }
    }), n("47120");
    var i = n("442837"),
        r = n("594174"),
        s = n("251625"),
        a = n("255564"),
        o = n("621853");

    function l(e, t) {
        return (0, i.useStateFromStores)([r.default, o.default], () => d(e, t, [r.default, o.default]))
    }
    let u = (0, s.cachedFunction)((e, t) => new a.default(e, t));

    function d(e, t) {
        let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, o.default], s = n.getUser(e), a = i.getUserProfile(e), l = i.getGuildMemberProfile(e, t);
        return null == s || null == a ? null : u(a, l)
    }
}