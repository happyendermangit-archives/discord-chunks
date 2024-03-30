function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("864842"),
        o = n("941504");

    function i(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var c = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(_, e);
        var t, n, r, c, f, d = (t = _, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, a = s(t);
            if (n) {
                var u = s(this).constructor;
                o = Reflect.construct(a, arguments, u)
            } else o = a.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : i(e)
        });

        function _(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, _), u(i(t = d.call(this)), "id", void 0), u(i(t), "liveBuildId", void 0), u(i(t), "name", void 0), t.id = e.id, t.liveBuildId = e.liveBuildId, t.name = e.name, t
        }
        return r = _, c = [{
            key: "getName",
            value: function(e) {
                return null != this.name ? this.name : this.id === e ? o.default.Messages.APPLICATION_BRANCH_NAME_MASTER : o.default.Messages.APPLICATION_BRANCH_NAME_UNKNOWN
            }
        }], f = [{
            key: "createFromServer",
            value: function(e) {
                return new _({
                    id: e.id,
                    liveBuildId: e.live_build_id,
                    name: e.name
                })
            }
        }], c && a(r.prototype, c), f && a(r, f), _
    }(r.default)
}