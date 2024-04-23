function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileBadgesTag: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("184325"),
        s = n("736379");

    function a(e) {
        let {
            user: t,
            guildId: n
        } = e;
        return (0, i.jsx)(r.default, {
            className: s.badges,
            user: t,
            guildId: n,
            size: r.BadgeSizes.SIZE_20
        })
    }
}