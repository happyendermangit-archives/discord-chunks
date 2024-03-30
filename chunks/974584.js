function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("278831"),
        i = n("555474");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function s() {
        var e;
        return e = function(e) {
            var t, n, r, o;
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
            }(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (t = e.deviceId, n = e.width, r = e.height, e.disabled) return [2, null];
                        o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, navigator.mediaDevices.getUserMedia({
                            audio: !1,
                            video: {
                                width: n * window.devicePixelRatio,
                                height: r * window.devicePixelRatio,
                                frameRate: 30,
                                deviceId: t
                            }
                        })];
                    case 2:
                        return [2, o.sent()];
                    case 3:
                        return o.sent(), [2, null];
                    case 4:
                        return [2]
                }
            })
        }, (s = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    u(i, r, o, a, s, "next", e)
                }

                function s(e) {
                    u(i, r, o, a, s, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function l(e) {
        var t, n, u = e.deviceId,
            l = e.width,
            c = e.height,
            f = e.disabled;
        var d = (t = r.useState(), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            _ = d[0],
            E = d[1];
        return r.useEffect(function() {
            var e = (function(e) {
                return s.apply(this, arguments)
            })({
                deviceId: u,
                width: l,
                height: c,
                disabled: f
            }).then(function(e) {
                var t = null != e ? (0, o.registerVideoStream)(e) : null;
                return E(t), {
                    stream: e,
                    streamId: t
                }
            });
            return function() {
                e.then(function(e) {
                    var t, n = e.stream,
                        r = e.streamId;
                    null != (t = n) && t.getTracks().forEach(function(e) {
                        return e.stop()
                    }), null != r && (0, o.unregisterVideoStream)(r)
                })
            }
        }, [u, l, c, f]), null == _ ? r.createElement("div", {
            className: "media-engine-video",
            style: {
                width: l,
                height: c
            }
        }) : r.createElement(i.default, {
            streamId: _,
            style: {
                width: l,
                height: c
            }
        })
    }
    l.defaultProps = {
        disabled: !1,
        width: 320,
        height: 180
    }
}