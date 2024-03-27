function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ObscuredDisplayContext: function() {
            return T
        },
        default: function() {
            return I
        }
    }), n("222007");
    var i, l, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("669491"),
        d = n("681187"),
        c = n("77078"),
        f = n("605160"),
        m = n("449008"),
        p = n("462579"),
        h = n("867544"),
        x = n("782340"),
        E = n("731574");
    (l = i || (i = {})).TEXT = "text", l.ATTACHMENT = "attachment", l.EMBED = "embed";
    let y = e => {
            let {
                className: t
            } = e;
            return (0, a.jsx)("div", {
                className: o(E.spoilerWarning, t),
                children: x.default.Messages.SPOILER
            })
        },
        g = e => {
            let {
                className: t,
                isSingleMosaicItem: n,
                obscureOnly: i
            } = e;
            return (0, a.jsx)("div", {
                className: o(E.explicitContentWarning, t),
                children: i ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(d.ImageWarningIcon, {
                        width: 32,
                        height: 32,
                        color: u.default.colors.WHITE
                    }), n && (0, a.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "always-white",
                        className: E.explicitContentWarningText,
                        children: x.default.Messages.EXPLICIT_CONTENT_WARNING
                    })]
                })
            })
        },
        S = e => {
            let {
                reason: t = f.ObscureReason.SPOILER,
                className: n,
                isSingleMosaicItem: i = !1
            } = e;
            switch (t) {
                case f.ObscureReason.SPOILER:
                    return (0, a.jsx)(y, {
                        className: n
                    });
                case f.ObscureReason.EXPLICIT_CONTENT:
                    return (0, a.jsx)(g, {
                        isSingleMosaicItem: i,
                        className: n
                    });
                case f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                    return (0, a.jsx)(g, {
                        isSingleMosaicItem: i,
                        className: n,
                        obscureOnly: !0
                    });
                default:
                    return (0, m.assertNever)(t)
            }
        },
        C = e => {
            let {
                obscureReason: t,
                isVisible: n,
                handleToggleObscurity: i,
                obscurityControlClassName: l
            } = e;
            return t !== f.ObscureReason.EXPLICIT_CONTENT ? null : (0, a.jsx)("div", {
                className: o(E.obscureButtonContainer, l),
                children: (0, a.jsx)(c.Clickable, {
                    className: o(E.obscureHoverButton),
                    onClick: i,
                    "aria-label": x.default.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP,
                    children: n ? (0, a.jsx)(p.default, {
                        width: 24,
                        height: 24
                    }) : (0, a.jsx)(h.default, {
                        width: 24,
                        height: 24
                    })
                })
            })
        },
        T = s.createContext(!1);
    class _ extends s.PureComponent {
        renderWithTooltip(e) {
            return (0, a.jsx)(c.Tooltip, {
                position: "left",
                text: this.state.visible ? null : this.tooltipText,
                children: t => {
                    let {
                        onMouseEnter: n,
                        onMouseLeave: i
                    } = t;
                    return s.cloneElement(s.Children.only(e), {
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
                obscured: l = !0,
                reason: s = f.ObscureReason.SPOILER,
                isSingleMosaicItem: r = !1,
                obscurityControlClassName: u
            } = this.props, {
                visible: d
            } = this.state, m = (0, a.jsx)(T.Consumer, {
                children: m => {
                    let p = m || d || !l;
                    return [f.ObscureReason.EXPLICIT_CONTENT, f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !t ? (0, a.jsxs)("div", {
                        "aria-label": p ? void 0 : this.ariaLabel,
                        "aria-expanded": p,
                        style: i,
                        className: o(n, E.spoilerContent, E.spoilerContainer, {
                            [E.hidden]: !p,
                            [E.constrainedObscureContent]: r
                        }),
                        role: p ? "presentation" : "button",
                        tabIndex: p ? -1 : 0,
                        children: [p || t ? null : (0, a.jsx)(S, {
                            reason: s,
                            isSingleMosaicItem: r
                        }), (0, a.jsx)("div", {
                            "aria-hidden": !p,
                            className: E.spoilerInnerContainer,
                            children: e(!p)
                        }), (0, a.jsx)(C, {
                            obscureReason: s,
                            isVisible: d,
                            handleToggleObscurity: this.handleToggleObscurity,
                            obscurityControlClassName: u
                        })]
                    }) : (0, a.jsxs)(c.Clickable, {
                        onClick: p ? void 0 : this.removeObscurity,
                        "aria-label": p ? void 0 : this.ariaLabel,
                        "aria-expanded": p,
                        style: i,
                        className: o(n, E.spoilerContent, E.spoilerContainer, {
                            [E.hidden]: !p,
                            [E.hiddenSpoiler]: !p
                        }),
                        role: p ? "presentation" : "button",
                        tabIndex: p ? -1 : 0,
                        children: [p || t ? null : (0, a.jsx)(S, {
                            reason: s,
                            isSingleMosaicItem: r
                        }), (0, a.jsx)("div", {
                            "aria-hidden": !p,
                            className: E.spoilerInnerContainer,
                            children: e(!p)
                        })]
                    })
                }
            });
            return t ? this.renderWithTooltip(m) : m
        }
        renderObscuredEmbed() {
            let {
                children: e,
                className: t,
                containerStyles: n,
                isSingleMosaicItem: i,
                obscurityControlClassName: l,
                reason: s = f.ObscureReason.SPOILER
            } = this.props, {
                visible: r
            } = this.state;
            return (0, a.jsx)(T.Consumer, {
                children: u => {
                    let d = u || r;
                    return [f.ObscureReason.EXPLICIT_CONTENT, f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT].includes(s) ? (0, a.jsxs)("div", {
                        "aria-label": r ? void 0 : this.ariaLabel,
                        "aria-expanded": d,
                        style: n,
                        className: o(t, E.spoilerContent, E.spoilerContainer, {
                            [E.hidden]: !d
                        }),
                        role: d ? "presentation" : "button",
                        tabIndex: d ? -1 : 0,
                        children: [d ? null : (0, a.jsx)(S, {
                            reason: s,
                            isSingleMosaicItem: i
                        }), (0, a.jsx)("div", {
                            "aria-hidden": !d,
                            className: E.spoilerInnerContainer,
                            children: e(!d)
                        }), (0, a.jsx)(C, {
                            obscureReason: s,
                            isVisible: r,
                            handleToggleObscurity: this.handleToggleObscurity,
                            obscurityControlClassName: l
                        })]
                    }) : (0, a.jsxs)(c.Clickable, {
                        "aria-label": this.ariaLabel,
                        "aria-expanded": d,
                        className: o(t, E.spoilerContent, E.spoilerContainer, {
                            [E.hidden]: !d
                        }),
                        onClick: d ? void 0 : this.removeObscurity,
                        style: n,
                        role: d ? "presentation" : "button",
                        tabIndex: d ? -1 : 0,
                        children: [d ? null : (0, a.jsx)(S, {
                            reason: s,
                            className: E.embed
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
            } = this.state, l = (0, a.jsx)(T.Consumer, {
                children: l => {
                    let r = l || i,
                        u = s.Children.toArray(e(r)),
                        d = s.Children.map(u, e => {
                            let n = s.isValidElement(e);
                            return n && null != t ? t(e, r) : e
                        });
                    return (0, a.jsx)(c.Clickable, {
                        tag: "span",
                        onClick: r ? void 0 : this.removeObscurity,
                        "aria-label": r ? void 0 : this.ariaLabel,
                        "aria-expanded": r,
                        tabIndex: r ? -1 : 0,
                        role: r ? "presentation" : "button",
                        className: o(n, E.spoilerContent, E.spoilerMarkdownContent, {
                            [E.hidden]: !r
                        }),
                        children: (0, a.jsx)("span", {
                            className: E.obscuredTextContent,
                            children: (0, a.jsx)("span", {
                                "aria-hidden": !r,
                                className: E.obscuredTextContentInner,
                                children: d
                            })
                        })
                    })
                }
            });
            return this.renderWithTooltip(l)
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
                    return (0, m.assertNever)(e)
            }
        }
        get ariaLabel() {
            let {
                reason: e = f.ObscureReason.SPOILER
            } = this.props;
            switch (e) {
                case f.ObscureReason.SPOILER:
                    return x.default.Messages.SPOILER;
                case f.ObscureReason.EXPLICIT_CONTENT:
                    return x.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                case f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                    return x.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                default:
                    return (0, m.assertNever)(e)
            }
        }
        get tooltipText() {
            let {
                reason: e = f.ObscureReason.SPOILER
            } = this.props;
            switch (e) {
                case f.ObscureReason.SPOILER:
                    return x.default.Messages.SPOILER;
                case f.ObscureReason.EXPLICIT_CONTENT:
                    return x.default.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
                case f.ObscureReason.POTENTIAL_EXPLICIT_CONTENT:
                    return x.default.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
                default:
                    return (0, m.assertNever)(e)
            }
        }
        constructor(...e) {
            super(...e), this.state = {
                visible: !1
            }, this.removeObscurity = e => {
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
            }, this.handleToggleObscurity = e => {
                e.stopPropagation(), e.nativeEvent.stopPropagation();
                let {
                    onToggleObscurity: t
                } = this.props;
                null != t && t(e), this.setState(e => ({
                    visible: !e.visible
                }))
            }, this.obscure = () => {
                let {
                    visible: e
                } = this.state;
                e && this.setState({
                    visible: !1
                })
            }
        }
    }
    _.Types = i, _.Reasons = f.ObscureReason;
    var I = _
}