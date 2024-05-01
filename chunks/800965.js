function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("441957"),
        o = n("871499"),
        l = n("689938"),
        u = n("529939");

    function d(e) {
        let {
            popoutOpen: t,
            onClosePopout: n,
            onOpenPopout: r,
            ...d
        } = e, _ = t ? l.default.Messages.POPOUT_RETURN : l.default.Messages.POPOUT_PLAYER;
        return (0, i.jsx)(o.default, {
            label: _,
            onClick: t ? n : r,
            iconComponent: s.default,
            iconClassName: a()({
                [u.popIn]: t
            }),
            ...d
        })
    }
}