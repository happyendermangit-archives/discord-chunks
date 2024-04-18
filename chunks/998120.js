function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        s = n("10683"),
        a = n("793080"),
        o = n("481060"),
        l = n("785717"),
        u = n("702557"),
        d = n("689938"),
        _ = n("222477");

    function c(e) {
        let {
            user: t,
            onOpenProfile: n
        } = e, {
            trackUserProfileAction: c
        } = (0, l.useUserProfileAnalyticsContext)(), {
            loading: E,
            note: I
        } = (0, u.default)(t.id), T = !E && null != I && I.length > 0, f = T ? (0, i.jsx)("div", {
            className: _.noteText,
            children: (0, i.jsx)(o.TextAreaAutosize, {
                className: _.noteTextArea,
                value: I
            })
        }) : d.default.Messages.ADD_NOTE, S = T ? I : d.default.Messages.ADD_NOTE, h = T ? s.PaperIcon : a.PaperPlusIcon;
        return (0, i.jsx)(o.TooltipContainer, {
            text: f,
            "aria-label": S,
            children: (0, i.jsx)(o.Clickable, {
                onClick: () => {
                    c({
                        action: "PRESS_ADD_NOTE"
                    }), n()
                },
                className: _.noteClickable,
                children: (0, i.jsx)(h, {
                    height: 16,
                    width: 16,
                    color: r.default.colors.INTERACTIVE_NORMAL
                })
            })
        })
    }
}