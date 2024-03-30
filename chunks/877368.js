function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return o
        }
    });
    var r, o, i, a = n("898511"),
        u = n("629815"),
        s = n("388990");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.ERROR = 3] = "ERROR";
    var _ = {
        applicationIdToGuildIds: {},
        lastFetchTimeMs: null,
        nextFetchRetryTimeMs: null,
        fetchState: 0
    };

    function E(e) {
        var t = e.applicationId,
            n = e.guildId;
        null == _.applicationIdToGuildIds[t] && (_.applicationIdToGuildIds[t] = new Set), _.applicationIdToGuildIds[t].add(n), _.applicationIdToGuildIds[t] = new Set(_.applicationIdToGuildIds[t])
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
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
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
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
                if (null != e)
                    for (var t in _.lastFetchTimeMs = e.lastFetchTimeMs, _.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs, _.fetchState = e.fetchState, e.applicationIdToGuildIds) _.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t])
            }
        }, {
            key: "getState",
            value: function() {
                return _
            }
        }, {
            key: "getGuildIdsForApplication",
            value: function(e) {
                if (null != e) return _.applicationIdToGuildIds[e]
            }
        }, {
            key: "getLastFetchTimeMs",
            value: function() {
                return _.lastFetchTimeMs
            }
        }, {
            key: "getNextFetchRetryTimeMs",
            value: function() {
                return _.nextFetchRetryTimeMs
            }
        }, {
            key: "getFetchState",
            value: function() {
                return _.fetchState
            }
        }], l(r.prototype, o), i && l(r, i), u
    }(a.default.PersistedStore);
    c(p, "displayName", "MyGuildApplicationsStore"), c(p, "persistKey", "MyGuildApplicationsStore"), t.default = new p(u.default, {
        LOGOUT: function() {
            _.applicationIdToGuildIds = {}, _.lastFetchTimeMs = null, _.nextFetchRetryTimeMs = null, _.fetchState = 0
        },
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function() {
            _.fetchState = 1
        },
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function(e) {
            var t = e.guildIdToApplicationIds;
            for (var n in _.fetchState = 2, _.lastFetchTimeMs = Date.now(), _.applicationIdToGuildIds = {}, _.nextFetchRetryTimeMs = null, t) {
                var r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[n][Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var s = a.value;
                        E({
                            applicationId: s,
                            guildId: n
                        })
                    }
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && null != u.return && u.return()
                    } finally {
                        if (o) throw i
                    }
                }
            }
        },
        FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function(e) {
            var t = e.retryAfterSeconds;
            if (_.fetchState = 3, null != t) {
                var n = t * s.default.Millis.SECOND;
                _.nextFetchRetryTimeMs = Date.now() + n
            }
        },
        INTEGRATION_CREATE: function(e) {
            var t = e.application,
                n = e.guildId;
            null != t && E({
                applicationId: t.id,
                guildId: n
            })
        },
        INTEGRATION_DELETE: function(e) {
            var t, n, r, o = e.applicationId,
                i = e.guildId;
            if (null != o) {
                ;
                n = (t = {
                    applicationId: o,
                    guildId: i
                }).applicationId, r = t.guildId, null != _.applicationIdToGuildIds[n] && (_.applicationIdToGuildIds[n].delete(r), _.applicationIdToGuildIds[n] = new Set(_.applicationIdToGuildIds[n]))
            }
        }
    })
}