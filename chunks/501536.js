function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutocompleteRowId: function() {
            return k
        },
        getAutocompleteTitleId: function() {
            return R
        },
        default: function() {
            return j
        }
    }), n("70102"), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("974667"),
        d = n("77078"),
        c = n("206230"),
        f = n("524768"),
        p = n("596182"),
        m = n("41884"),
        h = n("679653"),
        x = n("419830"),
        E = n("404345"),
        y = n("364685"),
        g = n("24373"),
        S = n("305961"),
        C = n("27618"),
        I = n("697218"),
        T = n("158998"),
        _ = n("563911"),
        v = n("346955"),
        N = n("548775"),
        A = n("49111"),
        O = n("782340"),
        M = n("723199");

    function k(e) {
        return null != e ? "autocomplete-".concat(e) : null
    }

    function R(e) {
        return "autocomplete-".concat(e, "-title")
    }
    let L = l.createContext(null);
    class b extends l.PureComponent {
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
                    className: l,
                    index: a,
                    selected: r
                }
            } = this, o = this.isSelectable();
            return (0, i.jsx)(d.Clickable, {
                ...e,
                className: s(M.clickable, l, n),
                id: null !== (t = k(a)) && void 0 !== t ? t : void 0,
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
                children: (0, i.jsx)("div", {
                    className: M.base,
                    children: this.renderContent()
                })
            })
        }
        render() {
            let {
                index: e
            } = this.props, t = this.isSelectable();
            return t ? (0, i.jsx)(u.ListNavigatorItem, {
                id: "".concat(e),
                children: e => this.renderClickable(e)
            }) : this.renderClickable()
        }
        constructor(e) {
            super(e), this.selectable = !0, this.layoutClass = M.autocompleteRowVertical, this.handleMouseEnter = () => {
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
    class P extends l.PureComponent {
        render() {
            let {
                children: e,
                className: t,
                innerClassName: n,
                id: a,
                ...r
            } = this.props;
            return l.Children.count(e) > 0 ? (0, i.jsx)(L.Provider, {
                value: {
                    id: null != a ? a : ""
                },
                children: (0, i.jsx)("div", {
                    className: s(M.autocomplete, t),
                    children: (0, i.jsx)("div", {
                        className: s(M.autocompleteInner, n),
                        ...r,
                        children: e
                    })
                })
            }) : null
        }
    }
    P.Generic = class e extends b {
        renderContent() {
            let {
                text: e,
                description: t
            } = this.props;
            return (0, i.jsxs)(_.AutocompleteRowContent, {
                children: [(0, i.jsx)(_.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(_.AutocompleteRowHeading, {
                        children: e
                    })
                }), null != t ? (0, i.jsx)(_.AutocompleteRowContentSecondary, {
                    children: t
                }) : null]
            })
        }
    }, P.Loading = function(e) {
        let t = l.useMemo(() => o.random(60, 120), []);
        return (0, i.jsx)("div", {
            className: M.base,
            "aria-busy": !0,
            children: (0, i.jsx)(_.AutocompleteRowContent, {
                children: (0, i.jsx)(_.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(_.AutocompleteRowHeading, {
                        children: (0, i.jsx)("div", {
                            className: M.autocompletePlaceholder,
                            style: {
                                width: t
                            }
                        })
                    })
                })
            })
        })
    }, P.Title = function(e) {
        let {
            title: t,
            className: n,
            children: a
        } = e, r = l.useContext(L);
        return (0, i.jsx)("div", {
            className: M.base,
            children: (0, i.jsxs)(d.Heading, {
                id: R(r.id),
                className: s(M.contentTitle, n),
                variant: "heading-deprecated-12/semibold",
                children: [t, a]
            })
        })
    }, P.Divider = class e extends b {
        renderContent() {
            let {
                className: e
            } = this.props;
            return (0, i.jsx)("div", {
                className: s(e, M.divider)
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = M.dividerContainer, this.selectable = !1
        }
    }, P.User = class e extends b {
        renderContent() {
            let {
                user: e,
                nick: t,
                status: n,
                hidePersonalInformation: l,
                guildId: a
            } = this.props;
            return (0, i.jsxs)(_.AutocompleteRowContent, {
                children: [(0, i.jsx)(_.AutocompleteRowIcon, {
                    children: (0, i.jsx)(d.Avatar, {
                        size: d.AvatarSizes.SIZE_24,
                        src: e.getAvatarURL(a, 24),
                        "aria-hidden": !0,
                        status: n
                    })
                }), (0, i.jsx)(_.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(_.AutocompleteRowHeading, {
                        children: null != t ? t : T.default.getName(e)
                    })
                }), (0, i.jsxs)(_.AutocompleteRowContentSecondary, {
                    children: [(0, i.jsx)("span", {
                        className: M.descriptionUsername,
                        children: T.default.getUserTag(e, {
                            mode: "username",
                            identifiable: l ? "never" : "always"
                        })
                    }), l || e.isPomelo() ? null : (0, i.jsxs)("span", {
                        className: M.descriptionDiscriminator,
                        children: ["#", e.discriminator]
                    })]
                })]
            })
        }
    }, P.Role = class e extends b {
        renderContent() {
            let {
                role: e,
                hideDescription: t
            } = this.props, {
                colorString: n
            } = e, l = "dot" === c.default.roleStyle, a = "username" === c.default.roleStyle && null != n, s = a ? {
                color: n
            } : void 0;
            return (0, i.jsxs)(_.AutocompleteRowContent, {
                children: [(0, i.jsx)(_.AutocompleteRowContentPrimary, {
                    children: (0, i.jsxs)(_.AutocompleteRowHeading, {
                        children: [l && (0, i.jsx)(d.RoleDot, {
                            className: M.roleDot,
                            color: n,
                            tooltip: !1
                        }), (0, i.jsxs)("span", {
                            style: s,
                            children: ["@", e.name]
                        })]
                    })
                }), t ? null : (0, i.jsx)(_.AutocompleteRowContentSecondary, {
                    children: O.default.Messages.MENTION_USERS_WITH_ROLE
                })]
            })
        }
    }, P.Channel = class e extends b {
        renderContent() {
            let {
                channel: e,
                category: t
            } = this.props, n = e.type === A.ChannelTypes.GUILD_CATEGORY ? v.default : (0, x.getChannelIconComponent)(e);
            return (0, i.jsxs)(_.AutocompleteRowContent, {
                children: [null != n && (0, i.jsx)(_.AutocompleteRowIcon, {
                    children: (0, i.jsx)(n, {
                        className: M.icon
                    })
                }), (0, i.jsx)(_.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(_.AutocompleteRowHeading, {
                        children: (0, h.computeChannelName)(e, I.default, C.default)
                    })
                }), null != t ? (0, i.jsx)(_.AutocompleteRowContentSecondary, {
                    children: t.name
                }) : null]
            })
        }
    }, P.Command = class e extends b {
        renderContent() {
            let {
                command: e
            } = this.props;
            return (0, i.jsxs)(_.AutocompleteRowContent, {
                children: [(0, i.jsx)(_.AutocompleteRowIcon, {
                    children: (0, i.jsx)(N.default, {
                        className: M.icon,
                        foreground: M.iconForeground
                    })
                }), (0, i.jsx)(_.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(_.AutocompleteRowHeading, {
                        children: e.name
                    })
                }), (0, i.jsx)(_.AutocompleteRowContentSecondary, {
                    children: e.description
                })]
            })
        }
    }, P.NewCommand = class e extends b {
        isSelectable() {
            return this.props.command.inputType !== f.ApplicationCommandInputType.PLACEHOLDER
        }
        renderContent() {
            let {
                command: e,
                channel: t,
                showImage: n,
                section: l,
                selected: a
            } = this.props, {
                hovered: s
            } = this.state, r = this.isSelectable();
            return e.inputType === f.ApplicationCommandInputType.PLACEHOLDER ? (0, i.jsx)(m.default, {}) : (0, i.jsx)(p.default, {
                command: e,
                channel: t,
                showImage: n,
                showOptions: s || r && a,
                section: l,
                isSelectable: r
            })
        }
    }, P.Emoji = class e extends b {
        renderContent() {
            let {
                emoji: e,
                sentinel: t,
                guild: n
            } = this.props, l = null != e.url && "" !== e.url ? (0, i.jsx)("img", {
                alt: "",
                className: M.emojiImage,
                src: e.url
            }) : (0, i.jsx)("span", {
                className: M.emojiRaw,
                children: e.surrogates
            }), a = null != n ? (0, i.jsx)(_.AutocompleteRowContentSecondary, {
                children: n.name
            }) : null;
            return (0, i.jsxs)(_.AutocompleteRowContent, {
                children: [(0, i.jsx)(_.AutocompleteRowIcon, {
                    children: l
                }), (0, i.jsx)(_.AutocompleteRowContentPrimary, {
                    children: (0, i.jsxs)(_.AutocompleteRowHeading, {
                        children: [t, e.name, t]
                    })
                }), a]
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = s(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall, this.props.isLocked ? M.premiumEmoji : null)
        }
    }, P.GIFIntegration = class e extends b {
        renderContent() {
            let {
                width: e,
                height: t,
                src: n
            } = this.props;
            return (0, i.jsx)("img", {
                alt: "",
                src: n,
                width: e,
                height: t
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = M.autocompleteRowHorizontal
        }
    }, P.Sticker = class e extends b {
        renderContent() {
            var e, t;
            let n;
            let {
                queryMatch: l,
                renderSticker: a,
                selected: s,
                sticker: r
            } = this.props, {
                hovered: o
            } = this.state;
            return (0, g.isStandardSticker)(r) ? n = null === (e = y.default.getStickerPack(r.pack_id)) || void 0 === e ? void 0 : e.name : (0, g.isGuildSticker)(r) && (n = null === (t = S.default.getGuild(r.guild_id)) || void 0 === t ? void 0 : t.name), (0, i.jsxs)(_.AutocompleteRowContent, {
                children: [(0, i.jsx)(_.AutocompleteRowIcon, {
                    children: a(r, o || !0 === s)
                }), (0, i.jsxs)(_.AutocompleteRowContentPrimary, {
                    children: [(0, i.jsx)(_.AutocompleteRowHeading, {
                        className: M.stickerName,
                        children: r.name
                    }), null != l && (0, i.jsx)(_.AutocompleteRowSubheading, {
                        children: O.default.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
                            queryMatch: l
                        })
                    })]
                }), null != n && (0, i.jsx)(_.AutocompleteRowContentSecondary, {
                    children: n
                })]
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = s(M.autocompleteRowVertical, M.autocompleteRowVerticalSmall)
        }
    }, P.EmojiUpsell = class e extends b {
        renderContent() {
            return (0, i.jsx)(E.default, {
                emojis: this.props.emojis
            })
        }
    };
    var j = P
}