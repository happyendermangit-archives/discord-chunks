function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileBadgesTag: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("392711"),
        s = n("290421"),
        a = n("80132"),
        o = n("736379");

    function l(e) {
        let {
            displayProfile: t
        } = e, n = (0, s.default)(t);
        return 0 === n.length ? null : (0, i.jsx)(i.Fragment, {
            children: (0, r.chunk)(n, 12).map(e => (0, i.jsx)(a.default, {
                badges: e,
                className: o.badgeList,
                badgeClassName: o.badge
            }, e[0].id))
        })
    }
}