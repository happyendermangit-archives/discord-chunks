function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var i = n("37983"),
        a = n("884691"),
        l = n("414456"),
        s = n.n(l),
        o = n("917351"),
        r = n.n(o),
        u = n("77078"),
        d = n("164546"),
        c = n("513196"),
        f = n("42723"),
        g = n("605475"),
        m = n("49111"),
        h = n("782340"),
        _ = n("113037");
    let p = () => [h.default.Messages.APP_ICON_PIRATE, h.default.Messages.APP_ICON_PIRATE_1, h.default.Messages.APP_ICON_PIRATE_2, h.default.Messages.APP_ICON_PIRATE_3, h.default.Messages.APP_ICON_PIRATE_4],
        S = () => {
            var e;
            return null !== (e = r.sample(p())) && void 0 !== e ? e : h.default.Messages.APP_ICON_PIRATE
        };

    function Selection(e) {
        let {
            id: t,
            className: n,
            onSelect: l,
            isSelected: o = !1,
            tabIndex: r,
            children: f
        } = e, [h, p] = a.useState(g.ICONS_BY_ID[t].name), E = t === c.PremiumAppIconIds.PIRATE, T = (0, u.useRadioItem)({
            label: h,
            isSelected: o
        });
        return (0, i.jsx)(u.Tooltip, {
            text: h,
            onTooltipShow: () => E && p(S()),
            children: e => (0, i.jsxs)("div", {
                className: _.appIconSelectionContainer,
                children: [(0, i.jsx)(u.Clickable, {
                    ...e,
                    ...T,
                    tabIndex: null != r ? r : T.tabIndex,
                    className: s(_.appIconSelection, {
                        [_.selected]: o
                    }, n),
                    onClick: o ? m.NOOP : () => null == l ? void 0 : l(t),
                    children: f
                }), o && (0, i.jsx)(d.SelectionCircle, {})]
            })
        })
    }

    function E(e) {
        let {
            icon: t,
            isSelected: n,
            disabled: a,
            tabIndex: l,
            onSelect: s
        } = e;
        return (0, i.jsx)(Selection, {
            onSelect: a ? void 0 : s,
            isSelected: n,
            id: t.id,
            className: a ? _.disabled : void 0,
            tabIndex: l,
            children: (0, i.jsx)(f.default, {
                id: t.id,
                width: g.CUSTOM_BASE_SIZE
            })
        })
    }
}