function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CAN_SET_DEVICES: function() {
            return u
        },
        CAN_SET_OUTPUT_DEVICES: function() {
            return s
        },
        getAudioInputDevices: function() {
            return _
        },
        getAudioOutputDevices: function() {
            return p
        },
        getDevices: function() {
            return h
        },
        getVideoInputDevices: function() {
            return y
        }
    });
    var r = n("439386");

    function o(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function i(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, i) {
                var a = e.apply(t, n);

                function u(e) {
                    o(a, r, i, u, s, "next", e)
                }

                function s(e) {
                    o(a, r, i, u, s, "throw", e)
                }
                u(void 0)
            })
        }
    }

    function a(e, t) {
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
    var u = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
        s = u && "setSinkId" in HTMLAudioElement.prototype;

    function l(e) {
        return {
            id: r.DEFAULT_DEVICE_ID,
            type: e,
            index: 0,
            name: "Default"
        }
    }

    function c() {
        return [l(r.DeviceTypes.AUDIO_INPUT), l(r.DeviceTypes.AUDIO_OUTPUT), l(r.DeviceTypes.VIDEO_INPUT)]
    }

    function f(e, t) {
        return e.filter(function(e) {
            return e.type === t
        })
    }

    function d() {
        return u ? navigator.mediaDevices.enumerateDevices().then(function(e) {
            var t = 0,
                n = 0,
                o = 0;
            return e.filter(function(e) {
                switch (e.kind) {
                    case r.DeviceTypes.AUDIO_INPUT:
                    case r.DeviceTypes.AUDIO_OUTPUT:
                    case r.DeviceTypes.VIDEO_INPUT:
                        return !0;
                    default:
                        return !1
                }
            }).map(function(e) {
                var i;
                switch (e.kind) {
                    case r.DeviceTypes.AUDIO_INPUT:
                        i = t++;
                        break;
                    case r.DeviceTypes.AUDIO_OUTPUT:
                        i = n++;
                        break;
                    case r.DeviceTypes.VIDEO_INPUT:
                    default:
                        i = o++
                }
                return {
                    id: e.deviceId,
                    type: e.kind,
                    index: i,
                    name: null != e.label && "" !== e.label ? e.label : 0 === i ? "Default" : "Device ".concat(i)
                }
            })
        }).then(function(e) {
            return !s && (e = e.filter(function(e) {
                return e.type !== r.DeviceTypes.AUDIO_OUTPUT
            })).push(l(r.DeviceTypes.AUDIO_OUTPUT)), e
        }).catch(c) : new Promise(function(e) {
            setImmediate(function() {
                return e(c())
            })
        })
    }

    function _() {
        return E.apply(this, arguments)
    }

    function E() {
        return (E = i(function() {
            return a(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, d()];
                    case 1:
                        return [2, f(e.sent(), r.DeviceTypes.AUDIO_INPUT)]
                }
            })
        })).apply(this, arguments)
    }

    function p() {
        return m.apply(this, arguments)
    }

    function m() {
        return (m = i(function() {
            return a(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, d()];
                    case 1:
                        return [2, f(e.sent(), r.DeviceTypes.AUDIO_OUTPUT)]
                }
            })
        })).apply(this, arguments)
    }

    function y() {
        return I.apply(this, arguments)
    }

    function I() {
        return (I = i(function() {
            return a(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, d()];
                    case 1:
                        return [2, f(e.sent(), r.DeviceTypes.VIDEO_INPUT)]
                }
            })
        })).apply(this, arguments)
    }

    function h() {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = i(function() {
            var e;
            return a(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, d()];
                    case 1:
                        return [2, [f(e = t.sent(), r.DeviceTypes.AUDIO_INPUT), f(e, r.DeviceTypes.AUDIO_OUTPUT), f(e, r.DeviceTypes.VIDEO_INPUT)]]
                }
            })
        })).apply(this, arguments)
    }
}