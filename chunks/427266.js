function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        WebAudioAPISound: function() {
            return N
        },
        WebAudioSound: function() {
            return b
        },
        playGiftSound: function() {
            return g
        }
    });
    var r, o, i = n("392711"),
        a = n.n(i),
        u = n("484122"),
        s = n("155866"),
        l = n("689505"),
        c = n("335911"),
        f = n("374550");

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

    function _(e) {
        return function() {
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
        }
    }

    function E(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t && p(e.prototype, t), n && p(e, n), e
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e, t) {
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
    }
    var h = "default",
        O = h;
    (r = o || (o = {})).Stopped = "stopped", r.Playing = "playing", r.Looping = "looping", r.Paused = "paused";
    var T = new Map;

    function S() {
        return (S = _(function(e) {
            var t;
            return I(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, fetch(n("693180")("../../sounds/".concat(e, ".mp3").replace("../../sounds/", "./"))).then(function(e) {
                            return e.arrayBuffer()
                        })];
                    case 1:
                        return t = r.sent(), [2, (0, u.getOrCreateAudioContext)().decodeAudioData(t)]
                }
            })
        })).apply(this, arguments)
    }

    function v() {
        return (v = _(function(e) {
            var t;
            return I(this, function(n) {
                switch (n.label) {
                    case 0:
                        return null == (t = T.get(e)) && (t = function(e) {
                            return S.apply(this, arguments)
                        }(e), T.set(e, t)), [4, t];
                    case 1:
                        return [2, n.sent()]
                }
            })
        })).apply(this, arguments)
    }

    function g(e, t) {
        var n = new Audio((0, s.default)(e));
        n.volume = (0, l.default)(t), n.play()
    }

    function A() {
        null != window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices().then(function(e) {
            var t = c.default.getOutputDevices(),
                n = a()(t).sortBy(function(e) {
                    return e.index
                }).findIndex(function(e) {
                    return e.id === c.default.getOutputDeviceId()
                }),
                r = t[c.default.getOutputDeviceId()],
                o = e.filter(function(e) {
                    return "audiooutput" === e.kind && "communications" !== e.deviceId
                }),
                i = o[n];
            null != r && (null == i || i.label !== r.name) && (i = o.find(function(e) {
                return e.label === r.name
            })), O = null != i ? i.deviceId : h
        }).catch(function() {
            O = h
        })
    }
    f.isPlatformEmbedded && (c.default.addChangeListener(A), A());
    var b = function() {
            function e(t, n, r) {
                E(this, e), y(this, "name", void 0), y(this, "_volume", void 0), y(this, "_audio", void 0), this.name = t, this._volume = r
            }
            return m(e, [{
                key: "volume",
                get: function() {
                    return this._volume
                },
                set: function(e) {
                    this._volume = e, this._ensureAudio().then(function(t) {
                        return t.volume = e
                    })
                }
            }, {
                key: "loop",
                value: function() {
                    this._ensureAudio().then(function(e) {
                        e.loop = !0, e.play()
                    })
                }
            }, {
                key: "play",
                value: function() {
                    this._ensureAudio().then(function(e) {
                        e.loop = !1, e.play()
                    })
                }
            }, {
                key: "pause",
                value: function() {
                    null != this._audio && this._audio.then(function(e) {
                        return e.pause()
                    })
                }
            }, {
                key: "stop",
                value: function() {
                    this._destroyAudio()
                }
            }, {
                key: "playWithListener",
                value: function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        e._ensureAudio().then(function(e) {
                            (null == e.duration || 0 === e.duration) && n("sound has no duration"), e.play(), setTimeout(function() {
                                t(!0)
                            }, e.duration)
                        })
                    })
                }
            }, {
                key: "_destroyAudio",
                value: function() {
                    null != this._audio && (this._audio.then(function(e) {
                        e.pause(), e.src = ""
                    }), this._audio = null)
                }
            }, {
                key: "_ensureAudio",
                value: function() {
                    var e, t = this;
                    return this._audio = null !== (e = this._audio) && void 0 !== e ? e : new Promise(function(e, r) {
                        var o = new Audio;
                        o.src = n("693180")("../../sounds/".concat(t.name, ".mp3").replace("../../sounds/", "./")), o.onloadeddata = function() {
                            o.volume = Math.min(c.default.getOutputVolume() / 100 * t._volume, 1), f.isPlatformEmbedded && o.setSinkId(O), e(o)
                        }, o.onerror = function() {
                            return r(Error("could not play audio"))
                        }, o.onended = function() {
                            return t._destroyAudio()
                        }, o.load()
                    }), this._audio
                }
            }]), e
        }(),
        N = function() {
            function e(t, n, r) {
                E(this, e), y(this, "name", void 0), y(this, "_volume", void 0), y(this, "_audioContext", void 0), y(this, "_buffer", void 0), y(this, "_source", void 0), y(this, "_gain", void 0), y(this, "_state", void 0), y(this, "_ensureAudioPromise", void 0), this.name = t, this._volume = r, this._audioContext = null, this._buffer = null, this._source = null, this._state = "stopped", this._ensureAudioPromise = null
            }
            return m(e, [{
                key: "volume",
                get: function() {
                    return this._volume
                },
                set: function(e) {
                    var t = this;
                    this._ensureAudio().then(function(n) {
                        var r = n.gainNode,
                            o = n.context;
                        t._volume = e, r.gain.setValueAtTime(e, o.currentTime)
                    })
                }
            }, {
                key: "loop",
                value: function() {
                    var e = this;
                    "looping" !== this._state && (this._state = "looping", this._ensureAudio().then(function(t) {
                        var n = t.source;
                        "looping" === e._state && (n.loop = !0, n.start())
                    }))
                }
            }, {
                key: "play",
                value: function() {
                    var e = this;
                    "playing" !== this._state && (this._state = "playing", this._ensureAudio().then(function(t) {
                        var n = t.source;
                        "playing" === e._state && (n.loop = !1, n.start())
                    }))
                }
            }, {
                key: "pause",
                value: function() {
                    var e = this;
                    "paused" !== this._state && (this._state = "paused", this._ensureAudio().then(function(t) {
                        var n = t.source;
                        "paused" === e._state && (n.stop(), e._state = "paused")
                    }))
                }
            }, {
                key: "stop",
                value: function() {
                    this._destroyAudio()
                }
            }, {
                key: "_destroyAudio",
                value: function() {
                    var e = this;
                    "stopped" !== this._state && (this._state = "stopped", this._ensureAudio().then(function(t) {
                        var n = t.source;
                        "stopped" === e._state && (n.disconnect(), n.stop(), e._source = null, e._buffer = null, e._state = "stopped", e._ensureAudioPromise = null)
                    }))
                }
            }, {
                key: "_ensureAudio",
                value: function() {
                    var e = this;
                    return _(function() {
                        var t;
                        return I(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return null == e._ensureAudioPromise && (t = Math.min(c.default.getOutputVolume() / 100 * e._volume, 1), e._ensureAudioPromise = (function(e) {
                                        return v.apply(this, arguments)
                                    })(e.name).then(function(n) {
                                        return null == n ? Promise.reject(Error("Failed to load audio: ".concat(e.name))) : (e._audioContext = (0, u.getOrCreateAudioContext)(), e._gain = new GainNode(e._audioContext), e._gain.gain.value = t, f.isPlatformEmbedded && e._audioContext.setSinkId(O), e._buffer = n, e._source = e._audioContext.createBufferSource(), e._source.buffer = n, e._source.connect(e._gain).connect(e._audioContext.destination), e._source.loop = !1, e._source.onended = function() {
                                            return e._destroyAudio()
                                        }, Promise.resolve({
                                            context: e._audioContext,
                                            gainNode: e._gain,
                                            source: e._source
                                        }))
                                    }).catch(function() {
                                        return Promise.reject(Error("Failed to load audio: ".concat(e.name)))
                                    })), [4, e._ensureAudioPromise];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })()
                }
            }]), e
        }()
}