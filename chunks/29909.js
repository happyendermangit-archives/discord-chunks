function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("68405"),
        u = n("985375"),
        d = n("225196"),
        _ = n("887208"),
        c = n("585483"),
        E = n("981631"),
        I = n("689938"),
        T = n("740184");
    t.default = r.memo(function(e) {
        let {
            width: t,
            height: n,
            src: s,
            url: f,
            format: S,
            className: h
        } = e, [A, m] = r.useState(!1), N = (0, u.useIsFavoriteGIF)((0, l.gifUrlKey)(f)), p = N ? I.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : I.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, O = N ? _.default : d.default;
        r.useEffect(() => {
            if (!A) return;
            let e = setTimeout(() => {
                m(!1)
            }, 500);
            return () => clearTimeout(e)
        }, [A]);
        let R = e => {
            e.preventDefault(), e.stopPropagation(), m(!0), N ? (0, l.removeFavoriteGIF)(f) : ((0, l.addFavoriteGIF)({
                url: f,
                src: s,
                width: t,
                height: n,
                format: S
            }), c.ComponentDispatch.dispatch(E.ComponentActions.FAVORITE_GIF))
        };
        return (0, i.jsx)(o.Tooltip, {
            text: p,
            children: e => (0, i.jsx)(o.Clickable, {
                ...e,
                className: a()(h, T.size, T.gifFavoriteButton, {
                    [T.selected]: N,
                    [T.showPulse]: A
                }),
                onMouseDown: e => e.preventDefault(),
                onClick: R,
                onDoubleClick: e => e.preventDefault(),
                children: (0, i.jsx)(O, {
                    className: T.icon
                })
            })
        })
    })
}