function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("549579"),
        s = n("503113"),
        l = n("471559"),
        c = n("443817"),
        f = n("374550"),
        d = n("65017"),
        _ = n("941055"),
        E = n("281767");

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = /(\t|\s)/,
        S = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && O(e, t)
            }(b, e);
            var t, o, S, v, g, A = (t = b, o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, n, r, i = h(t);
                if (o) {
                    var a = h(this).constructor;
                    r = Reflect.construct(i, arguments, a)
                } else r = i.apply(this, arguments);
                return e = this, (n = r) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(n) || "function" == typeof n) ? n : p(e)
            });

            function b() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, b), e = A.apply(this, arguments), I(p(e), "_ref", void 0), I(p(e), "state", {
                    nextSelection: -1
                }), I(p(e), "focus", function() {
                    var t = p(e)._ref;
                    null != t && t.focus()
                }), I(p(e), "handleSetRef", function(t) {
                    e._ref = t
                }), I(p(e), "handleKeyPress", function(t) {
                    if (t.which === E.KeyboardKeys.ENTER) {
                        if (!t.shiftKey && !e.hasOpenCodeBlock() && (!e.props.disableEnterToSubmit || t.ctrlKey)) return t.preventDefault(), e.props.onSubmit(e.props.value)
                    }
                }), I(p(e), "handleKeyDown", function(t) {
                    switch (t.which) {
                        case E.KeyboardKeys.ARROW_DOWN:
                            e.props.moveSelection(1) && t.preventDefault();
                            break;
                        case E.KeyboardKeys.N:
                            t.ctrlKey && e.props.moveSelection(1) && t.preventDefault();
                            break;
                        case E.KeyboardKeys.ARROW_UP:
                            e.props.moveSelection(-1) && t.preventDefault();
                            break;
                        case E.KeyboardKeys.P:
                            t.ctrlKey && e.props.moveSelection(-1) && t.preventDefault();
                            break;
                        case E.KeyboardKeys.TAB:
                        case E.KeyboardKeys.ENTER:
                            e.handleTabOrEnterDown(t)
                    }
                    var n = e.props.onKeyDown;
                    null == n || n(t)
                }), I(p(e), "handleKeyUp", function(t) {
                    switch (t.which) {
                        case E.KeyboardKeys.ARROW_RIGHT:
                        case E.KeyboardKeys.ARROW_LEFT:
                        case E.KeyboardKeys.HOME:
                        case E.KeyboardKeys.END:
                            e.props.maybeShowAutocomplete()
                    }
                    var n = e.props.onKeyUp;
                    null == n || n(t)
                }), I(p(e), "handleGlobalPaste", function(t) {
                    var n = t.event;
                    !e.handlePaste(n) && e.focus()
                }), I(p(e), "handlePaste", function(t) {
                    var n = e.props.onPaste(t);
                    return n && t.preventDefault(), n
                }), I(p(e), "handleClick", function() {
                    e.props.maybeShowAutocomplete()
                }), I(p(e), "handleContextMenu", function(e) {
                    if (f.isPlatformEmbedded) {
                        var t;
                        (0, u.openContextMenuLazy)(e, (t = function() {
                            var e;
                            return function(e, t) {
                                var n, r, o, i, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: u(0),
                                    throw: u(1),
                                    return: u(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function u(i) {
                                    return function(u) {
                                        return function(i) {
                                            if (n) throw TypeError("Generator is already executing.");
                                            for (; a;) try {
                                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = i;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: i[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, r = i[1], i = [0];
                                                        continue;
                                                    case 7:
                                                        i = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                            a.label = i[1];
                                                            break
                                                        }
                                                        if (6 === i[0] && a.label < o[1]) {
                                                            a.label = o[1], o = i;
                                                            break
                                                        }
                                                        if (o && a.label < o[2]) {
                                                            a.label = o[2], a.ops.push(i);
                                                            break
                                                        }
                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                i = t.call(e, a)
                                            } catch (e) {
                                                i = [6, e], r = 0
                                            } finally {
                                                n = o = 0
                                            }
                                            if (5 & i[0]) throw i[1];
                                            return {
                                                value: i[0] ? i[1] : void 0,
                                                done: !0
                                            }
                                        }([i, u])
                                    }
                                }
                            }(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, n.e("1386").then(n.bind(n, "110416"))];
                                    case 1:
                                        return e = t.sent().default, [2, function(t) {
                                            var n, o;
                                            return r.createElement(e, (n = function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        r = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                    }))), r.forEach(function(t) {
                                                        I(e, t, n[t])
                                                    })
                                                }
                                                return e
                                            }({}, t), o = (o = {
                                                isChannelTextArea: !0,
                                                text: (0, d.getSelectionText)()
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
                                        }]
                                }
                            })
                        }, function() {
                            var e = this,
                                n = arguments;
                            return new Promise(function(r, o) {
                                var i = t.apply(e, n);

                                function a(e) {
                                    m(i, r, o, a, u, "next", e)
                                }

                                function u(e) {
                                    m(i, r, o, a, u, "throw", e)
                                }
                                a(void 0)
                            })
                        }), {
                            align: "bottom",
                            enableSpellCheck: !0
                        })
                    }
                }), I(p(e), "handleOnChange", function(t) {
                    var n = e.props,
                        r = n.onChange,
                        o = n.allowNewLines,
                        i = t.currentTarget.value,
                        a = o ? i : i.replace("\n", "");
                    null == r || r(t, a, (0, _.toRichValue)(a))
                }), e
            }
            return S = b, v = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    !this.props.disableAutoFocus && (Promise.resolve().then(function() {
                        var t, n = e.props.value;
                        null === (t = e._ref) || void 0 === t || t.setSelection(n.length, n.length)
                    }), this.focus()), null != l.default.getActiveCommand(this.props.channel.id) && s.setActiveCommand({
                        channelId: this.props.channel.id,
                        command: null,
                        section: null
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    this.state.nextSelection !== t.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection)
                }
            }, {
                key: "getCurrentWord",
                value: function() {
                    var e = this._ref;
                    if (null == e) return {
                        word: null,
                        isAtStart: !1
                    };
                    var t = this.props.value;
                    if (0 === t.trim().length) return {
                        word: null,
                        isAtStart: !1
                    };
                    for (var n = e.selectionStart, r = e.selectionEnd; n > 0 && !T.test(t[n - 1]);) {
                        ;
                        n--
                    }
                    return {
                        word: t.slice(n, r),
                        isAtStart: 0 === n
                    }
                }
            }, {
                key: "blur",
                value: function() {
                    var e = this._ref;
                    null != e && e.blur()
                }
            }, {
                key: "submit",
                value: function(e) {
                    return e.preventDefault(), this.props.onSubmit(this.props.value)
                }
            }, {
                key: "insertAutocomplete",
                value: function(e, t) {
                    var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        r = this.getCurrentWord().word;
                    if (null == r) this.insertText(e, t, n);
                    else {
                        var o = this._ref;
                        if (null == o) return;
                        var i = o.value.slice(0, o.selectionStart - r.length),
                            a = o.value.slice(o.selectionEnd);
                        this._insertText(e, i, a, n)
                    }
                }
            }, {
                key: "insertText",
                value: function(e, t) {
                    var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        r = this._ref;
                    if (null != r) {
                        var o = r.value.slice(0, r.selectionStart),
                            i = r.value.slice(r.selectionEnd);
                        this._insertText(e, o, i, n)
                    }
                }
            }, {
                key: "_insertText",
                value: function(e, t, n, r) {
                    var o = this;
                    if (null != this._ref) {
                        r && (e += " ");
                        var i = t + e + n,
                            a = this.props.onChange;
                        null == a || a(null, i, (0, _.toRichValue)(i));
                        var u = t.length + e.length;
                        this.setState({
                            nextSelection: u
                        }, function() {
                            o.props.maybeShowAutocomplete()
                        })
                    }
                }
            }, {
                key: "hasOpenCodeBlock",
                value: function() {
                    var e = this._ref;
                    if (null == e) return !1;
                    var t = this.props.value.slice(0, e.selectionStart).match(/```/g);
                    return null != t && t.length > 0 && t.length % 2 != 0
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.value,
                        n = e.disabled,
                        o = e.placeholder,
                        u = e.required,
                        s = e.onResize,
                        l = e.className,
                        f = e.id,
                        d = e.submitting,
                        _ = e.textAreaPaddingClassName,
                        p = e.spellcheckEnabled,
                        m = e["aria-controls"],
                        y = e["aria-expanded"],
                        I = e["aria-activedescendant"];
                    return r.createElement(r.Fragment, null, r.createElement(c.ComponentAction, {
                        event: E.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                        handler: this.handleGlobalPaste
                    }), r.createElement(a.TextAreaAutosize, {
                        ref: this.handleSetRef,
                        className: i()(l, _),
                        id: f,
                        rows: 1,
                        fontWidthEstimate: 6,
                        placeholder: o,
                        disabled: n || d,
                        required: u,
                        onChange: this.handleOnChange,
                        onResize: s,
                        onKeyPress: this.handleKeyPress,
                        onKeyDown: this.handleKeyDown,
                        onKeyUp: this.handleKeyUp,
                        onFocus: this.props.onFocus,
                        onBlur: this.props.onBlur,
                        onPaste: this.handlePaste,
                        onClick: this.handleClick,
                        onContextMenu: this.handleContextMenu,
                        value: n ? "" : t,
                        tabIndex: 0,
                        spellCheck: p,
                        "aria-controls": m,
                        "aria-expanded": y,
                        "aria-activedescendant": I,
                        "aria-haspopup": "listbox",
                        "aria-autocomplete": "list",
                        "aria-multiline": !0
                    }))
                }
            }, {
                key: "handleTabOrEnterDown",
                value: function(e) {
                    e.which === E.KeyboardKeys.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === E.KeyboardKeys.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === E.KeyboardKeys.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === E.KeyboardKeys.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1))
                }
            }, {
                key: "insertEmoji",
                value: function(e, t) {
                    this.insertText("".concat(":").concat(e.name).concat(":"), void 0, t)
                }
            }, {
                key: "getFirstText",
                value: function() {
                    return this.props.value
                }
            }], y(S.prototype, v), g && y(S, g), b
        }(r.PureComponent);
    t.default = S
}