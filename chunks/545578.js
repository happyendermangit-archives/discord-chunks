function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("836560"),
        o = n("796426"),
        i = n("265756"),
        a = n("278831"),
        u = n("439386"),
        s = n("563090");

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

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = new i.default,
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && E(e, t)
            }(I, e);
            var t, n, r, i, m, y = (t = I, n = function() {
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
                }(r) || "function" == typeof r) ? r : l(e)
            });

            function I() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, I), e = y.apply(this, arguments), d(l(e), "stream", new MediaStream), d(l(e), "sourceId", u.DISABLED_DEVICE_ID), d(l(e), "streamId", null), d(l(e), "destroyed", !1), e
            }
            return r = I, i = [{
                key: "destroy",
                value: function() {
                    null != this.stream && (p.release(this.stream), this.stream = null), null != this.streamId && (0, a.unregisterVideoStream)(this.streamId), this.destroyed = !0
                }
            }, {
                key: "getStreamId",
                value: function() {
                    return this.streamId
                }
            }, {
                key: "setSource",
                value: function(e) {
                    var t, n = this;
                    return (t = function() {
                        var t, r, i, a;
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
                        }(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    if (n.sourceId === e) return [2, n.stream];
                                    return n.sourceId = e, null != n.stream && (p.release(n.stream), n.stream = null), [4, (0, o.getVideoInputDevices)()];
                                case 1:
                                    if (t = l.sent(), n.sourceId === u.DISABLED_DEVICE_ID) return [2, n.setStream(new MediaStream)];
                                    r = {
                                        width: 1280
                                    }, t.some(function(e) {
                                        return e.id === n.sourceId
                                    }) && (r.deviceId = n.sourceId), l.label = 2;
                                case 2:
                                    return l.trys.push([2, 4, , 5]), [4, p.acquire({
                                        audio: !1,
                                        video: r
                                    })];
                                case 3:
                                    if (i = l.sent(), n.destroyed) throw p.release(i), Error("VideoInput: Already destroyed");
                                    return n.emit("permission", !0), [2, n.setStream(i)];
                                case 4:
                                    if ("string" != typeof(a = l.sent())) switch (a.name) {
                                        case "PermissionDeniedError":
                                        case "NotAllowedError":
                                            throw n.emit("permission", !1), s.UserMediaErrors.PERMISSION_DENIED;
                                        case "PermissionDismissedError":
                                            throw n.emit("permission", !1), s.UserMediaErrors.PERMISSION_DISMISSED;
                                        case "DevicesNotFoundError":
                                        case "NotFoundError":
                                            throw s.UserMediaErrors.NO_DEVICES_FOUND;
                                        default:
                                            throw a.name || "UNKNOWN"
                                    }
                                    throw a;
                                case 5:
                                    return [2]
                            }
                        })
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = t.apply(e, n);

                            function a(e) {
                                c(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                c(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    })()
                }
            }, {
                key: "setStream",
                value: function(e) {
                    var t = this;
                    return null != this.streamId && ((0, a.unregisterVideoStream)(this.streamId), this.streamId = null), this.stream = e, e.onaddtrack = function(e) {
                        return t.emit("add-video-track", e)
                    }, e.getVideoTracks().length > 0 && (this.streamId = (0, a.registerVideoStream)(e)), this.emit("stream", e), this.emit("video", this.getStreamId()), e
                }
            }], f(r.prototype, i), m && f(r, m), I
        }(r.EventEmitter)
}