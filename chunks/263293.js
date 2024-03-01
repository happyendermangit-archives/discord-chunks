function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, r = n("782340");
    i = class {
        announce(e, t, n) {
            this.announcer.announce(e, t, n)
        }
        announceDrag(e, t) {
            if (null == e) return;
            let n = this.getName(e, t);
            this.announce(r.default.Messages.DND_ITEM_PICKED_UP.format({
                itemName: n
            }))
        }
        announceHover(e, t) {
            null != e && this.announce(this.getName(e, t))
        }
        announceDrop() {
            this.announce(r.default.Messages.DND_ITEM_DROPPED)
        }
        announceCancel() {
            this.announce(r.default.Messages.DND_DRAG_CANCELED)
        }
        clear() {
            this.announcer.clearAnnouncements()
        }
        getName(e, t) {
            var n, i;
            return null !== (i = null !== (n = e.getAttribute("data-dnd-name")) && void 0 !== n ? n : e.getAttribute("aria-label")) && void 0 !== i ? i : t
        }
        constructor(e) {
            if (null != e) this.announcer = e;
            else {
                let e = n("750787");
                this.announcer = {
                    announce: e.announce,
                    clearAnnouncements: e.clearAnnouncer
                }
            }
        }
    }
}