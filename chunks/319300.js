function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("81334"),
        s = n("659101"),
        a = n("989171");

    function o(e) {
        let {
            userId: t,
            guildId: n
        } = e;
        return (0, i.jsx)(s.default, {
            children: (0, i.jsx)(r.default, {
                userId: t,
                guildId: n,
                headingClassName: a.title,
                textClassName: a.body
            })
        })
    }
}