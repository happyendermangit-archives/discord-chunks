function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetDismissibleContent: function() {
            return m
        }
    });
    var l = n("884691"),
        i = n("446674"),
        a = n("374363"),
        s = n("162771"),
        r = n("674268"),
        o = n("989691"),
        u = n("862853"),
        d = n("10641"),
        c = n("846614"),
        f = n("397336");

    function m(e, t, n) {
        let m = (0, i.useStateFromStores)([a.default], () => {
                var e;
                return null === (e = a.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
            }),
            p = (0, i.useStateFromStores)([s.default], () => s.default.getGuildId()),
            h = (0, c.useNewUserDismissibleContent)(e),
            E = null;
        a.default.hasLoaded(f.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? E = h.find(e => null == m || !(0, r.hasBit)(m, e)) : null != m && (E = h.find(e => !(0, r.hasBit)(m, e)));
        let g = (0, u.default)(e => null != E && e.currentlyShown.has(E)),
            S = (0, i.useStateFromStores)([o.default], () => null != E && o.default.hasUserHitDCCap(E));
        l.useEffect(() => {
            if (null != E) return (0, d.requestMarkDismissibleContentAsShown)(E, {
                groupName: t,
                guildId: p
            }, n), () => {
                if (null == E) return;
                let e = !o.default.hasUserHitDCCap();
                (0, u.removeCandidateContent)({
                    content: E,
                    groupName: t
                }, e)
            }
        }, [E, t, p, S, n]);
        let C = l.useCallback(e => {
            null != E && (0, d.markDismissibleContentAsDismissed)(E, {
                dismissAction: e,
                groupName: t,
                guildId: p
            })
        }, [E, t, p]);
        return [g && null != E ? E : null, C]
    }
}