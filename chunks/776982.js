function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("629815"),
        s = n("523018"),
        l = n("208454"),
        c = n("281767");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function p(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = {},
        I = {},
        h = {},
        O = 0,
        T = 0,
        S = 0,
        v = 0;

    function g() {
        v = Object.values(y).length;
        var e = i().countBy(Object.values(y), function(e) {
                return e
            }),
            t = e[c.RelationshipTypes.PENDING_INCOMING],
            n = e[c.RelationshipTypes.PENDING_OUTGOING],
            r = e[c.RelationshipTypes.FRIEND];
        O = void 0 === t ? 0 : t, T = void 0 === n ? 0 : n, S = void 0 === r ? 0 : r
    }
    var A = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
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
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
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
            value: function() {
                this.waitFor(l.default)
            }
        }, {
            key: "isFriend",
            value: function(e) {
                return y[e] === c.RelationshipTypes.FRIEND
            }
        }, {
            key: "isBlocked",
            value: function(e) {
                return y[e] === c.RelationshipTypes.BLOCKED
            }
        }, {
            key: "getPendingCount",
            value: function() {
                return O
            }
        }, {
            key: "getOutgoingCount",
            value: function() {
                return T
            }
        }, {
            key: "getFriendCount",
            value: function() {
                return S
            }
        }, {
            key: "getRelationshipCount",
            value: function() {
                return v
            }
        }, {
            key: "getRelationships",
            value: function() {
                return y
            }
        }, {
            key: "getRelationshipType",
            value: function(e) {
                var t = y[e];
                return null != t ? t : c.RelationshipTypes.NONE
            }
        }, {
            key: "getNickname",
            value: function(e) {
                return I[e]
            }
        }, {
            key: "getSince",
            value: function(e) {
                return h[e]
            }
        }, {
            key: "getSinces",
            value: function() {
                return h
            }
        }, {
            key: "getFriendIDs",
            value: function() {
                return s.default.keys(y).filter(function(e) {
                    return y[e] === c.RelationshipTypes.FRIEND
                })
            }
        }], f(r.prototype, o), i && f(r, i), u
    }(a.default.Store);
    d(A, "displayName", "RelationshipStore"), t.default = new A(u.default, {
        CONNECTION_OPEN: function(e) {
            y = {}, I = {}, h = {}, e.relationships.forEach(function(e) {
                y[e.id] = e.type, null != e.nickname && (I[e.id] = e.nickname), null != e.since && (h[e.id] = e.since)
            }), g()
        },
        OVERLAY_INITIALIZE: function(e) {
            y = E({}, e.relationships), g()
        },
        RELATIONSHIP_ADD: function(e) {
            var t = y[e.relationship.id];
            y = p(E({}, y), d({}, e.relationship.id, e.relationship.type)), null != e.relationship.nickname && (I = p(E({}, I), d({}, e.relationship.id, e.relationship.nickname))), null != e.relationship.since && (h = p(E({}, h), d({}, e.relationship.id, e.relationship.since))), g(), e.relationship.type === c.RelationshipTypes.FRIEND && t === c.RelationshipTypes.PENDING_OUTGOING && u.default.dispatch({
                type: "FRIEND_REQUEST_ACCEPTED",
                user: e.relationship.user
            })
        },
        RELATIONSHIP_REMOVE: function(e) {
            y = E({}, y), delete y[e.relationship.id], null != I[e.relationship.id] && (I = E({}, I), delete I[e.relationship.id]), null != h[e.relationship.id] && (h = E({}, h), delete h[e.relationship.id]), g()
        },
        RELATIONSHIP_UPDATE: function(e) {
            null == e.relationship.since ? delete h[e.relationship.id] : h[e.relationship.id] = e.relationship.since, null == e.relationship.nickname ? delete I[e.relationship.id] : I[e.relationship.id] = e.relationship.nickname
        },
        RELATIONSHIP_PENDING_INCOMING_REMOVED: function(e) {
            y = E({}, y), s.default.keys(y).forEach(function(e) {
                y[e] === c.RelationshipTypes.PENDING_INCOMING && delete y[e]
            }), g()
        }
    })
}