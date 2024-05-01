function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("143927"),
        l = n("28546"),
        u = n("401227"),
        d = n("957825"),
        _ = n("414367");
    t.default = r.memo(r.forwardRef(function(e, t) {
        let {
            disabled: n,
            type: a
        } = e, [c, E, I] = (0, l.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], o.default), T = r.useCallback(() => {
            (0, l.toggleExpressionPicker)(d.ExpressionPickerViewType.EMOJI, a)
        }, [a]);
        return n ? null : (0, i.jsx)("div", {
            className: s()(d.CHAT_INPUT_BUTTON_CLASSNAME, _.buttonContainer),
            ref: t,
            children: (0, i.jsx)(u.default, {
                className: _.emojiButton,
                onClick: T,
                active: c === d.ExpressionPickerViewType.EMOJI && E === a,
                "aria-controls": I,
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