function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GIFPickerSearchItem: function() {
            return H
        },
        useElementPools: function() {
            return Y
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("215402"),
        l = n("340310"),
        c = n("447515"),
        f = n("784184"),
        d = n("665471"),
        _ = n("633398"),
        E = n("751007"),
        p = n("813970"),
        m = n("720988"),
        y = n("995254"),
        I = n("492142"),
        h = n("281767"),
        O = n("941504"),
        T = n("533348");

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
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function A(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function b(e, t, n) {
        return t && A(e.prototype, t), n && A(e, n), e
    }

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function R(e) {
        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function C(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && D(e, t)
    }

    function P(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                N(e, t, n[t])
            })
        }
        return e
    }

    function D(e, t) {
        return (D = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function L(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function M(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = R(e);
            if (t) {
                var a = R(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : v(n)
        }
    }
    var U = [c.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, c.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
        w = 1220,
        k = Array.from({
            length: 16
        }).map(function(e, t) {
            return {
                id: "".concat(t),
                height: Math.floor(100 * Math.random()) + 120
            }
        });

    function G(e) {
        var t;
        return null !== (t = e.id) && void 0 !== t ? t : e.src
    }

    function B(e, t) {
        var n = k[t];
        return null == n ? 0 : n.height
    }

    function j(e, t, n, o) {
        if (!(e > 0)) return null == k[t] ? null : r.createElement("div", {
            key: o,
            className: T.placeholder,
            style: P({
                animationDelay: "".concat(75 * t, "ms")
            }, n)
        })
    }

    function F(e, t) {
        var n, r;
        return e > 0 ? "" : null !== (r = null === (n = k[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : ""
    }

    function V(e) {
        return e === l.GIFType.VIDEO
    }
    var H = function(e) {
            C(n, e);
            var t = M(n);

            function n(e) {
                g(this, n), N(v(r = t.call(this, e)), "ref", null), N(v(r), "_video", null), N(v(r), "_image", null), N(v(r), "_mounted", !0), N(v(r), "handleCanPlay", function() {
                    r._mounted && r.setState({
                        loaded: !0
                    })
                }), N(v(r), "handleClick", function() {
                    var e = r.props,
                        t = e.onClick,
                        n = e.item,
                        o = e.index;
                    null != t && t(n, o)
                });
                var r, o = r.props,
                    i = o.format,
                    a = o.color,
                    s = o.imagePool;
                return r.state = {
                    color: null == a ? u().sample(U) : a,
                    loaded: !1
                }, !V(i) && (r._image = s.getElement(), r._image.onload = function() {
                    return r.setState({
                        loaded: !0
                    })
                }, r._image.src = e.src), r
            }
            return b(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.format,
                        n = e.src,
                        r = e.coords,
                        o = r.width,
                        i = r.height,
                        a = e.videoPool,
                        u = this.ref;
                    if (t === l.GIFType.VIDEO && null != u) {
                        var s = a.getElement();
                        s.oncanplay = this.handleCanPlay, s.src = n, s.width = o, s.height = i, u.appendChild(s), this._video = s
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.coords,
                        n = t.width,
                        r = t.height;
                    null != this._video && (e.coords.width !== n || e.coords.height !== r) && (this._video.width = n, this._video.height = r)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._mounted = !1;
                    var e = this._image,
                        t = this._video,
                        n = this.props,
                        r = n.imagePool,
                        o = n.videoPool;
                    null != e && (this._image = null, r.poolElement(e)), null != t && (this._video = null, o.poolElement(t))
                }
            }, {
                key: "renderGIF",
                value: function() {
                    var e = this.props,
                        t = e.src,
                        n = e.coords,
                        o = n.width,
                        i = n.height;
                    return this.state.loaded ? r.createElement("img", {
                        src: t,
                        width: o,
                        height: i,
                        className: T.gif,
                        alt: ""
                    }) : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.item,
                        o = t.renderExtras,
                        a = t.format,
                        u = t.coords,
                        s = t.focused,
                        l = this.state,
                        c = l.color,
                        d = l.loaded;
                    return r.createElement(f.Clickable, {
                        tabIndex: -1,
                        innerRef: function(t) {
                            e.ref = t
                        },
                        className: i()(T.result, N({}, T.focused, s)),
                        onClick: this.handleClick,
                        style: P({
                            backgroundColor: d ? void 0 : c
                        }, u)
                    }, V(a) ? null : this.renderGIF(), null != o ? o(n) : null)
                }
            }]), n
        }(r.PureComponent),
        x = function(e) {
            C(n, e);
            var t = M(n);

            function n() {
                var e;
                return g(this, n), e = t.apply(this, arguments), N(v(e), "_masonryRef", r.createRef()), N(v(e), "prevResultQuery", null), N(v(e), "state", {
                    focusedId: null
                }), N(v(e), "handleFocus", function(t) {
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
                }), N(v(e), "handleSelect", function(t) {
                    var n, r = e.props.data,
                        o = r.findIndex(function(e) {
                            return G(e) === t
                        }); - 1 !== o && (n = r[o]), null != n && e.selectItem(n, o)
                }), N(v(e), "handleClickItem", function(t, n) {
                    e.selectItem(t, n)
                }), N(v(e), "handleScroll", function() {
                    var t = e.props.resultQuery,
                        n = e._masonryRef.current;
                    if (null != n) {
                        var r = n.getScrollerState(),
                            o = r.scrollTop;
                        r.scrollHeight - o <= w && (t !== e.prevResultQuery && (0, d.fetchSuggestions)(t), e.prevResultQuery = t)
                    }
                }), N(v(e), "renderItem", function(t, n, o, i) {
                    if (t > 0) return null;
                    var a = e.state.focusedId,
                        u = e.props.data[n];
                    return null == u ? null : r.createElement(H, {
                        key: i,
                        item: u,
                        index: n,
                        format: u.format,
                        src: u.src,
                        coords: o,
                        onClick: e.handleClickItem,
                        renderExtras: function() {
                            return r.createElement(m.default, P({
                                className: T.favButton
                            }, u))
                        },
                        focused: G(u) === a,
                        imagePool: e.props.imagePool,
                        videoPool: e.props.videoPool
                    })
                }), N(v(e), "getItemHeight", function(t, n, r) {
                    if (t > 0) return 0;
                    var o = e.props.data[n];
                    return null == o ? 0 : o.height / o.width * r
                }), N(v(e), "getItemKey", function(t, n) {
                    if (t > 0) return null;
                    var r, o = e.props.data[n];
                    return null != o ? null !== (r = o.id) && void 0 !== r ? r : o.src : null
                }), N(v(e), "renderSection", function(t, n, o) {
                    var i = e.props,
                        a = i.onSelectSuggestion,
                        u = i.suggestions;
                    return 1 === t ? r.createElement("div", {
                        className: T.endContainer,
                        style: n,
                        key: o
                    }, u.length > 0 ? r.createElement(r.Fragment, null, r.createElement("div", {
                        className: T.endText
                    }, O.default.Messages.GIF_PICKER_RELATED_SEARCH), r.createElement("div", {
                        className: T.searchSuggestions
                    }, u.map(function(e) {
                        return r.createElement(f.Button, {
                            key: e,
                            look: f.Button.Looks.OUTLINED,
                            color: f.Button.Colors.PRIMARY,
                            size: f.Button.Sizes.SMALL,
                            className: T.searchSuggestion,
                            onClick: function() {
                                a(e)
                            }
                        }, e)
                    }))) : null) : null
                }), N(v(e), "renderContent", function(t, n, o) {
                    var i = e.props,
                        a = i.data,
                        u = i.resultQuery,
                        s = i.query,
                        l = i.resultType;
                    return 0 === a.length && (u !== s || l === h.GIFPickerResultTypes.TRENDING_GIFS) ? r.createElement(f.MasonryList, {
                        key: u,
                        fade: !0,
                        className: T.results,
                        sections: [k.length],
                        columns: t,
                        itemGutter: 12,
                        getItemKey: F,
                        getItemHeight: B,
                        renderItem: j,
                        chunkSize: 128
                    }) : r.createElement(f.MasonryList, {
                        key: "".concat(u, "-").concat(null != l ? l : ""),
                        ref: e._masonryRef,
                        fade: !0,
                        itemGutter: 12,
                        className: T.results,
                        columns: t,
                        sections: [a.length, 0],
                        getItemKey: e.getItemKey,
                        getItemHeight: e.getItemHeight,
                        renderItem: e.renderItem,
                        getSectionHeight: e.getSectionHeight,
                        renderSection: e.renderSection,
                        onScroll: e.handleScroll,
                        chunkSize: 128
                    })
                }), N(v(e), "getItemGrid", function() {
                    var t = e._masonryRef.current;
                    return null != t ? t.getItemGrid() : []
                }), N(v(e), "getCoordsMap", function() {
                    var t = e._masonryRef.current;
                    return null != t ? t.getCoordsMap() : {}
                }), e
            }
            return b(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.resultType,
                        n = e.data;
                    t === h.GIFPickerResultTypes.FAVORITES && ((0, d.trackSearchStart)(h.GIFPickerResultTypes.FAVORITES), (0, d.trackSearchResultViewed)(n, h.GIFPickerResultTypes.FAVORITES, {
                        limit: null
                    }))
                }
            }, {
                key: "selectItem",
                value: function(e, t) {
                    var n = this.props,
                        r = n.onSelectGIF,
                        o = n.resultType,
                        i = n.data,
                        a = n.resultQuery;
                    null != r && r(e), (0, d.trackSelectGIF)({
                        type: o,
                        index: t,
                        offset: this.props.searchOffset,
                        limit: this.props.searchLimit,
                        results: i,
                        totalResults: this.props.searchTotalResults,
                        query: a,
                        gifId: e.id
                    })
                }
            }, {
                key: "getSectionHeight",
                value: function(e) {
                    return 1 === e ? 220 : 0
                }
            }, {
                key: "renderEmptyFavorite",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return r.createElement("div", {
                        className: T.emptyHint
                    }, null != e ? r.createElement("div", {
                        className: T.emptyHintCard
                    }, t ? r.createElement(y.default, {
                        className: T.emptyHintFavorite
                    }) : null, r.createElement("div", {
                        className: T.emptyHintText
                    }, e)) : r.createElement("div", {
                        className: T.emptyHintSpacer
                    }))
                }
            }, {
                key: "renderEmptyFavorites",
                value: function() {
                    var e = this;
                    return r.createElement(f.Scroller, {
                        className: T.results,
                        fade: !0
                    }, r.createElement("div", {
                        className: T.emptyHints
                    }, this.renderEmptyFavorite(O.default.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(O.default.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(O.default.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({
                        length: 15
                    }).map(function(t, n) {
                        return r.createElement(r.Fragment, {
                            key: n
                        }, e.renderEmptyFavorite())
                    }), this.renderEmptyFavorite(O.default.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({
                        length: 16
                    }).map(function(t, n) {
                        return r.createElement(r.Fragment, {
                            key: n
                        }, e.renderEmptyFavorite())
                    }), this.renderEmptyFavorite(O.default.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.data,
                        n = e.resultQuery,
                        o = e.query,
                        i = e.resultType;
                    return 0 === t.length && n === o && i !== h.GIFPickerResultTypes.TRENDING_GIFS ? i === h.GIFPickerResultTypes.FAVORITES ? this.renderEmptyFavorites() : r.createElement(E.default, {
                        message: O.default.Messages.NO_GIF_SEARCH_RESULTS,
                        className: T.noResults
                    }) : r.createElement(_.default, {
                        key: n,
                        getItemGrid: this.getItemGrid,
                        getCoordsMap: this.getCoordsMap,
                        onFocus: this.handleFocus,
                        onSelect: this.handleSelect
                    }, r.createElement(I.default, {
                        desiredItemWidth: 200,
                        maxColumns: 8
                    }, this.renderContent))
                }
            }]), n
        }(r.PureComponent);

    function Y() {
        var e = r.useContext(p.default).renderWindow.document;
        return {
            imagePool: L(r.useState(function() {
                return new s.ElementPool(function() {
                    return e.createElement("img")
                }, function(e) {
                    e.onload = null, e.src = ""
                })
            }), 1)[0],
            videoPool: L(r.useState(function() {
                return new s.ElementPool(function() {
                    var t = e.createElement("video");
                    return t.className = T.gif, t.autoplay = !0, t.loop = !0, t.muted = !0, t.preload = "auto", t.controls = !1, t
                }, function(e) {
                    e.src = "", e.oncanplay = null;
                    var t = e.parentNode;
                    null != t && t.removeChild(e)
                })
            }), 1)[0]
        }
    }
    t.default = function(e) {
        var t = Y();
        return r.createElement(x, P({}, e, t))
    }
}