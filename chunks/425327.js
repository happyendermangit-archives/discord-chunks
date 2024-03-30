function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        INTERACTION_IFRAME_MODAL_ANALYTICS_TYPE: function() {
            return E
        }
    });
    var r = n("807471"),
        o = n("644896"),
        i = n("870331"),
        a = n("931453"),
        u = n("470748"),
        s = n("281767");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

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
    var E = "interaction_iframe_modal";

    function p() {
        var e;
        return e = function(e) {
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
            }(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("6580"), n.e("43810"), n.e("91058")]).then(n.bind(n, "835325"))];
                    case 1:
                        return (0, t.sent().openInteractionModal)(e), i.default.track(s.AnalyticEvents.OPEN_MODAL, {
                            type: "interaction_modal",
                            application_id: e.application.id
                        }), [2]
                }
            })
        }, (p = function() {
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
        }(c, e);
        var t, n, r = (t = c, n = function() {
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

        function c() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), e = r.apply(this, arguments), f(l(e), "iframeModalOpenTimeMs", void 0), f(l(e), "actions", {
                INTERACTION_MODAL_CREATE: function(e) {
                    ! function(e) {
                        p.apply(this, arguments)
                    }(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(t) {
                    var n;
                    e.iframeModalOpenTimeMs = Date.now(), n = t, (0, u.default)(n), i.default.track(s.AnalyticEvents.OPEN_MODAL, {
                        type: E,
                        application_id: n.application.id
                    })
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function(t) {
                    var n, r, o;
                    n = t, o = null != (r = e.iframeModalOpenTimeMs) ? Date.now() - r : void 0, i.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: E,
                        application_id: n.applicationId,
                        duration_open_ms: o
                    }), e.iframeModalOpenTimeMs = void 0
                },
                RPC_APP_DISCONNECTED: function(e) {
                    var t, n, r;
                    t = e.application, n = o.default.getIFrameModalApplicationId(), r = o.default.getIFrameModalKey(), t.id === n && null != n && (0, a.default)(n, r)
                }
            }), e
        }
        return c
    }(r.default);
    t.default = new m
}