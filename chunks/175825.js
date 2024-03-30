function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var r = n("291178"),
        o = n("481910"),
        i = n("228845"),
        a = n("935741"),
        u = n("29884"),
        s = n("894288"),
        l = n("665863");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function f(e, t, n) {
        return (f = p() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new(Function.bind.apply(e, r));
            return n && _(o, n.prototype), o
        }).apply(null, arguments)
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

    function E(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (E = function(e) {
            var n;
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            if ("function" != typeof e) throw TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r)
            }

            function r() {
                return f(e, arguments, d(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), _(r, e)
        })(e)
    }

    function p() {
        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch (e) {
            return !1
        }
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(o, e);
        var t, n, r = (t = o, n = p(), function() {
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

        function o() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), r.apply(this, arguments)
        }
        return o
    }(E(Error));

    function y(e) {
        return I.apply(this, arguments)
    }

    function I() {
        var e;
        return e = function(e) {
            var t, n, c, f, d, _, E, p;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(y) {
                switch (y.label) {
                    case 0:
                        if (t = e.channelId, c = void 0 === (n = e.timeoutMs) ? 1e4 : n, d = void 0 !== (f = e.bypassChangeModal) && f, null == (_ = a.default.getChannel(t))) return [2, !1];
                        return [4, o.default.handleVoiceConnect({
                            bypassGuildIdCheck: !0,
                            bypassChangeModal: d,
                            channel: _,
                            connected: l.default.isInChannel(t),
                            needSubscriptionToAccess: (0, i.getChannelRoleSubscriptionStatus)(t, a.default, r.default, u.default).needSubscriptionToAccess
                        })];
                    case 1:
                        if (!y.sent()) return [2, !1];
                        E = new Promise(function(e, n) {
                            var r = setTimeout(function() {
                                n(new m("Joining voice channel has timed out."))
                            }, c);
                            s.default.addConditionalChangeListener(function() {
                                return s.default.getVoiceChannelId() !== t || (clearTimeout(r), e(), !1)
                            })
                        }), y.label = 2;
                    case 2:
                        return y.trys.push([2, 4, , 5]), [4, E];
                    case 3:
                        return y.sent(), [3, 5];
                    case 4:
                        var I, h;
                        if (I = p = y.sent(), null != (h = m) && "undefined" != typeof Symbol && h[Symbol.hasInstance] ? !!h[Symbol.hasInstance](I) : I instanceof h) return [2, !1];
                        throw p;
                    case 5:
                        return [2, !0]
                }
            })
        }, (I = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    c(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    c(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}