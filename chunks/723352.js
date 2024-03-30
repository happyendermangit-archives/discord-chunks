function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isNotAutomodEmbed: function() {
            return r
        }
    });
    var i = n("470167");
    let r = e => {
        let {
            type: t
        } = e;
        return t !== i.MessageEmbedTypes.AUTO_MODERATION_MESSAGE && t !== i.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
    }
}