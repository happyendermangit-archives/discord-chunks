function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDismissNewQuestBadge: function() {
            return m
        },
        useIsQuestExpired: function() {
            return S
        },
        useQuestCollectibles: function() {
            return O
        },
        useQuestFormattedDate: function() {
            return h
        },
        useQuestFromActivities: function() {
            return N
        },
        useQuests: function() {
            return T
        },
        useShouldShowSettingBadgeForQuests: function() {
            return A
        }
    }), n("47120"), n("653041");
    var i = n("470079"),
        r = n("846519"),
        s = n("442837"),
        a = n("583434"),
        o = n("706454"),
        l = n("272008"),
        u = n("57655"),
        d = n("309562"),
        _ = n("569984"),
        c = n("497505"),
        E = n("918701"),
        I = n("46140");

    function T() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                fetchPolicy: "cache-only"
            },
            [t, n] = i.useState(!1),
            r = (0, s.useStateFromStoresArray)([_.default], () => [..._.default.quests.values()]),
            {
                isFetchingCurrentQuests: a,
                lastFetchedCurrentQuests: o
            } = (0, s.useStateFromStoresObject)([_.default], () => ({
                isFetchingCurrentQuests: _.default.isFetchingCurrentQuests,
                lastFetchedCurrentQuests: _.default.lastFetchedCurrentQuests
            })),
            d = (0, u.getIsEligibleForQuests)({
                location: I.QuestsExperimentLocations.USE_QUESTS
            });
        return i.useEffect(() => {
            if ("cache-only" !== e.fetchPolicy)("cache-and-network" === e.fetchPolicy || "cache-or-network" === e.fetchPolicy && 0 === o) && d && !t && !a && (n(!0), (0, l.fetchCurrentQuests)())
        }, [e.fetchPolicy, d, t, a, o]), {
            quests: r,
            isFetchingCurrentQuests: a
        }
    }

    function f() {
        let {
            quests: e,
            isFetchingCurrentQuests: t
        } = T({
            fetchPolicy: "cache-only"
        }), [n, s] = i.useState(() => new Map(e.map(e => [e.id, (0, E.isQuestExpired)(e)])));
        return i.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, E.isQuestExpired)(t)) null != t && (0, E.isQuestExpired)(t) && s(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
                else {
                    let e = new r.Timeout,
                        i = () => {
                            let r = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(r, () => {
                                (0, E.isQuestExpired)(t) ? s(e => new Map(e).set(t.id, !0)): i()
                            }), n.push(e)
                        };
                    i()
                } return () => {
                for (let e of n) e.stop()
            }
        }, [e, t]), n
    }

    function S(e) {
        let t = f();
        return i.useMemo(() => {
            var n;
            return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
        }, [e, t])
    }

    function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                dateStyle: "short"
            },
            n = (0, s.useStateFromStores)([o.default], () => o.default.locale);
        return i.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
    }

    function A() {
        let {
            quests: e,
            isFetchingCurrentQuests: t
        } = T({
            fetchPolicy: "cache-or-network"
        }), n = f();
        return i.useMemo(() => {
            let i = [];
            if (t || 0 === e.length) return i;
            for (let t of e) {
                var r;
                if (!(0, E.includesTarget)(t, c.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (r = n.get(t.id)) && void 0 !== r && r) continue;
                if ((null == t ? void 0 : t.userStatus) == null) {
                    i.push(t.id);
                    continue
                }
                let e = null != t.userStatus.claimedAt,
                    s = (0, E.isDismissed)(t.userStatus, c.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
                if (!e && !s) {
                    i.push(t.id);
                    continue
                }
            }
            return i
        }, [e, n, t])
    }

    function m() {
        let e = A();
        i.useEffect(() => {
            for (let t of e)(0, l.dismissQuestContent)(t, c.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
        }, [e])
    }

    function N(e) {
        let t = (0, d.useIsEligibleForMembersListQuestEntrypoint)({
                location: I.QuestsExperimentLocations.MEMBERS_LIST
            }),
            n = (0, s.useStateFromStores)([_.default], () => t ? _.default.quests : null),
            r = i.useMemo(() => (0, E.getQuestsFromActivities)(n, e), [e, n]);
        return S(r) ? null : r
    }

    function O(e) {
        var t;
        let n = (0, E.hasQuestCollectibleRewards)(e),
            {
                product: i,
                isFetching: r
            } = (0, a.useFetchCollectiblesProduct)(e.rewardsConfig.rewards[0].skuId);
        return {
            hasQuestCollectibles: n,
            avatarDecoration: null == i ? void 0 : null === (t = i.items) || void 0 === t ? void 0 : t[0],
            isFetching: r
        }
    }
}