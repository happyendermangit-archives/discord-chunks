function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("118133"),
        u = n("974052"),
        s = n("634147"),
        l = n("867197"),
        c = n("941504"),
        f = n("297430");

    function d(e) {
        var t = e.className,
            n = e.isVertical;
        return r.createElement("div", {
            className: f.iconContainer
        }, r.createElement(u.default, {
            className: i()(n ? f.upCaret : f.leftCaret, t)
        }), r.createElement(s.default, {
            className: i()(f.members, t)
        }))
    }

    function _(e) {
        var t = e.className,
            n = e.isVertical;
        return r.createElement("div", {
            className: f.iconContainer
        }, r.createElement(u.default, {
            className: i()(n ? f.downCaret : f.rightCaret, t)
        }), n && r.createElement(s.default, {
            className: i()(f.members, t)
        }))
    }

    function E(e) {
        var t = e.channelId,
            n = e.className,
            o = e.isParticipantsOpen,
            u = e.isVertical,
            s = void 0 !== u && u,
            E = e.hideTooltip,
            p = r.useCallback(function(e) {
                var t = e.className;
                return o ? r.createElement(_, {
                    className: t,
                    isVertical: s
                }) : r.createElement(d, {
                    className: t,
                    isVertical: s
                })
            }, [o, s]);
        return r.createElement(l.default, {
            label: o ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
            className: i()(f.participantsButton, n),
            onClick: function() {
                a.default.toggleParticipants(t, !o)
            },
            iconComponent: p,
            shouldShowTooltip: !(void 0 !== E && E)
        })
    }
}