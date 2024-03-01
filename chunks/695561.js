function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return m
        }
    }), s("222007");
    var i = s("37983"),
        r = s("884691"),
        a = s("414456"),
        l = s.n(a),
        o = s("819855"),
        n = s("77078"),
        u = s("841098"),
        d = s("36694"),
        c = s("945330"),
        E = s("49111"),
        _ = s("646718"),
        T = s("782340"),
        I = s("553922");
    let N = [{
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_EMOJI_SLOTS,
        getPerkPreviewLightTheme: () => s("209988"),
        getPerkPreviewDarkTheme: () => s("949004"),
        getTier0Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.emoji,
        getTier1Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.emoji,
        getTier2Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.emoji,
        getTier3Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.emoji
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STICKER_SLOTS,
        getPerkPreviewLightTheme: () => s("859528"),
        getPerkPreviewDarkTheme: () => s("309504"),
        getTier0Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.stickers,
        getTier1Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.stickers,
        getTier2Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.stickers,
        getTier3Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.stickers
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_SOUNDBOARD_SLOTS,
        getPerkPreviewLightTheme: () => s("144865"),
        getPerkPreviewDarkTheme: () => s("938305"),
        getTier0Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.soundboardSounds,
        getTier1Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.soundboardSounds,
        getTier2Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.soundboardSounds,
        getTier3Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.soundboardSounds
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STREAM_QUALITY,
        getPerkPreviewLightTheme: () => s("153315"),
        getPerkPreviewDarkTheme: () => s("856642"),
        getTier0Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.screenShareQualityResolution,
            framerate: _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.screenShareQualityFramerate
        }),
        getTier1Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution,
            framerate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.screenShareQualityFramerate
        }),
        getTier2Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.screenShareQualityResolution,
            framerate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.screenShareQualityFramerate
        }),
        getTier3Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.screenShareQualityResolution,
            framerate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.screenShareQualityFramerate
        })
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VOICE_QUALITY,
        getPerkPreviewLightTheme: () => s("697254"),
        getPerkPreviewDarkTheme: () => s("510572"),
        getTier0Value: () => T.default.Messages.BITRATE_KBPS_NO_SPACE.format({
            bitrate: _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.bitrate / 1e3
        }),
        getTier1Value: () => T.default.Messages.BITRATE_KBPS_NO_SPACE.format({
            bitrate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
        }),
        getTier2Value: () => T.default.Messages.BITRATE_KBPS_NO_SPACE.format({
            bitrate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
        }),
        getTier3Value: () => T.default.Messages.BITRATE_KBPS_NO_SPACE.format({
            bitrate: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
        })
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_UPLOAD_SIZE_LIMIT,
        getPerkPreviewLightTheme: () => s("312269"),
        getPerkPreviewDarkTheme: () => s("679412"),
        getTier0Value: () => T.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.fileSize / 1024 / 1024
        }),
        getTier1Value: () => T.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.fileSize / 1024 / 1024
        }),
        getTier2Value: () => T.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024
        }),
        getTier3Value: () => T.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024
        })
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VIDEO_STAGE_SEATS,
        getPerkPreviewLightTheme: () => s("989409"),
        getPerkPreviewDarkTheme: () => s("801050"),
        getTier0Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.NONE].limits.stageVideoUsers,
        getTier1Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => _.BoostedGuildFeatures[E.BoostedGuildTiers.TIER_3].limits.stageVideoUsers
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_ANIMATED_GUILD_ICON,
        getPerkPreviewLightTheme: () => s("429300"),
        getPerkPreviewDarkTheme: () => s("311908"),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_INVITE_BACKGROUND,
        getPerkPreviewLightTheme: () => s("335071"),
        getPerkPreviewDarkTheme: () => s("382100"),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_BANNER,
        getPerkPreviewLightTheme: () => s("402826"),
        getPerkPreviewDarkTheme: () => s("189775"),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_STATIC,
        getTier3Value: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_ANIMATED
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_CUSTOM_ROLE_ICONS,
        getPerkPreviewLightTheme: () => s("427945"),
        getPerkPreviewDarkTheme: () => s("43636"),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    }, {
        getPerkHeading: () => T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VANITY_URL,
        getPerkPreviewLightTheme: () => s("206538"),
        getPerkPreviewDarkTheme: () => s("706037"),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0
    }];

    function f(e) {
        let {
            children: t,
            className: s,
            tier: r
        } = e, a = r === E.BoostedGuildTiers.NONE ? "text-muted" : "header-primary", o = r === E.BoostedGuildTiers.NONE || null == r ? "heading-xl/normal" : "heading-xl/bold";
        return (0, i.jsxs)("th", {
            className: l(I.columnHeading, s),
            scope: "col",
            children: [(0, i.jsx)(n.Heading, {
                color: a,
                variant: o,
                children: t
            }), null != r && (0, i.jsx)(n.Text, {
                color: a,
                variant: "text-md/normal",
                children: T.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
                    subscriptions: E.AppliedGuildBoostsRequiredForBoostedGuildTier[r]
                })
            })]
        })
    }

    function R(e) {
        let t;
        let {
            className: s,
            textVariant: r = "text-md/bold",
            value: a
        } = e;
        if ("boolean" == typeof a) {
            let e = l(I.booleanValueIcon, {
                [I.booleanValueTrue]: a
            });
            t = a ? (0, i.jsx)(d.default, {
                className: e
            }) : (0, i.jsx)(c.default, {
                className: e
            })
        } else t = (0, i.jsx)(n.Text, {
            color: "interactive-active",
            variant: r,
            children: a
        });
        return (0, i.jsx)("td", {
            className: l(I.tableCell, s),
            children: t
        })
    }

    function g(e) {
        let {
            currentTier: t
        } = e, s = function(e) {
            switch (e) {
                case E.BoostedGuildTiers.NONE:
                case E.BoostedGuildTiers.TIER_1:
                    return E.BoostedGuildTiers.TIER_2;
                case E.BoostedGuildTiers.TIER_2:
                case E.BoostedGuildTiers.TIER_3:
                    return E.BoostedGuildTiers.TIER_3;
                default:
                    return null
            }
        }(t);
        return null == s ? null : (0, i.jsx)("div", {
            className: l(I.recommendedTierHighlight, {
                [I.recommendedTierHighlightTier2]: s === E.BoostedGuildTiers.TIER_2,
                [I.recommendedTierHighlightTier3]: s === E.BoostedGuildTiers.TIER_3
            }),
            children: (0, i.jsx)(n.Text, {
                className: I.recommendedTierHighlightTag,
                color: "always-white",
                variant: "text-xs/bold",
                children: t === E.BoostedGuildTiers.TIER_3 ? T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CURRENT_TAG : T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_RECOMMENDED_TAG
            })
        })
    }
    var m = function(e) {
        let t = (0, u.default)(),
            [s, a] = r.useState(null),
            {
                className: d,
                guild: c,
                hideHeading: _,
                hideTier0: m
            } = e;

        function S() {
            a(null)
        }
        return (0, i.jsxs)("div", {
            className: d,
            children: [!_ && (0, i.jsx)(n.Heading, {
                className: I.heading,
                variant: "heading-xxl/extrabold",
                children: T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_HEADING
            }), (0, i.jsxs)("div", {
                className: I.tableWrapper,
                children: [null != c && (0, i.jsx)(g, {
                    currentTier: c.premiumTier
                }), (0, i.jsxs)("table", {
                    className: I.table,
                    cellPadding: 0,
                    cellSpacing: 0,
                    children: [(0, i.jsx)("thead", {
                        children: (0, i.jsxs)("tr", {
                            className: I.tableRow,
                            children: [(0, i.jsx)(f, {
                                className: I.tableRowHeading,
                                children: T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_COLUMN_HEADING_PERKS
                            }), !m && (0, i.jsx)(f, {
                                tier: E.BoostedGuildTiers.NONE,
                                children: T.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME
                            }), (0, i.jsx)(f, {
                                tier: E.BoostedGuildTiers.TIER_1,
                                children: T.default.Messages.PREMIUM_GUILD_TIER_1
                            }), (0, i.jsx)(f, {
                                tier: E.BoostedGuildTiers.TIER_2,
                                children: T.default.Messages.PREMIUM_GUILD_TIER_2
                            }), (0, i.jsx)(f, {
                                tier: E.BoostedGuildTiers.TIER_3,
                                children: T.default.Messages.PREMIUM_GUILD_TIER_3
                            })]
                        })
                    }), (0, i.jsx)("tbody", {
                        className: I.tableBody,
                        children: N.map((e, r) => {
                            let u = s === r;

                            function d() {
                                a(r)
                            }
                            return void 0 === e.predicate ? (0, i.jsxs)("tr", {
                                className: I.tableRow,
                                children: [(0, i.jsx)("th", {
                                    className: l(I.tableCell, I.tableCellWrapper),
                                    scope: "row",
                                    children: (0, i.jsx)(n.Clickable, {
                                        className: l(I.tableRowHeading, I.tableCell, I.tableCellInner),
                                        onFocus: d,
                                        onBlur: S,
                                        onMouseEnter: d,
                                        onMouseLeave: S,
                                        children: (0, i.jsx)(n.Popout, {
                                            align: "center",
                                            disablePointerEvents: !0,
                                            nudgeAlignIntoViewport: !0,
                                            position: "bottom",
                                            renderPopout: () => (0, i.jsx)("img", {
                                                className: I.perkPreviewImage,
                                                src: (0, o.isThemeDark)(t) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                                                alt: ""
                                            }),
                                            shouldShow: u,
                                            spacing: 16,
                                            children: () => (0, i.jsx)(n.Text, {
                                                variant: "text-md/normal",
                                                children: e.getPerkHeading()
                                            })
                                        })
                                    })
                                }), !m && (0, i.jsx)(R, {
                                    textVariant: "text-md/normal",
                                    value: e.getTier0Value()
                                }), (0, i.jsx)(R, {
                                    value: e.getTier1Value()
                                }), (0, i.jsx)(R, {
                                    value: e.getTier2Value()
                                }), (0, i.jsx)(R, {
                                    value: e.getTier3Value()
                                })]
                            }, r) : null
                        })
                    })]
                })]
            })]
        })
    }
}