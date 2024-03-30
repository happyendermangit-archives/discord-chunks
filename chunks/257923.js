function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("629815"),
        l = n("665471"),
        c = n("251384"),
        f = n("379945"),
        d = n("143953"),
        _ = n("567687"),
        E = n("298398"),
        p = n("953801"),
        m = n("799939"),
        y = n("457477"),
        I = n("281767"),
        h = n("644037"),
        O = n("941504"),
        T = n("39234");

    function S(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var N = function(e) {
            return e.stopPropagation()
        },
        R = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && b(e, t)
            }(R, e);
            var t, n, o, a, f, p = (t = R, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = A(t);
                if (n) {
                    var a = A(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : S(e)
            });

            function R() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, R), e = p.apply(this, arguments), g(S(e), "state", {
                    resultType: null
                }), g(S(e), "searchBarRef", r.createRef()), g(S(e), "backToFrontPage", function(t) {
                    var n = e.state.resultType;
                    t.keyCode === I.KeyboardKeys.ESCAPE && null != n && (t.stopPropagation(), t.preventDefault(), e.handleClearQuery())
                }), g(S(e), "handleChangeQuery", function(t) {
                    (0, c.setSearchQuery)(t), e.search(t, I.GIFPickerResultTypes.SEARCH)
                }), g(S(e), "handleSelectSuggestion", function(t) {
                    (0, c.setSearchQuery)(""), l.resetSearch(), e.search(t, I.GIFPickerResultTypes.SEARCH_SUGGESTION, !0)
                }), g(S(e), "handleClearQuery", function() {
                    var t = e.searchBarRef.current;
                    (0, c.setSearchQuery)(""), l.resetSearch(), e.setState({
                        resultType: null
                    }), null != t && t.focus()
                }), g(S(e), "handleSelectGIF", function(t) {
                    var n = e.props.onSelectGIF;
                    null != n && n(t)
                }), g(S(e), "handleSelectItem", function(t, n) {
                    var r = e.searchBarRef.current;
                    switch (t) {
                        case I.GIFPickerResultTypes.TRENDING_CATEGORY:
                            l.search(n, I.GIFPickerResultTypes.TRENDING_CATEGORY, !0), null != r && r.focus();
                            break;
                        case I.GIFPickerResultTypes.TRENDING_GIFS:
                            l.fetchTrendingGIFs()
                    }
                    e.setState({
                        resultType: t
                    })
                }), e
            }
            return o = R, a = [{
                key: "componentDidMount",
                value: function() {
                    l.initializeSearch(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, I.GIFPickerResultTypes.SEARCH)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    s.default.wait(function() {
                        return l.resetSearch()
                    }), document.removeEventListener("keydown", this.backToFrontPage)
                }
            }, {
                key: "search",
                value: function(e, t, n) {
                    l.search(e, t, n), "" === e ? this.setState({
                        resultType: null
                    }) : this.state.resultType !== I.GIFPickerResultTypes.SEARCH && this.setState({
                        resultType: I.GIFPickerResultTypes.SEARCH
                    })
                }
            }, {
                key: "renderHeaderContent",
                value: function() {
                    var e = this.props.query;
                    switch (this.state.resultType) {
                        case I.GIFPickerResultTypes.FAVORITES:
                            return r.createElement(u.FormTitle, {
                                tag: "h5",
                                className: T.searchHeader
                            }, O.default.Messages.CATEGORY_FAVORITE);
                        case I.GIFPickerResultTypes.TRENDING_GIFS:
                            return r.createElement(u.FormTitle, {
                                tag: "h5",
                                className: T.searchHeader
                            }, O.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS);
                        default:
                            return r.createElement(_.default, {
                                className: T.searchBar,
                                size: _.default.Sizes.MEDIUM,
                                query: e,
                                onChange: this.handleChangeQuery,
                                onClear: this.handleClearQuery,
                                placeholder: O.default.Messages.SEARCH_TENOR,
                                "aria-label": O.default.Messages.SEARCH_TENOR,
                                ref: this.searchBarRef,
                                autoFocus: !0
                            })
                    }
                }
            }, {
                key: "renderHeader",
                value: function() {
                    var e = this.state.resultType,
                        t = null;
                    return null != e && (t = r.createElement(u.Clickable, {
                        onClick: this.handleClearQuery,
                        className: T.backButton,
                        "aria-label": O.default.Messages.BACK
                    }, r.createElement(E.default, {
                        title: O.default.Messages.BACK
                    }))), r.createElement(d.default, {
                        align: d.default.Align.CENTER
                    }, t, this.renderHeaderContent())
                }
            }, {
                key: "renderContent",
                value: function() {
                    var e = this.props,
                        t = e.resultItems,
                        n = e.resultQuery,
                        o = e.query,
                        i = e.favorites,
                        a = e.searchOffset,
                        u = e.searchLimit,
                        s = e.searchTotalResults,
                        l = e.suggestions,
                        c = e.hideFavorites,
                        f = this.state.resultType;
                    return null == f ? r.createElement(m.default, {
                        hideFavoritesTile: c,
                        onSelectItem: this.handleSelectItem
                    }) : r.createElement(y.default, {
                        data: f === I.GIFPickerResultTypes.FAVORITES ? i : t,
                        onSelectGIF: this.handleSelectGIF,
                        resultType: f,
                        resultQuery: n,
                        query: o,
                        searchOffset: a,
                        searchLimit: u,
                        searchTotalResults: s,
                        suggestions: l,
                        onSelectSuggestion: this.handleSelectSuggestion
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.forwardedRef;
                    return r.createElement("div", {
                        id: h.GIF_PICKER_TAB_PANEL_ID,
                        role: "tabpanel",
                        "aria-labelledby": h.GIF_PICKER_TAB_ID,
                        className: i()(T.container, t),
                        onClick: N,
                        ref: n
                    }, r.createElement("div", {
                        className: T.header
                    }, this.renderHeader()), r.createElement("div", {
                        className: T.content
                    }, this.renderContent()))
                }
            }], v(o.prototype, a), f && v(o, f), R
        }(r.PureComponent);
    t.default = r.forwardRef(function(e, t) {
        !e.persistSearch && (0, c.setSearchQuery)("");
        var n, o, i = (0, a.useStateFromStoresObject)([f.default], function() {
                return {
                    query: f.default.getQuery(),
                    resultQuery: f.default.getResultQuery(),
                    resultItems: f.default.getResultItems(),
                    suggestions: f.default.getSuggestions()
                }
            }),
            u = i.query,
            s = i.resultQuery,
            l = i.resultItems,
            d = i.suggestions,
            _ = (0, c.useExpressionPickerStore)(function(e) {
                return e.searchQuery
            }),
            E = (0, p.useSortedFavoriteGIFs)();
        return r.createElement(R, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    g(e, t, n[t])
                })
            }
            return e
        }({}, e), o = (o = {
            forwardedRef: t,
            query: null != _ && "" !== _ ? _ : u,
            resultQuery: s,
            resultItems: l,
            suggestions: d,
            favorites: E,
            searchOffset: 0,
            searchTotalResults: f.default.getResultItems().length,
            searchLimit: null
        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(o)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n))
    })
}