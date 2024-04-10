function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("143927"),
        l = n("442837"),
        u = n("114101"),
        d = n("481060"),
        _ = n("28546"),
        c = n("581883"),
        E = n("147915"),
        I = n("459273"),
        T = n("981631"),
        f = n("957825"),
        S = n("689938"),
        A = n("23383");
    t.default = r.memo(r.forwardRef(function(e, t) {
        let {
            disabled: n,
            type: s
        } = e, [h, m] = r.useState(!1), N = (0, l.useStateFromStores)([c.default], () => {
            var e, t;
            return h && Object.values(null !== (t = null === (e = c.default.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2
        }), [O, p, R] = (0, _.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], o.default), C = r.useRef(0), g = r.useCallback(() => {
            m(!0), clearTimeout(C.current), C.current = setTimeout(() => {
                m(!1)
            }, 1500)
        }, []);
        r.useEffect(() => () => {
            clearTimeout(C.current)
        }), (0, I.useComponentAction)({
            event: T.ComponentActions.FAVORITE_GIF,
            handler: g
        });
        let L = r.useCallback(() => {
                (0, _.toggleExpressionPicker)(f.ExpressionPickerViewType.GIF, s)
            }, [s]),
            {
                Component: D,
                events: v,
                play: M
            } = (0, u.useGifLottie)();
        if (n) return null;
        let y = O === f.ExpressionPickerViewType.GIF && p === s;
        return (0, i.jsx)(d.Tooltip, {
            text: N ? S.default.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
            forceOpen: !0,
            children: e => (0, i.jsx)("div", {
                ref: t,
                className: a()(f.CHAT_INPUT_BUTTON_CLASSNAME, A.buttonContainer),
                ...e,
                children: (0, i.jsx)(E.default, {
                    innerClassName: A.button,
                    onMouseEnter: v.onMouseEnter,
                    onMouseLeave: v.onMouseLeave,
                    onClick: () => {
                        L(), M()
                    },
                    isActive: y,
                    pulse: h,
                    "aria-label": S.default.Messages.GIF_BUTTON_LABEL,
                    "aria-expanded": y,
                    "aria-haspopup": "dialog",
                    "aria-controls": R,
                    children: (0, i.jsx)(D, {
                        color: "currentColor"
                    })
                })
            })
        })
    }))
}