function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("222007"), n("424973");
    var i = n("446674"),
        s = n("913144"),
        r = n("398604");
    n("21121");
    var a = n("692038"),
        o = n("719926"),
        l = n("305961");
    n("27618");
    var u = n("697218"),
        d = n("299039"),
        c = n("159885");
    n("158998");
    var f = n("360191"),
        _ = n("342176"),
        E = n("49111"),
        h = n("782340");
    let g = {
        loading: !1,
        initialized: !1,
        errored: !1,
        isDataStale: !1,
        notifCenterItems: [],
        staleNotifCenterItems: [],
        notifCenterIds: new Set,
        notifCenterLocalItems: [],
        paginationHasMore: !0,
        paginationCursor: void 0,
        notifCenterActive: !1,
        notifCenterTabFocused: !1
    };

    function m(e) {
        return null != e.id && null != e.body && null != e.type
    }

    function p() {
        g = {
            loading: !1,
            initialized: !1,
            errored: !1,
            isDataStale: !1,
            notifCenterItems: [],
            staleNotifCenterItems: [],
            notifCenterIds: new Set,
            notifCenterLocalItems: [],
            paginationHasMore: !0,
            paginationCursor: void 0,
            notifCenterActive: !1,
            notifCenterTabFocused: !1
        }
    }

    function S(e) {
        return {
            ...e,
            kind: "notification-center-item",
            message: null != e.message ? (0, a.createMessageRecord)(e.message) : void 0
        }
    }

    function v(e) {
        let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? S(e.item) : e.item;
        if (!g.initialized || !m(t) || g.notifCenterIds.has(t.id)) return !1;
        g.notifCenterIds.add(t.id), g.notifCenterItems = [t, ...g.notifCenterItems], g.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id))
    }

    function T(e, t) {
        g.notifCenterItems = g.notifCenterItems.map(n => e.includes(n.id) ? {
            ...n,
            acked: t
        } : n).filter(m)
    }

    function I(e, t, n) {
        var i;
        return e.type === t && (null === (i = e.other_user) || void 0 === i ? void 0 : i.id) === n
    }

    function A(e) {
        var t;
        if (!(0, r.isGuildEventEnded)(e)) return;
        let n = t => t.type === f.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id,
            i = e.name,
            s = null === (t = l.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
        g.notifCenterItems = g.notifCenterItems.map(e => n(e) ? {
            ...e,
            disable_action: !0,
            body: (0, c.isNullOrEmpty)(s) || (0, c.isNullOrEmpty)(i) ? e.body : h.default.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                event_name: i,
                guild_name: s
            })
        } : e)
    }
    class C extends i.default.PersistedStore {
        initialize(e) {
            if (this.waitFor(u.default), null != e) {
                let t = e.notifCenterItems.map(e => ({
                    ...e,
                    message: null != e.message ? new o.default(e.message) : void 0
                }));
                t.length > 0 && (g = {
                    ...g,
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: t
                })
            }
        }
        getState() {
            let e = e => ({
                ...e,
                message: null != e.message ? e.message.toJS() : void 0
            });
            return {
                ...g,
                notifCenterItems: g.notifCenterItems.map(e),
                staleNotifCenterItems: g.staleNotifCenterItems.map(e)
            }
        }
        get loading() {
            return g.loading
        }
        get initialized() {
            return g.initialized
        }
        get items() {
            return g.isDataStale ? g.staleNotifCenterItems : g.notifCenterItems
        }
        get hasMore() {
            return g.paginationHasMore
        }
        get cursor() {
            return g.paginationCursor
        }
        get errored() {
            return g.errored
        }
        get active() {
            return g.notifCenterActive
        }
        get localItems() {
            return g.notifCenterLocalItems
        }
        get tabFocused() {
            return g.notifCenterTabFocused
        }
    }
    C.displayName = "NotificationCenterItemsStore", C.persistKey = "NotificationCenterItemsStore_v2";
    var y = new C(s.default, {
        CONNECTION_OPEN: function(e) {
            p(), h.default.initialLanguageLoad.then(() => {
                let t = [];
                e.relationships.forEach(e => {
                    let {
                        type: n,
                        user: i,
                        since: s
                    } = e;
                    if (n !== E.RelationshipTypes.PENDING_INCOMING || null == i || null == s) return null;
                    let r = u.default.getUser(i.id);
                    if (null == r) return null;
                    let a = (0, _.incomingFriendRequestLocalItem)(r, s);
                    t.push(a)
                }), e.guilds.forEach(e => {
                    e.guild_scheduled_events.forEach(e => {
                        A(e)
                    })
                }), g.notifCenterLocalItems = t
            })
        },
        LOGOUT: p,
        NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
            let {
                ids: t
            } = e;
            T(t, !0)
        },
        NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
            let {
                ids: t
            } = e;
            T(t, !1)
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
            let {
                guildScheduledEvent: t
            } = e;
            A(t)
        },
        NOTIFICATION_CENTER_ITEM_CREATE: v,
        NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
            let {
                id: t
            } = e;
            if (!g.notifCenterIds.has(t)) return !1;
            g.notifCenterIds.delete(t), g.notifCenterItems = g.notifCenterItems.filter(e => e.id !== t)
        },
        NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: v,
        LOAD_NOTIFICATION_CENTER_ITEMS: function() {
            g.loading = !0
        },
        LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
            g.loading = !1, g.initialized = !0, g.errored = !0
        },
        LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
            let {
                items: t,
                hasMore: n,
                cursor: i
            } = e;
            g.loading && (g.loading = !1, g.initialized = !0, g.errored = !1, g.isDataStale = !1, (null == i || !g.notifCenterIds.has(i)) && (g.paginationHasMore = t.length > 0 && n, g.paginationCursor = t.length > 0 ? i : void 0), g.notifCenterItems = [...g.notifCenterItems, ...t.map(S).filter(e => !g.notifCenterIds.has(e.id))], g.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id)), t.forEach(e => g.notifCenterIds.add(e.id)))
        },
        RESET_NOTIFICATION_CENTER: p,
        NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
            let {
                active: t
            } = e;
            g.notifCenterActive = t
        },
        NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
            let {
                focused: t
            } = e;
            g.notifCenterTabFocused = t
        },
        RELATIONSHIP_ADD: function(e) {
            if (e.relationship.type === E.RelationshipTypes.PENDING_INCOMING) {
                let {
                    user: t,
                    since: n
                } = e.relationship;
                if (null == n) return null;
                let i = u.default.getUser(t.id);
                if (null == i) return null;
                g.notifCenterLocalItems = [...g.notifCenterLocalItems, (0, _.incomingFriendRequestLocalItem)(i, n)]
            }
            e.relationship.type === E.RelationshipTypes.FRIEND && (g.notifCenterLocalItems = g.notifCenterLocalItems.map(t => {
                if (I(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.user.id)) {
                    var n;
                    let i = u.default.getUser(e.relationship.user.id);
                    return {
                        ...t,
                        acked: !0,
                        forceUnacked: !1,
                        local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
                        type: f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                        body: h.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
                            username: "**".concat(null !== (n = null == i ? void 0 : i.globalName) && void 0 !== n ? n : e.relationship.user.username, "**")
                        })
                    }
                }
                return t
            }))
        },
        RELATIONSHIP_REMOVE: function(e) {
            g.notifCenterLocalItems = g.notifCenterLocalItems.filter(t => !(I(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.id) || I(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)) && !0)
        },
        NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
            let {
                item_enum: t
            } = e;
            g.notifCenterItems = g.notifCenterItems.map(e => e.item_enum === t ? {
                ...e,
                completed: !0,
                acked: !0
            } : e).filter(m)
        },
        NOTIFICATION_CENTER_ITEM_UPDATE: function(e) {
            let {
                item: t
            } = e;
            g.notifCenterItems = g.notifCenterItems.map(e => e.id === t.id ? t : e).filter(m)
        },
        SET_RECENT_MENTIONS_FILTER: p,
        MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function(e) {
            let {
                newBuild: t
            } = e;
            if (null !== t) {
                let e = (0, _.mobileNativeUpdateAvailableLocalItem)(t);
                void 0 === g.notifCenterLocalItems.find(t => t.local_id === e.local_id) && (g.notifCenterLocalItems = [...g.notifCenterLocalItems.filter(t => t.kind !== e.kind), e])
            }
        }
    })
}