function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscuredDisplayContext: function() {
            return R
        }
    }), n("47120");
    var i, r, s, a = n("735250"),
        o = n("470079"),
        l = n("803997"),
        u = n.n(l),
        d = n("692547"),
        _ = n("984986"),
        c = n("481060"),
        E = n("169525"),
        I = n("823379"),
        T = n("794358"),
        f = n("880008"),
        S = n("689938"),
        h = n("681282");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {})).TEXT = "text", s.ATTACHMENT = "attachment", s.EMBED = "embed";
    let m = e => {
            let {
                className: t
            } = e;
            return (0, a.jsx)("div", {
                className: u()(h.spoilerWarning, t),
                children: S.default.Messages.SPOILER
            })
        },
        N = e => {
            let {
                className: t,
                isSingleMosaicItem: n,
                obscureOnly: i
            } = e;
            return (0, a.jsx)("div", {
                className: u()(h.explicitContentWarning, t),
                children: i ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(_.ImageWarningIcon, {
                        width: 32,
                        height: 32,
                        color: d.default.colors.WHITE
                    }), n && (0, a.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: h.explicitContentWarningText,
                        children: S.default.Messages.EXPLICIT_CONTENT_WARNING
                    })]
                })
            })
        },
        O = e => {
            let {
                reason: t = E.ObscureReason.SPOILER,
                className: n,
                isSingleMosaicItem: i = !1
            } = e;
            switch (t) {
                case E.ObscureReason.SPOILER:
                    return (0, a.jsx)(m, {
                        className: n
                    });
                case E.ObscureReason.EXPLICIT_CONTENT:
                    return (0, a.jsx)(N, {
                        isSingleMosaicItem: i,
                        className: n
                    });
                case E.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                    return (0, a.jsx)(N, {
                        isSingleMosaicItem: i,
                        className: n,
                        obscureOnly: !0
                    });
                default:
                    return (0, I.assertNever)(t)
            }
        },
        p = e => {
            let {
                obscureReason: t,
                isVisible: n,
                handleToggleObscurity: i,
                obscurityControlClassName: r
            } = e;
            return t !== E.ObscureReason.EXPLICIT_CONTENT ? null : (0, a.jsx)("div", {
                className: u()(h.obscureButtonContainer, r),
                children: (0, a.jsx)(c.Clickable, {
                    className: u()(h.obscureHoverButton),
                    onClick: i,
                    "aria-label": S.default.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP,
                    children: n ? (0, a.jsx)(T.default, {
                        width: 24,
                        height: 24
                    }) : (0, a.jsx)(f.default, {
                        width: 24,
                        height: 24
                    })
                })
            })
        },
        R = o.createContext(!1);
    class C extends(r = o.PureComponent) {
        renderWithTooltip(e) {
            return (0, a.jsx)(c.Tooltip, {
                position: "left",
                text: this.state.visible ? null : this.tooltipText,
                children: t => {
                    let {
                        onMouseEnter: n,
                        onMouseLeave: i
                    } = t;
                    return o.cloneElement(o.Children.only(e), {
                        onMouseEnter: n,
                        onMouseLeave: i
                    })
                }
            })
        }
        renderObscuredAttachment() {
            let {
                children: e,
                inline: t,
                className: n,
                containerStyles: i,
                obscured: r = !0,
                reason: s = E.ObscureReason.SPOILER,
                isSingleMosaicItem: o = !1,
                obscurityControlClassName: l
            } = this.props, {
                visible: d
            } = this.state, _ = (0, a.jsx)(R.Consumer, {
                children: _ => {
                    let I = _ || d || !r;
                    return [E.ObscureReason.EXPLICIT_CONTENT, E.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !t ? (0, a.jsxs)("div", {
                        "aria-label": I ? void 0 : this.ariaLabel,
                        "aria-expanded": I,
                        style: i,
                        className: u()(n, h.spoilerContent, h.spoilerContainer, {
                            [h.hidden]: !I,
                            [h.constrainedObscureContent]: o
                        }),
                        role: I ? "presentation" : "button",
                        tabIndex: I ? -1 : 0,
                        children: [I || t ? null : (0, a.jsx)(O, {
                            reason: s,
                            isSingleMosaicItem: o
                        }), (0, a.jsx)("div", {
                            "aria-hidden": !I,
                            className: h.spoilerInnerContainer,
                            children: e(!I)
                        }), (0, a.jsx)(p, {
                            obscureReason: s,
                            isVisible: d,
                            handleToggleObscurity: this.handleToggleObscurity,
                            obscurityControlClassName: l
                        })]
                    }) : (0, a.jsxs)(c.Clickable, {
                        onClick: I ? void 0 : this.removeObscurity,
                        "aria-label": I ? void 0 : this.ariaLabel,
                        "aria-expanded": I,
                        style: i,
                        className: u()(n, h.spoilerContent, h.spoilerContainer, {
                            [h.hidden]: !I,
                            [h.hiddenSpoiler]: !I
                        }),
                        role: I ? "presentation" : "button",
                        tabIndex: I ? -1 : 0,
                        children: [I || t ? null : (0, a.jsx)(O, {
                            reason: s,
                            isSingleMosaicItem: o
                        }), (0, a.jsx)("div", {
                            "aria-hidden": !I,
                            className: h.spoilerInnerContainer,
                            children: e(!I)
                        })]
                    })
                }
            });
            return t ? this.renderWithTooltip(_) : _
        }
        renderObscuredEmbed() {
            let {
                children: e,
                className: t,
                containerStyles: n,
                isSingleMosaicItem: i,
                obscurityControlClassName: r,
                reason: s = E.ObscureReason.SPOILER
            } = this.props, {
                visible: o
            } = this.state;
            return (0, a.jsx)(R.Consumer, {
                children: l => {
                    let d = l || o;
                    return [E.ObscureReason.EXPLICIT_CONTENT, E.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(s) ? (0, a.jsxs)("div", {
                        "aria-label": o ? void 0 : this.ariaLabel,
                        "aria-expanded": d,
                        style: n,
                        className: u()(t, h.spoilerContent, h.spoilerContainer, {
                            [h.hidden]: !d
                        }),
                        role: d ? "presentation" : "button",
                        tabIndex: d ? -1 : 0,
                        children: [d ? null : (0, a.jsx)(O, {
                            reason: s,
                            isSingleMosaicItem: i
                        }), (0, a.jsx)("div", {
                            "aria-hidden": !d,
                            className: h.spoilerInnerContainer,
                            children: e(!d)
                        }), (0, a.jsx)(p, {
                            obscureReason: s,
                            isVisible: o,
                            handleToggleObscurity: this.handleToggleObscurity,
                            obscurityControlClassName: r
                        })]
                    }) : (0, a.jsxs)(c.Clickable, {
                        "aria-label": this.ariaLabel,
                        "aria-expanded": d,
                        className: u()(t, h.spoilerContent, h.spoilerContainer, {
                            [h.hidden]: !d
                        }),
                        onClick: d ? void 0 : this.removeObscurity,
                        style: n,
                        role: d ? "presentation" : "button",
                        tabIndex: d ? -1 : 0,
                        children: [d ? null : (0, a.jsx)(O, {
                            reason: s,
                            className: h.embed
                        }), (0, a.jsx)("div", {
                            "aria-hidden": !d,
                            children: e(!d)
                        })]
                    })
                }
            })
        }
        renderObscuredText() {
            let {
                children: e,
                renderTextElement: t,
                className: n
            } = this.props, {
                visible: i
            } = this.state, r = (0, a.jsx)(R.Consumer, {
                children: r => {
                    let s = r || i,
                        l = o.Children.toArray(e(s)),
                        d = o.Children.map(l, e => o.isValidElement(e) && null != t ? t(e, s) : e);
                    return (0, a.jsx)(c.Clickable, {
                        tag: "span",
                        onClick: s ? void 0 : this.removeObscurity,
                        "aria-label": s ? void 0 : this.ariaLabel,
                        "aria-expanded": s,
                        tabIndex: s ? -1 : 0,
                        role: s ? "presentation" : "button",
                        className: u()(n, h.spoilerContent, h.spoilerMarkdownContent, {
                            [h.hidden]: !s
                        }),
                        children: (0, a.jsx)("span", {
                            className: h.obscuredTextContent,
                            children: (0, a.jsx)("span", {
                                "aria-hidden": !s,
                                className: h.obscuredTextContentInner,
                                children: d
                            })
                        })
                    })
                }
            });
            return this.renderWithTooltip(r)
        }
        render() {
            let {
                type: e = "text"
            } = this.props;
            switch (e) {
                case "text":
                    return this.renderObscuredText();
                case "attachment":
                    return this.renderObscuredAttachment();
                case "embed":
                    return this.renderObscuredEmbed();
                default:
                    return (0, I.assertNever)(e)
            }
        }
        get ariaLabel() {
            let {
                reason: e = E.ObscureReason.SPOILER
            } = this.props;
            switch (e) {
                case E.ObscureReason.SPOILER:
                    return S.default.Messages.SPOILER;
                case E.ObscureReason.EXPLICIT_CONTENT:
                    return S.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                case E.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                    return S.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                default:
                    return (0, I.assertNever)(e)
            }
        }
        get tooltipText() {
            let {
                reason: e = E.ObscureReason.SPOILER
            } = this.props;
            switch (e) {
                case E.ObscureReason.SPOILER:
                    return S.default.Messages.SPOILER;
                case E.ObscureReason.EXPLICIT_CONTENT:
                    return S.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                case E.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                    return S.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                default:
                    return (0, I.assertNever)(e)
            }
        }
        constructor(...e) {
            super(...e), A(this, "state", {
                visible: !1
            }), A(this, "removeObscurity", e => {
                let {
                    visible: t
                } = this.state;
                if (t) return;
                !t && (e.preventDefault(), e.stopPropagation()), this.setState({
                    visible: !0
                });
                let {
                    onReveal: n
                } = this.props;
                null != n && n()
            }), A(this, "handleToggleObscurity", e => {
                e.stopPropagation(), e.nativeEvent.stopPropagation();
                let {
                    onToggleObscurity: t
                } = this.props;
                null != t && t(e), this.setState(e => ({
                    visible: !e.visible
                }))
            }), A(this, "obscure", () => {
                let {
                    visible: e
                } = this.state;
                e && this.setState({
                    visible: !1
                })
            })
        }
    }
    A(C, "Types", i), A(C, "Reasons", E.ObscureReason), t.default = C
}