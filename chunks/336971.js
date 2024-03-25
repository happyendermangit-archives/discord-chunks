function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        l = n("758710"),
        i = n("981913"),
        u = n("782340"),
        o = n("936609");

    function d(e) {
        let {
            popoutOpen: t,
            onClosePopout: n,
            onOpenPopout: r,
            ...d
        } = e, c = t ? u.default.Messages.POPOUT_RETURN : u.default.Messages.POPOUT_PLAYER;
        return (0, a.jsx)(i.default, {
            label: c,
            onClick: t ? n : r,
            iconComponent: l.default,
            iconClassName: s({
                [o.popIn]: t
            }),
            ...d
        })
    }
}