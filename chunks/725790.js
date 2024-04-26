function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("524437"),
        o = n("230711"),
        l = n("906732"),
        u = n("605236"),
        d = n("970731"),
        _ = n("350327"),
        c = n("621853"),
        E = n("981631"),
        I = n("921944"),
        T = n("526761"),
        f = n("689938"),
        S = n("962657");
    let h = a.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP,
        A = e => {
            (0, u.markDismissibleContentAsDismissed)(h, {
                dismissAction: e,
                forceTrack: !0
            })
        };
    t.default = e => {
        let {
            position: t,
            onClose: n
        } = e, {
            analyticsLocations: a
        } = (0, l.default)(), u = (0, s.useStateFromStores)([c.default], () => c.default.getIsAccessibilityTooltipViewed());
        return r.useEffect(() => u ? () => A(I.ContentDismissActionType.AUTO) : () => (0, _.handleProfileAccessibilityTooltipViewed)(), [u]), (0, i.jsx)(d.default, {
            markAsDismissed: A,
            header: f.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_TITLE,
            headerClassName: S.header,
            content: (0, i.jsx)("div", {
                className: S.content,
                children: f.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_DESCRIPTION
            }),
            buttonCTA: f.default.Messages.TAKE_ME_THERE,
            onClick: () => {
                null == n || n(), o.default.open(E.UserSettingsSections.ACCESSIBILITY, null, {
                    scrollPosition: T.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME,
                    analyticsLocations: a
                })
            },
            secondaryButtonCTA: f.default.Messages.DISMISS,
            onSecondaryClick: n,
            buttonLayout: d.ButtonLayout.STACKED,
            caretPosition: "left" === t ? d.CaretPosition.RIGHT_CENTER : d.CaretPosition.LEFT_CENTER
        })
    }
}