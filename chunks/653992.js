function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        uploadDebugLogFiles: function() {
            return m
        }
    });
    var r = n("967888"),
        o = n("687635"),
        i = n("935741"),
        a = n("887840"),
        u = n("35523"),
        s = n("934564"),
        l = n("65856"),
        c = n("892851"),
        f = n("281767");

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
    var p = new u.default("DebugUploadManager");

    function m(e, t) {
        return y.apply(this, arguments)
    }

    function y() {
        return (y = _(function(e, t) {
            return E(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, function(e) {
                            return I.apply(this, arguments)
                        }(e)];
                    case 1:
                        return n.sent(), [4, (0, o.uploadRtcLogFiles)(14680064, t)];
                    case 2:
                        return n.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function I() {
        return (I = _(function(e) {
            var t, n, o, u, d, _, m, y, I, h;
            return E(this, function(E) {
                switch (E.label) {
                    case 0:
                        E.trys.push([0, 6, , 7]), t = a.stringify(), !0;
                        return [3, 2];
                    case 1:
                        return o = E.sent(), [3, 3];
                    case 2:
                        o = "", E.label = 3;
                    case 3:
                        return n = o, [4, (0, s.getPushNotificationLogs)().then(function(e) {
                            return (0, s.serializePushNotificationLogs)(e, !0)
                        })];
                    case 4:
                        return u = E.sent(), (d = t.length + n.length + u.length) > 9437184 && (_ = 1 - 9437184 / d, t = t.slice(t.length - Math.floor(t.length * _)), n = n.slice(n.length - Math.floor(n.length * _)), u = u.slice(u.length - Math.floor(u.length * _))), m = null, y = "\n    ".concat((0, c.default)(m), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, l.default)(), void 0, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(i.default.getDebugInfo(), void 0, 2), "\n\n    Logs:\n    ").concat(t, "\n\n    System logs:\n    ").concat(n, "\n\n    Push Notifications:\n    ").concat(u, "\n    "), a.clear(), I = f.Endpoints.DEBUG_LOG(e, "discord_app_logs"), [4, r.HTTP.post({
                            url: I,
                            body: y,
                            retries: 3,
                            headers: {
                                "Content-Type": "text/plain"
                            },
                            oldFormErrors: !0
                        })];
                    case 5:
                        return E.sent(), [3, 7];
                    case 6:
                        return h = E.sent(), p.error("uploadAppLogFiles: upload app log files error ".concat(h.message)), [3, 7];
                    case 7:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}