function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var l = n("37983"),
        i = n("884691"),
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
        E = n("389480"),
        g = n("782340"),
        C = n("108886");
    let S = [8, 8, 8, 8];

    function T(e) {
        let {
            icon: t,
            isSelected: n,
            onClick: i,
            ...a
        } = e;
        return (0, l.jsx)(o.Clickable, {
            ...a,
            onClick: i,
            className: s(C.categoryIcon, {
                [C.selected]: n
            }),
            children: (0, l.jsx)(t, {
                className: C.categoryIconIcon
            })
        })
    }

    function v(e, t, n, i) {
        return (0, l.jsx)(o.Tooltip, {
            text: function(e) {
                switch (e.categoryInfo.type) {
                    case E.SoundboardSoundGridSectionType.FAVORITES:
                        return g.default.Messages.FAVORITES;
                    case E.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return g.default.Messages.RECENTLY_HEARD;
                    case E.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return g.default.Messages.FREQUENTLY_USED;
                    case E.SoundboardSoundGridSectionType.GUILD:
                        return (0, l.jsx)(f.GuildTooltipText, {
                            guild: e.categoryInfo.guild,
                            includeActivity: !1
                        });
                    case E.SoundboardSoundGridSectionType.DEFAULTS:
                        return g.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(e),
            "aria-label": function(e) {
                switch (e.categoryInfo.type) {
                    case E.SoundboardSoundGridSectionType.FAVORITES:
                        return g.default.Messages.FAVORITES;
                    case E.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return g.default.Messages.RECENTLY_HEARD;
                    case E.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return g.default.Messages.FREQUENTLY_USED;
                    case E.SoundboardSoundGridSectionType.GUILD:
                        return e.categoryInfo.guild.name;
                    case E.SoundboardSoundGridSectionType.DEFAULTS:
                        return g.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                }
            }(e),
            position: "right",
            children: t => (function(e, t, n, i) {
                switch (e.categoryInfo.type) {
                    case E.SoundboardSoundGridSectionType.FAVORITES:
                        return (0, l.jsx)(T, {
                            ...i,
                            icon: h.default,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    case E.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return (0, l.jsx)(T, {
                            ...i,
                            icon: m.default,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    case E.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return (0, l.jsx)(T, {
                            ...i,
                            icon: r.AnalyticsIcon,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    case E.SoundboardSoundGridSectionType.GUILD:
                        return (0, l.jsx)(o.Clickable, {
                            ...i,
                            className: C.category,
                            onClick: t,
                            children: (0, l.jsx)(u.default, {
                                guild: e.categoryInfo.guild,
                                isSelected: n
                            })
                        }, e.key);
                    case E.SoundboardSoundGridSectionType.DEFAULTS:
                        return (0, l.jsx)(T, {
                            ...i,
                            icon: p.default,
                            onClick: t,
                            isSelected: n
                        }, e.key);
                    default:
                        return null
                }
            })(e, n, i, t)
        })
    }

    function I(e) {
        let {
            soundboardListRef: t,
            categories: n,
            listPadding: a = S
        } = e, s = i.useRef(null);
        return (0, l.jsx)(c.default, {
            className: C.categoryList,
            categoryListRef: s,
            expressionsListRef: t,
            store: d.SoundboardPickerStore,
            categories: n,
            listPadding: a,
            renderCategoryListItem: v,
            rowCount: n.length,
            categoryHeight: 40
        })
    }
}