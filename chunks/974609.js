function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHighestHoistedRole: function() {
            return a
        }
    }), n("47120"), n("442837");
    var i = n("271383"),
        r = n("430824"),
        s = n("700785");
    let a = function(e, t) {
        let [n, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, i.default];
        if (null == e || null == t) return null;
        let o = n.getGuild(e);
        if (null == o) return null;
        let l = a.getMember(o.id, t);
        return null == l ? null : s.getHighestHoistedRole(o, l)
    }
}