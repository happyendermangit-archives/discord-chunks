function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("780384"),
        l = n("481060"),
        u = n("410030"),
        d = n("263704"),
        _ = n("465670"),
        c = n("981631"),
        E = n("474936"),
        I = n("689938"),
        T = n("268385");
    let f = [{
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_EMOJI_SLOTS,
        getPerkPreviewLightTheme: () => n("414102"),
        getPerkPreviewDarkTheme: () => n("614600"),
        getTier0Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.NONE].limits.emoji,
        getTier1Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_1].limits.emoji,
        getTier2Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_2].limits.emoji,
        getTier3Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_3].limits.emoji
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STICKER_SLOTS,
        getPerkPreviewLightTheme: () => n("73541"),
        getPerkPreviewDarkTheme: () => n("43735"),
        getTier0Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.NONE].limits.stickers,
        getTier1Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_1].limits.stickers,
        getTier2Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_2].limits.stickers,
        getTier3Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_3].limits.stickers
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_SOUNDBOARD_SLOTS,
        getPerkPreviewLightTheme: () => n("69098"),
        getPerkPreviewDarkTheme: () => n("881755"),
        getTier0Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.NONE].limits.soundboardSounds,
        getTier1Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_1].limits.soundboardSounds,
        getTier2Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_2].limits.soundboardSounds,
        getTier3Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_3].limits.soundboardSounds
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STREAM_QUALITY,
        getPerkPreviewLightTheme: () => n("989015"),
        getPerkPreviewDarkTheme: () => n("815152"),
        getTier0Value: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: E.BoostedGuildFeatures[c.BoostedGuildTiers.NONE].limits.screenShareQualityResolution,
            framerate: E.BoostedGuildFeatures[c.BoostedGuildTiers.NONE].limits.screenShareQualityFramerate
        }),
        getTier1Value: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution,
            framerate: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_1].limits.screenShareQualityFramerate
        }),
        getTier2Value: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_2].limits.screenShareQualityResolution,
            framerate: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_2].limits.screenShareQualityFramerate
        }),
        getTier3Value: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
            resolution: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_3].limits.screenShareQualityResolution,
            framerate: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_3].limits.screenShareQualityFramerate
        })
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VOICE_QUALITY,
        getPerkPreviewLightTheme: () => n("222185"),
        getPerkPreviewDarkTheme: () => n("415480"),
        getTier0Value: () => I.default.Messages.BITRATE_KBPS_NO_SPACE.format({
            bitrate: E.BoostedGuildFeatures[c.BoostedGuildTiers.NONE].limits.bitrate / 1e3
        }),
        getTier1Value: () => I.default.Messages.BITRATE_KBPS_NO_SPACE.format({
            bitrate: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
        }),
        getTier2Value: () => I.default.Messages.BITRATE_KBPS_NO_SPACE.format({
            bitrate: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
        }),
        getTier3Value: () => I.default.Messages.BITRATE_KBPS_NO_SPACE.format({
            bitrate: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
        })
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_UPLOAD_SIZE_LIMIT,
        getPerkPreviewLightTheme: () => n("825588"),
        getPerkPreviewDarkTheme: () => n("954499"),
        getTier0Value: () => I.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: E.BoostedGuildFeatures[c.BoostedGuildTiers.NONE].limits.fileSize / 1024 / 1024
        }),
        getTier1Value: () => I.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_1].limits.fileSize / 1024 / 1024
        }),
        getTier2Value: () => I.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024
        }),
        getTier3Value: () => I.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
            size: E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024
        })
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VIDEO_STAGE_SEATS,
        getPerkPreviewLightTheme: () => n("241190"),
        getPerkPreviewDarkTheme: () => n("879846"),
        getTier0Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.NONE].limits.stageVideoUsers,
        getTier1Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => E.BoostedGuildFeatures[c.BoostedGuildTiers.TIER_3].limits.stageVideoUsers
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_ANIMATED_GUILD_ICON,
        getPerkPreviewLightTheme: () => n("499059"),
        getPerkPreviewDarkTheme: () => n("488349"),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_INVITE_BACKGROUND,
        getPerkPreviewLightTheme: () => n("136631"),
        getPerkPreviewDarkTheme: () => n("692079"),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_BANNER,
        getPerkPreviewLightTheme: () => n("277822"),
        getPerkPreviewDarkTheme: () => n("866919"),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_STATIC,
        getTier3Value: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_ANIMATED
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_CUSTOM_ROLE_ICONS,
        getPerkPreviewLightTheme: () => n("872259"),
        getPerkPreviewDarkTheme: () => n("876049"),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    }, {
        getPerkHeading: () => I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VANITY_URL,
        getPerkPreviewLightTheme: () => n("710717"),
        getPerkPreviewDarkTheme: () => n("945198"),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0
    }];

    function S(e) {
        let {
            children: t,
            className: n,
            tier: r
        } = e, s = r === c.BoostedGuildTiers.NONE ? "text-muted" : "header-primary", o = r === c.BoostedGuildTiers.NONE || null == r ? "heading-xl/normal" : "heading-xl/bold";
        return (0, i.jsxs)("th", {
            className: a()(T.columnHeading, n),
            scope: "col",
            children: [(0, i.jsx)(l.Heading, {
                color: s,
                variant: o,
                children: t
            }), null != r && (0, i.jsx)(l.Text, {
                color: s,
                variant: "text-md/normal",
                children: I.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
                    subscriptions: c.AppliedGuildBoostsRequiredForBoostedGuildTier[r]
                })
            })]
        })
    }

    function h(e) {
        let t;
        let {
            className: n,
            textVariant: r = "text-md/bold",
            value: s
        } = e;
        if ("boolean" == typeof s) {
            let e = a()(T.booleanValueIcon, {
                [T.booleanValueTrue]: s
            });
            t = s ? (0, i.jsx)(d.default, {
                className: e
            }) : (0, i.jsx)(_.default, {
                className: e
            })
        } else t = (0, i.jsx)(l.Text, {
            color: "interactive-active",
            variant: r,
            children: s
        });
        return (0, i.jsx)("td", {
            className: a()(T.tableCell, n),
            children: t
        })
    }

    function A(e) {
        let {
            currentTier: t
        } = e, n = function(e) {
            switch (e) {
                case c.BoostedGuildTiers.NONE:
                case c.BoostedGuildTiers.TIER_1:
                    return c.BoostedGuildTiers.TIER_2;
                case c.BoostedGuildTiers.TIER_2:
                case c.BoostedGuildTiers.TIER_3:
                    return c.BoostedGuildTiers.TIER_3;
                default:
                    return null
            }
        }(t);
        return null == n ? null : (0, i.jsx)("div", {
            className: a()(T.recommendedTierHighlight, {
                [T.recommendedTierHighlightTier2]: n === c.BoostedGuildTiers.TIER_2,
                [T.recommendedTierHighlightTier3]: n === c.BoostedGuildTiers.TIER_3
            }),
            children: (0, i.jsx)(l.Text, {
                className: T.recommendedTierHighlightTag,
                color: "always-white",
                variant: "text-xs/bold",
                children: t === c.BoostedGuildTiers.TIER_3 ? I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CURRENT_TAG : I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_RECOMMENDED_TAG
            })
        })
    }
    t.default = function(e) {
        let t = (0, u.default)(),
            [n, s] = r.useState(null),
            {
                className: d,
                guild: _,
                hideHeading: E,
                hideTier0: m
            } = e;

        function N() {
            s(null)
        }
        return (0, i.jsxs)("div", {
            className: d,
            children: [!E && (0, i.jsx)(l.Heading, {
                className: T.heading,
                variant: "heading-xxl/extrabold",
                children: I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_HEADING
            }), (0, i.jsxs)("div", {
                className: T.tableWrapper,
                children: [null != _ && (0, i.jsx)(A, {
                    currentTier: _.premiumTier
                }), (0, i.jsxs)("table", {
                    className: T.table,
                    cellPadding: 0,
                    cellSpacing: 0,
                    children: [(0, i.jsx)("thead", {
                        children: (0, i.jsxs)("tr", {
                            className: T.tableRow,
                            children: [(0, i.jsx)(S, {
                                className: T.tableRowHeading,
                                children: I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_COLUMN_HEADING_PERKS
                            }), !m && (0, i.jsx)(S, {
                                tier: c.BoostedGuildTiers.NONE,
                                children: I.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME
                            }), (0, i.jsx)(S, {
                                tier: c.BoostedGuildTiers.TIER_1,
                                children: I.default.Messages.PREMIUM_GUILD_TIER_1
                            }), (0, i.jsx)(S, {
                                tier: c.BoostedGuildTiers.TIER_2,
                                children: I.default.Messages.PREMIUM_GUILD_TIER_2
                            }), (0, i.jsx)(S, {
                                tier: c.BoostedGuildTiers.TIER_3,
                                children: I.default.Messages.PREMIUM_GUILD_TIER_3
                            })]
                        })
                    }), (0, i.jsx)("tbody", {
                        className: T.tableBody,
                        children: f.map((e, r) => {
                            let u = n === r;

                            function d() {
                                s(r)
                            }
                            return void 0 === e.predicate ? (0, i.jsxs)("tr", {
                                className: T.tableRow,
                                children: [(0, i.jsx)("th", {
                                    className: a()(T.tableCell, T.tableCellWrapper),
                                    scope: "row",
                                    children: (0, i.jsx)(l.Clickable, {
                                        className: a()(T.tableRowHeading, T.tableCell, T.tableCellInner),
                                        onFocus: d,
                                        onBlur: N,
                                        onMouseEnter: d,
                                        onMouseLeave: N,
                                        children: (0, i.jsx)(l.Popout, {
                                            align: "center",
                                            disablePointerEvents: !0,
                                            nudgeAlignIntoViewport: !0,
                                            position: "bottom",
                                            renderPopout: () => (0, i.jsx)("img", {
                                                className: T.perkPreviewImage,
                                                src: (0, o.isThemeDark)(t) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                                                alt: ""
                                            }),
                                            shouldShow: u,
                                            spacing: 16,
                                            children: () => (0, i.jsx)(l.Text, {
                                                variant: "text-md/normal",
                                                children: e.getPerkHeading()
                                            })
                                        })
                                    })
                                }), !m && (0, i.jsx)(h, {
                                    textVariant: "text-md/normal",
                                    value: e.getTier0Value()
                                }), (0, i.jsx)(h, {
                                    value: e.getTier1Value()
                                }), (0, i.jsx)(h, {
                                    value: e.getTier2Value()
                                }), (0, i.jsx)(h, {
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