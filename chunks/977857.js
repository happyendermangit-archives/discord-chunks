function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("751848"),
        u = n("784184"),
        s = n("523263"),
        l = n("843317"),
        c = n("247164"),
        f = n("281767"),
        d = n("868615"),
        _ = n("941504"),
        E = n("268385");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var y = [{
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_EMOJI_SLOTS
        },
        getPerkPreviewLightTheme: function() {
            return n("414102")
        },
        getPerkPreviewDarkTheme: function() {
            return n("614600")
        },
        getTier0Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.NONE].limits.emoji
        },
        getTier1Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_1].limits.emoji
        },
        getTier2Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_2].limits.emoji
        },
        getTier3Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_3].limits.emoji
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STICKER_SLOTS
        },
        getPerkPreviewLightTheme: function() {
            return n("73541")
        },
        getPerkPreviewDarkTheme: function() {
            return n("43735")
        },
        getTier0Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.NONE].limits.stickers
        },
        getTier1Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_1].limits.stickers
        },
        getTier2Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_2].limits.stickers
        },
        getTier3Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_3].limits.stickers
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_SOUNDBOARD_SLOTS
        },
        getPerkPreviewLightTheme: function() {
            return n("69098")
        },
        getPerkPreviewDarkTheme: function() {
            return n("881755")
        },
        getTier0Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.NONE].limits.soundboardSounds
        },
        getTier1Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_1].limits.soundboardSounds
        },
        getTier2Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_2].limits.soundboardSounds
        },
        getTier3Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_3].limits.soundboardSounds
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STREAM_QUALITY
        },
        getPerkPreviewLightTheme: function() {
            return n("989015")
        },
        getPerkPreviewDarkTheme: function() {
            return n("815152")
        },
        getTier0Value: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                resolution: d.BoostedGuildFeatures[f.BoostedGuildTiers.NONE].limits.screenShareQualityResolution,
                framerate: d.BoostedGuildFeatures[f.BoostedGuildTiers.NONE].limits.screenShareQualityFramerate
            })
        },
        getTier1Value: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                resolution: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_1].limits.screenShareQualityResolution,
                framerate: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_1].limits.screenShareQualityFramerate
            })
        },
        getTier2Value: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                resolution: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_2].limits.screenShareQualityResolution,
                framerate: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_2].limits.screenShareQualityFramerate
            })
        },
        getTier3Value: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                resolution: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_3].limits.screenShareQualityResolution,
                framerate: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_3].limits.screenShareQualityFramerate
            })
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VOICE_QUALITY
        },
        getPerkPreviewLightTheme: function() {
            return n("222185")
        },
        getPerkPreviewDarkTheme: function() {
            return n("415480")
        },
        getTier0Value: function() {
            return _.default.Messages.BITRATE_KBPS_NO_SPACE.format({
                bitrate: d.BoostedGuildFeatures[f.BoostedGuildTiers.NONE].limits.bitrate / 1e3
            })
        },
        getTier1Value: function() {
            return _.default.Messages.BITRATE_KBPS_NO_SPACE.format({
                bitrate: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_1].limits.bitrate / 1e3
            })
        },
        getTier2Value: function() {
            return _.default.Messages.BITRATE_KBPS_NO_SPACE.format({
                bitrate: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_2].limits.bitrate / 1e3
            })
        },
        getTier3Value: function() {
            return _.default.Messages.BITRATE_KBPS_NO_SPACE.format({
                bitrate: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_3].limits.bitrate / 1e3
            })
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_UPLOAD_SIZE_LIMIT
        },
        getPerkPreviewLightTheme: function() {
            return n("825588")
        },
        getPerkPreviewDarkTheme: function() {
            return n("954499")
        },
        getTier0Value: function() {
            return _.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
                size: d.BoostedGuildFeatures[f.BoostedGuildTiers.NONE].limits.fileSize / 1024 / 1024
            })
        },
        getTier1Value: function() {
            return _.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
                size: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_1].limits.fileSize / 1024 / 1024
            })
        },
        getTier2Value: function() {
            return _.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
                size: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_2].limits.fileSize / 1024 / 1024
            })
        },
        getTier3Value: function() {
            return _.default.Messages.FILE_SIZE_MB_NO_SPACE.format({
                size: d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_3].limits.fileSize / 1024 / 1024
            })
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VIDEO_STAGE_SEATS
        },
        getPerkPreviewLightTheme: function() {
            return n("241190")
        },
        getPerkPreviewDarkTheme: function() {
            return n("879846")
        },
        getTier0Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.NONE].limits.stageVideoUsers
        },
        getTier1Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_1].limits.stageVideoUsers
        },
        getTier2Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_2].limits.stageVideoUsers
        },
        getTier3Value: function() {
            return d.BoostedGuildFeatures[f.BoostedGuildTiers.TIER_3].limits.stageVideoUsers
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_ANIMATED_GUILD_ICON
        },
        getPerkPreviewLightTheme: function() {
            return n("499059")
        },
        getPerkPreviewDarkTheme: function() {
            return n("488349")
        },
        getTier0Value: function() {
            return !1
        },
        getTier1Value: function() {
            return !0
        },
        getTier2Value: function() {
            return !0
        },
        getTier3Value: function() {
            return !0
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_INVITE_BACKGROUND
        },
        getPerkPreviewLightTheme: function() {
            return n("136631")
        },
        getPerkPreviewDarkTheme: function() {
            return n("692079")
        },
        getTier0Value: function() {
            return !1
        },
        getTier1Value: function() {
            return !0
        },
        getTier2Value: function() {
            return !0
        },
        getTier3Value: function() {
            return !0
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_BANNER
        },
        getPerkPreviewLightTheme: function() {
            return n("277822")
        },
        getPerkPreviewDarkTheme: function() {
            return n("866919")
        },
        getTier0Value: function() {
            return !1
        },
        getTier1Value: function() {
            return !1
        },
        getTier2Value: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_STATIC
        },
        getTier3Value: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_ANIMATED
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_CUSTOM_ROLE_ICONS
        },
        getPerkPreviewLightTheme: function() {
            return n("872259")
        },
        getPerkPreviewDarkTheme: function() {
            return n("876049")
        },
        getTier0Value: function() {
            return !1
        },
        getTier1Value: function() {
            return !1
        },
        getTier2Value: function() {
            return !0
        },
        getTier3Value: function() {
            return !0
        }
    }, {
        getPerkHeading: function() {
            return _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VANITY_URL
        },
        getPerkPreviewLightTheme: function() {
            return n("710717")
        },
        getPerkPreviewDarkTheme: function() {
            return n("945198")
        },
        getTier0Value: function() {
            return !1
        },
        getTier1Value: function() {
            return !1
        },
        getTier2Value: function() {
            return !1
        },
        getTier3Value: function() {
            return !0
        }
    }];

    function I(e) {
        var t = e.children,
            n = e.className,
            o = e.tier,
            a = o === f.BoostedGuildTiers.NONE ? "text-muted" : "header-primary",
            s = o === f.BoostedGuildTiers.NONE || null == o ? "heading-xl/normal" : "heading-xl/bold";
        return r.createElement("th", {
            className: i()(E.columnHeading, n),
            scope: "col"
        }, r.createElement(u.Heading, {
            color: a,
            variant: s
        }, t), null != o && r.createElement(u.Text, {
            color: a,
            variant: "text-md/normal"
        }, _.default.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
            subscriptions: f.AppliedGuildBoostsRequiredForBoostedGuildTier[o]
        })))
    }

    function h(e) {
        var t, n = e.className,
            o = e.textVariant,
            a = e.value;
        if ("boolean" == typeof a) {
            var s = i()(E.booleanValueIcon, m({}, E.booleanValueTrue, a));
            t = a ? r.createElement(l.default, {
                className: s
            }) : r.createElement(c.default, {
                className: s
            })
        } else t = r.createElement(u.Text, {
            color: "interactive-active",
            variant: void 0 === o ? "text-md/bold" : o
        }, a);
        return r.createElement("td", {
            className: i()(E.tableCell, n)
        }, t)
    }

    function O(e) {
        var t, n = e.currentTier,
            o = function(e) {
                switch (e) {
                    case f.BoostedGuildTiers.NONE:
                    case f.BoostedGuildTiers.TIER_1:
                        return f.BoostedGuildTiers.TIER_2;
                    case f.BoostedGuildTiers.TIER_2:
                    case f.BoostedGuildTiers.TIER_3:
                        return f.BoostedGuildTiers.TIER_3;
                    default:
                        return null
                }
            }(n);
        return null == o ? null : r.createElement("div", {
            className: i()(E.recommendedTierHighlight, (m(t = {}, E.recommendedTierHighlightTier2, o === f.BoostedGuildTiers.TIER_2), m(t, E.recommendedTierHighlightTier3, o === f.BoostedGuildTiers.TIER_3), t))
        }, r.createElement(u.Text, {
            className: E.recommendedTierHighlightTag,
            color: "always-white",
            variant: "text-xs/bold"
        }, n === f.BoostedGuildTiers.TIER_3 ? _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CURRENT_TAG : _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_RECOMMENDED_TAG))
    }
    t.default = function(e) {
        var t, n, o = (0, s.default)();
        var l = (t = r.useState(null), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            c = l[0],
            d = l[1],
            m = e.className,
            T = e.guild,
            S = e.hideHeading,
            v = e.hideTier0;

        function g() {
            d(null)
        }
        return r.createElement("div", {
            className: m
        }, !S && r.createElement(u.Heading, {
            className: E.heading,
            variant: "heading-xxl/extrabold"
        }, _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_HEADING), r.createElement("div", {
            className: E.tableWrapper
        }, null != T && r.createElement(O, {
            currentTier: T.premiumTier
        }), r.createElement("table", {
            className: E.table,
            cellPadding: 0,
            cellSpacing: 0
        }, r.createElement("thead", null, r.createElement("tr", {
            className: E.__invalid_tableRow
        }, r.createElement(I, {
            className: E.tableRowHeading
        }, _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_COLUMN_HEADING_PERKS), !v && r.createElement(I, {
            tier: f.BoostedGuildTiers.NONE
        }, _.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME), r.createElement(I, {
            tier: f.BoostedGuildTiers.TIER_1
        }, _.default.Messages.PREMIUM_GUILD_TIER_1), r.createElement(I, {
            tier: f.BoostedGuildTiers.TIER_2
        }, _.default.Messages.PREMIUM_GUILD_TIER_2), r.createElement(I, {
            tier: f.BoostedGuildTiers.TIER_3
        }, _.default.Messages.PREMIUM_GUILD_TIER_3))), r.createElement("tbody", {
            className: E.__invalid_tableBody
        }, y.map(function(e, t) {
            var n = function() {
                    d(t)
                },
                s = c === t;
            return void 0 === e.predicate ? r.createElement("tr", {
                className: E.__invalid_tableRow,
                key: t
            }, r.createElement("th", {
                className: i()(E.tableCell, E.tableCellWrapper),
                scope: "row"
            }, r.createElement(u.Clickable, {
                className: i()(E.tableRowHeading, E.tableCell, E.tableCellInner),
                onFocus: n,
                onBlur: g,
                onMouseEnter: n,
                onMouseLeave: g
            }, r.createElement(u.Popout, {
                align: "center",
                disablePointerEvents: !0,
                nudgeAlignIntoViewport: !0,
                position: "bottom",
                renderPopout: function() {
                    return r.createElement("img", {
                        className: E.perkPreviewImage,
                        src: (0, a.isThemeDark)(o) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                        alt: ""
                    })
                },
                shouldShow: s,
                spacing: 16
            }, function() {
                return r.createElement(u.Text, {
                    variant: "text-md/normal"
                }, e.getPerkHeading())
            }))), !v && r.createElement(h, {
                textVariant: "text-md/normal",
                value: e.getTier0Value()
            }), r.createElement(h, {
                value: e.getTier1Value()
            }), r.createElement(h, {
                value: e.getTier2Value()
            }), r.createElement(h, {
                value: e.getTier3Value()
            })) : null
        })))))
    }
}