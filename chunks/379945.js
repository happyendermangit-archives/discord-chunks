function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("340310"),
        a = n("629815"),
        u = n("635757"),
        s = n("281767"),
        l = n("941504");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function p(e) {
        return function(e) {
            if (Array.isArray(e)) return c(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var m = {
            MP4: "mp4",
            TINYMP4: "tinymp4",
            NANOMP4: "nanomp4",
            WEBM: "webm",
            TINYWEBM: "tinywebm",
            NANOWEBM: "nanowebm"
        },
        y = {
            FIXED_HEIGHT_MP4: "fixed_height.mp4",
            FIXED_HEIGHT_SMALL_MP4: "fixed_height_small.mp4",
            FIXED_WIDTH_MP4: "fixed_width.mp4",
            FIXED_WIDTH_SMALL_MP4: "fixed_width_small.mp4",
            DOWNSIZED_SMALL_MP4: "downsized_small.mp4",
            ORIGINAL_MP4: "original.mp4"
        },
        I = m.MP4,
        h = null,
        O = "",
        T = "",
        S = [],
        v = [],
        g = [],
        A = [];

    function b(e) {
        return e.replace(/^https?:/, "")
    }
    var N = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "getAnalyticsID",
            value: function() {
                return h
            }
        }, {
            key: "getQuery",
            value: function() {
                return O
            }
        }, {
            key: "getResultQuery",
            value: function() {
                return T
            }
        }, {
            key: "getResultItems",
            value: function() {
                return S
            }
        }, {
            key: "getTrendingCategories",
            value: function() {
                return v
            }
        }, {
            key: "getSelectedFormat",
            value: function() {
                return I
            }
        }, {
            key: "getSuggestions",
            value: function() {
                return g
            }
        }, {
            key: "getTrendingSearchTerms",
            value: function() {
                return A
            }
        }], f(r.prototype, o), i && f(r, i), u
    }(o.default.Store);
    d(N, "displayName", "GIFPickerViewStore"), t.default = new N(a.default, {
        GIF_PICKER_INITIALIZE: function(e) {
            h = e.analyticsID
        },
        GIF_PICKER_QUERY: function(e) {
            "" === (O = e.query) && (T = "", S = [], g = [])
        },
        GIF_PICKER_QUERY_SUCCESS: function(e) {
            if (null != e.query && O === T) return !1;
            null != e.query && (T = e.query), S = e.items.map(function(e) {
                var t = e.width,
                    n = e.height,
                    r = e.src,
                    o = e.gif_src,
                    a = e.url,
                    u = e.id;
                return {
                    width: t,
                    height: n,
                    src: b(r),
                    gifSrc: b(o),
                    url: a,
                    id: u,
                    format: ! function(e) {
                        switch (e) {
                            case y.FIXED_HEIGHT_MP4:
                            case y.FIXED_HEIGHT_SMALL_MP4:
                            case y.FIXED_WIDTH_MP4:
                            case y.FIXED_WIDTH_SMALL_MP4:
                            case y.DOWNSIZED_SMALL_MP4:
                            case y.ORIGINAL_MP4:
                            case m.MP4:
                            case m.TINYMP4:
                            case m.NANOMP4:
                            case m.WEBM:
                            case m.TINYWEBM:
                            case m.NANOWEBM:
                                return !0;
                            default:
                                return !1
                        }
                    }(I) ? i.GIFType.IMAGE : i.GIFType.VIDEO
                }
            })
        },
        GIF_PICKER_QUERY_FAILURE: function(e) {
            var t = e.query;
            if (null == t) return !1;
            T = t, S = []
        },
        GIF_PICKER_TRENDING_FETCH_SUCCESS: function(e) {
            var t = e.trendingCategories;
            v = p(null != e.trendingGIFPreview ? [{
                type: s.GIFPickerResultTypes.TRENDING_GIFS,
                icon: u.default,
                name: l.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                src: b(e.trendingGIFPreview.src),
                format: i.GIFType.IMAGE
            }] : []).concat(p(t.map(function(e) {
                var t, n;
                return t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            d(e, t, n[t])
                        })
                    }
                    return e
                }({}, e), n = (n = {
                    src: b(e.src),
                    type: s.GIFPickerResultTypes.TRENDING_CATEGORY,
                    format: i.GIFType.VIDEO
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t
            })))
        },
        GIF_PICKER_SUGGESTIONS_SUCCESS: function(e) {
            g = e.items
        },
        GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function(e) {
            A = e.items
        }
    })
}