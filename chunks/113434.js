function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDismissNewQuestBadge: function() {
            return A
        },
        useIsQuestExpired: function() {
            return f
        },
        useQuestFormattedDate: function() {
            return S
        },
        useQuestFromActivities: function() {
            return m
        },
        useQuests: function() {
            return I
        },
        useShouldShowSettingBadgeForQuests: function() {
            return h
        }
    }), n("47120"), n("653041");
    var i = n("470079"),
        r = n("846519"),
        s = n("442837"),
        a = n("706454"),
        o = n("272008"),
        l = n("57655"),
        u = n("309562"),
        d = n("569984"),
        _ = n("497505"),
        c = n("918701"),
        E = n("46140");

    function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            [n, r] = i.useState(!1),
            a = (0, s.useStateFromStoresArray)([d.default], () => [...d.default.quests.values()]),
            {
                isFetchingCurrentQuests: u,
                lastFetchedCurrentQuests: _
            } = (0, s.useStateFromStoresObject)([d.default], () => ({
                isFetchingCurrentQuests: d.default.isFetchingCurrentQuests,
                lastFetchedCurrentQuests: d.default.lastFetchedCurrentQuests
            })),
            c = (0, l.getIsEligibleForQuests)({
                location: E.QuestsExperimentLocations.USE_QUESTS
            });
        return i.useEffect(() => {
            !0 === t.fetch && c && !n && !u && 0 === _ && (r(!0), (0, o.fetchCurrentQuests)())
        }, [t.fetch, c, n, u, _]), {
            quests: i.useMemo(() => {
                let t = null != e ? new Set(e) : null;
                return a.filter(e => null == t || t.has(e.id))
            }, [e, a]),
            isFetchingCurrentQuests: u
        }
    }

    function T() {
        let {
            quests: e,
            isFetchingCurrentQuests: t
        } = I(), [n, s] = i.useState(() => new Map(e.map(e => [e.id, (0, c.isQuestExpired)(e)])));
        return i.useEffect(() => {
            if (t) return;
            let n = [];
            for (let t of e)
                if (null == t || (0, c.isQuestExpired)(t)) null != t && (0, c.isQuestExpired)(t) && s(e => e.has(t.id) ? e : new Map(e).set(t.id, !0));
                else {
                    let e = new r.Timeout,
                        i = () => {
                            let r = Date.parse(t.config.expiresAt) - Date.now();
                            e.start(r, () => {
                                (0, c.isQuestExpired)(t) ? s(e => new Map(e).set(t.id, !0)): i()
                            }), n.push(e)
                        };
                    i()
                } return () => {
                for (let e of n) e.stop()
            }
        }, [e, t]), n
    }

    function f(e) {
        let t = T();
        return i.useMemo(() => {
            var n;
            return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
        }, [e, t])
    }

    function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                dateStyle: "short"
            },
            n = (0, s.useStateFromStores)([a.default], () => a.default.locale);
        return i.useMemo(() => null == e ? "" : new Date(e).toLocaleDateString(n, t), [e, t, n])
    }

    function h() {
        let {
            quests: e,
            isFetchingCurrentQuests: t
        } = I(void 0, {
            fetch: !0
        }), n = T();
        return i.useMemo(() => {
            let i = [];
            if (t || 0 === e.length) return i;
            for (let t of e) {
                var r;
                if (!(0, c.includesTarget)(t, _.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE) || null !== (r = n.get(t.id)) && void 0 !== r && r) continue;
                if ((null == t ? void 0 : t.userStatus) == null) {
                    i.push(t.id);
                    continue
                }
                let e = null != t.userStatus.claimedAt,
                    s = (0, c.isDismissed)(t.userStatus, _.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
                if (!e && !s) {
                    i.push(t.id);
                    continue
                }
            }
            return i
        }, [e, n, t])
    }

    function A() {
        let e = h();
        i.useEffect(() => {
            for (let t of e)(0, o.dismissQuestContent)(t, _.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
        }, [e])
    }

    function m(e) {
        let t = (0, u.useIsEligibleForMembersListQuestEntrypoint)({
                location: E.QuestsExperimentLocations.MEMBERS_LIST
            }),
            n = (0, s.useStateFromStores)([d.default], () => t ? d.default.quests : null),
            r = i.useMemo(() => (0, c.getQuestsFromActivities)(n, e), [e, n]);
        return f(r) ? null : r
    }
}