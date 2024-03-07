function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutocompleteRowId: function() {
            return M
        },
        getAutocompleteTitleId: function() {
            return L
        },
        default: function() {
            return U
        }
    }), n("70102"), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("974667"),
        d = n("77078"),
        c = n("206230"),
        f = n("524768"),
        m = n("596182"),
        p = n("41884"),
        h = n("679653"),
        E = n("419830"),
        g = n("404345"),
        S = n("364685"),
        C = n("24373"),
        T = n("305961"),
        v = n("27618"),
        I = n("697218"),
        _ = n("158998"),
        N = n("563911"),
        A = n("346955"),
        x = n("548775"),
        y = n("49111"),
        O = n("782340"),
        R = n("723199");

    function M(e) {
        return null != e ? "autocomplete-".concat(e) : null
    }

    function L(e) {
        return "autocomplete-".concat(e, "-title")
    }
    let P = i.createContext(null);
    class b extends i.PureComponent {
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
                    index: a,
                    selected: r
                }
            } = this, o = this.isSelectable();
            return (0, l.jsx)(d.Clickable, {
                ...e,
                className: s(R.clickable, i, n),
                id: null !== (t = M(a)) && void 0 !== t ? t : void 0,
                onClick: o ? this.handleClick : void 0,
                onMouseMove: o ? () => {
                    this.setState({
                        hovered: !0
                    }), this.handleMouseEnter()
                } : void 0,
                onMouseLeave: o ? () => this.setState({
                    hovered: !1
                }) : void 0,
                role: "option",
                "aria-disabled": !o,
                "aria-selected": o && r,
                children: (0, l.jsx)("div", {
                    className: R.base,
                    children: this.renderContent()
                })
            })
        }
        render() {
            let {
                index: e
            } = this.props, t = this.isSelectable();
            return t ? (0, l.jsx)(u.ListNavigatorItem, {
                id: "".concat(e),
                children: e => this.renderClickable(e)
            }) : this.renderClickable()
        }
        constructor(e) {
            super(e), this.selectable = !0, this.layoutClass = R.autocompleteRowVertical, this.handleMouseEnter = () => {
                let {
                    onHover: e,
                    index: t,
                    selected: n
                } = this.props;
                null == e || n || "number" != typeof t || e(t)
            }, this.handleClick = e => {
                let {
                    onClick: t,
                    index: n
                } = this.props;
                null != t && "number" == typeof n && t(n, e)
            }, this.state = {
                hovered: !1
            }
        }
    }
    class j extends i.PureComponent {
        render() {
            let {
                children: e,
                className: t,
                innerClassName: n,
                id: a,
                ...r
            } = this.props;
            return i.Children.count(e) > 0 ? (0, l.jsx)(P.Provider, {
                value: {
                    id: null != a ? a : ""
                },
                children: (0, l.jsx)("div", {
                    className: s(R.autocomplete, t),
                    children: (0, l.jsx)("div", {
                        className: s(R.autocompleteInner, n),
                        ...r,
                        children: e
                    })
                })
            }) : null
        }
    }
    j.Generic = class e extends b {
        renderContent() {
            let {
                text: e,
                description: t
            } = this.props;
            return (0, l.jsxs)(N.AutocompleteRowContent, {
                children: [(0, l.jsx)(N.AutocompleteRowContentPrimary, {
                    children: (0, l.jsx)(N.AutocompleteRowHeading, {
                        children: e
                    })
                }), null != t ? (0, l.jsx)(N.AutocompleteRowContentSecondary, {
                    children: t
                }) : null]
            })
        }
    }, j.Loading = function(e) {
        let t = i.useMemo(() => o.random(60, 120), []);
        return (0, l.jsx)("div", {
            className: R.base,
            "aria-busy": !0,
            children: (0, l.jsx)(N.AutocompleteRowContent, {
                children: (0, l.jsx)(N.AutocompleteRowContentPrimary, {
                    children: (0, l.jsx)(N.AutocompleteRowHeading, {
                        children: (0, l.jsx)("div", {
                            className: R.autocompletePlaceholder,
                            style: {
                                width: t
                            }
                        })
                    })
                })
            })
        })
    }, j.Title = function(e) {
        let {
            title: t,
            className: n,
            children: a
        } = e, r = i.useContext(P);
        return (0, l.jsx)("div", {
            className: R.base,
            children: (0, l.jsxs)(d.Heading, {
                id: L(r.id),
                className: s(R.contentTitle, n),
                variant: "heading-deprecated-12/semibold",
                children: [t, a]
            })
        })
    }, j.Divider = class e extends b {
        renderContent() {
            let {
                className: e
            } = this.props;
            return (0, l.jsx)("div", {
                className: s(e, R.divider)
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = R.dividerContainer, this.selectable = !1
        }
    }, j.User = class e extends b {
        renderContent() {
            let {
                user: e,
                nick: t,
                status: n,
                hidePersonalInformation: i,
                guildId: a
            } = this.props;
            return (0, l.jsxs)(N.AutocompleteRowContent, {
                children: [(0, l.jsx)(N.AutocompleteRowIcon, {
                    children: (0, l.jsx)(d.Avatar, {
                        size: d.AvatarSizes.SIZE_24,
                        src: e.getAvatarURL(a, 24),
                        "aria-hidden": !0,
                        status: n
                    })
                }), (0, l.jsx)(N.AutocompleteRowContentPrimary, {
                    children: (0, l.jsx)(N.AutocompleteRowHeading, {
                        children: null != t ? t : _.default.getName(e)
                    })
                }), (0, l.jsxs)(N.AutocompleteRowContentSecondary, {
                    children: [(0, l.jsx)("span", {
                        className: R.descriptionUsername,
                        children: _.default.getUserTag(e, {
                            mode: "username",
                            identifiable: i ? "never" : "always"
                        })
                    }), i || e.isPomelo() ? null : (0, l.jsxs)("span", {
                        className: R.descriptionDiscriminator,
                        children: ["#", e.discriminator]
                    })]
                })]
            })
        }
    }, j.Role = class e extends b {
        renderContent() {
            let {
                role: e,
                hideDescription: t
            } = this.props, {
                colorString: n
            } = e, i = "dot" === c.default.roleStyle, a = "username" === c.default.roleStyle && null != n, s = a ? {
                color: n
            } : void 0;
            return (0, l.jsxs)(N.AutocompleteRowContent, {
                children: [(0, l.jsx)(N.AutocompleteRowContentPrimary, {
                    children: (0, l.jsxs)(N.AutocompleteRowHeading, {
                        children: [i && (0, l.jsx)(d.RoleDot, {
                            className: R.roleDot,
                            color: n,
                            tooltip: !1
                        }), (0, l.jsxs)("span", {
                            style: s,
                            children: ["@", e.name]
                        })]
                    })
                }), t ? null : (0, l.jsx)(N.AutocompleteRowContentSecondary, {
                    children: O.default.Messages.MENTION_USERS_WITH_ROLE
                })]
            })
        }
    }, j.Channel = class e extends b {
        renderContent() {
            let {
                channel: e,
                category: t
            } = this.props, n = e.type === y.ChannelTypes.GUILD_CATEGORY ? A.default : (0, E.getChannelIconComponent)(e);
            return (0, l.jsxs)(N.AutocompleteRowContent, {
                children: [null != n && (0, l.jsx)(N.AutocompleteRowIcon, {
                    children: (0, l.jsx)(n, {
                        className: R.icon
                    })
                }), (0, l.jsx)(N.AutocompleteRowContentPrimary, {
                    children: (0, l.jsx)(N.AutocompleteRowHeading, {
                        children: (0, h.computeChannelName)(e, I.default, v.default)
                    })
                }), null != t ? (0, l.jsx)(N.AutocompleteRowContentSecondary, {
                    children: t.name
                }) : null]
            })
        }
    }, j.Command = class e extends b {
        renderContent() {
            let {
                command: e
            } = this.props;
            return (0, l.jsxs)(N.AutocompleteRowContent, {
                children: [(0, l.jsx)(N.AutocompleteRowIcon, {
                    children: (0, l.jsx)(x.default, {
                        className: R.icon,
                        foreground: R.iconForeground
                    })
                }), (0, l.jsx)(N.AutocompleteRowContentPrimary, {
                    children: (0, l.jsx)(N.AutocompleteRowHeading, {
                        children: e.name
                    })
                }), (0, l.jsx)(N.AutocompleteRowContentSecondary, {
                    children: e.description
                })]
            })
        }
    }, j.NewCommand = class e extends b {
        isSelectable() {
            return this.props.command.inputType !== f.ApplicationCommandInputType.PLACEHOLDER
        }
        renderContent() {
            let {
                command: e,
                channel: t,
                showImage: n,
                section: i,
                selected: a
            } = this.props, {
                hovered: s
            } = this.state, r = this.isSelectable();
            return e.inputType === f.ApplicationCommandInputType.PLACEHOLDER ? (0, l.jsx)(p.default, {}) : (0, l.jsx)(m.default, {
                command: e,
                channel: t,
                showImage: n,
                showOptions: s || r && a,
                section: i,
                isSelectable: r
            })
        }
    }, j.Emoji = class e extends b {
        renderContent() {
            let {
                emoji: e,
                sentinel: t,
                guild: n
            } = this.props, i = null != e.url && "" !== e.url ? (0, l.jsx)("img", {
                alt: "",
                className: R.emojiImage,
                src: e.url
            }) : (0, l.jsx)("span", {
                className: R.emojiRaw,
                children: e.surrogates
            }), a = null != n ? (0, l.jsx)(N.AutocompleteRowContentSecondary, {
                children: n.name
            }) : null;
            return (0, l.jsxs)(N.AutocompleteRowContent, {
                children: [(0, l.jsx)(N.AutocompleteRowIcon, {
                    children: i
                }), (0, l.jsx)(N.AutocompleteRowContentPrimary, {
                    children: (0, l.jsxs)(N.AutocompleteRowHeading, {
                        children: [t, e.name, t]
                    })
                }), a]
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = s(R.autocompleteRowVertical, R.autocompleteRowVerticalSmall, this.props.isLocked ? R.premiumEmoji : null)
        }
    }, j.GIFIntegration = class e extends b {
        renderContent() {
            let {
                width: e,
                height: t,
                src: n
            } = this.props;
            return (0, l.jsx)("img", {
                alt: "",
                src: n,
                width: e,
                height: t
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = R.autocompleteRowHorizontal
        }
    }, j.Sticker = class e extends b {
        renderContent() {
            var e, t;
            let n;
            let {
                queryMatch: i,
                renderSticker: a,
                selected: s,
                sticker: r
            } = this.props, {
                hovered: o
            } = this.state;
            return (0, C.isStandardSticker)(r) ? n = null === (e = S.default.getStickerPack(r.pack_id)) || void 0 === e ? void 0 : e.name : (0, C.isGuildSticker)(r) && (n = null === (t = T.default.getGuild(r.guild_id)) || void 0 === t ? void 0 : t.name), (0, l.jsxs)(N.AutocompleteRowContent, {
                children: [(0, l.jsx)(N.AutocompleteRowIcon, {
                    children: a(r, o || !0 === s)
                }), (0, l.jsxs)(N.AutocompleteRowContentPrimary, {
                    children: [(0, l.jsx)(N.AutocompleteRowHeading, {
                        className: R.stickerName,
                        children: r.name
                    }), null != i && (0, l.jsx)(N.AutocompleteRowSubheading, {
                        children: O.default.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
                            queryMatch: i
                        })
                    })]
                }), null != n && (0, l.jsx)(N.AutocompleteRowContentSecondary, {
                    children: n
                })]
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = s(R.autocompleteRowVertical, R.autocompleteRowVerticalSmall)
        }
    }, j.EmojiUpsell = class e extends b {
        renderContent() {
            return (0, l.jsx)(g.default, {
                emojis: this.props.emojis
            })
        }
    };
    var U = j
}