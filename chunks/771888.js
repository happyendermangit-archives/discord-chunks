function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        GuildEventDetails: function() {
            return h
        },
        GuildEventStatus: function() {
            return D
        },
        default: function() {
            return _
        }
    });
    var n = r("470079"),
        a = r("803997"),
        u = r.n(a),
        l = r("898511"),
        i = r("784184"),
        c = r("957808"),
        o = r("634147"),
        s = r("830567"),
        d = r("89536"),
        f = r("592741"),
        E = r("622647"),
        m = r("621404"),
        v = r("556403"),
        g = r("888447"),
        p = r("551597"),
        T = r("747081"),
        b = r("190510"),
        O = r("941504"),
        S = r("328481");

    function y(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }

    function N(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                y(e, t, r[t])
            })
        }
        return e
    }

    function D(e) {
        var t = e.className,
            r = e.creator,
            a = e.guildId,
            p = e.isNew,
            T = e.isHub,
            y = e.guildEventId,
            D = e.eventPreview,
            h = e.recurrenceId,
            _ = (0, l.useStateFromStores)([d.default], function() {
                return d.default.getGuildScheduledEvent(y)
            }),
            w = (0, m.default)(a, y, h),
            I = null != _ ? _ : D,
            P = (0, l.useStateFromStores)([c.default], function() {
                return c.default.getNick(a, null == r ? void 0 : r.id)
            }, [a, r]);
        h = null == I || null != h ? h : (0, g.getNextRecurrenceIdInEvent)(I);
        var C = (0, E.default)(y, h, D).startTime,
            R = (0, f.default)(h, y),
            A = (null == I ? void 0 : I.scheduled_start_time) != null ? (0, g.getRecurrenceStatus)(R, C, new Date(I.scheduled_start_time)) : null;
        if (null == I) return null;
        var j = I.entity_type,
            L = I.status,
            x = I.recurrence_rule;
        return n.createElement("div", {
            className: u()(S.statusContainer, t)
        }, n.createElement(b.GuildEventTimeStatus, {
            startTime: C.toISOString(),
            status: null != A ? A : L,
            eventType: j,
            isNew: p,
            recurrenceRule: (0, v.recurrenceRuleFromServer)(x),
            guildEventId: y,
            recurrenceId: h
        }), n.createElement("div", {
            className: S.spacer
        }), !(void 0 !== T && T) && null != r && n.createElement(i.Tooltip, {
            text: O.default.Messages.GUILD_EVENT_CREATED_BY.format({
                username: null != P ? P : s.default.getName(r)
            })
        }, function(e) {
            var t, u;
            return n.createElement(i.Avatar, (t = N({}, e), u = (u = {
                src: r.getAvatarURL(a, 20),
                size: i.AvatarSizes.SIZE_20,
                "aria-label": null != P ? P : r.username,
                className: S.creator
            }, u), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            })(Object(u)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(u, e))
            }), t))
        }), n.createElement(i.Tooltip, {
            text: O.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                count: w
            })
        }, function(e) {
            return n.createElement("div", N({
                className: S.rsvpCount
            }, e), n.createElement(o.default, {
                width: 12,
                height: 12,
                className: S.rsvpIcon
            }), n.createElement(i.Text, {
                color: "header-secondary",
                variant: "text-sm/normal"
            }, w))
        }))
    }

    function h(e) {
        var t = e.headerVariant,
            r = e.descriptionClassName,
            a = e.name,
            l = e.description,
            c = e.truncate,
            o = e.guildId,
            s = e.imageSource;
        return n.createElement("div", {
            className: u()(y({}, S.withThumbnail, null != s))
        }, n.createElement("div", {
            className: u()(y({}, S.descriptionWithThumbnail, null != s))
        }, n.createElement(i.Heading, {
            variant: void 0 === t ? "heading-lg/medium" : t,
            selectable: !0,
            className: S.eventName
        }, a), null != l && n.createElement(p.default, {
            description: l,
            className: u()(r, S.description),
            truncate: c,
            guildId: o
        })), null != s && n.createElement("div", {
            className: S.thumbnailContainer
        }, n.createElement(T.default, {
            source: s,
            className: S.thumbnail
        })))
    }

    function _(e) {
        var t = e.headerVariant,
            r = e.descriptionClassName,
            a = e.creator,
            u = e.name,
            l = e.description,
            i = e.imageSource,
            c = e.isHub,
            o = e.truncate,
            s = e.guildId,
            d = e.isNew,
            f = e.guildEventId,
            E = e.eventPreview,
            m = e.recurrenceId;
        return n.createElement("div", {
            className: S.container
        }, n.createElement(D, {
            className: S.eventInfoStatusContainer,
            creator: a,
            guildId: s,
            isHub: void 0 !== c && c,
            isNew: d,
            guildEventId: f,
            eventPreview: E,
            recurrenceId: m
        }), n.createElement(h, {
            name: u,
            description: l,
            headerVariant: t,
            descriptionClassName: r,
            truncate: o,
            guildId: s,
            imageSource: i
        }))
    }
}