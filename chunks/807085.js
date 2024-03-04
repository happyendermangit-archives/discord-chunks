function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("666038"),
        r = n("782340");
    i = class e extends s.default {
        static createFromServer(t) {
            return new e({
                id: t.id,
                liveBuildId: t.live_build_id,
                name: t.name
            })
        }
        getName(e) {
            return null != this.name ? this.name : this.id === e ? r.default.Messages.APPLICATION_BRANCH_NAME_MASTER : r.default.Messages.APPLICATION_BRANCH_NAME_UNKNOWN
        }
        constructor(e) {
            super(), this.id = e.id, this.liveBuildId = e.liveBuildId, this.name = e.name
        }
    }
}