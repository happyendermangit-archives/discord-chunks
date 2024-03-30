function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscuredDisplayContext: function() {
            return N
        }
    });
    var r, o, i, a = n("470079"),
        u = n("803997"),
        s = n.n(u),
        l = n("447515"),
        c = n("640330"),
        f = n("784184"),
        d = n("134981"),
        _ = n("162677"),
        E = n("588220"),
        p = n("274171"),
        m = n("941504"),
        y = n("681282");

    function I(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {})).TEXT = "text", r.ATTACHMENT = "attachment", r.EMBED = "embed";
    var v = function(e) {
            var t = e.className;
            return a.createElement("div", {
                className: s()(y.spoilerWarning, t)
            }, m.default.Messages.SPOILER)
        },
        g = function(e) {
            var t = e.className,
                n = e.isSingleMosaicItem,
                r = e.obscureOnly;
            return a.createElement("div", {
                className: s()(y.explicitContentWarning, t)
            }, r ? null : a.createElement(a.Fragment, null, a.createElement(c.ImageWarningIcon, {
                width: 32,
                height: 32,
                color: l.default.colors.WHITE
            }), n && a.createElement(f.Text, {
                variant: "text-sm/normal",
                color: "always-white",
                className: y.explicitContentWarningText
            }, m.default.Messages.EXPLICIT_CONTENT_WARNING)))
        },
        A = function(e) {
            var t = e.reason,
                n = void 0 === t ? d.ObscureReason.SPOILER : t,
                r = e.className,
                o = e.isSingleMosaicItem,
                i = void 0 !== o && o;
            switch (n) {
                case d.ObscureReason.SPOILER:
                    return a.createElement(v, {
                        className: r
                    });
                case d.ObscureReason.EXPLICIT_CONTENT:
                    return a.createElement(g, {
                        isSingleMosaicItem: i,
                        className: r
                    });
                case d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                    return a.createElement(g, {
                        isSingleMosaicItem: i,
                        className: r,
                        obscureOnly: !0
                    });
                default:
                    return (0, _.assertNever)(n)
            }
        },
        b = function(e) {
            var t = e.obscureReason,
                n = e.isVisible,
                r = e.handleToggleObscurity,
                o = e.obscurityControlClassName;
            return t !== d.ObscureReason.EXPLICIT_CONTENT ? null : a.createElement("div", {
                className: s()(y.obscureButtonContainer, o)
            }, a.createElement(f.Clickable, {
                className: s()(y.obscureHoverButton),
                onClick: r,
                "aria-label": m.default.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP
            }, n ? a.createElement(E.default, {
                width: 24,
                height: 24
            }) : a.createElement(p.default, {
                width: 24,
                height: 24
            })))
        },
        N = a.createContext(!1),
        R = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && S(e, t)
            }(l, e);
            var t, n, r, o, i, u = (t = l, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = T(t);
                if (n) {
                    var a = T(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : I(e)
            });

            function l() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), e = u.apply(this, arguments), O(I(e), "state", {
                    visible: !1
                }), O(I(e), "removeObscurity", function(t) {
                    var n = e.state.visible;
                    if (!n) {
                        !n && (t.preventDefault(), t.stopPropagation()), e.setState({
                            visible: !0
                        });
                        var r = e.props.onReveal;
                        null != r && r()
                    }
                }), O(I(e), "handleToggleObscurity", function(t) {
                    t.stopPropagation(), t.nativeEvent.stopPropagation();
                    var n = e.props.onToggleObscurity;
                    null != n && n(t), e.setState(function(e) {
                        return {
                            visible: !e.visible
                        }
                    })
                }), O(I(e), "obscure", function() {
                    e.state.visible && e.setState({
                        visible: !1
                    })
                }), e
            }
            return r = l, o = [{
                key: "renderWithTooltip",
                value: function(e) {
                    return a.createElement(f.Tooltip, {
                        position: "left",
                        text: this.state.visible ? null : this.tooltipText
                    }, function(t) {
                        var n = t.onMouseEnter,
                            r = t.onMouseLeave;
                        return a.cloneElement(a.Children.only(e), {
                            onMouseEnter: n,
                            onMouseLeave: r
                        })
                    })
                }
            }, {
                key: "renderObscuredAttachment",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.children,
                        r = t.inline,
                        o = t.className,
                        i = t.containerStyles,
                        u = t.obscured,
                        l = void 0 === u || u,
                        c = t.reason,
                        _ = void 0 === c ? d.ObscureReason.SPOILER : c,
                        E = t.isSingleMosaicItem,
                        p = void 0 !== E && E,
                        m = t.obscurityControlClassName,
                        I = this.state.visible,
                        h = a.createElement(N.Consumer, null, function(t) {
                            var u, c, E = t || I || !l;
                            return [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(_) && !r ? a.createElement("div", {
                                "aria-label": E ? void 0 : e.ariaLabel,
                                "aria-expanded": E,
                                style: i,
                                className: s()(o, y.spoilerContent, y.spoilerContainer, (O(u = {}, y.hidden, !E), O(u, y.constrainedObscureContent, p), u)),
                                role: E ? "presentation" : "button",
                                tabIndex: E ? -1 : 0
                            }, E || r ? null : a.createElement(A, {
                                reason: _,
                                isSingleMosaicItem: p
                            }), a.createElement("div", {
                                "aria-hidden": !E,
                                className: y.spoilerInnerContainer
                            }, n(!E)), a.createElement(b, {
                                obscureReason: _,
                                isVisible: I,
                                handleToggleObscurity: e.handleToggleObscurity,
                                obscurityControlClassName: m
                            })) : a.createElement(f.Clickable, {
                                onClick: E ? void 0 : e.removeObscurity,
                                "aria-label": E ? void 0 : e.ariaLabel,
                                "aria-expanded": E,
                                style: i,
                                className: s()(o, y.spoilerContent, y.spoilerContainer, (O(c = {}, y.hidden, !E), O(c, y.hiddenSpoiler, !E), c)),
                                role: E ? "presentation" : "button",
                                tabIndex: E ? -1 : 0
                            }, E || r ? null : a.createElement(A, {
                                reason: _,
                                isSingleMosaicItem: p
                            }), a.createElement("div", {
                                "aria-hidden": !E,
                                className: y.spoilerInnerContainer
                            }, n(!E)))
                        });
                    return r ? this.renderWithTooltip(h) : h
                }
            }, {
                key: "renderObscuredEmbed",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.children,
                        r = t.className,
                        o = t.containerStyles,
                        i = t.isSingleMosaicItem,
                        u = t.obscurityControlClassName,
                        l = t.reason,
                        c = void 0 === l ? d.ObscureReason.SPOILER : l,
                        _ = this.state.visible;
                    return a.createElement(N.Consumer, null, function(t) {
                        var l = t || _;
                        return [d.ObscureReason.EXPLICIT_CONTENT, d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(c) ? a.createElement("div", {
                            "aria-label": _ ? void 0 : e.ariaLabel,
                            "aria-expanded": l,
                            style: o,
                            className: s()(r, y.spoilerContent, y.spoilerContainer, O({}, y.hidden, !l)),
                            role: l ? "presentation" : "button",
                            tabIndex: l ? -1 : 0
                        }, l ? null : a.createElement(A, {
                            reason: c,
                            isSingleMosaicItem: i
                        }), a.createElement("div", {
                            "aria-hidden": !l,
                            className: y.spoilerInnerContainer
                        }, n(!l)), a.createElement(b, {
                            obscureReason: c,
                            isVisible: _,
                            handleToggleObscurity: e.handleToggleObscurity,
                            obscurityControlClassName: u
                        })) : a.createElement(f.Clickable, {
                            "aria-label": e.ariaLabel,
                            "aria-expanded": l,
                            className: s()(r, y.spoilerContent, y.spoilerContainer, O({}, y.hidden, !l)),
                            onClick: l ? void 0 : e.removeObscurity,
                            style: o,
                            role: l ? "presentation" : "button",
                            tabIndex: l ? -1 : 0
                        }, l ? null : a.createElement(A, {
                            reason: c,
                            className: y.embed
                        }), a.createElement("div", {
                            "aria-hidden": !l
                        }, n(!l)))
                    })
                }
            }, {
                key: "renderObscuredText",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.children,
                        r = t.renderTextElement,
                        o = t.className,
                        i = this.state.visible,
                        u = a.createElement(N.Consumer, null, function(t) {
                            var u = t || i,
                                l = a.Children.toArray(n(u)),
                                c = a.Children.map(l, function(e) {
                                    return a.isValidElement(e) && null != r ? r(e, u) : e
                                });
                            return a.createElement(f.Clickable, {
                                tag: "span",
                                onClick: u ? void 0 : e.removeObscurity,
                                "aria-label": u ? void 0 : e.ariaLabel,
                                "aria-expanded": u,
                                tabIndex: u ? -1 : 0,
                                role: u ? "presentation" : "button",
                                className: s()(o, y.spoilerContent, y.spoilerMarkdownContent, O({}, y.hidden, !u))
                            }, a.createElement("span", {
                                className: y.obscuredTextContent
                            }, a.createElement("span", {
                                "aria-hidden": !u,
                                className: y.obscuredTextContentInner
                            }, c)))
                        });
                    return this.renderWithTooltip(u)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.type,
                        t = void 0 === e ? "text" : e;
                    switch (t) {
                        case "text":
                            return this.renderObscuredText();
                        case "attachment":
                            return this.renderObscuredAttachment();
                        case "embed":
                            return this.renderObscuredEmbed();
                        default:
                            return (0, _.assertNever)(t)
                    }
                }
            }, {
                key: "ariaLabel",
                get: function() {
                    var e = this.props.reason,
                        t = void 0 === e ? d.ObscureReason.SPOILER : e;
                    switch (t) {
                        case d.ObscureReason.SPOILER:
                            return m.default.Messages.SPOILER;
                        case d.ObscureReason.EXPLICIT_CONTENT:
                            return m.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                        case d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                            return m.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                        default:
                            return (0, _.assertNever)(t)
                    }
                }
            }, {
                key: "tooltipText",
                get: function() {
                    var e = this.props.reason,
                        t = void 0 === e ? d.ObscureReason.SPOILER : e;
                    switch (t) {
                        case d.ObscureReason.SPOILER:
                            return m.default.Messages.SPOILER;
                        case d.ObscureReason.EXPLICIT_CONTENT:
                            return m.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                        case d.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                            return m.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                        default:
                            return (0, _.assertNever)(t)
                    }
                }
            }], h(r.prototype, o), i && h(r, i), l
        }(a.PureComponent);
    O(R, "Types", o), O(R, "Reasons", d.ObscureReason), t.default = R
}