function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHighestHoistedRole: function() {
            return a
        }
    }), n("222007"), n("446674");
    var i = n("26989"),
        s = n("305961"),
        r = n("991170");
    let a = function(e, t) {
        let [n, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default, i.default];
        if (null == e || null == t) return null;
        let o = n.getGuild(e);
        if (null == o) return null;
        let l = a.getMember(o.id, t);
        return null == l ? null : r.getHighestHoistedRole(o, l)
    }
}