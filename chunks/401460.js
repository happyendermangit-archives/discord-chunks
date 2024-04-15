function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("481060"),
        d = n("583901"),
        _ = n("997945"),
        c = n("630117"),
        E = n("441319"),
        I = n("981631"),
        T = n("689938"),
        f = n("354585");
    let S = () => [T.default.Messages.APP_ICON_PIRATE, T.default.Messages.APP_ICON_PIRATE_1, T.default.Messages.APP_ICON_PIRATE_2, T.default.Messages.APP_ICON_PIRATE_3, T.default.Messages.APP_ICON_PIRATE_4],
        h = () => {
            var e;
            return null !== (e = l().sample(S())) && void 0 !== e ? e : T.default.Messages.APP_ICON_PIRATE
        };

    function A(e) {
        let {
            id: t,
            className: n,
            onSelect: s,
            isSelected: o = !1,
            tabIndex: l,
            children: c
        } = e, [T, S] = r.useState(E.ICONS_BY_ID[t].name), A = t === _.PremiumAppIconIds.PIRATE, m = (0, u.useRadioItem)({
            label: T,
            isSelected: o
        });
        return (0, i.jsx)(u.Tooltip, {
            text: T,
            onTooltipShow: () => A && S(h()),
            children: e => (0, i.jsxs)("div", {
                className: f.appIconSelectionContainer,
                children: [(0, i.jsx)(u.Clickable, {
                    ...e,
                    ...m,
                    tabIndex: null != l ? l : m.tabIndex,
                    className: a()(f.appIconSelection, {
                        [f.selected]: o
                    }, n),
                    onClick: o ? I.NOOP : () => null == s ? void 0 : s(t),
                    children: c
                }), o && (0, i.jsx)(d.SelectionCircle, {})]
            })
        })
    }

    function m(e) {
        let {
            icon: t,
            isSelected: n,
            disabled: r,
            tabIndex: s,
            onSelect: a
        } = e;
        return (0, i.jsx)(A, {
            onSelect: r ? void 0 : a,
            isSelected: n,
            id: t.id,
            className: r ? f.disabled : void 0,
            tabIndex: s,
            children: (0, i.jsx)(c.default, {
                id: t.id,
                width: E.CUSTOM_BASE_SIZE
            })
        })
    }
}