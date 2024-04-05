function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("570140"),
        l = n("587446"),
        u = n("996073"),
        d = n("153124"),
        _ = n("327943"),
        c = n("401460"),
        E = n("441319"),
        I = n("526761"),
        T = n("689938"),
        f = n("972896");

    function S(e) {
        let {
            className: t,
            disabled: n,
            renderCTAButtons: S
        } = e, [A, h] = (0, s.useStateFromStoresArray)([_.default], () => [_.default.getCurrentDesktopIcon(), _.default.isEditorOpen]), m = r.useRef(null);
        (0, u.default)(m, I.AppearanceScrollPositions.CUSTOM_APP_ICONS);
        let N = (0, d.useUID)(),
            O = (0, a.useRadioGroup)({
                orientation: "horizontal",
                labelledBy: N
            }),
            p = e => {
                o.default.dispatch({
                    type: "APP_ICON_UPDATED",
                    id: e
                })
            };
        return (0, i.jsx)("div", {
            ref: m,
            children: (0, i.jsx)("div", {
                ...O,
                className: f.__invalid_container,
                children: (0, i.jsxs)("div", {
                    className: t,
                    children: [(0, i.jsxs)("div", {
                        className: f.header,
                        children: [(0, i.jsxs)("div", {
                            className: f.headings,
                            children: [h ? null : (0, i.jsxs)("div", {
                                className: f.title,
                                children: [(0, i.jsx)(a.Heading, {
                                    variant: "text-md/medium",
                                    children: T.default.Messages.APP_ICON_SETTINGS_TITLE
                                }), (0, i.jsx)(l.default, {
                                    className: f.premiumIcon
                                })]
                            }), (0, i.jsx)(a.Heading, {
                                variant: "text-sm/normal",
                                children: T.default.Messages.APP_ICON_SETTINGS_DESCRIPTION
                            })]
                        }), null == S ? void 0 : S()]
                    }), (0, i.jsx)("div", {
                        className: f.presets,
                        children: E.ICONS.filter(e => {
                            let {
                                isHidden: t
                            } = e;
                            return !0 !== t
                        }).map((e, t) => (0, i.jsx)(c.default, {
                            icon: e,
                            isSelected: A === e.id,
                            onSelect: e => p(e),
                            disabled: n,
                            tabIndex: 0 !== t || n ? void 0 : 0
                        }, e.id))
                    })]
                })
            })
        })
    }
}