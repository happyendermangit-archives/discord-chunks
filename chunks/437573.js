function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateEbayMetadataItems: function() {
            return I
        },
        generatePaypalMetadataItems: function() {
            return y
        },
        generateRedditMetadataItems: function() {
            return E
        },
        generateRoleConnectionMetadataItems: function() {
            return O
        },
        generateSteamMetadataItems: function() {
            return m
        },
        generateTikTokMetadataItems: function() {
            return h
        },
        generateTwitterMetadataItems: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("784184"),
        l = n("79738"),
        c = n("965067"),
        f = n("999325"),
        d = n("941504"),
        _ = n("178862");

    function E(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            o = [],
            i = Number(null !== (t = e[f.MetadataFields.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
            a = "1" === e[f.MetadataFields.REDDIT_GOLD],
            u = "1" === e[f.MetadataFields.REDDIT_MOD];
        return i > -1 && o.push(r.createElement(T, {
            className: n,
            key: f.MetadataFields.REDDIT_TOTAL_KARMA,
            count: i,
            label: d.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
        })), a && o.push(r.createElement(g, {
            className: n,
            key: f.MetadataFields.REDDIT_GOLD,
            label: d.default.Messages.CONNECTIONS_REDDIT_GOLD
        })), u && o.push(r.createElement(g, {
            className: n,
            key: f.MetadataFields.REDDIT_MOD,
            label: d.default.Messages.CONNECTIONS_REDDIT_MOD
        })), o
    }

    function p(e) {
        var t, n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            i = [],
            a = Number(null !== (t = e[f.MetadataFields.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
            u = Number(null !== (n = e[f.MetadataFields.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
        return a > -1 && i.push(r.createElement(T, {
            className: o,
            key: f.MetadataFields.TWITTER_STATUSES_COUNT,
            count: a,
            label: d.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
        })), u > -1 && i.push(r.createElement(T, {
            className: o,
            key: f.MetadataFields.TWITTER_FOLLOWERS_COUNT,
            count: u,
            label: d.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
        })), i
    }

    function m(e) {
        var t, o, i, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            u = [],
            s = Number(null !== (t = e[f.MetadataFields.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
            l = Number(null !== (o = e[f.MetadataFields.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== o ? o : -1),
            c = Number(null !== (i = e[f.MetadataFields.STEAM_ITEM_COUNT_TF2]) && void 0 !== i ? i : -1);
        return s > -1 && u.push(r.createElement(T, {
            className: a,
            key: f.MetadataFields.STEAM_GAME_COUNT,
            count: s,
            label: d.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
        })), l > -1 && u.push(r.createElement(v, {
            key: f.MetadataFields.STEAM_ITEM_COUNT_DOTA2,
            className: a,
            label: d.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                count: l
            }),
            imageSrc: n("448238"),
            imageAlt: d.default.Messages.CONNECTIONS_STEAM_DOTA2
        })), c > -1 && u.push(r.createElement(v, {
            key: f.MetadataFields.STEAM_ITEM_COUNT_TF2,
            className: a,
            label: d.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                count: c
            }),
            imageSrc: n("80730"),
            imageAlt: d.default.Messages.CONNECTIONS_STEAM_TF2
        })), u
    }

    function y(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = [];
        return "1" === e[f.MetadataFields.PAYPAL_VERIFIED] && n.push(r.createElement(g, {
            className: i()(t, _.paypalVerifiedTag),
            key: f.MetadataFields.PAYPAL_VERIFIED,
            label: d.default.Messages.CONNECTIONS_PAYPAL_VERIFIED
        })), n
    }

    function I(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            o = [],
            i = Number(null !== (t = e[f.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
            a = "1" === e[f.MetadataFields.EBAY_TOP_RATED_SELLER];
        return i > 0 && o.push(r.createElement(T, {
            className: n,
            key: f.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
            count: i,
            label: d.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
            percent: !0
        })), a && o.push(r.createElement(g, {
            className: n,
            key: f.MetadataFields.EBAY_TOP_RATED_SELLER,
            label: d.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
        })), o
    }

    function h(e) {
        var t, n, o, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            a = [],
            u = "1" === e[f.MetadataFields.TIKTOK_VERIFIED],
            s = Number(null !== (t = e[f.MetadataFields.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
            l = Number(null !== (n = e[f.MetadataFields.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
            c = Number(null !== (o = e[f.MetadataFields.TIKTOK_LIKES_COUNT]) && void 0 !== o ? o : -1);
        return s > -1 && a.push(r.createElement(T, {
            className: i,
            key: f.MetadataFields.TIKTOK_FOLLOWER_COUNT,
            count: s,
            label: d.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
        })), l > -1 && a.push(r.createElement(T, {
            className: i,
            key: f.MetadataFields.TIKTOK_FOLLOWING_COUNT,
            count: l,
            label: d.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
        })), c > -1 && a.push(r.createElement(T, {
            className: i,
            key: f.MetadataFields.TIKTOK_LIKES_COUNT,
            count: c,
            label: d.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
        })), u && a.push(r.createElement(g, {
            className: i,
            key: f.MetadataFields.TIKTOK_VERIFIED,
            label: d.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
        })), a
    }

    function O(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            o = [],
            i = Object.keys(e.metadata);
        if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === i.length) return o;
        var a = u().sortBy(i, function(t) {
                var n, r;
                return null === (r = e.application_metadata) || void 0 === r ? void 0 : null === (n = r[t]) || void 0 === n ? void 0 : n.name
            }),
            s = !0,
            l = !1,
            c = void 0;
        try {
            for (var d, _ = a[Symbol.iterator](); !(s = (d = _.next()).done); s = !0) {
                var E = d.value,
                    p = e.application_metadata[E];
                if (null != p) {
                    var m = e.metadata[E];
                    try {
                        switch (p.type) {
                            case f.MetadataItemTypes.BOOLEAN_EQUAL:
                            case f.MetadataItemTypes.BOOLEAN_NOT_EQUAL:
                                (p.type === f.MetadataItemTypes.BOOLEAN_EQUAL && "1" === m || p.type === f.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== m) && o.push(r.createElement(g, {
                                    className: t,
                                    key: p.key,
                                    label: p.name
                                }));
                                break;
                            case f.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                            case f.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                                o.push(r.createElement(S, {
                                    className: t,
                                    key: p.key,
                                    date: m,
                                    locale: n,
                                    label: p.name
                                }));
                                break;
                            case f.MetadataItemTypes.INTEGER_EQUAL:
                            case f.MetadataItemTypes.INTEGER_NOT_EQUAL:
                            case f.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                            case f.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                                o.push(r.createElement(T, {
                                    className: t,
                                    key: p.key,
                                    count: Number(m),
                                    label: p.name
                                }))
                        }
                    } catch (e) {}
                }
            }
        } catch (e) {
            l = !0, c = e
        } finally {
            try {
                !s && null != _.return && _.return()
            } finally {
                if (l) throw c
            }
        }
        return o
    }

    function T(e) {
        var t, n = e.count,
            o = e.label,
            a = e.className,
            u = e.percent,
            c = (0, l.shortenAndLocalizeNumber)(n) + (u ? "%" : "");
        return t = "string" == typeof o ? d.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
            name: o,
            value: c
        }) : o.format({
            value: c
        }), r.createElement(s.Text, {
            className: i()(_.connectedAccountVanityMetadata, a),
            variant: "text-xs/normal",
            color: "interactive-active"
        }, t)
    }

    function S(e) {
        var t = e.date,
            n = e.locale,
            o = e.label,
            a = e.className;
        return r.createElement(s.Text, {
            className: i()(_.connectedAccountVanityMetadata, a),
            variant: "text-xs/normal",
            color: "interactive-active"
        }, d.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
            value: (0, c.getCreatedAtDate)(t, n),
            name: o
        }))
    }

    function v(e) {
        var t = e.label,
            n = e.imageSrc,
            o = e.imageAlt,
            a = e.className;
        return r.createElement("div", {
            className: i()(_.connectedAccountVanityMetadata, _.connectedAccountVanityMetadataItem, a)
        }, r.createElement(s.Tooltip, {
            text: o
        }, function(e) {
            var t, i;
            return r.createElement("img", (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, e), i = (i = {
                src: n,
                alt: o,
                className: _.connectedAccountVanityMetadataItemIcon
            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }), t))
        }), r.createElement(s.Text, {
            variant: "text-xs/normal",
            color: "interactive-active"
        }, t))
    }

    function g(e) {
        var t = e.label,
            n = e.className;
        return r.createElement(s.Text, {
            variant: "text-xs/semibold",
            color: "interactive-active",
            className: i()(_.connectedAccountVanityMetadata, _.connectedAccountVanityMetadataTag, n)
        }, t)
    }
}