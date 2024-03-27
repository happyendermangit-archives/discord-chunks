function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("37983"),
        l = n("884691"),
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
        x = n("782340"),
        E = n("779614");
    let y = s.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP,
        g = e => {
            (0, u.markDismissibleContentAsDismissed)(y, {
                dismissAction: e,
                forceTrack: !0
            })
        };
    var S = e => {
        let {
            position: t,
            onClose: n
        } = e, {
            analyticsLocations: s
        } = (0, o.default)(), u = (0, a.useStateFromStores)([f.default], () => f.default.getIsAccessibilityTooltipViewed());
        return l.useEffect(() => u ? () => g(p.ContentDismissActionType.AUTO) : () => (0, c.handleProfileAccessibilityTooltipViewed)(), [u]), (0, i.jsx)(d.default, {
            markAsDismissed: g,
            header: x.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_TITLE,
            headerClassName: E.header,
            content: (0, i.jsx)("div", {
                className: E.content,
                children: x.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_DESCRIPTION
            }),
            buttonCTA: x.default.Messages.TAKE_ME_THERE,
            onClick: () => {
                null == n || n(), r.default.open(m.UserSettingsSections.ACCESSIBILITY, null, {
                    scrollPosition: h.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME,
                    analyticsLocations: s
                })
            },
            secondaryButtonCTA: x.default.Messages.DISMISS,
            onSecondaryClick: n,
            buttonLayout: d.ButtonLayout.STACKED,
            caretPosition: "left" === t ? d.CaretPosition.RIGHT_CENTER : d.CaretPosition.LEFT_CENTER
        })
    }
}