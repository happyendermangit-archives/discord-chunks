function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        IMAGE_GIF_RE: function() {
            return I
        },
        default: function() {
            return a
        }
    }), n("222007");
    var i, l, a, s, r = n("37983"),
        o = n("884691"),
        u = n("917351"),
        d = n("432710"),
        c = n("290381"),
        f = n("862205"),
        p = n("407063"),
        m = n("155084"),
        h = n("168973"),
        x = n("985365"),
        E = n("599110"),
        y = n("315102"),
        g = n("103603"),
        S = n("275623"),
        C = n("594098"),
        _ = n("719347"),
        T = n("49111");
    let I = /\.gif($|\?|#)/i,
        v = /\.png($|\?|#)/i;
    (s = l || (l = {})).LOAD = "LOAD", s.PRELOAD = "PRELOAD", s.CLICK = "CLICK", (i = class e extends o.Component {
        static isAnimated(e) {
            let {
                src: t,
                original: n,
                animated: i
            } = e;
            return i || I.test(null != n && "" !== n ? n : t)
        }
        static isSrcPNG(e) {
            let {
                src: t
            } = e;
            return v.test(t)
        }
        componentDidMount() {
            let {
                readyState: t
            } = this.state;
            t === T.ImageReadyStates.LOADING && this.loadImage(this.getSrc(this.getRatio(), e.isAnimated(this.props)), this.handleImageLoad), e.isAnimated(this.props) && this.observeVisibility()
        }
        componentDidUpdate(t) {
            let n = e.isAnimated(this.props),
                i = e.isAnimated(t);
            i !== n && (n ? this.observeVisibility() : this.unobserveVisibility())
        }
        componentWillUnmount() {
            e.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
        }
        getSrc(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                {
                    src: n,
                    width: i,
                    height: l,
                    maxWidth: a,
                    maxHeight: s,
                    mediaLayoutType: r
                } = this.props,
                {
                    format: o,
                    quality: u
                } = this.getFormatQuality(t);
            return (0, p.getImageSrc)({
                src: n,
                width: i,
                height: l,
                ratio: e,
                maxWidth: r === _.MediaLayoutType.MOSAIC ? a : void 0,
                maxHeight: r === _.MediaLayoutType.MOSAIC ? s : void 0,
                format: o,
                quality: u
            })
        }
        getFormatQuality() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = null,
                i = null;
            return y.SUPPORTS_WEBP && (t || !e.isAnimated(this.props)) ? (n = "webp", e.isSrcPNG(this.props) && (i = "lossless")) : t && (n = "png"), {
                format: n,
                quality: i
            }
        }
        getRatio() {
            let {
                width: e,
                height: t,
                maxWidth: n = 400,
                maxHeight: i = 300,
                mediaLayoutType: l,
                useFullWidth: a
            } = this.props;
            return l === _.MediaLayoutType.MOSAIC && a ? (0, g.getCoverRatio)({
                width: e,
                height: t,
                maxWidth: n,
                maxHeight: i
            }) : (0, g.getRatio)({
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
            return null != e ? e : t ? _.MediaLayoutType.RESPONSIVE : _.MediaLayoutType.STATIC
        }
        loadImage(e, t) {
            let {
                width: n,
                height: i
            } = this.props;
            if (this.startLoadingTime = Date.now(), 1 === n && 1 === i) return;
            let l = (0, p.loadImage)(e, (e, n) => {
                null != l && this._cancellers.delete(l), null == t || t(e, n)
            });
            null != l && this._cancellers.add(l)
        }
        render() {
            let {
                alt: t,
                zoomThumbnailPlaceholder: n,
                onZoom: i,
                shouldLink: l,
                onContextMenu: a,
                autoPlay: s,
                original: o,
                className: d,
                imageClassName: c,
                children: f,
                animated: p,
                shouldAnimate: m,
                width: h,
                height: x,
                minWidth: E,
                minHeight: y,
                maxWidth: g,
                maxHeight: S,
                onClick: _,
                renderAccessory: I,
                tabIndex: v,
                limitResponsiveWidth: N,
                useFullWidth: A,
                placeholder: O,
                placeholderVersion: R
            } = this.props, {
                readyState: M,
                hasMouseOver: k,
                hasFocus: L
            } = this.state, P = null != i, b = this.getRatio(), j = (0, u.clamp)(Math.round(h * b), null != E ? E : 0, null != g ? g : 1 / 0), U = (0, u.clamp)(Math.round(x * b), null != y ? y : 0, null != S ? S : 1 / 0), D = {
                alt: t,
                readyState: M,
                onContextMenu: null != a ? a : void 0,
                zoomable: P,
                className: d,
                imageClassName: c,
                minWidth: E,
                minHeight: y,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: N,
                useFullWidth: A,
                tabIndex: v,
                width: j,
                height: U,
                src: "",
                placeholder: O,
                placeholderVersion: R,
                children: null != f ? e => {
                    let {
                        src: t,
                        size: n,
                        alt: i,
                        mediaLayoutType: l
                    } = e;
                    return f({
                        src: t,
                        size: n,
                        alt: i,
                        mediaLayoutType: l
                    })
                } : void 0,
                onMouseEnter: this.onMouseEnter,
                onFocus: this.onFocus,
                onBlur: this.onBlur
            };
            if (1 === D.width && 1 === D.height) return null;
            switch ((P || null != _) && (D.onClick = this.onClick), l && (D.original = null != o && "" !== o ? o : D.src), M) {
                case T.ImageReadyStates.LOADING:
                    null != n && (D.src = n);
                    break;
                case T.ImageReadyStates.READY:
                    if (e.isAnimated(this.props)) {
                        D.onMouseLeave = this.onMouseLeave;
                        let t = (s || k || L) && (null == m || m) && e.visibilityObserver.isVisible(this);
                        t ? (D.src = this.getSrc(b), D.renderAccessory = I) : (D.src = this.getSrc(b, !p || !s), D.renderAccessory = this.renderAccessory), null != f && (D.children = e => {
                            let {
                                src: n,
                                size: i,
                                alt: l,
                                mediaLayoutType: a
                            } = e;
                            return f({
                                src: n,
                                size: i,
                                animating: t,
                                alt: l,
                                mediaLayoutType: a
                            })
                        })
                    } else D.src = this.getSrc(b)
            }
            return (0, r.jsx)(C.default, {
                ...D
            })
        }
        async trackLoadingCompleted(e, t, n) {
            var i;
            if (e && m.default.increment({
                    name: d.MetricEvents.IMAGE_LOAD_ERROR
                }), !this.imageLoadAnalyticsEnabled) return;
            let l = await fetch(t.url).catch(() => void 0),
                a = null == l ? void 0 : null === (i = l.headers) || void 0 === i ? void 0 : i.get("content-length"),
                s = null != a ? Number(a) : null,
                r = Date.now() - this.startLoadingTime,
                {
                    format: o,
                    quality: u
                } = this.getFormatQuality();
            E.default.track(T.AnalyticEvents.IMAGE_LOADING_COMPLETED, {
                duration_ms: r,
                requested_height: t.height,
                requested_width: t.width,
                height: this.props.height,
                width: this.props.width,
                original_url: this.props.original,
                url: this.props.src,
                requested_url: t.url,
                format: o,
                quality: u,
                state: e ? T.ImageReadyStates.ERROR : this.state.readyState,
                data_saving_mode: h.default.dataSavingMode,
                low_quality_image_mode: h.default.lowQualityImageMode,
                trigger: n,
                size: s,
                connection_type: x.default.getType(),
                effective_connection_speed: x.default.getEffectiveConnectionSpeed(),
                service_provider: x.default.getServiceProvider()
            })
        }
        constructor(t) {
            super(t), this.imageLoadAnalyticsEnabled = !1, this.state = {
                readyState: T.ImageReadyStates.LOADING,
                hasMouseOver: !1,
                hasFocus: !1
            }, this.startLoadingTime = Date.now(), this._cancellers = new Set, this.observeVisibility = () => {
                e.visibilityObserver.observe(this)
            }, this.unobserveVisibility = () => {
                e.visibilityObserver.unobserve(this)
            }, this.handleImageLoad = (e, t) => {
                this.setState({
                    readyState: e ? T.ImageReadyStates.ERROR : T.ImageReadyStates.READY
                }, () => {
                    var n;
                    return this.trackLoadingCompleted(e, t, null !== (n = this.props.trigger) && void 0 !== n ? n : "LOAD")
                })
            }, this.preloadImage = (e, t) => {
                let {
                    width: n,
                    height: i
                } = e, {
                    width: l,
                    height: a
                } = this.props;
                (1 !== l || 1 !== a) && this.loadImage(this.getSrc((0, g.getRatio)({
                    width: l,
                    height: a,
                    maxWidth: n,
                    maxHeight: i
                })), (e, n) => {
                    this.trackLoadingCompleted(e, n, "PRELOAD"), null == t || t(e, n)
                })
            }, this.onMouseEnter = t => {
                e.isAnimated(this.props) && this.setState({
                    hasMouseOver: !0
                });
                let {
                    onMouseEnter: n
                } = this.props;
                null != n && n(t, {
                    preloadImage: this.preloadImage
                })
            }, this.onFocus = t => {
                e.isAnimated(this.props) && this.setState({
                    hasFocus: !0
                })
            }, this.onBlur = e => {
                let {
                    currentTarget: t,
                    relatedTarget: n
                } = e;
                !t.contains(n) && this.setState({
                    hasFocus: !1
                })
            }, this.onMouseLeave = () => this.setState({
                hasMouseOver: !1
            }), this.onClick = e => {
                let {
                    onZoom: t,
                    onClick: n
                } = this.props;
                null != n ? n(e) : null != t && (e.preventDefault(), t(e, {
                    zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                    trigger: "CLICK"
                }))
            }, this.renderAccessory = () => {
                let {
                    hasMouseOver: e,
                    hasFocus: t
                } = this.state, n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
                return this.props.shouldRenderAccessory ? e || t ? n : (0, r.jsx)(S.default, {}) : null
            }, (0, p.isImageLoaded)(this.getSrc(this.getRatio(), e.isAnimated(this.props))) && (this.state.readyState = T.ImageReadyStates.READY), this.imageLoadAnalyticsEnabled = N.getCurrentConfig({
                location: "lazy_image"
            }).enabled
        }
    }).visibilityObserver = new c.VisibilityObserver({
        threshold: .7
    }), i.defaultProps = {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0
    }, a = i;
    let N = (0, f.createExperiment)({
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