function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("222007"), n("424973");
    var s = n("446674"),
        i = n("913144"),
        r = n("398604");
    n("21121");
    var a = n("692038"),
        o = n("719926"),
        d = n("305961");
    n("27618");
    var u = n("697218"),
        l = n("299039"),
        f = n("159885");
    n("158998");
    var _ = n("360191"),
        c = n("342176"),
        g = n("49111"),
        m = n("782340");
    let h = {
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

    function v(e) {
        return null != e.id && null != e.body && null != e.type
    }

    function E() {
        h = {
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

    function p(e) {
        return {
            ...e,
            kind: "notification-center-item",
            message: null != e.message ? (0, a.createMessageRecord)(e.message) : void 0
        }
    }

    function y(e) {
        let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? p(e.item) : e.item;
        if (!h.initialized || !v(t) || h.notifCenterIds.has(t.id)) return !1;
        h.notifCenterIds.add(t.id), h.notifCenterItems = [t, ...h.notifCenterItems], h.notifCenterItems.sort((e, t) => l.default.compare(t.id, e.id))
    }

    function T(e, t) {
        h.notifCenterItems = h.notifCenterItems.map(n => e.includes(n.id) ? {
            ...n,
            acked: t
        } : n).filter(v)
    }

    function C(e, t, n) {
        var s;
        return e.type === t && (null === (s = e.other_user) || void 0 === s ? void 0 : s.id) === n
    }

    function I(e) {
        var t;
        if (!(0, r.isGuildEventEnded)(e)) return;
        let n = t => t.type === _.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id,
            s = e.name,
            i = null === (t = d.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
        h.notifCenterItems = h.notifCenterItems.map(e => n(e) ? {
            ...e,
            disable_action: !0,
            body: (0, f.isNullOrEmpty)(i) || (0, f.isNullOrEmpty)(s) ? e.body : m.default.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                event_name: s,
                guild_name: i
            })
        } : e)
    }
    class S extends s.default.PersistedStore {
        initialize(e) {
            if (this.waitFor(u.default), null != e) {
                let t = e.notifCenterItems.map(e => ({
                    ...e,
                    message: null != e.message ? new o.default(e.message) : void 0
                }));
                t.length > 0 && (h = {
                    ...h,
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
                ...h,
                notifCenterItems: h.notifCenterItems.map(e),
                staleNotifCenterItems: h.staleNotifCenterItems.map(e)
            }
        }
        get loading() {
            return h.loading
        }
        get initialized() {
            return h.initialized
        }
        get items() {
            return h.isDataStale ? h.staleNotifCenterItems : h.notifCenterItems
        }
        get hasMore() {
            return h.paginationHasMore
        }
        get cursor() {
            return h.paginationCursor
        }
        get errored() {
            return h.errored
        }
        get active() {
            return h.notifCenterActive
        }
        get localItems() {
            return h.notifCenterLocalItems
        }
        get tabFocused() {
            return h.notifCenterTabFocused
        }
    }
    S.displayName = "NotificationCenterItemsStore", S.persistKey = "NotificationCenterItemsStore_v2";
    var A = new S(i.default, {
        CONNECTION_OPEN: function(e) {
            E(), m.default.initialLanguageLoad.then(() => {
                let t = [];
                e.relationships.forEach(e => {
                    let {
                        type: n,
                        user: s,
                        since: i
                    } = e;
                    if (n !== g.RelationshipTypes.PENDING_INCOMING || null == s || null == i) return null;
                    let r = u.default.getUser(s.id);
                    if (null == r) return null;
                    let a = (0, c.incomingFriendRequestLocalItem)(r, i);
                    t.push(a)
                }), e.guilds.forEach(e => {
                    e.guild_scheduled_events.forEach(e => {
                        I(e)
                    })
                }), h.notifCenterLocalItems = t
            })
        },
        LOGOUT: E,
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
            I(t)
        },
        NOTIFICATION_CENTER_ITEM_CREATE: y,
        NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
            let {
                id: t
            } = e;
            if (!h.notifCenterIds.has(t)) return !1;
            h.notifCenterIds.delete(t), h.notifCenterItems = h.notifCenterItems.filter(e => e.id !== t)
        },
        NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: y,
        LOAD_NOTIFICATION_CENTER_ITEMS: function() {
            h.loading = !0
        },
        LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
            h.loading = !1, h.initialized = !0, h.errored = !0
        },
        LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
            let {
                items: t,
                hasMore: n,
                cursor: s
            } = e;
            h.loading && (h.loading = !1, h.initialized = !0, h.errored = !1, h.isDataStale = !1, (null == s || !h.notifCenterIds.has(s)) && (h.paginationHasMore = t.length > 0 && n, h.paginationCursor = t.length > 0 ? s : void 0), h.notifCenterItems = [...h.notifCenterItems, ...t.map(p).filter(e => !h.notifCenterIds.has(e.id))], h.notifCenterItems.sort((e, t) => l.default.compare(t.id, e.id)), t.forEach(e => h.notifCenterIds.add(e.id)))
        },
        RESET_NOTIFICATION_CENTER: E,
        NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
            let {
                active: t
            } = e;
            h.notifCenterActive = t
        },
        NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
            let {
                focused: t
            } = e;
            h.notifCenterTabFocused = t
        },
        RELATIONSHIP_ADD: function(e) {
            if (e.relationship.type === g.RelationshipTypes.PENDING_INCOMING) {
                let {
                    user: t,
                    since: n
                } = e.relationship;
                if (null == n) return null;
                let s = u.default.getUser(t.id);
                if (null == s) return null;
                h.notifCenterLocalItems = [...h.notifCenterLocalItems, (0, c.incomingFriendRequestLocalItem)(s, n)]
            }
            e.relationship.type === g.RelationshipTypes.FRIEND && (h.notifCenterLocalItems = h.notifCenterLocalItems.map(t => {
                if (C(t, _.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.user.id)) {
                    var n;
                    let s = u.default.getUser(e.relationship.user.id);
                    return {
                        ...t,
                        acked: !0,
                        forceUnacked: !1,
                        local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
                        type: _.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                        body: m.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
                            username: "**".concat(null !== (n = null == s ? void 0 : s.globalName) && void 0 !== n ? n : e.relationship.user.username, "**")
                        })
                    }
                }
                return t
            }))
        },
        RELATIONSHIP_REMOVE: function(e) {
            h.notifCenterLocalItems = h.notifCenterLocalItems.filter(t => !(C(t, _.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.id) || C(t, _.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)) && !0)
        },
        NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
            let {
                item_enum: t
            } = e;
            h.notifCenterItems = h.notifCenterItems.map(e => e.item_enum === t ? {
                ...e,
                completed: !0,
                acked: !0
            } : e).filter(v)
        },
        NOTIFICATION_CENTER_ITEM_UPDATE: function(e) {
            let {
                item: t
            } = e;
            h.notifCenterItems = h.notifCenterItems.map(e => e.id === t.id ? t : e).filter(v)
        },
        SET_RECENT_MENTIONS_FILTER: E,
        MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function(e) {
            let {
                newBuild: t
            } = e;
            if (null !== t) {
                let e = (0, c.mobileNativeUpdateAvailableLocalItem)(t);
                void 0 === h.notifCenterLocalItems.find(t => t.local_id === e.local_id) && (h.notifCenterLocalItems = [...h.notifCenterLocalItems.filter(t => t.kind !== e.kind), e])
            }
        }
    })
}