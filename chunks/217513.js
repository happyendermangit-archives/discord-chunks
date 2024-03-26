function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return s
        },
        getDisplayProfile: function() {
            return d
        }
    }), i("222007");
    var l = i("446674"),
        r = i("697218"),
        n = i("117362"),
        u = i("811907"),
        o = i("713135");

    function s(e, t) {
        return (0, l.useStateFromStores)([r.default, o.default], () => d(e, t, [r.default, o.default]))
    }
    let a = (0, n.cachedFunction)((e, t) => new u.default(e, t));

    function d(e, t) {
        let [i, l] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, o.default], n = i.getUser(e), u = l.getUserProfile(e), s = l.getGuildMemberProfile(e, t);
        return null == n || null == u ? null : a(u, s)
    }
}