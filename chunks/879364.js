function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useQuests: function() {
            return p
        },
        useIsQuestExpired: function() {
            return x
        },
        useQuestFormattedDate: function() {
            return E
        },
        useShouldShowSettingBadgeForQuests: function() {
            return y
        },
        useDismissNewQuestBadge: function() {
            return g
        },
        useQuestFromActivities: function() {
            return S
        }
    }), n("222007"), n("424973");
    var i = n("884691"),
        l = n("862337"),
        a = n("446674"),
        s = n("915639"),
        r = n("448881"),
        o = n("374023"),
        u = n("922987"),
        d = n("2973"),
        c = n("588025"),
        f = n("227231"),
        m = n("166604");

    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            [n, l] = i.useState(!1),
            s = (0, a.useStateFromStoresArray)([d.default], () => [...d.default.quests.values()]),
            {
                isFetchingCurrentQuests: u,
                lastFetchedCurrentQuests: c
            } = (0, a.useStateFromStoresObject)([d.default], () => ({
                isFetchingCurrentQuests: d.default.isFetchingCurrentQuests,
                lastFetchedCurrentQuests: d.default.lastFetchedCurrentQuests
            })),
            f = (0, o.getIsEligibleForQuests)({
                location: m.QuestsExperimentLocations.USE_QUESTS
            });
        i.useEffect(() => {
            !0 === t.fetch && f && !n && !u && 0 === c && (l(!0), (0, r.fetchCurrentQuests)())
        }, [t.fetch, f, n, u, c]);
        let p = i.useMemo(() => {
            let t = null != e ? new Set(e) : null;
            return s.filter(e => null == t || t.has(e.id))
        }, [e, s]);
        return {
            quests: p,
            isFetchingCurrentQuests: u
        }
    }

    function h() {
        let {
            quests: e,
            isFetchingCurrentQuests: t
        } = p(), [n, a] = i.useState(() => new Map(e.map(e => [e.id, (0, f.isQuestExpired)(e)])));
        return i.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, f.isQuestExpired)(t)) null != t && (0, f.isQuestExpired)(t) && a(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
                else {
                    let e = new l.Timeout,
                        i = () => {
                            let l = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(l, () => {
                                (0, f.isQuestExpired)(t) ? a(e => new Map(e).set(t.id, !0)): i()
                            }), n.push(e)
                        };
                    i()
                } return () => {
                for (let e of n) e.stop()
            }
        }, [e, t]), n
    }

    function x(e) {
        let t = h();
        return i.useMemo(() => {
            var n;
            return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
        }, [e, t])
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                dateStyle: "short"
            },
            n = (0, a.useStateFromStores)([s.default], () => s.default.locale);
        return i.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
    }

    function y() {
        let {
            quests: e,
            isFetchingCurrentQuests: t
        } = p(void 0, {
            fetch: !0
        }), n = h(), l = i.useMemo(() => {
            let i = [];
            if (t || 0 === e.length) return i;
            for (let t of e) {
                var l;
                if (!(0, f.includesTarget)(t, c.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (l = n.get(t.id)) && void 0 !== l && l) continue;
                if ((null == t ? void 0 : t.userStatus) == null) {
                    i.push(t.id);
                    continue
                }
                let e = null != t.userStatus.claimedAt,
                    a = (0, f.isDismissed)(t.userStatus, c.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
                if (!e && !a) {
                    i.push(t.id);
                    continue
                }
            }
            return i
        }, [e, n, t]);
        return l
    }

    function g() {
        let {
            quests: e
        } = p(), t = y().length > 0;
        i.useEffect(() => {
            for (let n of e) t && (0, r.dismissQuestContent)(n.id, c.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
        }, [e, t])
    }

    function S(e) {
        let t = (0, u.useIsEligibleForMembersListQuestEntrypoint)({
                location: m.QuestsExperimentLocations.MEMBERS_LIST
            }),
            n = (0, a.useStateFromStores)([d.default], () => t ? d.default.quests : null),
            l = i.useMemo(() => (0, f.getQuestsFromActivities)(n, e), [e, n]),
            s = x(l);
        return s ? null : l
    }
}