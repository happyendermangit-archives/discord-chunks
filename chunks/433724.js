function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var a = n("37983"),
        i = n("884691"),
        s = n("446674"),
        l = n("77078"),
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
        } = e, [E, S] = (0, s.useStateFromStoresArray)([c.default], () => [c.default.getCurrentDesktopIcon(), c.default.isEditorOpen]), T = i.useRef(null);
        (0, u.default)(T, m.AppearanceScrollPositions.CUSTOM_APP_ICONS);
        let v = (0, d.useUID)(),
            N = (0, l.useRadioGroup)({
                orientation: "horizontal",
                labelledBy: v
            }),
            I = e => {
                o.default.dispatch({
                    type: "APP_ICON_UPDATED",
                    id: e
                })
            };
        return (0, a.jsx)("div", {
            ref: T,
            children: (0, a.jsx)("div", {
                ...N,
                className: _.container,
                children: (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsxs)("div", {
                        className: _.header,
                        children: [(0, a.jsxs)("div", {
                            className: _.headings,
                            children: [S ? null : (0, a.jsxs)("div", {
                                className: _.title,
                                children: [(0, a.jsx)(l.Heading, {
                                    variant: "text-md/medium",
                                    children: h.default.Messages.APP_ICON_SETTINGS_TITLE
                                }), (0, a.jsx)(r.default, {
                                    className: _.premiumIcon
                                })]
                            }), (0, a.jsx)(l.Heading, {
                                variant: "text-sm/normal",
                                children: h.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                            })]
                        }), null == p ? void 0 : p()]
                    }), (0, a.jsx)("div", {
                        className: _.presets,
                        children: g.ICONS.filter(e => {
                            let {
                                isHidden: t
                            } = e;
                            return !0 !== t
                        }).map((e, t) => (0, a.jsx)(f.default, {
                            icon: e,
                            isSelected: E === e.id,
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