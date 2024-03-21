function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return U
        }
    }), E("222007");
    var t = E("37983"),
        o = E("884691"),
        n = E("414456"),
        r = E.n(n),
        a = E("66007"),
        i = E("800619"),
        I = E("459334"),
        s = E("151426"),
        T = E("669491"),
        S = E("77078"),
        N = E("79112"),
        O = E("10641"),
        A = E("447845"),
        R = E("724001"),
        l = E("638131"),
        u = E("630615"),
        L = E("49111"),
        C = E("994428"),
        c = E("782340"),
        D = E("61701");
    let d = "https://www.youtube.com/embed/".concat(u.LOOTBOX_VIDEO_ID, "?autoplay=1&mute=1&controls=0&loop=1&playlist=").concat(u.LOOTBOX_VIDEO_ID, "&origin=https://").concat(L.PRIMARY_DOMAIN);

    function U() {
        let [e, _] = o.useState(!1), {
            showMainEntrypoints: E
        } = A.default.useExperiment({
            location: "lootbox_entrypoint"
        }), n = !(0, O.useIsDismissibleContentDismissed)(s.DismissibleContent.LOOTBOXES_ENTRYPOINT), u = e => {
            (0, O.markDismissibleContentAsDismissed)(s.DismissibleContent.LOOTBOXES_ENTRYPOINT, {
                dismissAction: e
            })
        };
        return E && n ? (0, t.jsxs)("div", {
            className: r(D.wrapper, e ? D.wrapperHovered : null),
            onMouseLeave: () => _(!1),
            children: [(0, t.jsxs)(S.Clickable, {
                className: D.closeButton,
                onClick: () => u(C.ContentDismissActionType.DISMISS),
                children: [(0, t.jsx)(i.CloseSmallIcon, {
                    className: D.closeIcon,
                    color: T.default.colors.WHITE
                }), (0, t.jsx)(I.Text, {
                    variant: "text-xs/bold",
                    color: "always-white",
                    children: c.default.Messages.PACKAGES_ENTRYPOINT_CLOSE
                })]
            }), (0, t.jsxs)("div", {
                className: D.videoWrapper,
                children: [(0, t.jsx)("iframe", {
                    className: D.video,
                    src: d,
                    sandbox: "allow-same-origin allow-scripts"
                }), (0, t.jsxs)(S.Clickable, {
                    className: D.entrypoint,
                    onClick: () => {
                        u(C.ContentDismissActionType.PRIMARY), N.default.open(L.UserSettingsSections.LOOTBOXES)
                    },
                    onMouseEnter: () => _(!0),
                    children: [(0, t.jsx)("div", {
                        className: D.backgroundWrapper,
                        children: (0, t.jsx)(l.default, {
                            className: D.backgroundImage,
                            pageMultiplier: 5
                        })
                    }), (0, t.jsx)(R.default, {
                        className: D.image,
                        color: T.default.colors.POLLS_NORMAL_FILL_HOVER,
                        width: 70,
                        height: 70
                    }), (0, t.jsxs)("div", {
                        className: D.body,
                        children: [(0, t.jsx)(I.Text, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: c.default.Messages.PACKAGES_ENTRYPOINT_TITLE
                        }), (0, t.jsx)(I.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: c.default.Messages.PACKAGES_ENTRYPOINT_DESCRIPTION
                        })]
                    }), (0, t.jsx)("div", {
                        className: D.buttonWrapper,
                        children: (0, t.jsx)("div", {
                            className: D.iconButton,
                            children: (0, t.jsx)(a.ArrowLargeRightIcon, {
                                className: D.buttonIcon,
                                color: T.default.colors.WHITE
                            })
                        })
                    })]
                })]
            })]
        }) : null
    }
}