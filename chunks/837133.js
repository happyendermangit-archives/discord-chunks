function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r, o = n("512722"),
        i = n.n(o),
        a = n("898511"),
        u = n("242880"),
        s = n("629815");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
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
            }), t && _(e, t)
        }(p, e);
        var t, n, r, o, a, E = (t = p, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : l(e)
        });

        function p(e) {
            var t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p), t = E.call(this, s.default, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        f(e, t, n[t])
                    })
                }
                return e
            }({}, e), r = (r = {
                CLEAR_CACHES: function() {
                    return t.clear()
                },
                WRITE_CACHES: function() {
                    return t.save()
                }
            }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n)), i()(null != t.getClass().displayName, "Snapshot stores need a display name"), i()(!("CLEAR_CACHES" in e), "SnapshotStores cannot use the 'CLEAR_CACHES' action"), i()(!("WRITE_CACHES" in e), "SnapshotStores cannot use the 'WRITE_CACHES' action"), p.allStores.push(l(t)), t
        }
        return r = p, o = [{
            key: "persistKey",
            get: function() {
                return "".concat(this.getClass().displayName, "-snapshot")
            }
        }, {
            key: "clear",
            value: function() {
                u.Storage.remove(this.persistKey)
            }
        }, {
            key: "save",
            value: function() {
                u.Storage.set(this.persistKey, this.takeSnapshot())
            }
        }, {
            key: "readSnapshot",
            value: function(e) {
                var t = u.Storage.get(this.persistKey);
                return null == t || t.version !== e ? null : t.data
            }
        }, {
            key: "getClass",
            value: function() {
                return this.constructor
            }
        }], a = [{
            key: "clearAll",
            value: function() {
                p.allStores.forEach(function(e) {
                    return e.clear()
                })
            }
        }], o && c(r.prototype, o), a && c(r, a), p
    }(a.default.Store);
    f(E, "allStores", [])
}