function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("593842");

    function i(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var s = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && u(e, t)
        }(s, e);
        var t, n, r = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, u = a(t);
            if (n) {
                var s = a(this).constructor;
                o = Reflect.construct(u, arguments, s)
            } else o = u.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : i(e)
        });

        function s() {
            var e, t, n, a;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), e = r.apply(this, arguments), t = i(e), n = "actions", a = {
                USER_SETTINGS_PROTO_UPDATE: o.refreshSearchTokens,
                I18N_LOAD_SUCCESS: o.refreshSearchTokens,
                POST_CONNECTION_OPEN: o.refreshSearchTokens
            }, n in t ? Object.defineProperty(t, n, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = a, e
        }
        return s
    }(r.default);
    t.default = new s
}