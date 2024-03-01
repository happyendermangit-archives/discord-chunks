function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var i = n("37983"),
        a = n("884691"),
        s = n("446674"),
        l = n("77078"),
        r = n("913144"),
        o = n("891653"),
        u = n("225849"),
        d = n("476765"),
        c = n("805199"),
        f = n("44771"),
        m = n("605475"),
        h = n("397336"),
        g = n("782340"),
        _ = n("23661");

    function S(e) {
        let {
            className: t,
            disabled: n,
            renderCTAButtons: S
        } = e, [p, T] = (0, s.useStateFromStoresArray)([c.default], () => [c.default.getCurrentDesktopIcon(), c.default.isEditorOpen]), E = a.useRef(null);
        (0, u.default)(E, h.AppearanceScrollPositions.CUSTOM_APP_ICONS);
        let v = (0, d.useUID)(),
            I = (0, l.useRadioGroup)({
                orientation: "horizontal",
                labelledBy: v
            }),
            N = e => {
                r.default.dispatch({
                    type: "APP_ICON_UPDATED",
                    id: e
                })
            };
        return (0, i.jsx)("div", {
            ref: E,
            children: (0, i.jsx)("div", {
                ...I,
                className: _.container,
                children: (0, i.jsxs)("div", {
                    className: t,
                    children: [(0, i.jsxs)("div", {
                        className: _.header,
                        children: [(0, i.jsxs)("div", {
                            className: _.headings,
                            children: [T ? null : (0, i.jsxs)("div", {
                                className: _.title,
                                children: [(0, i.jsx)(l.Heading, {
                                    variant: "text-md/medium",
                                    children: g.default.Messages.APP_ICON_SETTINGS_TITLE
                                }), (0, i.jsx)(o.default, {
                                    className: _.premiumIcon
                                })]
                            }), (0, i.jsx)(l.Heading, {
                                variant: "text-sm/normal",
                                children: g.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                            })]
                        }), null == S ? void 0 : S()]
                    }), (0, i.jsx)("div", {
                        className: _.presets,
                        children: m.ICONS.filter(e => {
                            let {
                                isHidden: t
                            } = e;
                            return !0 !== t
                        }).map((e, t) => (0, i.jsx)(f.default, {
                            icon: e,
                            isSelected: p === e.id,
                            onSelect: e => N(e),
                            disabled: n,
                            tabIndex: 0 !== t || n ? void 0 : 0
                        }, e.id))
                    })]
                })
            })
        })
    }
}