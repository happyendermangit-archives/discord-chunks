function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("16470"),
        o = n("538282"),
        u = n("882641"),
        d = n("13030"),
        c = n("350583"),
        f = i.memo(i.forwardRef(function(e, t) {
            let {
                disabled: n,
                type: a
            } = e, [f, m, p] = (0, o.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], r.default), h = i.useCallback(() => {
                (0, o.toggleExpressionPicker)(d.ExpressionPickerViewType.EMOJI, a)
            }, [a]);
            return n ? null : (0, l.jsx)("div", {
                className: s(d.CHAT_INPUT_BUTTON_CLASSNAME, c.buttonContainer),
                ref: t,
                children: (0, l.jsx)(u.default, {
                    className: c.emojiButton,
                    onClick: h,
                    active: f === d.ExpressionPickerViewType.EMOJI && m === a,
                    "aria-controls": p,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: -4,
                            right: -4
                        }
                    }
                })
            })
        }))
}