function(i, x, t) {
    "use strict";
    t.r(x), t.d(x, {
        default: function() {
            return I
        }
    }), t("222007"), t("70102"), t("843762"), t("424973");
    var s = t("37983"),
        a = t("884691"),
        o = t("414456"),
        y = t.n(o),
        k = t("817736"),
        d = t.n(k),
        p = t("118810"),
        r = t("446674"),
        e = t("407063"),
        m = t("845579"),
        n = t("901165"),
        c = t("62843"),
        l = t("315102"),
        f = t("402671"),
        h = t("866190"),
        _ = t("115279");
    class u extends a.PureComponent {
        componentWillUnmount() {
            var i;
            null === (i = this.cancelLoadImage) || void 0 === i || i.call(this)
        }
        getSrc() {
            let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                {
                    src: x,
                    emojiId: t,
                    emojiName: s,
                    animated: a,
                    shouldAnimate: o,
                    isFocused: y,
                    isInteracting: k,
                    size: d = "default"
                } = i,
                {
                    hover: p
                } = this.state;
            if (null != x) return x;
            if (null != t) {
                let i = _.EMOJI_SIZE_MAP[d];
                return l.default.getEmojiURL({
                    id: t,
                    animated: y && !0 === a && (!0 === o || p || !0 === k),
                    size: i
                })
            }
            if (null != s) return f.default.getURL(s)
        }
        render() {
            var i;
            let x;
            let {
                emojiName: t,
                animated: o,
                className: k,
                size: d = "default",
                alt: p,
                shouldAnimate: r,
                isFocused: e,
                emojiId: m,
                autoplay: n,
                isInteracting: c,
                ...l
            } = this.props, f = this.getSrc();
            return null == f || "" === f ? (0, s.jsx)("span", {
                className: y("emoji", "emoji-text"),
                children: t
            }) : (o && (x = {
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }), (0, a.createElement)("img", {
                ...l,
                key: this.key,
                src: f,
                alt: null !== (i = null != p ? p : t) && void 0 !== i ? i : void 0,
                draggable: !1,
                ...x,
                className: y("emoji", k, {
                    jumboable: "jumbo" === d
                }),
                onError: this.onError,
                "data-type": "emoji",
                ...null != m && "" !== m ? {
                    "data-id": m
                } : {
                    "data-name": t
                }
            }))
        }
        constructor(...i) {
            super(...i), this.state = {
                hover: !1
            }, this.key = void 0, this.onError = () => {
                let i = this.getSrc();
                null != i && (this.cancelLoadImage = (0, e.loadImage)(i, i => {
                    !i && (this.key = Date.now(), this.forceUpdate())
                }))
            }, this.onMouseEnter = i => {
                this.setState({
                    hover: !0
                });
                let {
                    onMouseEnter: x
                } = this.props;
                null != x && x(i)
            }, this.onMouseLeave = i => {
                this.setState({
                    hover: !1
                });
                let {
                    onMouseLeave: x
                } = this.props;
                null != x && x(i)
            }
        }
    }
    u.defaultProps = {
        isInteracting: !1
    };
    let b = function(i) {
        if (null == window.IntersectionObserver) return function(x) {
            return (0, s.jsx)(i, {
                ...x,
                shouldAnimate: x.animated
            })
        };
        let x = [],
            t = [],
            o = new window.IntersectionObserver(i => {
                i.forEach(i => {
                    let s = t.find(x => {
                        let [t] = x;
                        return t === i.target
                    });
                    if (null == s) return;
                    let a = s[1];
                    if (i.intersectionRatio >= .7) {
                        var o, y;
                        if (-1 !== x.indexOf(a)) return;
                        let t = Math.abs(i.intersectionRect.bottom - Number(null === (o = i.rootBounds) || void 0 === o ? void 0 : o.bottom)) < Math.abs(i.intersectionRect.top - Number(null === (y = i.rootBounds) || void 0 === y ? void 0 : y.top));
                        t ? x.unshift(a) : x.push(a), a.forceUpdate(), t && x.length > 100 && x[100].forceUpdate()
                    } else {
                        let i = x.indexOf(a); - 1 !== i && (x.splice(i, 1), a.forceUpdate(), i < 100 && x.length >= 100 && x[99].forceUpdate())
                    }
                })
            }, {
                threshold: .7
            });

        function y(i) {
            let x = d.findDOMNode(i);
            (0, p.isElement)(x) && (t.push([x, i]), o.observe(x))
        }

        function k(i) {
            let s = d.findDOMNode(i);
            o.unobserve(s);
            let a = t.findIndex(x => {
                let [t, s] = x;
                return s === i
            }); - 1 !== a && (t.splice(a, 1), -1 !== (a = x.indexOf(i)) && (x.splice(a, 1), a < 100 && x.length >= 100 && x[99].forceUpdate()))
        }
        return class extends a.Component {
            shouldAutoplay(i) {
                return i.animated && i.autoplay
            }
            componentDidMount() {
                this.shouldAutoplay(this.props) && y(this)
            }
            componentDidUpdate(i) {
                let x = this.shouldAutoplay(i),
                    t = this.shouldAutoplay(this.props);
                t !== x && (t ? y(this) : k(this))
            }
            componentWillUnmount() {
                this.shouldAutoplay(this.props) && k(this)
            }
            render() {
                let t = x.indexOf(this),
                    {
                        autoplay: a,
                        allowAnimatedEmoji: o,
                        ...y
                    } = this.props;
                return (0, s.jsx)(c.MessagesInteractionContext.Consumer, {
                    children: x => (0, s.jsx)(i, {
                        ...y,
                        autoplay: a || !1,
                        shouldAnimate: -1 !== t && t < 100 && !x.disableAnimations && o
                    })
                })
            }
        }
    }(u);

    function I(i) {
        let x = m.AnimateEmoji.useSetting(),
            t = {
                autoplay: null == i.autoplay ? x : i.autoplay,
                allowAnimatedEmoji: x
            },
            a = __OVERLAY__ ? (0, r.useStateFromStores)([n.default], () => n.default.isInstanceFocused()) : (0, h.useIsWindowFocused)();
        return (0, s.jsx)(b, {
            ...i,
            ...t,
            isFocused: a
        })
    }
}