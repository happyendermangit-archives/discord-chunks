function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return I
        }
    }), r("222007");
    var s = r("37983"),
        n = r("884691"),
        l = r("414456"),
        i = r.n(l),
        a = r("77078"),
        o = r("960476"),
        u = r("140331"),
        c = r("118849"),
        d = r("671434"),
        h = r("659500"),
        f = r("49111"),
        m = r("782340"),
        p = r("420804"),
        I = n.memo(function(e) {
            let {
                width: t,
                height: r,
                src: l,
                url: I,
                format: g,
                className: _
            } = e, [E, R] = n.useState(!1), S = (0, u.useIsFavoriteGIF)(I), y = S ? m.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : m.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, v = S ? d.default : c.default;
            n.useEffect(() => {
                if (!E) return;
                let e = setTimeout(() => {
                    R(!1)
                }, 500);
                return () => clearTimeout(e)
            }, [E]);
            let F = e => {
                e.preventDefault(), e.stopPropagation(), R(!0), S ? (0, o.removeFavoriteGIF)(I) : ((0, o.addFavoriteGIF)({
                    url: I,
                    src: l,
                    width: t,
                    height: r,
                    format: g
                }), h.ComponentDispatch.dispatch(f.ComponentActions.FAVORITE_GIF))
            };
            return (0, s.jsx)(a.Tooltip, {
                text: y,
                children: e => (0, s.jsx)(a.Clickable, {
                    ...e,
                    className: i(_, p.size, p.gifFavoriteButton, {
                        [p.selected]: S,
                        [p.showPulse]: E
                    }),
                    onMouseDown: e => e.preventDefault(),
                    onClick: F,
                    onDoubleClick: e => e.preventDefault(),
                    children: (0, s.jsx)(v, {
                        className: p.icon
                    })
                })
            })
        })
}