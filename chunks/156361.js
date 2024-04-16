function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutocompleteRowId: function() {
            return P
        },
        getAutocompleteTitleId: function() {
            return U
        }
    }), n("411104"), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("392711"),
        u = n.n(l),
        d = n("924826"),
        _ = n("481060"),
        c = n("607070"),
        E = n("895924"),
        I = n("237375"),
        T = n("342687"),
        f = n("933557"),
        S = n("471445"),
        h = n("511618"),
        A = n("926491"),
        m = n("378233"),
        N = n("430824"),
        p = n("699516"),
        O = n("594174"),
        R = n("51144"),
        C = n("508688"),
        g = n("286908"),
        L = n("377087"),
        D = n("981631"),
        v = n("689938"),
        M = n("979318");

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function P(e) {
        return null != e ? "autocomplete-".concat(e) : null
    }

    function U(e) {
        return "autocomplete-".concat(e, "-title")
    }
    let b = s.createContext(null);
    class G extends s.PureComponent {
        isSelectable() {
            return this.selectable
        }
        renderContent() {
            throw Error("AutocompleteRow: renderContent must be extended")
        }
        renderClickable(e) {
            var t;
            let {
                layoutClass: n,
                props: {
                    className: i,
                    index: s,
                    selected: a
                }
            } = this, l = this.isSelectable();
            return (0, r.jsx)(_.Clickable, {
                ...e,
                className: o()(M.clickable, i, n),
                id: null !== (t = P(s)) && void 0 !== t ? t : void 0,
                onClick: l ? this.handleClick : void 0,
                onMouseMove: l ? () => {
                    this.setState({
                        hovered: !0
                    }), this.handleMouseEnter()
                } : void 0,
                onMouseLeave: l ? () => this.setState({
                    hovered: !1
                }) : void 0,
                role: "option",
                "aria-disabled": !l,
                "aria-selected": l && a,
                children: (0, r.jsx)("div", {
                    className: M.base,
                    children: this.renderContent()
                })
            })
        }
        render() {
            let {
                index: e
            } = this.props;
            return this.isSelectable() ? (0, r.jsx)(d.ListNavigatorItem, {
                id: "".concat(e),
                children: e => this.renderClickable(e)
            }) : this.renderClickable()
        }
        constructor(e) {
            super(e), y(this, "selectable", !0), y(this, "layoutClass", M.autocompleteRowVertical), y(this, "handleMouseEnter", () => {
                let {
                    onHover: e,
                    index: t,
                    selected: n
                } = this.props;
                null == e || n || "number" != typeof t || e(t)
            }), y(this, "handleClick", e => {
                let {
                    onClick: t,
                    index: n
                } = this.props;
                null != t && "number" == typeof n && t(n, e)
            }), this.state = {
                hovered: !1
            }
        }
    }
    class w extends(i = s.PureComponent) {
        render() {
            let {
                children: e,
                className: t,
                innerClassName: n,
                id: i,
                ...a
            } = this.props;
            return s.Children.count(e) > 0 ? (0, r.jsx)(b.Provider, {
                value: {
                    id: null != i ? i : ""
                },
                children: (0, r.jsx)("div", {
                    className: o()(M.autocomplete, t),
                    children: (0, r.jsx)("div", {
                        className: o()(M.autocompleteInner, n),
                        ...a,
                        children: e
                    })
                })
            }) : null
        }
    }
    y(w, "Generic", class e extends G {
        renderContent() {
            let {
                text: e,
                description: t
            } = this.props;
            return (0, r.jsxs)(C.AutocompleteRowContent, {
                children: [(0, r.jsx)(C.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(C.AutocompleteRowHeading, {
                        children: e
                    })
                }), null != t ? (0, r.jsx)(C.AutocompleteRowContentSecondary, {
                    children: t
                }) : null]
            })
        }
    }), y(w, "Loading", function(e) {
        let t = s.useMemo(() => u().random(60, 120), []);
        return (0, r.jsx)("div", {
            className: M.base,
            "aria-busy": !0,
            children: (0, r.jsx)(C.AutocompleteRowContent, {
                children: (0, r.jsx)(C.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(C.AutocompleteRowHeading, {
                        children: (0, r.jsx)("div", {
                            className: M.autocompletePlaceholder,
                            style: {
                                width: t
                            }
                        })
                    })
                })
            })
        })
    }), y(w, "Title", function(e) {
        let {
            title: t,
            className: n,
            children: i
        } = e, a = s.useContext(b);
        return (0, r.jsx)("div", {
            className: M.base,
            children: (0, r.jsxs)(_.Heading, {
                id: U(a.id),
                className: o()(M.contentTitle, n),
                variant: "heading-deprecated-12/semibold",
                children: [t, i]
            })
        })
    }), y(w, "Divider", class e extends G {
        renderContent() {
            let {
                className: e
            } = this.props;
            return (0, r.jsx)("div", {
                className: o()(e, M.divider)
            })
        }
        constructor(...e) {
            super(...e), y(this, "layoutClass", M.dividerContainer), y(this, "selectable", !1)
        }
    }), y(w, "User", class e extends G {
        renderContent() {
            let {
                user: e,
                nick: t,
                status: n,
                hidePersonalInformation: i,
                guildId: s
            } = this.props;
            return (0, r.jsxs)(C.AutocompleteRowContent, {
                children: [(0, r.jsx)(C.AutocompleteRowIcon, {
                    children: (0, r.jsx)(_.Avatar, {
                        size: _.AvatarSizes.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n
                    })
                }), (0, r.jsx)(C.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(C.AutocompleteRowHeading, {
                        children: null != t ? t : R.default.getName(e)
                    })
                }), (0, r.jsxs)(C.AutocompleteRowContentSecondary, {
                    children: [(0, r.jsx)("span", {
                        className: M.__invalid_descriptionUsername,
                        children: R.default.getUserTag(e, {
                            mode: "username",
                            identifiable: i ? "never" : "always"
                        })
                    }), i || e.isPomelo() ? null : (0, r.jsxs)("span", {
                        className: M.descriptionDiscriminator,
                        children: ["#", e.discriminator]
                    })]
                })]
            })
        }
    }), y(w, "Role", class e extends G {
        renderContent() {
            let {
                role: e,
                hideDescription: t
            } = this.props, {
                colorString: n
            } = e, i = "dot" === c.default.roleStyle, s = "username" === c.default.roleStyle && null != n ? {
                color: n
            } : void 0;
            return (0, r.jsxs)(C.AutocompleteRowContent, {
                children: [(0, r.jsx)(C.AutocompleteRowContentPrimary, {
                    children: (0, r.jsxs)(C.AutocompleteRowHeading, {
                        children: [i && (0, r.jsx)(_.RoleDot, {
                            className: M.roleDot,
                            color: n,
                            tooltip: !1
                        }), (0, r.jsxs)("span", {
                            style: s,
                            children: ["@", e.name]
                        })]
                    })
                }), t ? null : (0, r.jsx)(C.AutocompleteRowContentSecondary, {
                    children: v.default.Messages.MENTION_USERS_WITH_ROLE
                })]
            })
        }
    }), y(w, "Channel", class e extends G {
        renderContent() {
            let {
                channel: e,
                category: t
            } = this.props, n = e.type === D.ChannelTypes.GUILD_CATEGORY ? g.default : (0, S.getChannelIconComponent)(e);
            return (0, r.jsxs)(C.AutocompleteRowContent, {
                children: [null != n && (0, r.jsx)(C.AutocompleteRowIcon, {
                    children: (0, r.jsx)(n, {
                        className: M.icon
                    })
                }), (0, r.jsx)(C.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(C.AutocompleteRowHeading, {
                        children: (0, f.computeChannelName)(e, O.default, p.default)
                    })
                }), null != t ? (0, r.jsx)(C.AutocompleteRowContentSecondary, {
                    children: t.name
                }) : null]
            })
        }
    }), y(w, "Command", class e extends G {
        renderContent() {
            let {
                command: e
            } = this.props;
            return (0, r.jsxs)(C.AutocompleteRowContent, {
                children: [(0, r.jsx)(C.AutocompleteRowIcon, {
                    children: (0, r.jsx)(L.default, {
                        className: M.icon,
                        foreground: M.iconForeground
                    })
                }), (0, r.jsx)(C.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(C.AutocompleteRowHeading, {
                        children: e.name
                    })
                }), (0, r.jsx)(C.AutocompleteRowContentSecondary, {
                    children: e.description
                })]
            })
        }
    }), y(w, "NewCommand", class e extends G {
        isSelectable() {
            return this.props.command.inputType !== E.ApplicationCommandInputType.PLACEHOLDER
        }
        renderContent() {
            let {
                command: e,
                channel: t,
                showImage: n,
                section: i,
                selected: s
            } = this.props, {
                hovered: a
            } = this.state, o = this.isSelectable();
            return e.inputType === E.ApplicationCommandInputType.PLACEHOLDER ? (0, r.jsx)(T.default, {}) : (0, r.jsx)(I.default, {
                command: e,
                channel: t,
                showImage: n,
                showOptions: a || o && s,
                section: i,
                isSelectable: o
            })
        }
    }), y(w, "Emoji", class e extends G {
        renderContent() {
            let {
                emoji: e,
                sentinel: t,
                guild: n
            } = this.props, i = null != e.url && "" !== e.url ? (0, r.jsx)("img", {
                alt: "",
                className: M.emojiImage,
                src: e.url
            }) : (0, r.jsx)("span", {
                className: M.emojiRaw,
                children: e.surrogates
            }), s = null != n ? (0, r.jsx)(C.AutocompleteRowContentSecondary, {
                children: n.name
            }) : null;
            return (0, r.jsxs)(C.AutocompleteRowContent, {
                children: [(0, r.jsx)(C.AutocompleteRowIcon, {
                    children: i
                }), (0, r.jsx)(C.AutocompleteRowContentPrimary, {
                    children: (0, r.jsxs)(C.AutocompleteRowHeading, {
                        children: [t, e.name, t]
                    })
                }), s]
            })
        }
        constructor(...e) {
            super(...e), y(this, "layoutClass", o()(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall))
        }
    }), y(w, "GIFIntegration", class e extends G {
        renderContent() {
            let {
                width: e,
                height: t,
                src: n
            } = this.props;
            return (0, r.jsx)("img", {
                alt: "",
                src: n,
                width: e,
                height: t
            })
        }
        constructor(...e) {
            super(...e), y(this, "layoutClass", M.autocompleteRowHorizontal)
        }
    }), y(w, "Sticker", class e extends G {
        renderContent() {
            var e, t;
            let n;
            let {
                queryMatch: i,
                renderSticker: s,
                selected: a,
                sticker: o
            } = this.props, {
                hovered: l
            } = this.state;
            return (0, m.isStandardSticker)(o) ? n = null === (e = A.default.getStickerPack(o.pack_id)) || void 0 === e ? void 0 : e.name : (0, m.isGuildSticker)(o) && (n = null === (t = N.default.getGuild(o.guild_id)) || void 0 === t ? void 0 : t.name), (0, r.jsxs)(C.AutocompleteRowContent, {
                children: [(0, r.jsx)(C.AutocompleteRowIcon, {
                    children: s(o, l || !0 === a)
                }), (0, r.jsxs)(C.AutocompleteRowContentPrimary, {
                    children: [(0, r.jsx)(C.AutocompleteRowHeading, {
                        className: M.__invalid_stickerName,
                        children: o.name
                    }), null != i && (0, r.jsx)(C.AutocompleteRowSubheading, {
                        children: v.default.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
                            queryMatch: i
                        })
                    })]
                }), null != n && (0, r.jsx)(C.AutocompleteRowContentSecondary, {
                    children: n
                })]
            })
        }
        constructor(...e) {
            super(...e), y(this, "layoutClass", o()(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall))
        }
    }), y(w, "EmojiUpsell", class e extends G {
        renderContent() {
            return (0, r.jsx)(h.default, {
                emojis: this.props.emojis
            })
        }
    }), t.default = w
}