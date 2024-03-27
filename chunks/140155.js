function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r = n("442837"),
        s = n("570140"),
        a = n("924301");
    n("57132");
    var o = n("786761"),
        l = n("23750"),
        u = n("430824");
    n("699516");
    var d = n("594174"),
        _ = n("709054"),
        c = n("624138");
    n("51144");
    var E = n("497089"),
        I = n("178480"),
        T = n("981631"),
        f = n("689938");

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
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

    function A(e) {
        return null != e.id && null != e.body && null != e.type
    }

    function m() {
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

    function N(e) {
        return {
            ...e,
            kind: "notification-center-item",
            message: null != e.message ? (0, o.createMessageRecord)(e.message) : void 0
        }
    }

    function O(e) {
        let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? N(e.item) : e.item;
        if (!h.initialized || !A(t) || h.notifCenterIds.has(t.id)) return !1;
        h.notifCenterIds.add(t.id), h.notifCenterItems = [t, ...h.notifCenterItems], h.notifCenterItems.sort((e, t) => _.default.compare(t.id, e.id))
    }

    function p(e, t) {
        h.notifCenterItems = h.notifCenterItems.map(n => e.includes(n.id) ? {
            ...n,
            acked: t
        } : n).filter(A)
    }

    function R(e, t, n) {
        var i;
        return e.type === t && (null === (i = e.other_user) || void 0 === i ? void 0 : i.id) === n
    }

    function C(e) {
        var t;
        if (!(0, a.isGuildEventEnded)(e)) return;
        let n = t => t.type === E.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id,
            i = e.name,
            r = null === (t = u.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
        h.notifCenterItems = h.notifCenterItems.map(e => n(e) ? {
            ...e,
            disable_action: !0,
            body: (0, c.isNullOrEmpty)(r) || (0, c.isNullOrEmpty)(i) ? e.body : f.default.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                event_name: i,
                guild_name: r
            })
        } : e)
    }
    class g extends(i = r.default.PersistedStore) {
        initialize(e) {
            if (this.waitFor(d.default), null != e) {
                let t = e.notifCenterItems.map(e => ({
                    ...e,
                    message: null != e.message ? new l.default(e.message) : void 0
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
    S(g, "displayName", "NotificationCenterItemsStore"), S(g, "persistKey", "NotificationCenterItemsStore_v2");
    let L = new g(s.default, {
        CONNECTION_OPEN: function(e) {
            m(), f.default.initialLanguageLoad.then(() => {
                let t = [];
                e.relationships.forEach(e => {
                    let {
                        type: n,
                        user: i,
                        since: r
                    } = e;
                    if (n !== T.RelationshipTypes.PENDING_INCOMING || null == i || null == r) return null;
                    let s = d.default.getUser(i.id);
                    if (null == s) return null;
                    let a = (0, I.incomingFriendRequestLocalItem)(s, r);
                    t.push(a)
                }), e.guilds.forEach(e => {
                    e.guild_scheduled_events.forEach(e => {
                        C(e)
                    })
                }), h.notifCenterLocalItems = t, L.emitChange()
            })
        },
        LOGOUT: m,
        NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
            let {
                ids: t
            } = e;
            p(t, !0)
        },
        NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
            let {
                ids: t
            } = e;
            p(t, !1)
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
            let {
                guildScheduledEvent: t
            } = e;
            C(t)
        },
        NOTIFICATION_CENTER_ITEM_CREATE: O,
        NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
            let {
                id: t
            } = e;
            if (!h.notifCenterIds.has(t)) return !1;
            h.notifCenterIds.delete(t), h.notifCenterItems = h.notifCenterItems.filter(e => e.id !== t)
        },
        NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: O,
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
                cursor: i
            } = e;
            h.loading && (h.loading = !1, h.initialized = !0, h.errored = !1, h.isDataStale = !1, (null == i || !h.notifCenterIds.has(i)) && (h.paginationHasMore = t.length > 0 && n, h.paginationCursor = t.length > 0 ? i : void 0), h.notifCenterItems = [...h.notifCenterItems, ...t.map(N).filter(e => !h.notifCenterIds.has(e.id))], h.notifCenterItems.sort((e, t) => _.default.compare(t.id, e.id)), t.forEach(e => h.notifCenterIds.add(e.id)))
        },
        RESET_NOTIFICATION_CENTER: m,
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
            if (e.relationship.type === T.RelationshipTypes.PENDING_INCOMING) {
                let {
                    user: t,
                    since: n
                } = e.relationship;
                if (null == n) return null;
                let i = d.default.getUser(t.id);
                if (null == i) return null;
                h.notifCenterLocalItems = [...h.notifCenterLocalItems, (0, I.incomingFriendRequestLocalItem)(i, n)]
            }
            e.relationship.type === T.RelationshipTypes.FRIEND && (h.notifCenterLocalItems = h.notifCenterLocalItems.map(t => {
                if (R(t, E.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.user.id)) {
                    var n;
                    let i = d.default.getUser(e.relationship.user.id);
                    return {
                        ...t,
                        acked: !0,
                        forceUnacked: !1,
                        local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
                        type: E.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                        body: f.default.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
                            username: "**".concat(null !== (n = null == i ? void 0 : i.globalName) && void 0 !== n ? n : e.relationship.user.username, "**")
                        })
                    }
                }
                return t
            }))
        },
        RELATIONSHIP_REMOVE: function(e) {
            h.notifCenterLocalItems = h.notifCenterLocalItems.filter(t => !(R(t, E.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.id) || R(t, E.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)) && !0)
        },
        NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
            let {
                item_enum: t
            } = e;
            h.notifCenterItems = h.notifCenterItems.map(e => e.item_enum === t ? {
                ...e,
                completed: !0,
                acked: !0
            } : e).filter(A)
        },
        NOTIFICATION_CENTER_ITEM_UPDATE: function(e) {
            let {
                item: t
            } = e;
            h.notifCenterItems = h.notifCenterItems.map(e => e.id === t.id ? t : e).filter(A)
        },
        SET_RECENT_MENTIONS_FILTER: m,
        MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function(e) {
            let {
                newBuild: t
            } = e;
            if (null !== t) {
                let e = (0, I.mobileNativeUpdateAvailableLocalItem)(t);
                void 0 === h.notifCenterLocalItems.find(t => t.local_id === e.local_id) && (h.notifCenterLocalItems = [...h.notifCenterLocalItems.filter(t => t.kind !== e.kind), e])
            }
        }
    });
    t.default = L
}