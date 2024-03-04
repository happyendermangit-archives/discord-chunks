function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isDismissibleContentDismissed: function() {
            return p
        },
        useIsDismissibleContentDismissed: function() {
            return S
        },
        requestMarkDismissibleContentAsShown: function() {
            return v
        },
        markDismissibleContentAsDismissed: function() {
            return T
        }
    }), n("222007");
    var i = n("446674"),
        s = n("151426"),
        r = n("193302"),
        a = n("872173"),
        o = n("374363"),
        l = n("599110"),
        u = n("674268"),
        d = n("495226"),
        c = n("585653"),
        f = n("989691"),
        _ = n("127746"),
        h = n("862853"),
        E = n("846614"),
        g = n("994428"),
        m = n("49111");

    function p(e) {
        var t;
        if ((0, E.disableNewUserDismissibleContent)(e)) return !0;
        let n = null === (t = o.default.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
        return null != n && (0, u.hasBit)(n, e)
    }

    function S(e) {
        return (0, i.useStateFromStores)([o.default], () => p(e))
    }

    function v(e, t, n) {
        if ((0, h.isContentShown)(e) || f.default.hasUserHitDCCap(e)) return;
        let i = function(e) {
            let t = _.CONTENT_TYPES_WITH_BYPASS_HOLDOUT.has(e),
                {
                    enabled: n
                } = r.default.getCurrentConfig({
                    location: "isUserSubjectToDCFHoldout"
                }, {
                    autoTrackExposure: !t
                });
            return n && !t
        }(e);
        if (!i) !n && (0, h.addCandidateContent)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [i, r] = (0, h.getCurrentlyShownCounts)();
                (0, c.handleDCShownToUser)(e), l.default.track(m.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
                    type: s.DismissibleContent[e],
                    content_count: i,
                    fatigable_content_count: r,
                    group_name: null == t ? void 0 : t.groupName,
                    bypass_fatigue: d.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
                    guild_id: null == t ? void 0 : t.guildId
                }), null == t || null === (n = t.onShown) || void 0 === n || n.call(t)
            }
        })
    }
    async function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ((0, h.isContentShown)(e) || t.forceTrack) && function(e, t) {
            var n;
            let [i] = (0, h.getCurrentlyShownCounts)(), r = f.default.getRenderedAtTimestamp(e), a = new Date, o = null == r ? null : a.getTime() - r;
            l.default.track(m.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
                type: s.DismissibleContent[e],
                action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : g.ContentDismissActionType.UNKNOWN,
                content_count: i,
                group_name: null == t ? void 0 : t.groupName,
                bypass_fatigue: d.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
                guild_id: null == t ? void 0 : t.guildId,
                shown_duration: o
            })
        }(e, t), (0, c.handleDCDismissed)(e), await (0, a.addDismissedContent)(e);
        let n = !f.default.hasUserHitDCCap();
        (0, h.removeCandidateContent)({
            content: e,
            groupName: null == t ? void 0 : t.groupName
        }, n)
    }
}