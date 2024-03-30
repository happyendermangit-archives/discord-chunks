function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetDismissibleContent: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("851285"),
        a = n("63116"),
        u = n("453604"),
        s = n("469936"),
        l = n("286218"),
        c = n("510077"),
        f = n("59562"),
        d = n("382021");

    function _(e, t, n) {
        var _ = (0, o.useStateFromStores)([i.default], function() {
                var e;
                return null === (e = i.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
            }),
            E = (0, o.useStateFromStores)([a.default], function() {
                return a.default.getGuildId()
            }),
            p = (0, f.useNewUserDismissibleContent)(e),
            m = null;
        i.default.hasLoaded(d.UserSettingsTypes.PRELOADED_USER_SETTINGS) ? m = p.find(function(e) {
            return null == _ || !(0, u.hasBit)(_, e)
        }) : null != _ && (m = p.find(function(e) {
            return !(0, u.hasBit)(_, e)
        }));
        var y = (0, l.default)(function(e) {
                return null != m && e.currentlyShown.has(m)
            }),
            I = (0, o.useStateFromStores)([s.default], function() {
                return null != m && s.default.hasUserHitDCCap(m)
            });
        r.useEffect(function() {
            if (null != m) return (0, c.requestMarkDismissibleContentAsShown)(m, {
                    groupName: t,
                    guildId: E
                }, n),
                function() {
                    if (null != m) {
                        var e = !s.default.hasUserHitDCCap();
                        (0, l.removeCandidateContent)({
                            content: m,
                            groupName: t
                        }, e)
                    }
                }
        }, [m, t, E, I, n]);
        var h = r.useCallback(function(e) {
            null != m && (0, c.markDismissibleContentAsDismissed)(m, {
                dismissAction: e,
                groupName: t,
                guildId: E
            })
        }, [m, t, E]);
        return [y && null != m ? m : null, h]
    }
}