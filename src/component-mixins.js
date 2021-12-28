/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

// For embedded components whose contents can be expanded/shrunk by the user.
// This mixin adds the 'expanded' prop, which when appended to the component,
// will hava the component's contents start in an expanded state.
export const expandedPropMixin = {
    props: {
        expanded: {default: undefined},
    },
    data()
    {
        return {
            isExpanded: ((this.$props.expanded === undefined)? false : true),
        }
    },
};

// For embedded components. This mixin adds the 'headerless' prop, which when
// appended to the component, will prevent the embedded component's header
// element from being displayed.
export const headerlessPropMixin = {
    props: {
        headerless: {default: undefined},
    },
    data()
    {
        return {
            isHeaderless: ((this.$props.headerless === undefined)? false : true),
        }
    },
};

// For topics and sub-topics.
export const topicAnchorIdMixin = {
    props: {
        id: {default: undefined},
    },
    data() {
        return {
            anchorableId: {type: String, default: undefined},
        }
    },
    computed: {
        anchor_id()
        {
            console.assert(typeof this.anchorableId == "string");
            return (this.id || this.anchorableId);
        }
    },
};
