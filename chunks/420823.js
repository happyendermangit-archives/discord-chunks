function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createInitialState: function() {
            return p
        },
        default: function() {
            return m
        }
    });
    var r = n("836560"),
        o = n("503113"),
        i = n("531759"),
        a = n("53867"),
        u = n("209610"),
        s = n("960202");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function p() {
        return {
            query: null,
            selectedIndex: null,
            isVisible: !1,
            didInitialQuery: !1
        }
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(h, e);
        var t, n, r, m, y, I = (t = h, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : l(e)
        });

        function h(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), f(l(t = I.call(this)), "props", void 0), f(l(t), "state", void 0), t.props = e, t.state = p(), t
        }
        return r = h, m = [{
            key: "updateProps",
            value: function(e) {
                var t, n, r = this.props.focused !== e.focused,
                    o = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
                    i = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
                if (this.props = e, o || i) {
                    if (this.updateResults(i, o), !this.state.didInitialQuery) {
                        ;
                        this.state = (t = _({}, this.state), n = (n = {
                            didInitialQuery: !0
                        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }), t)
                    }
                } else if (r) {
                    var a = this.state.query;
                    this.setState({
                        isVisible: null != a && this.shouldShow(a.resultCount, a.isLoading, a.typeInfo)
                    })
                }
            }
        }, {
            key: "setSelectedIndex",
            value: function(e) {
                this.setState({
                    selectedIndex: e
                })
            }
        }, {
            key: "onTabOrEnter",
            value: function(e) {
                if (!this.state.isVisible) return !1;
                if (null == this.state.selectedIndex) {
                    var t, n = null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo.focusMode;
                    return !e && (n === u.FocusMode.MANUAL || n === u.FocusMode.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0)
                }
                return this.selectResult(this.state.selectedIndex, e, !0)
            }
        }, {
            key: "onMoveSelection",
            value: function(e) {
                var t;
                if (!this.state.isVisible) return !1;
                if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null === (t = this.state.query) || void 0 === t ? void 0 : t.type) === u.AutocompleteOptionTypes.COMMANDS) {
                    var n, r = null === (n = this.state.query.results.commands) || void 0 === n ? void 0 : n[this.state.selectedIndex];
                    null != r && o.setPreferredCommandId(this.props.channel.id, r.id)
                }
                return !0
            }
        }, {
            key: "onMaybeShowAutocomplete",
            value: function() {
                this.emit("update")
            }
        }, {
            key: "onHideAutocomplete",
            value: function() {
                null != this.state.query && this.setState({
                    isVisible: !1
                })
            }
        }, {
            key: "onResultHover",
            value: function(e) {
                this.props.navigator.setFocus(null), this.setSelectedIndex(null)
            }
        }, {
            key: "onResultClick",
            value: function(e) {
                this.selectResult(e, !0)
            }
        }, {
            key: "clearQuery",
            value: function() {
                this.setState({
                    query: null,
                    isVisible: !1,
                    selectedIndex: null
                })
            }
        }, {
            key: "queryResults",
            value: function() {
                this.updateResults()
            }
        }, {
            key: "isVisible",
            value: function() {
                return this.state.isVisible
            }
        }, {
            key: "updateResults",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null != this.props.editorRef.current) {
                    var n = (0, s.getOptions)(this.props),
                        r = (0, s.findMatchingAutocompleteType)({
                            channel: this.props.channel,
                            guild: this.props.guild,
                            options: n,
                            currentWord: this.props.currentWord,
                            currentWordIsAtStart: this.props.currentWordIsAtStart,
                            textValue: this.props.textValue,
                            optionText: this.props.optionText
                        }),
                        o = n.commands !== u.CommandMode.DISABLED ? (0, s.findCommandOptionAutocompleteType)(this.props.activeCommandOption, this.props.currentWord) : null;
                    if (null == r && null != o) r = o;
                    else if (null == r || null != o && r.type !== o.type) {
                        this.clearQuery();
                        return
                    }
                    var l = r.type,
                        c = r.typeInfo,
                        f = r.query,
                        d = t || e && ((null === (T = this.state.query) || void 0 === T ? void 0 : T.queryText) !== f || (null === (S = this.state.query) || void 0 === S ? void 0 : S.typeInfo) !== c),
                        _ = a.IncludeStickersInAutocomplete.getSetting();
                    n.allowStickers = n.allowStickers ? _ : n.allowStickers;
                    var E = c.queryResults(this.props.channel, this.props.guild, f, n, d),
                        p = E.results,
                        m = E.metadata,
                        y = 0,
                        I = !0,
                        h = !1,
                        O = void 0;
                    try {
                        for (var T, S, v, g = Object.values(p)[Symbol.iterator](); !(I = (v = g.next()).done); I = !0) {
                            var A = v.value;
                            Array.isArray(A) && (y += A.length)
                        }
                    } catch (e) {
                        h = !0, O = e
                    } finally {
                        try {
                            !I && null != g.return && g.return()
                        } finally {
                            if (h) throw O
                        }
                    }
                    var b = !0 === p.isLoading,
                        N = this.shouldShow(y, b, c),
                        R = this.state.selectedIndex;
                    !N || b ? R = null : null != R && R >= y && (R = y - 1), N && !this.state.isVisible && (0, i.trackAutocompleteOpen)(l, this.props.channel, m), this.setState({
                        query: {
                            type: l,
                            typeInfo: c,
                            queryText: f,
                            results: p,
                            resultCount: y,
                            options: n,
                            isLoading: b
                        },
                        isVisible: N,
                        selectedIndex: R
                    })
                }
            }
        }, {
            key: "shouldShow",
            value: function(e, t, n) {
                return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty)
            }
        }, {
            key: "selectResult",
            value: function(e, t, n) {
                if (!this.state.isVisible) return !1;
                var r, o, a, s = this.state.query,
                    l = s.type,
                    c = s.typeInfo,
                    f = s.results,
                    d = s.resultCount,
                    _ = s.options;
                if (e >= d) return !1;
                var E = null === (o = c.onSelect) || void 0 === o ? void 0 : o.call(c, {
                    results: f,
                    index: e,
                    type: t ? u.SelectType.SEND : u.SelectType.INSERT,
                    options: _,
                    channel: this.props.channel,
                    tabOrEnter: n,
                    queryText: null === (r = this.state.query) || void 0 === r ? void 0 : r.queryText
                });
                return null != E && (0, i.trackAutocompleteSelect)(l, null !== (a = E.type) && void 0 !== a ? a : null, this.props.channel, E.metadata), !0
            }
        }, {
            key: "setState",
            value: function(e) {
                for (var t in e)
                    if (e[t] !== this.state[t]) {
                        this.state = _({}, this.state, e), this.emit("change", this.state);
                        return
                    }
            }
        }], c(r.prototype, m), y && c(r, y), h
    }(r.EventEmitter)
}