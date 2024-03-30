function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("386926"),
        i = n("877987"),
        a = n("989171");

    function u(e) {
        var t = e.userId,
            n = e.guild,
            u = e.guildMember;
        return r.createElement(i.default, null, r.createElement(o.default, {
            userId: t,
            guild: n,
            guildMember: u,
            headingClassName: a.title,
            textClassName: a.body
        }))
    }
}