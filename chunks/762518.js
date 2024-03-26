function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        GIFPickerSearchItem: function() {
            return P
        },
        useElementPools: function() {
            return w
        },
        default: function() {
            return O
        }
    }), r("222007");
    var s = r("37983"),
        n = r("884691"),
        l = r("414456"),
        i = r.n(l),
        a = r("917351"),
        o = r.n(a),
        u = r("217982"),
        c = r("713349"),
        d = r("669491"),
        h = r("77078"),
        f = r("960476"),
        m = r("718302"),
        p = r("96386"),
        I = r("244201"),
        g = r("476714"),
        _ = r("671434"),
        E = r("354553"),
        R = r("49111"),
        S = r("782340"),
        y = r("186046");
    let v = [d.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
        F = 1220,
        T = Array.from({
            length: 16
        }).map((e, t) => ({
            id: "".concat(t),
            height: Math.floor(100 * Math.random()) + 120
        }));

    function C(e) {
        var t;
        return null !== (t = e.id) && void 0 !== t ? t : e.src
    }

    function A(e, t) {
        let r = T[t];
        return null == r ? 0 : r.height
    }

    function G(e, t, r, n) {
        if (!(e > 0)) return null == T[t] ? null : (0, s.jsx)("div", {
            className: y.placeholder,
            style: {
                animationDelay: "".concat(75 * t, "ms"),
                ...r
            }
        }, n)
    }

    function x(e, t) {
        var r, s;
        return e > 0 ? "" : null !== (s = null === (r = T[t]) || void 0 === r ? void 0 : r.id) && void 0 !== s ? s : ""
    }

    function N(e) {
        return e === c.GIFType.VIDEO
    }
    class P extends n.PureComponent {
        componentDidMount() {
            let {
                props: {
                    format: e,
                    src: t,
                    coords: {
                        width: r,
                        height: s
                    },
                    videoPool: n
                },
                ref: l
            } = this;
            if (e !== c.GIFType.VIDEO || null == l) return;
            let i = n.getElement();
            i.oncanplay = this.handleCanPlay, i.src = t, i.width = r, i.height = s, l.appendChild(i), this._video = i
        }
        componentDidUpdate(e) {
            let {
                width: t,
                height: r
            } = this.props.coords;
            null != this._video && (e.coords.width !== t || e.coords.height !== r) && (this._video.width = t, this._video.height = r)
        }
        componentWillUnmount() {
            this._mounted = !1;
            let {
                _image: e,
                _video: t
            } = this, {
                imagePool: r,
                videoPool: s
            } = this.props;
            null != e && (this._image = null, r.poolElement(e)), null != t && (this._video = null, s.poolElement(t))
        }
        renderGIF() {
            let {
                src: e,
                coords: {
                    width: t,
                    height: r
                }
            } = this.props, {
                loaded: n
            } = this.state;
            return n ? (0, s.jsx)("img", {
                src: e,
                width: t,
                height: r,
                className: y.gif,
                alt: ""
            }) : null
        }
        render() {
            let {
                item: e,
                renderExtras: t,
                format: r,
                coords: n,
                focused: l
            } = this.props, {
                color: a,
                loaded: o
            } = this.state;
            return (0, s.jsxs)(h.Clickable, {
                tabIndex: -1,
                innerRef: e => {
                    this.ref = e
                },
                className: i(y.result, {
                    [y.focused]: l
                }),
                onClick: this.handleClick,
                style: {
                    backgroundColor: o ? void 0 : a,
                    ...n
                },
                children: [N(r) ? null : this.renderGIF(), null != t ? t(e) : null]
            })
        }
        constructor(e) {
            super(e), this.ref = null, this._video = null, this._image = null, this._mounted = !0, this.handleCanPlay = () => {
                this._mounted && this.setState({
                    loaded: !0
                })
            }, this.handleClick = () => {
                let {
                    onClick: e,
                    item: t,
                    index: r
                } = this.props;
                null != e && e(t, r)
            };
            let {
                format: t,
                color: r,
                imagePool: s
            } = this.props;
            this.state = {
                color: null == r ? o.sample(v) : r,
                loaded: !1
            }, !N(t) && (this._image = s.getElement(), this._image.onload = () => this.setState({
                loaded: !0
            }), this._image.src = e.src)
        }
    }
    class M extends n.PureComponent {
        componentDidMount() {
            let {
                resultType: e,
                data: t
            } = this.props;
            e === R.GIFPickerResultTypes.FAVORITES && ((0, f.trackSearchStart)(R.GIFPickerResultTypes.FAVORITES), (0, f.trackSearchResultViewed)(t, R.GIFPickerResultTypes.FAVORITES, {
                limit: null
            }))
        }
        selectItem(e, t) {
            let {
                onSelectGIF: r,
                resultType: s,
                data: n,
                resultQuery: l
            } = this.props;
            null != r && r(e), (0, f.trackSelectGIF)({
                type: s,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: n,
                totalResults: this.props.searchTotalResults,
                query: l,
                gifId: e.id
            })
        }
        getSectionHeight(e) {
            return 1 === e ? 220 : 0
        }
        renderEmptyFavorite(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (0, s.jsx)("div", {
                className: y.emptyHint,
                children: null != e ? (0, s.jsxs)("div", {
                    className: y.emptyHintCard,
                    children: [t ? (0, s.jsx)(_.default, {
                        className: y.emptyHintFavorite
                    }) : null, (0, s.jsx)("div", {
                        className: y.emptyHintText,
                        children: e
                    })]
                }) : (0, s.jsx)("div", {
                    className: y.emptyHintSpacer
                })
            })
        }
        renderEmptyFavorites() {
            return (0, s.jsx)(h.Scroller, {
                className: y.results,
                fade: !0,
                children: (0, s.jsxs)("div", {
                    className: y.emptyHints,
                    children: [this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({
                        length: 15
                    }).map((e, t) => (0, s.jsx)(n.Fragment, {
                        children: this.renderEmptyFavorite()
                    }, t)), this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({
                        length: 16
                    }).map((e, t) => (0, s.jsx)(n.Fragment, {
                        children: this.renderEmptyFavorite()
                    }, t)), this.renderEmptyFavorite(S.default.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
                })
            })
        }
        render() {
            let {
                data: e,
                resultQuery: t,
                query: r,
                resultType: n
            } = this.props;
            return 0 === e.length && t === r && n !== R.GIFPickerResultTypes.TRENDING_GIFS ? n === R.GIFPickerResultTypes.FAVORITES ? this.renderEmptyFavorites() : (0, s.jsx)(p.default, {
                message: S.default.Messages.NO_GIF_SEARCH_RESULTS,
                className: y.noResults
            }) : (0, s.jsx)(m.default, {
                getItemGrid: this.getItemGrid,
                getCoordsMap: this.getCoordsMap,
                onFocus: this.handleFocus,
                onSelect: this.handleSelect,
                children: (0, s.jsx)(E.default, {
                    desiredItemWidth: 200,
                    maxColumns: 8,
                    children: this.renderContent
                })
            }, t)
        }
        constructor(...e) {
            super(...e), this._masonryRef = n.createRef(), this.prevResultQuery = null, this.state = {
                focusedId: null
            }, this.handleFocus = e => {
                let {
                    current: t
                } = this._masonryRef;
                if (null == t) return;
                let r = t.getCoordsMap()[e];
                null != r && (t.scrollIntoViewRect({
                    start: r.top - 10,
                    end: r.top + r.height + 10
                }), this.setState({
                    focusedId: e
                }))
            }, this.handleSelect = e => {
                let t;
                let {
                    data: r
                } = this.props, s = r.findIndex(t => C(t) === e); - 1 !== s && (t = r[s]), null != t && this.selectItem(t, s)
            }, this.handleClickItem = (e, t) => {
                this.selectItem(e, t)
            }, this.handleScroll = () => {
                let {
                    resultQuery: e
                } = this.props, {
                    current: t
                } = this._masonryRef;
                if (null == t) return;
                let {
                    scrollTop: r,
                    scrollHeight: s
                } = t.getScrollerState();
                s - r <= F && (e !== this.prevResultQuery && (0, f.fetchSuggestions)(e), this.prevResultQuery = e)
            }, this.renderItem = (e, t, r, n) => {
                if (e > 0) return null;
                let {
                    focusedId: l
                } = this.state, i = this.props.data[t];
                return null == i ? null : (0, s.jsx)(P, {
                    item: i,
                    index: t,
                    format: i.format,
                    src: i.src,
                    coords: r,
                    onClick: this.handleClickItem,
                    renderExtras: () => (0, s.jsx)(g.default, {
                        className: y.favButton,
                        ...i
                    }),
                    focused: C(i) === l,
                    imagePool: this.props.imagePool,
                    videoPool: this.props.videoPool
                }, n)
            }, this.getItemHeight = (e, t, r) => {
                if (e > 0) return 0;
                let s = this.props.data[t];
                if (null == s) return 0;
                let n = s.height / s.width;
                return r * n
            }, this.getItemKey = (e, t) => {
                var r;
                if (e > 0) return null;
                let s = this.props.data[t];
                return null != s ? null !== (r = s.id) && void 0 !== r ? r : s.src : null
            }, this.renderSection = (e, t, r) => {
                let {
                    onSelectSuggestion: l,
                    suggestions: i
                } = this.props;
                return 1 === e ? (0, s.jsx)("div", {
                    className: y.endContainer,
                    style: t,
                    children: i.length > 0 ? (0, s.jsxs)(n.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: y.endText,
                            children: S.default.Messages.GIF_PICKER_RELATED_SEARCH
                        }), (0, s.jsx)("div", {
                            className: y.searchSuggestions,
                            children: i.map(e => (0, s.jsx)(h.Button, {
                                look: h.Button.Looks.OUTLINED,
                                color: h.Button.Colors.PRIMARY,
                                size: h.Button.Sizes.SMALL,
                                className: y.searchSuggestion,
                                onClick: () => {
                                    l(e)
                                },
                                children: e
                            }, e))
                        })]
                    }) : null
                }, r) : null
            }, this.renderContent = (e, t, r) => {
                let {
                    data: n,
                    resultQuery: l,
                    query: i,
                    resultType: a
                } = this.props;
                return 0 === n.length && (l !== i || a === R.GIFPickerResultTypes.TRENDING_GIFS) ? (0, s.jsx)(h.MasonryList, {
                    fade: !0,
                    className: y.results,
                    sections: [T.length],
                    columns: e,
                    itemGutter: 12,
                    getItemKey: x,
                    getItemHeight: A,
                    renderItem: G,
                    chunkSize: 128
                }, l) : (0, s.jsx)(h.MasonryList, {
                    ref: this._masonryRef,
                    fade: !0,
                    itemGutter: 12,
                    className: y.results,
                    columns: e,
                    sections: [n.length, 0],
                    getItemKey: this.getItemKey,
                    getItemHeight: this.getItemHeight,
                    renderItem: this.renderItem,
                    getSectionHeight: this.getSectionHeight,
                    renderSection: this.renderSection,
                    onScroll: this.handleScroll,
                    chunkSize: 128
                }, "".concat(l, "-").concat(null != a ? a : ""))
            }, this.getItemGrid = () => {
                let {
                    current: e
                } = this._masonryRef;
                return null != e ? e.getItemGrid() : []
            }, this.getCoordsMap = () => {
                let {
                    current: e
                } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {}
            }
        }
    }

    function w() {
        let {
            renderWindow: e
        } = n.useContext(I.default), t = e.document, [r] = n.useState(() => new u.ElementPool(() => t.createElement("img"), e => {
            e.onload = null, e.src = ""
        })), [s] = n.useState(() => new u.ElementPool(() => {
            let e = t.createElement("video");
            return e.className = y.gif, e.autoplay = !0, e.loop = !0, e.muted = !0, e.preload = "auto", e.controls = !1, e
        }, e => {
            e.src = "", e.oncanplay = null;
            let {
                parentNode: t
            } = e;
            null != t && t.removeChild(e)
        }));
        return {
            imagePool: r,
            videoPool: s
        }
    }
    var O = function(e) {
        let t = w();
        return (0, s.jsx)(M, {
            ...e,
            ...t
        })
    }
}