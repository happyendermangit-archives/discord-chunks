function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return L
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("66007"),
        n = E("800619"),
        r = E("459334"),
        a = E("151426"),
        i = E("669491"),
        I = E("77078"),
        s = E("79112"),
        T = E("10641"),
        S = E("447845"),
        N = E("809094"),
        O = E("108250"),
        A = E("49111"),
        R = E("994428"),
        l = E("782340"),
        u = E("543178");

    function L() {
        let {
            allowOpeningLootboxes: e
        } = S.default.useExperiment({
            location: "lootbox_entrypoint"
        }), _ = !(0, T.useIsDismissibleContentDismissed)(a.DismissibleContent.LOOTBOXES_ENTRYPOINT), E = e => {
            (0, T.markDismissibleContentAsDismissed)(a.DismissibleContent.LOOTBOXES_ENTRYPOINT, {
                dismissAction: e
            })
        };
        return e && _ ? (0, t.jsxs)("div", {
            className: u.wrapper,
            children: [(0, t.jsxs)(I.Clickable, {
                className: u.closeButton,
                onClick: () => E(R.ContentDismissActionType.DISMISS),
                children: [(0, t.jsx)(n.CloseSmallIcon, {
                    className: u.closeIcon,
                    color: i.default.colors.WHITE
                }), (0, t.jsx)(r.Text, {
                    variant: "text-xs/bold",
                    color: "always-white",
                    children: l.default.Messages.PACKAGES_ENTRYPOINT_CLOSE
                })]
            }), (0, t.jsxs)(I.Clickable, {
                className: u.entrypoint,
                onClick: () => {
                    E(R.ContentDismissActionType.PRIMARY), s.default.open(A.UserSettingsSections.LOOTBOXES)
                },
                children: [(0, t.jsx)("div", {
                    className: u.backgroundWrapper,
                    children: (0, t.jsx)(O.default, {
                        className: u.backgroundImage,
                        pageMultiplier: 5
                    })
                }), (0, t.jsx)(N.default, {
                    className: u.image,
                    color: i.default.colors.POLLS_NORMAL_FILL_HOVER,
                    width: 70,
                    height: 70
                }), (0, t.jsxs)("div", {
                    className: u.body,
                    children: [(0, t.jsx)(r.Text, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: l.default.Messages.PACKAGES_ENTRYPOINT_TITLE
                    }), (0, t.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: l.default.Messages.PACKAGES_ENTRYPOINT_DESCRIPTION
                    })]
                }), (0, t.jsx)("div", {
                    className: u.buttonWrapper,
                    children: (0, t.jsx)("div", {
                        className: u.iconButton,
                        children: (0, t.jsx)(o.ArrowLargeRightIcon, {
                            className: u.buttonIcon,
                            color: i.default.colors.WHITE
                        })
                    })
                })]
            })]
        }) : null
    }
}