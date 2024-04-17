function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("652853"),
        o = n("228168"),
        l = n("3062");

    function u(e) {
        let {
            children: t,
            isFaded: n
        } = e, {
            profileType: r
        } = (0, a.useUserProfileThemeContext)();
        return (0, i.jsx)("div", {
            className: s()(l.wrapper, {
                [l.faded]: n,
                [l.modal]: r === o.UserProfileTypes.MODAL
            }),
            children: t
        })
    }
}