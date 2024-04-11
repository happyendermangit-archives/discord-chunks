function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IMAGE_GIF_RE: function() {
            return R
        },
        default: function() {
            return g
        }
    }), n("47120");
    var i, r, s, a = n("735250"),
        o = n("470079"),
        l = n("392711"),
        u = n("286379"),
        d = n("622535"),
        _ = n("818083"),
        c = n("134432"),
        E = n("797614"),
        I = n("740492"),
        T = n("866960"),
        f = n("626135"),
        S = n("768581"),
        A = n("956664"),
        h = n("311715"),
        m = n("332475"),
        N = n("768760"),
        O = n("981631");

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let R = /\.gif($|\?|#)/i,
        C = /\.png($|\?|#)/i;
    (s = i || (i = {})).LOAD = "LOAD", s.PRELOAD = "PRELOAD", s.CLICK = "CLICK";
    class g extends(r = o.Component) {
        static isAnimated(e) {
            let {
                src: t,
                original: n,
                animated: i
            } = e;
            return i || R.test(null != n && "" !== n ? n : t)
        }
        static isSrcPNG(e) {
            let {
                src: t
            } = e;
            return C.test(t)
        }
        componentDidMount() {
            let {
                readyState: e
            } = this.state;
            e === O.ImageReadyStates.LOADING && this.loadImage(this.getSrc(this.getRatio(), g.isAnimated(this.props)), this.handleImageLoad), g.isAnimated(this.props) && this.observeVisibility()
        }
        componentDidUpdate(e) {
            let t = g.isAnimated(this.props);
            g.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility())
        }
        componentWillUnmount() {
            g.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
        }
        getSrc(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                {
                    src: n,
                    width: i,
                    height: r,
                    maxWidth: s,
                    maxHeight: a,
                    mediaLayoutType: o
                } = this.props,
                {
                    format: l,
                    quality: u
                } = this.getFormatQuality(t);
            return (0, c.getImageSrc)({
                src: n,
                width: i,
                height: r,
                ratio: e,
                maxWidth: o === N.MediaLayoutType.MOSAIC ? s : void 0,
                maxHeight: o === N.MediaLayoutType.MOSAIC ? a : void 0,
                format: l,
                quality: u
            })
        }
        getFormatQuality() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = null,
                n = null;
            return S.SUPPORTS_WEBP && (e || !g.isAnimated(this.props)) ? (t = "webp", g.isSrcPNG(this.props) && (n = "lossless")) : e && (t = "png"), {
                format: t,
                quality: n
            }
        }
        getRatio() {
            let {
                width: e,
                height: t,
                maxWidth: n = 400,
                maxHeight: i = 300,
                mediaLayoutType: r,
                useFullWidth: s
            } = this.props;
            return r === N.MediaLayoutType.MOSAIC && s ? (0, A.getCoverRatio)({
                width: e,
                height: t,
                maxWidth: n,
                maxHeight: i
            }) : (0, A.getRatio)({
                width: e,
                height: t,
                maxWidth: n,
                maxHeight: i
            })
        }
        getType() {
            let {
                mediaLayoutType: e,
                responsive: t
            } = this.props;
            return null != e ? e : t ? N.MediaLayoutType.RESPONSIVE : N.MediaLayoutType.STATIC
        }
        loadImage(e, t) {
            let {
                width: n,
                height: i
            } = this.props;
            if (this.startLoadingTime = Date.now(), 1 === n && 1 === i) return;
            let r = (0, c.loadImage)(e, (e, n) => {
                null != r && this._cancellers.delete(r), null == t || t(e, n)
            });
            null != r && this._cancellers.add(r)
        }
        render() {
            let {
                alt: e,
                zoomThumbnailPlaceholder: t,
                onZoom: n,
                shouldLink: i,
                onContextMenu: r,
                autoPlay: s,
                original: o,
                className: u,
                imageClassName: d,
                children: _,
                animated: c,
                shouldAnimate: E,
                width: I,
                height: T,
                minWidth: f,
                minHeight: S,
                maxWidth: A,
                maxHeight: h,
                onClick: N,
                renderAccessory: p,
                tabIndex: R,
                limitResponsiveWidth: C,
                useFullWidth: L,
                placeholder: D,
                placeholderVersion: v
            } = this.props, {
                readyState: M,
                hasMouseOver: y,
                hasFocus: P
            } = this.state, U = null != n, b = this.getRatio(), G = (0, l.clamp)(Math.round(I * b), null != f ? f : 0, null != A ? A : 1 / 0), w = (0, l.clamp)(Math.round(T * b), null != S ? S : 0, null != h ? h : 1 / 0), k = {
                alt: e,
                readyState: M,
                onContextMenu: null != r ? r : void 0,
                zoomable: U,
                className: u,
                imageClassName: d,
                minWidth: f,
                minHeight: S,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: C,
                useFullWidth: L,
                tabIndex: R,
                width: G,
                height: w,
                src: "",
                placeholder: D,
                placeholderVersion: v,
                children: null != _ ? e => {
                    let {
                        src: t,
                        size: n,
                        alt: i,
                        mediaLayoutType: r
                    } = e;
                    return _({
                        src: t,
                        size: n,
                        alt: i,
                        mediaLayoutType: r
                    })
                } : void 0,
                onMouseEnter: this.onMouseEnter,
                onFocus: this.onFocus,
                onBlur: this.onBlur
            };
            if (1 === k.width && 1 === k.height) return null;
            switch ((U || null != N) && (k.onClick = this.onClick), i && (k.original = null != o && "" !== o ? o : k.src), M) {
                case O.ImageReadyStates.LOADING:
                    null != t && (k.src = t);
                    break;
                case O.ImageReadyStates.READY:
                    if (g.isAnimated(this.props)) {
                        k.onMouseLeave = this.onMouseLeave;
                        let e = (s || y || P) && (null == E || E) && g.visibilityObserver.isVisible(this);
                        e ? (k.src = this.getSrc(b), k.renderAccessory = p) : (k.src = this.getSrc(b, !c || !s), k.renderAccessory = this.renderAccessory), null != _ && (k.children = t => {
                            let {
                                src: n,
                                size: i,
                                alt: r,
                                mediaLayoutType: s
                            } = t;
                            return _({
                                src: n,
                                size: i,
                                animating: e,
                                alt: r,
                                mediaLayoutType: s
                            })
                        })
                    } else k.src = this.getSrc(b)
            }
            return (0, a.jsx)(m.default, {
                ...k
            })
        }
        async trackLoadingCompleted(e, t, n) {
            var i;
            if (e && E.default.increment({
                    name: u.MetricEvents.IMAGE_LOAD_ERROR
                }), !this.imageLoadAnalyticsEnabled) return;
            let r = await fetch(t.url).catch(() => void 0),
                s = null == r ? void 0 : null === (i = r.headers) || void 0 === i ? void 0 : i.get("content-length"),
                a = null != s ? Number(s) : null,
                o = Date.now() - this.startLoadingTime,
                {
                    format: l,
                    quality: d
                } = this.getFormatQuality();
            f.default.track(O.AnalyticEvents.IMAGE_LOADING_COMPLETED, {
                duration_ms: o,
                requested_height: t.height,
                requested_width: t.width,
                height: this.props.height,
                width: this.props.width,
                original_url: this.props.original,
                url: this.props.src,
                requested_url: t.url,
                format: l,
                quality: d,
                state: e ? O.ImageReadyStates.ERROR : this.state.readyState,
                data_saving_mode: I.default.dataSavingMode,
                low_quality_image_mode: I.default.lowQualityImageMode,
                trigger: n,
                size: a,
                connection_type: T.default.getType(),
                effective_connection_speed: T.default.getEffectiveConnectionSpeed(),
                service_provider: T.default.getServiceProvider()
            })
        }
        constructor(e) {
            super(e), p(this, "imageLoadAnalyticsEnabled", !1), p(this, "state", {
                readyState: O.ImageReadyStates.LOADING,
                hasMouseOver: !1,
                hasFocus: !1
            }), p(this, "startLoadingTime", Date.now()), p(this, "_cancellers", new Set), p(this, "observeVisibility", () => {
                g.visibilityObserver.observe(this)
            }), p(this, "unobserveVisibility", () => {
                g.visibilityObserver.unobserve(this)
            }), p(this, "handleImageLoad", (e, t) => {
                this.setState({
                    readyState: e ? O.ImageReadyStates.ERROR : O.ImageReadyStates.READY
                }, () => {
                    var n;
                    return this.trackLoadingCompleted(e, t, null !== (n = this.props.trigger) && void 0 !== n ? n : "LOAD")
                })
            }), p(this, "preloadImage", (e, t) => {
                let {
                    width: n,
                    height: i
                } = e, {
                    width: r,
                    height: s
                } = this.props;
                (1 !== r || 1 !== s) && this.loadImage(this.getSrc((0, A.getRatio)({
                    width: r,
                    height: s,
                    maxWidth: n,
                    maxHeight: i
                })), (e, n) => {
                    this.trackLoadingCompleted(e, n, "PRELOAD"), null == t || t(e, n)
                })
            }), p(this, "onMouseEnter", e => {
                g.isAnimated(this.props) && this.setState({
                    hasMouseOver: !0
                });
                let {
                    onMouseEnter: t
                } = this.props;
                null != t && t(e, {
                    preloadImage: this.preloadImage
                })
            }), p(this, "onFocus", e => {
                g.isAnimated(this.props) && this.setState({
                    hasFocus: !0
                })
            }), p(this, "onBlur", e => {
                let {
                    currentTarget: t,
                    relatedTarget: n
                } = e;
                !t.contains(n) && this.setState({
                    hasFocus: !1
                })
            }), p(this, "onMouseLeave", () => this.setState({
                hasMouseOver: !1
            })), p(this, "onClick", e => {
                let {
                    onZoom: t,
                    onClick: n
                } = this.props;
                null != n ? n(e) : null != t && (e.preventDefault(), t(e, {
                    zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                    trigger: "CLICK"
                }))
            }), p(this, "renderAccessory", () => {
                let {
                    hasMouseOver: e,
                    hasFocus: t
                } = this.state, n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
                return this.props.shouldRenderAccessory ? e || t ? n : (0, a.jsx)(h.default, {}) : null
            }), (0, c.isImageLoaded)(this.getSrc(this.getRatio(), g.isAnimated(this.props))) && (this.state.readyState = O.ImageReadyStates.READY), this.imageLoadAnalyticsEnabled = L.getCurrentConfig({
                location: "lazy_image"
            }).enabled
        }
    }
    p(g, "visibilityObserver", new d.VisibilityObserver({
        threshold: .7
    })), p(g, "defaultProps", {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0
    });
    let L = (0, _.createExperiment)({
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