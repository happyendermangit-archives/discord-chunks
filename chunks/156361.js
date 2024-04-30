function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutocompleteRowId: function() {
            return b
        },
        getAutocompleteTitleId: function() {
            return G
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
        R = n("768581"),
        C = n("51144"),
        g = n("508688"),
        L = n("286908"),
        D = n("377087"),
        v = n("981631"),
        M = n("185923"),
        y = n("689938"),
        P = n("580384");

    function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        return null != e ? "autocomplete-".concat(e) : null
    }

    function G(e) {
        return "autocomplete-".concat(e, "-title")
    }
    let w = s.createContext(null);
    class B extends s.PureComponent {
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
                className: o()(P.clickable, i, n),
                id: null !== (t = b(s)) && void 0 !== t ? t : void 0,
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
                    className: P.base,
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
            super(e), U(this, "selectable", !0), U(this, "layoutClass", P.autocompleteRowVertical), U(this, "handleMouseEnter", () => {
                let {
                    onHover: e,
                    index: t,
                    selected: n
                } = this.props;
                null == e || n || "number" != typeof t || e(t)
            }), U(this, "handleClick", e => {
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
    class k extends(i = s.PureComponent) {
        render() {
            let {
                children: e,
                className: t,
                innerClassName: n,
                id: i,
                ...a
            } = this.props;
            return s.Children.count(e) > 0 ? (0, r.jsx)(w.Provider, {
                value: {
                    id: null != i ? i : ""
                },
                children: (0, r.jsx)("div", {
                    className: o()(P.autocomplete, t),
                    children: (0, r.jsx)("div", {
                        className: o()(P.autocompleteInner, n),
                        ...a,
                        children: e
                    })
                })
            }) : null
        }
    }
    U(k, "Generic", class e extends B {
        renderContent() {
            let {
                text: e,
                description: t
            } = this.props;
            return (0, r.jsxs)(g.AutocompleteRowContent, {
                children: [(0, r.jsx)(g.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(g.AutocompleteRowHeading, {
                        children: e
                    })
                }), null != t ? (0, r.jsx)(g.AutocompleteRowContentSecondary, {
                    children: t
                }) : null]
            })
        }
    }), U(k, "Loading", function(e) {
        let t = s.useMemo(() => u().random(60, 120), []);
        return (0, r.jsx)("div", {
            className: P.base,
            "aria-busy": !0,
            children: (0, r.jsx)(g.AutocompleteRowContent, {
                children: (0, r.jsx)(g.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(g.AutocompleteRowHeading, {
                        children: (0, r.jsx)("div", {
                            className: P.autocompletePlaceholder,
                            style: {
                                width: t
                            }
                        })
                    })
                })
            })
        })
    }), U(k, "Title", function(e) {
        let {
            title: t,
            className: n,
            children: i
        } = e, a = s.useContext(w);
        return (0, r.jsx)("div", {
            className: P.base,
            children: (0, r.jsxs)(_.Heading, {
                id: G(a.id),
                className: o()(P.contentTitle, n),
                variant: "heading-deprecated-12/semibold",
                children: [t, i]
            })
        })
    }), U(k, "Divider", class e extends B {
        renderContent() {
            let {
                className: e
            } = this.props;
            return (0, r.jsx)("div", {
                className: o()(e, P.divider)
            })
        }
        constructor(...e) {
            super(...e), U(this, "layoutClass", P.dividerContainer), U(this, "selectable", !1)
        }
    }), U(k, "User", class e extends B {
        renderContent() {
            let {
                user: e,
                nick: t,
                status: n,
                hidePersonalInformation: i,
                guildId: s
            } = this.props;
            return (0, r.jsxs)(g.AutocompleteRowContent, {
                children: [(0, r.jsx)(g.AutocompleteRowIcon, {
                    children: (0, r.jsx)(_.Avatar, {
                        size: _.AvatarSizes.SIZE_24,
                        src: e.getAvatarURL(s, 24),
                        "aria-hidden": !0,
                        status: n
                    })
                }), (0, r.jsx)(g.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(g.AutocompleteRowHeading, {
                        children: null != t ? t : C.default.getName(e)
                    })
                }), (0, r.jsxs)(g.AutocompleteRowContentSecondary, {
                    children: [(0, r.jsx)("span", {
                        className: P.__invalid_descriptionUsername,
                        children: C.default.getUserTag(e, {
                            mode: "username",
                            identifiable: i ? "never" : "always"
                        })
                    }), i || e.isPomelo() ? null : (0, r.jsxs)("span", {
                        className: P.descriptionDiscriminator,
                        children: ["#", e.discriminator]
                    })]
                })]
            })
        }
    }), U(k, "Role", class e extends B {
        renderContent() {
            let {
                role: e,
                hideDescription: t
            } = this.props, {
                colorString: n
            } = e, i = "dot" === c.default.roleStyle, s = "username" === c.default.roleStyle && null != n ? {
                color: n
            } : void 0;
            return (0, r.jsxs)(g.AutocompleteRowContent, {
                children: [(0, r.jsx)(g.AutocompleteRowContentPrimary, {
                    children: (0, r.jsxs)(g.AutocompleteRowHeading, {
                        children: [i && (0, r.jsx)(_.RoleDot, {
                            className: P.roleDot,
                            color: n,
                            tooltip: !1
                        }), (0, r.jsxs)("span", {
                            style: s,
                            children: ["@", e.name]
                        })]
                    })
                }), t ? null : (0, r.jsx)(g.AutocompleteRowContentSecondary, {
                    children: y.default.Messages.MENTION_USERS_WITH_ROLE
                })]
            })
        }
    }), U(k, "Channel", class e extends B {
        renderContent() {
            let {
                channel: e,
                category: t
            } = this.props, n = e.type === v.ChannelTypes.GUILD_CATEGORY ? L.default : (0, S.getChannelIconComponent)(e);
            return (0, r.jsxs)(g.AutocompleteRowContent, {
                children: [null != n && (0, r.jsx)(g.AutocompleteRowIcon, {
                    children: (0, r.jsx)(n, {
                        className: P.icon
                    })
                }), (0, r.jsx)(g.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(g.AutocompleteRowHeading, {
                        children: (0, f.computeChannelName)(e, O.default, p.default)
                    })
                }), null != t ? (0, r.jsx)(g.AutocompleteRowContentSecondary, {
                    children: t.name
                }) : null]
            })
        }
    }), U(k, "Command", class e extends B {
        renderContent() {
            let {
                command: e
            } = this.props;
            return (0, r.jsxs)(g.AutocompleteRowContent, {
                children: [(0, r.jsx)(g.AutocompleteRowIcon, {
                    children: (0, r.jsx)(D.default, {
                        className: P.icon,
                        foreground: P.iconForeground
                    })
                }), (0, r.jsx)(g.AutocompleteRowContentPrimary, {
                    children: (0, r.jsx)(g.AutocompleteRowHeading, {
                        children: e.name
                    })
                }), (0, r.jsx)(g.AutocompleteRowContentSecondary, {
                    children: e.description
                })]
            })
        }
    }), U(k, "NewCommand", class e extends B {
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
    }), U(k, "Emoji", class e extends B {
        renderContent() {
            let {
                emoji: e,
                sentinel: t,
                guild: n
            } = this.props, i = null != e.id ? (0, r.jsx)("img", {
                alt: "",
                className: P.emojiImage,
                src: R.default.getEmojiURL({
                    id: e.id,
                    animated: e.animated,
                    size: M.EMOJI_URL_BASE_SIZE
                })
            }) : (0, r.jsx)("span", {
                className: P.emojiRaw,
                children: e.surrogates
            }), s = null != n ? (0, r.jsx)(g.AutocompleteRowContentSecondary, {
                children: n.name
            }) : null;
            return (0, r.jsxs)(g.AutocompleteRowContent, {
                children: [(0, r.jsx)(g.AutocompleteRowIcon, {
                    children: i
                }), (0, r.jsx)(g.AutocompleteRowContentPrimary, {
                    children: (0, r.jsxs)(g.AutocompleteRowHeading, {
                        children: [t, e.name, t]
                    })
                }), s]
            })
        }
        constructor(...e) {
            super(...e), U(this, "layoutClass", o()(P.autocompleteRowVertical, P.autocompleteRowVerticalSmall))
        }
    }), U(k, "GIFIntegration", class e extends B {
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
            super(...e), U(this, "layoutClass", P.autocompleteRowHorizontal)
        }
    }), U(k, "Sticker", class e extends B {
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
            return (0, m.isStandardSticker)(o) ? n = null === (e = A.default.getStickerPack(o.pack_id)) || void 0 === e ? void 0 : e.name : (0, m.isGuildSticker)(o) && (n = null === (t = N.default.getGuild(o.guild_id)) || void 0 === t ? void 0 : t.name), (0, r.jsxs)(g.AutocompleteRowContent, {
                children: [(0, r.jsx)(g.AutocompleteRowIcon, {
                    children: s(o, l || !0 === a)
                }), (0, r.jsxs)(g.AutocompleteRowContentPrimary, {
                    children: [(0, r.jsx)(g.AutocompleteRowHeading, {
                        className: P.__invalid_stickerName,
                        children: o.name
                    }), null != i && (0, r.jsx)(g.AutocompleteRowSubheading, {
                        children: y.default.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
                            queryMatch: i
                        })
                    })]
                }), null != n && (0, r.jsx)(g.AutocompleteRowContentSecondary, {
                    children: n
                })]
            })
        }
        constructor(...e) {
            super(...e), U(this, "layoutClass", o()(P.autocompleteRowVertical, P.autocompleteRowVerticalSmall))
        }
    }), U(k, "EmojiUpsell", class e extends B {
        renderContent() {
            return (0, r.jsx)(h.default, {
                emojis: this.props.emojis
            })
        }
    }), t.default = k
}