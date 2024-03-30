function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        areRequiredElementsUnfilled: function() {
            return j
        },
        getReportMenu: function() {
            return v
        },
        getUnauthenticatedReportMenu: function() {
            return E
        },
        sendUnauthenticatedReportPincode: function() {
            return R
        },
        showInAppReportsFeedbackModal: function() {
            return P
        },
        submitHeadlessReport: function() {
            return h
        },
        submitReport: function() {
            return _
        },
        submitReportSecondLook: function() {
            return I
        },
        submitUnauthenticatedReport: function() {
            return S
        },
        trackCloseReportModalAnalytics: function() {
            return C
        },
        verifyUnauthenticatedReport: function() {
            return O
        }
    });
    var r = n("967888"),
        a = n("629815"),
        o = n("140817"),
        l = n("303822"),
        i = n("281767");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t, n, r, a, o, l) {
        try {
            var i = e[o](l),
                u = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a)
    }

    function s(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, a) {
                var o = e.apply(t, n);

                function l(e) {
                    c(o, r, a, l, i, "next", e)
                }

                function i(e) {
                    c(o, r, a, l, i, "throw", e)
                }
                l(void 0)
            })
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

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function m(e, t) {
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

    function p(e, t) {
        var n, r, a, o, l = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function i(o) {
            return function(i) {
                return function(o) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                        switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                            case 0:
                            case 1:
                                a = o;
                                break;
                            case 4:
                                return l.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = l.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                    l.label = o[1];
                                    break
                                }
                                if (6 === o[0] && l.label < a[1]) {
                                    l.label = a[1], a = o;
                                    break
                                }
                                if (a && l.label < a[2]) {
                                    l.label = a[2], l.ops.push(o);
                                    break
                                }
                                a[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        o = t.call(e, l)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        n = a = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, i])
            }
        }
    }

    function v(e, t) {
        return y.apply(this, arguments)
    }

    function y() {
        return (y = s(function(e, t) {
            var n, a, o;
            return p(this, function(l) {
                switch (l.label) {
                    case 0:
                        return n = A(e), [4, r.HTTP.get({
                            url: i.Endpoints.GET_REPORT_MENU(n),
                            query: (null == t ? void 0 : t.variant) != null ? {
                                variant: t.variant
                            } : void 0
                        })];
                    case 1:
                        return [2, null !== (o = (a = l.sent()).body) && void 0 !== o ? o : JSON.parse(a.text)]
                }
            })
        })).apply(this, arguments)
    }

    function E(e, t) {
        return b.apply(this, arguments)
    }

    function b() {
        return (b = s(function(e, t) {
            var n, a, o;
            return p(this, function(l) {
                switch (l.label) {
                    case 0:
                        return n = M(e), [4, r.HTTP.get({
                            url: i.Endpoints.GET_UNAUTHENTICATED_REPORT_MENU(n),
                            query: (null == t ? void 0 : t.variant) != null ? {
                                variant: t.variant
                            } : void 0
                        })];
                    case 1:
                        return [2, null !== (o = (a = l.sent()).body) && void 0 !== o ? o : JSON.parse(a.text)]
                }
            })
        })).apply(this, arguments)
    }

    function h(e, t) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = s(function(e, t) {
            var n, a;
            return p(this, function(o) {
                switch (o.label) {
                    case 0:
                        return n = A(e), [4, v(e, t)];
                    case 1:
                        return a = o.sent(), [4, r.HTTP.post({
                            url: i.Endpoints.SUBMIT_REPORT_MENU(n),
                            body: w(a, e, [{
                                nodeRef: a.root_node_id,
                                destination: ["", a.success_node_id]
                            }])
                        })];
                    case 2:
                        return o.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function _(e, t, n) {
        return r.HTTP.post({
            url: i.Endpoints.SUBMIT_REPORT_MENU(A(t)),
            body: w(e, t, n)
        })
    }

    function S(e, t, n, a) {
        var o = M(t);
        return r.HTTP.post({
            url: i.Endpoints.SUBMIT_UNAUTHENTICATED_REPORT_MENU(o),
            body: w(e, t, n, a)
        })
    }

    function R(e, t) {
        return r.HTTP.post({
            url: i.Endpoints.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
            body: {
                name: e,
                email: t
            }
        })
    }

    function O(e, t, n) {
        return N.apply(this, arguments)
    }

    function N() {
        return (N = s(function(e, t, n) {
            return p(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, r.HTTP.post({
                            url: i.Endpoints.VERIFY_UNAUTHENTICATED_REPORT(e),
                            body: {
                                name: e,
                                email: t,
                                code: n
                            }
                        })];
                    case 1:
                        return [2, a.sent().body]
                }
            })
        })).apply(this, arguments)
    }

    function I(e) {
        return T.apply(this, arguments)
    }

    function T() {
        return (T = s(function(e) {
            return p(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, r.HTTP.post({
                            url: i.Endpoints.SUBMIT_REPORT_SECOND_LOOK,
                            body: {
                                token: e
                            }
                        })];
                    case 1:
                        return [2, t.sent().body]
                }
            })
        })).apply(this, arguments)
    }

    function M(e) {
        var t = e.name;
        if (!Object.values(l.UnauthenticatedReportNames).includes(t)) throw Error("Invalid report type ".concat(e.name));
        return t
    }

    function A(e) {
        var t = e.name;
        if (!Object.values(l.ReportNames).includes(t)) throw Error("Invalid report type ".concat(e.name));
        return t
    }
    var w = function(e, t, n, r) {
        var a = e.version,
            o = e.variant,
            i = e.language,
            c = {
                channel_id: void 0,
                message_id: void 0,
                stage_instance_id: void 0,
                guild_id: void 0,
                guild_scheduled_event_id: void 0,
                user_id: void 0,
                email_token: void 0
            },
            s = {
                version: a,
                variant: o,
                language: null != i ? i : "en",
                breadcrumbs: n.map(function(e) {
                    return e.nodeRef
                }),
                elements: n.reduce(function(e, t) {
                    var n = t.multiSelect,
                        r = t.textInput;
                    return f({}, e, null != n && d({}, n.name, Object.keys(n.state)), Object.fromEntries(Object.entries(null != r ? r : {}).map(function(e) {
                        var t, n, r = (n = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(t = e) || function(e, t) {
                            var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != a) {
                                var o = [],
                                    l = !0,
                                    i = !1;
                                try {
                                    for (a = a.call(e); !(l = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); l = !0);
                                } catch (e) {
                                    i = !0, r = e
                                } finally {
                                    try {
                                        !l && null != a.return && a.return()
                                    } finally {
                                        if (i) throw r
                                    }
                                }
                                return o
                            }
                        }(t, n) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return u(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                            }
                        }(t, n) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }());
                        return [r[0], r[1].value]
                    })))
                }, {})
            };
        if (t.name === l.ReportNames.MESSAGE || t.name === l.ReportNames.FIRST_DM) {
            var p = t.record,
                v = p.channel_id,
                y = p.id;
            return m(f({}, s, c), {
                name: t.name,
                channel_id: v,
                message_id: y
            })
        }
        if (t.name === l.ReportNames.GUILD || t.name === l.ReportNames.GUILD_DISCOVERY) {
            var E = t.record.id;
            return m(f({}, s, c), {
                name: t.name,
                guild_id: E
            })
        }
        if (t.name === l.ReportNames.GUILD_DIRECTORY_ENTRY) {
            var b = t.record,
                h = b.guildId,
                g = b.channelId;
            return m(f({}, s, c), {
                name: t.name,
                channel_id: g,
                guild_id: h
            })
        } else if (t.name === l.ReportNames.STAGE_CHANNEL) {
            var _ = t.record,
                S = _.id,
                R = _.guild_id,
                O = _.channel_id;
            return m(f({}, s, c), {
                name: t.name,
                channel_id: O,
                guild_id: R,
                stage_instance_id: S
            })
        } else if (t.name === l.ReportNames.GUILD_SCHEDULED_EVENT) {
            var N = t.record,
                I = N.id,
                T = N.guild_id;
            return m(f({}, s, c), {
                name: t.name,
                guild_id: T,
                guild_scheduled_event_id: I
            })
        } else if (t.name === l.ReportNames.USER) return m(f({}, s, c), {
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId
        });
        else if (t.name === l.UnauthenticatedReportNames.USER) return m(f({}, s, c), {
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: r
        });
        else if (t.name === l.UnauthenticatedReportNames.MESSAGE) return m(f({}, s, c), {
            name: t.name,
            message_id: t.record.id,
            email_token: r
        });
        return null
    };

    function C(e, t, n) {
        o.default.trackWithMetadata(i.AnalyticEvents.IAR_MODAL_CLOSE, {
            report_type: e.name,
            report_id: n,
            navigation_history: t,
            message_id: e.name === l.ReportNames.MESSAGE || e.name === l.ReportNames.FIRST_DM ? e.record.id : void 0,
            stage_instance_id: e.name === l.ReportNames.STAGE_CHANNEL ? e.record.id : void 0,
            guild_scheduled_event_id: e.name === l.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
            guild_id: e.name === l.ReportNames.GUILD || e.name === l.ReportNames.GUILD_DISCOVERY ? e.record.id : e.name === l.ReportNames.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === l.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
            channel_id: e.name === l.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === l.ReportNames.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
        })
    }

    function P(e, t) {
        a.default.dispatch({
            type: "IN_APP_REPORTS_SHOW_FEEDBACK",
            reportId: t,
            reportType: e.name
        })
    }

    function j(e, t, n, r, a) {
        return e.some(function(e) {
            var t;
            return !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === "" || !(null == r ? void 0 : null === (t = r[e.name]) || void 0 === t ? void 0 : t.isValid))
        }) || t.some(function(e) {
            return !0 === e.should_submit_data && ((null == r ? void 0 : r[e.name]) == null || (null == r ? void 0 : r[e.name].value) === "")
        }) || (null == n ? void 0 : n.should_submit_data) === !0 && (null == a || 0 === Object.keys(a).length)
    }
}