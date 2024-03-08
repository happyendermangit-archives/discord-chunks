function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("16470"),
        o = n("446674"),
        u = n("77078"),
        d = n("538282"),
        c = n("374363"),
        f = n("551305"),
        p = n("110006"),
        m = n("378765"),
        h = n("49111"),
        x = n("13030"),
        E = n("782340"),
        y = n("350583"),
        g = l.memo(l.forwardRef(function(e, t) {
            let {
                disabled: n,
                type: a
            } = e, [g, S] = l.useState(!1), C = (0, o.useStateFromStores)([c.default], () => {
                var e, t;
                return g && Object.values(null !== (t = null === (e = c.default.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2
            }), [I, T, _] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], r.default), v = l.useRef(0), N = l.useCallback(() => {
                S(!0), clearTimeout(v.current), v.current = setTimeout(() => {
                    S(!1)
                }, 1500)
            }, []);
            l.useEffect(() => () => {
                clearTimeout(v.current)
            }), (0, m.useComponentAction)({
                event: h.ComponentActions.FAVORITE_GIF,
                handler: N
            });
            let A = l.useCallback(() => {
                (0, d.toggleExpressionPicker)(x.ExpressionPickerViewType.GIF, a)
            }, [a]);
            if (n) return null;
            let O = I === x.ExpressionPickerViewType.GIF && T === a;
            return (0, i.jsx)(u.Tooltip, {
                text: C ? E.default.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
                forceOpen: !0,
                children: e => (0, i.jsx)("div", {
                    ref: t,
                    className: s(x.CHAT_INPUT_BUTTON_CLASSNAME, y.buttonContainer),
                    ...e,
                    children: (0, i.jsx)(f.default, {
                        innerClassName: y.button,
                        icon: p.default,
                        onClick: A,
                        isActive: O,
                        pulse: g,
                        "aria-label": E.default.Messages.GIF_BUTTON_LABEL,
                        "aria-expanded": O,
                        "aria-haspopup": "dialog",
                        "aria-controls": _
                    })
                })
            })
        }))
}