function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        backgroundImagePreloader: function() {
            return _
        }
    }), n("653041");
    var i = n("735250"),
        r = n("470079"),
        a = n("711873"),
        s = n.n(a),
        o = n("134432");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = /url\(['"](.*)['"]\)/,
        d = e => {
            if (null == e || "" === e || "none" === e) return null;
            let t = e.match(u);
            return null != t ? t[1] : e
        };

    function _(e) {
        class t extends r.Component {
            componentDidUpdate(e, t) {
                if (t === this.state) return;
                let {
                    cached: n,
                    loaded: i
                } = this.state, {
                    style: r
                } = this.props, a = null != r ? d(r.backgroundImage) : null;
                null == a && a !== n ? this.setState({
                    loaded: !0,
                    cached: a
                }) : this.cachedURLs.indexOf(a) >= 0 ? this.setState({
                    loaded: !0,
                    cached: a
                }) : null != a && a !== n && !0 === i && this.setState({
                    loaded: !1
                }, () => this.preloadURL(a))
            }
            preloadURL(e) {
                this.canceller && this.canceller(), this.canceller = (0, o.loadImage)(e, t => {
                    this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                        cached: e,
                        loaded: !0
                    }));
                    let {
                        onBackgroundImageLoad: n
                    } = this.props;
                    n && n(t, e)
                })
            }
            componentWillUnmount() {
                this.canceller && this.canceller(), this.cachedURLs.length = 0
            }
            render() {
                let {
                    style: t,
                    onBackgroundImageLoad: n,
                    ...r
                } = this.props, {
                    loaded: a,
                    cached: s
                } = this.state;
                if (!a && null != t) {
                    var o;
                    t = {
                        ...t,
                        backgroundImage: null == (o = s) || "" === o || "none" === o ? "none" : "url(".concat(o, ")")
                    }
                }
                return (0, i.jsx)(e, {
                    style: t,
                    ...r
                })
            }
            constructor(e) {
                super(e), l(this, "cachedURLs", []), l(this, "canceller", null);
                let {
                    style: t
                } = e, n = null != t ? d(t.backgroundImage) : null;
                this.cachedURLs = [n], this.state = {
                    cached: n,
                    loaded: !0
                }
            }
        }
        return s()(t, e), t
    }
}