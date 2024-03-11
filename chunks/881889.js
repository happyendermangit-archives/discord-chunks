function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return C
        }
    });
    var t = E("37983"),
        o = E("884691"),
        n = E("66007"),
        r = E("800619"),
        a = E("459334"),
        i = E("151426"),
        I = E("669491"),
        s = E("77078"),
        T = E("79112"),
        S = E("10641"),
        N = E("447845"),
        O = E("809094"),
        A = E("108250"),
        R = E("49111"),
        l = E("994428"),
        u = E("782340"),
        L = E("543178");

    function C() {
        let {
            allowOpeningLootboxes: e
        } = N.default.useExperiment({
            location: "lootbox_entrypoint"
        }), _ = !(0, S.useIsDismissibleContentDismissed)(i.DismissibleContent.LOOTBOXES_ENTRYPOINT), E = e => {
            (0, S.markDismissibleContentAsDismissed)(i.DismissibleContent.LOOTBOXES_ENTRYPOINT, {
                dismissAction: e
            })
        };
        return (o.useEffect(() => {
            e && (0, S.requestMarkDismissibleContentAsShown)(i.DismissibleContent.LOOTBOXES_ENTRYPOINT)
        }, [e]), e && _) ? (0, t.jsxs)("div", {
            className: L.wrapper,
            children: [(0, t.jsxs)(s.Clickable, {
                className: L.closeButton,
                onClick: () => E(l.ContentDismissActionType.DISMISS),
                children: [(0, t.jsx)(r.CloseSmallIcon, {
                    className: L.closeIcon,
                    color: I.default.colors.WHITE
                }), (0, t.jsx)(a.Text, {
                    variant: "text-xs/bold",
                    color: "always-white",
                    children: u.default.Messages.PACKAGES_ENTRYPOINT_CLOSE
                })]
            }), (0, t.jsxs)(s.Clickable, {
                className: L.entrypoint,
                onClick: () => {
                    E(l.ContentDismissActionType.PRIMARY), T.default.open(R.UserSettingsSections.LOOTBOXES)
                },
                children: [(0, t.jsx)("div", {
                    className: L.backgroundWrapper,
                    children: (0, t.jsx)(A.default, {
                        className: L.backgroundImage,
                        pageMultiplier: 5
                    })
                }), (0, t.jsx)(O.default, {
                    className: L.image,
                    color: I.default.colors.POLLS_NORMAL_FILL_HOVER,
                    width: 70,
                    height: 70
                }), (0, t.jsxs)("div", {
                    className: L.body,
                    children: [(0, t.jsx)(a.Text, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: u.default.Messages.PACKAGES_ENTRYPOINT_TITLE
                    }), (0, t.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: u.default.Messages.PACKAGES_ENTRYPOINT_DESCRIPTION
                    })]
                }), (0, t.jsx)("div", {
                    className: L.buttonWrapper,
                    children: (0, t.jsx)("div", {
                        className: L.iconButton,
                        children: (0, t.jsx)(n.ArrowLargeRightIcon, {
                            className: L.buttonIcon,
                            color: I.default.colors.WHITE
                        })
                    })
                })]
            })]
        }) : null
    }
}