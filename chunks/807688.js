function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("784184"),
        i = n("342942"),
        a = n("736381"),
        u = n("977221"),
        s = n("889046"),
        l = n("423731"),
        c = n("217014"),
        f = n("935741"),
        d = n("868447"),
        _ = n("545072"),
        E = n("140591"),
        p = n("295598"),
        m = n("312368"),
        y = n("281767");

    function I(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function h(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function O(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    h(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    h(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                S(e, t, n[t])
            })
        }
        return e
    }

    function A(e, t) {
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

    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function N(e, t) {
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
    var R = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }(D, e);
        var t, p, h, R, C, P = (t = D, p = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, n, r, o = v(t);
            if (p) {
                var i = v(this).constructor;
                r = Reflect.construct(o, arguments, i)
            } else r = o.apply(this, arguments);
            return e = this, (n = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(n) || "function" == typeof n) ? n : I(e)
        });

        function D() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, D), e = P.apply(this, arguments), S(I(e), "actions", {
                VOICE_CHANNEL_SHOW_FEEDBACK: function(t) {
                    return e.handleVoiceChannelFeedback(t)
                },
                STREAM_CLOSE: function(t) {
                    return e.handleStreamClose(t)
                },
                VIDEO_BACKGROUND_SHOW_FEEDBACK: function(t) {
                    return e.handleVideoBackgroundShowFeedback(t)
                },
                EMBEDDED_ACTIVITY_CLOSE: function(t) {
                    return e.handleActivityClose(t)
                },
                IN_APP_REPORTS_SHOW_FEEDBACK: function(t) {
                    return e.handleInAppReportsFeedback(t)
                }
            }), S(I(e), "handleVoiceChannelFeedback", function(t) {
                var i = t.analyticsData;
                e.possiblyShowFeedbackModal(m.FeedbackType.VOICE, function() {
                    (0, o.openModalLazy)(O(function() {
                        var e;
                        return N(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("54146")]).then(n.bind(n, "523688"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return r.createElement(e, A(g({}, t), {
                                            analyticsData: i
                                        }))
                                    }]
                            }
                        })
                    }))
                })
            }), S(I(e), "handleStreamClose", function(t) {
                var i, s = t.streamKey,
                    l = t.canShowFeedback,
                    f = (0, a.decodeStreamKey)(s),
                    _ = (0, u.getStreamerApplication)(f, d.default),
                    p = null !== (i = E.default.getVideoStats(s)) && void 0 !== i ? i : {},
                    y = g({
                        media_session_id: E.default.getMediaSessionId(s),
                        rtc_connection_id: E.default.getRtcConnectionId(s),
                        stream_region: E.default.getRegion(s),
                        max_viewers: E.default.getMaxViewers(s)
                    }, p);
                l && e.possiblyShowFeedbackModal(m.FeedbackType.STREAM, function() {
                    (0, o.openModalLazy)(O(function() {
                        var e;
                        return N(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("13135")]).then(n.bind(n, "828797"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return r.createElement(e, A(g({
                                            stream: f,
                                            streamApplication: _,
                                            isStreamer: f.ownerId === c.default.getId()
                                        }, t), {
                                            analyticsData: y
                                        }))
                                    }]
                            }
                        })
                    }))
                })
            }), S(I(e), "handleVideoBackgroundShowFeedback", function(t) {
                var i = t.analyticsData;
                e.possiblyShowFeedbackModal(m.FeedbackType.VIDEO_BACKGROUND, function() {
                    (0, o.openModalLazy)(O(function() {
                        var e;
                        return N(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("76433")]).then(n.bind(n, "878040"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return r.createElement(e, A(g({}, t), {
                                            analyticsData: i
                                        }))
                                    }]
                            }
                        })
                    }))
                })
            }), S(I(e), "handleActivityClose", function(t) {
                var a = t.applicationId,
                    u = t.channelId,
                    s = t.showFeedback,
                    c = i.default.getApplication(a),
                    d = f.default.getChannel(u),
                    E = {
                        rtc_connection_id: _.default.getRTCConnectionId(),
                        media_session_id: _.default.getMediaSessionId()
                    },
                    p = l.default.getWindowOpen(y.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT;
                null != c && null != d && s && e.possiblyShowFeedbackModal(m.FeedbackType.ACTIVITY, function() {
                    (0, o.openModalLazy)(O(function() {
                        var e;
                        return N(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("53886")]).then(n.bind(n, "723582"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return r.createElement(e, A(g({}, t), {
                                            activityApplication: c,
                                            channel: d,
                                            analyticsData: E
                                        }))
                                    }]
                            }
                        })
                    }), {
                        contextKey: p
                    })
                })
            }), S(I(e), "handleInAppReportsFeedback", function(t) {
                var i = t.reportId,
                    a = t.reportType;
                e.possiblyShowFeedbackModal(m.FeedbackType.IN_APP_REPORTS, function() {
                    (0, o.openModalLazy)(O(function() {
                        var e;
                        return N(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("19908")]).then(n.bind(n, "841826"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return r.createElement(e, A(g({}, t), {
                                            reportId: i,
                                            reportType: a
                                        }))
                                    }]
                            }
                        })
                    }))
                })
            }), e
        }
        return h = D, R = [{
            key: "_initialize",
            value: function() {
                s.default.init()
            }
        }], T(h.prototype, R), C && T(h, C), D
    }(p.default);
    t.default = new R
}