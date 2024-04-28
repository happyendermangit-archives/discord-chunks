function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("228168"),
        o = n("469860");

    function l(e) {
        let {
            profileType: t,
            children: n,
            isFaded: r
        } = e;
        return (0, i.jsx)("div", {
            className: s()(o.wrapper, {
                [o.biteSize]: t === a.UserProfileTypes.BITE_SIZE,
                [o.fullSize]: t === a.UserProfileTypes.FULL_SIZE,
                [o.faded]: r
            }),
            children: n
        })
    }
}