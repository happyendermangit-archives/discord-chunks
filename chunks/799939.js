function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return D
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("340310"),
        s = n("447515"),
        l = n("784184"),
        c = n("665471"),
        f = n("633398"),
        d = n("379945"),
        _ = n("995254"),
        E = n("943959"),
        p = n("953801"),
        m = n("492142"),
        y = n("338105"),
        I = n("457477"),
        h = n("281767"),
        O = n("941504"),
        T = n("423426");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function N(e, t) {
        return (N = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function R(e) {
        return function(e) {
            if (Array.isArray(e)) return S(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var C = function(e, t) {
            return r.createElement(y.CategoryColumn, {
                key: t,
                columns: e
            })
        },
        P = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && N(e, t)
            }(S, e);
            var t, n, o, a, d, p = (t = S, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = b(t);
                if (n) {
                    var a = b(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : v(e)
            });

            function S() {
                var e, t, n, o;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, S), e = p.apply(this, arguments), A(v(e), "_masonryRef", r.createRef()), A(v(e), "state", {
                    favoritesTile: (t = e.props.favorites, o = i().sample(i().values(t)), {
                        type: h.GIFPickerResultTypes.FAVORITES,
                        name: O.default.Messages.CATEGORY_FAVORITE,
                        icon: _.default,
                        src: null != o ? o.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
                        format: null !== (n = null == o ? void 0 : o.format) && void 0 !== n ? n : u.GIFType.IMAGE
                    }),
                    selectedIndex: {
                        column: 0,
                        row: 0
                    },
                    focusedId: null
                }), A(v(e), "handleFocus", function(t) {
                    var n = e._masonryRef.current;
                    if (null != n) {
                        var r = n.getCoordsMap()[t];
                        null != r && (n.scrollIntoViewRect({
                            start: r.top - 10,
                            end: r.top + r.height + 10
                        }), e.setState({
                            focusedId: t
                        }))
                    }
                }), A(v(e), "handleSelect", function(t) {
                    var n = e.props.onSelectItem,
                        r = e.getData().find(function(e) {
                            return e.name === t
                        });
                    null != r && null != n && n(r.type, r.name)
                }), A(v(e), "getItemKey", function(t, n) {
                    if (t > 0) return null;
                    var r = e.getData()[n];
                    return null != r ? r.name : null
                }), A(v(e), "memoizedData", (0, E.cachedFunction)(function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? R(t) : [e].concat(R(t))
                })), A(v(e), "renderItem", function(t, n, o, i) {
                    if (t > 0) return null;
                    var a = e.getData()[n];
                    if (null != a) {
                        var u = e.props,
                            l = u.onSelectItem,
                            c = u.imagePool,
                            f = u.videoPool,
                            d = e.state.focusedId;
                        return r.createElement(I.GIFPickerSearchItem, {
                            key: i,
                            format: a.format,
                            color: s.default.unsafe_rawColors.PRIMARY_800.css,
                            src: a.src,
                            item: a,
                            index: n,
                            coords: o,
                            onClick: function() {
                                return l(a.type, a.name)
                            },
                            renderExtras: e.renderCategoryExtras,
                            focused: a.name === d,
                            imagePool: c,
                            videoPool: f
                        })
                    }
                }), A(v(e), "renderContent", function(t, n, o) {
                    return 0 === e.props.trendingCategories.length ? r.createElement(y.ResultsLoader, {
                        columns: t,
                        width: n,
                        renderColumn: C
                    }) : r.createElement(l.MasonryList, {
                        ref: e._masonryRef,
                        fade: !0,
                        className: T.container,
                        itemGutter: 12,
                        getItemKey: e.getItemKey,
                        columns: t,
                        getItemHeight: function() {
                            return 110
                        },
                        renderItem: e.renderItem,
                        sections: [e.getData().length],
                        chunkSize: 50
                    })
                }), A(v(e), "getItemGrid", function() {
                    var t = e._masonryRef.current;
                    return null != t ? t.getItemGrid() : []
                }), A(v(e), "getCoordsMap", function() {
                    var t = e._masonryRef.current;
                    return null != t ? t.getCoordsMap() : {}
                }), e
            }
            return o = S, a = [{
                key: "componentDidMount",
                value: function() {
                    0 === this.props.trendingCategories.length && (0, c.fetchTrending)()
                }
            }, {
                key: "getData",
                value: function() {
                    return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
                }
            }, {
                key: "renderCategoryExtras",
                value: function(e) {
                    var t = e.name,
                        n = e.icon,
                        o = e.type;
                    return r.createElement(r.Fragment, null, r.createElement("div", {
                        className: o === h.GIFPickerResultTypes.FAVORITES ? T.categoryFadeBlurple : T.categoryFade
                    }), r.createElement("div", {
                        className: T.categoryText
                    }, null != n ? r.createElement(n, {
                        className: T.categoryIcon
                    }) : null, r.createElement("span", {
                        className: T.categoryName
                    }, t)))
                }
            }, {
                key: "render",
                value: function() {
                    return r.createElement(f.default, {
                        getItemGrid: this.getItemGrid,
                        getCoordsMap: this.getCoordsMap,
                        onFocus: this.handleFocus,
                        onSelect: this.handleSelect
                    }, r.createElement(m.default, {
                        desiredItemWidth: 200,
                        maxColumns: 6
                    }, this.renderContent))
                }
            }], g(o.prototype, a), d && g(o, d), S
        }(r.PureComponent);

    function D(e) {
        var t, n, o = (0, a.useStateFromStores)([d.default], function() {
                return d.default.getTrendingCategories()
            }),
            i = (0, p.useFavoriteGIFs)(),
            u = (0, I.useElementPools)();
        return r.createElement(P, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    A(e, t, n[t])
                })
            }
            return e
        }({}, e, u), n = (n = {
            trendingCategories: o,
            favorites: i
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }
}