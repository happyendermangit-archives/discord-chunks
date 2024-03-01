function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("446674"),
        s = n("151426"),
        r = n("79112"),
        o = n("685665"),
        u = n("10641"),
        d = n("5667"),
        c = n("783142"),
        f = n("713135"),
        m = n("49111"),
        p = n("994428"),
        h = n("397336"),
        E = n("782340"),
        g = n("779614");
    let C = s.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP,
        S = e => {
            (0, u.markDismissibleContentAsDismissed)(C, {
                dismissAction: e,
                forceTrack: !0
            })
        };
    var T = e => {
        let {
            position: t,
            onClose: n
        } = e, {
            analyticsLocations: s
        } = (0, o.default)(), u = (0, a.useStateFromStores)([f.default], () => f.default.getIsAccessibilityTooltipViewed());
        return i.useEffect(() => u ? () => S(p.ContentDismissActionType.AUTO) : () => (0, c.handleProfileAccessibilityTooltipViewed)(), [u]), (0, l.jsx)(d.default, {
            markAsDismissed: S,
            header: E.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_TITLE,
            headerClassName: g.header,
            content: (0, l.jsx)("div", {
                className: g.content,
                children: E.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_DESCRIPTION
            }),
            buttonCTA: E.default.Messages.TAKE_ME_THERE,
            onClick: () => {
                null == n || n(), r.default.open(m.UserSettingsSections.ACCESSIBILITY, null, {
                    scrollPosition: h.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME,
                    analyticsLocations: s
                })
            },
            secondaryButtonCTA: E.default.Messages.DISMISS,
            onSecondaryClick: n,
            buttonLayout: d.ButtonLayout.STACKED,
            caretPosition: "left" === t ? d.CaretPosition.RIGHT_CENTER : d.CaretPosition.LEFT_CENTER
        })
    }
}