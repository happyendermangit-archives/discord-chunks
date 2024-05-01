function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetDismissibleContent: function() {
            return E
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("581883"),
        a = n("914010"),
        o = n("915486"),
        l = n("68985"),
        u = n("211644"),
        d = n("605236"),
        _ = n("57207"),
        c = n("526761");

    function E(e, t, n) {
        let E = (0, r.useStateFromStores)([s.default], () => {
                var e;
                return null === (e = s.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
            }),
            I = (0, r.useStateFromStores)([a.default], () => a.default.getGuildId()),
            T = (0, _.useNewUserDismissibleContent)(e),
            f = null;
        s.default.hasLoaded(c.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? f = T.find(e => null == E || !(0, o.hasBit)(E, e)) : null != E && (f = T.find(e => !(0, o.hasBit)(E, e)));
        let S = (0, u.default)(e => null != f && e.currentlyShown.has(f)),
            h = (0, r.useStateFromStores)([l.default], () => null != f && l.default.hasUserHitDCCap(f));
        i.useEffect(() => {
            if (null != f) return (0, d.requestMarkDismissibleContentAsShown)(f, {
                groupName: t,
                guildId: I
            }, n), () => {
                if (null == f) return;
                let e = !l.default.hasUserHitDCCap();
                (0, u.removeCandidateContent)({
                    content: f,
                    groupName: t
                }, e)
            }
        }, [f, t, I, h, n]);
        let A = i.useCallback(e => {
            null != f && (0, d.markDismissibleContentAsDismissed)(f, {
                dismissAction: e,
                groupName: t,
                guildId: I
            })
        }, [f, t, I]);
        return [S && null != f ? f : null, A]
    }
}