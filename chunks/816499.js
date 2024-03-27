function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateRedditMetadataItems: function() {
            return p
        },
        generateTwitterMetadataItems: function() {
            return h
        },
        generateSteamMetadataItems: function() {
            return x
        },
        generatePaypalMetadataItems: function() {
            return E
        },
        generateEbayMetadataItems: function() {
            return y
        },
        generateTikTokMetadataItems: function() {
            return g
        },
        generateRoleConnectionMetadataItems: function() {
            return S
        }
    }), n("424973"), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("917351"),
        r = n.n(s),
        o = n("77078"),
        u = n("240481"),
        d = n("535013"),
        c = n("214509"),
        f = n("782340"),
        m = n("483263");

    function p(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            l = [],
            a = Number(null !== (t = e[c.MetadataFields.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
            s = "1" === e[c.MetadataFields.REDDIT_GOLD],
            r = "1" === e[c.MetadataFields.REDDIT_MOD];
        return a > -1 && l.push((0, i.jsx)(C, {
            className: n,
            count: a,
            label: f.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
        }, c.MetadataFields.REDDIT_TOTAL_KARMA)), s && l.push((0, i.jsx)(I, {
            className: n,
            label: f.default.Messages.CONNECTIONS_REDDIT_GOLD
        }, c.MetadataFields.REDDIT_GOLD)), r && l.push((0, i.jsx)(I, {
            className: n,
            label: f.default.Messages.CONNECTIONS_REDDIT_MOD
        }, c.MetadataFields.REDDIT_MOD)), l
    }

    function h(e) {
        var t, n;
        let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            a = [],
            s = Number(null !== (t = e[c.MetadataFields.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
            r = Number(null !== (n = e[c.MetadataFields.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
        return s > -1 && a.push((0, i.jsx)(C, {
            className: l,
            count: s,
            label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
        }, c.MetadataFields.TWITTER_STATUSES_COUNT)), r > -1 && a.push((0, i.jsx)(C, {
            className: l,
            count: r,
            label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
        }, c.MetadataFields.TWITTER_FOLLOWERS_COUNT)), a
    }

    function x(e) {
        var t, l, a;
        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [],
            o = Number(null !== (t = e[c.MetadataFields.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
            u = Number(null !== (l = e[c.MetadataFields.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== l ? l : -1),
            d = Number(null !== (a = e[c.MetadataFields.STEAM_ITEM_COUNT_TF2]) && void 0 !== a ? a : -1);
        return o > -1 && r.push((0, i.jsx)(C, {
            className: s,
            count: o,
            label: f.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
        }, c.MetadataFields.STEAM_GAME_COUNT)), u > -1 && r.push((0, i.jsx)(_, {
            className: s,
            label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                count: u
            }),
            imageSrc: n("142226"),
            imageAlt: f.default.Messages.CONNECTIONS_STEAM_DOTA2
        }, c.MetadataFields.STEAM_ITEM_COUNT_DOTA2)), d > -1 && r.push((0, i.jsx)(_, {
            className: s,
            label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                count: d
            }),
            imageSrc: n("449236"),
            imageAlt: f.default.Messages.CONNECTIONS_STEAM_TF2
        }, c.MetadataFields.STEAM_ITEM_COUNT_TF2)), r
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = [],
            l = "1" === e[c.MetadataFields.PAYPAL_VERIFIED];
        return l && n.push((0, i.jsx)(I, {
            className: a(t, m.paypalVerifiedTag),
            label: f.default.Messages.CONNECTIONS_PAYPAL_VERIFIED
        }, c.MetadataFields.PAYPAL_VERIFIED)), n
    }

    function y(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            l = [],
            a = Number(null !== (t = e[c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
            s = "1" === e[c.MetadataFields.EBAY_TOP_RATED_SELLER];
        return a > 0 && l.push((0, i.jsx)(C, {
            className: n,
            count: a,
            label: f.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
            percent: !0
        }, c.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), s && l.push((0, i.jsx)(I, {
            className: n,
            label: f.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
        }, c.MetadataFields.EBAY_TOP_RATED_SELLER)), l
    }

    function g(e) {
        var t, n, l;
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            s = [],
            r = "1" === e[c.MetadataFields.TIKTOK_VERIFIED],
            o = Number(null !== (t = e[c.MetadataFields.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
            u = Number(null !== (n = e[c.MetadataFields.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
            d = Number(null !== (l = e[c.MetadataFields.TIKTOK_LIKES_COUNT]) && void 0 !== l ? l : -1);
        return o > -1 && s.push((0, i.jsx)(C, {
            className: a,
            count: o,
            label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
        }, c.MetadataFields.TIKTOK_FOLLOWER_COUNT)), u > -1 && s.push((0, i.jsx)(C, {
            className: a,
            count: u,
            label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
        }, c.MetadataFields.TIKTOK_FOLLOWING_COUNT)), d > -1 && s.push((0, i.jsx)(C, {
            className: a,
            count: d,
            label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
        }, c.MetadataFields.TIKTOK_LIKES_COUNT)), r && s.push((0, i.jsx)(I, {
            className: a,
            label: f.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
        }, c.MetadataFields.TIKTOK_VERIFIED)), s
    }

    function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            l = [],
            a = Object.keys(e.metadata);
        if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === a.length) return l;
        let s = r.sortBy(a, t => {
            var n, i;
            return null === (i = e.application_metadata) || void 0 === i ? void 0 : null === (n = i[t]) || void 0 === n ? void 0 : n.name
        });
        for (let a of s) {
            let s = e.application_metadata[a];
            if (null == s) continue;
            let r = e.metadata[a];
            try {
                switch (s.type) {
                    case c.MetadataItemTypes.BOOLEAN_EQUAL:
                    case c.MetadataItemTypes.BOOLEAN_NOT_EQUAL: {
                        let e = s.type === c.MetadataItemTypes.BOOLEAN_EQUAL && "1" === r || s.type === c.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== r;
                        e && l.push((0, i.jsx)(I, {
                            className: t,
                            label: s.name
                        }, s.key))
                    }
                    break;
                    case c.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                    case c.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                        l.push((0, i.jsx)(T, {
                            className: t,
                            date: r,
                            locale: n,
                            label: s.name
                        }, s.key));
                        break;
                    case c.MetadataItemTypes.INTEGER_EQUAL:
                    case c.MetadataItemTypes.INTEGER_NOT_EQUAL:
                    case c.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                    case c.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                        l.push((0, i.jsx)(C, {
                            className: t,
                            count: Number(r),
                            label: s.name
                        }, s.key))
                }
            } catch (e) {}
        }
        return l
    }

    function C(e) {
        let t, {
                count: n,
                label: l,
                className: s,
                percent: r
            } = e,
            d = (0, u.shortenAndLocalizeNumber)(n) + (r ? "%" : "");
        return t = "string" == typeof l ? f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
            name: l,
            value: d
        }) : l.format({
            value: d
        }), (0, i.jsx)(o.Text, {
            className: a(m.connectedAccountVanityMetadata, s),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: t
        })
    }

    function T(e) {
        let {
            date: t,
            locale: n,
            label: l,
            className: s
        } = e;
        return (0, i.jsx)(o.Text, {
            className: a(m.connectedAccountVanityMetadata, s),
            variant: "text-xs/normal",
            color: "interactive-active",
            children: f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                value: (0, d.getCreatedAtDate)(t, n),
                name: l
            })
        })
    }

    function _(e) {
        let {
            label: t,
            imageSrc: n,
            imageAlt: l,
            className: s
        } = e;
        return (0, i.jsxs)("div", {
            className: a(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataItem, s),
            children: [(0, i.jsx)(o.Tooltip, {
                text: l,
                children: e => (0, i.jsx)("img", {
                    ...e,
                    src: n,
                    alt: l,
                    className: m.connectedAccountVanityMetadataItemIcon
                })
            }), (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "interactive-active",
                children: t
            })]
        })
    }

    function I(e) {
        let {
            label: t,
            className: n
        } = e;
        return (0, i.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "interactive-active",
            className: a(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataTag, n),
            children: t
        })
    }
}