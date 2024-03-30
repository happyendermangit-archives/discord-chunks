function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("49657"),
        i = n("378294"),
        a = n("275373"),
        u = n("281767"),
        s = n("941504");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(m, e);
        var t, n, d, _, E, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function m() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), p.apply(this, arguments)
        }
        return d = m, _ = [{
            key: "render",
            value: function() {
                var e, t, n = this.props,
                    l = n.src,
                    c = n.fileSize,
                    f = n.className,
                    d = n.mediaPlayerClassName,
                    _ = n.poster,
                    E = n.fileName,
                    p = n.naturalWidth,
                    m = n.naturalHeight,
                    y = n.playable,
                    I = n.downloadable,
                    h = void 0 === I || I,
                    O = n.volume,
                    T = n.autoPlay,
                    S = n.autoMute,
                    v = n.responsive,
                    g = n.mediaLayoutType,
                    A = n.mimeType,
                    b = n.renderOverlayContent,
                    N = n.renderLinkComponent,
                    R = n.onClick,
                    C = n.onPlay,
                    P = n.onEnded,
                    D = n.onVolumeChange,
                    L = n.onMute,
                    M = n.alt,
                    U = void 0 === M ? s.default.Messages.VIDEO : M,
                    w = function(e, t) {
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
                    }(n, ["src", "fileSize", "className", "mediaPlayerClassName", "poster", "fileName", "naturalWidth", "naturalHeight", "playable", "downloadable", "volume", "autoPlay", "autoMute", "responsive", "mediaLayoutType", "mimeType", "renderOverlayContent", "renderLinkComponent", "onClick", "onPlay", "onEnded", "onVolumeChange", "onMute", "alt"]);
                return r.createElement(i.default, (e = function(e) {
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
                }({
                    alt: U,
                    className: f,
                    src: _
                }, w), t = (t = {
                    minWidth: a.default.minWidth,
                    minHeight: a.default.minHeight,
                    shouldLink: !1,
                    shouldAnimate: !1,
                    mediaLayoutType: g,
                    responsive: v
                }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e), function(e) {
                    var t = e.src,
                        n = e.size,
                        i = n.width,
                        s = n.height,
                        f = !(p <= u.MAX_VIDEO_WIDTH && m <= u.MAX_VIDEO_HEIGHT || p <= u.MAX_VIDEO_HEIGHT && m <= u.MAX_VIDEO_WIDTH);
                    return r.createElement(a.default, {
                        className: d,
                        forceExternal: f,
                        src: l,
                        poster: t,
                        width: i,
                        height: s,
                        responsive: v,
                        volume: O,
                        autoPlay: null != T && T,
                        autoMute: null != S && S,
                        type: a.default.Types.VIDEO,
                        mediaLayoutType: g,
                        fileName: E,
                        fileSize: null == c ? void 0 : (0, o.sizeString)(c),
                        fileSizeBytes: null == c ? void 0 : c,
                        playable: y,
                        renderLinkComponent: N,
                        renderOverlayContent: b,
                        onClick: R,
                        onPlay: C,
                        onEnded: P,
                        onVolumeChange: D,
                        onMute: L,
                        mimeType: A,
                        downloadable: h
                    })
                })
            }
        }], l(d.prototype, _), E && l(d, E), m
    }(r.Component)
}