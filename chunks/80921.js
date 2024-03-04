function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("16470"),
        o = n("497555"),
        u = n("200197"),
        d = n("538282"),
        c = n("551305"),
        f = n("13030"),
        m = n("782340"),
        p = n("350583"),
        h = i.memo(i.forwardRef(function(e, t) {
            let {
                disabled: n,
                type: a
            } = e, [h, E] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.pickerId], r.default), g = i.useContext(u.default), [C, S] = i.useState(!1), T = h === f.ExpressionPickerViewType.STICKER, v = i.useCallback(() => {
                (0, d.toggleExpressionPicker)(f.ExpressionPickerViewType.STICKER, a)
            }, [a]);
            i.useEffect(() => {
                let e = () => {
                        requestAnimationFrame(() => {
                            S(!0)
                        })
                    },
                    t = () => {
                        requestAnimationFrame(() => {
                            S(!1)
                        })
                    };
                return g.addListener("sticker-suggestions-shown", e), g.addListener("sticker-suggestions-hidden", t), () => {
                    g.removeListener("sticker-suggestions-shown", e), g.removeListener("sticker-suggestions-hidden", t)
                }
            }, [g]);
            let {
                Component: I,
                events: _
            } = (0, o.useStickerLottie)();
            return n ? null : (0, l.jsx)("div", {
                className: s(f.CHAT_INPUT_BUTTON_CLASSNAME, p.buttonContainer),
                ref: t,
                children: (0, l.jsx)(c.default, {
                    innerClassName: s(p.button, p.stickerButton, {
                        [p.stickerButtonTilted]: C && !T
                    }),
                    ..._,
                    onClick: v,
                    isActive: T,
                    "aria-label": m.default.Messages.STICKER_BUTTON_LABEL,
                    "aria-expanded": T,
                    "aria-haspopup": "dialog",
                    "aria-controls": E,
                    sparkle: !1,
                    notification: null,
                    children: (0, l.jsx)(I, {
                        color: "currentColor"
                    })
                })
            })
        }))
}