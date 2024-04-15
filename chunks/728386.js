function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("143927"),
        l = n("532772"),
        u = n("570220"),
        d = n("28546"),
        _ = n("147915"),
        c = n("957825"),
        E = n("689938"),
        I = n("23383");
    t.default = r.memo(r.forwardRef(function(e, t) {
        let {
            disabled: n,
            type: s
        } = e, [T, f] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.pickerId], o.default), S = r.useContext(u.default), [A, h] = r.useState(!1), m = T === c.ExpressionPickerViewType.STICKER, N = r.useCallback(() => {
            (0, d.toggleExpressionPicker)(c.ExpressionPickerViewType.STICKER, s)
        }, [s]);
        r.useEffect(() => {
            let e = () => {
                    requestAnimationFrame(() => {
                        h(!0)
                    })
                },
                t = () => {
                    requestAnimationFrame(() => {
                        h(!1)
                    })
                };
            return S.addListener("sticker-suggestions-shown", e), S.addListener("sticker-suggestions-hidden", t), () => {
                S.removeListener("sticker-suggestions-shown", e), S.removeListener("sticker-suggestions-hidden", t)
            }
        }, [S]);
        let {
            Component: O,
            events: p,
            play: R
        } = (0, l.useStickerLottie)();
        return n ? null : (0, i.jsx)("div", {
            className: a()(c.CHAT_INPUT_BUTTON_CLASSNAME, I.buttonContainer),
            ref: t,
            children: (0, i.jsx)(_.default, {
                innerClassName: a()(I.button, I.stickerButton, {
                    [I.stickerButtonTilted]: A && !m
                }),
                ...p,
                onClick: () => {
                    N(), R()
                },
                isActive: m,
                "aria-label": E.default.Messages.STICKER_BUTTON_LABEL,
                "aria-expanded": m,
                "aria-haspopup": "dialog",
                "aria-controls": f,
                sparkle: !1,
                notification: null,
                children: (0, i.jsx)(O, {
                    color: "currentColor"
                })
            })
        })
    }))
}