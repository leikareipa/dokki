/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 * A container with transitioned expansion/minimization on the vertical axis.
 *
 */

<template>
<div v-if="isExpanded"
     ref="container"
     class="dokki0-animated-expander">

    <slot/>
    
</div>
</template>

<style lang="scss">
.dokki0-animated-expander
{
    transition: height 0.15s ease;
    overflow: hidden;
}
</style>

<script>
export default {
    props: {
        startExpanded: {default: false},
    },
    data()
    {
        return {
            isExpanded: false,
            isTransitioning: false,

            // Count of images in the container for which no 'height' attribute
            // has been given. It's assumed that these images will change in
            // height as they load in.
            numDynamicImages: 0,
            numDynamicImagesLoaded: 0,
        }
    },
    mounted()
    {
        if (this.$props.startExpanded)
        {
            this.expand({animate: false});
        }
    },
    methods: {
        expansion_transition_finished()
        {
            if (this.numDynamicImagesLoaded != this.numDynamicImages) {
                return;
            }

            const el = this.$refs.container;

            this.$emit("expanded");
            this.isTransitioning = false;

            // Unset forced height to let the browser resize if needed.
            el.style.height = "unset";
        },
        minimization_transition_finished()
        {
            this.$emit("minimized");
            this.isTransitioning = false;
            this.isExpanded = false;
        },
        resize_to_contents()
        {
            const el = this.$refs.container;
            el.style.height = `${el.scrollHeight}px`;

            return el;
        },
        resize(height = 0)
        {
            const el = this.$refs.container;
            el.style.height = `${height}px`;

            return el;
        },
        expand({animate = true} = {})
        {
            /// Temporary kludge. Some of the transitions may break if the container
            /// has dynamic content (e.g. slowly-loading images) and the user triggers
            /// another transition while the old one is still going on. So let's just
            /// prevent triggering a new transition if the old one hasn't yet finished.
            if (this.isTransitioning)
            {
                return;
            }

            if (this.isExpanded)
            {
                return;
            }

            this.isExpanded = true;

            if (!animate)
            {
                this.$emit("expanded");
                return;
            }

            this.isTransitioning = true;
            this.$emit("transitioning");

            // Wait for the element's "v-if='isExpanded'" to take effect.
            this.$nextTick(()=>
            {
                const el = this.$refs.container;
                
                el.ontransitionend = undefined;
                el.style.height = "0";

                // Since any images in the container may not be fully loaded in when the
                // container is opened (due to network delay etc.), we want to attach
                // monitors to the image elements that update the container's height when
                // the images have finished loading to their full height.
                {
                    const childImgElements = this.$refs.container.getElementsByTagName("img");

                    this.numDynamicImages = 0;
                    this.numDynamicImagesLoaded = 0;

                    for (const img of childImgElements)
                    {
                        if (img.height !== undefined) {
                            continue;
                        }

                        this.numDynamicImages++;

                        img.addEventListener("load", ()=>
                        {
                            window.requestAnimationFrame(()=>
                            {
                                window.requestAnimationFrame(()=>
                                {
                                    this.numDynamicImagesLoaded++;
                                    this.resize_to_contents().ontransitionend = this.expansion_transition_finished;
                                });
                            });
                        });
                    }
                }

                // Wait for next frame, to allow the element style changes to update.
                window.requestAnimationFrame(()=>
                {
                    window.requestAnimationFrame(()=>
                    {
                        this.resize_to_contents();

                        // If the container has any images in it, we'll wait until those
                        // images have finished loading in (which alters their height)
                        // before declaring the transitioning complete. The images'
                        // event handlers will have been set up to do that automatically.
                        el.ontransitionend = (this.numDynamicImages? undefined : this.expansion_transition_finished);
                    });
                });
            });
        },
        minimize({animate = true} = {})
        {
            /// Temporary kludge. Some of the transitions may break if the container
            /// has dynamic content (e.g. slowly-loading images) and the user triggers
            /// another transition while the old one is still going on. So let's just
            /// prevent triggering a new transition if the old one hasn't yet finished.
            if (this.isTransitioning)
            {
                return;
            }

            if (!this.isExpanded)
            {
                return;
            }

            if (!animate)
            {
                this.isExpanded = false;
                this.$emit("minimized");
                return;
            }

            this.isTransitioning = true;
            this.$emit("transitioning");

            const el = this.$refs.container;

            // We expect that the container's 'height' style property is set to
            // "unset", so to be able to transition it to 0px (minimized state)
            // we want to assign the height property a numeric value (in effect,
            // its current height in pixels).
            this.resize_to_contents();

            // Wait for the next frame. If we don't wait, there's a bug where the
            // expander will minimize immediately without animating if told to
            // minimize just as the expansion animation is finishing. I'm not
            // sure why waiting fixes it, but hey.
            window.requestAnimationFrame(()=>
            {
                window.requestAnimationFrame(()=>
                {
                    el.style.height = "0";
                    el.ontransitionend = this.minimization_transition_finished;
                });
            });
        },
        // Minimize the container if it's currently expanded, and expand it if
        // it's currently minimized.
        toggle_expansion({animate = true} = {})
        {
            (this.isExpanded? this.minimize : this.expand)({animate});
        },
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
