function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var r = n("836560"),
        o = n("188129"),
        i = n("796426"),
        a = n("265756"),
        u = n("917007"),
        s = n("836946"),
        l = n("439386"),
        c = n("563090");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
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
    var y = new o.Logger("Output"),
        I = new a.default,
        h = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
            }(O, e);
            var t, n, r, o, a, h = (t = O, n = function() {
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
                }(r) || "function" == typeof r) ? r : f(e)
            });

            function O(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, O), E(f(t = h.call(this)), "stream", void 0), E(f(t), "context", void 0), E(f(t), "sourceId", void 0), E(f(t), "_mute", !1), E(f(t), "_echoCancellation", !0), E(f(t), "_noiseSuppression", !0), E(f(t), "_automaticGainControl", !0), E(f(t), "_noiseCancellation", !1), E(f(t), "_audioFilter", void 0), E(f(t), "speaking", !1), E(f(t), "mode", l.InputModes.VOICE_ACTIVITY), E(f(t), "modeOptions", {
                    delay: 20,
                    threshold: -40
                }), E(f(t), "cleanup", void 0), E(f(t), "pttReleaseDelayTimeout", void 0), E(f(t), "destroyed", !1), t.context = e, t
            }
            return r = O, o = [{
                key: "destroy",
                value: function() {
                    var e, t;
                    this.removeAllListeners(), null === (e = this.cleanup) || void 0 === e || e.call(this), this.reset(), null != this.stream && (I.release(this.stream), this.stream = void 0), null === (t = this._audioFilter) || void 0 === t || t.dispose(), this._audioFilter = void 0, this.destroyed = !0
                }
            }, {
                key: "reset",
                value: function() {
                    this.setSpeaking(!1)
                }
            }, {
                key: "resume",
                value: function() {
                    this.context.resume()
                }
            }, {
                key: "state",
                get: function() {
                    return this.context.state
                }
            }, {
                key: "getDelayedStream",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .2,
                        t = this.context;
                    if (null == this.stream) throw Error("AudioInput: No MediaStream");
                    var n = t.createDelay(e);
                    n.delayTime.value = e, t.createMediaStreamSource(this.stream).connect(n);
                    var r = t.createMediaStreamDestination();
                    return n.connect(r), r.stream
                }
            }, {
                key: "mute",
                get: function() {
                    return this._mute
                },
                set: function(e) {
                    this._mute = e, this.updateAudioTracks(), this.setSpeaking(!1)
                }
            }, {
                key: "echoCancellation",
                get: function() {
                    return this._echoCancellation
                },
                set: function(e) {
                    this._echoCancellation !== e && (this._echoCancellation = e, null != this.stream && this.enable())
                }
            }, {
                key: "noiseSuppression",
                get: function() {
                    return this._noiseSuppression
                },
                set: function(e) {
                    this._noiseSuppression !== e && (this._noiseSuppression = e, null != this.stream && this.enable())
                }
            }, {
                key: "noiseCancellation",
                get: function() {
                    return this._noiseCancellation
                },
                set: function(e) {
                    this._noiseCancellation !== e && (this._noiseCancellation = e, null != this.stream && this.enable())
                }
            }, {
                key: "automaticGainControl",
                get: function() {
                    return this._automaticGainControl
                },
                set: function(e) {
                    this._automaticGainControl !== e && (this._automaticGainControl = e, null != this.stream && this.enable())
                }
            }, {
                key: "enable",
                value: function() {
                    var e, t = this;
                    return (e = function() {
                        var e, n, r, o, a, s, l;
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
                        }(this, function(f) {
                            switch (f.label) {
                                case 0:
                                    return null != t.cleanup && (t.cleanup(), t.cleanup = void 0), null != t.stream && (I.release(t.stream), t.stream = void 0), [4, (0, i.getAudioInputDevices)()];
                                case 1:
                                    e = f.sent(), n = {
                                        echoCancellation: t.echoCancellation,
                                        noiseSuppression: t.noiseSuppression,
                                        autoGainControl: t.automaticGainControl
                                    }, e.some(function(e) {
                                        return e.id === t.sourceId
                                    }) && (n.deviceId = t.sourceId), f.label = 2;
                                case 2:
                                    return f.trys.push([2, 11, , 12]), [4, I.acquire({
                                        audio: n
                                    })];
                                case 3:
                                    if (r = f.sent(), t.destroyed) throw I.release(r), Error("AudioInput: Already destroyed");
                                    if (!t._noiseCancellation) return [3, 9];
                                    f.label = 4;
                                case 4:
                                    return f.trys.push([4, 7, , 8]), [4, (0, u.getKrispSDK)()];
                                case 5:
                                    return [4, f.sent().createNoiseFilter(t.context)];
                                case 6:
                                    return t._audioFilter = f.sent(), t._audioFilter.addEventListener("ready", function(e) {
                                        var n;
                                        null === (n = t._audioFilter) || void 0 === n || n.enable()
                                    }), t._audioFilter.addEventListener("dispose", function(e) {
                                        I.release(r)
                                    }), o = t.context.createMediaStreamSource(r), a = t.context.createMediaStreamDestination(), o.connect(t._audioFilter), t._audioFilter.connect(a), t.stream = a.stream, [3, 8];
                                case 7:
                                    return s = f.sent(), y.error("failure creating krisp node"), y.error(s), t.stream = r, [3, 8];
                                case 8:
                                    return [3, 10];
                                case 9:
                                    t.stream = r, f.label = 10;
                                case 10:
                                    return t.updateMode(), t.updateAudioTracks(), t.emit("permission", !0), t.emit("stream", t.stream), [2, r];
                                case 11:
                                    if ("string" != typeof(l = f.sent())) switch (l.name) {
                                        case "PermissionDeniedError":
                                        case "NotAllowedError":
                                            throw t.emit("permission", !1), c.UserMediaErrors.PERMISSION_DENIED;
                                        case "PermissionDismissedError":
                                            throw t.emit("permission", !1), c.UserMediaErrors.PERMISSION_DISMISSED;
                                        case "DevicesNotFoundError":
                                        case "NotFoundError":
                                            throw c.UserMediaErrors.NO_DEVICES_FOUND;
                                        default:
                                            throw l.name || "UNKNOWN"
                                    }
                                    throw l;
                                case 12:
                                    return [2]
                            }
                        })
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                d(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                d(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    })()
                }
            }, {
                key: "setSource",
                value: function(e) {
                    this.sourceId !== e && (this.sourceId = e, null != this.stream && this.enable())
                }
            }, {
                key: "setPTTActive",
                value: function(e) {
                    var t = this;
                    if (!this.mute) this.speaking !== e && (null != this.pttReleaseDelayTimeout && (window.clearTimeout(this.pttReleaseDelayTimeout), this.pttReleaseDelayTimeout = void 0), e ? this.setSpeaking(e) : this.pttReleaseDelayTimeout = window.setTimeout(function() {
                        t.setSpeaking(!1), t.pttReleaseDelayTimeout = void 0
                    }, this.modeOptions.delay))
                }
            }, {
                key: "setMode",
                value: function(e, t) {
                    this.mode = e, this.modeOptions = t, null != this.stream && this.enable()
                }
            }, {
                key: "updateMode",
                value: function() {
                    null != this.cleanup && (this.cleanup(), this.cleanup = void 0), null != this.stream && this.mode === l.InputModes.VOICE_ACTIVITY && (this.cleanup = this.setupVoiceActivity(this.modeOptions))
                }
            }, {
                key: "setupVoiceActivity",
                value: function(e) {
                    var t = this,
                        n = e.threshold;
                    if (null == this.stream) throw Error("stream cannot be null");
                    null == n && (n = -40);
                    var r = new s.default(this.context, this.stream, n);
                    return r.onProcess = function(e, n) {
                            !t.mute && t.setSpeaking(e), t.emit("voiceactivity", n)
                        },
                        function() {
                            null != r && (r.stop(), r = null, t.setSpeaking(!1))
                        }
                }
            }, {
                key: "setSpeaking",
                value: function(e) {
                    this.speaking !== e && (this.speaking = e, this.emit("speaking", e))
                }
            }, {
                key: "updateAudioTracks",
                value: function() {
                    if (null != this.stream) {
                        for (var e = this.stream.getAudioTracks(), t = 0, n = e.length; t < n; t++) e[t].enabled = !this._mute
                    }
                }
            }], _(r.prototype, o), a && _(r, a), O
        }(r.EventEmitter)
}