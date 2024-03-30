function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("481060"),
        o = n("466111"),
        l = n("689938"),
        u = n("208565");

    function d(e) {
        let {
            text: t = l.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
            className: n
        } = e;
        return (0, i.jsx)(a.Tooltip, {
            text: t,
            children: e => (0, i.jsx)(a.Clickable, {
                ...e,
                children: (0, i.jsx)(o.default, {
                    className: s()(u.nitroWheel, n)
                })
            })
        })
    }
}