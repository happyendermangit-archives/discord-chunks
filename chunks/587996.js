function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAutocompleteRowId: function() {
            return F
        },
        getAutocompleteTitleId: function() {
            return V
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("392711"),
        s = n.n(u),
        l = n("762624"),
        c = n("784184"),
        f = n("622780"),
        d = n("861272"),
        _ = n("356438"),
        E = n("719208"),
        p = n("534965"),
        m = n("974901"),
        y = n("354820"),
        I = n("389712"),
        h = n("443699"),
        O = n("306912"),
        T = n("776982"),
        S = n("208454"),
        v = n("830567"),
        g = n("948876"),
        A = n("432559"),
        b = n("254936"),
        N = n("281767"),
        R = n("941504"),
        C = n("979318");

    function P(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function D(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function L(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function M(e, t, n) {
        return t && L(e.prototype, t), n && L(e, n), e
    }

    function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function w(e) {
        return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function k(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && B(e, t)
    }

    function G(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                U(e, t, n[t])
            })
        }
        return e
    }

    function B(e, t) {
        return (B = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function j(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = w(e);
            if (t) {
                var a = w(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : P(n)
        }
    }

    function F(e) {
        return null != e ? "autocomplete-".concat(e) : null
    }

    function V(e) {
        return "autocomplete-".concat(e, "-title")
    }
    var H = o.createContext(null),
        x = function(e) {
            k(n, e);
            var t = j(n);

            function n(e) {
                var r;
                return D(this, n), U(P(r = t.call(this, e)), "selectable", !0), U(P(r), "layoutClass", C.autocompleteRowVertical), U(P(r), "handleMouseEnter", function() {
                    var e = r.props,
                        t = e.onHover,
                        n = e.index,
                        o = e.selected;
                    null == t || o || "number" != typeof n || t(n)
                }), U(P(r), "handleClick", function(e) {
                    var t = r.props,
                        n = t.onClick,
                        o = t.index;
                    null != n && "number" == typeof o && n(o, e)
                }), r.state = {
                    hovered: !1
                }, r
            }
            return M(n, [{
                key: "isSelectable",
                value: function() {
                    return this.selectable
                }
            }, {
                key: "renderContent",
                value: function() {
                    throw Error("AutocompleteRow: renderContent must be extended")
                }
            }, {
                key: "renderClickable",
                value: function(e) {
                    var t, n, r, i = this,
                        u = this.layoutClass,
                        s = this.props,
                        l = s.className,
                        f = s.index,
                        d = s.selected,
                        _ = this.isSelectable();
                    return o.createElement(c.Clickable, (t = G({}, e), n = (n = {
                        className: a()(C.clickable, l, u),
                        id: null !== (r = F(f)) && void 0 !== r ? r : void 0,
                        onClick: _ ? this.handleClick : void 0,
                        onMouseMove: _ ? function() {
                            i.setState({
                                hovered: !0
                            }), i.handleMouseEnter()
                        } : void 0,
                        onMouseLeave: _ ? function() {
                            return i.setState({
                                hovered: !1
                            })
                        } : void 0,
                        role: "option",
                        "aria-disabled": !_,
                        "aria-selected": _ && d
                    }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }), t), o.createElement("div", {
                        className: C.base
                    }, this.renderContent()))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props.index;
                    return this.isSelectable() ? o.createElement(l.ListNavigatorItem, {
                        id: "".concat(t)
                    }, function(t) {
                        return e.renderClickable(t)
                    }) : this.renderClickable()
                }
            }]), n
        }(o.PureComponent),
        Y = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                return D(this, n), t.apply(this, arguments)
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    var e = this.props,
                        t = e.text,
                        n = e.description;
                    return o.createElement(g.AutocompleteRowContent, null, o.createElement(g.AutocompleteRowContentPrimary, null, o.createElement(g.AutocompleteRowHeading, null, t)), null != n ? o.createElement(g.AutocompleteRowContentSecondary, null, n) : null)
                }
            }]), n
        }(x),
        W = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                var e;
                return D(this, n), e = t.apply(this, arguments), U(P(e), "layoutClass", C.dividerContainer), U(P(e), "selectable", !1), e
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    var e = this.props.className;
                    return o.createElement("div", {
                        className: a()(e, C.divider)
                    })
                }
            }]), n
        }(x),
        K = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                return D(this, n), t.apply(this, arguments)
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    var e = this.props,
                        t = e.user,
                        n = e.nick,
                        r = e.status,
                        i = e.hidePersonalInformation,
                        a = e.guildId;
                    return o.createElement(g.AutocompleteRowContent, null, o.createElement(g.AutocompleteRowIcon, null, o.createElement(c.Avatar, {
                        size: c.AvatarSizes.SIZE_24,
                        src: t.getAvatarURL(a, 24),
                        "aria-hidden": !0,
                        status: r
                    })), o.createElement(g.AutocompleteRowContentPrimary, null, o.createElement(g.AutocompleteRowHeading, null, null != n ? n : v.default.getName(t))), o.createElement(g.AutocompleteRowContentSecondary, null, o.createElement("span", {
                        className: C.__invalid_descriptionUsername
                    }, v.default.getUserTag(t, {
                        mode: "username",
                        identifiable: i ? "never" : "always"
                    })), i || t.isPomelo() ? null : o.createElement("span", {
                        className: C.descriptionDiscriminator
                    }, "#", t.discriminator)))
                }
            }]), n
        }(x),
        z = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                return D(this, n), t.apply(this, arguments)
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    var e = this.props,
                        t = e.role,
                        n = e.hideDescription,
                        r = t.colorString,
                        i = "dot" === f.default.roleStyle,
                        a = "username" === f.default.roleStyle && null != r ? {
                            color: r
                        } : void 0;
                    return o.createElement(g.AutocompleteRowContent, null, o.createElement(g.AutocompleteRowContentPrimary, null, o.createElement(g.AutocompleteRowHeading, null, i && o.createElement(c.RoleDot, {
                        className: C.roleDot,
                        color: r,
                        tooltip: !1
                    }), o.createElement("span", {
                        style: a
                    }, "@", t.name))), n ? null : o.createElement(g.AutocompleteRowContentSecondary, null, R.default.Messages.MENTION_USERS_WITH_ROLE))
                }
            }]), n
        }(x),
        X = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                return D(this, n), t.apply(this, arguments)
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    var e = this.props,
                        t = e.channel,
                        n = e.category,
                        r = t.type === N.ChannelTypes.GUILD_CATEGORY ? A.default : (0, m.getChannelIconComponent)(t);
                    return o.createElement(g.AutocompleteRowContent, null, null != r && o.createElement(g.AutocompleteRowIcon, null, o.createElement(r, {
                        className: C.icon
                    })), o.createElement(g.AutocompleteRowContentPrimary, null, o.createElement(g.AutocompleteRowHeading, null, (0, p.computeChannelName)(t, S.default, T.default))), null != n ? o.createElement(g.AutocompleteRowContentSecondary, null, n.name) : null)
                }
            }]), n
        }(x),
        q = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                return D(this, n), t.apply(this, arguments)
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    var e = this.props.command;
                    return o.createElement(g.AutocompleteRowContent, null, o.createElement(g.AutocompleteRowIcon, null, o.createElement(b.default, {
                        className: C.icon,
                        foreground: C.iconForeground
                    })), o.createElement(g.AutocompleteRowContentPrimary, null, o.createElement(g.AutocompleteRowHeading, null, e.name)), o.createElement(g.AutocompleteRowContentSecondary, null, e.description))
                }
            }]), n
        }(x),
        Q = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                return D(this, n), t.apply(this, arguments)
            }
            return M(n, [{
                key: "isSelectable",
                value: function() {
                    return this.props.command.inputType !== d.ApplicationCommandInputType.PLACEHOLDER
                }
            }, {
                key: "renderContent",
                value: function() {
                    var e = this.props,
                        t = e.command,
                        n = e.channel,
                        r = e.showImage,
                        i = e.section,
                        a = e.selected,
                        u = this.state.hovered,
                        s = this.isSelectable();
                    return t.inputType === d.ApplicationCommandInputType.PLACEHOLDER ? o.createElement(E.default, null) : o.createElement(_.default, {
                        command: t,
                        channel: n,
                        showImage: r,
                        showOptions: u || s && a,
                        section: i,
                        isSelectable: s
                    })
                }
            }]), n
        }(x),
        J = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                var e;
                return D(this, n), e = t.apply(this, arguments), U(P(e), "layoutClass", a()(C.autocompleteRowVertical, C.autocompleteRowVerticalSmall, e.props.isLocked ? C.premiumEmoji : null)), e
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    var e = this.props,
                        t = e.emoji,
                        n = e.sentinel,
                        r = e.guild,
                        i = null != t.url && "" !== t.url ? o.createElement("img", {
                            alt: "",
                            className: C.emojiImage,
                            src: t.url
                        }) : o.createElement("span", {
                            className: C.emojiRaw
                        }, t.surrogates),
                        a = null != r ? o.createElement(g.AutocompleteRowContentSecondary, null, r.name) : null;
                    return o.createElement(g.AutocompleteRowContent, null, o.createElement(g.AutocompleteRowIcon, null, i), o.createElement(g.AutocompleteRowContentPrimary, null, o.createElement(g.AutocompleteRowHeading, null, n, t.name, n)), a)
                }
            }]), n
        }(x),
        Z = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                var e;
                return D(this, n), e = t.apply(this, arguments), U(P(e), "layoutClass", a()(C.autocompleteRowVertical, C.autocompleteRowVerticalSmall)), e
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    var e, t, n, r = this.props,
                        i = r.queryMatch,
                        a = r.renderSticker,
                        u = r.selected,
                        s = r.sticker,
                        l = this.state.hovered;
                    return (0, h.isStandardSticker)(s) ? e = null === (t = I.default.getStickerPack(s.pack_id)) || void 0 === t ? void 0 : t.name : (0, h.isGuildSticker)(s) && (e = null === (n = O.default.getGuild(s.guild_id)) || void 0 === n ? void 0 : n.name), o.createElement(g.AutocompleteRowContent, null, o.createElement(g.AutocompleteRowIcon, null, a(s, l || !0 === u)), o.createElement(g.AutocompleteRowContentPrimary, null, o.createElement(g.AutocompleteRowHeading, {
                        className: C.__invalid_stickerName
                    }, s.name), null != i && o.createElement(g.AutocompleteRowSubheading, null, R.default.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
                        queryMatch: i
                    }))), null != e && o.createElement(g.AutocompleteRowContentSecondary, null, e))
                }
            }]), n
        }(x),
        $ = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                var e;
                return D(this, n), e = t.apply(this, arguments), U(P(e), "layoutClass", C.autocompleteRowHorizontal), e
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    var e = this.props,
                        t = e.width,
                        n = e.height,
                        r = e.src;
                    return o.createElement("img", {
                        alt: "",
                        src: r,
                        width: t,
                        height: n
                    })
                }
            }]), n
        }(x),
        ee = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                return D(this, n), t.apply(this, arguments)
            }
            return M(n, [{
                key: "renderContent",
                value: function() {
                    return o.createElement(y.default, {
                        emojis: this.props.emojis
                    })
                }
            }]), n
        }(x),
        et = function(e) {
            k(n, e);
            var t = j(n);

            function n() {
                return D(this, n), t.apply(this, arguments)
            }
            return M(n, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.className,
                        r = e.innerClassName,
                        i = e.id,
                        u = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) {
                                    if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                            }
                            return o
                        }(e, ["children", "className", "innerClassName", "id"]);
                    return o.Children.count(t) > 0 ? o.createElement(H.Provider, {
                        value: {
                            id: null != i ? i : ""
                        }
                    }, o.createElement("div", {
                        className: a()(C.autocomplete, n)
                    }, o.createElement("div", G({
                        className: a()(C.autocompleteInner, r)
                    }, u), t))) : null
                }
            }]), n
        }(o.PureComponent);
    U(et, "Generic", Y), U(et, "Loading", function(e) {
        var t = o.useMemo(function() {
            return s().random(60, 120)
        }, []);
        return o.createElement("div", {
            className: C.base,
            "aria-busy": !0
        }, o.createElement(g.AutocompleteRowContent, null, o.createElement(g.AutocompleteRowContentPrimary, null, o.createElement(g.AutocompleteRowHeading, null, o.createElement("div", {
            className: C.autocompletePlaceholder,
            style: {
                width: t
            }
        })))))
    }), U(et, "Title", function(e) {
        var t = e.title,
            n = e.className,
            r = e.children,
            i = o.useContext(H);
        return o.createElement("div", {
            className: C.base
        }, o.createElement(c.Heading, {
            id: V(i.id),
            className: a()(C.contentTitle, n),
            variant: "heading-deprecated-12/semibold"
        }, t, r))
    }), U(et, "Divider", W), U(et, "User", K), U(et, "Role", z), U(et, "Channel", X), U(et, "Command", q), U(et, "NewCommand", Q), U(et, "Emoji", J), U(et, "GIFIntegration", $), U(et, "Sticker", Z), U(et, "EmojiUpsell", ee), t.default = et
}