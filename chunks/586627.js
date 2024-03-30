function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("224359"),
        l = n("73013"),
        c = n("217014"),
        f = n("365746"),
        d = n("708820"),
        _ = n("222875"),
        E = n("941504"),
        p = n("829307");

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var y = n("978538");

    function I(e) {
        var t = e.participant,
            n = e.width,
            o = e.noArt,
            I = e.selected,
            h = void 0 !== I && I,
            O = n < 195,
            T = (0, a.useStateFromStores)([l.default, c.default], function() {
                return l.default.getAllActiveStreams().some(function(e) {
                    return e.ownerId !== c.default.getId()
                })
            });
        return r.createElement("div", {
            className: i()(p.content, p.streamHidden, m({}, p.__invalid_small, O))
        }, r.createElement(_.default, {
            className: p.streamHiddenEmptyState,
            artURL: y,
            noArt: void 0 !== o && o,
            selected: h,
            size: (0, _.getSizeForWidth)(n),
            header: O ? null : E.default.Messages.STREAM_HIDDEN,
            description: h ? null : r.createElement("div", {
                className: i()(p.streamHiddenCTA, m({}, p.largePaddingTop, !O))
            }, r.createElement(d.CallTileCTA, {
                isSmall: O
            }, r.createElement(u.Text, {
                variant: O ? "text-sm/semibold" : "text-md/semibold",
                color: "none"
            }, n < 175 ? E.default.Messages.WATCH : E.default.Messages.WATCH_STREAM)), T ? r.createElement(d.CallTileCTA, {
                className: p.addCTA,
                tooltip: E.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                onClick: function(e) {
                    e.stopPropagation(), (0, s.watchStream)(t.stream, {
                        forceMultiple: !0
                    })
                },
                isSmall: O
            }, r.createElement(f.default, {
                className: p.addStreamIcon
            })) : null)
        }))
    }
}