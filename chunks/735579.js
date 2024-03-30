function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("89536");
    n("895517");
    var u = n("273829"),
        s = n("715689"),
        l = n("208454"),
        c = n("523018"),
        f = n("39199"),
        d = n("271492"),
        _ = n("281767");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function T(e) {
        return function(e) {
            if (Array.isArray(e)) return E(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var S = {
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
        return null != e.id && null != e.type
    }

    function g() {
        S = {
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

    function A(e) {
        return h(I({}, e), {
            kind: "notification-center-item",
            message: null != e.message ? (0, u.createMessageRecord)(e.message) : void 0
        })
    }

    function b(e) {
        var t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? A(e.item) : e.item;
        if (!S.initialized || !v(t) || S.notifCenterIds.has(t.id)) return !1;
        S.notifCenterIds.add(t.id), S.notifCenterItems = [t].concat(T(S.notifCenterItems)), S.notifCenterItems.sort(function(e, t) {
            return c.default.compare(t.id, e.id)
        })
    }

    function N(e, t) {
        S.notifCenterItems = S.notifCenterItems.map(function(n) {
            return e.includes(n.id) ? h(I({}, n), {
                acked: t
            }) : n
        }).filter(v)
    }

    function R(e, t, n) {
        var r;
        return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n
    }

    function C(e) {
        (0, a.isGuildEventEnded)(e) && (S.notifCenterItems = S.notifCenterItems.map(function(t) {
            return t.type === f.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id ? h(I({}, t), {
                disable_action: !0
            }) : t
        }))
    }
    var P = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function(e) {
                if (this.waitFor(l.default), null != e) {
                    var t = e.notifCenterItems.map(function(e) {
                        return h(I({}, e), {
                            message: null != e.message ? new s.default(e.message) : void 0
                        })
                    });
                    t.length > 0 && (S = h(I({}, S), {
                        initialized: !0,
                        isDataStale: !0,
                        notifCenterItems: [],
                        staleNotifCenterItems: t
                    }))
                }
            }
        }, {
            key: "getState",
            value: function() {
                var e = function(e) {
                    return h(I({}, e), {
                        message: null != e.message ? e.message.toJS() : void 0
                    })
                };
                return h(I({}, S), {
                    notifCenterItems: S.notifCenterItems.map(e),
                    staleNotifCenterItems: S.staleNotifCenterItems.map(e)
                })
            }
        }, {
            key: "loading",
            get: function() {
                return S.loading
            }
        }, {
            key: "initialized",
            get: function() {
                return S.initialized
            }
        }, {
            key: "items",
            get: function() {
                return S.isDataStale ? S.staleNotifCenterItems : S.notifCenterItems
            }
        }, {
            key: "hasMore",
            get: function() {
                return S.paginationHasMore
            }
        }, {
            key: "cursor",
            get: function() {
                return S.paginationCursor
            }
        }, {
            key: "errored",
            get: function() {
                return S.errored
            }
        }, {
            key: "active",
            get: function() {
                return S.notifCenterActive
            }
        }, {
            key: "localItems",
            get: function() {
                return S.notifCenterLocalItems
            }
        }, {
            key: "tabFocused",
            get: function() {
                return S.notifCenterTabFocused
            }
        }], p(r.prototype, o), i && p(r, i), u
    }(o.default.PersistedStore);
    m(P, "displayName", "NotificationCenterItemsStore"), m(P, "persistKey", "NotificationCenterItemsStore_v2");
    var D = new P(i.default, {
        CONNECTION_OPEN: function(e) {
            g();
            var t = [];
            e.relationships.forEach(function(e) {
                var n = e.type,
                    r = e.user,
                    o = e.since;
                if (n !== _.RelationshipTypes.PENDING_INCOMING || null == r || null == o) return null;
                var i = l.default.getUser(r.id);
                if (null == i) return null;
                t.push((0, d.incomingFriendRequestLocalItem)(i, o))
            }), e.guilds.forEach(function(e) {
                e.guild_scheduled_events.forEach(function(e) {
                    C(e)
                })
            }), S.notifCenterLocalItems = t
        },
        LOGOUT: g,
        NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
            N(e.ids, !0)
        },
        NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
            N(e.ids, !1)
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
            C(e.guildScheduledEvent)
        },
        NOTIFICATION_CENTER_ITEM_CREATE: b,
        NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
            var t = e.id;
            if (!S.notifCenterIds.has(t)) return !1;
            S.notifCenterIds.delete(t), S.notifCenterItems = S.notifCenterItems.filter(function(e) {
                return e.id !== t
            })
        },
        NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: b,
        LOAD_NOTIFICATION_CENTER_ITEMS: function() {
            S.loading = !0
        },
        LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
            S.loading = !1, S.initialized = !0, S.errored = !0
        },
        LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
            var t = e.items,
                n = e.hasMore,
                r = e.cursor;
            S.loading && (S.loading = !1, S.initialized = !0, S.errored = !1, S.isDataStale = !1, (null == r || !S.notifCenterIds.has(r)) && (S.paginationHasMore = t.length > 0 && n, S.paginationCursor = t.length > 0 ? r : void 0), S.notifCenterItems = T(S.notifCenterItems).concat(T(t.map(A).filter(function(e) {
                return !S.notifCenterIds.has(e.id)
            }))), S.notifCenterItems.sort(function(e, t) {
                return c.default.compare(t.id, e.id)
            }), t.forEach(function(e) {
                return S.notifCenterIds.add(e.id)
            }))
        },
        RESET_NOTIFICATION_CENTER: g,
        NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
            var t = e.active;
            S.notifCenterActive = t
        },
        NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
            var t = e.focused;
            S.notifCenterTabFocused = t
        },
        RELATIONSHIP_ADD: function(e) {
            if (e.relationship.type === _.RelationshipTypes.PENDING_INCOMING) {
                var t = e.relationship,
                    n = t.user,
                    r = t.since;
                if (null == r) return null;
                var o = l.default.getUser(n.id);
                if (null == o) return null;
                S.notifCenterLocalItems = T(S.notifCenterLocalItems).concat([(0, d.incomingFriendRequestLocalItem)(o, r)])
            }
            e.relationship.type === _.RelationshipTypes.FRIEND && (S.notifCenterLocalItems = S.notifCenterLocalItems.map(function(t) {
                return R(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.user.id) ? h(I({}, t), {
                    acked: !0,
                    forceUnacked: !1,
                    local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
                    type: f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED
                }) : t
            })), e.relationship.type === _.RelationshipTypes.BLOCKED && (S.notifCenterLocalItems = S.notifCenterLocalItems.filter(function(t) {
                return !R(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !R(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)
            }))
        },
        RELATIONSHIP_REMOVE: function(e) {
            S.notifCenterLocalItems = S.notifCenterLocalItems.filter(function(t) {
                return !R(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !R(t, f.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)
            })
        },
        NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
            var t = e.item_enum;
            S.notifCenterItems = S.notifCenterItems.map(function(e) {
                return e.item_enum === t ? h(I({}, e), {
                    completed: !0,
                    acked: !0
                }) : e
            }).filter(v)
        },
        SET_RECENT_MENTIONS_FILTER: g,
        MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function(e) {
            var t = e.newBuild;
            if (null !== t) {
                var n = (0, d.mobileNativeUpdateAvailableLocalItem)(t);
                void 0 === S.notifCenterLocalItems.find(function(e) {
                    return e.local_id === n.local_id
                }) && (S.notifCenterLocalItems = T(S.notifCenterLocalItems.filter(function(e) {
                    return e.kind !== n.kind
                })).concat([n]))
            }
        }
    });
    t.default = D
}