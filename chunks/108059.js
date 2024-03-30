function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("864842");

    function o(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var l = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(d, e);
        var t, n, r, l, c, f = (t = d, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, i, a = u(t);
            if (n) {
                var s = u(this).constructor;
                i = Reflect.construct(a, arguments, s)
            } else i = a.apply(this, arguments);
            return e = this, (r = i) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : o(e)
        });

        function d(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), a(o(t = f.call(this)), "id", void 0), a(o(t), "type", void 0), a(o(t), "name", void 0), a(o(t), "revoked", void 0), a(o(t), "integrations", void 0), a(o(t), "visibility", void 0), a(o(t), "friendSync", void 0), a(o(t), "verified", void 0), a(o(t), "showActivity", void 0), a(o(t), "twoWayLink", void 0), a(o(t), "accessToken", void 0), a(o(t), "metadata", void 0), a(o(t), "metadataVisibility", void 0), t.id = e.id, t.type = e.type, t.name = e.name, t.revoked = e.revoked || !1, t.integrations = e.integrations || [], t.visibility = e.visibility || 0, t.friendSync = e.friend_sync || !1, t.showActivity = e.show_activity || !1, t.verified = e.verified || !1, t.accessToken = e.access_token || null, t.twoWayLink = e.two_way_link || !1, t.metadata = e.metadata || null, t.metadataVisibility = e.metadata_visibility || 0, t
        }
        return r = d, l = [{
            key: "toString",
            value: function() {
                return this.name
            }
        }], i(r.prototype, l), c && i(r, c), d
    }(r.default)
}