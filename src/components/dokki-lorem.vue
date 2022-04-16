/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p>
        {{lorem}}
    </p>
</template>

<script>
export default {
    mounted() {
        this.lorem = this.paragraphs[this.$store.state.loremCount % this.paragraphs.length];
        this.$store.commit("increment_lorem_count");
    },
    data() {
        return {
            lorem: "",
            paragraphs: [
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus sagittis urna,
                    non egestas felis. Ut mollis, quam at aliquam sagittis, magna purus consequat mi, vitae
                    gravida est nunc non neque. Quisque sit amet quam ac est hendrerit sagittis. Curabitur
                    id volutpat mauris.`,

                `Vivamus quis fermentum nisi, vitae auctor elit. Suspendisse ut massa scelerisque, efficitur
                    diam non, convallis nulla. Nunc viverra ex semper, scelerisque enim nec, egestas quam. Ut
                    vitae porta erat. Vivamus ac dictum odio. Donec magna justo, cursus eu vestibulum consectetur,
                    fringilla ac magna.`,

                `Aliquam sodales mi at erat ultrices faucibus. Curabitur non arcu diam. Sed et lacus
                    risus. Nam risus nisi, fermentum eget sapien lacinia, rhoncus luctus metus. Fusce tincidunt
                    efficitur ex a rhoncus. Aliquam lobortis lorem augue, at sollicitudin justo pretium vel.
                    Ut mattis nibh in finibus rhoncus.`,

                `Maecenas aliquam lorem ac pharetra egestas. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Quisque hendrerit suscipit nibh et accumsan. Integer ipsum tellus,
                    sollicitudin at est non, pulvinar dapibus erat. Cras rhoncus lobortis nunc vitae bibendum.
                    Ut dictum nisi quis nibh finibus, euismod vulputate ipsum facilisis. Pellentesque congue,
                    felis eu consequat molestie, est nibh vehicula eros, ac consectetur tortor nisi ac justo.`,

                `Suspendisse fringilla, purus non ornare imperdiet, turpis est blandit felis, sit amet
                    ultricies urna lorem vitae erat. Cras nec ipsum vitae felis scelerisque malesuada id
                    sollicitudin mauris. Nunc hendrerit laoreet odio. Aliquam facilisis nisi eget aliquam
                    gravida. Sed ut velit bibendum arcu varius maximus.`,
            ],
        }
    },
}
</script>

<api-reference>
    <p>
        Provides a generator of placeholder text.
    </p>

    <p>
        Each instance of this element produces one paragraph of lorem ipsum.
    </p>

    <h2>Sample</h2>

        <dokki-lorem>
        </dokki-lorem>

    <h2>Markup</h2>

        <dokki-code headerless code="
            <dokki-lorem>
            </dokki-lorem>
            ">
        </dokki-code>
</api-reference>
