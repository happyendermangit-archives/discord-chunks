function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("71484");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(p, e);
        var t, n, r, i, _, E = (t = p, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function p() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p), e = E.apply(this, arguments), c(s(e), "state", {
                aStreamId: null,
                aReady: !1,
                bStreamId: e.props.streamId,
                bReady: !0
            }), c(s(e), "handleReady", function() {
                e.state.aReady ? e.setState({
                    bReady: !0,
                    aStreamId: null,
                    aReady: !1
                }) : e.setState({
                    aReady: !0,
                    bStreamId: null,
                    bReady: !1
                })
            }), c(s(e), "handleDoubleClick", function(t) {
                var n = e.props,
                    r = n.onDoubleClick,
                    o = n.id;
                null == r || r(t, o)
            }), c(s(e), "handleContextMenu", function(t) {
                var n = e.props,
                    r = n.onContextMenu,
                    o = n.id;
                null == r || r(t, o)
            }), e
        }
        return r = p, i = [{
            key: "renderVideo",
            value: function(e, t) {
                var n = this.props,
                    r = n.children,
                    i = n.mirror,
                    a = n.paused,
                    s = n.component;
                if (null == e) {
                    if (null == r) return null;
                    var l = o.Children.only(r);
                    return o.cloneElement(l, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                c(e, t, n[t])
                            })
                        }
                        return e
                    }({
                        style: {
                            display: t && !i ? void 0 : "none"
                        }
                    }, l.props))
                }
                return o.createElement(s, {
                    paused: a,
                    className: u.media,
                    streamId: e,
                    onReady: t ? null : this.handleReady
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.mirror,
                    n = e.className;
                return o.createElement("div", {
                    className: a()(u.video, n, c({}, u.mirror, t)),
                    onDoubleClick: this.handleDoubleClick,
                    onContextMenu: this.handleContextMenu
                }, this.renderVideo(this.state.aStreamId, this.state.aReady), this.renderVideo(this.state.bStreamId, this.state.bReady))
            }
        }], _ = [{
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                var n = e.streamId;
                if (t.aReady) {
                    if (n !== t.aStreamId) return null == n ? {
                        bStreamId: n,
                        bReady: !0,
                        aStreamId: null,
                        aReady: !1
                    } : {
                        bStreamId: n,
                        bReady: !1
                    }
                } else if (n !== t.bStreamId) return null == n ? {
                    aStreamId: n,
                    aReady: !0,
                    bStreamId: null,
                    bReady: !1
                } : {
                    aStreamId: n,
                    aReady: !1
                };
                return null
            }
        }], i && l(r.prototype, i), _ && l(r, _), p
    }(o.PureComponent);
    c(_, "defaultProps", {
        paused: !0
    }), t.default = _
}