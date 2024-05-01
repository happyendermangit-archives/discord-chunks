function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("692547"),
        o = n("10683"),
        l = n("793080"),
        u = n("481060"),
        d = n("785717"),
        _ = n("702557"),
        c = n("689938"),
        E = n("742768");

    function I(e) {
        let {
            user: t,
            onOpenProfile: n,
            className: r
        } = e, {
            trackUserProfileAction: I
        } = (0, d.useUserProfileAnalyticsContext)(), {
            loading: T,
            note: f
        } = (0, _.default)(t.id), S = !T && null != f && f.length > 0, h = S ? (0, i.jsx)("div", {
            className: E.noteText,
            children: (0, i.jsx)(u.TextAreaAutosize, {
                className: E.noteTextArea,
                value: f
            })
        }) : c.default.Messages.ADD_NOTE, A = S ? f : c.default.Messages.ADD_NOTE, m = S ? o.PaperIcon : l.PaperPlusIcon;
        return (0, i.jsx)(u.TooltipContainer, {
            text: h,
            "aria-label": A,
            children: (0, i.jsx)(u.Clickable, {
                onClick: () => {
                    I({
                        action: "PRESS_ADD_NOTE"
                    }), n()
                },
                className: a()(E.noteClickable, r),
                children: (0, i.jsx)(m, {
                    height: 16,
                    width: 16,
                    color: s.default.colors.INTERACTIVE_NORMAL
                })
            })
        })
    }
}