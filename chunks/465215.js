function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("880114"),
        a = n("777003"),
        s = n("862939");

    function r(e) {
        let {
            userId: t,
            guild: n,
            guildMember: r
        } = e;
        return (0, i.jsx)(a.default, {
            children: (0, i.jsx)(l.default, {
                userId: t,
                guild: n,
                guildMember: r,
                headingClassName: s.title,
                textClassName: s.body
            })
        })
    }
}