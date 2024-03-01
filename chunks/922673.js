function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHighestHoistedRole: function() {
            return u
        }
    }), n("222007"), n("446674");
    var r = n("26989"),
        i = n("305961"),
        l = n("991170");
    let u = function(e, t) {
        let [n, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.default, r.default];
        if (null == e || null == t) return null;
        let a = n.getGuild(e);
        if (null == a) return null;
        let o = u.getMember(a.id, t);
        return null == o ? null : l.default.getHighestHoistedRole(a, o)
    }
}