<template>
  <div class="col" :style="styleObject">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "vCol",
    props: ['width',],
    computed: {
      styleObject: function () {
        return {
          flex: this.width ? this.width : 1
        }
      }
    }
  }
</script>

<style scoped>
  .col {
    display: flex;
    flex-flow: column nowrap;
    flex-basis: 0;
    flex-shrink: 0;
    margin-left: 0.5rem;
  }

  .col:nth-child(1){
    margin-left: 0;
  }
</style>
