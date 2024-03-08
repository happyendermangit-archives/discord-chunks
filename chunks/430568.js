function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("222007"), n("70102"), n("843762"), n("424973");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("817736"),
        o = n.n(r),
        u = n("118810"),
        d = n("446674"),
        c = n("407063"),
        f = n("845579"),
        p = n("901165"),
        m = n("62843"),
        h = n("315102"),
        x = n("402671"),
        E = n("866190"),
        y = n("115279");
    class g extends l.PureComponent {
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
                    animated: l,
                    shouldAnimate: a,
                    isFocused: s,
                    isInteracting: r,
                    size: o = "default"
                } = e,
                {
                    hover: u
                } = this.state;
            if (null != t) return t;
            if (null != n) {
                let e = y.EMOJI_SIZE_MAP[o];
                return h.default.getEmojiURL({
                    id: n,
                    animated: s && !0 === l && (!0 === a || u || !0 === r),
                    size: e
                })
            }
            if (null != i) return x.default.getURL(i)
        }
        render() {
            var e;
            let t;
            let {
                emojiName: n,
                animated: a,
                className: r,
                size: o = "default",
                alt: u,
                shouldAnimate: d,
                isFocused: c,
                emojiId: f,
                autoplay: p,
                isInteracting: m,
                ...h
            } = this.props, x = this.getSrc();
            return null == x || "" === x ? (0, i.jsx)("span", {
                className: s("emoji", "emoji-text"),
                children: n
            }) : (a && (t = {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }), (0, l.createElement)("img", {
                ...h,
                key: this.key,
                src: x,
                alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                draggable: !1,
                ...t,
                className: s("emoji", r, {
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
                null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
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
    g.defaultProps = {
        isInteracting: !1
    };
    let S = function(e) {
        if (null == window.IntersectionObserver) return function(t) {
            return (0, i.jsx)(e, {
                ...t,
                shouldAnimate: t.animated
            })
        };
        let t = [],
            n = [],
            a = new window.IntersectionObserver(e => {
                e.forEach(e => {
                    let i = n.find(t => {
                        let [n] = t;
                        return n === e.target
                    });
                    if (null == i) return;
                    let l = i[1];
                    if (e.intersectionRatio >= .7) {
                        var a, s;
                        if (-1 !== t.indexOf(l)) return;
                        let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.top));
                        n ? t.unshift(l) : t.push(l), l.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                    } else {
                        let e = t.indexOf(l); - 1 !== e && (t.splice(e, 1), l.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                    }
                })
            }, {
                threshold: .7
            });

        function s(e) {
            let t = o.findDOMNode(e);
            (0, u.isElement)(t) && (n.push([t, e]), a.observe(t))
        }

        function r(e) {
            let i = o.findDOMNode(e);
            a.unobserve(i);
            let l = n.findIndex(t => {
                let [n, i] = t;
                return i === e
            }); - 1 !== l && (n.splice(l, 1), -1 !== (l = t.indexOf(e)) && (t.splice(l, 1), l < 100 && t.length >= 100 && t[99].forceUpdate()))
        }
        return class extends l.Component {
            shouldAutoplay(e) {
                return e.animated && e.autoplay
            }
            componentDidMount() {
                this.shouldAutoplay(this.props) && s(this)
            }
            componentDidUpdate(e) {
                let t = this.shouldAutoplay(e),
                    n = this.shouldAutoplay(this.props);
                n !== t && (n ? s(this) : r(this))
            }
            componentWillUnmount() {
                this.shouldAutoplay(this.props) && r(this)
            }
            render() {
                let n = t.indexOf(this),
                    {
                        autoplay: l,
                        allowAnimatedEmoji: a,
                        ...s
                    } = this.props;
                return (0, i.jsx)(m.MessagesInteractionContext.Consumer, {
                    children: t => (0, i.jsx)(e, {
                        ...s,
                        autoplay: l || !1,
                        shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                    })
                })
            }
        }
    }(g);

    function C(e) {
        let t = f.AnimateEmoji.useSetting(),
            n = {
                autoplay: null == e.autoplay ? t : e.autoplay,
                allowAnimatedEmoji: t
            },
            l = __OVERLAY__ ? (0, d.useStateFromStores)([p.default], () => p.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
        return (0, i.jsx)(S, {
            ...e,
            ...n,
            isFocused: l
        })
    }
}