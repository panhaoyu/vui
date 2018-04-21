<template>
    <div
            :class="style"
            @click="click"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "vButton",
        props: ['color', 'href'],
        computed: {
            style: function () {
                let result = {local: true};
                result[this.color] = true;
                return result;
            }
        },
        methods: {
            click: function () {
                this.$emit('click');
                if (this.href) {
                    this.$router.push(this.href);
                }
            }
        }
    }
</script>

<style scoped>
    .local {
        font-size: 1.4rem;
        line-height: 2rem;
        width: 100%;
        text-align: center;
        border-radius: 0.5rem;
    }
</style>
