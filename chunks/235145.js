function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetDismissibleContent: function() {
            return p
        }
    });
    var i = n("884691"),
        l = n("446674"),
        a = n("374363"),
        s = n("162771"),
        r = n("674268"),
        o = n("989691"),
        u = n("862853"),
        d = n("10641"),
        c = n("846614"),
        f = n("397336");

    function p(e, t, n) {
        let p = (0, l.useStateFromStores)([a.default], () => {
                var e;
                return null === (e = a.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
            }),
            m = (0, l.useStateFromStores)([s.default], () => s.default.getGuildId()),
            h = (0, c.useNewUserDismissibleContent)(e),
            x = null;
        a.default.hasLoaded(f.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? x = h.find(e => null == p || !(0, r.hasBit)(p, e)) : null != p && (x = h.find(e => !(0, r.hasBit)(p, e)));
        let E = (0, u.default)(e => null != x && e.currentlyShown.has(x)),
            y = (0, l.useStateFromStores)([o.default], () => null != x && o.default.hasUserHitDCCap(x));
        i.useEffect(() => {
            if (null != x) return (0, d.requestMarkDismissibleContentAsShown)(x, {
                groupName: t,
                guildId: m
            }, n), () => {
                if (null == x) return;
                let e = !o.default.hasUserHitDCCap();
                (0, u.removeCandidateContent)({
                    content: x,
                    groupName: t
                }, e)
            }
        }, [x, t, m, y, n]);
        let g = i.useCallback(e => {
            null != x && (0, d.markDismissibleContentAsDismissed)(x, {
                dismissAction: e,
                groupName: t,
                guildId: m
            })
        }, [x, t, m]);
        return [E && null != x ? x : null, g]
    }
}