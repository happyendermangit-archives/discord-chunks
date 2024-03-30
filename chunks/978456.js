function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("392711"),
        l = n.n(s),
        c = n("898511"),
        f = n("242880"),
        d = n("629815"),
        _ = n("281767");

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
    var y = "GameLibraryViewStore",
        I = _.TableSortDirections.ASCENDING,
        h = _.GameTableListKeys.LAST_PLAYED,
        O = !1,
        T = l().debounce(function() {
            O = !1, v.emitChange()
        }, 200),
        S = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
            }(s, e);
            var t, n, r, o, i, u = (t = s, n = function() {
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
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function s() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), u.apply(this, arguments)
            }
            return r = s, o = [{
                key: "initialize",
                value: function() {
                    var e, t = null !== (e = f.Storage.get(y)) && void 0 !== e ? e : {};
                    null != t.sortDirection && null != t.sortKey && (I = t.sortDirection, h = t.sortKey)
                }
            }, {
                key: "sortDirection",
                get: function() {
                    return I
                }
            }, {
                key: "sortKey",
                get: function() {
                    return h
                }
            }, {
                key: "activeRowKey",
                get: function() {
                    return a
                }
            }, {
                key: "isNavigatingByKeyboard",
                get: function() {
                    return O
                }
            }], E(r.prototype, o), i && E(r, i), s
        }(c.default.Store);
    i = "GameLibraryViewStore", (o = "displayName") in(r = S) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i;
    var v = new S(d.default, {
        LIBRARY_TABLE_SORT_UPDATE: function(e) {
            var t = e.direction,
                n = e.key;
            I = t, h = n, f.Storage.set(y, {
                sortDirection: I,
                sortKey: h
            })
        },
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
            var t = e.key;
            e.isKeyboardEvent && (O = !0, T()), a = t
        }
    });
    t.default = v
}