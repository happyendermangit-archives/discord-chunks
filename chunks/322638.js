function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("445278"),
        u = n("585949"),
        s = n("224359"),
        l = n("813970"),
        c = n("603473"),
        f = n("73013"),
        d = n("935741"),
        _ = n("365746"),
        E = n("901482"),
        p = n("120447"),
        m = n("521862"),
        y = n("281767"),
        I = n("941504"),
        h = n("631377");

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function S(e, t) {
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

    function v(e) {
        var t, n, v = e.isCurrentUser,
            g = e.color,
            A = e.look,
            b = e.applicationStream,
            N = (0, o.useStateFromStoresObject)([f.default], function() {
                return {
                    activeStream: f.default.getActiveStreamForApplicationStream(b),
                    watchingOtherStream: null != b && f.default.getAllActiveStreamsForChannel(b.channelId).filter(function(e) {
                        return e.ownerId !== b.ownerId
                    }).length > 0
                }
            }),
            R = N.activeStream,
            C = N.watchingOtherStream,
            P = (0, o.useStateFromStores)([d.default], function() {
                return d.default.getChannel(null == b ? void 0 : b.channelId)
            });
        var D = (t = (0, c.useCanWatchStream)(P), n = 2, function(e) {
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
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            L = D[0],
            M = D[1],
            U = (0, l.useWindowDispatch)(),
            w = null != R && null != b && R.state !== y.ApplicationStreamStates.ENDED && R.ownerId === b.ownerId,
            k = function(e) {
                null != b && (u.default.selectVoiceChannel(b.channelId), !w && (0, s.watchStreamAndTransitionToStream)(b, {
                    forceMultiple: e
                }), U.dispatch(y.ComponentActions.POPOUT_CLOSE), p.ComponentDispatch.dispatch(y.ComponentActions.MODAL_CLOSE), a.default.popAll())
            };
        if (null == b) return null;
        var G = (0, c.getStreamCTAString)(M);
        v ? G = I.default.Messages.WATCH_STREAM_STREAMING : w && (G = I.default.Messages.WATCH_STREAM_WATCHING);
        var B = {
            color: g,
            look: A
        };
        return r.createElement(r.Fragment, null, r.createElement(m.default, S(T({
            key: "play",
            disabled: v || w || !L,
            onClick: function() {
                return k(!1)
            }
        }, B), {
            fullWidth: !0
        }), r.createElement(E.default, {
            className: h.streamIcon
        }), G), C && !w ? r.createElement(i.Tooltip, {
            text: I.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP
        }, function(e) {
            return r.createElement(m.default, S(T(S(T({}, e), {
                onClick: function() {
                    var t;
                    null === (t = e.onClick) || void 0 === t || t.call(e), k(!0)
                }
            }), B), {
                className: h.iconButton,
                size: h.iconButtonSize
            }), r.createElement(_.default, {
                className: h.iconSize
            }))
        }) : null)
    }
}