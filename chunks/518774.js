function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PictureInPictureWindow: function() {
            return T
        }
    }), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("699581"),
        u = n("358085"),
        d = n("144036"),
        _ = n("981631"),
        c = n("731718");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = {
        top: 80,
        bottom: 132,
        left: 80
    };
    class T extends(i = s.PureComponent) {
        componentDidMount() {
            this.setPosition(this.props.position)
        }
        componentDidUpdate(e) {
            (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && this.ensureIsInPosition()
        }
        componentWillUnmount() {
            var e;
            null === (e = this._resizeObserver) || void 0 === e || e.disconnect()
        }
        getPosition(e) {
            let t = (0, l.findDOMNode)(this._innerDiv);
            if (null != t) {
                let e = t.getBoundingClientRect();
                this._width = e.width, this._height = e.height
            }
            let {
                edgeOffsetTop: n,
                edgeOffsetLeft: i,
                edgeOffsetBottom: r,
                edgeOffsetRight: s,
                maxX: a,
                maxY: o,
                dockedRect: d
            } = this.props, c = Math.round(n), E = Math.round(o - r - this._height), I = Math.round(i), T = Math.round(a - s - this._width), f = (0, u.getPlatform)() !== u.PlatformTypes.WEB && this.inPopout ? 22 : 0;
            if (null != d) {
                var S, h;
                return {
                    y: (null !== (S = null == d ? void 0 : d.y) && void 0 !== S ? S : 0) - f,
                    x: null !== (h = null == d ? void 0 : d.x) && void 0 !== h ? h : 0
                }
            }
            switch (e) {
                case _.PictureInPicturePositions.TOP_LEFT:
                    return {
                        y: c, x: I
                    };
                case _.PictureInPicturePositions.BOTTOM_LEFT:
                    return {
                        y: E, x: I
                    };
                case _.PictureInPicturePositions.TOP_RIGHT:
                    return {
                        y: c, x: T
                    };
                default:
                    return {
                        y: E, x: T
                    }
            }
        }
        setPosition(e) {
            var t;
            let {
                x: n,
                y: i
            } = this.getPosition(e);
            null === (t = this._draggable) || void 0 === t || t.setPosition(n, i)
        }
        animateToPosition(e, t) {
            var n;
            let {
                x: i,
                y: r
            } = this.getPosition(e);
            null === (n = this._draggable) || void 0 === n || n.animateToPosition(i, r, {}, t)
        }
        calculateDecayingPosition(e, t, n, i) {
            return {
                x: e + 200 * n,
                y: t + 200 * i
            }
        }
        getXOffset() {
            let {
                position: e,
                edgeOffsetLeft: t,
                edgeOffsetRight: n
            } = this.props;
            switch (e) {
                case _.PictureInPicturePositions.TOP_LEFT:
                case _.PictureInPicturePositions.BOTTOM_LEFT:
                    return -t;
                default:
                    return n
            }
        }
        getYOffset() {
            let {
                position: e,
                edgeOffsetTop: t,
                edgeOffsetBottom: n
            } = this.props;
            switch (e) {
                case _.PictureInPicturePositions.TOP_LEFT:
                case _.PictureInPicturePositions.TOP_RIGHT:
                    return -t;
                default:
                    return n
            }
        }
        get inPopout() {
            return this.props.appContext === _.AppContext.POPOUT
        }
        render() {
            let {
                maxX: e,
                maxY: t,
                dockedRect: n,
                hidden: i,
                roundCorners: s,
                className: a
            } = this.props, l = {};
            return null != n && (l = {
                transform: "translate3d(".concat(n.x, ", ").concat(n.y, ", 0)"),
                width: n.width,
                height: n.height
            }), (0, r.jsx)(d.default, {
                dragAnywhere: !0,
                ref: this.handleSetDraggableRef,
                className: o()(c.pictureInPictureWindow, a, {
                    [c.hidden]: i,
                    [c.borderRadius]: s
                }),
                maxX: e,
                maxY: t,
                disabled: null != n,
                onDragStart: this.handleDragStart,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                children: (0, r.jsx)("div", {
                    ref: this.handleSetInnerDivRef,
                    style: l,
                    children: this.props.children
                })
            })
        }
        constructor(...e) {
            super(...e), E(this, "_draggable", void 0), E(this, "_innerDiv", void 0), E(this, "_resizeObserver", void 0), E(this, "_width", 0), E(this, "_height", 0), E(this, "_velocityX", 0), E(this, "_velocityY", 0), E(this, "_lastMoveTime", void 0), E(this, "_lastMoveX", 0), E(this, "_lastMoveY", 0), E(this, "ensureIsInPosition", () => {
                this.setPosition(this.props.position)
            }), E(this, "handleSetInnerDivRef", e => {
                this._innerDiv = e;
                let t = null == e ? void 0 : e.ownerDocument.defaultView;
                if (null != e && null != t) {
                    var n;
                    this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition), null === (n = this._resizeObserver) || void 0 === n || n.observe(e)
                }
            }), E(this, "handleSetDraggableRef", e => {
                this._draggable = e
            }), E(this, "handleDragStart", (e, t) => {
                this._velocityX = 0, this._velocityY = 0, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = new Date
            }), E(this, "handleDrag", (e, t) => {
                let n = new Date,
                    i = Number(n) - Number(this._lastMoveTime);
                this._velocityX = (e - this._lastMoveX) / i, this._velocityY = (t - this._lastMoveY) / i, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = n
            }), E(this, "handleDragEnd", (e, t) => {
                let n;
                let {
                    maxX: i,
                    maxY: r
                } = this.props, s = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY), a = !0, o = !0;
                if (s.x > i / 2 && (o = !1), s.y > r / 2 && (a = !1), n = a && o ? _.PictureInPicturePositions.TOP_LEFT : a && !o ? _.PictureInPicturePositions.TOP_RIGHT : !a && o ? _.PictureInPicturePositions.BOTTOM_LEFT : _.PictureInPicturePositions.BOTTOM_RIGHT, this.animateToPosition(n, this.ensureIsInPosition), n !== this.props.position) {
                    let {
                        id: e,
                        onMove: t
                    } = this.props;
                    null == t || t(e, n)
                }
            })
        }
    }
    E(T, "defaultProps", {
        hidden: !1,
        roundCorners: !0
    });
    t.default = s.memo(e => {
        let {
            selectedPIPWindow: t,
            pipWindows: n,
            maxX: i,
            maxY: s,
            onWindowMove: a,
            dockedRect: o,
            pictureInPictureComponents: l,
            appContext: u,
            roundCorners: d
        } = e;
        return (0, r.jsx)("div", {
            className: c.pictureInPicture,
            children: (() => {
                if (null == t) return null;
                let e = n.map(e => {
                    if (e.id !== t.id && e.component !== _.PictureInPictureComponents.EMBED_IFRAME) return null;
                    let n = "string" == typeof e.component ? l[e.component] : e.component;
                    return (0, r.jsx)(n, {
                        ...e.props
                    }, "pipWindow-".concat(e.id))
                });
                return (0, r.jsx)(T, {
                    appContext: u,
                    position: t.position,
                    id: t.id,
                    hidden: t.hidden,
                    onMove: a,
                    maxX: i,
                    maxY: s,
                    dockedRect: o,
                    edgeOffsetTop: I.top,
                    edgeOffsetBottom: I.bottom,
                    edgeOffsetLeft: I.left,
                    edgeOffsetRight: I.top,
                    roundCorners: d,
                    children: e
                })
            })()
        })
    })
}