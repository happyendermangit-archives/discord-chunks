function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("836560"),
        o = n("278831");

    function i(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function a(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }(E, e);
        var t, n, r, f, d, _ = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, a = l(t);
            if (n) {
                var u = l(this).constructor;
                o = Reflect.construct(a, arguments, u)
            } else o = a.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : i(e)
        });

        function E(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), s(i(t = _.call(this)), "id", void 0), s(i(t), "stream", void 0), s(i(t), "streamId", void 0), e.getVideoTracks().forEach(function(e) {
                e.onended = function() {
                    t.emit("desktopsourceend")
                }
            }), t.id = e.getVideoTracks()[0].label, t.stream = e, t.streamId = (0, o.registerVideoStream)(e), t
        }
        return r = E, f = [{
            key: "destroy",
            value: function() {
                this.removeAllListeners(), (0, o.unregisterVideoStream)(this.streamId), this.stream.getTracks().forEach(function(e) {
                    return e.stop()
                })
            }
        }, {
            key: "reset",
            value: function() {
                this.refreshSpeaking()
            }
        }, {
            key: "getStreamId",
            value: function() {
                return this.streamId
            }
        }, {
            key: "refreshSpeaking",
            value: function() {
                this.emit("speaking", this.stream.getAudioTracks().some(function(e) {
                    return e.enabled
                }))
            }
        }], d = [{
            key: "get",
            value: function(e, t) {
                var n;
                return (n = function() {
                    var n, r, o;
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
                    }(this, function(i) {
                        switch (i.label) {
                            case 0:
                                var a, u;
                                if (a = function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))), r.forEach(function(t) {
                                                s(e, t, n[t])
                                            })
                                        }
                                        return e
                                    }({}, e), u = null != (u = {
                                        frameRate: 30
                                    }) ? u : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r)
                                        }
                                        return n
                                    })(Object(u)).forEach(function(e) {
                                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e))
                                    }), r = a, !((null === (n = navigator.mediaDevices) || void 0 === n ? void 0 : n.getDisplayMedia) != null)) return [3, 2];
                                return o = E.bind, [4, navigator.mediaDevices.getDisplayMedia({
                                    audio: t,
                                    video: r
                                })];
                            case 1:
                                return [2, new(o.apply(E, [void 0, i.sent()]))];
                            case 2:
                                throw Error("UNKNOWN")
                        }
                    })
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(r, o) {
                        var i = n.apply(e, t);

                        function u(e) {
                            a(i, r, o, u, s, "next", e)
                        }

                        function s(e) {
                            a(i, r, o, u, s, "throw", e)
                        }
                        u(void 0)
                    })
                })()
            }
        }], f && u(r.prototype, f), d && u(r, d), E
    }(r.EventEmitter)
}