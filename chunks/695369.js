function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("16470"),
        o = n("446674"),
        u = n("77078"),
        d = n("538282"),
        c = n("374363"),
        f = n("551305"),
        m = n("110006"),
        p = n("378765"),
        h = n("49111"),
        E = n("13030"),
        g = n("782340"),
        S = n("350583"),
        C = i.memo(i.forwardRef(function(e, t) {
            let {
                disabled: n,
                type: a
            } = e, [C, T] = i.useState(!1), v = (0, o.useStateFromStores)([c.default], () => {
                var e, t;
                return C && Object.values(null !== (t = null === (e = c.default.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2
            }), [I, _, N] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], r.default), A = i.useRef(0), x = i.useCallback(() => {
                T(!0), clearTimeout(A.current), A.current = setTimeout(() => {
                    T(!1)
                }, 1500)
            }, []);
            i.useEffect(() => () => {
                clearTimeout(A.current)
            }), (0, p.useComponentAction)({
                event: h.ComponentActions.FAVORITE_GIF,
                handler: x
            });
            let y = i.useCallback(() => {
                (0, d.toggleExpressionPicker)(E.ExpressionPickerViewType.GIF, a)
            }, [a]);
            if (n) return null;
            let O = I === E.ExpressionPickerViewType.GIF && _ === a;
            return (0, l.jsx)(u.Tooltip, {
                text: v ? g.default.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
                forceOpen: !0,
                children: e => (0, l.jsx)("div", {
                    ref: t,
                    className: s(E.CHAT_INPUT_BUTTON_CLASSNAME, S.buttonContainer),
                    ...e,
                    children: (0, l.jsx)(f.default, {
                        innerClassName: S.button,
                        icon: m.default,
                        onClick: y,
                        isActive: O,
                        pulse: C,
                        "aria-label": g.default.Messages.GIF_BUTTON_LABEL,
                        "aria-expanded": O,
                        "aria-haspopup": "dialog",
                        "aria-controls": N
                    })
                })
            })
        }))
}