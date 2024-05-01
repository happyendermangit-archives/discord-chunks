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
        a = n("290421"),
        s = n("80132"),
        o = n("926036");

    function l(e) {
        let {
            displayProfile: t,
            onClose: n
        } = e, l = (0, a.default)(t);
        return 0 === l.length ? null : (0, i.jsx)(i.Fragment, {
            children: (0, r.chunk)(l, 12).map(e => (0, i.jsx)(s.default, {
                badges: e,
                className: o.badgeList,
                badgeClassName: o.badge,
                onClose: n
            }, e[0].id))
        })
    }
}