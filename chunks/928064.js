function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        applyBackgroundOptionLive: function() {
            return v
        },
        applyBackgroundOptionPreview: function() {
            return A
        },
        applyInitialVideoBackgroundOption: function() {
            return N
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("384433"),
        a = n("208454"),
        u = n("299529"),
        s = n("786827"),
        l = n("671840"),
        c = n("940354"),
        f = n("422003"),
        d = n("312550"),
        _ = n("204996"),
        E = n("314656"),
        p = n("281767");

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    m(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    m(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
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

    function h() {
        return (h = y(function(e) {
            var t, n;
            return I(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, fetch(e)];
                    case 1:
                        return [4, r.sent().blob()];
                    case 2:
                        return t = r.sent(), n = Uint8ClampedArray.bind, [4, t.arrayBuffer()];
                    case 3:
                        return [2, new(n.apply(Uint8ClampedArray, [void 0, r.sent()]))]
                }
            })
        })).apply(this, arguments)
    }

    function O(e, t, n, r, o) {
        var i, a, u;
        (0, l.applyMediaFilterSettings)((i = {}, a = e, u = {
            graph: n,
            target: t,
            image: r,
            blob: o
        }, a in i ? Object.defineProperty(i, a, {
            value: u,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[a] = u, i))
    }

    function T(e, t, n) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = y(function(e, t, n) {
            var r, a, s, c, f, _, p, m, y, T;
            return I(this, function(I) {
                switch (I.label) {
                    case 0:
                        if (r = !1, null == n) return [2, O(e, t, i.FilterSettingsGraph.NONE)];
                        if (n === E.BLUR_BACKGROUND_OPTION) return [2, O(e, t, i.FilterSettingsGraph.BACKGROUND_BLUR)];
                        else "string" == typeof n || "number" == typeof n ? (r = null !== (c = (s = (0, d.default)()[n]).isVideo) && void 0 !== c && c, a = s.source) : (f = n.asset, r = (0, u.isAnimatedIconHash)(f) || (0, u.isVideoAssetHash)(f), a = (0, u.getVideoFilterAssetURL)({
                            userId: n.user_id,
                            assetId: n.id,
                            assetHash: f,
                            size: E.BACKGROUND_REPLACEMENT_SIZE.width
                        }));
                        if (null == a) return [2];
                        I.label = 1;
                    case 1:
                        var T;
                        if (I.trys.push([1, 8, , 9]), r) return [3, 3];
                        return [4, (T = a, new Promise(function(e, t) {
                            var n = new Image;
                            n.crossOrigin = "anonymous", n.onload = function() {
                                var t = document.createElement("canvas");
                                t.width = E.BACKGROUND_REPLACEMENT_SIZE.width, t.height = E.BACKGROUND_REPLACEMENT_SIZE.height;
                                var r = t.getContext("2d");
                                o()(null != r, "Canvas context is missing");
                                var i = n.height / n.width,
                                    a = E.BACKGROUND_REPLACEMENT_SIZE.height,
                                    u = E.BACKGROUND_REPLACEMENT_SIZE.height / i,
                                    s = (t.width - u) / 2,
                                    l = (t.height - a) / 2;
                                r.drawImage(n, s, l, u, a);
                                var c = r.getImageData(0, 0, t.width, t.height);
                                e({
                                    data: c.data,
                                    width: c.width,
                                    height: c.height,
                                    pixelFormat: "rgba"
                                })
                            }, n.onerror = function(e) {
                                return t(e)
                            }, n.src = T
                        }))];
                    case 2:
                        return p = I.sent(), [3, 4];
                    case 3:
                        p = void 0, I.label = 4;
                    case 4:
                        if (_ = p, !r) return [3, 6];
                        return [4, function(e) {
                            return h.apply(this, arguments)
                        }(a)];
                    case 5:
                        return y = I.sent(), [3, 7];
                    case 6:
                        y = void 0, I.label = 7;
                    case 7:
                        return m = y, O(e, t, i.FilterSettingsGraph.BACKGROUND_REPLACEMENT, _, m), [3, 9];
                    case 8:
                        return I.sent(), (0, l.errorApplyingMediaFilterSettings)(), [3, 9];
                    case 9:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function v(e, t) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = y(function(e, t) {
            var n, r, o;
            return I(this, function(a) {
                switch (a.label) {
                    case 0:
                        return r = void 0 === (n = t.track) || n, o = t.location, [4, T(i.FilterSettingsKey.CAMERA_BACKGROUND_LIVE, {
                            type: i.FilterTargetType.INPUT_DEVICE
                        }, e)];
                    case 1:
                        return a.sent(), r && (0, f.trackBackgroundOptionUpdated)(e, o, "Enabled"), [2]
                }
            })
        })).apply(this, arguments)
    }

    function A(e, t, n) {
        return b.apply(this, arguments)
    }

    function b() {
        return (b = y(function(e, t, n) {
            var r, o, a;
            return I(this, function(u) {
                switch (u.label) {
                    case 0:
                        return o = void 0 === (r = n.track) || r, a = n.location, (0, l.startApplyMediaFilterSettings)(), [4, T(i.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, {
                            type: i.FilterTargetType.STREAM,
                            streamId: t
                        }, e)];
                    case 1:
                        return u.sent(), o && (0, f.trackBackgroundOptionUpdated)(e, a, "Preview"), [2]
                }
            })
        })).apply(this, arguments)
    }

    function N() {
        var e = a.default.getCurrentUser();
        if (null != e) {
            var t = (0, s.getLastUsedVideoBackgroundOption)(e);
            (0, _.default)() && !c.default.hasBeenApplied && null != t && v(t, {
                track: !1
            }).catch(p.NOOP)
        }
    }
}