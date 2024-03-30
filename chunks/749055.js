function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageDataType: function() {
            return a
        },
        getFailedMessageId: function() {
            return U
        },
        isMessageDataEdit: function() {
            return M
        }
    });
    var r, o, i, a, u = n("512722"),
        s = n.n(u),
        l = n("235923"),
        c = n("967888"),
        f = n("29570"),
        d = n("140817"),
        _ = n("35523"),
        E = n("834704"),
        p = n("27308"),
        m = n("217014"),
        y = n("649310"),
        I = n("388990"),
        h = n("49657"),
        O = n("874613"),
        T = n("83653"),
        S = n("481921"),
        v = n("281767");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function A(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function R(e) {
        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function C(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                N(e, t, n[t])
            })
        }
        return e
    }

    function P(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }

    function D(e, t) {
        return (D = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var L = null;
    __OVERLAY__ && (L = n("391083").default), (r = i || (i = {})).OVERLAY_UNLOCKED = "overlay_unlocked", r.OVERLAY_UNLOCKED_PINNED = "overlay_unlocked_pinned", r.OVERLAY_LOCKED_ACTIVATED = "overlay_locked_activated", (o = a || (a = {}))[o.SEND = 0] = "SEND", o[o.EDIT = 1] = "EDIT", o[o.COMMAND = 2] = "COMMAND";
    var M = function(e) {
            return 1 === e.type
        },
        U = function(e) {
            return 0 === e.type ? e.message.nonce : M(e) ? e.message.messageId : e.message.data.id
        },
        w = [1 * I.default.Millis.MINUTE, 5 * I.default.Millis.MINUTE],
        k = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && D(e, t)
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
                var e, r, o, i = R(t);
                if (n) {
                    var a = R(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : A(e)
            });

            function u() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), N(A(e = a.call(this, new _.default("MessageQueue"))), "maxSize", void 0), N(A(e), "requests", void 0), N(A(e), "analyticsTimeouts", void 0), e.maxSize = t, e.requests = new Map, e.analyticsTimeouts = new Map, e
            }
            return r = u, o = [{
                key: "isFull",
                value: function() {
                    return this.queue.length >= this.maxSize
                }
            }, {
                key: "drain",
                value: function(e, t) {
                    switch (this.logger.log("Draining Message Queue with: ", e.type), e.type) {
                        case 0:
                            this.handleSend(e.message, t);
                            break;
                        case 1:
                            this.handleEdit(e.message, t);
                            break;
                        case 2:
                            this.handleCommand(e.message, t)
                    }
                }
            }, {
                key: "cancelRequest",
                value: function(e) {
                    var t;
                    null === (t = this.requests.get(e)) || void 0 === t || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e)
                }
            }, {
                key: "startQueueMetricTimers",
                value: function(e) {
                    var t = w.map(function(e) {
                        return setTimeout(function() {
                            (0, d.trackWithMetadata)(v.AnalyticEvents.SEND_MESSAGE_QUEUED, {
                                queued_duration_ms: e
                            })
                        }, e)
                    });
                    this.analyticsTimeouts.set(e, t)
                }
            }, {
                key: "cancelQueueMetricTimers",
                value: function(e) {
                    var t;
                    null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e)
                }
            }, {
                key: "createResponseHandler",
                value: function(e, t) {
                    var n = this;
                    return function(r) {
                        if (null != e && (n.requests.delete(e), n.cancelQueueMetricTimers(e)), r.hasErr) return t(null, r);
                        null != r.body && (r.body.code === v.AbortCodes.SLOWMODE_RATE_LIMITED || r.body.code === v.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) ? t(null, r) : 429 === r.status ? t({
                            retryAfter: r.body.retry_after * I.default.Millis.SECOND
                        }) : t(null, r)
                    }
                }
            }, {
                key: "handleSend",
                value: function(e, t) {
                    var n, r = this,
                        o = e.channelId,
                        i = e.file,
                        a = e.filename,
                        u = P(e, ["channelId", "file", "filename"]),
                        s = (0, p.getSignalStrength)(),
                        f = C({
                            mobile_network_type: y.default.getType()
                        }, u, null != s && {
                            signal_strength: s
                        });
                    if (E.default.get("send_fail_100")) {
                        this.logger.log("Skipping message sened because send_fail_100 is enabled"), t(null, {
                            ok: !1,
                            hasErr: !1,
                            status: 500,
                            headers: {},
                            body: "{}",
                            text: "Simulated failure"
                        });
                        return
                    }
                    null != L && (L.isInstanceUILocked() ? n = {
                        location: "overlay_locked_activated"
                    } : !L.isInstanceUILocked() && (n = L.isPinned(v.OverlayWidgets.TEXT) ? {
                        location: "overlay_unlocked_pinned"
                    } : {
                        location: "overlay_unlocked"
                    }));
                    var d = this.createResponseHandler(e.nonce, t),
                        _ = new AbortController;
                    if (this.startQueueMetricTimers(e.nonce), null != i && null != a && "" !== a) c.HTTP.post({
                        url: v.Endpoints.MESSAGES(o),
                        fields: Object.entries(f).map(function(e) {
                            var t, n, r = (n = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(t = e) || function(e, t) {
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
                            }(t, n) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return g(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                                }
                            }(t, n) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }());
                            return {
                                name: r[0],
                                value: r[1]
                            }
                        }),
                        attachments: [{
                            name: "file",
                            file: i,
                            filename: a
                        }],
                        context: n,
                        oldFormErrors: !0,
                        signal: _.signal,
                        onRequestCreated: function() {
                            null != e.nonce && r.requests.set(e.nonce, _)
                        }
                    }, d);
                    else {
                        var m, h, O = {
                            timeout: 60 * I.default.Millis.SECOND,
                            retries: 3,
                            backoff: new l.default
                        };
                        c.HTTP.post((m = C({
                            url: v.Endpoints.MESSAGES(o),
                            body: f,
                            context: n,
                            oldFormErrors: !0
                        }, O), h = (h = {
                            signal: _.signal,
                            onRequestCreated: function() {
                                null != e.nonce && r.requests.set(e.nonce, _)
                            }
                        }, h), Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(h)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(h)).forEach(function(e) {
                            Object.defineProperty(m, e, Object.getOwnPropertyDescriptor(h, e))
                        }), m), d)
                    }
                }
            }, {
                key: "handleEdit",
                value: function(e, t) {
                    var n = this,
                        r = e.channelId,
                        o = e.messageId,
                        i = P(e, ["channelId", "messageId"]),
                        a = new AbortController;
                    c.HTTP.patch({
                        url: v.Endpoints.MESSAGE(r, o),
                        body: i,
                        retries: 1,
                        oldFormErrors: !0,
                        signal: a.signal,
                        onRequestCreated: function() {
                            n.requests.set(o, a)
                        }
                    }, this.createResponseHandler(o, t))
                }
            }, {
                key: "handleCommand",
                value: function(e, t) {
                    var n, r = this,
                        o = e.applicationId,
                        i = e.guildId,
                        a = e.channelId,
                        u = e.data,
                        l = e.nonce,
                        d = e.attachments,
                        _ = e.maxSizeCallback,
                        E = e.analytics_location,
                        p = {
                            type: f.InteractionTypes.APPLICATION_COMMAND,
                            application_id: o,
                            guild_id: i,
                            channel_id: a,
                            session_id: m.default.getSessionId(),
                            data: u,
                            nonce: l,
                            analytics_location: E
                        };
                    if (null != d) {
                        p.data.attachments = [], n = [];
                        p.data.attachments = d.map(function(e, t) {
                            return s()(e.status === S.CloudUploadStatus.COMPLETED, "Uploads must be staged before trying to send a message"), (0, T.getAttachmentPayload)(e, t)
                        })
                    }
                    var y = new AbortController;
                    c.HTTP.post({
                        url: v.Endpoints.INTERACTIONS,
                        fields: [{
                            name: "payload_json",
                            value: JSON.stringify(p)
                        }],
                        attachments: n,
                        signal: y.signal,
                        onRequestCreated: function(e) {
                            r.requests.set(l, y), e.on("progress", function(e) {
                                var t = e.total,
                                    n = (0, h.maxFileSize)(i);
                                null != t && t > n && (r.cancelRequest(l), null == _ || _(n))
                            })
                        }
                    }, this.createResponseHandler(l, t))
                }
            }], b(r.prototype, o), i && b(r, i), u
        }(O.default);
    t.default = new k
}