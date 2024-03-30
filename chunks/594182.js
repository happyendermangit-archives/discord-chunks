function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s = n("569048"),
        l = n.n(s),
        c = n("167006"),
        f = n.n(c),
        d = n("989872"),
        _ = n.n(d),
        E = n("898511"),
        p = n("629815"),
        m = n("284352"),
        y = n("551941");

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = {},
        S = {},
        v = {},
        g = {},
        A = !1,
        b = !1,
        N = !1,
        R = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
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
                var e, r, o, i = h(t);
                if (n) {
                    var a = h(this).constructor;
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
                key: "getInvite",
                value: function(e) {
                    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = r.targetType,
                        i = r.targetUserId,
                        a = r.targetApplicationId;
                    return o === y.InviteTargetTypes.STREAM && null != i ? null === (t = S[e]) || void 0 === t ? void 0 : t[i] : o === y.InviteTargetTypes.EMBEDDED_APPLICATION && null != a ? null === (n = v[e]) || void 0 === n ? void 0 : n[a] : T[e]
                }
            }, {
                key: "getFriendInvite",
                value: function() {
                    return a
                }
            }, {
                key: "getFriendInvitesFetching",
                value: function() {
                    return A
                }
            }, {
                key: "canRevokeFriendInvite",
                value: function() {
                    return null != a && !b && !N
                }
            }], I(r.prototype, o), i && I(r, i), s
        }(E.default.Store);
    i = "InstantInviteStore", (o = "displayName") in(r = R) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new R(p.default, {
        CONNECTION_OPEN: function() {
            T = {}, S = {}, v = {}, g = {}, a = null, b = !1, N = !1, A = !1
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            delete T[t.id], delete S[t.id], delete v[t.id]
        },
        FRIEND_INVITE_CREATE_SUCCESS: function(e) {
            var t;
            g[e.invite.code] = m.default.createFromServer(e.invite), a = null !== (t = l()(f()(_()(Object.values(g), "createdAt")))) && void 0 !== t ? t : null, N = !1
        },
        FRIEND_INVITE_CREATE_FAILURE: function() {
            N = !1
        },
        FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
            var t;
            null != e.invites && e.invites.forEach(function(e) {
                null != g[e.code] && delete g[e.code]
            }), a = null !== (t = l()(f()(_()(Object.values(g), "createdAt")))) && void 0 !== t ? t : null, b = !1
        },
        INSTANT_INVITE_CREATE_SUCCESS: function(e) {
            var t = e.channelId,
                n = e.invite,
                r = m.default.createFromServer(n);
            r.targetType === y.InviteTargetTypes.STREAM && null != r.targetUser ? (null == S[t] && (S[t] = {}), S[t][String(r.targetUser.id)] = r) : r.targetType === y.InviteTargetTypes.EMBEDDED_APPLICATION && null != r.targetApplication ? (null == v[t] && (v[t] = {}), v[t][r.targetApplication.id] = r) : T[t] = r
        },
        INSTANT_INVITE_CREATE_FAILURE: function(e) {
            T[e.channelId] = null
        },
        INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
            T[e.channelId] = null
        },
        FRIEND_INVITE_REVOKE_REQUEST: function() {
            b = !0
        },
        FRIEND_INVITE_CREATE_REQUEST: function() {
            N = !0
        },
        FRIEND_INVITES_FETCH_REQUEST: function() {
            A = !0
        },
        FRIEND_INVITES_FETCH_RESPONSE: function(e) {
            var t;
            g = {}, e.invites.forEach(function(e) {
                g[e.code] = m.default.createFromServer(e)
            }), a = null !== (t = l()(f()(_()(Object.values(g), "createdAt")))) && void 0 !== t ? t : null, A = !1
        },
        INSTANT_INVITE_CLEAR: function(e) {
            delete T[e.channelId]
        }
    })
}