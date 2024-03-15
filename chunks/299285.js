function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007"), n("424973");
    var i = n("446674"),
        s = n("913144"),
        r = n("653047");
    let a = [],
        o = {},
        l = {},
        u = {},
        d = {};

    function c(e) {
        for (let t of (o[e.id] = e, u[e.name.toLowerCase()] = e, e.aliases)) u[t.toLowerCase()] = e;
        delete d[e.id]
    }

    function f(e) {
        let {
            entitlements: t
        } = e, n = !1;
        for (let {
                sku: e
            }
            of t)(null == e ? void 0 : e.application) != null && (c(r.default.createFromServer(e.application)), n = !0);
        return n
    }
    class _ extends i.default.Store {
        _getAllApplications() {
            return Object.values(o)
        }
        getGuildApplication(e, t) {
            if (null != e) {
                for (let n of Object.values(o))
                    if (n.guildId === e && n.type === t) return n
            }
        }
        getGuildApplicationIds(e) {
            var t;
            return null == e ? a : null !== (t = l[e]) && void 0 !== t ? t : a
        }
        getApplication(e) {
            return o[e]
        }
        getApplicationByName(e) {
            if (null == e) return;
            let t = e.toLowerCase();
            return Object.prototype.hasOwnProperty.call(u, t) ? u[t] : void 0
        }
        isFetchingApplication(e) {
            return !0 === d[e]
        }
        didFetchingApplicationFail(e) {
            return !1 === d[e]
        }
        getFetchingOrFailedFetchingIds() {
            return Object.keys(d)
        }
    }
    _.displayName = "ApplicationStore";
    var E = new _(s.default, {
        CONNECTION_OPEN: function() {
            o = {}, l = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                applications: t
            } = e;
            for (let e of t) c(new r.default(e))
        },
        APPLICATION_FETCH: function(e) {
            let {
                applicationId: t
            } = e, n = d[t];
            return d[t] = !0, !0 !== n
        },
        APPLICATION_FETCH_SUCCESS: function(e) {
            let {
                application: t
            } = e;
            c(r.default.createFromServer(t))
        },
        APPLICATION_FETCH_FAIL: function(e) {
            let {
                applicationId: t
            } = e, n = d[t];
            return d[t] = !1, !1 !== n
        },
        APPLICATIONS_FETCH: function(e) {
            let {
                applicationIds: t
            } = e, n = !1;
            for (let e of t) {
                let t = d[e];
                d[e] = !0, n = !0 !== t
            }
            return n
        },
        APPLICATIONS_FETCH_SUCCESS: function(e) {
            let {
                applications: t
            } = e;
            for (let e of t) c(r.default.createFromServer(e))
        },
        APPLICATIONS_FETCH_FAIL: function(e) {
            let {
                applicationIds: t
            } = e, n = !1;
            for (let e of t) {
                let t = d[e];
                d[e] = !1, n = !1 !== t
            }
            return n
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: f,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: f,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: f,
        GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
            let {
                integrations: t,
                guildId: n
            } = e, i = !1, s = [];
            for (let {
                    application: e
                }
                of t) null != e && (c(e), s.push(e.id), i = !0);
            return i && (l[n] = s), i
        },
        GUILD_APPLICATIONS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                applications: n
            } = e, i = [];
            for (let e of n) i.push(e.id), c(r.default.createFromServer(e));
            l[t] = i
        },
        BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
            let {
                payments: t
            } = e, n = new Set;
            for (let e of t) {
                var i;
                let t = null === (i = e.sku) || void 0 === i ? void 0 : i.application;
                !(null == t || n.has(t.id)) && c(r.default.createFromServer(t))
            }
            return n.size > 0
        },
        PAYMENT_UPDATE: function(e) {
            var t;
            let {
                payment: n
            } = e;
            if ((null === (t = n.sku) || void 0 === t ? void 0 : t.application) == null) return !1;
            c(r.default.createFromServer(n.sku.application))
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            let {
                invite: t
            } = e;
            if (null == t.target_application) return !1;
            c(r.default.createFromServer(t.target_application))
        },
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            var t;
            let {
                giftCode: n
            } = e;
            if ((null === (t = n.store_listing) || void 0 === t ? void 0 : t.sku.application) == null) return !1;
            c(r.default.createFromServer(n.store_listing.sku.application))
        },
        LIBRARY_FETCH_SUCCESS: function(e) {
            let {
                libraryApplications: t
            } = e;
            for (let e of t) c(r.default.createFromServer(e.application))
        },
        STORE_LISTING_FETCH_SUCCESS: function(e) {
            let {
                storeListing: t
            } = e;
            if (null == t.sku.application) return !1;
            c(r.default.createFromServer(t.sku.application))
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                messages: t
            } = e;
            t.forEach(e => (function(e) {
                var t;
                null === (t = e.attachments) || void 0 === t || t.forEach(e => {
                    null != e.application && c(r.default.createFromServer(e.application))
                })
            })(e))
        }
    })
}