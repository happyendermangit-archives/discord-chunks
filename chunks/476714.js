function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return I
        }
    }), s("222007");
    var r = s("37983"),
        n = s("884691"),
        l = s("414456"),
        i = s.n(l),
        a = s("77078"),
        o = s("960476"),
        u = s("140331"),
        c = s("118849"),
        d = s("671434"),
        h = s("659500"),
        f = s("49111"),
        p = s("782340"),
        m = s("420804"),
        I = n.memo(function(e) {
            let {
                width: t,
                height: s,
                src: l,
                url: I,
                format: g,
                className: _
            } = e, [E, R] = n.useState(!1), y = (0, u.useIsFavoriteGIF)(I), S = y ? p.default.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : p.default.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES, F = y ? d.default : c.default;
            n.useEffect(() => {
                if (!E) return;
                let e = setTimeout(() => {
                    R(!1)
                }, 500);
                return () => clearTimeout(e)
            }, [E]);
            let v = e => {
                e.preventDefault(), e.stopPropagation(), R(!0), y ? (0, o.removeFavoriteGIF)(I) : ((0, o.addFavoriteGIF)({
                    url: I,
                    src: l,
                    width: t,
                    height: s,
                    format: g
                }), h.ComponentDispatch.dispatch(f.ComponentActions.FAVORITE_GIF))
            };
            return (0, r.jsx)(a.Tooltip, {
                text: S,
                children: e => (0, r.jsx)(a.Clickable, {
                    ...e,
                    className: i(_, m.size, m.gifFavoriteButton, {
                        [m.selected]: y,
                        [m.showPulse]: E
                    }),
                    onMouseDown: e => e.preventDefault(),
                    onClick: v,
                    onDoubleClick: e => e.preventDefault(),
                    children: (0, r.jsx)(F, {
                        className: m.icon
                    })
                })
            })
        })
}