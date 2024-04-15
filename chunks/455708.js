function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("570140"),
        d = n("68405"),
        _ = n("28546"),
        c = n("656733"),
        E = n("285952"),
        I = n("6048"),
        T = n("824717"),
        f = n("985375"),
        S = n("653235"),
        h = n("215016"),
        A = n("981631"),
        m = n("149203"),
        N = n("689938"),
        p = n("39234");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let R = e => e.stopPropagation();
    class C extends r.PureComponent {
        componentDidMount() {
            d.initializeSearch(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, A.GIFPickerResultTypes.SEARCH)
        }
        componentWillUnmount() {
            u.default.wait(() => d.resetSearch()), document.removeEventListener("keydown", this.backToFrontPage)
        }
        search(e, t, n) {
            d.search(e, t, n), "" === e ? this.setState({
                resultType: null
            }) : this.state.resultType !== A.GIFPickerResultTypes.SEARCH && this.setState({
                resultType: A.GIFPickerResultTypes.SEARCH
            })
        }
        renderHeaderContent() {
            let {
                query: e
            } = this.props, {
                resultType: t
            } = this.state;
            switch (t) {
                case A.GIFPickerResultTypes.FAVORITES:
                    return (0, i.jsx)(l.FormTitle, {
                        tag: "h5",
                        className: p.searchHeader,
                        children: N.default.Messages.CATEGORY_FAVORITE
                    });
                case A.GIFPickerResultTypes.TRENDING_GIFS:
                    return (0, i.jsx)(l.FormTitle, {
                        tag: "h5",
                        className: p.searchHeader,
                        children: N.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
                    });
                default:
                    return (0, i.jsx)(I.default, {
                        className: p.searchBar,
                        size: I.default.Sizes.MEDIUM,
                        query: e,
                        onChange: this.handleChangeQuery,
                        onClear: this.handleClearQuery,
                        placeholder: N.default.Messages.SEARCH_TENOR,
                        "aria-label": N.default.Messages.SEARCH_TENOR,
                        ref: this.searchBarRef,
                        autoFocus: !0
                    })
            }
        }
        renderHeader() {
            let {
                resultType: e
            } = this.state, t = null;
            return null != e && (t = (0, i.jsx)(l.Clickable, {
                onClick: this.handleClearQuery,
                className: p.backButton,
                "aria-label": N.default.Messages.BACK,
                children: (0, i.jsx)(T.default, {
                    title: N.default.Messages.BACK
                })
            })), (0, i.jsxs)(E.default, {
                align: E.default.Align.CENTER,
                children: [t, this.renderHeaderContent()]
            })
        }
        renderContent() {
            let {
                resultItems: e,
                resultQuery: t,
                query: n,
                favorites: r,
                searchOffset: s,
                searchLimit: a,
                searchTotalResults: o,
                suggestions: l,
                hideFavorites: u
            } = this.props, {
                resultType: d
            } = this.state;
            return null == d ? (0, i.jsx)(S.default, {
                hideFavoritesTile: u,
                onSelectItem: this.handleSelectItem
            }) : (0, i.jsx)(h.default, {
                data: d === A.GIFPickerResultTypes.FAVORITES ? r : e,
                onSelectGIF: this.handleSelectGIF,
                resultType: d,
                resultQuery: t,
                query: n,
                searchOffset: s,
                searchLimit: a,
                searchTotalResults: o,
                suggestions: l,
                onSelectSuggestion: this.handleSelectSuggestion
            })
        }
        render() {
            let {
                className: e,
                forwardedRef: t
            } = this.props;
            return (0, i.jsxs)("div", {
                id: m.GIF_PICKER_TAB_PANEL_ID,
                role: "tabpanel",
                "aria-labelledby": m.GIF_PICKER_TAB_ID,
                className: a()(p.container, e),
                onClick: R,
                ref: t,
                children: [(0, i.jsx)("div", {
                    className: p.header,
                    children: this.renderHeader()
                }), (0, i.jsx)("div", {
                    className: p.content,
                    children: this.renderContent()
                })]
            })
        }
        constructor(...e) {
            super(...e), O(this, "state", {
                resultType: null
            }), O(this, "searchBarRef", r.createRef()), O(this, "backToFrontPage", e => {
                let {
                    resultType: t
                } = this.state;
                e.keyCode === A.KeyboardKeys.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
            }), O(this, "handleChangeQuery", e => {
                (0, _.setSearchQuery)(e), this.search(e, A.GIFPickerResultTypes.SEARCH)
            }), O(this, "handleSelectSuggestion", e => {
                (0, _.setSearchQuery)(""), d.resetSearch(), this.search(e, A.GIFPickerResultTypes.SEARCH_SUGGESTION, !0)
            }), O(this, "handleClearQuery", () => {
                let {
                    current: e
                } = this.searchBarRef;
                (0, _.setSearchQuery)(""), d.resetSearch(), this.setState({
                    resultType: null
                }), null != e && e.focus()
            }), O(this, "handleSelectGIF", e => {
                let {
                    onSelectGIF: t
                } = this.props;
                null != t && t(e)
            }), O(this, "handleSelectItem", (e, t) => {
                let {
                    current: n
                } = this.searchBarRef;
                switch (e) {
                    case A.GIFPickerResultTypes.TRENDING_CATEGORY:
                        d.search(t, A.GIFPickerResultTypes.TRENDING_CATEGORY, !0), null != n && n.focus();
                        break;
                    case A.GIFPickerResultTypes.TRENDING_GIFS:
                        d.fetchTrendingGIFs()
                }
                this.setState({
                    resultType: e
                })
            })
        }
    }
    t.default = r.forwardRef((e, t) => {
        !e.persistSearch && (0, _.setSearchQuery)("");
        let {
            query: n,
            resultQuery: r,
            resultItems: s,
            suggestions: a
        } = (0, o.useStateFromStoresObject)([c.default], () => ({
            query: c.default.getQuery(),
            resultQuery: c.default.getResultQuery(),
            resultItems: c.default.getResultItems(),
            suggestions: c.default.getSuggestions()
        })), l = (0, _.useExpressionPickerStore)(e => e.searchQuery), u = (0, f.useSortedFavoriteGIFs)();
        return (0, i.jsx)(C, {
            ...e,
            forwardedRef: t,
            query: null != l && "" !== l ? l : n,
            resultQuery: r,
            resultItems: s,
            suggestions: a,
            favorites: u,
            searchOffset: 0,
            searchTotalResults: c.default.getResultItems().length,
            searchLimit: null
        })
    })
}