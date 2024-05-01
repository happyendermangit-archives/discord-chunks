function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("47120"), n("411104"), n("733860"), n("653041");
    var i, r = n("735250"),
        a = n("470079"),
        s = n("120356"),
        o = n.n(s),
        l = n("699581"),
        u = n.n(l),
        d = n("374470"),
        _ = n("442837"),
        c = n("134432"),
        E = n("695346"),
        I = n("237997"),
        T = n("278297"),
        f = n("768581"),
        S = n("176354"),
        h = n("506071"),
        A = n("149203");

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class N extends(i = a.PureComponent) {
        componentWillUnmount() {
            var e;
            null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
        }
        getSrc() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                {
                    src: t,
                    emojiId: n,
                    emojiName: i,
                    animated: r,
                    shouldAnimate: a,
                    isFocused: s,
                    isInteracting: o,
                    size: l = "default"
                } = e,
                {
                    hover: u
                } = this.state;
            if (null != t) return t;
            if (null != n) {
                let e = A.EMOJI_SIZE_MAP[l];
                return f.default.getEmojiURL({
                    id: n,
                    animated: s && !0 === r && (!0 === a || u || !0 === o),
                    size: e
                })
            }
            if (null != i) return S.default.getURL(i)
        }
        render() {
            var e;
            let t;
            let {
                emojiName: n,
                animated: i,
                className: s,
                size: l = "default",
                alt: u,
                shouldAnimate: d,
                isFocused: _,
                emojiId: c,
                autoplay: E,
                isInteracting: I,
                ...T
            } = this.props, f = this.getSrc();
            return null == f || "" === f ? (0, r.jsx)("span", {
                className: o()("emoji", "emoji-text"),
                children: n
            }) : (i && (t = {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }), (0, a.createElement)("img", {
                ...T,
                key: this.key,
                src: f,
                alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                draggable: !1,
                ...t,
                className: o()("emoji", s, {
                    jumboable: "jumbo" === l
                }),
                onError: this.onError,
                "data-type": "emoji",
                ...null != c && "" !== c ? {
                    "data-id": c
                } : {
                    "data-name": n
                }
            }))
        }
        constructor(...e) {
            super(...e), m(this, "state", {
                hover: !1
            }), m(this, "key", void 0), m(this, "cancelLoadImage", void 0), m(this, "onError", () => {
                let e = this.getSrc();
                null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                    !e && (this.key = Date.now(), this.forceUpdate())
                }))
            }), m(this, "onMouseEnter", e => {
                this.setState({
                    hover: !0
                });
                let {
                    onMouseEnter: t
                } = this.props;
                null != t && t(e)
            }), m(this, "onMouseLeave", e => {
                this.setState({
                    hover: !1
                });
                let {
                    onMouseLeave: t
                } = this.props;
                null != t && t(e)
            })
        }
    }
    m(N, "defaultProps", {
        isInteracting: !1
    });
    let p = function(e) {
        if (null == window.IntersectionObserver) return function(t) {
            return (0, r.jsx)(e, {
                ...t,
                shouldAnimate: t.animated
            })
        };
        let t = [],
            n = [],
            i = new window.IntersectionObserver(e => {
                e.forEach(e => {
                    let i = n.find(t => {
                        let [n] = t;
                        return n === e.target
                    });
                    if (null == i) return;
                    let r = i[1];
                    if (e.intersectionRatio >= .7) {
                        var a, s;
                        if (-1 !== t.indexOf(r)) return;
                        let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.top));
                        n ? t.unshift(r) : t.push(r), r.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                    } else {
                        let e = t.indexOf(r); - 1 !== e && (t.splice(e, 1), r.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                    }
                })
            }, {
                threshold: .7
            });

        function s(e) {
            let t = u().findDOMNode(e);
            (0, d.isElement)(t) && (n.push([t, e]), i.observe(t))
        }

        function o(e) {
            let r = u().findDOMNode(e);
            i.unobserve(r);
            let a = n.findIndex(t => {
                let [n, i] = t;
                return i === e
            }); - 1 !== a && (n.splice(a, 1), -1 !== (a = t.indexOf(e)) && (t.splice(a, 1), a < 100 && t.length >= 100 && t[99].forceUpdate()))
        }
        return class extends a.Component {
            shouldAutoplay(e) {
                return e.animated && e.autoplay
            }
            componentDidMount() {
                this.shouldAutoplay(this.props) && s(this)
            }
            componentDidUpdate(e) {
                let t = this.shouldAutoplay(e),
                    n = this.shouldAutoplay(this.props);
                n !== t && (n ? s(this) : o(this))
            }
            componentWillUnmount() {
                this.shouldAutoplay(this.props) && o(this)
            }
            render() {
                let n = t.indexOf(this),
                    {
                        autoplay: i,
                        allowAnimatedEmoji: a,
                        ...s
                    } = this.props;
                return (0, r.jsx)(T.MessagesInteractionContext.Consumer, {
                    children: t => (0, r.jsx)(e, {
                        ...s,
                        autoplay: i || !1,
                        shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                    })
                })
            }
        }
    }(N);

    function O(e) {
        let t = E.AnimateEmoji.useSetting(),
            n = {
                autoplay: null == e.autoplay ? t : e.autoplay,
                allowAnimatedEmoji: t
            },
            i = __OVERLAY__ ? (0, _.useStateFromStores)([I.default], () => I.default.isInstanceFocused()) : (0, h.useIsWindowFocused)();
        return (0, r.jsx)(p, {
            ...e,
            ...n,
            isFocused: i
        })
    }
}