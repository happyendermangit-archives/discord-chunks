function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("16470"),
        o = n("497555"),
        u = n("200197"),
        d = n("538282"),
        c = n("551305"),
        f = n("13030"),
        p = n("782340"),
        m = n("350583"),
        h = l.memo(l.forwardRef(function(e, t) {
            let {
                disabled: n,
                type: a
            } = e, [h, x] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.pickerId], r.default), E = l.useContext(u.default), [y, g] = l.useState(!1), S = h === f.ExpressionPickerViewType.STICKER, C = l.useCallback(() => {
                (0, d.toggleExpressionPicker)(f.ExpressionPickerViewType.STICKER, a)
            }, [a]);
            l.useEffect(() => {
                let e = () => {
                        requestAnimationFrame(() => {
                            g(!0)
                        })
                    },
                    t = () => {
                        requestAnimationFrame(() => {
                            g(!1)
                        })
                    };
                return E.addListener("sticker-suggestions-shown", e), E.addListener("sticker-suggestions-hidden", t), () => {
                    E.removeListener("sticker-suggestions-shown", e), E.removeListener("sticker-suggestions-hidden", t)
                }
            }, [E]);
            let {
                Component: T,
                events: _,
                play: I
            } = (0, o.useStickerLottie)();
            return n ? null : (0, i.jsx)("div", {
                className: s(f.CHAT_INPUT_BUTTON_CLASSNAME, m.buttonContainer),
                ref: t,
                children: (0, i.jsx)(c.default, {
                    innerClassName: s(m.button, m.stickerButton, {
                        [m.stickerButtonTilted]: y && !S
                    }),
                    ..._,
                    onClick: () => {
                        C(), I()
                    },
                    isActive: S,
                    "aria-label": p.default.Messages.STICKER_BUTTON_LABEL,
                    "aria-expanded": S,
                    "aria-haspopup": "dialog",
                    "aria-controls": x,
                    sparkle: !1,
                    notification: null,
                    children: (0, i.jsx)(T, {
                        color: "currentColor"
                    })
                })
            })
        }))
}