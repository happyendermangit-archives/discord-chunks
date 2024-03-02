function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return T
        }
    }), s("222007");
    var r = s("37983"),
        n = s("884691"),
        l = s("917351"),
        i = s.n(l),
        a = s("446674"),
        o = s("713349"),
        u = s("669491"),
        c = s("77078"),
        d = s("960476"),
        h = s("718302"),
        f = s("510849"),
        p = s("671434"),
        m = s("117362"),
        I = s("140331"),
        g = s("354553"),
        _ = s("4445"),
        E = s("762518"),
        R = s("49111"),
        y = s("782340"),
        S = s("138667");
    let F = (e, t) => (0, r.jsx)(_.CategoryColumn, {
        columns: e
    }, t);
    class v extends n.PureComponent {
        componentDidMount() {
            0 === this.props.trendingCategories.length && (0, d.fetchTrending)()
        }
        getData() {
            return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
        }
        renderCategoryExtras(e) {
            let {
                name: t,
                icon: s,
                type: l
            } = e;
            return (0, r.jsxs)(n.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: l === R.GIFPickerResultTypes.FAVORITES ? S.categoryFadeBlurple : S.categoryFade
                }), (0, r.jsxs)("div", {
                    className: S.categoryText,
                    children: [null != s ? (0, r.jsx)(s, {
                        className: S.categoryIcon
                    }) : null, (0, r.jsx)("span", {
                        className: S.categoryName,
                        children: t
                    })]
                })]
            })
        }
        render() {
            return (0, r.jsx)(h.default, {
                getItemGrid: this.getItemGrid,
                getCoordsMap: this.getCoordsMap,
                onFocus: this.handleFocus,
                onSelect: this.handleSelect,
                children: (0, r.jsx)(g.default, {
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
                    let s = i.sample(i.values(e));
                    return {
                        type: R.GIFPickerResultTypes.FAVORITES,
                        name: y.default.Messages.CATEGORY_FAVORITE,
                        icon: p.default,
                        src: null != s ? s.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                        format: null !== (t = null == s ? void 0 : s.format) && void 0 !== t ? t : o.GIFType.IMAGE
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
                let s = t.getCoordsMap()[e];
                null != s && (t.scrollIntoViewRect({
                    start: s.top - 10,
                    end: s.top + s.height + 10
                }), this.setState({
                    focusedId: e
                }))
            }, this.handleSelect = e => {
                let {
                    onSelectItem: t
                } = this.props, s = this.getData().find(t => t.name === e);
                null != s && null != t && t(s.type, s.name)
            }, this.getItemKey = (e, t) => {
                if (e > 0) return null;
                let s = this.getData()[t];
                return null != s ? s.name : null
            }, this.memoizedData = (0, m.cachedFunction)(function(e, t) {
                let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return s ? [...t] : [e, ...t]
            }), this.renderItem = (e, t, s, n) => {
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
                return (0, r.jsx)(E.GIFPickerSearchItem, {
                    format: l.format,
                    color: u.default.unsafe_rawColors.PRIMARY_800.css,
                    src: l.src,
                    item: l,
                    index: t,
                    coords: s,
                    onClick: () => i(l.type, l.name),
                    renderExtras: this.renderCategoryExtras,
                    focused: l.name === c,
                    imagePool: a,
                    videoPool: o
                }, n)
            }, this.renderContent = (e, t, s) => {
                let {
                    trendingCategories: n
                } = this.props;
                return 0 === n.length ? (0, r.jsx)(_.ResultsLoader, {
                    columns: e,
                    width: t,
                    renderColumn: F
                }) : (0, r.jsx)(c.MasonryList, {
                    ref: this._masonryRef,
                    fade: !0,
                    className: S.container,
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
            s = (0, I.useFavoriteGIFs)(),
            n = (0, E.useElementPools)();
        return (0, r.jsx)(v, {
            ...e,
            ...n,
            trendingCategories: t,
            favorites: s
        })
    }
}