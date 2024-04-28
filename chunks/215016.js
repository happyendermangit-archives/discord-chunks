function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GIFPickerSearchItem: function() {
            return P
        },
        useElementPools: function() {
            return b
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("944611"),
        d = n("377108"),
        _ = n("692547"),
        c = n("481060"),
        E = n("68405"),
        I = n("527429"),
        T = n("788911"),
        f = n("40851"),
        S = n("29909"),
        h = n("887208"),
        A = n("132748"),
        m = n("981631"),
        N = n("689938"),
        p = n("943970");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let R = [_.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, _.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
        C = 1220,
        g = Array.from({
            length: 16
        }).map((e, t) => ({
            id: "".concat(t),
            height: Math.floor(100 * Math.random()) + 120
        }));

    function L(e) {
        var t;
        return null !== (t = e.id) && void 0 !== t ? t : e.src
    }

    function D(e, t) {
        let n = g[t];
        return null == n ? 0 : n.height
    }

    function v(e, t, n, r) {
        if (!(e > 0)) return null == g[t] ? null : (0, i.jsx)("div", {
            className: p.placeholder,
            style: {
                animationDelay: "".concat(75 * t, "ms"),
                ...n
            }
        }, r)
    }

    function M(e, t) {
        var n, i;
        return e > 0 ? "" : null !== (i = null === (n = g[t]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : ""
    }

    function y(e) {
        return e === d.GIFType.VIDEO
    }
    class P extends r.PureComponent {
        componentDidMount() {
            let {
                props: {
                    format: e,
                    src: t,
                    coords: {
                        width: n,
                        height: i
                    },
                    videoPool: r
                },
                ref: s
            } = this;
            if (e !== d.GIFType.VIDEO || null == s) return;
            let a = r.getElement();
            a.oncanplay = this.handleCanPlay, a.src = t, a.width = n, a.height = i, s.appendChild(a), this._video = a
        }
        componentDidUpdate(e) {
            let {
                width: t,
                height: n
            } = this.props.coords;
            null != this._video && (e.coords.width !== t || e.coords.height !== n) && (this._video.width = t, this._video.height = n)
        }
        componentWillUnmount() {
            this._mounted = !1;
            let {
                _image: e,
                _video: t
            } = this, {
                imagePool: n,
                videoPool: i
            } = this.props;
            null != e && (this._image = null, n.poolElement(e)), null != t && (this._video = null, i.poolElement(t))
        }
        renderGIF() {
            let {
                src: e,
                coords: {
                    width: t,
                    height: n
                }
            } = this.props, {
                loaded: r
            } = this.state;
            return r ? (0, i.jsx)("img", {
                src: e,
                width: t,
                height: n,
                className: p.gif,
                alt: ""
            }) : null
        }
        render() {
            let {
                item: e,
                renderExtras: t,
                format: n,
                coords: r,
                focused: s
            } = this.props, {
                color: o,
                loaded: l
            } = this.state;
            return (0, i.jsxs)(c.Clickable, {
                tabIndex: -1,
                innerRef: e => {
                    this.ref = e
                },
                className: a()(p.result, {
                    [p.focused]: s
                }),
                onClick: this.handleClick,
                style: {
                    backgroundColor: l ? void 0 : o,
                    ...r
                },
                children: [y(n) ? null : this.renderGIF(), null != t ? t(e) : null]
            })
        }
        constructor(e) {
            super(e), O(this, "ref", null), O(this, "_video", null), O(this, "_image", null), O(this, "_mounted", !0), O(this, "handleCanPlay", () => {
                this._mounted && this.setState({
                    loaded: !0
                })
            }), O(this, "handleClick", () => {
                let {
                    onClick: e,
                    item: t,
                    index: n
                } = this.props;
                null != e && e(t, n)
            });
            let {
                format: t,
                color: n,
                imagePool: i
            } = this.props;
            this.state = {
                color: null == n ? l().sample(R) : n,
                loaded: !1
            }, !y(t) && (this._image = i.getElement(), this._image.onload = () => this.setState({
                loaded: !0
            }), this._image.src = e.src)
        }
    }
    class U extends r.PureComponent {
        componentDidMount() {
            let {
                resultType: e,
                data: t
            } = this.props;
            e === m.GIFPickerResultTypes.FAVORITES && ((0, E.trackSearchStart)(m.GIFPickerResultTypes.FAVORITES), (0, E.trackSearchResultViewed)(t, m.GIFPickerResultTypes.FAVORITES, {
                limit: null
            }))
        }
        selectItem(e, t) {
            let {
                onSelectGIF: n,
                resultType: i,
                data: r,
                resultQuery: s
            } = this.props;
            null != n && n(e), (0, E.trackSelectGIF)({
                type: i,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: r,
                totalResults: this.props.searchTotalResults,
                query: s,
                gifId: e.id
            })
        }
        getSectionHeight(e) {
            return 1 === e ? 220 : 0
        }
        renderEmptyFavorite(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return (0, i.jsx)("div", {
                className: p.emptyHint,
                children: null != e ? (0, i.jsxs)("div", {
                    className: p.emptyHintCard,
                    children: [t ? (0, i.jsx)(h.default, {
                        className: p.emptyHintFavorite
                    }) : null, (0, i.jsx)("div", {
                        className: p.emptyHintText,
                        children: e
                    })]
                }) : (0, i.jsx)("div", {
                    className: p.emptyHintSpacer
                })
            })
        }
        renderEmptyFavorites() {
            return (0, i.jsx)(c.Scroller, {
                className: p.results,
                fade: !0,
                children: (0, i.jsxs)("div", {
                    className: p.emptyHints,
                    children: [this.renderEmptyFavorite(N.default.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(N.default.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(N.default.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({
                        length: 15
                    }).map((e, t) => (0, i.jsx)(r.Fragment, {
                        children: this.renderEmptyFavorite()
                    }, t)), this.renderEmptyFavorite(N.default.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({
                        length: 16
                    }).map((e, t) => (0, i.jsx)(r.Fragment, {
                        children: this.renderEmptyFavorite()
                    }, t)), this.renderEmptyFavorite(N.default.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
                })
            })
        }
        render() {
            let {
                data: e,
                resultQuery: t,
                query: n,
                resultType: r
            } = this.props;
            return 0 === e.length && t === n && r !== m.GIFPickerResultTypes.TRENDING_GIFS ? r === m.GIFPickerResultTypes.FAVORITES ? this.renderEmptyFavorites() : (0, i.jsx)(T.default, {
                message: N.default.Messages.NO_GIF_SEARCH_RESULTS,
                className: p.noResults
            }) : (0, i.jsx)(I.default, {
                getItemGrid: this.getItemGrid,
                getCoordsMap: this.getCoordsMap,
                onFocus: this.handleFocus,
                onSelect: this.handleSelect,
                children: (0, i.jsx)(A.default, {
                    desiredItemWidth: 200,
                    maxColumns: 8,
                    children: this.renderContent
                })
            }, t)
        }
        constructor(...e) {
            super(...e), O(this, "_masonryRef", r.createRef()), O(this, "prevResultQuery", null), O(this, "state", {
                focusedId: null
            }), O(this, "handleFocus", e => {
                let {
                    current: t
                } = this._masonryRef;
                if (null == t) return;
                let n = t.getCoordsMap()[e];
                null != n && (t.scrollIntoViewRect({
                    start: n.top - 10,
                    end: n.top + n.height + 10
                }), this.setState({
                    focusedId: e
                }))
            }), O(this, "handleSelect", e => {
                let t;
                let {
                    data: n
                } = this.props, i = n.findIndex(t => L(t) === e); - 1 !== i && (t = n[i]), null != t && this.selectItem(t, i)
            }), O(this, "handleClickItem", (e, t) => {
                this.selectItem(e, t)
            }), O(this, "handleScroll", () => {
                let {
                    resultQuery: e
                } = this.props, {
                    current: t
                } = this._masonryRef;
                if (null == t) return;
                let {
                    scrollTop: n,
                    scrollHeight: i
                } = t.getScrollerState();
                i - n <= C && (e !== this.prevResultQuery && (0, E.fetchSuggestions)(e), this.prevResultQuery = e)
            }), O(this, "renderItem", (e, t, n, r) => {
                if (e > 0) return null;
                let {
                    focusedId: s
                } = this.state, a = this.props.data[t];
                return null == a ? null : (0, i.jsx)(P, {
                    item: a,
                    index: t,
                    format: a.format,
                    src: a.src,
                    coords: n,
                    onClick: this.handleClickItem,
                    renderExtras: () => (0, i.jsx)(S.default, {
                        className: p.favButton,
                        ...a
                    }),
                    focused: L(a) === s,
                    imagePool: this.props.imagePool,
                    videoPool: this.props.videoPool
                }, r)
            }), O(this, "getItemHeight", (e, t, n) => {
                if (e > 0) return 0;
                let i = this.props.data[t];
                return null == i ? 0 : i.height / i.width * n
            }), O(this, "getItemKey", (e, t) => {
                var n;
                if (e > 0) return null;
                let i = this.props.data[t];
                return null != i ? null !== (n = i.id) && void 0 !== n ? n : i.src : null
            }), O(this, "renderSection", (e, t, n) => {
                let {
                    onSelectSuggestion: s,
                    suggestions: a
                } = this.props;
                return 1 === e ? (0, i.jsx)("div", {
                    className: p.endContainer,
                    style: t,
                    children: a.length > 0 ? (0, i.jsxs)(r.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: p.endText,
                            children: N.default.Messages.GIF_PICKER_RELATED_SEARCH
                        }), (0, i.jsx)("div", {
                            className: p.searchSuggestions,
                            children: a.map(e => (0, i.jsx)(c.Button, {
                                look: c.Button.Looks.OUTLINED,
                                color: c.Button.Colors.PRIMARY,
                                size: c.Button.Sizes.SMALL,
                                className: p.searchSuggestion,
                                onClick: () => {
                                    s(e)
                                },
                                children: e
                            }, e))
                        })]
                    }) : null
                }, n) : null
            }), O(this, "renderContent", (e, t, n) => {
                let {
                    data: r,
                    resultQuery: s,
                    query: a,
                    resultType: o
                } = this.props;
                return 0 === r.length && (s !== a || o === m.GIFPickerResultTypes.TRENDING_GIFS) ? (0, i.jsx)(c.MasonryList, {
                    fade: !0,
                    className: p.results,
                    sections: [g.length],
                    columns: e,
                    itemGutter: 12,
                    getItemKey: M,
                    getItemHeight: D,
                    renderItem: v,
                    chunkSize: 128
                }, s) : (0, i.jsx)(c.MasonryList, {
                    ref: this._masonryRef,
                    fade: !0,
                    itemGutter: 12,
                    className: p.results,
                    columns: e,
                    sections: [r.length, 0],
                    getItemKey: this.getItemKey,
                    getItemHeight: this.getItemHeight,
                    renderItem: this.renderItem,
                    getSectionHeight: this.getSectionHeight,
                    renderSection: this.renderSection,
                    onScroll: this.handleScroll,
                    chunkSize: 128
                }, "".concat(s, "-").concat(null != o ? o : ""))
            }), O(this, "getItemGrid", () => {
                let {
                    current: e
                } = this._masonryRef;
                return null != e ? e.getItemGrid() : []
            }), O(this, "getCoordsMap", () => {
                let {
                    current: e
                } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {}
            })
        }
    }

    function b() {
        let {
            renderWindow: e
        } = r.useContext(f.default), t = e.document, [n] = r.useState(() => new u.ElementPool(() => t.createElement("img"), e => {
            e.onload = null, e.src = ""
        })), [i] = r.useState(() => new u.ElementPool(() => {
            let e = t.createElement("video");
            return e.className = p.gif, e.autoplay = !0, e.loop = !0, e.muted = !0, e.preload = "auto", e.controls = !1, e
        }, e => {
            e.src = "", e.oncanplay = null;
            let {
                parentNode: t
            } = e;
            null != t && t.removeChild(e)
        }));
        return {
            imagePool: n,
            videoPool: i
        }
    }
    t.default = function(e) {
        let t = b();
        return (0, i.jsx)(U, {
            ...e,
            ...t
        })
    }
}