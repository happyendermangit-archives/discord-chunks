function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return T
        }
    }), r("222007");
    var s = r("37983"),
        n = r("884691"),
        l = r("414456"),
        i = r.n(l),
        a = r("446674"),
        o = r("77078"),
        u = r("913144"),
        c = r("960476"),
        d = r("538282"),
        h = r("510849"),
        f = r("145131"),
        m = r("810567"),
        p = r("531470"),
        I = r("140331"),
        g = r("588155"),
        _ = r("762518"),
        E = r("49111"),
        R = r("115279"),
        S = r("782340"),
        y = r("901137");
    let v = e => e.stopPropagation();
    class F extends n.PureComponent {
        componentDidMount() {
            c.initializeSearch(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, E.GIFPickerResultTypes.SEARCH)
        }
        componentWillUnmount() {
            u.default.wait(() => c.resetSearch()), document.removeEventListener("keydown", this.backToFrontPage)
        }
        search(e, t, r) {
            c.search(e, t, r), "" === e ? this.setState({
                resultType: null
            }) : this.state.resultType !== E.GIFPickerResultTypes.SEARCH && this.setState({
                resultType: E.GIFPickerResultTypes.SEARCH
            })
        }
        renderHeaderContent() {
            let {
                query: e
            } = this.props, {
                resultType: t
            } = this.state;
            switch (t) {
                case E.GIFPickerResultTypes.FAVORITES:
                    return (0, s.jsx)(o.FormTitle, {
                        tag: "h5",
                        className: y.searchHeader,
                        children: S.default.Messages.CATEGORY_FAVORITE
                    });
                case E.GIFPickerResultTypes.TRENDING_GIFS:
                    return (0, s.jsx)(o.FormTitle, {
                        tag: "h5",
                        className: y.searchHeader,
                        children: S.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
                    });
                default:
                    return (0, s.jsx)(m.default, {
                        className: y.searchBar,
                        size: m.default.Sizes.MEDIUM,
                        query: e,
                        onChange: this.handleChangeQuery,
                        onClear: this.handleClearQuery,
                        placeholder: S.default.Messages.SEARCH_TENOR,
                        "aria-label": S.default.Messages.SEARCH_TENOR,
                        ref: this.searchBarRef,
                        autoFocus: !0
                    })
            }
        }
        renderHeader() {
            let {
                resultType: e
            } = this.state, t = null;
            return null != e && (t = (0, s.jsx)(o.Clickable, {
                onClick: this.handleClearQuery,
                className: y.backButton,
                "aria-label": S.default.Messages.BACK,
                children: (0, s.jsx)(p.default, {
                    title: S.default.Messages.BACK
                })
            })), (0, s.jsxs)(f.default, {
                align: f.default.Align.CENTER,
                children: [t, this.renderHeaderContent()]
            })
        }
        renderContent() {
            let {
                resultItems: e,
                resultQuery: t,
                query: r,
                favorites: n,
                searchOffset: l,
                searchLimit: i,
                searchTotalResults: a,
                suggestions: o,
                hideFavorites: u
            } = this.props, {
                resultType: c
            } = this.state;
            return null == c ? (0, s.jsx)(g.default, {
                hideFavoritesTile: u,
                onSelectItem: this.handleSelectItem
            }) : (0, s.jsx)(_.default, {
                data: c === E.GIFPickerResultTypes.FAVORITES ? n : e,
                onSelectGIF: this.handleSelectGIF,
                resultType: c,
                resultQuery: t,
                query: r,
                searchOffset: l,
                searchLimit: i,
                searchTotalResults: a,
                suggestions: o,
                onSelectSuggestion: this.handleSelectSuggestion
            })
        }
        render() {
            let {
                className: e,
                forwardedRef: t
            } = this.props;
            return (0, s.jsxs)("div", {
                id: R.GIF_PICKER_TAB_PANEL_ID,
                role: "tabpanel",
                "aria-labelledby": R.GIF_PICKER_TAB_ID,
                className: i(y.container, e),
                onClick: v,
                ref: t,
                children: [(0, s.jsx)("div", {
                    className: y.header,
                    children: this.renderHeader()
                }), (0, s.jsx)("div", {
                    className: y.content,
                    children: this.renderContent()
                })]
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                resultType: null
            }, this.searchBarRef = n.createRef(), this.backToFrontPage = e => {
                let {
                    resultType: t
                } = this.state;
                e.keyCode === E.KeyboardKeys.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
            }, this.handleChangeQuery = e => {
                (0, d.setSearchQuery)(e), this.search(e, E.GIFPickerResultTypes.SEARCH)
            }, this.handleSelectSuggestion = e => {
                (0, d.setSearchQuery)(""), c.resetSearch(), this.search(e, E.GIFPickerResultTypes.SEARCH_SUGGESTION, !0)
            }, this.handleClearQuery = () => {
                let {
                    current: e
                } = this.searchBarRef;
                (0, d.setSearchQuery)(""), c.resetSearch(), this.setState({
                    resultType: null
                }), null != e && e.focus()
            }, this.handleSelectGIF = e => {
                let {
                    onSelectGIF: t
                } = this.props;
                null != t && t(e)
            }, this.handleSelectItem = (e, t) => {
                let {
                    current: r
                } = this.searchBarRef;
                switch (e) {
                    case E.GIFPickerResultTypes.TRENDING_CATEGORY:
                        c.search(t, E.GIFPickerResultTypes.TRENDING_CATEGORY, !0), null != r && r.focus();
                        break;
                    case E.GIFPickerResultTypes.TRENDING_GIFS:
                        c.fetchTrendingGIFs()
                }
                this.setState({
                    resultType: e
                })
            }
        }
    }
    var T = n.forwardRef((e, t) => {
        !e.persistSearch && (0, d.setSearchQuery)("");
        let {
            query: r,
            resultQuery: n,
            resultItems: l,
            suggestions: i
        } = (0, a.useStateFromStoresObject)([h.default], () => ({
            query: h.default.getQuery(),
            resultQuery: h.default.getResultQuery(),
            resultItems: h.default.getResultItems(),
            suggestions: h.default.getSuggestions()
        })), o = (0, d.useExpressionPickerStore)(e => e.searchQuery), u = (0, I.useSortedFavoriteGIFs)();
        return (0, s.jsx)(F, {
            ...e,
            forwardedRef: t,
            query: null != o && "" !== o ? o : r,
            resultQuery: n,
            resultItems: l,
            suggestions: i,
            favorites: u,
            searchOffset: 0,
            searchTotalResults: h.default.getResultItems().length,
            searchLimit: null
        })
    })
}