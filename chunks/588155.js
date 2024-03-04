function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return T
        }
    }), r("222007");
    var s = r("37983"),
        n = r("884691"),
        l = r("917351"),
        i = r.n(l),
        a = r("446674"),
        o = r("713349"),
        u = r("669491"),
        c = r("77078"),
        d = r("960476"),
        h = r("718302"),
        f = r("510849"),
        m = r("671434"),
        p = r("117362"),
        I = r("140331"),
        g = r("354553"),
        _ = r("4445"),
        E = r("762518"),
        R = r("49111"),
        S = r("782340"),
        y = r("138667");
    let v = (e, t) => (0, s.jsx)(_.CategoryColumn, {
        columns: e
    }, t);
    class F extends n.PureComponent {
        componentDidMount() {
            0 === this.props.trendingCategories.length && (0, d.fetchTrending)()
        }
        getData() {
            return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
        }
        renderCategoryExtras(e) {
            let {
                name: t,
                icon: r,
                type: l
            } = e;
            return (0, s.jsxs)(n.Fragment, {
                children: [(0, s.jsx)("div", {
                    className: l === R.GIFPickerResultTypes.FAVORITES ? y.categoryFadeBlurple : y.categoryFade
                }), (0, s.jsxs)("div", {
                    className: y.categoryText,
                    children: [null != r ? (0, s.jsx)(r, {
                        className: y.categoryIcon
                    }) : null, (0, s.jsx)("span", {
                        className: y.categoryName,
                        children: t
                    })]
                })]
            })
        }
        render() {
            return (0, s.jsx)(h.default, {
                getItemGrid: this.getItemGrid,
                getCoordsMap: this.getCoordsMap,
                onFocus: this.handleFocus,
                onSelect: this.handleSelect,
                children: (0, s.jsx)(g.default, {
                    desiredItemWidth: 200,
                    maxColumns: 6,
                    children: this.renderContent
                })
            })
        }
        constructor(...e) {
            super(...e), this._masonryRef = n.createRef(), this.state = {
                favoritesTile: function(e) {
                    var t;
                    let r = i.sample(i.values(e));
                    return {
                        type: R.GIFPickerResultTypes.FAVORITES,
                        name: S.default.Messages.CATEGORY_FAVORITE,
                        icon: m.default,
                        src: null != r ? r.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                        format: null !== (t = null == r ? void 0 : r.format) && void 0 !== t ? t : o.GIFType.IMAGE
                    }
                }(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0
                },
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
                let {
                    onSelectItem: t
                } = this.props, r = this.getData().find(t => t.name === e);
                null != r && null != t && t(r.type, r.name)
            }, this.getItemKey = (e, t) => {
                if (e > 0) return null;
                let r = this.getData()[t];
                return null != r ? r.name : null
            }, this.memoizedData = (0, p.cachedFunction)(function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return r ? [...t] : [e, ...t]
            }), this.renderItem = (e, t, r, n) => {
                if (e > 0) return null;
                let l = this.getData()[t];
                if (null == l) return;
                let {
                    onSelectItem: i,
                    imagePool: a,
                    videoPool: o
                } = this.props, {
                    focusedId: c
                } = this.state;
                return (0, s.jsx)(E.GIFPickerSearchItem, {
                    format: l.format,
                    color: u.default.unsafe_rawColors.PRIMARY_800.css,
                    src: l.src,
                    item: l,
                    index: t,
                    coords: r,
                    onClick: () => i(l.type, l.name),
                    renderExtras: this.renderCategoryExtras,
                    focused: l.name === c,
                    imagePool: a,
                    videoPool: o
                }, n)
            }, this.renderContent = (e, t, r) => {
                let {
                    trendingCategories: n
                } = this.props;
                return 0 === n.length ? (0, s.jsx)(_.ResultsLoader, {
                    columns: e,
                    width: t,
                    renderColumn: v
                }) : (0, s.jsx)(c.MasonryList, {
                    ref: this._masonryRef,
                    fade: !0,
                    className: y.container,
                    itemGutter: 12,
                    getItemKey: this.getItemKey,
                    columns: e,
                    getItemHeight: () => 110,
                    renderItem: this.renderItem,
                    sections: [this.getData().length],
                    chunkSize: 50
                })
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

    function T(e) {
        let t = (0, a.useStateFromStores)([f.default], () => f.default.getTrendingCategories()),
            r = (0, I.useFavoriteGIFs)(),
            n = (0, E.useElementPools)();
        return (0, s.jsx)(F, {
            ...e,
            ...n,
            trendingCategories: t,
            favorites: r
        })
    }
}