function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var i = n("37983"),
        a = n("884691"),
        s = n("414456"),
        l = n.n(s),
        r = n("917351"),
        o = n.n(r),
        u = n("77078"),
        d = n("164546"),
        c = n("513196"),
        f = n("42723"),
        m = n("605475"),
        h = n("49111"),
        g = n("782340"),
        _ = n("113037");
    let S = () => [g.default.Messages.APP_ICON_PIRATE, g.default.Messages.APP_ICON_PIRATE_1, g.default.Messages.APP_ICON_PIRATE_2, g.default.Messages.APP_ICON_PIRATE_3, g.default.Messages.APP_ICON_PIRATE_4],
        p = () => {
            var e;
            return null !== (e = o.sample(S())) && void 0 !== e ? e : g.default.Messages.APP_ICON_PIRATE
        };

    function Selection(e) {
        let {
            id: t,
            className: n,
            onSelect: s,
            isSelected: r = !1,
            tabIndex: o,
            children: f
        } = e, [g, S] = a.useState(m.ICONS_BY_ID[t].name), T = t === c.PremiumAppIconIds.PIRATE, E = (0, u.useRadioItem)({
            label: g,
            isSelected: r
        });
        return (0, i.jsx)(u.Tooltip, {
            text: g,
            onTooltipShow: () => T && S(p()),
            children: e => (0, i.jsxs)("div", {
                className: _.appIconSelectionContainer,
                children: [(0, i.jsx)(u.Clickable, {
                    ...e,
                    ...E,
                    tabIndex: null != o ? o : E.tabIndex,
                    className: l(_.appIconSelection, {
                        [_.selected]: r
                    }, n),
                    onClick: r ? h.NOOP : () => null == s ? void 0 : s(t),
                    children: f
                }), r && (0, i.jsx)(d.SelectionCircle, {})]
            })
        })
    }

    function T(e) {
        let {
            icon: t,
            isSelected: n,
            disabled: a,
            tabIndex: s,
            onSelect: l
        } = e;
        return (0, i.jsx)(Selection, {
            onSelect: a ? void 0 : l,
            isSelected: n,
            id: t.id,
            className: a ? _.disabled : void 0,
            tabIndex: s,
            children: (0, i.jsx)(f.default, {
                id: t.id,
                width: m.CUSTOM_BASE_SIZE
            })
        })
    }
}