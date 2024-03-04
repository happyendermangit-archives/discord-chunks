function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isNotAutomodEmbed: function() {
            return s
        }
    });
    var i = n("246111");
    let s = e => {
        let {
            type: t
        } = e;
        return t !== i.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && t !== i.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
    }
}