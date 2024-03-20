function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007"), n("70102"), n("843762"), n("424973");
    var i = n("37983"),
        a = n("884691"),
        s = n("414456"),
        r = n.n(s),
        l = n("817736"),
        o = n.n(l),
        u = n("118810"),
        c = n("446674"),
        d = n("407063"),
        f = n("845579"),
        p = n("901165"),
        h = n("62843"),
        m = n("315102"),
        S = n("402671"),
        I = n("866190"),
        g = n("115279");
    class C extends a.PureComponent {
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
                    animated: a,
                    shouldAnimate: s,
                    isFocused: r,
                    isInteracting: l,
                    size: o = "default"
                } = e,
                {
                    hover: u
                } = this.state;
            if (null != t) return t;
            if (null != n) {
                let e = g.EMOJI_SIZE_MAP[o];
                return m.default.getEmojiURL({
                    id: n,
                    animated: r && !0 === a && (!0 === s || u || !0 === l),
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
                animated: s,
                className: l,
                size: o = "default",
                alt: u,
                shouldAnimate: c,
                isFocused: d,
                emojiId: f,
                autoplay: p,
                isInteracting: h,
                ...m
            } = this.props, S = this.getSrc();
            return null == S || "" === S ? (0, i.jsx)("span", {
                className: r("emoji", "emoji-text"),
                children: n
            }) : (s && (t = {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }), (0, a.createElement)("img", {
                ...m,
                key: this.key,
                src: S,
                alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                draggable: !1,
                ...t,
                className: r("emoji", l, {
                    jumboable: "jumbo" === o
                }),
                onError: this.onError,
                "data-type": "emoji",
                ...null != f && "" !== f ? {
                    "data-id": f
                } : {
                    "data-name": n
                }
            }))
        }
        constructor(...e) {
            super(...e), this.state = {
                hover: !1
            }, this.key = void 0, this.onError = () => {
                let e = this.getSrc();
                null != e && (this.cancelLoadImage = (0, d.loadImage)(e, e => {
                    !e && (this.key = Date.now(), this.forceUpdate())
                }))
            }, this.onMouseEnter = e => {
                this.setState({
                    hover: !0
                });
                let {
                    onMouseEnter: t
                } = this.props;
                null != t && t(e)
            }, this.onMouseLeave = e => {
                this.setState({
                    hover: !1
                });
                let {
                    onMouseLeave: t
                } = this.props;
                null != t && t(e)
            }
        }
    }
    C.defaultProps = {
        isInteracting: !1
    };
    let v = function(e) {
        if (null == window.IntersectionObserver) return function(t) {
            return (0, i.jsx)(e, {
                ...t,
                shouldAnimate: t.animated
            })
        };
        let t = [],
            n = [],
            s = new window.IntersectionObserver(e => {
                e.forEach(e => {
                    let i = n.find(t => {
                        let [n] = t;
                        return n === e.target
                    });
                    if (null == i) return;
                    let a = i[1];
                    if (e.intersectionRatio >= .7) {
                        var s, r;
                        if (-1 !== t.indexOf(a)) return;
                        let n = Math.abs(e.intersectionRect.bottom - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.top));
                        n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                    } else {
                        let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                    }
                })
            }, {
                threshold: .7
            });

        function r(e) {
            let t = o.findDOMNode(e);
            (0, u.isElement)(t) && (n.push([t, e]), s.observe(t))
        }

        function l(e) {
            let i = o.findDOMNode(e);
            s.unobserve(i);
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
                this.shouldAutoplay(this.props) && r(this)
            }
            componentDidUpdate(e) {
                let t = this.shouldAutoplay(e),
                    n = this.shouldAutoplay(this.props);
                n !== t && (n ? r(this) : l(this))
            }
            componentWillUnmount() {
                this.shouldAutoplay(this.props) && l(this)
            }
            render() {
                let n = t.indexOf(this),
                    {
                        autoplay: a,
                        allowAnimatedEmoji: s,
                        ...r
                    } = this.props;
                return (0, i.jsx)(h.MessagesInteractionContext.Consumer, {
                    children: t => (0, i.jsx)(e, {
                        ...r,
                        autoplay: a || !1,
                        shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && s
                    })
                })
            }
        }
    }(C);

    function E(e) {
        let t = f.AnimateEmoji.useSetting(),
            n = {
                autoplay: null == e.autoplay ? t : e.autoplay,
                allowAnimatedEmoji: t
            },
            a = __OVERLAY__ ? (0, c.useStateFromStores)([p.default], () => p.default.isInstanceFocused()) : (0, I.useIsWindowFocused)();
        return (0, i.jsx)(v, {
            ...e,
            ...n,
            isFocused: a
        })
    }
}