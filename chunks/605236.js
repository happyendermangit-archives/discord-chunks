function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isDismissibleContentDismissed: function() {
            return h
        },
        markDismissibleContentAsDismissed: function() {
            return N
        },
        requestMarkDismissibleContentAsShown: function() {
            return m
        },
        useIsDismissibleContentDismissed: function() {
            return A
        }
    }), n("47120");
    var i = n("442837"),
        r = n("524437"),
        a = n("561746"),
        s = n("675478"),
        o = n("581883"),
        l = n("626135"),
        u = n("915486"),
        d = n("261376"),
        _ = n("883904"),
        c = n("68985"),
        E = n("952193"),
        I = n("211644"),
        T = n("57207"),
        f = n("921944"),
        S = n("981631");

    function h(e) {
        var t;
        if ((0, T.disableNewUserDismissibleContent)(e)) return !0;
        let n = null === (t = o.default.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
        return null != n && (0, u.hasBit)(n, e)
    }

    function A(e) {
        return (0, i.useStateFromStores)([o.default], () => h(e))
    }

    function m(e, t, n) {
        if (!((0, I.isContentShown)(e) || c.default.hasUserHitDCCap(e) || function(e) {
                let t = E.CONTENT_TYPES_WITH_BYPASS_HOLDOUT.has(e),
                    {
                        enabled: n
                    } = a.default.getCurrentConfig({
                        location: "isUserSubjectToDCFHoldout"
                    }, {
                        autoTrackExposure: !t
                    });
                return n && !t
            }(e))) !n && (0, I.addCandidateContent)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [i, a] = (0, I.getCurrentlyShownCounts)();
                (0, _.handleDCShownToUser)(e), l.default.track(S.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
                    type: r.DismissibleContent[e],
                    content_count: i,
                    fatigable_content_count: a,
                    group_name: null == t ? void 0 : t.groupName,
                    bypass_fatigue: d.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
                    guild_id: null == t ? void 0 : t.guildId
                }), null == t || null === (n = t.onShown) || void 0 === n || n.call(t)
            }
        })
    }
    async function N(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ((0, I.isContentShown)(e) || t.forceTrack) && function(e, t) {
            var n;
            let [i] = (0, I.getCurrentlyShownCounts)(), a = c.default.getRenderedAtTimestamp(e), s = new Date, o = null == a ? null : s.getTime() - a;
            l.default.track(S.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.DismissibleContent[e],
                action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : f.ContentDismissActionType.UNKNOWN,
                content_count: i,
                group_name: null == t ? void 0 : t.groupName,
                bypass_fatigue: d.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
                guild_id: null == t ? void 0 : t.guildId,
                shown_duration: o
            })
        }(e, t), (0, _.handleDCDismissed)(e), await (0, s.addDismissedContent)(e);
        let n = !c.default.hasUserHitDCCap();
        (0, I.removeCandidateContent)({
            content: e,
            groupName: null == t ? void 0 : t.groupName
        }, n)
    }
}