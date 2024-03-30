function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = {
            use_topic_dividers_in_chat: "Use summary topics as divider content in chat instead of string formatted dates.",
            highlight_redesigned_icons: "Highlight redesigned icons",
            alt_clips_1: "Use alt clip icon 1",
            alt_clips_2: "Use alt clip icon 2",
            profile_effect_debug_controls: "Shop: Scrolls through profile effects with arrow up / down. Restart with R",
            shop_disable_cache: "Shop: Disable shop cache",
            shop_include_unpublished: "Shop: Show unpublished items in the shop",
            enable_avatar_decoration_uploads: "Shop: Enable avatar decoration uploads",
            lottie_hover_multiple_loop: "Lotties - continue playing the hover animation after mouse enter",
            activity_panel_iframe_fills_container: "Activity Panel: Iframe fills container"
        },
        d = {},
        _ = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && c(e, t)
            }(_, e);
            var t, n, r, o, i, s = (t = _, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = l(t);
                if (n) {
                    var a = l(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function _() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, _), s.apply(this, arguments)
            }
            return r = _, o = [{
                key: "getUserAgnosticState",
                value: function() {
                    return {
                        toggleStates: d
                    }
                }
            }, {
                key: "initialize",
                value: function(e) {
                    for (var t in f) {
                        var n, r, o = null !== (r = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== r && r;
                        d[t] = o
                    }
                }
            }, {
                key: "get",
                value: function(e) {
                    var t;
                    return null !== (t = d[e]) && void 0 !== t && t
                }
            }, {
                key: "set",
                value: function(e, t) {
                    return d[e] = t, t
                }
            }, {
                key: "all",
                value: function() {
                    return d
                }
            }, {
                key: "allWithDescriptions",
                value: function() {
                    return Object.entries(d).map(function(e) {
                        var t, n, r = (n = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(t = e) || function(e, t) {
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
                            }(t, n) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return a(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                                }
                            }(t, n) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            o = r[0];
                        return [o, r[1], f[o]]
                    })
                }
            }], u(r.prototype, o), i && u(r, i), _
        }(o.default.DeviceSettingsStore);
    s(_, "displayName", "DevToolsDesignTogglesStore"), s(_, "persistKey", "DevToolsDesignTogglesStore"), t.default = new _(i.default, {
        DEV_TOOLS_DESIGN_TOGGLE_WEB_SET: function(e) {
            d[e.toggle] = e.value
        }
    })
}