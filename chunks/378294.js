function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IMAGE_GIF_RE: function() {
            return R
        },
        default: function() {
            return P
        }
    });
    var r, o, i, a = n("470079"),
        u = n("392711"),
        s = n("767556"),
        l = n("513967"),
        c = n("94498"),
        f = n("896299"),
        d = n("35911"),
        _ = n("24039"),
        E = n("649310"),
        p = n("870331"),
        m = n("299529"),
        y = n("182425"),
        I = n("668631"),
        h = n("486367"),
        O = n("766063"),
        T = n("281767");

    function S(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function N(e, t) {
        return (N = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var R = /\.gif($|\?|#)/i,
        C = /\.png($|\?|#)/i;
    (r = o || (o = {})).LOAD = "LOAD", r.PRELOAD = "PRELOAD", r.CLICK = "CLICK";
    var P = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && N(e, t)
        }(c, e);
        var t, n, r, o, i, l = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = b(t);
            if (n) {
                var a = b(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : S(e)
        });

        function c(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), A(S(t = l.call(this, e)), "imageLoadAnalyticsEnabled", !1), A(S(t), "state", {
                readyState: T.ImageReadyStates.LOADING,
                hasMouseOver: !1,
                hasFocus: !1
            }), A(S(t), "startLoadingTime", Date.now()), A(S(t), "_cancellers", new Set), A(S(t), "observeVisibility", function() {
                c.visibilityObserver.observe(S(t))
            }), A(S(t), "unobserveVisibility", function() {
                c.visibilityObserver.unobserve(S(t))
            }), A(S(t), "handleImageLoad", function(e, n) {
                t.setState({
                    readyState: e ? T.ImageReadyStates.ERROR : T.ImageReadyStates.READY
                }, function() {
                    var r;
                    return t.trackLoadingCompleted(e, n, null !== (r = t.props.trigger) && void 0 !== r ? r : "LOAD")
                })
            }), A(S(t), "preloadImage", function(e, n) {
                var r = e.width,
                    o = e.height,
                    i = t.props,
                    a = i.width,
                    u = i.height;
                (1 !== a || 1 !== u) && t.loadImage(t.getSrc((0, y.getRatio)({
                    width: a,
                    height: u,
                    maxWidth: r,
                    maxHeight: o
                })), function(e, r) {
                    t.trackLoadingCompleted(e, r, "PRELOAD"), null == n || n(e, r)
                })
            }), A(S(t), "onMouseEnter", function(e) {
                c.isAnimated(t.props) && t.setState({
                    hasMouseOver: !0
                });
                var n = t.props.onMouseEnter;
                null != n && n(e, {
                    preloadImage: t.preloadImage
                })
            }), A(S(t), "onFocus", function(e) {
                c.isAnimated(t.props) && t.setState({
                    hasFocus: !0
                })
            }), A(S(t), "onBlur", function(e) {
                var n = e.currentTarget,
                    r = e.relatedTarget;
                !n.contains(r) && t.setState({
                    hasFocus: !1
                })
            }), A(S(t), "onMouseLeave", function() {
                return t.setState({
                    hasMouseOver: !1
                })
            }), A(S(t), "onClick", function(e) {
                var n = t.props,
                    r = n.onZoom,
                    o = n.onClick;
                null != o ? o(e) : null != r && (e.preventDefault(), r(e, {
                    zoomThumbnailPlaceholder: t.getSrc(t.getRatio()),
                    trigger: "CLICK"
                }))
            }), A(S(t), "renderAccessory", function() {
                var e = t.state,
                    n = e.hasMouseOver,
                    r = e.hasFocus,
                    o = null != t.props.renderAccessory ? t.props.renderAccessory() : null;
                return t.props.shouldRenderAccessory ? n || r ? o : a.createElement(I.default, null) : null
            }), (0, f.isImageLoaded)(t.getSrc(t.getRatio(), c.isAnimated(t.props))) && (t.state.readyState = T.ImageReadyStates.READY), t.imageLoadAnalyticsEnabled = D.getCurrentConfig({
                location: "lazy_image"
            }).enabled, t
        }
        return r = c, o = [{
            key: "componentDidMount",
            value: function() {
                this.state.readyState === T.ImageReadyStates.LOADING && this.loadImage(this.getSrc(this.getRatio(), c.isAnimated(this.props)), this.handleImageLoad), c.isAnimated(this.props) && this.observeVisibility()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = c.isAnimated(this.props);
                c.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility())
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                c.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(function(e) {
                    return e()
                }), this._cancellers.clear()
            }
        }, {
            key: "getSrc",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = this.props,
                    r = n.src,
                    o = n.width,
                    i = n.height,
                    a = n.maxWidth,
                    u = n.maxHeight,
                    s = n.mediaLayoutType,
                    l = this.getFormatQuality(t),
                    c = l.format,
                    d = l.quality;
                return (0, f.getImageSrc)({
                    src: r,
                    width: o,
                    height: i,
                    ratio: e,
                    maxWidth: s === O.MediaLayoutType.MOSAIC ? a : void 0,
                    maxHeight: s === O.MediaLayoutType.MOSAIC ? u : void 0,
                    format: c,
                    quality: d
                })
            }
        }, {
            key: "getFormatQuality",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = null,
                    n = null;
                return m.SUPPORTS_WEBP && (e || !c.isAnimated(this.props)) ? (t = "webp", c.isSrcPNG(this.props) && (n = "lossless")) : e && (t = "png"), {
                    format: t,
                    quality: n
                }
            }
        }, {
            key: "getRatio",
            value: function() {
                var e = this.props,
                    t = e.width,
                    n = e.height,
                    r = e.maxWidth,
                    o = void 0 === r ? 400 : r,
                    i = e.maxHeight,
                    a = void 0 === i ? 300 : i,
                    u = e.mediaLayoutType,
                    s = e.useFullWidth;
                return u === O.MediaLayoutType.MOSAIC && s ? (0, y.getCoverRatio)({
                    width: t,
                    height: n,
                    maxWidth: o,
                    maxHeight: a
                }) : (0, y.getRatio)({
                    width: t,
                    height: n,
                    maxWidth: o,
                    maxHeight: a
                })
            }
        }, {
            key: "getType",
            value: function() {
                var e = this.props,
                    t = e.mediaLayoutType,
                    n = e.responsive;
                return null != t ? t : n ? O.MediaLayoutType.RESPONSIVE : O.MediaLayoutType.STATIC
            }
        }, {
            key: "loadImage",
            value: function(e, t) {
                var n = this,
                    r = this.props,
                    o = r.width,
                    i = r.height;
                if (this.startLoadingTime = Date.now(), 1 !== o || 1 !== i) {
                    var a = (0, f.loadImage)(e, function(e, r) {
                        null != a && n._cancellers.delete(a), null == t || t(e, r)
                    });
                    null != a && this._cancellers.add(a)
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.alt,
                    n = e.zoomThumbnailPlaceholder,
                    r = e.onZoom,
                    o = e.shouldLink,
                    i = e.onContextMenu,
                    s = e.autoPlay,
                    l = e.original,
                    f = e.className,
                    d = e.imageClassName,
                    _ = e.children,
                    E = e.animated,
                    p = e.shouldAnimate,
                    m = e.width,
                    y = e.height,
                    I = e.minWidth,
                    O = e.minHeight,
                    S = e.maxWidth,
                    v = e.maxHeight,
                    g = e.onClick,
                    A = e.renderAccessory,
                    b = e.tabIndex,
                    N = e.limitResponsiveWidth,
                    R = e.useFullWidth,
                    C = e.placeholder,
                    P = e.placeholderVersion,
                    D = this.state,
                    L = D.readyState,
                    M = D.hasMouseOver,
                    U = D.hasFocus,
                    w = null != r,
                    k = this.getRatio(),
                    G = (0, u.clamp)(Math.round(m * k), null != I ? I : 0, null != S ? S : 1 / 0),
                    B = (0, u.clamp)(Math.round(y * k), null != O ? O : 0, null != v ? v : 1 / 0),
                    j = {
                        alt: t,
                        readyState: L,
                        onContextMenu: null != i ? i : void 0,
                        zoomable: w,
                        className: f,
                        imageClassName: d,
                        minWidth: I,
                        minHeight: O,
                        mediaLayoutType: this.getType(),
                        limitResponsiveWidth: N,
                        useFullWidth: R,
                        tabIndex: b,
                        width: G,
                        height: B,
                        src: "",
                        placeholder: C,
                        placeholderVersion: P,
                        children: null != _ ? function(e) {
                            return _({
                                src: e.src,
                                size: e.size,
                                alt: e.alt,
                                mediaLayoutType: e.mediaLayoutType
                            })
                        } : void 0,
                        onMouseEnter: this.onMouseEnter,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur
                    };
                if (1 === j.width && 1 === j.height) return null;
                switch ((w || null != g) && (j.onClick = this.onClick), o && (j.original = null != l && "" !== l ? l : j.src), L) {
                    case T.ImageReadyStates.LOADING:
                        null != n && (j.src = n);
                        break;
                    case T.ImageReadyStates.READY:
                        if (c.isAnimated(this.props)) {
                            j.onMouseLeave = this.onMouseLeave;
                            var F = (s || M || U) && (null == p || p) && c.visibilityObserver.isVisible(this);
                            F ? (j.src = this.getSrc(k), j.renderAccessory = A) : (j.src = this.getSrc(k, !E || !s), j.renderAccessory = this.renderAccessory), null != _ && (j.children = function(e) {
                                return _({
                                    src: e.src,
                                    size: e.size,
                                    animating: F,
                                    alt: e.alt,
                                    mediaLayoutType: e.mediaLayoutType
                                })
                            })
                        } else j.src = this.getSrc(k)
                }
                return a.createElement(h.default, j)
            }
        }, {
            key: "trackLoadingCompleted",
            value: function(e, t, n) {
                var r, o = this;
                return (r = function() {
                    var r, i, a, u, l, c, f, m;
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
                    }(this, function(y) {
                        switch (y.label) {
                            case 0:
                                if (e && d.default.increment({
                                        name: s.MetricEvents.IMAGE_LOAD_ERROR
                                    }), !o.imageLoadAnalyticsEnabled) return [2];
                                return [4, fetch(t.url).catch(function() {})];
                            case 1:
                                return u = null != (a = null == (i = y.sent()) ? void 0 : null === (r = i.headers) || void 0 === r ? void 0 : r.get("content-length")) ? Number(a) : null, l = Date.now() - o.startLoadingTime, f = (c = o.getFormatQuality()).format, m = c.quality, p.default.track(T.AnalyticEvents.IMAGE_LOADING_COMPLETED, {
                                    duration_ms: l,
                                    requested_height: t.height,
                                    requested_width: t.width,
                                    height: o.props.height,
                                    width: o.props.width,
                                    original_url: o.props.original,
                                    url: o.props.src,
                                    requested_url: t.url,
                                    format: f,
                                    quality: m,
                                    state: e ? T.ImageReadyStates.ERROR : o.state.readyState,
                                    data_saving_mode: _.default.dataSavingMode,
                                    low_quality_image_mode: _.default.lowQualityImageMode,
                                    trigger: n,
                                    size: u,
                                    connection_type: E.default.getType(),
                                    effective_connection_speed: E.default.getEffectiveConnectionSpeed(),
                                    service_provider: E.default.getServiceProvider()
                                }), [2]
                        }
                    })
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(n, o) {
                        var i = r.apply(e, t);

                        function a(e) {
                            v(i, n, o, a, u, "next", e)
                        }

                        function u(e) {
                            v(i, n, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                })()
            }
        }], i = [{
            key: "isAnimated",
            value: function(e) {
                var t = e.src,
                    n = e.original;
                return e.animated || R.test(null != n && "" !== n ? n : t)
            }
        }, {
            key: "isSrcPNG",
            value: function(e) {
                var t = e.src;
                return C.test(t)
            }
        }], o && g(r.prototype, o), i && g(r, i), c
    }(a.Component);
    A(P, "visibilityObserver", new l.VisibilityObserver({
        threshold: .7
    })), A(P, "defaultProps", {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0
    });
    var D = (0, c.createExperiment)({
        kind: "user",
        id: "2024-02_image_load_metrics",
        label: "Image load metrics Config User Experiment",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Do not send metrics for image load",
            config: {
                enabled: !1
            }
        }, {
            id: 2,
            label: "Send metrics for image load",
            config: {
                enabled: !0
            }
        }]
    })
}