function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("16470"),
        o = n("77078"),
        u = n("200197"),
        d = n("538282"),
        c = n("551305"),
        f = n("595086"),
        p = n("88497"),
        m = n("13030"),
        h = n("782340"),
        x = n("350583"),
        E = l.memo(l.forwardRef(function(e, t) {
            let n, {
                    disabled: a,
                    type: p
                } = e,
                [E, y] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.pickerId], r.default),
                g = l.useContext(u.default),
                [S, C] = l.useState(!1),
                I = E === m.ExpressionPickerViewType.STICKER,
                T = l.useCallback(() => {
                    (0, d.toggleExpressionPicker)(m.ExpressionPickerViewType.STICKER, p)
                }, [p]);
            l.useEffect(() => {
                let e = () => {
                        requestAnimationFrame(() => {
                            C(!0)
                        })
                    },
                    t = () => {
                        requestAnimationFrame(() => {
                            C(!1)
                        })
                    };
                return g.addListener("sticker-suggestions-shown", e), g.addListener("sticker-suggestions-hidden", t), () => {
                    g.removeListener("sticker-suggestions-shown", e), g.removeListener("sticker-suggestions-hidden", t)
                }
            }, [g]);
            let _ = (0, o.useRedesignIconContext)().enabled;
            return a ? null : (n = (0, i.jsx)(f.default, {
                className: _ ? "" : x.stickerIcon,
                winking: S,
                color: "currentColor"
            }), (0, i.jsx)("div", {
                className: s(m.CHAT_INPUT_BUTTON_CLASSNAME, x.buttonContainer),
                ref: t,
                children: (0, i.jsx)(c.default, {
                    innerClassName: s(x.button, x.stickerButton, {
                        [x.stickerButtonWithNotification]: !1,
                        [x.stickerButtonTilted]: S && !I
                    }),
                    onClick: T,
                    isActive: I,
                    "aria-label": h.default.Messages.STICKER_BUTTON_LABEL,
                    "aria-expanded": I,
                    "aria-haspopup": "dialog",
                    "aria-controls": y,
                    sparkle: !1,
                    notification: null,
                    children: n
                })
            }))
        }))
}