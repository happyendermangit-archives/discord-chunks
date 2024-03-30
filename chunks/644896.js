function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("29570"),
        u = n("935741"),
        s = n("142642");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
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

    function E(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return l(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var p = {},
        m = {},
        y = {},
        I = void 0,
        h = void 0;

    function O(e) {
        delete p[e];
        var t = y[e];
        null != t && delete m[t], delete y[e]
    }
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
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
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
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
            key: "getInteraction",
            value: function(e) {
                var t = m[e.id];
                return null != t ? p[t] : null
            }
        }, {
            key: "getMessageInteractionStates",
            value: function() {
                var e = {},
                    t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.entries(p)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a = E(o.value, 2),
                            u = a[0],
                            s = a[1],
                            l = y[u];
                        null != l && (e[l] = s.state)
                    }
                } catch (e) {
                    n = !0, r = e
                } finally {
                    try {
                        !t && null != i.return && i.return()
                    } finally {
                        if (n) throw r
                    }
                }
                return e
            }
        }, {
            key: "canQueueInteraction",
            value: function(e, t) {
                var n = m[e];
                return (null == n || null == p[n] || p[n].state === s.InteractionState.FAILED) && (null == p[t] || p[t].state === s.InteractionState.FAILED) && !0
            }
        }, {
            key: "getIFrameModalApplicationId",
            value: function() {
                return h
            }
        }, {
            key: "getIFrameModalKey",
            value: function() {
                return I
            }
        }], c(r.prototype, o), i && c(r, i), u
    }(o.default.Store);
    f(T, "displayName", "InteractionStore"), t.default = new T(i.default, {
        LOGOUT: function() {
            p = {}, m = {}, y = {}
        },
        INTERACTION_QUEUE: function(e) {
            var t = e.nonce,
                n = e.messageId,
                r = e.data,
                o = e.onCreate,
                i = e.onCancel,
                a = e.onSuccess,
                u = e.onFailure;
            null != n && (m[n] = t, y[t] = n), p[t] = {
                state: s.InteractionState.QUEUED,
                data: r,
                onCreate: o,
                onCancel: i,
                onSuccess: a,
                onFailure: u
            }
        },
        INTERACTION_CREATE: function(e) {
            var t, n = e.nonce,
                r = e.interactionId;
            if (null == n) return !1;
            var o = p[n];
            if (null == o || o.state !== s.InteractionState.QUEUED) return !1;
            o.state = s.InteractionState.CREATED, null === (t = o.onCreate) || void 0 === t || t.call(o, r)
        },
        INTERACTION_SUCCESS: function(e) {
            var t, n = e.nonce;
            if (null == n) return !1;
            var r = p[n];
            if (null == r) return !1;
            null === (t = r.onSuccess) || void 0 === t || t.call(r), O(n)
        },
        INTERACTION_FAILURE: function(e) {
            var t, n, r, o = e.nonce,
                i = e.errorCode,
                u = e.errorMessage;
            if (null == o) return !1;
            var l = p[o];
            if (null == l) return !1;
            if (null === (r = l.onFailure) || void 0 === r || r.call(l, i, u), l.data.interactionType === a.InteractionTypes.APPLICATION_COMMAND) O(o);
            else {
                ;
                p[o] = (t = function(e) {
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
                }({}, l), n = (n = {
                    state: s.InteractionState.FAILED,
                    errorCode: i,
                    errorMessage: u
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t)
            }
        },
        MESSAGE_CREATE: function(e) {
            var t = e.message;
            if (null == t.nonce) return !1;
            var n, r = p[t.nonce];
            if (null == r) return !1;
            null === (n = r.onSuccess) || void 0 === n || n.call(r), O(t.nonce)
        },
        CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            if (null == u.default.getChannel(t)) return !1;
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = Object.entries(p)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var l = E(i.value, 2),
                        c = l[0];
                    l[1].state === s.InteractionState.FAILED && O(c)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        INTERACTION_IFRAME_MODAL_CREATE: function(e) {
            h = e.application.id
        },
        INTERACTION_IFRAME_MODAL_CLOSE: function() {
            I = void 0, h = void 0
        },
        INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
            I = e.modalKey
        }
    })
}