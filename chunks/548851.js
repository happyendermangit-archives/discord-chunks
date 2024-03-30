function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var r, o, i = n("173977"),
        a = n("629815"),
        u = n("807471"),
        s = n("208454"),
        l = n("870331"),
        c = n("545962"),
        f = n("281767");

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(O, e);
        var t, n, u, y, I, h = (t = O, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : d(e)
        });

        function O(e) {
            var t, n = e.onSwitchStart,
                a = e.onSwitchSuccess,
                u = e.onSwitchError,
                _ = e.onTokenSet;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, O), E(d(t = h.call(this)), "onSwitchStart", void 0), E(d(t), "onSwitchSuccess", void 0), E(d(t), "onSwitchError", void 0), E(d(t), "onTokenSet", void 0), E(d(t), "actions", {
                LOGOUT: function(e) {
                    return t.handleLogout(e)
                }
            }), E(d(t), "handleConnectionOpen", function() {
                var e = s.default.getCurrentUser();
                if (null != e) {
                    if (null != o) {
                        if (o !== r) {
                            var n, a, u, d = c.default.getUsers().map(function(e) {
                                return e.id
                            });
                            l.default.track(f.AnalyticEvents.MULTI_ACCOUNT_SWITCH_SUCCESS, {
                                from_user_id: o,
                                linked_user_ids: d
                            }), null === (u = t.onSwitchSuccess) || void 0 === u || u.call(t, e)
                        } else l.default.track(f.AnalyticEvents.MULTI_ACCOUNT_SWITCH_FAILURE), null === (a = t.onSwitchError) || void 0 === a || a.call(t, e);
                        o = null
                    }
                    r = e.id;
                    var _ = i.getToken();
                    null != _ && "" !== _ && i.setToken(_, e.id), null === (n = t.onTokenSet) || void 0 === n || n.call(t, e)
                }
            }), E(d(t), "handleLogout", function(e) {
                if (e.isSwitchingAccount) {
                    var n;
                    o = r, null === (n = t.onSwitchStart) || void 0 === n || n.call(t)
                } else i.removeToken(r);
                r = null
            }), t.onSwitchStart = n, t.onSwitchSuccess = a, t.onSwitchError = u, t.onTokenSet = _, t
        }
        return u = O, y = [{
            key: "_initialize",
            value: function() {
                var e = this;
                a.default.subscribe("CONNECTION_OPEN", function() {
                    return e.handleConnectionOpen()
                }), this.handleConnectionOpen()
            }
        }, {
            key: "_terminate",
            value: function() {
                var e = this;
                a.default.unsubscribe("CONNECTION_OPEN", function() {
                    return e.handleConnectionOpen()
                })
            }
        }], _(u.prototype, y), I && _(u, I), O
    }(u.default)
}