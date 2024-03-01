function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        GIFPickerSearchItem: function() {
            return P
        },
        useElementPools: function() {
            return w
        },
        default: function() {
            return O
        }
    }), s("222007");
    var r = s("37983"),
        n = s("884691"),
        l = s("414456"),
        i = s.n(l),
        a = s("917351"),
        o = s.n(a),
        u = s("217982"),
        c = s("713349"),
        d = s("669491"),
        h = s("77078"),
        f = s("960476"),
        p = s("718302"),
        m = s("96386"),
        I = s("244201"),
        g = s("476714"),
        _ = s("671434"),
        E = s("354553"),
        R = s("49111"),
        y = s("782340"),
        S = s("186046");
    let F = [d.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
        v = 1220,
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

    function G(e, t) {
        let s = T[t];
        return null == s ? 0 : s.height
    }

    function A(e, t, s, n) {
        if (!(e > 0)) return null == T[t] ? null : (0, r.jsx)("div", {
            className: S.placeholder,
            style: {
                animationDelay: "".concat(75 * t, "ms"),
                ...s
            }
        }, n)
    }

    function x(e, t) {
        var s, r;
        return e > 0 ? "" : null !== (r = null === (s = T[t]) || void 0 === s ? void 0 : s.id) && void 0 !== r ? r : ""
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
                        width: s,
                        height: r
                    },
                    videoPool: n
                },
                ref: l
            } = this;
            if (e !== c.GIFType.VIDEO || null == l) return;
            let i = n.getElement();
            i.oncanplay = this.handleCanPlay, i.src = t, i.width = s, i.height = r, l.appendChild(i), this._video = i
        }
        componentDidUpdate(e) {
            let {
                width: t,
                height: s
            } = this.props.coords;
            null != this._video && (e.coords.width !== t || e.coords.height !== s) && (this._video.width = t, this._video.height = s)
        }
        componentWillUnmount() {
            this._mounted = !1;
            let {
                _image: e,
                _video: t
            } = this, {
                imagePool: s,
                videoPool: r
            } = this.props;
            null != e && (this._image = null, s.poolElement(e)), null != t && (this._video = null, r.poolElement(t))
        }
        renderGIF() {
            let {
                src: e,
                coords: {
                    width: t,
                    height: s
                }
            } = this.props, {
                loaded: n
            } = this.state;
            return n ? (0, r.jsx)("img", {
                src: e,
                width: t,
                height: s,
                className: S.gif,
                alt: ""
            }) : null
        }
        render() {
            let {
                item: e,
                renderExtras: t,
                format: s,
                coords: n,
                focused: l
            } = this.props, {
                color: a,
                loaded: o
            } = this.state;
            return (0, r.jsxs)(h.Clickable, {
                tabIndex: -1,
                innerRef: e => {
                    this.ref = e
                },
                className: i(S.result, {
                    [S.focused]: l
                }),
                onClick: this.handleClick,
                style: {
                    backgroundColor: o ? void 0 : a,
                    ...n
                },
                children: [N(s) ? null : this.renderGIF(), null != t ? t(e) : null]
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
                    index: s
                } = this.props;
                null != e && e(t, s)
            };
            let {
                format: t,
                color: s,
                imagePool: r
            } = this.props;
            this.state = {
                color: null == s ? o.sample(F) : s,
                loaded: !1
            }, !N(t) && (this._image = r.getElement(), this._image.onload = () => this.setState({
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
                onSelectGIF: s,
                resultType: r,
                data: n,
                resultQuery: l
            } = this.props;
            null != s && s(e), (0, f.trackSelectGIF)({
                type: r,
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
            return (0, r.jsx)("div", {
                className: S.emptyHint,
                children: null != e ? (0, r.jsxs)("div", {
                    className: S.emptyHintCard,
                    children: [t ? (0, r.jsx)(_.default, {
                        className: S.emptyHintFavorite
                    }) : null, (0, r.jsx)("div", {
                        className: S.emptyHintText,
                        children: e
                    })]
                }) : (0, r.jsx)("div", {
                    className: S.emptyHintSpacer
                })
            })
        }
        renderEmptyFavorites() {
            return (0, r.jsx)(h.Scroller, {
                className: S.results,
                fade: !0,
                children: (0, r.jsxs)("div", {
                    className: S.emptyHints,
                    children: [this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({
                        length: 15
                    }).map((e, t) => (0, r.jsx)(n.Fragment, {
                        children: this.renderEmptyFavorite()
                    }, t)), this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({
                        length: 16
                    }).map((e, t) => (0, r.jsx)(n.Fragment, {
                        children: this.renderEmptyFavorite()
                    }, t)), this.renderEmptyFavorite(y.default.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
                })
            })
        }
        render() {
            let {
                data: e,
                resultQuery: t,
                query: s,
                resultType: n
            } = this.props;
            return 0 === e.length && t === s && n !== R.GIFPickerResultTypes.TRENDING_GIFS ? n === R.GIFPickerResultTypes.FAVORITES ? this.renderEmptyFavorites() : (0, r.jsx)(m.default, {
                message: y.default.Messages.NO_GIF_SEARCH_RESULTS,
                className: S.noResults
            }) : (0, r.jsx)(p.default, {
                getItemGrid: this.getItemGrid,
                getCoordsMap: this.getCoordsMap,
                onFocus: this.handleFocus,
                onSelect: this.handleSelect,
                children: (0, r.jsx)(E.default, {
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
                let s = t.getCoordsMap()[e];
                null != s && (t.scrollIntoViewRect({
                    start: s.top - 10,
                    end: s.top + s.height + 10
                }), this.setState({
                    focusedId: e
                }))
            }, this.handleSelect = e => {
                let t;
                let {
                    data: s
                } = this.props, r = s.findIndex(t => C(t) === e); - 1 !== r && (t = s[r]), null != t && this.selectItem(t, r)
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
                    scrollTop: s,
                    scrollHeight: r
                } = t.getScrollerState();
                r - s <= v && (e !== this.prevResultQuery && (0, f.fetchSuggestions)(e), this.prevResultQuery = e)
            }, this.renderItem = (e, t, s, n) => {
                if (e > 0) return null;
                let {
                    focusedId: l
                } = this.state, i = this.props.data[t];
                return null == i ? null : (0, r.jsx)(P, {
                    item: i,
                    index: t,
                    format: i.format,
                    src: i.src,
                    coords: s,
                    onClick: this.handleClickItem,
                    renderExtras: () => (0, r.jsx)(g.default, {
                        className: S.favButton,
                        ...i
                    }),
                    focused: C(i) === l,
                    imagePool: this.props.imagePool,
                    videoPool: this.props.videoPool
                }, n)
            }, this.getItemHeight = (e, t, s) => {
                if (e > 0) return 0;
                let r = this.props.data[t];
                if (null == r) return 0;
                let n = r.height / r.width;
                return s * n
            }, this.getItemKey = (e, t) => {
                var s;
                if (e > 0) return null;
                let r = this.props.data[t];
                return null != r ? null !== (s = r.id) && void 0 !== s ? s : r.src : null
            }, this.renderSection = (e, t, s) => {
                let {
                    onSelectSuggestion: l,
                    suggestions: i
                } = this.props;
                return 1 === e ? (0, r.jsx)("div", {
                    className: S.endContainer,
                    style: t,
                    children: i.length > 0 ? (0, r.jsxs)(n.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: S.endText,
                            children: y.default.Messages.GIF_PICKER_RELATED_SEARCH
                        }), (0, r.jsx)("div", {
                            className: S.searchSuggestions,
                            children: i.map(e => (0, r.jsx)(h.Button, {
                                look: h.Button.Looks.OUTLINED,
                                color: h.Button.Colors.PRIMARY,
                                size: h.Button.Sizes.SMALL,
                                className: S.searchSuggestion,
                                onClick: () => {
                                    l(e)
                                },
                                children: e
                            }, e))
                        })]
                    }) : null
                }, s) : null
            }, this.renderContent = (e, t, s) => {
                let {
                    data: n,
                    resultQuery: l,
                    query: i,
                    resultType: a
                } = this.props;
                return 0 === n.length && (l !== i || a === R.GIFPickerResultTypes.TRENDING_GIFS) ? (0, r.jsx)(h.MasonryList, {
                    fade: !0,
                    className: S.results,
                    sections: [T.length],
                    columns: e,
                    itemGutter: 12,
                    getItemKey: x,
                    getItemHeight: G,
                    renderItem: A,
                    chunkSize: 128
                }, l) : (0, r.jsx)(h.MasonryList, {
                    ref: this._masonryRef,
                    fade: !0,
                    itemGutter: 12,
                    className: S.results,
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
        } = n.useContext(I.default), t = e.document, [s] = n.useState(() => new u.default(() => t.createElement("img"), e => {
            e.onload = null, e.src = ""
        })), [r] = n.useState(() => new u.default(() => {
            let e = t.createElement("video");
            return e.className = S.gif, e.autoplay = !0, e.loop = !0, e.muted = !0, e.preload = "auto", e.controls = !1, e
        }, e => {
            e.src = "", e.oncanplay = null;
            let {
                parentNode: t
            } = e;
            null != t && t.removeChild(e)
        }));
        return {
            imagePool: s,
            videoPool: r
        }
    }
    var O = function(e) {
        let t = w();
        return (0, r.jsx)(M, {
            ...e,
            ...t
        })
    }
}