function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("14782"),
        a = n("482644"),
        u = n("396586"),
        s = n("510077"),
        l = n("927144"),
        c = n("187192"),
        f = n("903716"),
        d = n("281767"),
        _ = n("348201"),
        E = n("382021"),
        p = n("941504"),
        m = n("556777"),
        y = i.DismissibleContent.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP,
        I = function(e) {
            (0, s.markDismissibleContentAsDismissed)(y, {
                dismissAction: e,
                forceTrack: !0
            })
        };
    t.default = function(e) {
        var t = e.position,
            n = e.onClose,
            i = (0, u.default)().analyticsLocations,
            s = (0, o.useStateFromStores)([f.default], function() {
                return f.default.getIsAccessibilityTooltipViewed()
            });
        return r.useEffect(function() {
            return s ? function() {
                return I(_.ContentDismissActionType.AUTO)
            } : function() {
                return (0, c.handleProfileAccessibilityTooltipViewed)()
            }
        }, [s]), r.createElement(l.default, {
            markAsDismissed: I,
            header: p.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_TITLE,
            headerClassName: m.header,
            content: r.createElement("div", {
                className: m.content
            }, p.default.Messages.PROFILE_THEMES_ACCESSIBILITY_TOOLTIP_DESCRIPTION),
            buttonCTA: p.default.Messages.TAKE_ME_THERE,
            onClick: function() {
                null == n || n(), a.default.open(d.UserSettingsSections.ACCESSIBILITY, null, {
                    scrollPosition: E.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME,
                    analyticsLocations: i
                })
            },
            secondaryButtonCTA: p.default.Messages.DISMISS,
            onSecondaryClick: n,
            buttonLayout: l.ButtonLayout.STACKED,
            caretPosition: "left" === t ? l.CaretPosition.RIGHT_CENTER : l.CaretPosition.LEFT_CENTER
        })
    }
}