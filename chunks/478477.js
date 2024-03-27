function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("308472"),
        o = n("77078"),
        u = n("917764"),
        d = n("986632"),
        c = n("405607"),
        f = n("423080"),
        m = n("93393"),
        p = n("153769"),
        h = n("671434"),
        x = n("389480"),
        E = n("782340"),
        y = n("108886");
    let g = [8, 8, 8, 8];

    function S(e) {
        let {
            icon: t,
            isSelected: n,
            onClick: l,
            ...a
        } = e;
        return (0, i.jsx)(o.Clickable, {
            ...a,
            onClick: l,
            className: s(y.categoryIcon, {
                [y.selected]: n
            }),
            children: (0, i.jsx)(t, {
                className: y.categoryIconIcon
            })
        })
    }

    function C(e, t, n, l) {
        return (0, i.jsx)(o.Tooltip, {
            text: function(e) {
                switch (e.categoryInfo.type) {
                    case x.SoundboardSoundGridSectionType.FAVORITES:
                        return E.default.Messages.FAVORITES;
                    case x.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return E.default.Messages.RECENTLY_HEARD;
                    case x.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return E.default.Messages.FREQUENTLY_USED;
                    case x.SoundboardSoundGridSectionType.GUILD:
                        return (0, i.jsx)(f.GuildTooltipText, {
                            guild: e.categoryInfo.guild,
                            includeActivity: !1
                        });
                    case x.SoundboardSoundGridSectionType.DEFAULTS:
                        return E.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(e),
            "aria-label": function(e) {
                switch (e.categoryInfo.type) {
                    case x.SoundboardSoundGridSectionType.FAVORITES:
                        return E.default.Messages.FAVORITES;
                    case x.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return E.default.Messages.RECENTLY_HEARD;
                    case x.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return E.default.Messages.FREQUENTLY_USED;
                    case x.SoundboardSoundGridSectionType.GUILD:
                        return e.categoryInfo.guild.name;
                    case x.SoundboardSoundGridSectionType.DEFAULTS:
                        return E.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(e),
            position: "right",
            children: t => (function(e, t, n, l) {
                switch (e.categoryInfo.type) {
                    case x.SoundboardSoundGridSectionType.FAVORITES:
                        return (0, i.jsx)(S, {
                            ...l,
                            icon: h.default,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    case x.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return (0, i.jsx)(S, {
                            ...l,
                            icon: m.default,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    case x.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return (0, i.jsx)(S, {
                            ...l,
                            icon: r.AnalyticsIcon,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    case x.SoundboardSoundGridSectionType.GUILD:
                        return (0, i.jsx)(o.Clickable, {
                            ...l,
                            className: y.category,
                            onClick: t,
                            children: (0, i.jsx)(u.default, {
                                guild: e.categoryInfo.guild,
                                isSelected: n
                            })
                        }, e.key);
                    case x.SoundboardSoundGridSectionType.DEFAULTS:
                        return (0, i.jsx)(S, {
                            ...l,
                            icon: p.default,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    default:
                        return null
                }
            })(e, n, l, t)
        })
    }

    function T(e) {
        let {
            soundboardListRef: t,
            categories: n,
            listPadding: a = g
        } = e, s = l.useRef(null);
        return (0, i.jsx)(c.default, {
            className: y.categoryList,
            categoryListRef: s,
            expressionsListRef: t,
            store: d.SoundboardPickerStore,
            categories: n,
            listPadding: a,
            renderCategoryListItem: C,
            rowCount: n.length,
            categoryHeight: 40
        })
    }
}