function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    }
    var d = {
        showPopup: !1,
        appDetail: null
    };

    function _() {
        return d.showPopup = !1, d.appDetail = null, !0
    }
    var E = function(e) {
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
            value: function() {}
        }, {
            key: "shouldShowPopup",
            value: function() {
                return d.showPopup
            }
        }, {
            key: "getCurrentAppDetail",
            value: function() {
                return d.appDetail
            }
        }], l(r.prototype, o), i && l(r, i), u
    }(u.default.Store);
    i = "AppLauncherStore", (o = "displayName") in(r = E) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new E(s.default, {
        APP_LAUNCHER_SHOW_POPUP: function() {
            return d.showPopup = !0, !0
        },
        APP_LAUNCHER_DISMISS_POPUP: _,
        APP_LAUNCHER_SHOW_APP_DETAIL: function(e) {
            var t = e.appDetail;
            return d.appDetail = t, !0
        },
        APP_LAUNCHER_DISMISS_APP_DETAIL: function() {
            return d.appDetail = null, !0
        },
        CONNECTION_OPEN: _,
        LOGOUT: _,
        CHANNEL_SELECT: _,
        APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
        APP_LAUNCHER_SET_ACTIVE_COMMAND: _
    })
}