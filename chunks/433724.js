function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("37983"),
        a = n("884691"),
        l = n("446674"),
        s = n("77078"),
        o = n("913144"),
        r = n("891653"),
        u = n("225849"),
        d = n("476765"),
        c = n("805199"),
        f = n("44771"),
        g = n("605475"),
        m = n("397336"),
        h = n("782340"),
        _ = n("23661");

    function p(e) {
        let {
            className: t,
            disabled: n,
            renderCTAButtons: p
        } = e, [S, E] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.getCurrentDesktopIcon(), c.default.isEditorOpen]), T = a.useRef(null);
        (0, u.default)(T, m.AppearanceScrollPositions.CUSTOM_APP_ICONS);
        let v = (0, d.useUID)(),
            N = (0, s.useRadioGroup)({
                orientation: "horizontal",
                labelledBy: v
            }),
            I = e => {
                o.default.dispatch({
                    type: "APP_ICON_UPDATED",
                    id: e
                })
            };
        return (0, i.jsx)("div", {
            ref: T,
            children: (0, i.jsx)("div", {
                ...N,
                className: _.container,
                children: (0, i.jsxs)("div", {
                    className: t,
                    children: [(0, i.jsxs)("div", {
                        className: _.header,
                        children: [(0, i.jsxs)("div", {
                            className: _.headings,
                            children: [E ? null : (0, i.jsxs)("div", {
                                className: _.title,
                                children: [(0, i.jsx)(s.Heading, {
                                    variant: "text-md/medium",
                                    children: h.default.Messages.APP_ICON_SETTINGS_TITLE
                                }), (0, i.jsx)(r.default, {
                                    className: _.premiumIcon
                                })]
                            }), (0, i.jsx)(s.Heading, {
                                variant: "text-sm/normal",
                                children: h.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                            })]
                        }), null == p ? void 0 : p()]
                    }), (0, i.jsx)("div", {
                        className: _.presets,
                        children: g.ICONS.filter(e => {
                            let {
                                isHidden: t
                            } = e;
                            return !0 !== t
                        }).map((e, t) => (0, i.jsx)(f.default, {
                            icon: e,
                            isSelected: S === e.id,
                            onSelect: e => I(e),
                            disabled: n,
                            tabIndex: 0 !== t || n ? void 0 : 0
                        }, e.id))
                    })]
                })
            })
        })
    }
}