function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        markContentAsDismissed: function() {
            return I
        },
        useIsContentDismissed: function() {
            return E
        }
    });
    var i = n("442837"),
        r = n("524437"),
        a = n("675478"),
        s = n("581883"),
        o = n("626135"),
        l = n("915486"),
        u = n("981631"),
        d = n("921944"),
        _ = n("526761");

    function c(e, t) {
        let n = s.default.getDismissedGuildContent(t);
        return null != n && (0, l.hasBit)(n, e)
    }

    function E(e, t) {
        return (0, i.useStateFromStores)([s.default], () => c(e, t))
    }

    function I(e, t, n, i) {
        (0, a.updateUserGuildSettings)(t, n => {
            if (c(e, t)) return !1;
            n.dismissedGuildContent = (0, l.addBit)(n.dismissedGuildContent, e)
        }, _.UserSettingsDelay.INFREQUENT_USER_ACTION), n && o.default.track(u.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
            type: r.DismissibleGuildContent[e],
            guild_id: t,
            action: null != i ? i : d.ContentDismissActionType.UNKNOWN
        })
    }
}