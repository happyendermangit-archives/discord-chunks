function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_WANTS_FULL: function() {
            return S
        },
        RTCMediaSinkWantsManagerEvent: function() {
            return o
        },
        default: function() {
            return b
        }
    });
    var r, o, i = n("259020"),
        a = n("384433"),
        u = n("457908"),
        s = n("252546"),
        l = n("945816"),
        c = n("513741"),
        f = n("388990"),
        d = n("523018"),
        _ = n("281767");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function O(e, t) {
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
        }(e, t) || T(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function T(e, t) {
        if (e) {
            if ("string" == typeof e) return E(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
        }
    }
    var S = {
            any: 100
        },
        v = 30 * f.default.Millis.SECOND,
        g = 120 * f.default.Millis.SECOND,
        A = -1 !== (0, c.getFirefoxVersion)();
    (r = o || (o = {})).UserSSRCUpdate = "user-ssrc-update", r.Update = "update";
    var b = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(f, e);
        var t, n, r, o, i, c = (t = f, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : p(e)
        });

        function f(e, t, n) {
            var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new u.MediaSinkWantsLadder;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, f), y(p(r = c.call(this)), "userId", void 0), y(p(r), "isStageChannel", void 0), y(p(r), "supportsSeamless", void 0), y(p(r), "ladder", void 0), y(p(r), "connection", void 0), y(p(r), "audioSsrcs", void 0), y(p(r), "videoSsrcs", void 0), y(p(r), "remoteVideoSsrcs", void 0), y(p(r), "framesReceived", void 0), y(p(r), "streamIds", void 0), y(p(r), "offscreenUsers", void 0), y(p(r), "offscreenDisabledUsers", void 0), y(p(r), "latestWants", void 0), y(p(r), "participants", void 0), y(p(r), "selectedParticipantId", void 0), y(p(r), "delayedCall", void 0), y(p(r), "offscreenTimeout", void 0), y(p(r), "pipOpen", void 0), y(p(r), "videoHealthManager", void 0), y(p(r), "delayedUpdate", void 0), y(p(r), "addLru", void 0), y(p(r), "updateOffscreenUsers", void 0), y(p(r), "handleLocalVideoDisabled", void 0), y(p(r), "handleLocalMute", void 0), y(p(r), "update", void 0), r.userId = e, r.isStageChannel = t, r.supportsSeamless = n, r.ladder = o, r.connection = null, r.audioSsrcs = {}, r.videoSsrcs = {}, r.remoteVideoSsrcs = {}, r.framesReceived = {}, r.streamIds = {}, r.offscreenUsers = {}, r.offscreenDisabledUsers = {}, r.latestWants = S, r.participants = new Set, r.selectedParticipantId = null, r.pipOpen = !1, r.videoHealthManager = null, r.delayedUpdate = function() {
                r.delayedCall.delay()
            }, r.addLru = function(e, t, n) {
                if (n.push(e), !(n.length <= 3)) {
                    for (var o = -1, i = -1, a = 0; a < n.length; a++) {
                        var u = n[a],
                            s = t - r.offscreenUsers[u];
                        s > o && (o = s, i = a)
                    }
                    r.offscreenDisabledUsers[n[i]] = !0, n.splice(i, 1)
                }
            }, r.updateOffscreenUsers = function() {
                if (null === (a = r.connection) || void 0 === a ? void 0 : a.getActiveOutputSinkTrackingEnabled()) {
                    var e = Date.now(),
                        t = [],
                        n = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u, s = d.default.entries(r.streamIds)[Symbol.iterator](); !(n = (u = s.next()).done); n = !0) {
                            var l, c = O(u.value, 2),
                                f = c[0],
                                _ = c[1];
                            null != _ && ((null === (l = r.connection) || void 0 === l ? void 0 : l.getHasActiveVideoOutputSink(_)) ? (delete r.offscreenUsers[f], delete r.offscreenDisabledUsers[f]) : null == r.offscreenUsers[f] ? (r.offscreenUsers[f] = e, r.addLru(f, e, t)) : !r.offscreenDisabledUsers[f] && (e - r.offscreenUsers[f] >= r.getOffscreenTimeoutMs() ? r.offscreenDisabledUsers[f] = !0 : r.addLru(f, e, t)))
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !n && null != s.return && s.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    if (t.length > 0) {
                        var E = e + r.getOffscreenTimeoutMs(),
                            p = !0,
                            m = !1,
                            y = void 0;
                        try {
                            for (var I, h = t[Symbol.iterator](); !(p = (I = h.next()).done); p = !0) {
                                var T = I.value;
                                E = Math.min(E, r.offscreenUsers[T] + r.getOffscreenTimeoutMs())
                            }
                        } catch (e) {
                            m = !0, y = e
                        } finally {
                            try {
                                !p && null != h.return && h.return()
                            } finally {
                                if (m) throw y
                            }
                        }
                        r.offscreenTimeout.start(E - e, r.update)
                    } else r.offscreenTimeout.stop()
                }
            }, r.handleLocalVideoDisabled = function(e, t) {
                r.update()
            }, r.handleLocalMute = function(e, t) {
                r.update()
            }, r.update = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = r.getWantsLevel(),
                    n = {
                        any: t
                    };
                r.updateOffscreenUsers();
                var o = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var u, l = d.default.entries(r.videoSsrcs)[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
                        var c, f = O(u.value, 2),
                            _ = f[0],
                            p = f[1],
                            m = [],
                            y = !1,
                            I = p[0].ssrc;
                        if (r.shouldReceiveFromUser(_)) {
                            var h = _ === r.selectedParticipantId && 100 !== t && !r.pipOpen;
                            if (p.length > 1) {
                                var S = !0,
                                    v = !1,
                                    g = void 0;
                                try {
                                    for (var b, N = p[Symbol.iterator](); !(S = (b = N.next()).done); S = !0) {
                                        var R = b.value;
                                        100 === R.quality ? h ? (n[R.ssrc] = 100, I = R.ssrc) : n[R.ssrc] = 0 : h ? n[R.ssrc] = 0 : I = R.ssrc
                                    }
                                } catch (e) {
                                    v = !0, g = e
                                } finally {
                                    try {
                                        !S && null != N.return && N.return()
                                    } finally {
                                        if (v) throw g
                                    }
                                }
                                if (r.supportsSeamless && !r.framesReceived[I]) {
                                    y = !0, m = [I];
                                    var C = !0,
                                        P = !1,
                                        D = void 0;
                                    try {
                                        for (var L, M = p[Symbol.iterator](); !(C = (L = M.next()).done); C = !0) {
                                            var U = L.value;
                                            U.ssrc !== I && r.framesReceived[U.ssrc] && (100 === U.quality ? n[U.ssrc] = 100 : n[U.ssrc] = t, m.push(U.ssrc))
                                        }
                                    } catch (e) {
                                        P = !0, D = e
                                    } finally {
                                        try {
                                            !C && null != M.return && M.return()
                                        } finally {
                                            if (P) throw D
                                        }
                                    }
                                }
                            } else h && (n[I] = 100)
                        } else {
                            var w = !0,
                                k = !1,
                                G = void 0;
                            try {
                                for (var B, j = p[Symbol.iterator](); !(w = (B = j.next()).done); w = !0) n[B.value.ssrc] = 0
                            } catch (e) {
                                k = !0, G = e
                            } finally {
                                try {
                                    !w && null != j.return && j.return()
                                } finally {
                                    if (k) throw G
                                }
                            }
                        }(!r.supportsSeamless || !y) && (m = [I]);
                        var F = !0,
                            V = !1,
                            H = void 0;
                        try {
                            for (var x, Y = p[Symbol.iterator](); !(F = (x = Y.next()).done); F = !0) {
                                var W = x.value;
                                !m.includes(W.ssrc) && delete r.framesReceived[W.ssrc]
                            }
                        } catch (e) {
                            V = !0, H = e
                        } finally {
                            try {
                                !F && null != Y.return && Y.return()
                            } finally {
                                if (V) throw H
                            }
                        }
                        if (e.includes(_) || void 0 !== r.remoteVideoSsrcs[_] && !(0, s.default)(r.remoteVideoSsrcs[_], m)) {
                            ;
                            r.remoteVideoSsrcs[_] = (c = m, function(e) {
                                if (Array.isArray(e)) return E(e)
                            }(c) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                            }(c) || T(c) || function() {
                                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()), r.emit("user-ssrc-update", _, r.audioSsrcs[_], m)
                        }
                    }
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !o && null != l.return && l.return()
                    } finally {
                        if (i) throw a
                    }
                }
                var K = !0,
                    z = !1,
                    X = void 0;
                try {
                    for (var q, Q = Object.entries(r.audioSsrcs)[Symbol.iterator](); !(K = (q = Q.next()).done); K = !0) {
                        var J, Z = O(q.value, 2),
                            $ = Z[0],
                            ee = Z[1];
                        (null === (J = r.connection) || void 0 === J ? void 0 : J.getLocalMute($)) && (n[ee] = 0)
                    }
                } catch (e) {
                    z = !0, X = e
                } finally {
                    try {
                        !K && null != Q.return && Q.return()
                    } finally {
                        if (z) throw X
                    }
                }
                return A ? r.latestWants : (null != r.connection && !(0, s.default)(r.latestWants, n) && (r.latestWants = n, r.emit("update", n)), n)
            }, r.delayedCall = new l.DelayedCall(100, r.update), r.offscreenTimeout = new l.Timeout, r
        }
        return r = f, o = [{
            key: "getWantsLevel",
            value: function() {
                var e = this.getVideoParticipantCount();
                return this.ladder.getMaxSinkValue(e)
            }
        }, {
            key: "userVideoDisabled",
            value: function(e) {
                return this.offscreenDisabledUsers[e]
            }
        }, {
            key: "shouldReceiveFromUser",
            value: function(e) {
                var t, n;
                return !((null === (t = this.connection) || void 0 === t ? void 0 : t.getLocalVideoDisabled(e)) || this.userVideoDisabled(e) && (null === (n = this.videoHealthManager) || void 0 === n ? void 0 : n.getCurrentVideoToggleState(e)) !== _.VideoToggleState.AUTO_PROBING)
            }
        }, {
            key: "getAudioSSRCs",
            value: function() {
                return this.audioSsrcs
            }
        }, {
            key: "setConnection",
            value: function(e) {
                var t, n, r, o, i, u, s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                null === (t = this.connection) || void 0 === t || t.removeListener(a.BaseConnectionEvent.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (n = this.connection) || void 0 === n || n.removeListener(a.BaseConnectionEvent.LocalMute, this.handleLocalMute), null === (r = this.connection) || void 0 === r || r.removeListener(a.BaseConnectionEvent.ActiveSinksChange, this.delayedUpdate), this.connection = e, null === (o = this.connection) || void 0 === o || o.addListener(a.BaseConnectionEvent.LocalVideoDisabled, this.handleLocalVideoDisabled), null === (i = this.connection) || void 0 === i || i.addListener(a.BaseConnectionEvent.LocalMute, this.handleLocalMute), null === (u = this.connection) || void 0 === u || u.addListener(a.BaseConnectionEvent.ActiveSinksChange, this.delayedUpdate), s && this.update()
            }
        }, {
            key: "setAudioSSRC",
            value: function(e, t) {
                return t > 0 ? this.audioSsrcs[e] = t : delete this.audioSsrcs[e], this.update()
            }
        }, {
            key: "setVideoSSRCs",
            value: function(e, t) {
                var n = t.filter(function(e) {
                    var t;
                    return e.active && (null !== (t = e.ssrc) && void 0 !== t ? t : 0) > 0
                }).map(function(e) {
                    var t;
                    return {
                        quality: null !== (t = e.quality) && void 0 !== t ? t : 100,
                        ssrc: e.ssrc
                    }
                });
                if (n.length > 0) this.videoSsrcs[e] = n, this.participants.add(e);
                else {
                    if (void 0 !== this.videoSsrcs[e]) {
                        var r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, u = this.videoSsrcs[e][Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                                var s = a.value.ssrc;
                                delete this.framesReceived[s]
                            }
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && null != u.return && u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                    }
                    delete this.remoteVideoSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), this.emit("user-ssrc-update", e, this.audioSsrcs[e], [])
                }
                return this.update(Array.from(this.participants))
            }
        }, {
            key: "setFirstFrameReceived",
            value: function(e) {
                return this.framesReceived[e] = !0, this.update()
            }
        }, {
            key: "setStreamId",
            value: function(e, t) {
                return null != t ? this.streamIds[e] = t : delete this.streamIds[e], this.update()
            }
        }, {
            key: "destroyUser",
            value: function(e) {
                return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamIds[e], this.update(Array.from(this.participants))
            }
        }, {
            key: "reset",
            value: function() {
                this.setConnection(null, !1), this.audioSsrcs = {}, this.videoSsrcs = {}, this.remoteVideoSsrcs = {}, this.framesReceived = {}, this.streamIds = {}, this.latestWants = S
            }
        }, {
            key: "setSelectedParticipant",
            value: function(e) {
                var t = this;
                if (e === this.selectedParticipantId) return this.latestWants;
                var n = [];
                if (null != this.selectedParticipantId && this.selectedParticipantId !== this.userId && n.push(this.selectedParticipantId), null != e) {
                    if (this.participants.has(e)) this.selectedParticipantId = e, n.push(e);
                    else {
                        if (this.userId !== e) return console.warn("Participant not found: ".concat(e)), this.latestWants;
                        this.selectedParticipantId = e
                    }
                } else this.selectedParticipantId = null;
                return this.update(n.filter(function(e) {
                    var n;
                    return (null === (n = t.videoSsrcs[e]) || void 0 === n ? void 0 : n.length) > 1
                }))
            }
        }, {
            key: "setPipOpen",
            value: function(e) {
                return (this.pipOpen = e, null != this.selectedParticipantId) ? this.update([this.selectedParticipantId]) : this.latestWants
            }
        }, {
            key: "setAppBackgrounded",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = d.default.entries(this.streamIds)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = O(i.value, 2),
                            s = u[0],
                            l = u[1];
                        if (this.offscreenDisabledUsers[s] = e, null != l) {
                            var c, f = !e || t;
                            null === (c = this.connection) || void 0 === c || c.setHasActiveVideoOutputSink(l, f)
                        }
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
                return this.update()
            }
        }, {
            key: "getOffscreenDisabledUsers",
            value: function() {
                return this.offscreenDisabledUsers
            }
        }, {
            key: "getVideoParticipantCount",
            value: function() {
                var e = 0,
                    t = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var o, i = Object.keys(this.videoSsrcs)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                        var a, u = o.value;
                        !(null === (a = this.connection) || void 0 === a ? void 0 : a.getLocalVideoDisabled(u)) && e++
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
            key: "getOffscreenTimeoutMs",
            value: function() {
                return this.isStageChannel ? g : v
            }
        }], m(r.prototype, o), i && m(r, i), f
    }(i.default)
}