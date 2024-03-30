function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return o
        }
    });
    var r, o, i, a = n("898511"),
        u = n("629815");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
    var d = {
            userTenureRewardStatusByRewardId: {},
            lastFetchTimeMs: null,
            fetchState: 0
        },
        _ = d,
        E = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
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
                var e, r, o, i = c(t);
                if (n) {
                    var a = c(this).constructor;
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
                    _ = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                l(e, t, n[t])
                            })
                        }
                        return e
                    }({}, _, null != e ? e : {})
                }
            }, {
                key: "getState",
                value: function() {
                    return _
                }
            }, {
                key: "getFetchState",
                value: function() {
                    return _.fetchState
                }
            }, {
                key: "getTenureRewardStatusForRewardId",
                value: function(e) {
                    return _.userTenureRewardStatusByRewardId[e]
                }
            }], s(r.prototype, o), i && s(r, i), u
        }(a.default.PersistedStore);
    l(E, "displayName", "TenureRewardStore"), l(E, "persistKey", "TenureRewardStore"), t.default = new E(u.default, {
        USER_TENURE_REWARD_SYNC_START: function() {
            _.fetchState = 1
        },
        USER_TENURE_REWARD_SYNC_SUCCESS: function(e) {
            var t = e.userTenureRewardStatus;
            if (null != t) {
                var n = {};
                t.forEach(function(e) {
                    null != e.next_tenure_reward_id && (n[e.next_tenure_reward_id] = e)
                }), _.userTenureRewardStatusByRewardId = n
            } else _.userTenureRewardStatusByRewardId = d.userTenureRewardStatusByRewardId;
            _.lastFetchTimeMs = Date.now(), _.fetchState = 2
        },
        USER_TENURE_REWARD_STATUS_RESET: function() {
            _.userTenureRewardStatusByRewardId = d.userTenureRewardStatusByRewardId
        },
        USER_TENURE_REWARD_STATUS_DELETE: function(e) {
            e.tenureRewardIds.forEach(function(e) {
                delete _.userTenureRewardStatusByRewardId[e]
            })
        },
        LOGOUT: function() {
            _ = d
        }
    })
}