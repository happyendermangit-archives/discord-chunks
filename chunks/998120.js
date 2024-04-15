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
        a = n("955623"),
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
        } = (0, l.useUserProfileAnalyticsContext)(), E = (0, u.default)(t.id), I = null == E.note ? d.default.Messages.ADD_NOTE : (0, i.jsxs)("div", {
            className: _.noteText,
            children: [(0, i.jsx)(o.TextAreaAutosize, {
                className: _.noteTextArea,
                value: E.note
            }), (0, i.jsx)(a.PencilIcon, {
                className: _.noteIcon,
                height: 14,
                width: 14,
                color: r.default.colors.INTERACTIVE_MUTED
            })]
        }), T = null == E.note ? d.default.Messages.ADD_NOTE : E.note;
        return (0, i.jsx)(o.TooltipContainer, {
            text: I,
            "aria-label": T,
            children: (0, i.jsx)(o.Clickable, {
                onClick: () => {
                    c({
                        action: "PRESS_ADD_NOTE"
                    }), n()
                },
                className: _.noteClickable,
                children: (0, i.jsx)(s.PaperIcon, {
                    height: 16,
                    width: 16,
                    color: r.default.colors.INTERACTIVE_MUTED
                })
            })
        })
    }
}