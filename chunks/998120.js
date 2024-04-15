function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("692547"),
        s = n("10683"),
        a = n("955623"),
        o = n("481060"),
        l = n("702557"),
        u = n("689938"),
        d = n("222477");

    function _(e) {
        let {
            user: t,
            onClick: n
        } = e, _ = (0, l.default)(t.id), c = null == _.note ? u.default.Messages.ADD_NOTE : (0, i.jsxs)("div", {
            className: d.noteText,
            children: [(0, i.jsx)(o.TextAreaAutosize, {
                className: d.noteTextArea,
                value: _.note
            }), (0, i.jsx)(a.PencilIcon, {
                className: d.noteIcon,
                height: 14,
                width: 14,
                color: r.default.colors.INTERACTIVE_MUTED
            })]
        }), E = null == _.note ? u.default.Messages.ADD_NOTE : _.note;
        return (0, i.jsx)(o.TooltipContainer, {
            text: c,
            "aria-label": E,
            children: (0, i.jsx)(o.Clickable, {
                onClick: n,
                className: d.noteClickable,
                children: (0, i.jsx)(s.PaperIcon, {
                    height: 16,
                    width: 16,
                    color: r.default.colors.INTERACTIVE_MUTED
                })
            })
        })
    }
}