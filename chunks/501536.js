function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutocompleteRowId: function() {
            return M
        },
        getAutocompleteTitleId: function() {
            return k
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
        _ = n("158998"),
        T = n("563911"),
        v = n("346955"),
        N = n("548775"),
        A = n("49111"),
        O = n("782340"),
        R = n("723199");

    function M(e) {
        return null != e ? "autocomplete-".concat(e) : null
    }

    function k(e) {
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
                className: s(R.clickable, l, n),
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
                children: (0, i.jsx)("div", {
                    className: R.base,
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
                    className: s(R.autocomplete, t),
                    children: (0, i.jsx)("div", {
                        className: s(R.autocompleteInner, n),
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
            return (0, i.jsxs)(T.AutocompleteRowContent, {
                children: [(0, i.jsx)(T.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(T.AutocompleteRowHeading, {
                        children: e
                    })
                }), null != t ? (0, i.jsx)(T.AutocompleteRowContentSecondary, {
                    children: t
                }) : null]
            })
        }
    }, P.Loading = function(e) {
        let t = l.useMemo(() => o.random(60, 120), []);
        return (0, i.jsx)("div", {
            className: R.base,
            "aria-busy": !0,
            children: (0, i.jsx)(T.AutocompleteRowContent, {
                children: (0, i.jsx)(T.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(T.AutocompleteRowHeading, {
                        children: (0, i.jsx)("div", {
                            className: R.autocompletePlaceholder,
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
            className: R.base,
            children: (0, i.jsxs)(d.Heading, {
                id: k(r.id),
                className: s(R.contentTitle, n),
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
                className: s(e, R.divider)
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = R.dividerContainer, this.selectable = !1
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
            return (0, i.jsxs)(T.AutocompleteRowContent, {
                children: [(0, i.jsx)(T.AutocompleteRowIcon, {
                    children: (0, i.jsx)(d.Avatar, {
                        size: d.AvatarSizes.SIZE_24,
                        src: e.getAvatarURL(a, 24),
                        "aria-hidden": !0,
                        status: n
                    })
                }), (0, i.jsx)(T.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(T.AutocompleteRowHeading, {
                        children: null != t ? t : _.default.getName(e)
                    })
                }), (0, i.jsxs)(T.AutocompleteRowContentSecondary, {
                    children: [(0, i.jsx)("span", {
                        className: R.descriptionUsername,
                        children: _.default.getUserTag(e, {
                            mode: "username",
                            identifiable: l ? "never" : "always"
                        })
                    }), l || e.isPomelo() ? null : (0, i.jsxs)("span", {
                        className: R.descriptionDiscriminator,
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
            return (0, i.jsxs)(T.AutocompleteRowContent, {
                children: [(0, i.jsx)(T.AutocompleteRowContentPrimary, {
                    children: (0, i.jsxs)(T.AutocompleteRowHeading, {
                        children: [l && (0, i.jsx)(d.RoleDot, {
                            className: R.roleDot,
                            color: n,
                            tooltip: !1
                        }), (0, i.jsxs)("span", {
                            style: s,
                            children: ["@", e.name]
                        })]
                    })
                }), t ? null : (0, i.jsx)(T.AutocompleteRowContentSecondary, {
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
            return (0, i.jsxs)(T.AutocompleteRowContent, {
                children: [null != n && (0, i.jsx)(T.AutocompleteRowIcon, {
                    children: (0, i.jsx)(n, {
                        className: R.icon
                    })
                }), (0, i.jsx)(T.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(T.AutocompleteRowHeading, {
                        children: (0, h.computeChannelName)(e, I.default, C.default)
                    })
                }), null != t ? (0, i.jsx)(T.AutocompleteRowContentSecondary, {
                    children: t.name
                }) : null]
            })
        }
    }, P.Command = class e extends b {
        renderContent() {
            let {
                command: e
            } = this.props;
            return (0, i.jsxs)(T.AutocompleteRowContent, {
                children: [(0, i.jsx)(T.AutocompleteRowIcon, {
                    children: (0, i.jsx)(N.default, {
                        className: R.icon,
                        foreground: R.iconForeground
                    })
                }), (0, i.jsx)(T.AutocompleteRowContentPrimary, {
                    children: (0, i.jsx)(T.AutocompleteRowHeading, {
                        children: e.name
                    })
                }), (0, i.jsx)(T.AutocompleteRowContentSecondary, {
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
                className: R.emojiImage,
                src: e.url
            }) : (0, i.jsx)("span", {
                className: R.emojiRaw,
                children: e.surrogates
            }), a = null != n ? (0, i.jsx)(T.AutocompleteRowContentSecondary, {
                children: n.name
            }) : null;
            return (0, i.jsxs)(T.AutocompleteRowContent, {
                children: [(0, i.jsx)(T.AutocompleteRowIcon, {
                    children: l
                }), (0, i.jsx)(T.AutocompleteRowContentPrimary, {
                    children: (0, i.jsxs)(T.AutocompleteRowHeading, {
                        children: [t, e.name, t]
                    })
                }), a]
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = s(R.autocompleteRowVertical, R.autocompleteRowVerticalSmall, this.props.isLocked ? R.premiumEmoji : null)
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
            super(...e), this.layoutClass = R.autocompleteRowHorizontal
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
            return (0, g.isStandardSticker)(r) ? n = null === (e = y.default.getStickerPack(r.pack_id)) || void 0 === e ? void 0 : e.name : (0, g.isGuildSticker)(r) && (n = null === (t = S.default.getGuild(r.guild_id)) || void 0 === t ? void 0 : t.name), (0, i.jsxs)(T.AutocompleteRowContent, {
                children: [(0, i.jsx)(T.AutocompleteRowIcon, {
                    children: a(r, o || !0 === s)
                }), (0, i.jsxs)(T.AutocompleteRowContentPrimary, {
                    children: [(0, i.jsx)(T.AutocompleteRowHeading, {
                        className: R.stickerName,
                        children: r.name
                    }), null != l && (0, i.jsx)(T.AutocompleteRowSubheading, {
                        children: O.default.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
                            queryMatch: l
                        })
                    })]
                }), null != n && (0, i.jsx)(T.AutocompleteRowContentSecondary, {
                    children: n
                })]
            })
        }
        constructor(...e) {
            super(...e), this.layoutClass = s(R.autocompleteRowVertical, R.autocompleteRowVerticalSmall)
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