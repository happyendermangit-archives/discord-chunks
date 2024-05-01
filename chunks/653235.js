function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("392711"),
        a = n.n(s),
        o = n("442837"),
        l = n("377108"),
        u = n("692547"),
        d = n("481060"),
        _ = n("68405"),
        c = n("527429"),
        E = n("656733"),
        I = n("887208"),
        T = n("251625"),
        f = n("985375"),
        S = n("132748"),
        h = n("353903"),
        A = n("215016"),
        m = n("981631"),
        N = n("689938"),
        p = n("736127");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let R = (e, t) => (0, i.jsx)(h.CategoryColumn, {
        columns: e
    }, t);
    class C extends r.PureComponent {
        componentDidMount() {
            0 === this.props.trendingCategories.length && (0, _.fetchTrending)()
        }
        getData() {
            return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
        }
        renderCategoryExtras(e) {
            let {
                name: t,
                icon: n,
                type: s
            } = e;
            return (0, i.jsxs)(r.Fragment, {
                children: [(0, i.jsx)("div", {
                    className: s === m.GIFPickerResultTypes.FAVORITES ? p.categoryFadeBlurple : p.categoryFade
                }), (0, i.jsxs)("div", {
                    className: p.categoryText,
                    children: [null != n ? (0, i.jsx)(n, {
                        className: p.categoryIcon
                    }) : null, (0, i.jsx)("span", {
                        className: p.categoryName,
                        children: t
                    })]
                })]
            })
        }
        render() {
            return (0, i.jsx)(c.default, {
                getItemGrid: this.getItemGrid,
                getCoordsMap: this.getCoordsMap,
                onFocus: this.handleFocus,
                onSelect: this.handleSelect,
                children: (0, i.jsx)(S.default, {
                    desiredItemWidth: 200,
                    maxColumns: 6,
                    children: this.renderContent
                })
            })
        }
        constructor(...e) {
            super(...e), O(this, "_masonryRef", r.createRef()), O(this, "state", {
                favoritesTile: function(e) {
                    var t;
                    let n = a().sample(a().values(e));
                    return {
                        type: m.GIFPickerResultTypes.FAVORITES,
                        name: N.default.Messages.CATEGORY_FAVORITE,
                        icon: I.default,
                        src: null != n ? n.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                        format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : l.GIFType.IMAGE
                    }
                }(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0
                },
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
                let {
                    onSelectItem: t
                } = this.props, n = this.getData().find(t => t.name === e);
                null != n && null != t && t(n.type, n.name)
            }), O(this, "getItemKey", (e, t) => {
                if (e > 0) return null;
                let n = this.getData()[t];
                return null != n ? n.name : null
            }), O(this, "memoizedData", (0, T.cachedFunction)(function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return n ? [...t] : [e, ...t]
            })), O(this, "renderItem", (e, t, n, r) => {
                if (e > 0) return null;
                let s = this.getData()[t];
                if (null == s) return;
                let {
                    onSelectItem: a,
                    imagePool: o,
                    videoPool: l
                } = this.props, {
                    focusedId: d
                } = this.state;
                return (0, i.jsx)(A.GIFPickerSearchItem, {
                    format: s.format,
                    color: u.default.unsafe_rawColors.PRIMARY_800.css,
                    src: s.src,
                    item: s,
                    index: t,
                    coords: n,
                    onClick: () => a(s.type, s.name),
                    renderExtras: this.renderCategoryExtras,
                    focused: s.name === d,
                    imagePool: o,
                    videoPool: l
                }, r)
            }), O(this, "renderContent", (e, t, n) => {
                let {
                    trendingCategories: r
                } = this.props;
                return 0 === r.length ? (0, i.jsx)(h.ResultsLoader, {
                    columns: e,
                    width: t,
                    renderColumn: R
                }) : (0, i.jsx)(d.MasonryList, {
                    ref: this._masonryRef,
                    fade: !0,
                    className: p.container,
                    itemGutter: 12,
                    getItemKey: this.getItemKey,
                    columns: e,
                    getItemHeight: () => 110,
                    renderItem: this.renderItem,
                    sections: [this.getData().length],
                    chunkSize: 50
                })
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

    function g(e) {
        let t = (0, o.useStateFromStores)([E.default], () => E.default.getTrendingCategories()),
            n = (0, f.useFavoriteGIFs)(),
            r = (0, A.useElementPools)();
        return (0, i.jsx)(C, {
            ...e,
            ...r,
            trendingCategories: t,
            favorites: n
        })
    }
}